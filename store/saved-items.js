import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'

const baseUrl = `/wishlist`
const jobUrl = '/saved-jobs'
const http = useHttp()

export const useSavedItemStore = defineStore('savedItemStore', {
  state: () => ({}),

  getters: {
    app() {
      const app = useAppStore()
      return app
    },
    helpers() {
      return useHelpers()
    },

  },

  actions: {
    // products
    async wishlists() {
      this.app.load(true)
      try {
        const {
          response
        } = await http(baseUrl, {
          method: 'GET'
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },

    async saveProduct(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(baseUrl, {
          method: 'POST',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Item saved successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async deleteSavedProduct(item) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrl}/${item}`, {
          method: 'DELETE',
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Item removed successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }

    // job likes
  }

  // persist: true,
})