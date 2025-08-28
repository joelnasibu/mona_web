// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import themes from '../themes'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        ssr: true,
        theme: {
            themes,
        },
        defaults: {
            VTextField: {
                variant: "outlined",
                density: "compact",
                color: "primary-accent",
                bgColor: "off-white-1"
            },
            VCombobox: {
                variant: "outlined",
                density: "compact",
                color: "primary-accent",
                bgColor: "off-white-1"
            },
            VTextarea: {
                variant: "outlined",
                color: "primary-accent",
                bgColor: "off-white-1"
            },
            VList: {
                // class: 'menu-list',
                density: 'compact'
            },
            VMenu: {
                transition: 'slide-y-transition'
            },
            VContainer: {
                class: 'pa-0',
                fluid: true,
            },
            VRow: {
                class: 'ma-auto'
            },
        },
    })
    app.vueApp.use(vuetify)
})
