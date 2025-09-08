import { l as useRoute, m as useDevice, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, useSSRContext } from "vue";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute(), id = route.params.id;
    route.params.name;
    route.query.type;
    const { capitalizeFirstLetter } = useHelpers(), { isMobile } = useDevice();
    ref(isMobile ? "80px" : "200px");
    const { getSingleBusiness } = useBusinessStore(), data = ref(([__temp, __restore] = withAsyncContext(() => getSingleBusiness(null, id)), __temp = await __temp, __restore(), __temp));
    useSeoMeta({
      title: ` ${capitalizeFirstLetter(data.value.businessName)} profile` ?? "Company Profile",
      description: data.value.overview ?? "",
      ogTitle: `${capitalizeFirstLetter(data.value.businessName)} profile` ?? "Company Profile",
      ogDescription: data.value.overview ?? "",
      ogImage: data.value.image,
      twitterTitle: `${capitalizeFirstLetter(data.value.businessName)} profile` ?? "Company Profile",
      twitterDescription: data.value.overview ?? "",
      twitterImage: data.value.image
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/[name]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-OXcZ78gB.js.map
