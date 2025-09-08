import { h as useAppStore, s as storeToRefs, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { ref, watchEffect, computed, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useBusinessTypeStore } from './business-types-8YqDhEuJ.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      replaceObjectEmptyStrings,
      filterDataPerField,
      getDetails,
      getFullnames
    } = useHelpers();
    const appStore = useAppStore();
    const { loading, currentUser, error, isAdmin, isVendor } = storeToRefs(appStore);
    const { getBusinessTypes } = useBusinessTypeStore();
    const businessTypes = ref([]);
    const { getUsers } = useAuthStore();
    const users = ref([]);
    const { getBusinesses, approveBusiness } = useBusinessStore();
    const data = ref([]);
    const loadData = ref(false);
    const getData = async () => {
      loadData.value = true;
      let allData = await getBusinesses();
      loadData.value = false;
      if (currentUser.value.accessLevel < 3)
        users.value = await getUsers(false);
      data.value = allData.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.userId === currentUser.value.userId : i
      );
      businessTypes.value = await getBusinessTypes(false);
      data.value = replaceObjectEmptyStrings(data.value);
    };
    watchEffect(() => {
      getData();
    });
    computed(() => {
      return filterDataPerField(data.value, search.value, {
        approved: approved.value
      });
    });
    const search = ref("");
    computed(() => {
      let list = [
        { title: "#", value: "no", show: false },
        { title: "ID", value: "code", show: true },
        { title: "Name", value: "businessName", show: true },
        { title: "Type", value: "type", show: true },
        {
          title: "Owner",
          value: "userId",
          show: currentUser.value.accessLevel < 3
        },
        { title: "Responsible", value: "contactPerson.names", show: true },
        { title: "Contact", value: "phone", show: true },
        { title: "Verify", value: "verified", show: approved.value },
        {
          title: "Approved",
          value: "publish",
          show: !approved.value && !isVendor.value
        },
        { title: "Action", value: "action", show: true }
      ];
      return list.filter((h) => h.show);
    });
    const approved = ref(true);
    ref(false);
    ref({});
    useSeoMeta({
      title: "Businesses"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/businesses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1KF3fXkI.mjs.map
