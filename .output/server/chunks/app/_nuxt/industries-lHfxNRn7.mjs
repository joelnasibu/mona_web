import { u as useHelpers, b as useHttp } from './useHelpers-9BVYUhTt.mjs';
import { k as defineStore, h as useAppStore } from '../server.mjs';

const baseURL = `/industries`;
const useIndustriestore = defineStore("industry", {
  state: () => ({
    //
  }),
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
    }
  },
  actions: {
    async getIndustries(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response
        } = await this.http(baseURL, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createIndustry(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(baseURL, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Industry created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateIndustry(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Industry updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteIndustry(industry) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${industry}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Industry deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});

export { useIndustriestore as u };
//# sourceMappingURL=industries-lHfxNRn7.mjs.map
