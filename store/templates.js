// Utilities
import { defineStore } from 'pinia'
import { useAppStore } from './app'

const http = useHttp()
const baseURL = `/email-templates`

export const useTemplateStore = defineStore('templates', {
  state: () => ({
    //
  }),

  getters: {
    app () {
      const app = useAppStore()
      return app
    },

    helpers () {
      return useHelpers()
    }
  },

  actions: {
    async getTemplates () {
      this.app.setError(false)
      this.app.load(true)
      try {
        const { response } = await http(`${baseURL}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async createTemplate (body) {
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
          message: res.message
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getTemplate (id) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const { response } = await http(`${baseURL}/${id}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async updateTemplate (body) {
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
          message: res.message
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async deleteTemplate (id) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/${id}`, {
          method: 'DELETE'
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

    async getJobApplicationTemplate (status) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const { response } = await http(`${baseURL}/title/${status}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }
  }
})
