import { defineConfig } from "vitepress";
import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

async function getAllFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await getAllFiles(filePath, fileList);
    } else if (file.endsWith(".md")) {
      // Only process markdown files
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function processMarkdownFile(filePath) {
  const content = await fs.readFile(filePath, "utf-8");
  const { data, content: markdownContent } = matter(content);

  return {
    path: filePath.replace(/\\/g, "/"), // Normalize path for URLs
    title: data.title || path.basename(filePath, ".md"),
    content: markdownContent,
    metadata: data,
    lastModified: new Date().toISOString(),
  };
}

function transformPath(absolutePath) {
  // Get the root directory (parent of the file/directory)
  const rootPath = path.dirname(path.dirname(absolutePath));

  // Get the relative path from root
  const relativePath = path.relative(rootPath, absolutePath);

  // Split the path into segments
  const segments = relativePath.split(path.sep);

  // Get the filename and convert .md to .html
  const filename = path.basename(absolutePath);
  const htmlFilename = filename.replace(".md", ".html");

  // Get the filename without extension
  const baseFilename = path.basename(filename, ".md");

  // Check if the file has its own directory
  const hasOwnDirectory = segments.slice(0, -1).includes(baseFilename);

  // If it has its own directory, return with directory
  if (hasOwnDirectory) {
    return `/${baseFilename}/${htmlFilename}`;
  }

  // Otherwise just return the filename
  return `/${htmlFilename}`;
}

const getMarkdownLinks = async () => {
  // Get all markdown files
  const files = await getAllFiles(path.resolve("."));
  const markdownFiles = files.filter(
    (file) =>
      !file.includes("node_modules") &&
      !file.includes(".git") &&
      file.endsWith(".md")
  );

  // Process each markdown file
  const processedFiles = await Promise.all(
    markdownFiles.map(processMarkdownFile)
  );

  // Create index of all files
  const index = processedFiles.map(({ path, title, metadata }) => ({
    path: transformPath(path),
    title,
    metadata,
  }));
  return index.map((i) => {
    return {
      text: i.title,
      link: `${i.path}`,
    };
  }).filter((i) => {
    return i.text !== "index" && i.text !== "readme";
  })
};

// https://vitepress.dev/reference/site-config
export default defineConfig(async () => {
  const markdownLinks = await getMarkdownLinks();

  return {
    title: "Learning Notes - Md Atiquzzaman Soikat",
    description: "Learning notes collection by Md Atiquzzaman Soikat",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [{ text: "Home", link: "/" }],
      sidebarAlwaysVisible: true,
      sidebar: [
        {
          text: "Notes",
          items: markdownLinks,
        },
      ],
    },
  };
});
