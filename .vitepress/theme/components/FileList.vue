<script setup>
    import { data as files } from "../data/files.data.mjs";
</script>

<template>
 <div class="markdown-loader">
    <ul>
      <li v-for="file in files" :key="file.url">
        <a :href="file.url">
            {{ file.url }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.markdown-loader {
  padding: 16px;
}
.markdown-loader h1 {
  font-size: 1.5em;
  margin-bottom: 16px;
}
.markdown-loader ul {
  list-style-type: none;
  padding: 0;
}
.markdown-loader li {
  margin-bottom: 8px;
}
.markdown-loader a {
  color: #42b983;
  text-decoration: none;
}
.markdown-loader a:hover {
  text-decoration: underline;
}
</style>