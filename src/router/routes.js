const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/fixture-menu",
        name: "fixture-menu",
        component: () =>
          import("src/pages/fixture-resultados/FixtureMenuPage.vue"),
      },
      {
        path: "/juegos-curso",
        name: "juegos-curso",
        component: () => import("layouts/JuegosCursoLayout.vue"),
        redirect: { name: "juegos-curso.home" },
        children: [
          {
            path: "juegos-curso/home",
            name: "juegos-curso.home",
            component: () => import("pages/juegos-curso/JuegosCursoPage.vue"),
          },
          {
            path: "juego-curso",
            name: "juego-curso",
            component: () => import("pages/juegos-curso/JuegoCursoPage.vue"),
          },
          {
            path: "juego-curso/ubicacion",
            name: "juego-curso.ubicacion",
            component: () =>
              import("pages/juegos-curso/JuegoCursoUbicacionPage.vue"),
          },
        ],
      },
      {
        path: "/ganadores",
        name: "ganadores",
        component: () => import("layouts/GanadoresLayout.vue"),
        children: [
          {
            path: "",
            name: "ganadores",
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
        path: "/eventos-especiales",
        name: "eventos-especiales",
        component: () => import("layouts/EventosEspecialesLayout.vue"),
        redirect: { name: "eventos-especiales.home" },
        children: [
          {
            path: "eventos-especiales/home",
            name: "eventos-especiales.home",
            component: () =>
              import("pages/eventos-especiales/EventosEspecialesPage.vue"),
          },
          {
            path: "evento-especial",
            name: "evento-especial",
            component: () =>
              import("pages/eventos-especiales/EventoEspecialPage.vue"),
          },
          {
            path: "evento-especial-ubicacion",
            name: "evento-especial-ubicacion",
            component: () =>
              import("pages/eventos-especiales/EventoUbicacionPage.vue"),
          },
        ],
      },
      {
        path: "/lugares-turisticos",
        name: "lugares-turisticos",
        component: () => import("layouts/LugaresTuristicosLayout.vue"),
        redirect: { name: "lugares-turisticos.home" },
        children: [
          {
            path: "lugares-turisticos/home",
            name: "lugares-turisticos.home",
            component: () =>
              import("pages/lugares-turisticos/LugaresTuristicosPage.vue"),
          },
          {
            path: "lugar-turistico",
            name: "lugar-turistico",
            component: () =>
              import("pages/lugares-turisticos/LugarTuristicoPage.vue"),
          },
          {
            path: "lugar-turistico-ubicacion",
            name: "lugar-turistico-ubicacion",
            component: () =>
              import("pages/lugares-turisticos/LugarTuristicoUbicacion.vue"),
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
            component: () => import("pages/hospedajes/HotelesPage.vue"),
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
      {
        path: "/contactos",
        name: "contactos",
        component: () => import("layouts/contactosLayout.vue"),
        // redirect: "hospedajes-index",
        children: [
          {
            path: "",
            // name: "comidas",
            component: () => import("pages/contactos/contactosPage.vue"),
          },
          {
            path: "responsable",
            name: "responsable",
            component: () => import("pages/contactos/responsablePage.vue"),
          },
          // {
          //   path: "nayjama",
          //   name: "nayjama",
          //   component: () => import("pages/comidas/nayjamaPage.vue"),
          // },
          // {
          //   path: "nayjamaubi",
          //   name: "nayjamaubi",
          //   component: () => import("pages/comidas/nayjamaUbiPage.vue"),
          // },
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
