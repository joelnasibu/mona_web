// Utilities
import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'

const baseURL = `/reviews`

export const useReviewStore = defineStore('reviews', {
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
    },
    http() {
      return useHttp()
    }
  },
  actions: {
    async getReviews(enableLoader, payload) {
      this.app.setError(false)
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await this.http(
          `${baseURL}/${payload.type}/${payload.id}`, {
            method: 'GET'
          }
        )
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async reviewProduct(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await this.http(`${baseURL}`, {
          method: 'POST',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Product reviewed'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }
  }
})