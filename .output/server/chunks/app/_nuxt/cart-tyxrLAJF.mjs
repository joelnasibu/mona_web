import { k as defineStore, h as useAppStore } from '../server.mjs';

const useCartStore = defineStore("cart", {
  state: () => ({
    //
    cart: [],
    opened: false
  }),
  persist: true,
  getters: {
    app() {
      const app = useAppStore();
      return app;
    },
    subTotal() {
      this.cart.forEach((i) => {
        i.totalPrice = i.quantity * i.price;
      });
      return this.cart.map((i) => i.totalPrice).reduce((a, b) => a + b, 0);
    }
  },
  actions: {
    findProduct(prod) {
      return this.cart.find((i) => i.productId === prod.productId);
    },
    toggleProductInCart(payload) {
      let item = this.findProduct(payload);
      let isSameQuantity = (item == null ? void 0 : item.quantity) === payload.quantity;
      if (item) {
        if (isSameQuantity) {
          this.cart.splice(this.cart.indexOf(item), 1);
          if (this.cart.length === 0 && this.opened)
            this.toggleCartStatus();
        } else
          this.cart[this.cart.indexOf(item)].quantity = payload.quantity;
      } else
        this.cart.push(payload);
      this.app.toggleSnackbar({
        status: true,
        type: "success",
        message: item && !isSameQuantity ? "Quantity updated" : `Item ${item ? "removed" : "added"} successfully`
      });
    },
    increaseQuantity(item, increase) {
      let i = this.cart.indexOf(item);
      let qty = this.cart[i].quantity;
      this.cart[i].quantity = increase ? qty + 1 : qty - 1;
    },
    clearCart() {
      this.cart = [];
    },
    toggleCartStatus() {
      this.opened = !this.opened;
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cart-tyxrLAJF.mjs.map
