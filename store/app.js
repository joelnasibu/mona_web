// Utilities
import {
  defineStore
} from 'pinia'


export const useAppStore = defineStore('app', {
  state: () => ({
    //
    currency: {
      name: 'USD',
      sign: '$'
    },
    loading: false,
    currentUser: {
      accessLevel: 4,
      refresh_token: null,
      roleId: 0
    },
    token: null,
    error: false,
    snackbar: {
      status: false,
      type: 'info',
      message: null
    },
    profileImage: 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU=',
    placeholderImage: 'https://i0.wp.com/georgiaautomation.com/wp-content/uploads/2018/09/image-placeholder.png?ssl=1',
    redirect: null,
    adminRedirect: null,
    countries: [],
    adminDrawer: {
      status: false,
      type: 'applications',
      id: 0
    },
    jobSearchDrawer: {
      status: false,
      list: [],
      title: '',
      listFormat: null
    }
  }),
  persist: {
    storage: persistedState.localStorage
  },
  getters: {
    isLoggeIn() {
      return this.token
    },
    isAdmin() {
      return this.currentUser.accessLevel < 4
    },
    isVendor() {
      return this.currentUser.accessLevel === 3
    },
    allCountries() {
      return this.countries
    }
  },
  actions: {
    load(payload) {
      this.loading = payload
    },
    setError(payload) {
      this.error = payload
    },
    toggleSnackbar(payload) {
      this.snackbar = payload
    },
    setUser(payload) {
      this.currentUser = payload
    },
    setToken(payload) {
      this.token = payload
    },
    setRedirect(payload) {
      this.redirect = payload
    },
    setAdminRedirect(payload) {
      this.adminRedirect = payload
    },
    closeAdminDrawer() {
      this.adminDrawer = {
        status: false,
        type: 'Job Applications',
        id: 0
      }
    },
    setAdminDrawer(payload) {
      this.adminDrawer = payload
    },


    async getCountries() {
      this.setError(false)
      try {
        const res = await $fetch('https://restcountries.com/v3.1/region/africa', {
          method: 'GET'
        })
        return Promise.resolve(res)
      } catch (e) {
        // this.helpers.errorHandler(e);
      }
    },
    setJobSearchDrawer(payload) {
      this.jobSearchDrawer = payload
    },
    closeJobSearchDrawer() {
      this.jobSearchDrawer = {
        list: [],
        status: false,
        title: '',
        listFormat: null
      }
    }
  }
})