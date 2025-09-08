import { l as useRoute, s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { getFullnames } = useHelpers();
    storeToRefs(useAppStore());
    const { getUser, deleteUser, updateUser } = useAuthStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getUser({ id })), __temp = await __temp, __restore(), __temp));
    ref(true);
    ref(false);
    ref(false);
    ref(null);
    ref(false);
    ref(false);
    ref({
      oldPassword: "",
      newPassword: "",
      confirm: ""
    });
    ref(false);
    useSeoMeta({
      title: data.value ? `${getFullnames(data.value)} - Details` : "User Details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-XNQan7Vh.js.map
