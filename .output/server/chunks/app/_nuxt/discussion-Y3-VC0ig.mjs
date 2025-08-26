import { p as publicAssetsURL, b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, ref, computed, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, watch, createCommentVNode } from 'vue';
import { _ as _export_sfc, s as storeToRefs, h as useAppStore, m as useDevice } from '../server.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useChatStore, a as useSupabase } from './chat-AG0a5xI_.mjs';
import { V as VImg, a as VAvatar } from './VAvatar-Tkx6eOqd.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { V as VList, a as VListItem } from './VList-0_bPAEAt.mjs';
import { x as VExpandXTransition, b as VIcon } from './index-jw0wqd8u.mjs';
import { a as VProgressCircular, V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VMenu } from './VMenu-Xf_H0UU6.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VTextarea } from './VTextarea-PqZmnZiL.mjs';

const _imports_0 = "" + publicAssetsURL("logos/access-no-tag.png");
const _sfc_main$2 = {
  __name: "rooms",
  __ssrInlineRender: true,
  props: {
    provider: {
      type: String,
      default: ""
    }
  },
  emits: ["toggleChat"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { currentUser } = storeToRefs(useAppStore());
    const chatStore = useChatStore();
    const { getFullnames, dateFormat_Time } = useHelpers();
    const search = ref("");
    const rooms = ref([]);
    const filteredRooms = computed(() => {
      return rooms.value.filter((room) => {
        return getFullnames(room.client).toLowerCase().includes(search.value.toLowerCase()) || getFullnames(room.vendor).toLowerCase().includes(search.value.toLowerCase()) || room.product.productName.toLowerCase().includes(search.value.toLowerCase());
      }).sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
    });
    const receiver = (chatMessages) => {
      return currentUser.value.userId === chatMessages.clientId ? chatMessages.vendor : chatMessages.client;
    };
    const activeRoom = ref(null);
    const toggleChat = (room) => {
      openRoom(room.session);
      emit("toggleChat", room.session !== activeRoom.value);
      activeRoom.value = room.session;
    };
    const openRoom = async (session) => {
      const room = await chatStore.getRoom(session, props.provider);
      chatStore.setChat(room);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column h-100" }, _attrs))}><div class="d-flex align-center py-2 px-2 px-md-4" style="${ssrRenderStyle({
        height: "55px"
      })}"><div class="">`);
      _push(ssrRenderComponent(VImg, {
        src: _imports_0,
        width: "100"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(`<div class="text-subtitle-1"><b>My Chats </b></div></div>`);
      _push(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent));
      _push(`<div class="bg-off-white-1 px-3 pb-3">`);
      _push(ssrRenderComponent(VTextField, {
        "hide-details": "",
        "prepend-inner-icon": "mdi-magnify",
        placeholder: "Search room...",
        class: "rounded-lg",
        "bg-color": "white",
        type: "search",
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VList, {
        class: "h-100 overflow-y-auto hide-scrollbar pa-0 bg-transparent",
        dense: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(filteredRooms), (room, i) => {
              _push2(`<div class=""${_scopeId}>`);
              _push2(ssrRenderComponent(VListItem, {
                class: "text-caption py-2",
                onClick: ($event) => toggleChat(room),
                color: "primary-dark"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex ga-3 w-100"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "45",
                      color: "grey-lighten-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: room.product.thumbnail
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: room.product.thumbnail
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex w-100 flex-column text-capitalize align-space-between"${_scopeId2}><div class="text-capitalize d-flex justify-space-between align-start"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(room.product.productName.toLowerCase())}</span><code class="text-caption" style="${ssrRenderStyle({ "font-size": "10px!important" })}"${_scopeId2}>${ssrInterpolate(unref(dateFormat_Time)(room.createdAt))}</code></div><span class="text-disabled"${_scopeId2}>From: ${ssrInterpolate(unref(getFullnames)(receiver(room)).toLowerCase())}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex ga-3 w-100" }, [
                        createVNode(VAvatar, {
                          size: "45",
                          color: "grey-lighten-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: room.product.thumbnail
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-flex w-100 flex-column text-capitalize align-space-between" }, [
                          createVNode("div", { class: "text-capitalize d-flex justify-space-between align-start" }, [
                            createVNode("span", null, toDisplayString(room.product.productName.toLowerCase()), 1),
                            createVNode("code", {
                              class: "text-caption",
                              style: { "font-size": "10px!important" }
                            }, toDisplayString(unref(dateFormat_Time)(room.createdAt)), 1)
                          ]),
                          createVNode("span", { class: "text-disabled" }, "From: " + toDisplayString(unref(getFullnames)(receiver(room)).toLowerCase()), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredRooms), (room, i) => {
                return openBlock(), createBlock("div", {
                  class: "",
                  key: i
                }, [
                  createVNode(VListItem, {
                    class: "text-caption py-2",
                    onClick: ($event) => toggleChat(room),
                    color: "primary-dark"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex ga-3 w-100" }, [
                        createVNode(VAvatar, {
                          size: "45",
                          color: "grey-lighten-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: room.product.thumbnail
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "d-flex w-100 flex-column text-capitalize align-space-between" }, [
                          createVNode("div", { class: "text-capitalize d-flex justify-space-between align-start" }, [
                            createVNode("span", null, toDisplayString(room.product.productName.toLowerCase()), 1),
                            createVNode("code", {
                              class: "text-caption",
                              style: { "font-size": "10px!important" }
                            }, toDisplayString(unref(dateFormat_Time)(room.createdAt)), 1)
                          ]),
                          createVNode("span", { class: "text-disabled" }, "From: " + toDisplayString(unref(getFullnames)(receiver(room)).toLowerCase()), 1)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(VDivider)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/rooms.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "message",
  __ssrInlineRender: true,
  props: {
    msg: Object,
    showTime: Boolean,
    loader: Object,
    fail: [String, Number]
  },
  setup(__props) {
    useDevice();
    const { getTime } = useHelpers();
    const { currentUser } = storeToRefs(useAppStore());
    const chat = ref();
    const isSender = (sender) => {
      return sender === currentUser.value.userId;
    };
    const isServer = (sender) => {
      return sender === "server";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["text-caption d-flex align-center ga-2 w-100 overflow-y-auto", isSender(__props.msg.sender) ? "justify-end" : "justify-start"],
        ref_key: "chat",
        ref: chat
      }, _attrs))}>`);
      if (!isSender(__props.msg.sender)) {
        _push(ssrRenderComponent(VExpandXTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.showTime) {
                _push2(`<div class="text-caption text-grey d-flex align-center" style="${ssrRenderStyle({ fontSize: "9px !important" })}"${_scopeId}>`);
                _push2(ssrRenderComponent(VIcon, {
                  size: "8",
                  icon: "mdi-clock-outline",
                  class: "mr-1"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(__props.msg.createdAt)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.showTime ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-caption text-grey d-flex align-center",
                  style: { fontSize: "9px !important" }
                }, [
                  createVNode(VIcon, {
                    size: "8",
                    icon: "mdi-clock-outline",
                    class: "mr-1"
                  }),
                  createVNode("span", null, toDisplayString(__props.msg.createdAt), 1)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!__props.loader.status && __props.fail === __props.msg.id) {
        _push(ssrRenderComponent(VIcon, {
          icon: "mdi-close-circle-outline",
          title: "Retry",
          class: "cursor-pointer",
          color: "red",
          onClick: ($event) => _ctx.defineEmits("retrySending")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([isServer(__props.msg.sender) ? "server" : isSender(__props.msg.sender) ? "send" : "receive", "message position-relativen d-flex align-center ga-2"])}"><span>${ssrInterpolate(__props.msg.message)}</span>`);
      _push(ssrRenderComponent(VExpandXTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.loader.status && __props.loader.msgId === __props.msg.id) {
              _push2(ssrRenderComponent(VProgressCircular, {
                size: 10,
                width: "1",
                indeterminate: "",
                color: "green-lighten-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.loader.status && __props.loader.msgId === __props.msg.id ? (openBlock(), createBlock(VProgressCircular, {
                key: 0,
                size: 10,
                width: "1",
                indeterminate: "",
                color: "green-lighten-4"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (isSender(__props.msg.sender)) {
        _push(ssrRenderComponent(VExpandXTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.showTime) {
                _push2(`<div class="text-caption text-grey d-flex align-center" style="${ssrRenderStyle({ fontSize: "9px !important" })}"${_scopeId}>`);
                _push2(ssrRenderComponent(VIcon, {
                  size: "8",
                  icon: "mdi-clock-outline",
                  class: "mr-1"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(getTime)(__props.msg.createdAt))}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.showTime ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-caption text-grey d-flex align-center",
                  style: { fontSize: "9px !important" }
                }, [
                  createVNode(VIcon, {
                    size: "8",
                    icon: "mdi-clock-outline",
                    class: "mr-1"
                  }),
                  createVNode("span", null, toDisplayString(unref(getTime)(__props.msg.createdAt)), 1)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/message.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const icon = "" + buildAssetsURL("typing.n-4ih3Pr.gif");
const _sfc_main = {
  __name: "discussion",
  __ssrInlineRender: true,
  emits: ["closeChat"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { currencyFormat, getFullnames } = useHelpers();
    useSupabase();
    const chatStore = useChatStore();
    const { chat } = storeToRefs(chatStore);
    const { currentUser, loading } = storeToRefs(useAppStore());
    const channel = ref();
    const usersOnline = ref([]);
    const quickTexts = [
      "Is it available?",
      "What is the last price?",
      "Do you do delivery?",
      "What is the delivery time?",
      "Do you deliver with free delivery?"
    ];
    const message = ref("");
    const showTimeStamp = ref(false);
    const failToSend = ref(null);
    const loader = ref({
      status: false,
      msgId: null
    });
    const isTyping = ref(false);
    const receiver = computed(() => {
      var _a, _b, _c;
      return currentUser.value.userId === ((_a = chat.value) == null ? void 0 : _a.clientId) ? (_b = chat.value) == null ? void 0 : _b.vendor : (_c = chat.value) == null ? void 0 : _c.client;
    });
    const serverMessage = ref("");
    const timer = ref("");
    const leaveChat = () => {
      channel.value.unsubscribe();
      const index = usersOnline.value.findIndex((i) => i.user == currentUser.value.userId);
      if (index > -1) {
        usersOnline.value[index];
        usersOnline.value.splice(index, 1);
      }
    };
    const handleScroll = () => {
      var elt = (void 0).getElementById("chatbox");
      if (elt) {
        elt.scrollTo({
          top: elt.scrollHeight,
          behavior: "smooth"
        });
        elt.scrollIntoView(false);
      }
    };
    const handleSend = async () => {
      if (!message.value)
        return false;
      clearTimeout(timer.value);
      isTyping.value = false;
      const msgId = chat.value.chats.length + 1;
      loader.value = {
        status: true,
        msgId
      };
      chat.value.chats.push({
        message: message.value,
        id: msgId,
        sender: currentUser.value.userId,
        isRead: false,
        createdAt: /* @__PURE__ */ new Date()
      });
      message.value = "";
      handleScroll();
      let res = await chatStore.sendMessage(chat.value);
      if (!res)
        failToSend.value = msgId;
      loader.value = {
        status: false,
        msgId: null
      };
    };
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.key === "Enter") {
        message.value += "\n";
      }
    };
    const clearChat = async () => {
      chat.value.chats = [];
      await chatStore.clearChat(chat.value);
    };
    const close = () => {
      loader.value = {
        status: false,
        msgId: null
      };
      failToSend.value = null;
      message.value = null;
      leaveChat();
      emits("closeChat");
    };
    watch(isTyping, (val) => {
      if (val)
        timer.value = setTimeout(() => isTyping.value = false, 4e3);
    });
    watch(loading, (val) => {
      handleScroll();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_ChatMessage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100 h-100 d-flex flex-column justify-space-between" }, _attrs))} data-v-e10bc672>`);
      if (unref(loading)) {
        _push(`<div class="d-flex justify-center align-center" style="${ssrRenderStyle({ height: "70dvh" })}" data-v-e10bc672>`);
        _push(ssrRenderComponent(VProgressCircular, {
          indeterminate: "",
          color: "primary",
          active: unref(loading)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="d-flex h-100 flex-column" data-v-e10bc672><div class="d-flex pa-2 ga-1 align-center" data-v-e10bc672>`);
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-arrow-left",
          title: "Return",
          onClick: close,
          variant: "text",
          size: "small",
          rounded: "lg"
        }, null, _parent));
        _push(ssrRenderComponent(VAvatar, {
          class: "bg-grey-lighten-2",
          size: "35"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            var _a22, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(ssrRenderComponent(VImg, {
                src: (_a3 = (_a22 = unref(receiver)) == null ? void 0 : _a22.picture) != null ? _a3 : (_c = (_b = unref(chat)) == null ? void 0 : _b.product) == null ? void 0 : _c.thumbnail
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VImg, {
                  src: (_b2 = (_d = unref(receiver)) == null ? void 0 : _d.picture) != null ? _b2 : (_f = (_e = unref(chat)) == null ? void 0 : _e.product) == null ? void 0 : _f.thumbnail
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="text-caption d-flex flex-column text-capitalize" data-v-e10bc672><div class="mt-n1 text-capitalize" data-v-e10bc672><span data-v-e10bc672>${ssrInterpolate((_a = unref(chat).product.productName) == null ? void 0 : _a.toLowerCase())} (${ssrInterpolate(unref(currencyFormat)((_a2 = unref(chat).product.price) != null ? _a2 : 0))}) </span></div><span class="text-disabled text-capitalize" data-v-e10bc672>${ssrInterpolate(unref(serverMessage))}</span></div>`);
        _push(ssrRenderComponent(VSpacer, null, null, _parent));
        _push(`<div class="" title="More" data-v-e10bc672>`);
        _push(ssrRenderComponent(VBtn, {
          size: "x-small",
          variant: "text",
          rounded: "lg",
          icon: "mdi-dots-vertical"
        }, null, _parent));
        _push(ssrRenderComponent(VMenu, {
          activator: "parent",
          location: "start"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VList, {
                dense: "",
                class: "pa-0 rounded-lg card-outlined"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItem, {
                      onClick: ($event) => showTimeStamp.value = !unref(showTimeStamp)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-e10bc672${_scopeId3}>${ssrInterpolate(unref(showTimeStamp) ? "Hide" : "Show")} time</span>`);
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(unref(showTimeStamp) ? "Hide" : "Show") + " time", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VListItem, {
                      onClick: ($event) => clearChat()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-e10bc672${_scopeId3}>Delete</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Delete")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItem, {
                        onClick: ($event) => showTimeStamp.value = !unref(showTimeStamp)
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(unref(showTimeStamp) ? "Hide" : "Show") + " time", 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VListItem, {
                        onClick: ($event) => clearChat()
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Delete")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VList, {
                  dense: "",
                  class: "pa-0 rounded-lg card-outlined"
                }, {
                  default: withCtx(() => [
                    createVNode(VListItem, {
                      onClick: ($event) => showTimeStamp.value = !unref(showTimeStamp)
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(showTimeStamp) ? "Hide" : "Show") + " time", 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VListItem, {
                      onClick: ($event) => clearChat()
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Delete")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="flex-grow-1" data-v-e10bc672>`);
        _push(ssrRenderComponent(VDivider, null, null, _parent));
        _push(`<div id="chatbox" class="w-100 px-3 d-flex flex-column ga-1 py-3 hide-scrollbar overflow-y-auto" style="${ssrRenderStyle({ height: "50dvh" })}" data-v-e10bc672><!--[-->`);
        ssrRenderList(unref(chat).chats, (msg, i) => {
          _push(`<p class="w-100" data-v-e10bc672>`);
          _push(ssrRenderComponent(_component_ChatMessage, {
            msg,
            showTime: unref(showTimeStamp),
            loader: unref(loader),
            fail: unref(failToSend)
          }, null, _parent));
          _push(`</p>`);
        });
        _push(`<!--]-->`);
        if (unref(isTyping)) {
          _push(`<div class="server d-flex align-center" data-v-e10bc672>`);
          _push(ssrRenderComponent(VImg, {
            src: unref(icon),
            width: "35",
            height: "35"
          }, null, _parent));
          _push(`<em class="mx-2" data-v-e10bc672>${ssrInterpolate(unref(getFullnames)(unref(receiver)))} typing ...</em></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="" data-v-e10bc672>`);
        _push(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent));
        _push(`<div class="px-3 pb-3" data-v-e10bc672><div class="ga-2 overflow-x-auto hide-scrollbar" style="${ssrRenderStyle({ whiteSpace: "nowrap" })}" data-v-e10bc672><!--[-->`);
        ssrRenderList(quickTexts, (text, i) => {
          _push(ssrRenderComponent(VCard, {
            flat: "",
            color: "primary",
            variant: "outlined",
            class: ["py-1 px-2 text-caption rounded-lg mx-1 d-inline-block cursor-pointer overflow-y-auto border", { activeText: unref(message) === text }],
            key: i,
            onClick: ($event) => message.value = text
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-e10bc672${_scopeId}>${ssrInterpolate(text)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="d-flex align-center ga-2" data-v-e10bc672>`);
        _push(ssrRenderComponent(VTextarea, {
          height: "80px",
          "hide-details": "",
          placeholder: "Type your message...",
          "auto-grow": "",
          rows: "1",
          "max-rows": "4",
          class: "hide-scrollbar mt-2 rounded-lg",
          autofocus: "",
          modelValue: unref(message),
          "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
          "bg-color": "white",
          onKeypress: handleSend,
          onKeydown: handleKeyDown
        }, null, _parent));
        _push(ssrRenderComponent(VBtn, {
          icon: "mdi-send",
          color: "primary-dark",
          size: "x-small",
          flat: "",
          rounded: "lg",
          title: "Send message",
          onClick: handleSend
        }, null, _parent));
        _push(`</div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chat/discussion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e10bc672"]]);

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=discussion-Y3-VC0ig.mjs.map
