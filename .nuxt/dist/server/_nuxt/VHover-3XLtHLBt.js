import { m as makeDelayProps, u as useDelay } from "./delay-5iXTA9KV.js";
import { p as propsFactory, g as genericComponent, w as useProxiedModel } from "../server.mjs";
const makeVHoverProps = propsFactory({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: void 0
  },
  ...makeDelayProps()
}, "VHover");
const VHover = genericComponent()({
  name: "VHover",
  props: makeVHoverProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isHovering = useProxiedModel(props, "modelValue");
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => !props.disabled && (isHovering.value = value));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, {
        isHovering: isHovering.value,
        props: {
          onMouseenter: runOpenDelay,
          onMouseleave: runCloseDelay
        }
      });
    };
  }
});
export {
  VHover as V
};
//# sourceMappingURL=VHover-3XLtHLBt.js.map
