import { _ as __nuxt_component_0$1 } from "./search-Y5nxNpAP.js";
import { _ as __nuxt_component_1$1 } from "./select-sjn27vix.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { ref, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createCommentVNode, watchEffect, computed } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { s as storeToRefs, h as useAppStore } from "../server.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { u as useSavedItemStore } from "./saved-items-T1rPLQyP.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VAvatar } from "./VAvatar-agmUyvkw.js";
import { V as VSpacer } from "./VSpacer-0DxA8eQn.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
import "./VTextField-8SU2p1Ep.js";
import "./index-d8gkbdU6.js";
import "./tag-pIHjuosL.js";
import "./index-q-0zZOOG.js";
import "./color-rZjm0Y7u.js";
import "./position-AkaJaFJy.js";
import "./rounded-jA9LRAgf.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VList-hhjvxiav.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./resizeObserver-k8M9k6Xi.js";
import "date-fns";
import "date-fns/locale";
import "./VImg-_57rVikU.js";
/* empty css               */
const _sfc_main$3 = {
  __name: "save-item",
  __ssrInlineRender: true,
  props: {
    item: Object,
    type: String,
    saved: Boolean
  },
  emits: ["toggleWishlist"],
  setup(__props, { emit: __emit }) {
    const props = __props, emits = __emit;
    const { error, currentUser } = storeToRefs(useAppStore());
    const { saveItem, deleteSavedItem } = useSavedItemStore();
    const loader = ref(false), toggleWishlist = async () => {
      loader.value = true;
      props.saved || props.item.isSaved ? await deleteSavedItem(props.item.id) : await saveItem({
        userId: currentUser.value.userId,
        itemId: props.item.id,
        type: props.type
      });
      loader.value = false;
      if (!error.value)
        emits("toggleWishlist");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtn, mergeProps({
        class: "card-outlined rounded-lg",
        icon: `mdi-bookmark${__props.saved || __props.item.isSaved ? "" : "-outline"}`,
        color: "primary-accent",
        variant: "text",
        size: "small",
        title: __props.saved || __props.item.isSaved ? "Remove from saved" : "Add to saved",
        onClick: toggleWishlist,
        loading: unref(loader)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/save-item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "tag",
  __ssrInlineRender: true,
  props: {
    tag: String,
    grey: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtn, mergeProps({
        class: ["rounded px-2 text-caption font-weight-regular", __props.grey ? "card-border" : "card-primary"],
        flat: "",
        size: "x-small",
        style: { "pointer-events": "none" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.tag)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.tag), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/tag.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "job-card",
  __ssrInlineRender: true,
  props: {
    job: Object,
    minimal: {
      type: Boolean,
      default: false
    },
    saved: Boolean
  },
  emits: ["toggleWishlist"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { dateDifference, currencyFormat, capitalizeFirstLetter } = useHelpers();
    storeToRefs(useAppStore());
    useSavedItemStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SaveItem = __nuxt_component_1;
      const _component_CoreTag = __nuxt_component_2$1;
      _push(ssrRenderComponent(VCard, mergeProps({
        flat: "",
        class: "card-outlined rounded-lg w-100",
        to: { name: "jobs-id", params: { id: __props.job.jobId } }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex pa-3"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, {
              color: "white",
              size: "50",
              class: "rounded-lg",
              image: __props.job.business.logo ?? __props.job.banner
            }, null, _parent2, _scopeId));
            _push2(`<div class="px-3 text-body-2"${_scopeId}><div class="" class="${ssrRenderClass([__props.minimal ? "three-lines" : "two-lines", ""])}"${_scopeId}><b${_scopeId}>${ssrInterpolate(__props.job.jobName)}</b></div><div class="d-flex flex-column mt-1 text-caption text-capitalize text-grey-darken-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-decoration-underline text-grey-darken-2",
              to: {
                name: "company-name-id",
                params: {
                  id: __props.job.businessId,
                  name: String(__props.job.business.businessName).toLowerCase().replaceAll(" ", "-")
                }
              },
              onClick: () => {
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(String(__props.job.business.businessName).toLowerCase())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(String(__props.job.business.businessName).toLowerCase()), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(String(__props.job.location).toLowerCase())}</span></div></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SaveItem, {
              item: __props.job,
              saved: __props.saved,
              type: "jobs",
              onToggleWishlist: ($event) => emits("toggleWishlist")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (!__props.minimal) {
              _push2(`<div class="mt-3 px-2"${_scopeId}><div class="d-flex ga-2 overflow-auto hide-scrollbar"${_scopeId}><!--[-->`);
              ssrRenderList(__props.job.skills, (skill, i) => {
                _push2(ssrRenderComponent(_component_CoreTag, {
                  key: i,
                  tag: skill,
                  grey: ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="text-caption three-lines mt-2 text-grey-darken-1"${_scopeId}><span${_scopeId}>${__props.job.description ?? ""}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent2, _scopeId));
            _push2(`<div class="px-3 pt-0 pb-4 d-flex flex-wrap justify-start justify-md-space-around text-caption text-grey-darken-2"${_scopeId}><div class="d-inline-block md-d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-cash",
              start: ""
            }, null, _parent2, _scopeId));
            if (__props.job.isConfidential) {
              _push2(`<span${_scopeId}>Confidential</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(currencyFormat)(__props.job.salaryRange[0]))} - ${ssrInterpolate(unref(currencyFormat)(__props.job.salaryRange[1]))}</span>`);
            }
            _push2(`</div><div class="d-inline-block d-md-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-clock-outline",
              size: "small",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(dateDifference)(__props.job.deadline))}</span></div><div class="d-inline-block d-md-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-account-multiple-outline",
              size: "small",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.job.applicationsLimit)} applicants</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex pa-3" }, [
                createVNode(VAvatar, {
                  color: "white",
                  size: "50",
                  class: "rounded-lg",
                  image: __props.job.business.logo ?? __props.job.banner
                }, null, 8, ["image"]),
                createVNode("div", { class: "px-3 text-body-2" }, [
                  createVNode("div", {
                    class: ["", __props.minimal ? "three-lines" : "two-lines"]
                  }, [
                    createVNode("b", null, toDisplayString(__props.job.jobName), 1)
                  ], 2),
                  createVNode("div", { class: "d-flex flex-column mt-1 text-caption text-capitalize text-grey-darken-2" }, [
                    createVNode(_component_NuxtLink, {
                      class: "text-decoration-underline text-grey-darken-2",
                      to: {
                        name: "company-name-id",
                        params: {
                          id: __props.job.businessId,
                          name: String(__props.job.business.businessName).toLowerCase().replaceAll(" ", "-")
                        }
                      },
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(String(__props.job.business.businessName).toLowerCase()), 1)
                      ]),
                      _: 1
                    }, 8, ["to", "onClick"]),
                    createVNode("span", null, toDisplayString(String(__props.job.location).toLowerCase()), 1)
                  ])
                ]),
                createVNode(VSpacer),
                createVNode(_component_SaveItem, {
                  item: __props.job,
                  saved: __props.saved,
                  type: "jobs",
                  onToggleWishlist: ($event) => emits("toggleWishlist")
                }, null, 8, ["item", "saved", "onToggleWishlist"])
              ]),
              !__props.minimal ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-3 px-2"
              }, [
                createVNode("div", { class: "d-flex ga-2 overflow-auto hide-scrollbar" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.job.skills, (skill, i) => {
                    return openBlock(), createBlock(_component_CoreTag, {
                      key: i,
                      tag: skill,
                      grey: ""
                    }, null, 8, ["tag"]);
                  }), 128))
                ]),
                createVNode("div", { class: "text-caption three-lines mt-2 text-grey-darken-1" }, [
                  createVNode("span", {
                    innerHTML: __props.job.description
                  }, null, 8, ["innerHTML"])
                ])
              ])) : createCommentVNode("", true),
              createVNode(VDivider, { class: "my-3" }),
              createVNode("div", { class: "px-3 pt-0 pb-4 d-flex flex-wrap justify-start justify-md-space-around text-caption text-grey-darken-2" }, [
                createVNode("div", { class: "d-inline-block md-d-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: "mdi-cash",
                    start: ""
                  }),
                  __props.job.isConfidential ? (openBlock(), createBlock("span", { key: 0 }, "Confidential")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(currencyFormat)(__props.job.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.job.salaryRange[1])), 1))
                ]),
                createVNode("div", { class: "d-inline-block d-md-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: "mdi-clock-outline",
                    size: "small",
                    start: ""
                  }),
                  createVNode("span", null, toDisplayString(unref(dateDifference)(__props.job.deadline)), 1)
                ]),
                createVNode("div", { class: "d-inline-block d-md-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: "mdi-account-multiple-outline",
                    size: "small",
                    start: ""
                  }),
                  createVNode("span", null, toDisplayString(__props.job.applicationsLimit) + " applicants", 1)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/jobs/job-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "saved-jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      currencyFormat,
      capitalizeFirstLetter,
      filterDataPerField,
      dateFormat_Month,
      numberFormat
    } = useHelpers();
    const { loading } = storeToRefs(useAppStore());
    const { savedItems } = useSavedItemStore();
    const data = ref([]);
    const getData = async () => {
      data.value = await savedItems("jobs");
    };
    watchEffect(() => {
      getData();
    });
    const sort = ref("Newest");
    const setSort = (val) => {
      sort.value = val;
    };
    const search = ref("");
    const setSearch = (val) => {
      search.value = val;
    };
    const filteredJobs = computed(() => {
      const unsortedData = filterDataPerField(data.value, search.value);
      if (sort.value === "Newest" || sort.value === "Oldest")
        return unsortedData.sort((a, b) => {
          if (a.dateCreated > b.dateCreated)
            if (sort.value === "Newest")
              return -1;
            else
              return 1;
        });
      if (sort.value === "High salary" || sort.value === "Lower salary")
        return unsortedData.sort((a, b) => {
          if (a.salaryRange.reduce((a2, b2) => a2 + b2, 0) > b.salaryRange.reduce((a2, b2) => a2 + b2, 0)) {
            if (sort.value === "High salary")
              return -1;
            else
              return 1;
          }
        });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSearch = __nuxt_component_0$1;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      const _component_ClientJobsJobCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><div class="text-h5 pt-8"><b>My Saved Jobs</b></div><div class="d-flex align-center ga-2 my-4">`);
      _push(ssrRenderComponent(_component_AdminCoreSearch, {
        search: unref(search),
        onSearch: setSearch
      }, null, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(VBtn, {
        class: "text-caption card-outlined rounded-lg",
        variant: "text",
        size: "small",
        id: "sortBy",
        "prepend-icon": "mdi-sort"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Sort by ${ssrInterpolate(String(unref(sort)).toLowerCase())}</span>`);
          } else {
            return [
              createVNode("span", null, "Sort by " + toDisplayString(String(unref(sort)).toLowerCase()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminCoreSelect, {
        activator: "#sortBy",
        list: ["Newest", "Oldest", "High salary", "Lower salary"],
        "list-value": unref(sort),
        onSetItem: setSort
      }, null, _parent));
      _push(`</div></div><div class="d-flex flex-column ga-4 mt-8"><!--[-->`);
      ssrRenderList(unref(filteredJobs), (job) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ClientJobsJobCard, {
          job,
          saved: true
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(filteredJobs).length || unref(loading)) {
        _push(`<div class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center">`);
        if (unref(loading)) {
          _push(`<span>Loading jobs...</span>`);
        } else {
          _push(`<span>No job found</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/saved-jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=saved-jobs-bir15dMn.js.map
