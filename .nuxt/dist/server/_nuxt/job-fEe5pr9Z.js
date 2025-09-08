import { _ as __nuxt_component_1 } from "./select-sjn27vix.js";
import __nuxt_component_1$1 from "./Icon-RLEWMyEr.js";
import { V as VDialog, _ as __nuxt_component_2$1 } from "./VDialog-acnQ15uX.js";
import { mergeModels, useModel, mergeProps, withCtx, createVNode, useSSRContext, ref, computed, unref, toDisplayString, openBlock, createBlock, withModifiers, createCommentVNode, Fragment, renderList, isRef } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { _ as _export_sfc, m as useDevice, h as useAppStore, s as storeToRefs } from "../server.mjs";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { u as useSkillStore } from "./skills-HBchbmYl.js";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { V as VSpacer } from "./VSpacer-0DxA8eQn.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./position-AkaJaFJy.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./rounded-jA9LRAgf.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./index-q-0zZOOG.js";
import "./VList-hhjvxiav.js";
import "./index-d8gkbdU6.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VAvatar-agmUyvkw.js";
import "./VImg-_57rVikU.js";
import "./VDivider-Ce8J4Sp3.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "./index-1uTyX8RQ.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "date-fns";
import "date-fns/locale";
/* empty css               */
import "./resizeObserver-k8M9k6Xi.js";
const _sfc_main$1 = {
  __name: "preview-doc",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    docFile: Object
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emits = __emit, dialog = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreDialogHeader = __nuxt_component_2$1;
      _push(ssrRenderComponent(VDialog, mergeProps({
        persistent: "",
        fullscreen: "",
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "card-outlined hide-scrollbar",
              rounded: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminCoreDialogHeader, {
                    title: `Preview ${(_a = __props.docFile) == null ? void 0 : _a.name}`,
                    onClose: ($event) => emits("close")
                  }, null, _parent3, _scopeId2));
                  _push3(`<iframe width="100%" height="100%" frameborder="0"${ssrRenderAttr("src", (_b = __props.docFile) == null ? void 0 : _b.file)}${_scopeId2}></iframe>`);
                } else {
                  return [
                    createVNode(_component_AdminCoreDialogHeader, {
                      title: `Preview ${(_c = __props.docFile) == null ? void 0 : _c.name}`,
                      onClose: ($event) => emits("close")
                    }, null, 8, ["title", "onClose"]),
                    createVNode("iframe", {
                      width: "100%",
                      height: "100%",
                      frameborder: "0",
                      src: (_d = __props.docFile) == null ? void 0 : _d.file
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "card-outlined hide-scrollbar",
                rounded: "0"
              }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(_component_AdminCoreDialogHeader, {
                      title: `Preview ${(_a = __props.docFile) == null ? void 0 : _a.name}`,
                      onClose: ($event) => emits("close")
                    }, null, 8, ["title", "onClose"]),
                    createVNode("iframe", {
                      width: "100%",
                      height: "100%",
                      frameborder: "0",
                      src: (_b = __props.docFile) == null ? void 0 : _b.file
                    }, null, 8, ["src"])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview-doc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "job",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { required } = useRules();
    useDevice();
    const { digitsOnly } = useHelpers();
    const appStore = useAppStore();
    const { error, loading, currentUser } = storeToRefs(appStore);
    const { shopAccount, updateAccount } = useAuthStore();
    useSkillStore();
    const data = ref([]);
    const loader = ref(false);
    const skills = computed(() => {
      return data.value.map((s) => s.skill);
    });
    const isApplicant = computed(() => {
      return currentUser.value.applicant;
    });
    const preview = ref(isApplicant.value ?? false);
    const formData = ref(null);
    const applicant = ref({
      userId: currentUser.value.userId,
      id: ((_a = currentUser.value.applicant) == null ? void 0 : _a.applicantId) ?? 0,
      title: ((_b = currentUser.value.applicant) == null ? void 0 : _b.title) ?? "",
      experience: ((_c = currentUser.value.applicant) == null ? void 0 : _c.experience) ?? 0,
      experienceLevel: ((_d = currentUser.value.applicant) == null ? void 0 : _d.experienceLevel) ?? "",
      location: ((_e = currentUser.value.applicant) == null ? void 0 : _e.location) ?? "",
      documents: ((_f = currentUser.value.applicant) == null ? void 0 : _f.documents) ?? [
        { name: "CV", value: null, title: null, file: null },
        { name: "Cover letter", value: null, title: null, file: null }
      ],
      skills: ((_g = currentUser.value.applicant) == null ? void 0 : _g.skills) ?? []
    });
    const handleSave = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        if (applicant.value.documents.some((i) => i.file === null))
          appStore.toggleSnackbar({
            status: true,
            type: "warning",
            message: "Provide all documents"
          });
        else {
          isApplicant.value ? await updateAccount(applicant.value, "applicants") : await shopAccount(applicant.value, "applicants");
          if (!error.value)
            setTimeout(() => {
              appStore.setUser({
                ...currentUser.value,
                applicant: applicant.value
              });
              preview.value = !preview.value;
            }, 2e3);
        }
      }
    };
    const setExperience = (val) => {
      applicant.value.experienceLevel = val;
    };
    const setSkill = (val) => {
      if (applicant.value.skills.includes(val))
        applicant.value.skills.splice(applicant.value.skills.indexOf(val), 1);
      else
        applicant.value.skills.push(val);
    };
    const uploadDocument = (doc) => {
      let input = (void 0).createElement("input");
      input.type = "file";
      input.accept = "application/pdf";
      input.click();
      let docFile2 = applicant.value.documents.find((d) => d.name === doc);
      input.onchange = async (e) => {
        let file = e.target.files[0];
        docFile2.title = e.target.files[0].name;
        const reader = new FileReader();
        reader.onload = (evt) => {
          docFile2.file = evt.target.result;
        };
        reader.readAsDataURL(file);
      };
    };
    const dialog = ref(false), docFile = ref(null), viewFile = (val) => {
      docFile.value = val;
      dialog.value = true;
    }, closeDialog = () => {
      dialog.value = false;
      docFile.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSelect = __nuxt_component_1;
      const _component_Icon = __nuxt_component_1$1;
      const _component_PreviewDoc = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ffc65eb2>`);
      _push(ssrRenderComponent(VForm, {
        ref_key: "formData",
        ref: formData,
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "mt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "12",
                          class: "pa-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Title",
                                modelValue: unref(applicant).title,
                                "onUpdate:modelValue": ($event) => unref(applicant).title = $event,
                                modelModifiers: { trim: true },
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Title",
                                  modelValue: unref(applicant).title,
                                  "onUpdate:modelValue": ($event) => unref(applicant).title = $event,
                                  modelModifiers: { trim: true },
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          class: "pa-1",
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Years of experience",
                                modelValue: unref(applicant).experience,
                                "onUpdate:modelValue": ($event) => unref(applicant).experience = $event,
                                modelModifiers: { number: true, trim: true },
                                onKeypress: unref(digitsOnly),
                                suffix: "Year(s)"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Years of experience",
                                  modelValue: unref(applicant).experience,
                                  "onUpdate:modelValue": ($event) => unref(applicant).experience = $event,
                                  modelModifiers: { number: true, trim: true },
                                  onKeypress: unref(digitsOnly),
                                  suffix: "Year(s)"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Experience level",
                                modelValue: unref(applicant).experienceLevel,
                                "onUpdate:modelValue": ($event) => unref(applicant).experienceLevel = $event,
                                modelModifiers: { trim: true },
                                rules: unref(required)(),
                                id: "selectExperience",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AdminCoreSelect, {
                                activator: "#selectExperience",
                                list: [
                                  "ANY",
                                  "INTERNSHIP & GRADUATE",
                                  "ENTRY LEVEL",
                                  "SENIOR LEVEL",
                                  "EXECUTIVE LEVEL"
                                ],
                                "list-value": unref(applicant).experienceLevel,
                                onSetItem: setExperience
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Experience level",
                                  modelValue: unref(applicant).experienceLevel,
                                  "onUpdate:modelValue": ($event) => unref(applicant).experienceLevel = $event,
                                  modelModifiers: { trim: true },
                                  rules: unref(required)(),
                                  id: "selectExperience",
                                  readonly: "",
                                  "append-inner-icon": "mdi-chevron-down"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_AdminCoreSelect, {
                                  activator: "#selectExperience",
                                  list: [
                                    "ANY",
                                    "INTERNSHIP & GRADUATE",
                                    "ENTRY LEVEL",
                                    "SENIOR LEVEL",
                                    "EXECUTIVE LEVEL"
                                  ],
                                  "list-value": unref(applicant).experienceLevel,
                                  onSetItem: setExperience
                                }, null, 8, ["list-value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Skills",
                                modelValue: unref(applicant).skills,
                                "onUpdate:modelValue": ($event) => unref(applicant).skills = $event,
                                rules: unref(required)(),
                                id: "selectSkill",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                loading: unref(loader)
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AdminCoreSelect, {
                                activator: "#selectSkill",
                                list: unref(skills),
                                "list-value": unref(applicant).skills,
                                onSetItem: setSkill,
                                multiple: true
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Skills",
                                  modelValue: unref(applicant).skills,
                                  "onUpdate:modelValue": ($event) => unref(applicant).skills = $event,
                                  rules: unref(required)(),
                                  id: "selectSkill",
                                  readonly: "",
                                  "append-inner-icon": "mdi-chevron-down",
                                  loading: unref(loader)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                createVNode(_component_AdminCoreSelect, {
                                  activator: "#selectSkill",
                                  list: unref(skills),
                                  "list-value": unref(applicant).skills,
                                  onSetItem: setSkill,
                                  multiple: true
                                }, null, 8, ["list", "list-value"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Location",
                                modelValue: unref(applicant).location,
                                "onUpdate:modelValue": ($event) => unref(applicant).location = $event,
                                modelModifiers: { trim: true }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Location",
                                  modelValue: unref(applicant).location,
                                  "onUpdate:modelValue": ($event) => unref(applicant).location = $event,
                                  modelModifiers: { trim: true }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Title",
                                modelValue: unref(applicant).title,
                                "onUpdate:modelValue": ($event) => unref(applicant).title = $event,
                                modelModifiers: { trim: true },
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            class: "pa-1",
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Years of experience",
                                modelValue: unref(applicant).experience,
                                "onUpdate:modelValue": ($event) => unref(applicant).experience = $event,
                                modelModifiers: { number: true, trim: true },
                                onKeypress: unref(digitsOnly),
                                suffix: "Year(s)"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Experience level",
                                modelValue: unref(applicant).experienceLevel,
                                "onUpdate:modelValue": ($event) => unref(applicant).experienceLevel = $event,
                                modelModifiers: { trim: true },
                                rules: unref(required)(),
                                id: "selectExperience",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_AdminCoreSelect, {
                                activator: "#selectExperience",
                                list: [
                                  "ANY",
                                  "INTERNSHIP & GRADUATE",
                                  "ENTRY LEVEL",
                                  "SENIOR LEVEL",
                                  "EXECUTIVE LEVEL"
                                ],
                                "list-value": unref(applicant).experienceLevel,
                                onSetItem: setExperience
                              }, null, 8, ["list-value"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Skills",
                                modelValue: unref(applicant).skills,
                                "onUpdate:modelValue": ($event) => unref(applicant).skills = $event,
                                rules: unref(required)(),
                                id: "selectSkill",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                loading: unref(loader)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                              createVNode(_component_AdminCoreSelect, {
                                activator: "#selectSkill",
                                list: unref(skills),
                                "list-value": unref(applicant).skills,
                                onSetItem: setSkill,
                                multiple: true
                              }, null, 8, ["list", "list-value"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Location",
                                modelValue: unref(applicant).location,
                                "onUpdate:modelValue": ($event) => unref(applicant).location = $event,
                                modelModifiers: { trim: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column ga-3 pa-1" data-v-ffc65eb2${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(applicant).documents, ({ name, file, title }) => {
                    _push3(ssrRenderComponent(VCard, {
                      flat: "",
                      class: ["pa-0 rounded-lg d-flex align-center card-outlined", { "success-doc": file }],
                      onClick: ($event) => uploadDocument(name)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([file ? "success-doc-file" : " card-white", "pa-2"])}" data-v-ffc65eb2${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "carbon:document-pdf",
                            size: "1.6rem"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="text-caption mx-3" data-v-ffc65eb2${_scopeId3}><span data-v-ffc65eb2${_scopeId3}>${ssrInterpolate(title ? `${name} : ${title}` : `Upload ${name}`)}</span></div>`);
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          if (file) {
                            _push4(`<div class="d-flex align-center ga-3" data-v-ffc65eb2${_scopeId3}>`);
                            _push4(ssrRenderComponent(VIcon, {
                              icon: "mdi-check-circle",
                              size: "x-small",
                              color: "success"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div title="Preview document" data-v-ffc65eb2${_scopeId3}>`);
                            _push4(ssrRenderComponent(VCard, {
                              flat: "",
                              class: "pa-2 card-secondary rounded-0 text-secondary",
                              onClick: ($event) => viewFile({ name, file })
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "mdi:eye",
                                    size: "1.4rem"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "mdi:eye",
                                      size: "1.4rem"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", {
                              class: ["pa-2", file ? "success-doc-file" : " card-white"]
                            }, [
                              createVNode(_component_Icon, {
                                name: "carbon:document-pdf",
                                size: "1.6rem"
                              })
                            ], 2),
                            createVNode("div", { class: "text-caption mx-3" }, [
                              createVNode("span", null, toDisplayString(title ? `${name} : ${title}` : `Upload ${name}`), 1)
                            ]),
                            createVNode(VSpacer),
                            file ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex align-center ga-3"
                            }, [
                              createVNode(VIcon, {
                                icon: "mdi-check-circle",
                                size: "x-small",
                                color: "success"
                              }),
                              createVNode("div", { title: "Preview document" }, [
                                createVNode(VCard, {
                                  flat: "",
                                  class: "pa-2 card-secondary rounded-0 text-secondary",
                                  onClick: withModifiers(($event) => viewFile({ name, file }), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi:eye",
                                      size: "1.4rem"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "12",
                          class: "pa-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Title",
                              modelValue: unref(applicant).title,
                              "onUpdate:modelValue": ($event) => unref(applicant).title = $event,
                              modelModifiers: { trim: true },
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          class: "pa-1",
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Years of experience",
                              modelValue: unref(applicant).experience,
                              "onUpdate:modelValue": ($event) => unref(applicant).experience = $event,
                              modelModifiers: { number: true, trim: true },
                              onKeypress: unref(digitsOnly),
                              suffix: "Year(s)"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Experience level",
                              modelValue: unref(applicant).experienceLevel,
                              "onUpdate:modelValue": ($event) => unref(applicant).experienceLevel = $event,
                              modelModifiers: { trim: true },
                              rules: unref(required)(),
                              id: "selectExperience",
                              readonly: "",
                              "append-inner-icon": "mdi-chevron-down"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_AdminCoreSelect, {
                              activator: "#selectExperience",
                              list: [
                                "ANY",
                                "INTERNSHIP & GRADUATE",
                                "ENTRY LEVEL",
                                "SENIOR LEVEL",
                                "EXECUTIVE LEVEL"
                              ],
                              "list-value": unref(applicant).experienceLevel,
                              onSetItem: setExperience
                            }, null, 8, ["list-value"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Skills",
                              modelValue: unref(applicant).skills,
                              "onUpdate:modelValue": ($event) => unref(applicant).skills = $event,
                              rules: unref(required)(),
                              id: "selectSkill",
                              readonly: "",
                              "append-inner-icon": "mdi-chevron-down",
                              loading: unref(loader)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                            createVNode(_component_AdminCoreSelect, {
                              activator: "#selectSkill",
                              list: unref(skills),
                              "list-value": unref(applicant).skills,
                              onSetItem: setSkill,
                              multiple: true
                            }, null, 8, ["list", "list-value"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          class: "pa-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Location",
                              modelValue: unref(applicant).location,
                              "onUpdate:modelValue": ($event) => unref(applicant).location = $event,
                              modelModifiers: { trim: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "d-flex flex-column ga-3 pa-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(applicant).documents, ({ name, file, title }) => {
                        return openBlock(), createBlock(VCard, {
                          flat: "",
                          class: ["pa-0 rounded-lg d-flex align-center card-outlined", { "success-doc": file }],
                          onClick: ($event) => uploadDocument(name)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: ["pa-2", file ? "success-doc-file" : " card-white"]
                            }, [
                              createVNode(_component_Icon, {
                                name: "carbon:document-pdf",
                                size: "1.6rem"
                              })
                            ], 2),
                            createVNode("div", { class: "text-caption mx-3" }, [
                              createVNode("span", null, toDisplayString(title ? `${name} : ${title}` : `Upload ${name}`), 1)
                            ]),
                            createVNode(VSpacer),
                            file ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex align-center ga-3"
                            }, [
                              createVNode(VIcon, {
                                icon: "mdi-check-circle",
                                size: "x-small",
                                color: "success"
                              }),
                              createVNode("div", { title: "Preview document" }, [
                                createVNode(VCard, {
                                  flat: "",
                                  class: "pa-2 card-secondary rounded-0 text-secondary",
                                  onClick: withModifiers(($event) => viewFile({ name, file }), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi:eye",
                                      size: "1.4rem"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              color: "primary-accent",
              class: "rounded-lg text-caption mt-4",
              block: "",
              flat: "",
              loading: unref(loading),
              onClick: handleSave
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-ffc65eb2${_scopeId2}>Save</span>`);
                } else {
                  return [
                    createVNode("span", null, "Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, { class: "mt-2" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "12",
                        class: "pa-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Title",
                            modelValue: unref(applicant).title,
                            "onUpdate:modelValue": ($event) => unref(applicant).title = $event,
                            modelModifiers: { trim: true },
                            rules: unref(required)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        class: "pa-1",
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Years of experience",
                            modelValue: unref(applicant).experience,
                            "onUpdate:modelValue": ($event) => unref(applicant).experience = $event,
                            modelModifiers: { number: true, trim: true },
                            onKeypress: unref(digitsOnly),
                            suffix: "Year(s)"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        class: "pa-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Experience level",
                            modelValue: unref(applicant).experienceLevel,
                            "onUpdate:modelValue": ($event) => unref(applicant).experienceLevel = $event,
                            modelModifiers: { trim: true },
                            rules: unref(required)(),
                            id: "selectExperience",
                            readonly: "",
                            "append-inner-icon": "mdi-chevron-down"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_AdminCoreSelect, {
                            activator: "#selectExperience",
                            list: [
                              "ANY",
                              "INTERNSHIP & GRADUATE",
                              "ENTRY LEVEL",
                              "SENIOR LEVEL",
                              "EXECUTIVE LEVEL"
                            ],
                            "list-value": unref(applicant).experienceLevel,
                            onSetItem: setExperience
                          }, null, 8, ["list-value"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        class: "pa-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Skills",
                            modelValue: unref(applicant).skills,
                            "onUpdate:modelValue": ($event) => unref(applicant).skills = $event,
                            rules: unref(required)(),
                            id: "selectSkill",
                            readonly: "",
                            "append-inner-icon": "mdi-chevron-down",
                            loading: unref(loader)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                          createVNode(_component_AdminCoreSelect, {
                            activator: "#selectSkill",
                            list: unref(skills),
                            "list-value": unref(applicant).skills,
                            onSetItem: setSkill,
                            multiple: true
                          }, null, 8, ["list", "list-value"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        class: "pa-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Location",
                            modelValue: unref(applicant).location,
                            "onUpdate:modelValue": ($event) => unref(applicant).location = $event,
                            modelModifiers: { trim: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex flex-column ga-3 pa-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(applicant).documents, ({ name, file, title }) => {
                      return openBlock(), createBlock(VCard, {
                        flat: "",
                        class: ["pa-0 rounded-lg d-flex align-center card-outlined", { "success-doc": file }],
                        onClick: ($event) => uploadDocument(name)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: ["pa-2", file ? "success-doc-file" : " card-white"]
                          }, [
                            createVNode(_component_Icon, {
                              name: "carbon:document-pdf",
                              size: "1.6rem"
                            })
                          ], 2),
                          createVNode("div", { class: "text-caption mx-3" }, [
                            createVNode("span", null, toDisplayString(title ? `${name} : ${title}` : `Upload ${name}`), 1)
                          ]),
                          createVNode(VSpacer),
                          file ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex align-center ga-3"
                          }, [
                            createVNode(VIcon, {
                              icon: "mdi-check-circle",
                              size: "x-small",
                              color: "success"
                            }),
                            createVNode("div", { title: "Preview document" }, [
                              createVNode(VCard, {
                                flat: "",
                                class: "pa-2 card-secondary rounded-0 text-secondary",
                                onClick: withModifiers(($event) => viewFile({ name, file }), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mdi:eye",
                                    size: "1.4rem"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick"]);
                    }), 256))
                  ])
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                color: "primary-accent",
                class: "rounded-lg text-caption mt-4",
                block: "",
                flat: "",
                loading: unref(loading),
                onClick: handleSave
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Save")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PreviewDoc, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        "doc-file": unref(docFile),
        onClose: closeDialog
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index/job.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const job = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ffc65eb2"]]);
export {
  job as default
};
//# sourceMappingURL=job-fEe5pr9Z.js.map
