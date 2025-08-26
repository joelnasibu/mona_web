export default class ProductModel {
  constructor(product) {
    this.product = product;
  }
  get formatedProductRouteTitle() {
    return String(this.product.productName).toLowerCase().replaceAll(" ", "-");
  }
  navigateToProductDetails() {
    navigateTo({
      name: "shop-product-name-id",
      params: {
        name: this.formatedProductRouteTitle,
        id: this.product.productId ?? this.product.objectID,
      },
    });
  }
}