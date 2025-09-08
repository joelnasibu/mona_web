import { h as useAppStore, s as storeToRefs, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { ref, computed, watchEffect, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useOrderStore } from "./order-DPjXLXeY.js";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "date-fns";
import "date-fns/locale";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      replaceObjectEmptyStrings,
      filterDataPerField,
      currencyFormat,
      dateFormat_Time
    } = useHelpers();
    const appStore = useAppStore();
    storeToRefs(appStore);
    const { getUsers } = useAuthStore();
    const { getOrders } = useOrderStore();
    const { getApprovedBusinesses } = useBusinessStore();
    const data = ref([]);
    const users = ref([]);
    const businessData = ref([]);
    const loadData = ref(false);
    const search = ref("");
    const searchBusiness = ref("");
    ref({});
    const orderStatus = ref("PLACED");
    computed(() => {
      let list = [
        { title: "Date", value: "dateCreated", show: true },
        { title: "Order Id", value: "orderId", show: true },
        { title: "Customer", value: "customer.names", show: true },
        { title: "Amount", value: "total", show: true },
        { title: "Mode of Payment", value: "modeOfPayment", show: true },
        { title: "Status", value: "orderStatus", show: true },
        { title: "Orders", value: "orders", show: true }
        // { title: "Action", value: "action", show: true },
      ];
      return list.filter((i) => i.show);
    });
    const orderStatuses = ref([
      { name: "Placed", value: "PLACED" },
      { name: "Processing", value: "PROCESSING" },
      { name: "Confirmed", value: "CONFIRMED" },
      { name: "On the Way", value: "ON THE WAY" },
      { name: "Delivered", value: "DELIVERED" },
      { name: "Cancelled", value: "CANCELLED" },
      { name: "Returned", value: "RETURNED" }
    ]);
    const getData = async () => {
      loadData.value = true;
      data.value = await getOrders();
      orderStatuses.value.forEach((val) => {
        val.length = data.value.filter((i) => i.orderStatus == val.value).length;
      });
      users.value = await getUsers(false);
      const allData = await getApprovedBusinesses(false);
      loadData.value = false;
      businessData.value = allData;
    };
    computed(() => {
      return filterDataPerField(data.value, search.value, {
        orderStatus: orderStatus.value
      });
    });
    computed(() => {
      return filterDataPerField(businessData.value, searchBusiness.value);
    });
    watchEffect(() => {
      getData();
    });
    useSeoMeta({
      title: "Orders"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-0RXVjD9X.js.map
