import { toRef, createVNode, mergeProps, withDirectives, vShow } from 'vue';
import { a as useBackgroundColor, u as useTextColor } from './color-rZjm0Y7u.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import { p as propsFactory, I as IconValue, o as makeThemeProps, g as genericComponent, E as useLocale, an as useTheme, ao as pickWithRest } from '../server.mjs';
import { m as makeLocationProps, a as useLocation } from './position-AkaJaFJy.mjs';
import { m as makeRoundedProps, b as useRounded } from './rounded-jA9LRAgf.mjs';
import { m as makeTransitionProps, M as MaybeTransition } from './index-q-0zZOOG.mjs';
import { V as VIcon } from './index-3E7yy1qS.mjs';

const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "textColor"));
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      var _a, _b;
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? +((_a = props.offsetY) != null ? _a : 0) : ["left", "right"].includes(side) ? +((_b = props.offsetX) != null ? _b : 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= +props.max ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});

export { VBadge as V };
//# sourceMappingURL=VBadge-xHT1Vb9M.mjs.map
