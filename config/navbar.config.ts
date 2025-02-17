import { Navbar } from "@docusaurus/theme-common";

// don't specify style or hideOnScroll here, we want it to be dynamic
const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
  logo: {
    src: "img/logo-marker-light.svg",
    srcDark: "img/logo-marker-dark.svg",
    width: 130,
    height: 32,
    alt: "PaperMC Docs",
  },
  items: [
    {
      type: "dropdown",
      label: "Panel",
      to: "/paper",
      position: "left",
      activeBaseRegex: "(\\/paper)(.+)?",
      items: [
        {
          label: "Administración",
          to: "/paper/admin",
          activeBaseRegex: "(\\/paper/)(?!dev)(.+)?",
        },
        {
          label: "Development",
          to: "/paper/dev",
          activeBaseRegex: "(\\/paper\\/dev)(.+)?",
        },
      ],
    },
    {
      type: "dropdown",
      label: "Área de cliente",
      to: "/velocity",
      position: "left",
      activeBaseRegex: "(\\/velocity)(.+)?",
      items: [
        {
          label: "Administration",
          to: "/velocity/admin",
          activeBaseRegex: "(\\/velocity/)(?!dev)(.+)?",
        },
        {
          label: "Development",
          to: "/velocity/dev",
          activeBaseRegex: "(\\/velocity\\/dev)(.+)?",
        },
      ],
    },
    {
      to: "waterfall",
      label: "Waterfall",
      position: "left",
    },
    {
      to: "misc",
      label: "Misc",
      position: "left",
    },
    {
      type: "docsVersionDropdown",
      docsPluginId: "paper",
      position: "right",
    },
    {
      to: "https://deltahost.cloud",
      label: "Sitio web",
      position: "right",
    },
    {
      href: "https://discord.gg/vD8drXYuxn",
      className: "header-icon-link header-discord-link",
      position: "right",
    },
  ],
};

export default navbar;
