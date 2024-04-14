import { DefaultTheme } from "vitepress";

/**
 * @type {{ sidebar: DefaultTheme.Sidebar }}
 */
export default {
  sidebar: [
    {
      collapsed: false,
      text: "Regras",
      items: [
        { text: "Regras Gerais", link: "/pt/rules/general" },
        { text: "Regras de Construção", link: "/pt/rules/build" },
        { text: "Regras de Jogabilidade", link: "/pt/rules/gameplay" },
        { text: "Regras de Chat", link: "/pt/rules/chat" },
        { text: "Regras do Discord", link: "/pt/rules/discord" },
      ],
    },
    {
      collapsed: false,
      text: "Tutoriais",
      items: [
        {
          text: "Como usar a casa de leilões?",
          link: "/pt/faq/how-to-use-the-actionhouse.md",
        },
        {
          text: "Como usar a GUI?",
          link: "/pt/faq/how-to-use-the-gui.md",
        },
        {
          text: "Como usar os teletransportadores?",
          link: "/pt/faq/how-to-use-the-warps.md",
        },
      ],
    },
    {
      collapsed: false,
      text: "Aplicações",
      items: [
        { text: "Rank de YouTube", link: "/pt/apply/youtube" },
        { text: "Rank de Twitch", link: "/pt/apply/twitch" },
        { text: "Rank de Tiktok", link: "/pt/apply/tiktok" },
      ],
    },
    {
      collapsed: false,
      text: "Perguntas Frequentes",
      items: [
        {
          text: "Como faço para me juntar?",
          link: "/pt/faq/how-to-join",
        },
        {
          text: "Por que o redstone não funciona?",
          link: "/pt/faq/why-doesn't-redstone-work.md",
        },
        {
          text: "Posso jogar em tela dividida?",
          link: "/pt/faq/can-i-play-split-screen.md",
        },
        {
          text: "Os ginásios serão adicionados ao complemento?",
          link: "/pt/faq/will-gyms-be-added-to-the-addon.md",
        },
        {
          text: "Como funcionarão os ginásios no servidor?",
          link: "/pt/faq/how-will-gyms-function-on-the-server.md",
        },
        {
          text: "Posso jogar este complemento no meu próprio mundo?",
          link: "/pt/faq/can-i-play-this-addon-on-my-own-world.md",
        },
        {
          text: "Fui enganado porque não verifiquei a ID do Pokémon, posso ter um reembolso?",
          link: "/pt/faq/i-was-scammed-because-i-didn't-check-pokemon-id-can-i-have-refund.md",
        },
        {
          text: "Posso fabricar distribuidores de exp e pokébolas master?",
          link: "/pt/faq/can-i-craft-exp-shares-and-master-balls.md",
        },
        {
          text: "Estou preso em uma batalha, como resolvo isso?",
          link: "/pt/faq/i'm-stuck-in-battle-how-do-i-fix-this.md",
        },
      ],
    },
  ],
};
