import { DefaultTheme } from "vitepress";

/**
 * @type {{ sidebar: DefaultTheme.Sidebar }}
 */
export default {
  sidebar: [
    {
      collapsed: false,
      text: "Rules",
      items: [
        { text: "General Rules", link: "/en/rules/general" },
        { text: "Build Rules", link: "/en/rules/build" },
        { text: "Gameplay Rules", link: "/en/rules/gameplay" },
        { text: "Chat Rules", link: "/en/rules/chat" },
        { text: "Discord Rules", link: "/en/rules/discord" },
      ],
    },
    {
      collapsed: false,
      text: "Tutorials",
      items: [
        {
          text: "How to use the auction house?",
          link: "/en/faq/how-to-use-the-actionhouse.md",
        },
        {
          text: "How to use the GUI?",
          link: "/en/faq/how-to-use-the-gui.md",
        },
        {
          text: "How to use the warps?",
          link: "/en/faq/how-to-use-the-warps.md",
        },
      ],
    },
    {
      collapsed: false,
      text: "Applications",
      items: [
        { text: "YouTube Rank", link: "/en/apply/youtube" },
        { text: "Twitch Rank", link: "/en/apply/twitch" },
        { text: "Tiktok Rank", link: "/en/apply/tiktok" },
      ],
    },
    {
      collapsed: false,
      text: "Frequently Asked Questions",
      items: [
        {
          text: "How do I join?",
          link: "/en/faq/how-to-join",
        },
        {
          text: "Why doesn't redstone work?",
          link: "/en/faq/why-doesn't-redstone-work.md",
        },
        {
          text: "Can I play split screen?",
          link: "/en/faq/can-i-play-split-screen.md",
        },
        {
          text: "Will gyms be added to the add-on?",
          link: "/en/faq/will-gyms-be-added-to-the-addon.md",
        },
        {
          text: "How will gym’s function on the server?",
          link: "/en/faq/how-will-gyms-function-on-the-server.md",
        },
        {
          text: "Can I play this addon on my own world?",
          link: "/en/faq/can-i-play-this-addon-on-my-own-world.md",
        },
        {
          text: "I was scammed because I didn’t check Pokemon id can I have refund?",
          link: "/en/faq/i-was-scammed-because-i-didn't-check-pokemon-id-can-i-have-refund.md",
        },
        {
          text: "Can I craft exp shares and master balls?",
          link: "/en/faq/can-i-craft-exp-shares-and-master-balls.md",
        },
        {
          text: "I'm stuck in battle, how do I fix this?",
          link: "/en/faq/i'm-stuck-in-battle-how-do-i-fix-this.md",
        },
      ],
    },
  ],
};
