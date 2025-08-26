// Utilities
import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'
const http = useHttp()
const baseURL = `/businesses`

export const useBusinessStore = defineStore('business', {
  state: () => ({
    //
  }),
  getters: {
    app() {
      const app = useAppStore()
      return app
    },
    helpers() {
      return useHelpers()
    }
  },
  actions: {
    async getBusinesses(enableLoader) {
      this.app.setError(false)
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseURL}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getVendorBusinesses(enableLoader) {
      this.app.setError(false)
      // this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseURL}/user`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },


    async getApprovedBusinesses(enableLoader = true) {
      this.app.setError(false)
      this.app.load(enableLoader)
      try {
        const {
          response
        } = await http(`${baseURL}/approved`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async getSingleBusiness(enableLoader, id) {
      this.app.setError(false)
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseURL}/single/${id}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async createBusiness(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Business created successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async getBusiness(business) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseURL}/single/${business}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async approveBusiness(business, body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/approve/${business}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Business approved successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async updateBusiness(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/${body.id}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Business updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async deleteBusiness(id) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/${id}`, {
          method: 'DELETE',
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Business updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }
  }
})