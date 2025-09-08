import { a as useHttp, u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const baseURL = `/sizes`;
const http = useHttp();
const useSizeStore = defineStore("sizes", {
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
    }
  },
  actions: {
    async getSizes(enableLoader) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const {
          response
        } = await http(`${baseURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getSizesPerCategory(enableLoader, category) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const {
          response
        } = await http(`${baseURL}/category/${category}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createSize(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? " Size created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateSize(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Size updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteSize(size) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${size}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Size deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useSizeStore as u
};
//# sourceMappingURL=sizes-7BdVubsf.js.map
