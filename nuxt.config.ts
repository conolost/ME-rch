// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr:true,
    app: {
        head: {
            title: "myNuxt", 
            meta: [
                {name: 'description', content: 'everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ],
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})


