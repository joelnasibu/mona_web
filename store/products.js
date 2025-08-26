import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'

const baseUrl = `/products`
const baseUrlStock = `/product-stock`
const http = useHttp()
const dummyUrl = 'https://dummyjson.com/products'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: []
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
    async dummyProd(limit, skip) {
      this.app.load(true)
      try {
        const res = await $fetch(`${dummyUrl}/`, {
          method: 'GET',
          headers: {},
          query: {
            limit: limit ?? 20,
            skip: skip ?? 20
          }
        })
        // if (res.data.responseCode == "01")
        //   throw new Error(res.data.responseMessage);

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async dummyDetails(id) {
      try {
        this.app.load(true)
        const res = await http(`${dummyUrl}/${id}/`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(res)
      } catch (error) {
        const err = error

        this.app.load(false)
        return Promise.reject(err)
      }
    },
    async uploadImage(body, enableLoader = false) {
      this.setError(false)
      this.app.load(enableLoader)
      try {
        const {
          response
        } = await http(baseUrl, {
          method: 'POST',
          body
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.app.load(false)
      }
    },

    async allProducts() {
      this.app.load(true)
      try {
        const {
          response
        } = await http(baseUrl, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async publishedProducts() {
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseUrl}/published`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async featuredProducts(enableLoader) {
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseUrl}/featured`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async popularProducts(enableLoader) {
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseUrl}/popular`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async recommendedProducts(enableLoader) {
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await http(`${baseUrl}/popular`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async businessProducts(business) {
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseUrl}/supplier/${business}`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async productsPerCategory(category) {
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseUrl}/category/${category}`, {
          method: 'GET',
        })

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        this.app.load(false)
      }
    },
    async details(id) {
      try {
        this.app.load(true)
        const {
          response
        } = await http(`${baseUrl}/single/${id}`, {
          method: 'GET',
        })
        // if (res.data.responseCode == "01")
        //   throw new Error(res.data.responseMessage);

        this.app.load(false)
        return Promise.resolve(response)
      } catch (error) {
        const err = error

        this.app.load(false)
        return Promise.reject(err)
      }
    },
    async createProduct(body) {
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
          message: res.message ?? 'Product created successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async getProduct(product) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseUrl}/single/${product}`, {
          method: 'GET',
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async updateProduct(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrl}/${body.id}`, {
          method: 'PUT',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Product updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async deleteProduct(product) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrl}/${product}`, {
          method: 'DELETE',
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Product deleted successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async publishProduct(product, body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrl}/publish/${product}`, {
          method: 'PUT',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Product published successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    //Product Stock 

    async getProductStock(product) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${baseUrlStock}/${product}`, {
          method: 'GET',
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async createProductStock(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await http(baseUrlStock, {
          method: 'POST',
          body
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async updateProductStock(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrlStock}/${body.id}`, {
          method: 'PUT',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async deleteProductStock(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseUrlStock}/${body.id}`, {
          method: 'DELETE',
          body,
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

  }

  // persist: true,
})