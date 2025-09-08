import { u as useHelpers, a as useHttp } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const baseURL = `/categories`;
const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
    openCategoryDrawer: false
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
    toggleStatus() {
      this.openCategoryDrawer = !this.openCategoryDrawer;
    },
    async getCategories(enableLoader = false) {
      this.app.setError(false);
      this.app.load(enableLoader);
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
    async getCategoriesByType(enableLoader = false, type) {
      this.app.setError(false);
      this.app.load(enableLoader);
      try {
        const {
          response
        } = await this.http(`${baseURL}/${type}`, {
          method: "GET"
        });
        this.app.load(false);
        this.categories = response;
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createCategory(body) {
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
          message: res.message ?? "category created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateCategory(body) {
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
          message: res.message ?? "Category updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteCategory(category) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}/${category}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Category deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useCategoryStore as u
};
//# sourceMappingURL=categories-JvrMV5cl.js.map
