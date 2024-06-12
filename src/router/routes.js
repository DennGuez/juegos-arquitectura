const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "fixture", component: () => import("pages/FixturePage.vue") },
      {
        path: "juegoscurso",
        component: () => import("pages/JuegosCursoPage.vue"),
      },
      {
        path: "hospedaje",
        component: () => import("pages/HospedajePage.vue"),
      },
      {
        path: "/ganadores",
        name: "ganadores",
        component: () => import("layouts/GanadoresLayout.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/ganadores/GanadoresPage.vue"),
          },
          {
            path: "ganador",
            name: "ganador",
            component: () => import("pages/ganadores/GanadorPage.vue"),
          },
        ],
      },
    ],
  },
  { path: "/login", component: () => import("pages/LoginPage.vue") },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
