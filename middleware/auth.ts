import { useAppStore } from "~/store/app"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const { token, currentUser } = storeToRefs(useAppStore())
    if (process.client)
        if (!token.value)
            return navigateTo({ name: 'auth' })



})
