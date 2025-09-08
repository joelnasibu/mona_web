import { _ as __nuxt_component_0 } from "./mid-screen-layout-b8tbDczG.js";
import { mergeProps, useSSRContext, withCtx, unref, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { u as useHead } from "./index-S1hhTCs3.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import "./VContainer-jF5qmVp8.js";
/* empty css               */
import "./tag-pIHjuosL.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "date-fns";
import "date-fns/locale";
import "./color-rZjm0Y7u.js";
const _sfc_main$1 = {
  __name: "title-2",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-2" }, _attrs))} data-v-f77ba217><b data-v-f77ba217>${ssrInterpolate(__props.title)}</b></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/title-2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f77ba217"]]);
const _sfc_main = {
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    const { dateFormat_Month } = useHelpers();
    useHead({
      title: "Politique de Confidentielité"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMidScreenLayout = __nuxt_component_0;
      const _component_CoreTitle2 = __nuxt_component_1;
      _push(ssrRenderComponent(_component_CoreMidScreenLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "9",
                    class: "py-5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="" data-v-6afa51c1${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CoreTitle2, { title: "Politique de Confidentielité" }, null, _parent4, _scopeId3));
                        _push4(`<div class="mt-1" data-v-6afa51c1${_scopeId3}><div class="text-subtitle-2 text-disabled" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Dernière mise à jour: ${ssrInterpolate(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05")))}</span></div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2" style="${ssrRenderStyle({ "font-weight": "450" })}" data-v-6afa51c1${_scopeId3}><p data-v-6afa51c1${_scopeId3}> Chez Smartsell, nous accordons une importance primordiale à la protection de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez nos services de recherche d&#39;emploi et de commerce électronique. Nous nous engageons à respecter votre vie privée et à sécuriser vos données conformément aux normes les plus strictes. En utilisant les Services d&#39;Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: </p></div></div><ul class="mt-10 primary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}><div class="title" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Le but de cette politique de confidentialité </span></div><div class="content text-body-2 mt-5 d-flex flex-column ga-3" data-v-6afa51c1${_scopeId3}><p data-v-6afa51c1${_scopeId3}> Notre site respecte votre vie privée, vos droits relatifs à l&#39;achat effectué sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. </p><p data-v-6afa51c1${_scopeId3}> L&#39;utilisation du Site est soumise à l&#39;acceptation préalable de la présente politique de confidentialité (la « Politique »). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l&#39;utilisation qui en est faite et les droits que vous pouvez exercer. </p><p data-v-6afa51c1${_scopeId3}> Ainsi, cette politique de confidentialité consiste aussi à informer les utilisateurs de notre site des données personnelles que nous recueillons ainsi que les informations suivantes, le cas échéant : </p></div><ul class="mt-4 text-body-2 secondary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>les obligations</b><div data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Nous avons obligation de :</span><ul class="tertiary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}> Rendre disponible à tout utilisateur les articles et services numériques ouverts ; </li><li data-v-6afa51c1${_scopeId3}> S&#39;assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de façon transparente ; </li><li data-v-6afa51c1${_scopeId3}> Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fixées par l&#39;Autorité de Régulation du Numérique ; </li><li data-v-6afa51c1${_scopeId3}> Publier par tout moyen d&#39;information de masse et sans délais, les prévisions d&#39;interruption de services, notamment pour des raisons d&#39;installation, de réparation ou de changement d&#39;équipement ; </li><li data-v-6afa51c1${_scopeId3}> Etablir un mécanisme efficace de traitement des réclamations et de résolution expéditive des incidents; </li><li data-v-6afa51c1${_scopeId3}> Veiller au respect des règles relatives à la protection des données à caractère personnel. </li></ul></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>les activités et services numériques</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Les activités et services numériques s&#39;exercent librement, dans le respect des dispositions légales et règlementaires applicables en République Démocratique du Congo. Ils sont soumis aux principes ci-après :</span></div><ul class="tertiary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}>Egalité</li><li data-v-6afa51c1${_scopeId3}>Transparence</li><li data-v-6afa51c1${_scopeId3}>Non-discrimination</li><li data-v-6afa51c1${_scopeId3}>Libre concurrence</li><li data-v-6afa51c1${_scopeId3}>Neutralité</li></ul></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>mineurs</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Si vous êtes mineur dans le pays depuis lequel vous accédez à notre site, vous ne pouvez communiquer vos données personnelles sur le site qu&#39;avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous êtes parent(s) ou tuteur(s) et que vous consentiez à ce qu&#39;un mineur accède sur ce site, vous acceptez les présentes règles de confidentialité concernant l&#39;utilisation du site par le mineur ;</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>tiers</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et procéder à l&#39;achat des articles). Vous saurez que vous êtes sur le site d&#39;un tiers parce qu&#39;il n&#39;aura pas la même présentation et que l&#39;adresse Internet dans la barre d&#39;adresse de votre navigateur aura changé. Au moment de choisir un tiers, puis régulièrement ensuite, nous vérifions ses règles de confidentialité et de protection des données pour nous assurer qu&#39;elles soient conformes aux nôtres.</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>la responsable de lútilisateur du site</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Tout utilisateur de ce site engage sa propre responsabilité, et ce de plein droit à l&#39;égard de tiers lors de la bonne exécution des obligations résultant du contrat conclu à distance, que ces obligations soient exécutables par elle-même ou par d&#39;autres prestataires des services.</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>avis de modification des présentes règles</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Nous ne cessons d&#39;améliorer le fonctionnement de notre site et d&#39;y ajouter des fonctionnalités, ainsi que d&#39;améliorer et d&#39;élargir nos services actuels. En raison de ces modifications constantes et des changements dans la législation et la technologie, notre pratique en matière de données personnelles sera modifiée de temps en temps. Quand des modifications s&#39;avéreront nécessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles données nous recueillons et quel usage nous en faisons</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>lois applicables</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Cette politique de confidentialité est conforme à l&#39;ORDONNANCE LOI N° 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, </span></div></li></ul></li></ul>`);
                      } else {
                        return [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_CoreTitle2, { title: "Politique de Confidentielité" }),
                            createVNode("div", { class: "mt-1" }, [
                              createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                                createVNode("span", null, "Dernière mise à jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                              ])
                            ]),
                            createVNode(VDivider, { class: "my-5" }),
                            createVNode("div", {
                              class: "text-body-2",
                              style: { "font-weight": "450" }
                            }, [
                              createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale à la protection de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce électronique. Nous nous engageons à respecter votre vie privée et à sécuriser vos données conformément aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                            ])
                          ]),
                          createVNode("ul", { class: "mt-10 primary-list" }, [
                            createVNode("li", null, [
                              createVNode("div", { class: "title" }, [
                                createVNode("span", null, "Le but de cette politique de confidentialité ")
                              ]),
                              createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                                createVNode("p", null, " Notre site respecte votre vie privée, vos droits relatifs à l'achat effectué sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                                createVNode("p", null, " L'utilisation du Site est soumise à l'acceptation préalable de la présente politique de confidentialité (la « Politique »). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                                createVNode("p", null, " Ainsi, cette politique de confidentialité consiste aussi à informer les utilisateurs de notre site des données personnelles que nous recueillons ainsi que les informations suivantes, le cas échéant : ")
                              ]),
                              createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                                createVNode("li", null, [
                                  createVNode("b", null, "les obligations"),
                                  createVNode("div", null, [
                                    createVNode("span", null, "Nous avons obligation de :"),
                                    createVNode("ul", { class: "tertiary-list" }, [
                                      createVNode("li", null, " Rendre disponible à tout utilisateur les articles et services numériques ouverts ; "),
                                      createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de façon transparente ; "),
                                      createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fixées par l'Autorité de Régulation du Numérique ; "),
                                      createVNode("li", null, " Publier par tout moyen d'information de masse et sans délais, les prévisions d'interruption de services, notamment pour des raisons d'installation, de réparation ou de changement d'équipement ; "),
                                      createVNode("li", null, " Etablir un mécanisme efficace de traitement des réclamations et de résolution expéditive des incidents; "),
                                      createVNode("li", null, " Veiller au respect des règles relatives à la protection des données à caractère personnel. ")
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "les activités et services numériques"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Les activités et services numériques s'exercent librement, dans le respect des dispositions légales et règlementaires applicables en République Démocratique du Congo. Ils sont soumis aux principes ci-après :")
                                  ]),
                                  createVNode("ul", { class: "tertiary-list" }, [
                                    createVNode("li", null, "Egalité"),
                                    createVNode("li", null, "Transparence"),
                                    createVNode("li", null, "Non-discrimination"),
                                    createVNode("li", null, "Libre concurrence"),
                                    createVNode("li", null, "Neutralité")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "mineurs"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Si vous êtes mineur dans le pays depuis lequel vous accédez à notre site, vous ne pouvez communiquer vos données personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous êtes parent(s) ou tuteur(s) et que vous consentiez à ce qu'un mineur accède sur ce site, vous acceptez les présentes règles de confidentialité concernant l'utilisation du site par le mineur ;")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "tiers"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et procéder à l'achat des articles). Vous saurez que vous êtes sur le site d'un tiers parce qu'il n'aura pas la même présentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura changé. Au moment de choisir un tiers, puis régulièrement ensuite, nous vérifions ses règles de confidentialité et de protection des données pour nous assurer qu'elles soient conformes aux nôtres.")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "la responsable de lútilisateur du site"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilité, et ce de plein droit à l'égard de tiers lors de la bonne exécution des obligations résultant du contrat conclu à distance, que ces obligations soient exécutables par elle-même ou par d'autres prestataires des services.")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "avis de modification des présentes règles"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Nous ne cessons d'améliorer le fonctionnement de notre site et d'y ajouter des fonctionnalités, ainsi que d'améliorer et d'élargir nos services actuels. En raison de ces modifications constantes et des changements dans la législation et la technologie, notre pratique en matière de données personnelles sera modifiée de temps en temps. Quand des modifications s'avéreront nécessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles données nous recueillons et quel usage nous en faisons")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "lois applicables"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Cette politique de confidentialité est conforme à l'ORDONNANCE LOI N° 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "9",
                      class: "py-5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "" }, [
                          createVNode(_component_CoreTitle2, { title: "Politique de Confidentielité" }),
                          createVNode("div", { class: "mt-1" }, [
                            createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                              createVNode("span", null, "Dernière mise à jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("div", {
                            class: "text-body-2",
                            style: { "font-weight": "450" }
                          }, [
                            createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale à la protection de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce électronique. Nous nous engageons à respecter votre vie privée et à sécuriser vos données conformément aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                          ])
                        ]),
                        createVNode("ul", { class: "mt-10 primary-list" }, [
                          createVNode("li", null, [
                            createVNode("div", { class: "title" }, [
                              createVNode("span", null, "Le but de cette politique de confidentialité ")
                            ]),
                            createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                              createVNode("p", null, " Notre site respecte votre vie privée, vos droits relatifs à l'achat effectué sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                              createVNode("p", null, " L'utilisation du Site est soumise à l'acceptation préalable de la présente politique de confidentialité (la « Politique »). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                              createVNode("p", null, " Ainsi, cette politique de confidentialité consiste aussi à informer les utilisateurs de notre site des données personnelles que nous recueillons ainsi que les informations suivantes, le cas échéant : ")
                            ]),
                            createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                              createVNode("li", null, [
                                createVNode("b", null, "les obligations"),
                                createVNode("div", null, [
                                  createVNode("span", null, "Nous avons obligation de :"),
                                  createVNode("ul", { class: "tertiary-list" }, [
                                    createVNode("li", null, " Rendre disponible à tout utilisateur les articles et services numériques ouverts ; "),
                                    createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de façon transparente ; "),
                                    createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fixées par l'Autorité de Régulation du Numérique ; "),
                                    createVNode("li", null, " Publier par tout moyen d'information de masse et sans délais, les prévisions d'interruption de services, notamment pour des raisons d'installation, de réparation ou de changement d'équipement ; "),
                                    createVNode("li", null, " Etablir un mécanisme efficace de traitement des réclamations et de résolution expéditive des incidents; "),
                                    createVNode("li", null, " Veiller au respect des règles relatives à la protection des données à caractère personnel. ")
                                  ])
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "les activités et services numériques"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Les activités et services numériques s'exercent librement, dans le respect des dispositions légales et règlementaires applicables en République Démocratique du Congo. Ils sont soumis aux principes ci-après :")
                                ]),
                                createVNode("ul", { class: "tertiary-list" }, [
                                  createVNode("li", null, "Egalité"),
                                  createVNode("li", null, "Transparence"),
                                  createVNode("li", null, "Non-discrimination"),
                                  createVNode("li", null, "Libre concurrence"),
                                  createVNode("li", null, "Neutralité")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "mineurs"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Si vous êtes mineur dans le pays depuis lequel vous accédez à notre site, vous ne pouvez communiquer vos données personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous êtes parent(s) ou tuteur(s) et que vous consentiez à ce qu'un mineur accède sur ce site, vous acceptez les présentes règles de confidentialité concernant l'utilisation du site par le mineur ;")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "tiers"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et procéder à l'achat des articles). Vous saurez que vous êtes sur le site d'un tiers parce qu'il n'aura pas la même présentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura changé. Au moment de choisir un tiers, puis régulièrement ensuite, nous vérifions ses règles de confidentialité et de protection des données pour nous assurer qu'elles soient conformes aux nôtres.")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "la responsable de lútilisateur du site"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilité, et ce de plein droit à l'égard de tiers lors de la bonne exécution des obligations résultant du contrat conclu à distance, que ces obligations soient exécutables par elle-même ou par d'autres prestataires des services.")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "avis de modification des présentes règles"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Nous ne cessons d'améliorer le fonctionnement de notre site et d'y ajouter des fonctionnalités, ainsi que d'améliorer et d'élargir nos services actuels. En raison de ces modifications constantes et des changements dans la législation et la technologie, notre pratique en matière de données personnelles sera modifiée de temps en temps. Quand des modifications s'avéreront nécessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles données nous recueillons et quel usage nous en faisons")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "lois applicables"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Cette politique de confidentialité est conforme à l'ORDONNANCE LOI N° 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
                                ])
                              ])
                            ])
                          ])
                        ])
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
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "9",
                    class: "py-5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "" }, [
                        createVNode(_component_CoreTitle2, { title: "Politique de Confidentielité" }),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                            createVNode("span", null, "Dernière mise à jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode("div", {
                          class: "text-body-2",
                          style: { "font-weight": "450" }
                        }, [
                          createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale à la protection de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce électronique. Nous nous engageons à respecter votre vie privée et à sécuriser vos données conformément aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                        ])
                      ]),
                      createVNode("ul", { class: "mt-10 primary-list" }, [
                        createVNode("li", null, [
                          createVNode("div", { class: "title" }, [
                            createVNode("span", null, "Le but de cette politique de confidentialité ")
                          ]),
                          createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                            createVNode("p", null, " Notre site respecte votre vie privée, vos droits relatifs à l'achat effectué sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                            createVNode("p", null, " L'utilisation du Site est soumise à l'acceptation préalable de la présente politique de confidentialité (la « Politique »). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                            createVNode("p", null, " Ainsi, cette politique de confidentialité consiste aussi à informer les utilisateurs de notre site des données personnelles que nous recueillons ainsi que les informations suivantes, le cas échéant : ")
                          ]),
                          createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "les obligations"),
                              createVNode("div", null, [
                                createVNode("span", null, "Nous avons obligation de :"),
                                createVNode("ul", { class: "tertiary-list" }, [
                                  createVNode("li", null, " Rendre disponible à tout utilisateur les articles et services numériques ouverts ; "),
                                  createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de façon transparente ; "),
                                  createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fixées par l'Autorité de Régulation du Numérique ; "),
                                  createVNode("li", null, " Publier par tout moyen d'information de masse et sans délais, les prévisions d'interruption de services, notamment pour des raisons d'installation, de réparation ou de changement d'équipement ; "),
                                  createVNode("li", null, " Etablir un mécanisme efficace de traitement des réclamations et de résolution expéditive des incidents; "),
                                  createVNode("li", null, " Veiller au respect des règles relatives à la protection des données à caractère personnel. ")
                                ])
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "les activités et services numériques"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Les activités et services numériques s'exercent librement, dans le respect des dispositions légales et règlementaires applicables en République Démocratique du Congo. Ils sont soumis aux principes ci-après :")
                              ]),
                              createVNode("ul", { class: "tertiary-list" }, [
                                createVNode("li", null, "Egalité"),
                                createVNode("li", null, "Transparence"),
                                createVNode("li", null, "Non-discrimination"),
                                createVNode("li", null, "Libre concurrence"),
                                createVNode("li", null, "Neutralité")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "mineurs"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Si vous êtes mineur dans le pays depuis lequel vous accédez à notre site, vous ne pouvez communiquer vos données personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous êtes parent(s) ou tuteur(s) et que vous consentiez à ce qu'un mineur accède sur ce site, vous acceptez les présentes règles de confidentialité concernant l'utilisation du site par le mineur ;")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "tiers"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et procéder à l'achat des articles). Vous saurez que vous êtes sur le site d'un tiers parce qu'il n'aura pas la même présentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura changé. Au moment de choisir un tiers, puis régulièrement ensuite, nous vérifions ses règles de confidentialité et de protection des données pour nous assurer qu'elles soient conformes aux nôtres.")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "la responsable de lútilisateur du site"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilité, et ce de plein droit à l'égard de tiers lors de la bonne exécution des obligations résultant du contrat conclu à distance, que ces obligations soient exécutables par elle-même ou par d'autres prestataires des services.")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "avis de modification des présentes règles"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Nous ne cessons d'améliorer le fonctionnement de notre site et d'y ajouter des fonctionnalités, ainsi que d'améliorer et d'élargir nos services actuels. En raison de ces modifications constantes et des changements dans la législation et la technologie, notre pratique en matière de données personnelles sera modifiée de temps en temps. Quand des modifications s'avéreront nécessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles données nous recueillons et quel usage nous en faisons")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "lois applicables"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Cette politique de confidentialité est conforme à l'ORDONNANCE LOI N° 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
                              ])
                            ])
                          ])
                        ])
                      ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6afa51c1"]]);
export {
  privacyPolicy as default
};
//# sourceMappingURL=privacy-policy-pgN4T6Hz.js.map
