import { useSSRContext } from 'vue';
import { h as useAppStore, s as storeToRefs } from '../server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "status",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const { error, loading, token, currentUser, profileImage } = storeToRefs(appStore);
    console.log(currentUser.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>Coming soon</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=status-vjnabYIO.mjs.map
