<script setup lang="ts">
import { TabStateKey } from "@/store";
import { inject } from "vue";
import { RouterLink, useRouter } from "vue-router";

const tabState = inject(TabStateKey);

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-start space-y-4">
    <h1>This is the about page!</h1>
    <button
      @click="router.back"
      class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
    >
      Go back to the home page
    </button>
  </div>
</template>
