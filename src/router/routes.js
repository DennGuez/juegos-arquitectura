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
      {
        path: "/hospedajes",
        name: "hospedajes",
        component: () => import("layouts/HospedajesLayout.vue"),
        // redirect: "hospedajes-index",
        children: [
          {
            path: "",
            // name: "hospedajes-index",
            component: () => import("pages/hospedajes/hospedajesPage.vue"),
          },
          {
            path: "hoteles",
            name: "hoteles",
            component: () => import("pages/hospedajes/hotelesPage.vue"),
          },
          {
            path: "eden",
            name: "eden",
            component: () => import("pages/hospedajes/edenPage.vue"),
          },
          {
            path: "edenubi",
            name: "edenubi",
            component: () => import("pages/hospedajes/edenUbiPage.vue"),
          },
        ],
      },
      {
        path: "/comidas",
        name: "comidas",
        component: () => import("layouts/comidasLayout.vue"),
        // redirect: "hospedajes-index",
        children: [
          {
            path: "",
            // name: "comidas",
            component: () => import("pages/comidas/comidasPage.vue"),
          },
          {
            path: "restaurantes",
            name: "restaurantes",
            component: () => import("pages/comidas/restaurantesPage.vue"),
          },
          {
            path: "nayjama",
            name: "nayjama",
            component: () => import("pages/comidas/nayjamaPage.vue"),
          },
          {
            path: "nayjamaubi",
            name: "nayjamaubi",
            component: () => import("pages/comidas/nayjamaUbiPage.vue"),
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
