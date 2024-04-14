import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

import markdownItVideo from "markdown-it-video";

import langES from "./langs/es";
import langEN from "./langs/en";
import langPT from "./langs/pt";

export default withPwa(
  defineConfig({
    outDir: "../dist",
    title: "PokéBedrock Helpdesk",
    description:
      "PokeBedrock is a popular Minecraft: Bedrock Edition server with a diverse development team, offering an innovative, engaging gaming experience to a large and growing international community.",
    lang: "en-US",
    cleanUrls: true,
    sitemap: {
      hostname: "https://pokebedrock.netlify.app",
      lastmodDateOnly: true,
    },
    pwa: {
      pwaAssets: {
        preset: "minimal-2023",
        image: "./assets/logo.svg",
      },
      useCredentials: true,
      strategies: "generateSW",
      workbox: {
        cacheId: "pokebedrock-helpdesk",
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname === "localhost",
            handler: "NetworkFirst",
            options: {
              cacheName: "app-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 10,
              },
            },
          },
        ]
      },
      injectRegister: "auto",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon-180x180.png",
        "maskable-icon-512x512.png",
      ],
      manifest: {
        edge_side_panel: {
          preferred_width: 480,
        },
        start_url: "/en/",
        name: "PokéBedrock Helpdesk",
        short_name: "Helpdesk",
        description: "Mine",
        theme_color: "#f93154",
        icons: [
          {
            src: "/assets/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
    markdown: {
      config: (md) => {
        md.use(markdownItVideo);
      },
      image: {
        lazyLoading: true,
      },
    },
    locales: {
      root: {
        label: "English",
        lang: "en",
        link: "/en/",
      },
      pt: {
        label: "Portuguese",
        lang: "pt",
        link: "/pt/",
      },
      es: {
        label: "Spanish",
        lang: "es",
        link: "/es/",
      },
    },
    appearance: "force-dark",
    themeConfig: {
      logo: "./assets/logo.svg",
      externalLinkIcon: true,
      i18nRouting: true,
      editLink: {
        pattern: ({ filePath }) =>
          `https://github.com/pokebedrock/helpdesk/edit/main/docs/${filePath}`,
      },
      footer: {
        message:
          "PokéBedrock and its services are not endorsed by or affiliated with Minecraft, Mojang, Nintendo or Microsoft.",
        copyright:
          'Copyright © 2023-2024 <a href="https://pokebedrock.com">PokéBedrock</a>',
      },
      nav: [
        { text: "Home", link: "https://pokebedrock.com" },
        { text: "Store", link: "https://pokebedrock.com/shop" },
      ],
      search: {
        provider: "local",
        options: {
          locales: {
            es: {
              translations: {
                button: {
                  buttonText: "Buscar",
                },
              },
            },
          },
        },
      },
      sidebar: {
        "/es/": langES.sidebar,
        "/en/": langEN.sidebar,
        "/pt/": langPT.sidebar,
      },
      socialLinks: [
        {
          icon: "discord",
          ariaLabel: "Discord",
          link: "https://discord.pokebedrock.com",
        },
        {
          icon: "twitter",
          ariaLabel: "twitter",
          link: "https://twitter.com/pokebedrock",
        },
        {
          icon: "github",
          ariaLabel: "Github",
          link: "https://github.com/pokebedrock",
        },
      ],
    },
    lastUpdated: true,
  })
);
