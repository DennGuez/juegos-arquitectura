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
      { path: "hospedaje", component: () => import("pages/HospedajePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
