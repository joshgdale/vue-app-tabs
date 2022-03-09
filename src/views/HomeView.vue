<script setup lang="ts">
import { inject, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { state, TabStateKey, openInNewTab } from "@/store";
const tabState = inject(TabStateKey);

function openAboutInNewTab() {
  openInNewTab("/about");
}
</script>
<template>
  <div class="flex flex-col items-start space-y-4">
    <h1>This is the home view!</h1>
    <span class="rounded-lg px-2 py-1 bg-gray-600 text-gray-50"
      >Tab ID: {{ tabState?.id }}</span
    >
    <RouterLink
      to="/about"
      class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
      >Go to about page</RouterLink
    >
    <button
      @click="openAboutInNewTab"
      class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
    >
      Open about page in a new tab
    </button>
  </div>
</template>
