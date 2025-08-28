import { u as useHelpers, b as useHttp } from './useHelpers-kUuDaVs4.mjs';
import { createClient } from '@supabase/supabase-js';
import { k as defineStore, h as useAppStore } from '../server.mjs';

const supabaseUrl = "https://ubpttprwtcbnnnfrcdww.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicHR0cHJ3dGNibm5uZnJjZHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NzI2MjMsImV4cCI6MjA0NTE0ODYyM30.1NUS459ebTcgNiAAmM7Xx4fI1RvCWIQQfcndlhMxi9M";
const useSupabase = () => createClient(supabaseUrl, supabaseKey);
const baseURL = `${"https://agp-api.acces-global.com/api/v1"}/chat-rooms`;
const useChatStore = defineStore("chat", {
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
      const app = useAppStore();
      return app;
    },
    helpers() {
      return useHelpers();
    },
    http() {
      return useHttp();
    },
    supabase() {
      return useSupabase();
    }
  },
  actions: {
    toggleChatStatus() {
      this.opened = !this.opened;
    },
    setChat(chat) {
      this.chat = chat;
    },
    async getRooms(provider = "") {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response
        } = await $fetch(baseURL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.app.token}`,
            provider
          }
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getRoom(session, provider = "") {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response
        } = await $fetch(`${baseURL}/${session}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.app.token}`,
            provider
          }
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.app.load(false);
        this.helpers.errorHandler(e);
      }
    },
    async sendMessage(body) {
      this.app.setError(false);
      try {
        const {
          response
        } = await this.http(baseURL, {
          method: "POST",
          body
        });
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e, false);
      }
    },
    async clearChat(body) {
      try {
        const {
          response
        } = await this.http(`${baseURL}/clear`, {
          method: "POST",
          body
        });
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e, false);
      }
    },
    async getChat(session) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          data,
          error
        } = await this.supabase.from("chatRooms").select().match({
          session
        });
        if (error)
          throw new Error(error.message);
        this.app.load(false);
        return Promise.resolve(data);
      } catch (e) {
        this.app.load(false);
        this.helpers.errorHandler(e);
      }
    }
  }
});

export { useSupabase as a, useChatStore as u };
//# sourceMappingURL=chat-AG0a5xI_.mjs.map
