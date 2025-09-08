import { u as useHelpers, a as useHttp } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const baseURL = `/business-types`;
const useBusinessTypeStore = defineStore("businessType", {
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
    async getBusinessTypes(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const {
          response
        } = await this.http(`${baseURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createType(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Business type created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateType(body) {
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
          message: res.message ?? "Type updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteType(type) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${type}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Type deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useBusinessTypeStore as u
};
//# sourceMappingURL=business-types-8YqDhEuJ.js.map
