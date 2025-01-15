const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

async function getAllFiles(dir, fileList = []) {
    const files = await fs.readdir(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        
        if (stat.isDirectory()) {
            // Recursively process subdirectories
            await getAllFiles(filePath, fileList);
        } else if (file.endsWith('.md')) {
            // Only process markdown files
            fileList.push(filePath);
        }
    }
    
    return fileList;
}

async function processMarkdownFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(content);
    
    return {
        path: filePath.replace(/\\/g, '/'),  // Normalize path for URLs
        title: data.title || path.basename(filePath, '.md'),
        content: markdownContent,
        metadata: data,
        lastModified: new Date().toISOString()
    };
}

async function build() {
    try {
        // Create the public directory if it doesn't exist
        await fs.mkdir('public', { recursive: true });
        
        // Get all markdown files
        const files = await getAllFiles('.');
        const markdownFiles = files.filter(file => 
            !file.includes('node_modules') && 
            !file.includes('.git') &&
            file.endsWith('.md')
        );
        
        // Process each markdown file
        const processedFiles = await Promise.all(
            markdownFiles.map(processMarkdownFile)
        );
        
        // Create index of all files
        const index = processedFiles.map(({ path, title, metadata }) => ({
            path,
            title,
            metadata
        }));
        
        // Write index file
        await fs.writeFile(
            'public/index.json',
            JSON.stringify({ files: index }, null, 2)
        );
        
        // Write individual file contents
        for (const file of processedFiles) {
            const outputPath = `public/${file.path.replace('.md', '.json')}`;
            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(
                outputPath,
                JSON.stringify(file, null, 2)
            );
        }
        
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();