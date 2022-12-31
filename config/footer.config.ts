import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
  style: "dark",
  links: [
    {
      title: "Soporte",
      items: [
        {
          label: "Discord",
          href: "https://discord.gg/vD8drXYuxn",
        },
      ],
    },
    {
      title: "Otros enlaces",
      items: [
        {
          label: "Sitio web",
          href: "https://deltahost.cloud",
        },
        {
          label: "Área de cliente",
          href: "https://clientes.deltahost.cloud",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} DeltaHost. Built with Docusaurus. <a href="https://vercel.com/?utm_source=papermc&utm_campaign=oss" style="text-decoration:underline;color:inherit;">Powered by ▲ Vercel</a>`,
};

export default footer;
