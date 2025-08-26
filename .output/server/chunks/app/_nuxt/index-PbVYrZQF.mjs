import { h as useAppStore, s as storeToRefs, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { ref, computed, watchEffect, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-XJs56wMu.mjs';
import { u as useBusinessStore } from './business-xWrgr4rc.mjs';
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
    const { loading, currentUser, error, isAdmin, isVendor } = storeToRefs(appStore);
    const { getUsers } = useAuthStore();
    const { getJobApplications } = useJobStore();
    const { getApprovedBusinesses } = useBusinessStore();
    const data = ref([]);
    const users = ref([]);
    const loadData = ref(false);
    const search = ref("");
    const applicationStatus = ref("ALL");
    ref(false);
    const searchStatus = ref("");
    computed(() => {
      let list = [
        { title: "Application Id", value: "applicationId", show: true },
        { title: "Job Offer", value: "job.jobName", show: true },
        { title: "Applicants", value: "applicant.name", show: true },
        { title: "Date Submitted", value: "dateCreated", show: true },
        { title: "Status", value: "applicationStatus", show: false },
        { title: "Score", value: "applicationScore", show: true },
        { title: "Process", value: "applications", show: true }
        // { title: "Action", value: "action", show: true },
      ];
      return applicationStatus.value == "ALL" ? list : list.filter((i) => i.show);
    });
    const applicationStatuses = ref([
      "ALL",
      "CONFIRMED",
      "INTERVIEWED",
      "MARKED",
      "ACCEPTED",
      "REJECTED"
    ]);
    computed(() => {
      return applicationStatuses.value.filter((val) => {
        return val.toLowerCase().includes(searchStatus.value.toLowerCase());
      });
    });
    computed(() => {
      const advanced = applicationStatus.value !== "ALL" ? {
        applicationStatus: applicationStatus.value
      } : {};
      return filterDataPerField(data.value, search.value, advanced).filter((val) => {
        return business.value.name !== "ALL BUSINESSES" ? val.job.business.businessName == business.value.name : val.applicationStatus !== "SUBMITTED";
      });
    });
    const businesses = ref([]);
    const business = ref({ name: "ALL BUSINESSES", id: 0 });
    computed(() => {
      let businessMap = businesses.value.map((c) => c.businessName);
      return ["ALL BUSINESSES", ...businessMap];
    });
    const getData = async () => {
      loadData.value = true;
      data.value = await getJobApplications();
      users.value = await getUsers(false);
      const allData = await getApprovedBusinesses(false);
      loadData.value = false;
      businesses.value = allData.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.userId === currentUser.value.userId : i
      );
    };
    watchEffect(() => {
      getData();
    });
    useSeoMeta({
      title: "Job Applications"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/job-applications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-PbVYrZQF.mjs.map
