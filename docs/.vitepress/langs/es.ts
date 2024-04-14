import { DefaultTheme } from "vitepress";

/**
 * @type {{ sidebar: DefaultTheme.Sidebar }}
 */
export default {
  sidebar: [
    {
      collapsed: false,
      text: "Reglas",
      items: [
        { text: "Reglas Generales", link: "/es/rules/general" },
        { text: "Reglas de Construcción", link: "/es/rules/build" },
        { text: "Reglas de Jugabilidad", link: "/es/rules/gameplay" },
        { text: "Reglas de Chat", link: "/es/rules/chat" },
        { text: "Reglas de Discord", link: "/es/rules/discord" },
      ],
    },
    {
      collapsed: false,
      text: "Tutoriales",
      items: [
        {
          text: "¿Cómo usar la casa de subastas?",
          link: "/es/faq/how-to-use-the-actionhouse.md",
        },
        {
          text: "¿Cómo usar la interfaz gráfica de usuario?",
          link: "/es/faq/how-to-use-the-gui.md",
        },
        {
          text: "¿Cómo usar los teletransportadores?",
          link: "/es/faq/how-to-use-the-warps.md",
        },
      ],
    },
    {
      collapsed: false,
      text: "Aplicaciones",
      items: [
        { text: "Rango de YouTube", link: "/es/apply/youtube" },
        { text: "Rango de Twitch", link: "/es/apply/twitch" },
        { text: "Rango de Tiktok", link: "/es/apply/tiktok" },
      ],
    },
    {
      collapsed: false,
      text: "Preguntas Frecuentes",
      items: [
        {
          text: "¿Cómo puedo unirme?",
          link: "/es/faq/how-to-join",
        },
        {
          text: "¿Por qué no funciona el redstone?",
          link: "/es/faq/why-doesn't-redstone-work.md",
        },
        {
          text: "¿Puedo jugar en pantalla dividida?",
          link: "/es/faq/can-i-play-split-screen.md",
        },
        {
          text: "¿Se agregarán gimnasios al complemento?",
          link: "/es/faq/will-gyms-be-added-to-the-addon.md",
        },
        {
          text: "¿Cómo funcionarán los gimnasios en el servidor?",
          link: "/es/faq/how-will-gyms-function-on-the-server.md",
        },
        {
          text: "¿Puedo jugar este complemento en mi propio mundo?",
          link: "/es/faq/can-i-play-this-addon-on-my-own-world.md",
        },
        {
          text: "Fui estafado porque no revisé la identificación de Pokémon, ¿puedo obtener un reembolso?",
          link: "/es/faq/i-was-scammed-because-i-didn't-check-pokemon-id-can-i-have-refund.md",
        },
        {
          text: "¿Puedo crear repartos de exp y bolas maestras?",
          link: "/es/faq/can-i-craft-exp-shares-and-master-balls.md",
        },
        {
          text: "Estoy atrapado en una batalla, ¿cómo lo soluciono?",
          link: "/es/faq/i'm-stuck-in-battle-how-do-i-fix-this.md",
        },
      ],
    },
  ],
};
