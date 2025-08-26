import { useAppStore } from '~/store/app'

const opts = {
  baseURL: import.meta.env.VITE_API_URL,
  async onRequest ({ request, options, error }) {
    const app = useAppStore()
    // Add your specific data here
    options.headers = {
      Authorization: `Bearer ${app.token}`,
      user: app.currentUser?.userId
    }

    if (error) {
      // console.log(error)
      console.log('error fetch:', error)
    }
  },
  onRequestError ({ error }) {
    console.log(error)
  },
  async onResponseError (error) {
    useHelpers().errorHandler(error, false)
  }
}

export default () => $fetch.create(opts)
// globalThis.$fetch =

//  = $fetch.create(opts))
