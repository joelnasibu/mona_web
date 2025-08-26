// Utilities
import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'

const http = useHttp()
const baseURL = `/auth`
const userBaseURL = `/users`
const emailBaseURL = `/auth/email`
const accountsURL = ``

export const useAuthStore = defineStore('auth', {
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

    // 

    async login(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/login/`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.setUser({
          account: res.account,
          applicant: res.applicant,
          ...res.response
        })
        this.app.setToken(res.response.access_token)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Access granted'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async confirmUser(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/confirm-user`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Access granted'
        })
        return Promise.resolve(true)
      } catch (e) {
        this.helpers.errorHandler(e)
        return Promise.reject(false)
      }
    },

    async logout() {
      this.app.setError(false)
      this.app.load(true)
      try {
        await http(`${baseURL}/logout/`, {
          method: 'POST',
          body: {
            refresh_token: this.app.currentUser.refresh_token
          }
        })
        this.app.load(false)
        this.app.setUser({
          accessLevel: 0,
          refresh_token: null,
          roleId: 0
        })
        this.app.setToken(null)
        // navigateTo({ name: "auth" });
      } catch (e) {
        this.app.load(false)

        // this.helpers.errorHandler(e);
      }
    },

    async createAccount(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${userBaseURL}/sign-up`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Account created successfully'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async emailVerified(userId) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${emailBaseURL}/verify/${userId}`, {
          method: 'PUT'
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

    //users

    async getUsers(enableLoader) {
      this.app.setError(false)
      this.app.load(enableLoader ?? true)
      try {
        const res = await http(`${userBaseURL}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(res.response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getBusinessUsers(payload) {
      this.app.setError(false)
      this.app.load(payload.enableLoader ?? true)
      try {
        const res = await http(`${userBaseURL}/business/${payload.business}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(res.response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getUser(payload) {
      this.app.setError(false)
      this.app.load(payload.enableLoader ?? true)
      try {
        const res = await http(`${userBaseURL}/${payload.id}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(res.response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getUserByUID(payload, enableLoader = true) {
      this.app.setError(false)
      this.app.load(enableLoader)
      try {
        const res = await http(`${userBaseURL}/details/${payload.id}`, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(res.response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async createUser(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${userBaseURL}`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })
        return Promise.resolve(res)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async checkUniqueFields(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await http(`${userBaseURL}/field-check`, {
          method: 'POST',
          body
        })
        this.app.load(false)

        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
        return Promise.reject(e)
      }
    },

    async updateUser(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${userBaseURL}/${body.id}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'User updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async upgradeUser(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${userBaseURL}/upgrade/${body.id}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'User updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async deleteUser(user) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${userBaseURL}/${user}`, {
          method: 'DELETE'
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'User deleted successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    //passwords

    async decodeToken(token) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/decode-token?token=${token}`, {
          method: 'GET'
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })

        return Promise.resolve(res.response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async resetPassword(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/set-password/${body.userId}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })

        return Promise.resolve(true)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async changePassword(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(
          `${baseURL}/change-password/${this.app.currentUser.responseId}`, {
            method: 'PUT',
            body
          }
        )
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Password changed successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async forgotPassword(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`${baseURL}/forgot-password`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message
        })
        return Promise.resolve(res)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    //accounts

    async shopAccount(body, type) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`/${type}`, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Account created successfully'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async updateAccount(body, type) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`/${type}/${body.id}`, {
          method: 'PUT',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Account updated successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async deleteAccount(user, type) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await http(`/${type}/${user}`, {
          method: 'DELETE'
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Account deleted successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }
  }
})