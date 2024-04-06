import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

import markdownItVideo from 'markdown-it-video'

export default withPwa(
  defineConfig({
    outDir: '../dist',
    title: "Pokébedrock Helpdesk",
    lang: 'en-US',
    // sitemap: {
    //   hostname: "support.pokebedrock.com",
    //   lastmodDateOnly: false,
    //   transformItems: (items) => {
    //     items.push({
    //       url: "/extra-page",
    //       changefreq: "monthly",
    //       priority: 0.8,
    //     });
    //     return items;
    //   },
    // },
    description: "Pokébedrock Helpdesk",
    pwa: {
      includeAssets: [
        "favicon.ico", 
        "apple-touch-icon.png", 
        "mask-icon.svg"
      ],
      manifest: {
        name: "Pokébedrock Helpdesk",
        short_name: "Helpdesk",
        description: "Mine",
        theme_color: "#f93154",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    markdown: {
      config: (md) => {
        md.use(markdownItVideo)
      },
      image: {
        lazyLoading: true
      }
    },
    themeConfig: {
      externalLinkIcon: true,

      editLink: {
        pattern: ({ filePath }) => {
          return `https://github.com/pokebedrock/helpdesk/edit/main/${filePath}`
        }
      },

      footer: {
        message:
          "Pokébedrock and its services are not endorsed by or affiliated with Minecraft, Mojang, Nintendo or Microsoft.",
        copyright:
          'Copyright © 2023-2024 <a href="https://pokebedrock.com">Pokébedrock</a>',
      },

      nav: [
        { text: "Home", link: "https://pokebedrock.com" },
        { text: "Store", link: "https://pokebedrock.com/shop" },
      ],

      search: {
        provider: "local",
      },

      sidebar: [
        {
          collapsed: false,
          text: "Applications",
          items: [
            { text: "YouTube Rank", link: "/apply/youtube" },
            { text: "Twitch Rank", link: "/apply/twitch" },
            { text: "Tiktok Rank", link: "/apply/tiktok" },
          ],
        },
        {
          collapsed: false,
          text: "Frequently Asked Questions",
          items: [
            {
              text: "Can I play split screen?",
              link: "/faq/can-i-play-split-screen.md",
            },
            { text: "How do I join?", link: "/faq/how-to-join" },
            {
              text: "How to use the auction house?",
              link: "/faq/how-to-use-the-actionhouse.md",
            },
            {
              text: "I was scammed because I didn’t check Pokemon id can I have refund?",
              link: "/faq/i-was-scammed-because-i-didnt-check-pokemon-id-can-i-have-refund.md",
            },
            {
              text: "Will gyms be added to the add-on?",
              link: "/faq/will-gyms-be-added-to-the-addon.md",
            },
            {
              text: "Why doesn't redstone work?",
              link: "/faq/why-doesnt-redstone-work.md",
            },
            {
              text: "How to use the GUI?",
              link: "/faq/how-to-use-the-gui.md",
            },
            {
              text: "How to use the warps?",
              link: "/faq/how-to-use-the-warps.md",
            },
          ],
        },
        {
          collapsed: false,
          text: "Rules",
          items: [
            { text: "General Rules", link: "/rules/general" },
            { text: "Build Rules", link: "/rules/build" },
            { text: "Gameplay Rules", link: "/rules/gameplay" },
            { text: "Chat Rules", link: "/rules/chat" },
            { text: "Discord Rules", link: "/rules/discord" },
          ],
        }
      ],
      socialLinks: [
        {
          icon: "discord",
          ariaLabel: "Discord",
          link: "https://discord.pokebedrock.com",
        },
        {
          icon: "github",
          ariaLabel: "Github",
          link: "https://github.com/pokebedrock/support",
        },
      ],
    },
    lastUpdated: true,
  })
);
