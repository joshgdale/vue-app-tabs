<script setup lang="ts">
import { state, TabStateKey, updateTabTitle } from "@/store";
import { provide, watchEffect, watch, computed, onMounted } from "vue";
import { RouterView, useRoute, useRouter, type Router } from "vue-router";

const props = defineProps<{
  id: string;
}>();

provide(TabStateKey, props);
const router = useRouter();

watch(router.currentRoute, () => {
  if (!router.currentRoute.value.meta.label) return;
  updateTabTitle(props.id, router.currentRoute.value.meta.label);
});
</script>

<template>
  <RouterView></RouterView>
</template>
