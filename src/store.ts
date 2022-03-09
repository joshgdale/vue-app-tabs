import {
  computed,
  createApp,
  nextTick,
  reactive,
  type InjectionKey,
} from "vue";
import type { IState, ITab, ITabState } from "./interfaces";
import dayjs from "dayjs";
import TabShell from "./components/TabShell.vue";
import {
  createMemoryHistory,
  createRouter,
  type RouteLocationRaw,
} from "vue-router";
import { routes } from "./routes";

export const TabStateKey = Symbol() as InjectionKey<ITabState>;

export let state: IState = reactive({
  showBackButton: false,
  currentTabId: "",
  tabs: [],
});

export function addNewTab(route: RouteLocationRaw = { path: "/" }) {
  let tabId = dayjs().valueOf().toString();
  const newTabRouter = createRouter({
    history: createMemoryHistory(),
    routes: routes,
  });
  let tabOptions = {
    id: tabId,
  };

  let newTabApp = createApp(TabShell, tabOptions);
  newTabApp.use(newTabRouter);

  let newTab = {
    id: tabId,
    title: "",
    app: newTabApp,
    showBackButton: false,
  };

  state.tabs.push(newTab);
  nextTick(() => {
    newTabApp.mount(`#tab-${tabId}`);
    newTabRouter.push(route);
    selectTab(newTab);
  });

  return newTab;
}

export function selectTab(tab: ITab) {
  state.currentTabId = tab.id;
}

export function closeTab(tab: ITab) {
  if (state.currentTabId == tab.id) {
    if (state.tabs.length == 1) {
      let newTab = addNewTab();
      selectTab(newTab);
    } else {
      let currentIdx = state.tabs.findIndex((t) => t.id == tab.id);
      let newIdx = currentIdx == 0 ? currentIdx + 1 : currentIdx - 1;
      selectTab(state.tabs[newIdx]);
    }
  }
  state.tabs = state.tabs.filter((t) => t.id != tab.id);
  tab.app.unmount();
}

export function updateTabTitle(tabId: string, title: string) {
  let tab = state.tabs.find((t) => t.id == tabId);
  if (!tab) return;
  tab.title = title;
}

// TODO: Accept parameters //
export function openInNewTab(route: RouteLocationRaw) {
  addNewTab(route);
}
