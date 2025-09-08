import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { ref, computed, withAsyncContext, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { _ as _export_sfc, h as useAppStore, s as storeToRefs } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
import { a as VMenu } from "./VMenu-bZwLMGPK.js";
import { V as VList, a as VListItem } from "./VList-hhjvxiav.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
const _sfc_main = {
  __name: "telephone",
  __ssrInlineRender: true,
  props: {
    number: [String, Number],
    required: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "Telephone number"
    }
  },
  emits: ["setPhone"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emits = __emit;
    const { digitsOnly } = useHelpers();
    const { number } = useRules();
    const country = ref({
      name: {
        common: "Kenya",
        official: "Republic of Kenya",
        nativeName: {
          eng: {
            official: "Republic of Kenya",
            common: "Kenya"
          },
          swa: {
            official: "Republic of Kenya",
            common: "Kenya"
          }
        }
      },
      tld: [".ke"],
      cca2: "KE",
      ccn3: "404",
      cioc: "KEN",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: {
        KES: {
          symbol: "Sh",
          name: "Kenyan shilling"
        }
      },
      idd: {
        root: "+2",
        suffixes: ["54"]
      },
      capital: ["Nairobi"],
      altSpellings: ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
      region: "Africa",
      subregion: "Eastern Africa",
      languages: {
        eng: "English",
        swa: "Swahili"
      },
      latlng: [1, 38],
      landlocked: false,
      borders: ["ETH", "SOM", "SSD", "TZA", "UGA"],
      area: 580367,
      demonyms: {
        eng: {
          f: "Kenyan",
          m: "Kenyan"
        },
        fra: {
          f: "Kényane",
          m: "Kényan"
        }
      },
      cca3: "KEN",
      translations: {
        ara: {
          official: "جمهورية كينيا",
          common: "كينيا"
        },
        bre: {
          official: "Republik Kenya",
          common: "Kenya"
        },
        ces: {
          official: "Keňská republika",
          common: "Keňa"
        },
        cym: {
          official: "Republic of Kenya",
          common: "Kenya"
        },
        deu: {
          official: "Republik Kenia",
          common: "Kenia"
        },
        est: {
          official: "Keenia Vabariik",
          common: "Keenia"
        },
        fin: {
          official: "Kenian tasavalta",
          common: "Kenia"
        },
        fra: {
          official: "République du Kenya",
          common: "Kenya"
        },
        hrv: {
          official: "Republika Kenija",
          common: "Kenija"
        },
        hun: {
          official: "Kenyai Köztársaság",
          common: "Kenya"
        },
        ind: {
          official: "Republik Kenya",
          common: "Kenya"
        },
        ita: {
          official: "Repubblica del Kenya",
          common: "Kenya"
        },
        jpn: {
          official: "ケニア共和国",
          common: "ケニア"
        },
        kor: {
          official: "케냐 공화국",
          common: "케냐"
        },
        nld: {
          official: "Republiek Kenia",
          common: "Kenia"
        },
        per: {
          official: "جمهوری کنیا",
          common: "کنیا"
        },
        pol: {
          official: "Republika Kenii",
          common: "Kenia"
        },
        por: {
          official: "República do Quénia",
          common: "Quénia"
        },
        rus: {
          official: "Республика Кения",
          common: "Кения"
        },
        slk: {
          official: "Kenská republika",
          common: "Keňa"
        },
        spa: {
          official: "República de Kenya",
          common: "Kenia"
        },
        srp: {
          official: "Република Кенија",
          common: "Кенија"
        },
        swe: {
          official: "Republiken Kenya",
          common: "Kenya"
        },
        tur: {
          official: "Kenya Cumhuriyeti",
          common: "Kenya"
        },
        urd: {
          official: "جمہوریہ کینیا",
          common: "کینیا"
        },
        zho: {
          official: "肯尼亚共和国",
          common: "肯尼亚"
        }
      },
      flag: "🇰🇪",
      maps: {
        googleMaps: "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
        openStreetMaps: "https://www.openstreetmap.org/relation/192798"
      },
      population: 53771300,
      gini: {
        2015: 40.8
      },
      fifa: "KEN",
      car: {
        signs: ["EAK"],
        side: "left"
      },
      timezones: ["UTC+03:00"],
      continents: ["Africa"],
      flags: {
        png: "https://flagcdn.com/w320/ke.png",
        svg: "https://flagcdn.com/ke.svg",
        alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field."
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/ke.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/ke.svg"
      },
      startOfWeek: "monday",
      capitalInfo: {
        latlng: [-1.28, 36.82]
      },
      postalCode: {
        format: "#####",
        regex: "^(\\d{5})$"
      }
    });
    const phone = computed({
      get() {
        let code, num;
        if (String(props.number).charAt(0) === "+" || props.number.length >= 12) {
          code = String(props.number).charAt(0) === "+" ? props.number.substring(0, 4) : `+${props.number.substring(0, 3)}`;
          num = props.number.substring(props.number.charAt(0) === "+" ? 4 : 3);
          country.value = countries.value.find(
            (c) => getCountryCallingCode(c) === code
          );
        } else {
          num = props.number;
        }
        return num;
      },
      set(val) {
        emits("setPhone", `${getCountryCallingCode(country.value)}${val}`);
      }
    });
    const handle_id = computed(() => {
      return props.label === "Telephone number" ? "default_telephone" : props.label.replaceAll(" ", "_");
    });
    const app = useAppStore();
    const { loading } = storeToRefs(app);
    const search = ref("");
    const countries = ref(([__temp, __restore] = withAsyncContext(() => app.getCountries()), __temp = await __temp, __restore(), __temp));
    const allCountries = computed(() => {
      let all = countries.value.sort((a, b) => a.name.common > b.name.common ? 1 : -1).filter((val) => {
        return String(val.name.official).toLowerCase().includes(search.value.toLowerCase());
      });
      return [
        country.value,
        ...all.filter((c) => c.name.official !== country.value.name.official)
      ];
    });
    const menu = ref(false);
    const setCountry = (ctry) => {
      menu.value = false;
      country.value = ctry;
      country.value.callingCode = getCountryCallingCode(ctry);
      (void 0).getElementById(handle_id.value).focus();
      emits(
        "setPhone",
        `${getCountryCallingCode(country.value)}${props.number.substring(4)}`
      );
    };
    const getCountryCallingCode = (ctry) => {
      var _a, _b;
      return Object.keys(ctry == null ? void 0 : ctry.idd).length !== 0 ? `${(_a = ctry.idd) == null ? void 0 : _a.root}${(_b = ctry.idd) == null ? void 0 : _b.suffixes[0]}` : "-";
    };
    const chainCountryName = (ctry) => {
      return `${ctry.name.official}`;
    };
    const inputWidth = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: `field_${unref(handle_id)}`
      }, _attrs))} data-v-f4ecd46d>`);
      _push(ssrRenderComponent(VTextField, {
        label: __props.label,
        maxLength: 9,
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        modelModifiers: { number: true },
        onKeypress: unref(digitsOnly),
        id: unref(handle_id),
        rules: __props.required ? unref(number)() : [],
        loading: unref(loading),
        "hide-details": !__props.required
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-center append text-caption"${ssrRenderAttr("id", `country_${unref(handle_id)}`)} data-v-f4ecd46d${_scopeId}><span class="mx-2" data-v-f4ecd46d${_scopeId}>${ssrInterpolate(getCountryCallingCode(unref(country)) ?? "+243")}</span>`);
            _push2(ssrRenderComponent(VIcon, {
              class: ["icon", { "transform-180deg": unref(menu) }],
              icon: "mdi-chevron-down",
              size: "13",
              color: "grey"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "d-flex align-center justify-center append text-caption",
                id: `country_${unref(handle_id)}`
              }, [
                createVNode("span", { class: "mx-2" }, toDisplayString(getCountryCallingCode(unref(country)) ?? "+243"), 1),
                createVNode(VIcon, {
                  class: ["icon", { "transform-180deg": unref(menu) }],
                  icon: "mdi-chevron-down",
                  size: "13",
                  color: "grey"
                }, null, 8, ["class"])
              ], 8, ["id"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMenu, {
              activator: `#country_${unref(handle_id)}`,
              "close-on-content-click": false,
              modelValue: unref(menu),
              "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    class: "pa-0 position-relative card-outlined rounded-lg mt-2 mb-4 ml-n3 hide-scrollbar",
                    "max-height": "250",
                    width: unref(inputWidth),
                    density: "compact",
                    lines: "false"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-0 text-caption bg-grey-lighten-3 position-sticky" style="${ssrRenderStyle({ "top": "0", "z-index": "1" })}" data-v-f4ecd46d${_scopeId3}><input type="search"${ssrRenderAttr("placeholder", `Filter (${unref(allCountries).length}) items...`)} class="px-3 w-100 filter-input" id="searchInput"${ssrRenderAttr("value", unref(search))} autofocus autocomplete="off" data-v-f4ecd46d${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(allCountries), (item, i) => {
                          _push4(`<div class="text-caption"${ssrRenderAttr("title", chainCountryName(item))} data-v-f4ecd46d${_scopeId3}>`);
                          _push4(ssrRenderComponent(VListItem, {
                            color: "secondary",
                            onClick: ($event) => setCountry(item),
                            active: unref(country) == item
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="pr-3" data-v-f4ecd46d${_scopeId4}></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "pr-3" })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="" data-v-f4ecd46d${_scopeId4}>${ssrInterpolate(`${item.name.common} (${getCountryCallingCode(item)})`)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "" }, toDisplayString(`${item.name.common} (${getCountryCallingCode(item)})`), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                        if (unref(allCountries).length === 0) {
                          _push4(`<div class="" data-v-f4ecd46d${_scopeId3}><div class="py-5 text-caption text-center" data-v-f4ecd46d${_scopeId3}><span data-v-f4ecd46d${_scopeId3}>No countries</span></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", {
                            class: "pa-0 text-caption bg-grey-lighten-3 position-sticky",
                            style: { "top": "0", "z-index": "1" }
                          }, [
                            withDirectives(createVNode("input", {
                              type: "search",
                              placeholder: `Filter (${unref(allCountries).length}) items...`,
                              class: "px-3 w-100 filter-input",
                              id: "searchInput",
                              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                              autofocus: "",
                              autocomplete: "off"
                            }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                              [vModelText, unref(search)]
                            ])
                          ]),
                          createVNode(VDivider),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(allCountries), (item, i) => {
                            return openBlock(), createBlock("div", {
                              key: i,
                              class: "text-caption",
                              title: chainCountryName(item)
                            }, [
                              createVNode(VListItem, {
                                color: "secondary",
                                onClick: ($event) => setCountry(item),
                                active: unref(country) == item
                              }, {
                                prepend: withCtx(() => [
                                  createVNode("div", { class: "pr-3" })
                                ]),
                                default: withCtx(() => [
                                  createVNode("span", { class: "" }, toDisplayString(`${item.name.common} (${getCountryCallingCode(item)})`), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick", "active"]),
                              createVNode(VDivider)
                            ], 8, ["title"]);
                          }), 128)),
                          unref(allCountries).length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ""
                          }, [
                            createVNode("div", { class: "py-5 text-caption text-center" }, [
                              createVNode("span", null, "No countries")
                            ])
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      class: "pa-0 position-relative card-outlined rounded-lg mt-2 mb-4 ml-n3 hide-scrollbar",
                      "max-height": "250",
                      width: unref(inputWidth),
                      density: "compact",
                      lines: "false"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "pa-0 text-caption bg-grey-lighten-3 position-sticky",
                          style: { "top": "0", "z-index": "1" }
                        }, [
                          withDirectives(createVNode("input", {
                            type: "search",
                            placeholder: `Filter (${unref(allCountries).length}) items...`,
                            class: "px-3 w-100 filter-input",
                            id: "searchInput",
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            autofocus: "",
                            autocomplete: "off"
                          }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                            [vModelText, unref(search)]
                          ])
                        ]),
                        createVNode(VDivider),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(allCountries), (item, i) => {
                          return openBlock(), createBlock("div", {
                            key: i,
                            class: "text-caption",
                            title: chainCountryName(item)
                          }, [
                            createVNode(VListItem, {
                              color: "secondary",
                              onClick: ($event) => setCountry(item),
                              active: unref(country) == item
                            }, {
                              prepend: withCtx(() => [
                                createVNode("div", { class: "pr-3" })
                              ]),
                              default: withCtx(() => [
                                createVNode("span", { class: "" }, toDisplayString(`${item.name.common} (${getCountryCallingCode(item)})`), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick", "active"]),
                            createVNode(VDivider)
                          ], 8, ["title"]);
                        }), 128)),
                        unref(allCountries).length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ""
                        }, [
                          createVNode("div", { class: "py-5 text-caption text-center" }, [
                            createVNode("span", null, "No countries")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["width"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMenu, {
                activator: `#country_${unref(handle_id)}`,
                "close-on-content-click": false,
                modelValue: unref(menu),
                "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    class: "pa-0 position-relative card-outlined rounded-lg mt-2 mb-4 ml-n3 hide-scrollbar",
                    "max-height": "250",
                    width: unref(inputWidth),
                    density: "compact",
                    lines: "false"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "pa-0 text-caption bg-grey-lighten-3 position-sticky",
                        style: { "top": "0", "z-index": "1" }
                      }, [
                        withDirectives(createVNode("input", {
                          type: "search",
                          placeholder: `Filter (${unref(allCountries).length}) items...`,
                          class: "px-3 w-100 filter-input",
                          id: "searchInput",
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          autofocus: "",
                          autocomplete: "off"
                        }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                          [vModelText, unref(search)]
                        ])
                      ]),
                      createVNode(VDivider),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(allCountries), (item, i) => {
                        return openBlock(), createBlock("div", {
                          key: i,
                          class: "text-caption",
                          title: chainCountryName(item)
                        }, [
                          createVNode(VListItem, {
                            color: "secondary",
                            onClick: ($event) => setCountry(item),
                            active: unref(country) == item
                          }, {
                            prepend: withCtx(() => [
                              createVNode("div", { class: "pr-3" })
                            ]),
                            default: withCtx(() => [
                              createVNode("span", { class: "" }, toDisplayString(`${item.name.common} (${getCountryCallingCode(item)})`), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "active"]),
                          createVNode(VDivider)
                        ], 8, ["title"]);
                      }), 128)),
                      unref(allCountries).length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ""
                      }, [
                        createVNode("div", { class: "py-5 text-caption text-center" }, [
                          createVNode("span", null, "No countries")
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["width"])
                ]),
                _: 1
              }, 8, ["activator", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/telephone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4ecd46d"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=telephone-Dluk3I-7.js.map
