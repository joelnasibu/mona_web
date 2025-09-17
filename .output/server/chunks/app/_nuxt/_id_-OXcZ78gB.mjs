import { l as useRoute, m as useDevice, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, withAsyncContext, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useBusinessStore } from './business-1K3_QQBT.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'date-fns';
import 'date-fns/locale';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    let __temp, __restore;
    const route = useRoute(), id = route.params.id;
    route.params.name;
    route.query.type;
    const { capitalizeFirstLetter } = useHelpers(), { isMobile } = useDevice();
    ref(isMobile ? "80px" : "200px");
    const { getSingleBusiness } = useBusinessStore(), data = ref(([__temp, __restore] = withAsyncContext(() => getSingleBusiness(null, id)), __temp = await __temp, __restore(), __temp));
    useSeoMeta({
      title: (_a = ` ${capitalizeFirstLetter(data.value.businessName)} profile`) != null ? _a : "Company Profile",
      description: (_b = data.value.overview) != null ? _b : "",
      ogTitle: (_c = `${capitalizeFirstLetter(data.value.businessName)} profile`) != null ? _c : "Company Profile",
      ogDescription: (_d = data.value.overview) != null ? _d : "",
      ogImage: data.value.image,
      twitterTitle: (_e = `${capitalizeFirstLetter(data.value.businessName)} profile`) != null ? _e : "Company Profile",
      twitterDescription: (_f = data.value.overview) != null ? _f : "",
      twitterImage: data.value.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-OXcZ78gB.mjs.map
