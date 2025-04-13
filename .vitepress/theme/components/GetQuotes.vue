<script setup>
import { ref, onMounted, computed } from "vue";

const quotes = ref([]);
const currentQuote = computed(() => {
  const randomNumber = Math.round(Math.random() * (quotes.value.length - 1));
  return quotes.value.length > 0
    ? quotes.value[randomNumber]
    : {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
      };
});

const URL = "https://gist.githubusercontent.com/azs06/b594099fd7bb0e7b8a57cbe4131a0d8b/raw/b113128759a53f78233491ffdca14e678de56b93/data.json";

const fetchQuotes = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data?.data;
};

onMounted(async () => {
  quotes.value = await fetchQuotes();
});
</script>

<template>
  <div class="quote-container">
    <blockquote class="quote">
      <Transition name="fade" mode="out-in">
        <p class="quote-text" :key="currentQuote.quote">
          <span v-html="currentQuote.quote"></span>
        </p>
      </Transition>
      <footer class="quote-author">
        — <cite>{{ currentQuote.author }}</cite>
      </footer>
    </blockquote>
  </div>
</template>

<style scoped>
.quote-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.quote {
  background: #f8f9fa;
  border-left: 4px solid #6c757d;
  border-radius: 4px;
  padding: 2rem;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quote-text {
  font-size: 1.5rem;
  line-height: 1 .6;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-style: italic;
}

.quote-author {
  font-size: 1rem;
  color: #6c757d;
  text-align: right;
}

.quote-author cite {
  font-style: normal;
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .quote-container {
    padding: 1rem;
  }

  .quote {
    padding: 1.5rem;
  }

  .quote-text {
    font-size: 1.25rem;
  }
}
</style>