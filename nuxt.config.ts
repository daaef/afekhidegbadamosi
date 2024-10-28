export default defineNuxtConfig({

    routeRules: {
        '/': {prerender: true}
    },
    app: {
        head: {
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon2.png"},
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;900&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
                }
            ]
        }
    },
    compatibilityDate: '2024-08-14',
    css: ['~/assets/css/style.css', '~/assets/css/pater.css'],
    modules: [
        '@nuxthq/studio',
        '@nuxt/content',
        '@nuxt/ui',
        "@nuxt/image"
    ],

    colorMode: {
        classSuffix: ''
    },
    // https://content.nuxtjs.org
    content: {
        documentDriven: true,
        highlight: {
            // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
            theme: {
                dark: 'github-dark',
                default: 'github-light'
            }
        }
    },
})