import type { App } from "vue";

export interface ITab {
  id: string;
  title: string;
  app: App;
}

export interface IState {
  currentTabId: string;
  tabs: ITab[];
  showBackButton: boolean;
}
export interface ITabState {
  id: string;
}
