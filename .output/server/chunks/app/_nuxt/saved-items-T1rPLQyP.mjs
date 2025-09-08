import { b as useHttp, u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { k as defineStore, h as useAppStore } from '../server.mjs';

const baseUrl = `/wishlist`;
const http = useHttp();
const useSavedItemStore = defineStore("savedItemStore", {
  state: () => ({}),
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
    // products
    async wishlists() {
      this.app.load(true);
      try {
        const {
          response
        } = await http(baseUrl, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async saveProduct(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(baseUrl, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Item saved successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteSavedProduct(item) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/${item}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Item removed successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
    // job likes
  }
  // persist: true,
});

export { useSavedItemStore as u };
//# sourceMappingURL=saved-items-T1rPLQyP.mjs.map
