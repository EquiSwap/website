const { POSITION } = require('vue-toastification');

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,

    loading: {
        color: '#9bda5d',
        height: '5px'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'EquiSwap',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true},
            {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"},
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios-accessor.ts',
        '~/plugins/filters.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/elements',
            '~/components/patterns',
            '~/components/templates'
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        'nuxt-windicss',
        '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://github.com/Maronato/vue-toastification
        "vue-toastification/nuxt"
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:8357'
    },

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.API_BASE_URL
        }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // https://github.com/Maronato/vue-toastification/tree/main#installation
    toast: {
        timeout: 3000,
        position: POSITION.TOP_RIGHT,
        toastClassName: 'equiSwap-toast'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
