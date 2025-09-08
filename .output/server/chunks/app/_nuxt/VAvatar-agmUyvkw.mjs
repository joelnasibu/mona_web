import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import { createVNode, capitalize, camelize, h } from 'vue';
import { p as propsFactory, I as IconValue, o as makeThemeProps, g as genericComponent, q as provideTheme } from '../server.mjs';
import { m as makeDensityProps, c as makeSizeProps, b as makeVariantProps, g as useVariant, u as useDensity, d as useSize, V as VIcon, j as genOverlays } from './index-3E7yy1qS.mjs';
import { m as makeRoundedProps, b as useRounded } from './rounded-jA9LRAgf.mjs';
import { V as VImg } from './VImg-_57rVikU.mjs';

function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name != null ? name : capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => {
        var _a2;
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});

export { VAvatar as V, createSimpleFunctional as c };
//# sourceMappingURL=VAvatar-agmUyvkw.mjs.map
