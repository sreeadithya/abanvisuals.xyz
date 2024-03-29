// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: false },
  ssr: false,
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            spaceMono: "Sora",
            monument: "Monument",
          },
          boxShadow: {
            "3xl": "10px 9px 400px 200px rgba(0,0,0,0.83)",
          },
        },
      },
    },
  },
  plugins: [{ src: `plugins/vimeo-player` }],
  build: {
    vendor: ["vue-vimeo-player"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Aban's Portfolio",
      ogTitle: "Aban's Portfolio",
      description: "Edit Portfolio + Links",
      ogDescription: "Edit Portfolio + Links",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      ogImage: "/public/share.jpg",
      script: [
        {
          src: "https://cdn.counter.dev/script.js",
          "data-id": "0521abe9-1964-4911-b18c-f0500433630f",
        },
      ],
    },
  },
};
