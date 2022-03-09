export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomeView.vue"),
    meta: {
      label: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/AboutView.vue"),
    meta: {
      label: "About",
    },
  },
];

declare module "vue-router" {
  interface RouteMeta {
    label: string;
  }
}
