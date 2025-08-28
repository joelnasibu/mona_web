import { useAppStore } from "~/store/app"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const { currentUser } = useAppStore()
    // const localePath = useLocalePath();
    if (process.client)
        if (currentUser.accessLevel !== 3)
            return navigateTo({ name: 'auth' })




})
