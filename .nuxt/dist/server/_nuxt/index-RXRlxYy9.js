import { V as VDialog, _ as __nuxt_component_2 } from "./VDialog-acnQ15uX.js";
import { ref, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, useSSRContext, computed, mergeProps, createCommentVNode, isRef } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { Cropper } from "vue-advanced-cropper";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VCard, a as VCardText } from "./VCard-MEGoD2_3.js";
import { V as VImg } from "./VImg-_57rVikU.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { _ as _export_sfc, m as useDevice, h as useAppStore } from "../server.mjs";
import { V as VAvatar } from "./VAvatar-agmUyvkw.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
const _sfc_main$1 = {
  __name: "crop",
  __ssrInlineRender: true,
  props: {
    image: [String],
    initialImage: [String],
    aspectRatio: [String, Number],
    imageType: String
  },
  emits: ["setImage", "isLoading"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const change = ({ coordinates, canvas }) => {
      console.log(canvas);
      emits("setImage", { image: canvas == null ? void 0 : canvas.toDataURL(), bg: true });
    };
    const loader = ref(false);
    const removeBg = async () => {
      await checkIBg();
    };
    const checkIBg = async () => {
      emits("isLoading", true);
      loader.value = true;
      const formData = new FormData();
      formData.append(props.imageType, props.image);
      formData.append("size", "auto");
      let res = await $fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "71FzeqmWweFJBxrEEjS7rGPC"
        },
        body: formData
      });
      loader.value = false;
      emits("isLoading", false);
      const based64Img = await toBase64(res);
      emits("setImage", { image: based64Img, bg: false });
    };
    const toBase64 = async (file) => {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card_action = resolveComponent("v-card-action");
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          flat: "",
                          rouded: "lg",
                          class: "bg-white mx-auto rounded-lg",
                          disabled: unref(loader)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(loader)) {
                                _push5(ssrRenderComponent(VImg, { src: __props.initialImage }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Cropper), {
                                  class: "cropper",
                                  src: __props.initialImage,
                                  "stencil-props": { aspectRatio: __props.aspectRatio },
                                  imageClass: "contain",
                                  onChange: change
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              }
                              _push5(ssrRenderComponent(_component_v_card_action, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      class: "text-caption",
                                      block: "",
                                      flat: "",
                                      color: "purple-darken-4 rounded-lg rounded-t-0",
                                      active: "",
                                      onClick: removeBg,
                                      loading: unref(loader)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Remove background</span>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Remove background")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        class: "text-caption",
                                        block: "",
                                        flat: "",
                                        color: "purple-darken-4 rounded-lg rounded-t-0",
                                        active: "",
                                        onClick: removeBg,
                                        loading: unref(loader)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Remove background")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                unref(loader) ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: __props.initialImage
                                }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode(unref(Cropper), {
                                    class: "cropper",
                                    src: __props.initialImage,
                                    "stencil-props": { aspectRatio: __props.aspectRatio },
                                    imageClass: "contain",
                                    onChange: change
                                  }, null, 8, ["src", "stencil-props"])
                                ])),
                                createVNode(_component_v_card_action, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "text-caption",
                                      block: "",
                                      flat: "",
                                      color: "purple-darken-4 rounded-lg rounded-t-0",
                                      active: "",
                                      onClick: removeBg,
                                      loading: unref(loader)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Remove background")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            flat: "",
                            rouded: "lg",
                            class: "bg-white mx-auto rounded-lg",
                            disabled: unref(loader)
                          }, {
                            default: withCtx(() => [
                              unref(loader) ? (openBlock(), createBlock(VImg, {
                                key: 0,
                                src: __props.initialImage
                              }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode(unref(Cropper), {
                                  class: "cropper",
                                  src: __props.initialImage,
                                  "stencil-props": { aspectRatio: __props.aspectRatio },
                                  imageClass: "contain",
                                  onChange: change
                                }, null, 8, ["src", "stencil-props"])
                              ])),
                              createVNode(_component_v_card_action, null, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    class: "text-caption",
                                    block: "",
                                    flat: "",
                                    color: "purple-darken-4 rounded-lg rounded-t-0",
                                    active: "",
                                    onClick: removeBg,
                                    loading: unref(loader)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Remove background")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          height: "100%",
                          elevation: "8",
                          flat: "",
                          class: "bg-transparent overflow-hidden rounded-lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="pa-4 bg-white text-subtitle-2"${_scopeId4}><span${_scopeId4}>Final result</span></div>`);
                              _push5(ssrRenderComponent(VImg, {
                                src: __props.image,
                                contain: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "pa-4 bg-white text-subtitle-2" }, [
                                  createVNode("span", null, "Final result")
                                ]),
                                createVNode(VImg, {
                                  src: __props.image,
                                  contain: ""
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            height: "100%",
                            elevation: "8",
                            flat: "",
                            class: "bg-transparent overflow-hidden rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pa-4 bg-white text-subtitle-2" }, [
                                createVNode("span", null, "Final result")
                              ]),
                              createVNode(VImg, {
                                src: __props.image,
                                contain: ""
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          rouded: "lg",
                          class: "bg-white mx-auto rounded-lg",
                          disabled: unref(loader)
                        }, {
                          default: withCtx(() => [
                            unref(loader) ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: __props.initialImage
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode(unref(Cropper), {
                                class: "cropper",
                                src: __props.initialImage,
                                "stencil-props": { aspectRatio: __props.aspectRatio },
                                imageClass: "contain",
                                onChange: change
                              }, null, 8, ["src", "stencil-props"])
                            ])),
                            createVNode(_component_v_card_action, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  class: "text-caption",
                                  block: "",
                                  flat: "",
                                  color: "purple-darken-4 rounded-lg rounded-t-0",
                                  active: "",
                                  onClick: removeBg,
                                  loading: unref(loader)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Remove background")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          height: "100%",
                          elevation: "8",
                          flat: "",
                          class: "bg-transparent overflow-hidden rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pa-4 bg-white text-subtitle-2" }, [
                              createVNode("span", null, "Final result")
                            ]),
                            createVNode(VImg, {
                              src: __props.image,
                              contain: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        flat: "",
                        rouded: "lg",
                        class: "bg-white mx-auto rounded-lg",
                        disabled: unref(loader)
                      }, {
                        default: withCtx(() => [
                          unref(loader) ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: __props.initialImage
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(unref(Cropper), {
                              class: "cropper",
                              src: __props.initialImage,
                              "stencil-props": { aspectRatio: __props.aspectRatio },
                              imageClass: "contain",
                              onChange: change
                            }, null, 8, ["src", "stencil-props"])
                          ])),
                          createVNode(_component_v_card_action, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "text-caption",
                                block: "",
                                flat: "",
                                color: "purple-darken-4 rounded-lg rounded-t-0",
                                active: "",
                                onClick: removeBg,
                                loading: unref(loader)
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Remove background")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        height: "100%",
                        elevation: "8",
                        flat: "",
                        class: "bg-transparent overflow-hidden rounded-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pa-4 bg-white text-subtitle-2" }, [
                            createVNode("span", null, "Final result")
                          ]),
                          createVNode(VImg, {
                            src: __props.image,
                            contain: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/image/crop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const maxImageSize = 2 * 1024 * 1024;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    image: String,
    profile: Boolean,
    view: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: [String, Number],
      default: 1 / 1
    },
    fullSize: Boolean,
    editable: {
      type: Boolean,
      default: true
    },
    avatar: {
      type: Boolean,
      default: false
    }
  },
  emits: ["setImage"],
  setup(__props, { emit: __emit }) {
    const props = __props, emits = __emit, { isMobile } = useDevice();
    const { placeholderImage, profileImage, toggleSnackbar } = useAppStore();
    const imageUrl = computed(() => {
      return props.image ?? (props.profile ? profileImage : placeholderImage);
    });
    const isLoading = ref(false);
    const dialog = ref(false);
    const processedImage = ref("");
    const initialImage = ref("");
    const imageType = ref("image_url");
    const setImage = async (e) => {
      const file = e.target.files[0];
      if (file.size > maxImageSize) {
        isLargeThanSize();
      } else {
        imageType.value = "image_file_b64";
        dialog.value = true;
        const reader = new FileReader();
        reader.onload = (evt) => {
          processedImage.value = initialImage.value = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const changeImage = () => {
      const input = (void 0).createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.click();
      input.onchange = (e) => {
        let file = e.target.files[0];
        if (file.size > maxImageSize) {
          isLargeThanSize();
        } else {
          imageType.value = "image_file_b64";
          const reader = new FileReader();
          reader.onload = (evt) => {
            processedImage.value = initialImage.value = evt.target.result;
          };
          reader.readAsDataURL(file);
          resetFileInput();
        }
      };
    };
    const isLargeThanSize = () => {
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "Please select an image size less than 2MB"
      });
    };
    const saveImage = () => {
      initialImage.value = processedImage.value;
      emits("setImage", processedImage.value);
      dialog.value = false;
      resetFileInput();
    };
    const close = () => {
      processedImage.value = null;
      dialog.value = false;
      isLoading.value = false;
      resetFileInput();
    };
    const resetFileInput = () => {
      (void 0).getElementById("fileInput").value = "";
    };
    const setProcessedImage = (val) => {
      processedImage.value = val.image;
      if (!val.bg)
        initialImage.value = val.image;
    };
    const componentIsLoading = (val) => {
      isLoading.value = val;
    };
    const resetValue = props.image;
    const resetImage = () => {
      emits("setImage", resetValue);
      initialImage.value = processedImage.value = resetValue;
      resetFileInput();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreDialogHeader = __nuxt_component_2;
      const _component_AdminCoreImageCrop = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-abd7e185>`);
      if (__props.avatar) {
        _push(`<div class="position-relative" data-v-abd7e185>`);
        _push(ssrRenderComponent(VAvatar, {
          size: unref(isMobile) ? 50 : 135,
          image: unref(imageUrl)
        }, null, _parent));
        _push(`<div class="position-absolute" style="${ssrRenderStyle({ "bottom": "0", "right": "0" })}" data-v-abd7e185>`);
        _push(ssrRenderComponent(VBtn, {
          class: "text-caption",
          title: "Edit",
          icon: "mdi-pencil",
          size: "x-small",
          active: "",
          variant: "text",
          color: "primary-accent",
          onClick: ($event) => dialog.value = true
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="" data-v-abd7e185>`);
        _push(ssrRenderComponent(VCard, {
          onClick: setImage,
          flat: "",
          class: ["bg-off-white-1 rounded-lg position-relative mx-auto", { "card-outlined": !__props.view }],
          width: __props.fullSize ? "80%" : 180,
          height: __props.fullSize ? "80%" : 180
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VImg, {
                src: unref(imageUrl),
                contain: "",
                height: "100%",
                width: "100%"
              }, null, _parent2, _scopeId));
              if (__props.editable || !__props.view) {
                _push2(`<div class="position-absolute d-flex flex-column ga-2" style="${ssrRenderStyle({ "top": "5px", "right": "5px" })}" data-v-abd7e185${_scopeId}>`);
                if ((unref(processedImage) || unref(imageUrl)) && __props.image && !__props.view) {
                  _push2(ssrRenderComponent(VIcon, {
                    icon: "mdi-pencil",
                    variant: "text",
                    color: "primary-accent",
                    class: "rounded-lg",
                    size: "22",
                    title: "Edit actual image",
                    onClick: ($event) => dialog.value = true
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(imageUrl) !== unref(resetValue) && __props.image) {
                  _push2(ssrRenderComponent(VIcon, {
                    icon: "mdi-refresh",
                    variant: "text",
                    color: "primary-accent",
                    class: "rounded-lg",
                    size: "22",
                    title: "Reset to initial image",
                    onClick: resetImage
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(VImg, {
                  src: unref(imageUrl),
                  contain: "",
                  height: "100%",
                  width: "100%"
                }, null, 8, ["src"]),
                __props.editable || !__props.view ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "position-absolute d-flex flex-column ga-2",
                  style: { "top": "5px", "right": "5px" }
                }, [
                  (unref(processedImage) || unref(imageUrl)) && __props.image && !__props.view ? (openBlock(), createBlock(VIcon, {
                    key: 0,
                    icon: "mdi-pencil",
                    variant: "text",
                    color: "primary-accent",
                    class: "rounded-lg",
                    size: "22",
                    title: "Edit actual image",
                    onClick: ($event) => dialog.value = true
                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                  unref(imageUrl) !== unref(resetValue) && __props.image ? (openBlock(), createBlock(VIcon, {
                    key: 1,
                    icon: "mdi-refresh",
                    variant: "text",
                    color: "primary-accent",
                    class: "rounded-lg",
                    size: "22",
                    title: "Reset to initial image",
                    onClick: resetImage
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!__props.view) {
          _push(`<div class="w-100" data-v-abd7e185><input type="file" name="image" accept="image/*" class="text-caption cursor-pointer bg-off-white mt-1 pa-1 w-100 card-outlined rounded-lg" id="fileInput" data-v-abd7e185></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-disabled text-caption mt-3 text-center" style="${ssrRenderStyle({ "font-size": "11px !important" })}" data-v-abd7e185><span data-v-abd7e185>Taille maximale de l&#39;image: <b data-v-abd7e185>2MB</b></span></div></div>`);
      }
      _push(ssrRenderComponent(VDialog, {
        fullscreen: "",
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              flat: "",
              class: "rounded-0 hide-scrollbar system-bg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminCoreDialogHeader, {
                    title: "Image setiings",
                    onClose: close
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center mx-3 ga-2" data-v-abd7e185${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          size: "small",
                          class: "text-caption rounded-lg",
                          active: "",
                          onClick: changeImage,
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span data-v-abd7e185${_scopeId4}>Change image</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Change image")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "text-caption rounded-lg",
                          flat: "",
                          color: "primary-accent",
                          size: "small",
                          "prepend-icon": "mdi-content-save",
                          onClick: saveImage,
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span data-v-abd7e185${_scopeId4}>Save</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Save")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center mx-3 ga-2" }, [
                            createVNode(VBtn, {
                              variant: "text",
                              size: "small",
                              class: "text-caption rounded-lg",
                              active: "",
                              onClick: changeImage,
                              disabled: unref(isLoading)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Change image")
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            createVNode(VBtn, {
                              class: "text-caption rounded-lg",
                              flat: "",
                              color: "primary-accent",
                              size: "small",
                              "prepend-icon": "mdi-content-save",
                              onClick: saveImage,
                              disabled: unref(isLoading)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Save")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { justify: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "8"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AdminCoreImageCrop, {
                                            image: unref(processedImage),
                                            initialImage: unref(initialImage),
                                            "aspect-ratio": __props.aspectRatio,
                                            imageType: unref(imageType),
                                            onSetImage: setProcessedImage,
                                            onIsLoading: componentIsLoading
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AdminCoreImageCrop, {
                                              image: unref(processedImage),
                                              initialImage: unref(initialImage),
                                              "aspect-ratio": __props.aspectRatio,
                                              imageType: unref(imageType),
                                              onSetImage: setProcessedImage,
                                              onIsLoading: componentIsLoading
                                            }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "8"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AdminCoreImageCrop, {
                                            image: unref(processedImage),
                                            initialImage: unref(initialImage),
                                            "aspect-ratio": __props.aspectRatio,
                                            imageType: unref(imageType),
                                            onSetImage: setProcessedImage,
                                            onIsLoading: componentIsLoading
                                          }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "8"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AdminCoreImageCrop, {
                                          image: unref(processedImage),
                                          initialImage: unref(initialImage),
                                          "aspect-ratio": __props.aspectRatio,
                                          imageType: unref(imageType),
                                          onSetImage: setProcessedImage,
                                          onIsLoading: componentIsLoading
                                        }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AdminCoreImageCrop, {
                                        image: unref(processedImage),
                                        initialImage: unref(initialImage),
                                        "aspect-ratio": __props.aspectRatio,
                                        imageType: unref(imageType),
                                        onSetImage: setProcessedImage,
                                        onIsLoading: componentIsLoading
                                      }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminCoreDialogHeader, {
                      title: "Image setiings",
                      onClose: close
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mx-3 ga-2" }, [
                          createVNode(VBtn, {
                            variant: "text",
                            size: "small",
                            class: "text-caption rounded-lg",
                            active: "",
                            onClick: changeImage,
                            disabled: unref(isLoading)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Change image")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(VBtn, {
                            class: "text-caption rounded-lg",
                            flat: "",
                            color: "primary-accent",
                            size: "small",
                            "prepend-icon": "mdi-content-save",
                            onClick: saveImage,
                            disabled: unref(isLoading)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Save")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, { justify: "center" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AdminCoreImageCrop, {
                                      image: unref(processedImage),
                                      initialImage: unref(initialImage),
                                      "aspect-ratio": __props.aspectRatio,
                                      imageType: unref(imageType),
                                      onSetImage: setProcessedImage,
                                      onIsLoading: componentIsLoading
                                    }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                flat: "",
                class: "rounded-0 hide-scrollbar system-bg"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AdminCoreDialogHeader, {
                    title: "Image setiings",
                    onClose: close
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mx-3 ga-2" }, [
                        createVNode(VBtn, {
                          variant: "text",
                          size: "small",
                          class: "text-caption rounded-lg",
                          active: "",
                          onClick: changeImage,
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Change image")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(VBtn, {
                          class: "text-caption rounded-lg",
                          flat: "",
                          color: "primary-accent",
                          size: "small",
                          "prepend-icon": "mdi-content-save",
                          onClick: saveImage,
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AdminCoreImageCrop, {
                                    image: unref(processedImage),
                                    initialImage: unref(initialImage),
                                    "aspect-ratio": __props.aspectRatio,
                                    imageType: unref(imageType),
                                    onSetImage: setProcessedImage,
                                    onIsLoading: componentIsLoading
                                  }, null, 8, ["image", "initialImage", "aspect-ratio", "imageType"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/image/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abd7e185"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index-RXRlxYy9.js.map
