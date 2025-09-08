import { ae as useDisplay, m as useDevice, h as useAppStore, s as storeToRefs, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, computed, watchEffect, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
import { u as useJobStore } from "./jobs-uJv1lqGQ.js";
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
    const { smAndDown } = useDisplay();
    const { isMobile } = useDevice();
    const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    const appStore = useAppStore();
    const { loading, error, currentUser } = storeToRefs(appStore);
    const { getBusinesses } = useBusinessStore();
    const businesses = ref([]);
    const business = ref({ name: "ALL BUSINESSES", id: 0 });
    computed(() => {
      let businessMap = businesses.value.map((c) => c.businessName);
      return ["ALL BUSINESSES", ...businessMap];
    });
    const { getJobs, publishJob } = useJobStore();
    const data = ref([]);
    const getData = async () => {
      let allData = await getJobs();
      businesses.value = await getBusinesses(false);
      data.value = allData.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.createdBy === currentUser.value.userId : i
      );
      data.value = replaceObjectEmptyStrings(data.value);
    };
    watchEffect(() => {
      getData();
    });
    computed(() => {
      return business.value.name !== "ALL BUSINESSES" ? filterDataPerField(data.value, search.value, {
        isPublished: status.value,
        businessId: business.value.id
      }) : filterDataPerField(data.value, search.value, {
        isPublished: status.value
      });
    });
    computed(() => {
      return isMobile || smAndDown.value;
    });
    const search = ref("");
    const status = ref(true);
    computed(() => {
      let list = [
        // { title: "#", value: "no", show: true },
        { title: "ID", value: "jobId", show: true },
        { title: "Name", value: "jobName", show: true },
        // { title: "Job type", value: "jobtype", show: true },
        { title: "Category", value: "category.name", show: true },
        //   { title: "Subcategory", value: "category.subcategory" },
        { title: "Business", value: "business.businessName", show: true },
        { title: "Applications", value: "applications", show: status.value },
        { title: "Status", value: "jobstatus", show: status.value },
        { title: "Published", value: "publish", show: !status.value },
        { title: "Action", value: "action", show: true }
      ];
      return list.filter((h) => h.show);
    });
    ref(false);
    ref({});
    useSeoMeta({
      title: "Jobs"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/jobs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-n9kC_fVU.js.map
