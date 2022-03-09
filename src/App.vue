<script setup lang="ts">
import { onMounted } from "vue";
import { addNewTab, closeTab, selectTab, state } from "./store";

onMounted(() => {
  addNewTab();
  state.currentTabId = state.tabs[0].id;
});
</script>

<template>
  <nav class="bg-slate-300 text-slate-800">
    <ul class="flex px-6 pt-1">
      <li
        :class="[
          'overflow-hidden select-none whitespace-nowrap group text-sm flex justify-between items-center rounded-t-lg px-2 py-1 transition-colors cursor-pointer',
          state.currentTabId == tab.id
            ? 'border-t-2 bg-slate-500 border-slate-600 text-slate-100'
            : ' hover:bg-slate-400',
        ]"
        @click="selectTab(tab)"
        v-for="tab in state.tabs"
        :key="tab.id"
      >
        <span class="truncate w-[12rem]">
          {{ tab.title }}
        </span>
        <div class="ml-[0.2rem]">
          <button
            @click.stop="closeTab(tab)"
            :class="[
              'p-1 rounded-full transition-all cursor-pointer',
              state.currentTabId == tab.id
                ? 'opacity-100 hover:bg-slate-400'
                : 'opacity-0 group-hover:opacity-100 hover:bg-slate-300',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </li>
      <button
        class="self-center ml-2 p-1 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        @click="addNewTab()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </ul>
  </nav>
  <div class="p-6 overflow-y-auto">
    <template v-for="tab in state.tabs" :key="tab.id">
      <main
        v-show="state.currentTabId == tab.id"
        :id="`tab-${tab.id}`"
        class="bg-white rounded-md p-6 flex-1"
      ></main>
    </template>
  </div>
</template>
