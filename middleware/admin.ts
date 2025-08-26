import { useAppStore } from "~/store/app"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const appStore = useAppStore()
    // const localePath = useLocalePath();


    if (process.client) {
        if (to?.name !== from?.name)
            appStore.setAdminRedirect({
                name: from.name,
                params: from.params,
            })
        if (!appStore.isAdmin)
            return navigateTo({ name: 'auth' })
    }


})
