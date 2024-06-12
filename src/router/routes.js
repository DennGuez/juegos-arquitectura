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
        path: "hospedaje", component: () => import("pages/hospedajes/HospedajePage.vue"),

      },
      {
        path: "hoteles", component: () => import("pages/hospedajes/HotelesPage.vue")
      }
      ,
      {
        path: "eden", component: () => import("pages/hospedajes/HotelEden.vue")
      },
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
