import { u as useHelpers, a as useHttp } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
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
      this.app.load(enableLoader ?? true);
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
          message: res.message ?? "Industry created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateIndustry(body) {
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
          message: res.message ?? "Industry updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteIndustry(industry) {
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
          message: res.message ?? "Industry deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useIndustriestore as u
};
//# sourceMappingURL=industries-lHfxNRn7.js.map
