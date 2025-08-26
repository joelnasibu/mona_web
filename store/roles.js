// Utilities
import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'

const baseURL = `/roles`

export const useRoleStore = defineStore('role', {
  state: () => ({
    //
    AccessLevelPages: [{
      title: 'Settings',
      accessLevel: [1, 2, 3],
      children: [{
          title: 'Roles',
          route: 'admin-settings-roles',
          accessLevel: [1, 2, 3]
        },
        {
          title: 'Business types',
          route: 'admin-settings-business-types',
          accessLevel: [1, 2]
        },
        {
          title: 'Job types',
          route: 'admin-settings-job-types',
          accessLevel: [1, 3]
        },
        {
          title: 'Categories',
          route: 'admin-settings-categories',
          accessLevel: [1, 3]
        },
        {
          title: 'Sizes',
          route: 'admin-settings-sizes',
          accessLevel: [1, 3]
        },
        {
          title: 'Skills',
          route: 'admin-settings-skills',
          accessLevel: [1, 3]
        }
      ]
    }]
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
    async getRoles(enableLoader) {
      this.app.setError(false)
      this.app.load(enableLoader ?? true)
      try {
        const {
          response
        } = await this.http(baseURL, {
          method: 'GET'
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },
    async createRole(body) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const res = await this.http(baseURL, {
          method: 'POST',
          body
        })
        this.app.load(false)
        this.app.toggleSnackbar({
          status: true,
          type: 'success',
          message: res.message ?? 'Role created successfully!'
        })
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    }
  }
})