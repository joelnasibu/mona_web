import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './delete-confirmation-j8Kot4NH.mjs';
import { V as VSwitch, _ as __nuxt_component_1, a as __nuxt_component_0$1 } from './index-8rIeyPMo.mjs';
import { l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-XJs56wMu.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import './page-header-zc_xglZV.mjs';
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-jw0wqd8u.mjs';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './VBtn-HIzP-EnY.mjs';
import './position-WfCzcf5A.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VDivider-JUM-rhUg.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VCard-M6VezhhA.mjs';
import './VAvatar-Tkx6eOqd.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './VTextField-Q67PbqhP.mjs';
import './VMenu-Xf_H0UU6.mjs';
import './stepper-ipq6mb5U.mjs';
import './index-CbyoTlMq.mjs';
import 'vue-advanced-cropper';
import './VContainer-jF5qmVp8.mjs';
import './VRow-lyrtfIhE.mjs';
import './select-_AXsm2yX.mjs';
import './VList-0_bPAEAt.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-6aCeGZz9.mjs';
import './VCheckboxBtn-uKZxiDvG.mjs';
import './VSelectionControl-zNSOl8MJ.mjs';
import './useRules-YQBIqClL.mjs';
import './calendar-date-Z0smB_LV.mjs';
import './VSheet-SPKhQ0zP.mjs';
import './business-xWrgr4rc.mjs';
import './industries-QZcWiunL.mjs';
import './job-types-oLkCbsLF.mjs';
import './categories-OjbYYiNy.mjs';
import './subcategories-bX2ZHLNb.mjs';
import './VForm-tbklh6Vg.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-PqZmnZiL.mjs';
import './VBadge-rQ5h9Gnj.mjs';
import './VWindowItem-49fT4O5I.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { error, loading } = storeToRefs(useAppStore());
    const { getJob, deleteJob, updateJob } = useJobStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getJob(id)), __temp = await __temp, __restore(), __temp));
    const view = ref(true);
    const deleteDialog = ref(false);
    const confirmDelete = async () => {
      await deleteJob(data.value.id);
      if (!error.value)
        navigateTo({ name: "admin-jobs" });
    };
    const toggleStatus = async () => {
      setTimeout(async () => {
        await updateJob(data.value);
      }, 500);
    };
    useSeoMeta({
      title: "Job Details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageDetailsHeader = __nuxt_component_0;
      const _component_AdminJobPreview = __nuxt_component_1;
      const _component_AdminJobInputs = __nuxt_component_0$1;
      const _component_AdminDeleteConfirmation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageDetailsHeader, {
        view: "",
        route: "admin-jobs",
        onToggleView: ($event) => view.value = !unref(view),
        onDelete: ($event) => deleteDialog.value = true
      }, null, _parent));
      _push(`<div class="mt-4"><div class="bg-card pa-3 d-flex text-caption align-center"><span>${ssrInterpolate(unref(data).jobName + " : " + unref(data).jobId)}</span>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(VSwitch, {
        modelValue: unref(data).jobstatus,
        "onUpdate:modelValue": ($event) => unref(data).jobstatus = $event,
        "false-value": "CLOSED",
        "true-value": "OPEN",
        loading: unref(loading),
        class: "text-caption",
        density: "compact",
        label: unref(data).jobstatus.toUpperCase(),
        onClick: toggleStatus,
        color: "link"
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "font-size": "0.65rem" })}" class="mt-n8 text-grey text-center ml-n5"> Click to ${ssrInterpolate(unref(data).jobstatus == "OPEN" ? "close" : "open")} this job </div></div></div><div class="">`);
      if (unref(view)) {
        _push(ssrRenderComponent(_component_AdminJobPreview, { payload: unref(data) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_AdminJobInputs, { payload: unref(data) }, null, _parent));
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AdminDeleteConfirmation, {
        dialog: unref(deleteDialog),
        data: {
          name: "Job",
          itemTitle: unref(data).jobName,
          id: unref(data).jobId
        },
        onCancel: ($event) => deleteDialog.value = false,
        onDelete: confirmDelete
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/jobs/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-GDOG2AJ2.mjs.map
