import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, computed, watchEffect, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useSizeStore } from "./sizes-7BdVubsf.js";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
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
  __name: "sizes",
  __ssrInlineRender: true,
  setup(__props) {
    const { filterDataPerField, getDetails } = useHelpers();
    storeToRefs(useAppStore());
    const { getSizes, getSizesPerCategory, createSize, updateSize, deleteSize } = useSizeStore();
    const data = ref([]);
    computed(() => {
      return categoryFilter.value !== "ALL" ? filterDataPerField(data.value, search.value, {
        category: categoryFilter.value
      }) : filterDataPerField(data.value, search.value);
    });
    const { getCategories } = useCategoryStore();
    const categories = ref([]);
    const loadData = ref(false);
    const getData = async () => {
      loadData.value = true;
      categories.value = await getCategories(false);
      data.value = await getSizes(true);
      loadData.value = false;
    };
    watchEffect(() => {
      getData();
    });
    computed(() => {
      return categories.value.map((c) => c.category);
    });
    ref("");
    computed(() => {
      return [
        "ALL",
        ...new Set(
          data.value.map(
            (c) => {
              var _a;
              return (_a = getDetails(categories.value, c.categoryId)) == null ? void 0 : _a.category;
            }
          )
        )
      ];
    });
    const categoryFilter = ref("ALL");
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      size: "",
      categoryId: 0
    });
    ref(false);
    useHead({
      title: "Sizes"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/sizes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sizes-gV-okYUo.js.map
