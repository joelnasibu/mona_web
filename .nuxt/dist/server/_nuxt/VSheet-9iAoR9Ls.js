import { toRef, createVNode } from "vue";
import { m as makeBorderProps, a as makeElevationProps, b as makeRoundedProps, u as useBorder, c as useElevation, d as useRounded } from "./rounded-jA9LRAgf.js";
import { b as useBackgroundColor } from "./color-rZjm0Y7u.js";
import { m as makeComponentProps, a as makeTagProps, u as useRender } from "./tag-pIHjuosL.js";
import { d as makeDimensionProps, g as useDimension } from "./index-3E7yy1qS.js";
import { a as makeLocationProps, b as makePositionProps, d as useLocation, e as usePosition } from "./position-AkaJaFJy.js";
import { p as propsFactory, o as makeThemeProps, g as genericComponent, q as provideTheme } from "../server.mjs";
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
export {
  VSheet as V,
  makeVSheetProps as m
};
//# sourceMappingURL=VSheet-9iAoR9Ls.js.map
