import { m as useDevice } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, unref, renderSlot, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';

const _sfc_main = {
  __name: "mid-screen-layout",
  __ssrInlineRender: true,
  props: {
    lg: {
      type: Number,
      default: 11
    },
    xl: {
      type: Number,
      default: 10
    }
  },
  setup(__props) {
    const { isMobile } = useDevice();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "pa-0",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: ["ma-auto", { "ma-0": unref(isMobile) }],
              justify: "center",
              align: "center",
              "no-gutters": unref(isMobile)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    xs: "12",
                    sm: "12",
                    md: "12",
                    lg: __props.lg,
                    xl: __props.xl,
                    class: "pa-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      xs: "12",
                      sm: "12",
                      md: "12",
                      lg: __props.lg,
                      xl: __props.xl,
                      class: "pa-0"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["lg", "xl"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                class: ["ma-auto", { "ma-0": unref(isMobile) }],
                justify: "center",
                align: "center",
                "no-gutters": unref(isMobile)
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    xs: "12",
                    sm: "12",
                    md: "12",
                    lg: __props.lg,
                    xl: __props.xl,
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["lg", "xl"])
                ]),
                _: 3
              }, 8, ["class", "no-gutters"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/mid-screen-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=mid-screen-layout-b8tbDczG.mjs.map
