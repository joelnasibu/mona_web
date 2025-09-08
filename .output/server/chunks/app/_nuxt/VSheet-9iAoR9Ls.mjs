import { toRef, createVNode } from 'vue';
import { c as makeBorderProps, a as makeElevationProps, m as makeRoundedProps, d as useBorder, u as useElevation, b as useRounded } from './rounded-jA9LRAgf.mjs';
import { a as useBackgroundColor } from './color-rZjm0Y7u.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import { e as makeDimensionProps, h as useDimension } from './index-3E7yy1qS.mjs';
import { m as makeLocationProps, d as makePositionProps, a as useLocation, e as usePosition } from './position-AkaJaFJy.mjs';
import { p as propsFactory, o as makeThemeProps, g as genericComponent, q as provideTheme } from '../server.mjs';

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

export { VSheet as V, makeVSheetProps as m };
//# sourceMappingURL=VSheet-9iAoR9Ls.mjs.map
