import { k as defineStore, h as useAppStore, s as storeToRefs, j as __nuxt_component_0 } from "../server.mjs";
import { a as useHttp, u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, computed, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
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
const http = useHttp();
const baseURL = `/email-templates`;
const useTemplateStore = defineStore("templates", {
  state: () => ({
    //
  }),
  getters: {
    app() {
      const app = useAppStore();
      return app;
    },
    helpers() {
      return useHelpers();
    }
  },
  actions: {
    async getTemplates() {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${baseURL}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async createTemplate(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getTemplate(id) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${baseURL}/${id}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async updateTemplate(body) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${body.id}`, {
          method: "PUT",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async deleteTemplate(id) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await http(`${baseURL}/${id}`, {
          method: "DELETE"
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: res.message
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async getJobApplicationTemplate(status) {
      this.app.setError(false);
      this.app.load(true);
      try {
        const { response } = await http(`${baseURL}/title/${status}`, {
          method: "GET"
        });
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
const _sfc_main = {
  __name: "email-templates",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { filterDataPerField } = useHelpers();
    useAppStore();
    storeToRefs(useAppStore());
    const { getTemplates, createTemplate, updateTemplate, deleteTemplate } = useTemplateStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getTemplates()), __temp = await __temp, __restore(), __temp));
    computed(() => {
      return filterDataPerField(data.value, search.value);
    });
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      title: "",
      template: ""
    });
    ref(false);
    useHead({
      title: "Email Templates"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/email-templates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=email-templates-n3c99zI1.js.map
