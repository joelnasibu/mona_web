import { a as useHttp, u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { k as defineStore, h as useAppStore } from "../server.mjs";
const baseUrl = `/orders`;
const http = useHttp();
const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orders: [],
    order: {
      userId: null,
      orders: [],
      deliveryType: "Pickup",
      deliveryAddress: "CEMADEF",
      instantDelivery: false,
      deliveryFee: 0,
      modeOfPayment: "Cash on Delivery",
      total: 0,
      isPaid: false
    }
  }),
  getters: {
    app() {
      const app = useAppStore();
      return app;
    },
    helpers() {
      return useHelpers();
    },
    headers() {
      return {
        Authorization: `Bearer ${this.app.token}`
      };
    }
  },
  actions: {
    setOrderPayload(payload) {
      this.order = payload;
    },
    resetOrderPayload() {
      this.order = {
        userId: null,
        orders: [],
        deliveryType: "Pickup",
        deliveryAddress: "CEMADEF",
        instantDelivery: false,
        deliveryFee: 0,
        modeOfPayment: "Cash on delivery",
        total: 0,
        isPaid: false
      };
    },
    async getOrders(enableLoader = true) {
      this.app.load(enableLoader);
      this.app.setError(false);
      try {
        const { response } = await http(`${baseUrl}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
        return Promise.reject(error.message);
      }
    },
    async businessOrder(enableLoader = true, businessId) {
      this.app.load(enableLoader);
      this.app.setError(false);
      try {
        const { response } = await http(`${baseUrl}/business/${businessId}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async customerOrders() {
      this.app.load(true);
      this.app.setError(false);
      try {
        const { response } = await http(`${baseUrl}/customer`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async singleOrder(enableLoader = true, order) {
      this.app.load(enableLoader);
      this.app.setError(false);
      try {
        const { response } = await http(`${baseUrl}/single/${order}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async orderStatus(order) {
      this.app.load(true);
      this.app.setError(false);
      try {
        const { response } = await http(`${baseUrl}/status/${order}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (error) {
        this.app.load(false);
      }
    },
    async createOrder(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Order created successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateOrder(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/${body.orderId}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Order updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async changeOrderStatus(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/status/${body.orderId}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Order status updated successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteOrder(order) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseUrl}/${order}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message ?? "Order deleted successfully!"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
  // persist: true,
});
export {
  useOrderStore as u
};
//# sourceMappingURL=order-DPjXLXeY.js.map
