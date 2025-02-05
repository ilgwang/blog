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
    href: "https://ig95.netlify.app/pdf/최일광_경력기술서.pdf",
  },
};

module.exports = {
  title: "My Info",
  url: "https://ig95.netlify.app",  
  baseUrl: "/", 
  projectName: 'blog',  
  organizationName: 'ilgwang', 
  trailingSlash: false,
  onBrokenLinks: "throw",
  favicon: "img/brightness-high_black.svg",
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
        src: "img/brightness-high.svg",
        target: "_self",
        width: 22, 
        height: 22, 
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs/",
          label: "Blog",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://ig95.netlify.app/pdf/최일광_경력기술서.pdf",
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css",
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

