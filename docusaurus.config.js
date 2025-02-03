import autoprefixer from "autoprefixer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evanitsg/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/digipie",
  },
  padlet: {
    label: "Padlet",
    href: "https://padlet.com/about/us/wish/1072760846",
  },
  email: {
    label: "Email",
    href: "mailto:evan.it.sg@gmail.com",
  },
  // blog: {
  //   label: "Blog",
  //   to: "blog",
  // },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "https://evantay.com/pdf/resume.pdf",
  },
};

module.exports = {
  title: "My Info",
  url: " https://ilgwang.github.io",
  baseUrl: "/",
  projectName: 'ilgwang.github.io',
  organizationName: 'ilgwang',
  trailingSlash: false,
  onBrokenLinks: "throw",
  favicon: "img/logo5.png",
  organizationName: "digipie",
  projectName: "kaya-folio",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "My Info",
      logo: {
        alt: "",
        src: "img/logo5.png",
        target: "_self",
        width: 30, 
        height: 22, 
      },
      items: [
        // { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs/",
          label: "Blog",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          // editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "http://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css",
      type: "text/css",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};
