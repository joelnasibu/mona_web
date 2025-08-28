// import { useAppStore } from "~/store/app"
import { useBusinessStore } from "~/store/business"

export default defineNuxtRouteMiddleware(async (to: any, from: any) => {

    // const { currentUser } = storeToRefs (useAppStore())
    const {getVendorBusinesses} = useBusinessStore()
    let hasBusiness = ref([]) 
    
    hasBusiness.value = await getVendorBusinesses()

    if(!hasBusiness.value) return 

    if(hasBusiness.value.length==0 &&  to.name !== 'admin-businesses-create') {
      return navigateTo({ name: 'admin-businesses-create'})
    } 



  })
  