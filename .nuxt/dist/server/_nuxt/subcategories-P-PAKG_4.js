import { a as useHttp, u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const http = useHttp();
const baseURL = `/sub-categories`;
const useSubcategoryStore = defineStore("subcategories", {
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
    async getSubcategories(enableLoader) {
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
    async getSubcategoriesByType(enableLoader, type) {
      this.app.setError(false);
      this.app.load(enableLoader ?? true);
      try {
        const {
          response
        } = await http(`${baseURL}/type/${type}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getSubcategoriesPerCategory(enableLoader, category) {
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
    async createSubcategory(body) {
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
          message: res.message ?? "subcategory created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateSubcategory(body) {
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
          message: res.message ?? "Subcategory updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteSubcategory(subcategory) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${subcategory}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Subcategory deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
export {
  useSubcategoryStore as u
};
//# sourceMappingURL=subcategories-P-PAKG_4.js.map
