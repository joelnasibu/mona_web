import { b as useHttp, u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { k as defineStore, h as useAppStore } from '../server.mjs';

const baseUrl = `/products`;
const baseUrlStock = `/product-stock`;
const http = useHttp();
const dummyUrl = "https://dummyjson.com/products";
const useProductStore = defineStore("productStore", {
  state: () => ({
    products: []
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
    async dummyProd(limit, skip) {
      this.app.load(true);
      try {
        const res = await $fetch(`${dummyUrl}/`, {
          method: "GET",
          headers: {},
          query: {
            limit: limit != null ? limit : 20,
            skip: skip != null ? skip : 20
          }
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async dummyDetails(id) {
      try {
        this.app.load(true);
        const res = await http(`${dummyUrl}/${id}/`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(res);
      } catch (error) {
        const err = error;
        this.app.load(false);
        return Promise.reject(err);
      }
    },
    async uploadImage(body, enableLoader = false) {
      this.setError(false);
      this.app.load(enableLoader);
      try {
        const {
          response: response2
        } = await http(baseUrl, {
          method: "POST",
          body
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (e) {
        this.app.load(false);
      }
    },
    async allProducts() {
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(baseUrl, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async publishedProducts() {
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/published`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async featuredProducts(enableLoader) {
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/featured`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async popularProducts(enableLoader) {
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/popular`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async recommendedProducts(enableLoader) {
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/popular`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async businessProducts(business) {
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/supplier/${business}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async productsPerCategory(category) {
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/category/${category}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        this.app.load(false);
      }
    },
    async details(id) {
      try {
        this.app.load(true);
        const {
          response: response2
        } = await http(`${baseUrl}/single/${id}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (error) {
        const err = error;
        this.app.load(false);
        return Promise.reject(err);
      }
    },
    async createProduct(body) {
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
          message: (_a = res.message) != null ? _a : "Product created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getProduct(product) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(`${baseUrl}/single/${product}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateProduct(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Product updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteProduct(product) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/${product}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Product deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async publishProduct(product, body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/publish/${product}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Product published successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    //Product Stock 
    async getProductStock(product) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(`${baseUrlStock}/${product}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createProductStock(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const {
          response: response2
        } = await http(baseUrlStock, {
          method: "POST",
          body
        });
        this.app.load(false);
        return Promise.resolve(response2);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateProductStock(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrlStock}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteProductStock(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrlStock}/${body.id}`, {
          method: "DELETE",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
  // persist: true,
});

export { useProductStore as u };
//# sourceMappingURL=products-ShlXA7WH.mjs.map
