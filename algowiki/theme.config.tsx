import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>AlgoWiki</span>,
  project: {
    link: "https://github.com/sumitesh9/algowiki",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/sumitesh9/algowiki",
  footer: {
    text: "https://github.com/sumitesh9/algowiki",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AlgoWiki" key={"title"} />
      <meta
        property="og:description"
        content="Alamanac for Algorithms"
        key={"description"}
      />
    </>
  ),
};

export default config;
