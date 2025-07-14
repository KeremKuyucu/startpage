// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Bilecik",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "TR",
      timezone: "Europe/İstanbul",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      b: ["https://search.brave.com/search?q=", "Brave Search"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      yt: ["https://www.youtube.com/results?search_query=", "YouTube"],
      g: ["https://google.com/search?q=", "Google"],
      gh: ["https://github.com/search?q=", "GitHub"],
      w: ["https://en.wikipedia.org/wiki/Special:Search?search=", "Wikipedia"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "AI",
          links: [
            {
              name: "ChatGPT",
              url: "https://chat.openai.com",
              icon: "brand-chatgpt",
              icon_color: palette.green,
            },
            {
              name: "Duck.ai",
              url: "https://duck.ai",
              icon: "brand-duckduckgo",
              icon_color: palette.mauve,
            },
            {
              name: "AI Studio",
              url: "https://aistudio.google.com",
              icon: "cpu",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "notion",
              url: "https://notion.so",
              icon: "brand-notion",
              icon_color: palette.mauve,
            },
          ],
        },
       {
          name: "media",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Prime Video",
              url: "https://www.primevideo.com",
              icon: "brand-amazon",
              icon_color: palette.blue,
            },
            {
              name: "Selcukflix",
              url: "https://selcukflix.com",
              icon_url: "https://selcukflix.com/assets/favicon/favicon.ico?v=4",
              icon_color: palette.peach,
            },
            {
              name: "HDFilmCehennemi",
              url: "https://hdfilmcehennemi.nl",
              icon: "film",
              icon_color: palette.mauve,
            },
          ],
        }
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "vercel",
              url: "https://vercel.com",
              icon: "brand-vercel",
              icon_color: palette.black, 
            },
            {
              name: "firebase",
              url: "https://firebase.google.com",
              icon: "brand-google",
              icon_color: palette.orange,
            },
            {
              name: "cloudflare",
              url: "https://cloudflare.com",
              icon: "cloud",
              icon_color: palette.blue,
            },
          ],
        },
       {
          name: "tools",
          links: [
            {
              name: "Google Çeviri",
              url: "https://translate.google.com",
              icon: "brand-translate",
              icon_color: palette.blue,
            },
            {
              name: "DeepL",
              url: "https://www.deepl.com/translator",
              icon: "translate",
              icon_color: palette.peach,
            },
          ],
        }
      ],
    }
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
