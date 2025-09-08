import { _ as __nuxt_component_0 } from './page-details-header-qIUvG5F0.mjs';
import { V as VSwitch, _ as __nuxt_component_1, a as __nuxt_component_0$1 } from './index-CetkiDKE.mjs';
import { _ as __nuxt_component_3 } from './delete-confirmation-8DYwAm4D.mjs';
import { l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-uJv1lqGQ.mjs';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import './page-header-rZyOPLsZ.mjs';
import './useHelpers-9BVYUhTt.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-3E7yy1qS.mjs';
import './color-rZjm0Y7u.mjs';
import './tag-pIHjuosL.mjs';
import './VBtn-yNf12l4D.mjs';
import './rounded-jA9LRAgf.mjs';
import './position-AkaJaFJy.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VDivider-Ce8J4Sp3.mjs';
import './stepper-ipq6mb5U.mjs';
import './index-RXRlxYy9.mjs';
import './VDialog-acnQ15uX.mjs';
import './VCard-MEGoD2_3.mjs';
import './VAvatar-agmUyvkw.mjs';
import './VImg-_57rVikU.mjs';
import './index-q-0zZOOG.mjs';
import './VOverlay-bpCAw6Z_.mjs';
import './VTextField-8SU2p1Ep.mjs';
import './index-d8gkbdU6.mjs';
import './delay-5iXTA9KV.mjs';
import './lazy-8QocgoLY.mjs';
import './VMenu-bZwLMGPK.mjs';
import 'vue-advanced-cropper';
import './VContainer-jF5qmVp8.mjs';
import './VRow-lyrtfIhE.mjs';
import './select-sjn27vix.mjs';
import './VList-hhjvxiav.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-Omi4Z8sK.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';
import './useRules-Lv1tnQPg.mjs';
import './calendar-date-IHPjl74u.mjs';
import './VSheet-9iAoR9Ls.mjs';
import './business-1K3_QQBT.mjs';
import './industries-lHfxNRn7.mjs';
import './job-types-bFYimokk.mjs';
import './categories-JvrMV5cl.mjs';
import './subcategories-P-PAKG_4.mjs';
import './VForm-wrdi8IEW.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-W1zqEte6.mjs';
import './VBadge-xHT1Vb9M.mjs';
import './VWindowItem-BpMO-iOS.mjs';
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
//# sourceMappingURL=_id_-aYOxpyoz.mjs.map
