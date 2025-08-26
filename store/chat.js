// Utilities
import {
  defineStore
} from 'pinia'
import {
  useAppStore
} from './app'


// const http = useHttp()
const baseURL = `${import.meta.env.VITE_API_URL}/chat-rooms`

const pusher = {
  appId: import.meta.env.VITE_CHAT_PUSHER_APP_IP,
  key: import.meta.env.VITE_CHAT_PUSHER_KEY,
  secret: import.meta.env.VITE_CHAT_PUSHER_SECRET,
  cluster: 'ap2',
  useTLS: true,
  encrypted: true
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    //
    chat: {
      chats: [],
      session: null,
      client: {},
      product: {},
      vendor: {}
    },
    opened: false
  }),
  persist: true,

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
    },
    supabase() {
      return useSupabase()
    }
  },

  actions: {

    toggleChatStatus() {
      this.opened = !this.opened
    },
    setChat(chat) {
      this.chat = chat
    },

    async getRooms(provider = '') {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await $fetch(baseURL, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.app.token}`,
            provider
          }
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e)
      }
    },

    async getRoom(session, provider = '') {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          response
        } = await $fetch(`${baseURL}/${session}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.app.token}`,
            provider
          }
        })
        this.app.load(false)
        return Promise.resolve(response)
      } catch (e) {
        this.app.load(false)
        this.helpers.errorHandler(e)
      }
    },

    async sendMessage(body) {
      this.app.setError(false)
      //   this.app.load(true);
      try {
        const {
          response
        } = await this.http(baseURL, {
          method: 'POST',
          body
        })
        // this.app.load(false);
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e, false)
      }
    },

    async clearChat(body) {
      try {
        const {
          response
        } = await this.http(`${baseURL}/clear`, {
          method: 'POST',
          body
        })
        // this.app.load(false);
        return Promise.resolve(response)
      } catch (e) {
        this.helpers.errorHandler(e, false)
      }

    },

    async getChat(session) {
      this.app.setError(false)
      this.app.load(true)
      try {
        const {
          data,
          error
        } = await this.supabase.from('chatRooms').select().match({
          session
        })

        if (error) throw new Error(error.message)

        this.app.load(false)
        return Promise.resolve(data)
      } catch (e) {
        this.app.load(false)
        this.helpers.errorHandler(e)
      }
    }
  }
})