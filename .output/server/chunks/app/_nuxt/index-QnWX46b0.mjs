import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { ref, computed, watchEffect, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getFullnames, replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    const { currentUser, loading } = storeToRefs(useAppStore());
    const { getBusinesses } = useBusinessStore(), businesses = ref([]), business = ref({});
    computed(() => {
      let businessMap = businesses.value.map((c) => c.businessName);
      return [...businessMap];
    });
    const { getUsers, getBusinessUsers, emailVerified } = useAuthStore(), data = ref([]), getData = async () => {
      var _a, _b;
      let allBusinesses = await getBusinesses(false);
      businesses.value = allBusinesses.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.userId === currentUser.value.userId : i
      );
      business.value = {
        name: (_a = businesses.value[0]) == null ? void 0 : _a.businessName,
        id: (_b = businesses.value[0]) == null ? void 0 : _b.id
      };
      data.value = currentUser.value.accessLevel === 3 ? await getVendorBusinessUsers() : await getUsers();
      filterUsersByAccessLevel();
      data.value = replaceObjectEmptyStrings(data.value);
    }, filterUsersByAccessLevel = () => {
      data.value = data.value.filter(
        (u) => {
          var _a, _b;
          return ((_a = currentUser.value) == null ? void 0 : _a.accessLevel) == 1 ? u : currentUser.value.accessLevel == 2 ? u.accessLevel > 1 : u.accessLevel == ((_b = currentUser.value) == null ? void 0 : _b.accessLevel);
        }
      );
    };
    computed(() => {
      const advanced = accessLevel.value !== "All" ? { role: accessLevel.value } : {};
      return filterDataPerField(data.value, search.value, advanced);
    });
    const getVendorBusinessUsers = async () => {
      let newUsers = business.value.id ? await getBusinessUsers({
        enableLoader: false,
        business: business.value.id
      }) : [];
      return newUsers;
    };
    watchEffect(() => {
      getData();
    });
    const search = ref("");
    const headers = [
      { title: "#", value: "no" },
      { title: "Name", value: "name" },
      { title: "Username", value: "username" },
      { title: "Role", value: "role", hide: true },
      { title: "Phone", value: "phone" },
      { title: "Email", value: "email" },
      { title: "Email verifictaion", value: "emailVerified" },
      { title: "Action", value: "action" }
    ];
    computed(() => {
      return accessLevel.value === "All" ? headers : headers.filter((h) => !h.hide);
    });
    const btns = [
      { role: "All", accessLevel: [1, 2] },
      { role: "Administrator", accessLevel: [1] },
      // { role: "Cemadef", accessLevel: [1, 2] },
      { role: "Vendor", accessLevel: [1, 2] },
      { role: "End user", accessLevel: [1, 2] }
    ], accessLevel = ref("All");
    computed(() => {
      return btns.filter(
        (btn) => {
          var _a;
          return btn.accessLevel.includes((_a = currentUser.value) == null ? void 0 : _a.accessLevel);
        }
      );
    });
    useSeoMeta({
      title: "Users"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-QnWX46b0.mjs.map
