const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Preston",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "geek",
    bio: "Fancy anything about tech",
    email: "a6@outlook.at",
    linkedin: "preston-lau-51b830161",
    github: "2ndMessiah",
    instagram: "real.preston.liu",
  },
  projects: [
    {
      name: `niubiV2`,
      href: "https://github.com/2ndMessiah/niubiV2",
    },
  ],
  // blog setting (required)
  blog: {
    title: "PrL\'s ♻",
    description: "Minds of a low-end person",
  },

  // CONFIG configration (required)
  link: "https://niubi-v2.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "37807f3f-6b65-4ae7-ae88-4c3d1908a31a", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
