import { useSSRContext, ref, watch, nextTick, computed, mergeProps, createVNode, withCtx, toDisplayString, renderSlot } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { a as VCardTitle } from './VCard-M6VezhhA.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { c as makeVOverlayProps, d as useScopeId, V as VOverlay } from './VOverlay-NMZIuW_y.mjs';
import { f as forwardRefs } from './VTextField-Q67PbqhP.mjs';
import { p as propsFactory, g as genericComponent, w as useProxiedModel } from '../server.mjs';
import { a as VDialogTransition } from './VMenu-Xf_H0UU6.mjs';
import { V as VDefaultsProvider } from './index-jw0wqd8u.mjs';
import { u as useRender } from './tag-pIHjuosL.mjs';

const _sfc_main = {
  __name: "dialog-header",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCardTitle, mergeProps({
        class: "text-body-2 pa-0 d-flex align-center ga-2 bg-drawer position-sticky",
        style: { "top": "0", "z-index": "2" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-close",
              size: "small",
              rounded: "lg",
              title: "Close",
              onClick: ($event) => emits("close"),
              variant: "text",
              class: "rounded-te-0 rounded-be-0"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.title)}</span>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(VBtn, {
                icon: "mdi-close",
                size: "small",
                rounded: "lg",
                title: "Close",
                onClick: ($event) => emits("close"),
                variant: "text",
                class: "rounded-te-0 rounded-be-0"
              }, null, 8, ["onClick"]),
              createVNode("span", null, toDisplayString(__props.title), 1),
              createVNode(VSpacer),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/dialog-header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

export { VDialog as V, __nuxt_component_2 as _ };
//# sourceMappingURL=VDialog-JcAH9Fxa.mjs.map
