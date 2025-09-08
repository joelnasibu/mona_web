import { l as useRoute, u as useRouter, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { computed, ref, withAsyncContext, watch, useSSRContext } from "vue";
import { u as useHead } from "./index-S1hhTCs3.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
import { u as useSubcategoryStore } from "./subcategories-P-PAKG_4.js";
import { u as useProductStore } from "./products-e11RfeWn.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "date-fns";
import "date-fns/locale";
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { destructureSanitizedTitle, capitalizeFirstLetter } = useHelpers();
    const route = useRoute();
    const router = useRouter();
    const categoryParam = route.params.name;
    if (!route.query.view)
      router.push({ query: { view: "list" } });
    const category = computed(() => {
      return listCategories.value.find(
        (c) => String(c.category).toLowerCase() === destructureSanitizedTitle(categoryParam).toLowerCase()
      );
    });
    const categoryName = computed(() => {
      var _a;
      return capitalizeFirstLetter((_a = category.value) == null ? void 0 : _a.category);
    });
    const { getCategoriesByType } = useCategoryStore();
    const listCategories = ref(([__temp, __restore] = withAsyncContext(() => getCategoriesByType(false, "SHOP")), __temp = await __temp, __restore(), __temp));
    const { getSubcategoriesPerCategory } = useSubcategoryStore();
    ref(
      ([__temp, __restore] = withAsyncContext(() => {
        var _a;
        return getSubcategoriesPerCategory(false, (_a = category.value) == null ? void 0 : _a.id);
      }), __temp = await __temp, __restore(), __temp)
    );
    const { publishedProducts } = useProductStore();
    const products = ref(([__temp, __restore] = withAsyncContext(() => publishedProducts()), __temp = await __temp, __restore(), __temp));
    const productsMatchingCategory = computed(() => {
      let filtered = products.value.filter(
        (prod) => {
          var _a;
          return String(prod.category.name).toLowerCase() === String((_a = category.value) == null ? void 0 : _a.category).toLowerCase();
        }
      );
      return {
        all: filtered,
        deals: filtered.filter((item) => item.discount > 0)
      };
    });
    computed(() => {
      return productsMatchingCategory.value.all.filter((item) => {
        return !allFilters.value.length ? item : allFilters.value.category === 0 > item ? allFilters.value.isCategory ? item.categoryId === allFilters.value.category : item.category.subcategory === allFilters.value.category : item.category.subcategory.toLowerCase() === allFilters.value.category.toLowerCase();
      });
    });
    const listView = ref(route.query.view === "list");
    watch(
      () => listView.value,
      (val) => {
        router.push({
          query: { view: val ? "list" : "grid" }
        });
      }
    );
    ref("");
    [
      { title: "Home", route: "/shop" },
      { title: categoryName.value }
    ];
    const allFilters = ref({});
    useHead({
      title: `Buy ${categoryName.value}`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_name_-yZ0dJt4_.js.map
