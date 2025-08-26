import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { ref, computed, withAsyncContext, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, h as useAppStore, s as storeToRefs } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { b as VIcon } from './index-jw0wqd8u.mjs';
import { V as VMenu } from './VMenu-Xf_H0UU6.mjs';
import { V as VList, a as VListItem } from './VList-0_bPAEAt.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';

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
        common: "DR Congo",
        official: "Democratic Republic of the Congo",
        nativeName: {
          fra: {
            official: "R\xE9publique d\xE9mocratique du Congo",
            common: "RD Congo"
          },
          kon: {
            official: "Repubilika ya Kongo Demokratiki",
            common: "Repubilika ya Kongo Demokratiki"
          },
          lin: {
            official: "Republiki ya Kong\xF3 Demokratiki",
            common: "Republiki ya Kong\xF3 Demokratiki"
          },
          lua: {
            official: "Ditunga dia Kongu wa Mungalaata",
            common: "Ditunga dia Kongu wa Mungalaata"
          },
          swa: {
            official: "Jamhuri ya Kidemokrasia ya Kongo",
            common: "Jamhuri ya Kidemokrasia ya Kongo"
          }
        }
      },
      tld: [".cd"],
      cca2: "CD",
      ccn3: "180",
      cca3: "COD",
      cioc: "COD",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: {
        CDF: {
          name: "Congolese franc",
          symbol: "FC"
        }
      },
      idd: {
        root: "+2",
        suffixes: ["43"]
      },
      capital: ["Kinshasa"],
      altSpellings: [
        "CD",
        "DR Congo",
        "Congo-Kinshasa",
        "Congo, the Democratic Republic of the",
        "DRC"
      ],
      region: "Africa",
      subregion: "Middle Africa",
      languages: {
        fra: "French",
        kon: "Kikongo",
        lin: "Lingala",
        lua: "Tshiluba",
        swa: "Swahili"
      },
      translations: {
        ara: {
          official: "\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0648\u0646\u063A\u0648 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629",
          common: "\u0627\u0644\u0643\u0648\u0646\u063A\u0648"
        },
        bre: {
          official: "Republik Demokratel Kongo",
          common: "Kongo-Kinshasa"
        },
        ces: {
          official: "Demokratick\xE1 republika Kongo",
          common: "DR Kongo"
        },
        cym: {
          official: "Gweriniaeth Ddemocrataidd Congo",
          common: "Gweriniaeth Ddemocrataidd Congo"
        },
        deu: {
          official: "Demokratische Republik Kongo",
          common: "Kongo (Dem. Rep.)"
        },
        est: {
          official: "Kongo Demokraatlik Vabariik",
          common: "Kongo DV"
        },
        fin: {
          official: "Kongon demokraattinen tasavalta",
          common: "Kongon demokraattinen tasavalta"
        },
        fra: {
          official: "R\xE9publique d\xE9mocratique du Congo",
          common: "Congo (R\xE9p. d\xE9m.)"
        },
        hrv: {
          official: "Demokratska Republika Kongo",
          common: "Kongo, Demokratska Republika"
        },
        hun: {
          official: "Kong\xF3i Demokratikus K\xF6zt\xE1rsas\xE1g",
          common: "Kong\xF3i Demokratikus K\xF6zt\xE1rsas\xE1g"
        },
        ita: {
          official: "Repubblica Democratica del Congo",
          common: "Congo (Rep. Dem.)"
        },
        jpn: {
          official: "\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD",
          common: "\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD"
        },
        kor: {
          official: "\uCF69\uACE0 \uBBFC\uC8FC \uACF5\uD654\uAD6D",
          common: "\uCF69\uACE0 \uBBFC\uC8FC \uACF5\uD654\uAD6D"
        },
        nld: {
          official: "Democratische Republiek Congo",
          common: "Congo (DRC)"
        },
        per: {
          official: "\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u06A9\u0646\u06AF\u0648",
          common: "\u06A9\u0646\u06AF\u0648 \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9"
        },
        pol: {
          official: "Demokratyczna Republika Konga",
          common: "Demokratyczna Republika Konga"
        },
        por: {
          official: "Rep\xFAblica Democr\xE1tica do Congo",
          common: "Rep\xFAblica Democr\xE1tica do Congo"
        },
        rus: {
          official: "\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E",
          common: "\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E"
        },
        slk: {
          official: "Kon\u017Esk\xE1 demokratick\xE1 republika",
          common: "Kongo"
        },
        spa: {
          official: "Rep\xFAblica Democr\xE1tica del Congo",
          common: "Congo (Rep. Dem.)"
        },
        srp: {
          official: "\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0441\u043A\u0430 \u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E",
          common: "\u0414\u0420 \u041A\u043E\u043D\u0433\u043E"
        },
        swe: {
          official: "Demokratiska republiken Kongo",
          common: "Kongo-Kinshasa"
        },
        tur: {
          official: "Kongo Demokratik Cumhuriyeti",
          common: "Kongo Demokratik Cumhuriyeti"
        },
        urd: {
          official: "\u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0627\u0646\u06AF\u0648",
          common: "\u06A9\u0627\u0646\u06AF\u0648"
        },
        zho: {
          official: "\u521A\u679C\u6C11\u4E3B\u5171\u548C\u56FD",
          common: "\u6C11\u4E3B\u521A\u679C"
        }
      },
      latlng: [0, 25],
      landlocked: false,
      borders: ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
      area: 2344858,
      demonyms: {
        eng: {
          f: "Congolese",
          m: "Congolese"
        },
        fra: {
          f: "Congolaise",
          m: "Congolais"
        }
      },
      flag: "\u{1F1E8}\u{1F1E9}",
      maps: {
        googleMaps: "https://goo.gl/maps/KfhNVn6VqdZXWu8n9",
        openStreetMaps: "https://www.openstreetmap.org/relation/192795"
      },
      population: 108407721,
      gini: {
        2012: 42.1
      },
      fifa: "COD",
      car: {
        signs: ["CGO"],
        side: "right"
      },
      timezones: ["UTC+01:00", "UTC+02:00"],
      continents: ["Africa"],
      flags: {
        png: "https://flagcdn.com/w320/cd.png",
        svg: "https://flagcdn.com/cd.svg",
        alt: "The flag of the Democratic Republic of the Congo has a sky-blue field with a yellow-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. A large five-pointed yellow star is situated above the diagonal band on the upper hoist side of the field."
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/cd.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/cd.svg"
      },
      startOfWeek: "monday",
      capitalInfo: {
        latlng: [-4.32, 15.3]
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
      }, _attrs))} data-v-bb967857>`);
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
          var _a, _b;
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-center append text-caption"${ssrRenderAttr("id", `country_${unref(handle_id)}`)} data-v-bb967857${_scopeId}><span class="mx-2" data-v-bb967857${_scopeId}>${ssrInterpolate((_a = getCountryCallingCode(unref(country))) != null ? _a : "+243")}</span>`);
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
                createVNode("span", { class: "mx-2" }, toDisplayString((_b = getCountryCallingCode(unref(country))) != null ? _b : "+243"), 1),
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
                        _push4(`<div class="pa-0 text-caption bg-grey-lighten-3 position-sticky" style="${ssrRenderStyle({ "top": "0", "z-index": "1" })}" data-v-bb967857${_scopeId3}><input type="search"${ssrRenderAttr("placeholder", `Filter (${unref(allCountries).length}) items...`)} class="px-3 w-100 filter-input" id="searchInput"${ssrRenderAttr("value", unref(search))} autofocus autocomplete="off" data-v-bb967857${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(allCountries), (item, i) => {
                          _push4(`<div class="text-caption"${ssrRenderAttr("title", chainCountryName(item))} data-v-bb967857${_scopeId3}>`);
                          _push4(ssrRenderComponent(VListItem, {
                            color: "secondary",
                            onClick: ($event) => setCountry(item),
                            active: unref(country) == item
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="pr-3" data-v-bb967857${_scopeId4}></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "pr-3" })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="" data-v-bb967857${_scopeId4}>${ssrInterpolate(`${item.name.common} (${getCountryCallingCode(item)})`)}</span>`);
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
                          _push4(`<div class="" data-v-bb967857${_scopeId3}><div class="py-5 text-caption text-center" data-v-bb967857${_scopeId3}><span data-v-bb967857${_scopeId3}>No countries</span></div></div>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb967857"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=telephone-COnNGYLF.mjs.map
