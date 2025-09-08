import { _ as __nuxt_component_0 } from './mid-screen-layout-b8tbDczG.mjs';
import { useSSRContext, withCtx, unref, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VDivider } from './VDivider-Ce8J4Sp3.mjs';
import './VContainer-jF5qmVp8.mjs';
import './tag-pIHjuosL.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'date-fns';
import 'date-fns/locale';
import './color-rZjm0Y7u.mjs';

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
      title: "Politique de Confidentielit\xE9"
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
                        _push4(ssrRenderComponent(_component_CoreTitle2, { title: "Politique de Confidentielit\xE9" }, null, _parent4, _scopeId3));
                        _push4(`<div class="mt-1" data-v-6afa51c1${_scopeId3}><div class="text-subtitle-2 text-disabled" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Derni\xE8re mise \xE0 jour: ${ssrInterpolate(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05")))}</span></div></div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2" style="${ssrRenderStyle({ "font-weight": "450" })}" data-v-6afa51c1${_scopeId3}><p data-v-6afa51c1${_scopeId3}> Chez Smartsell, nous accordons une importance primordiale \xE0 la protection de vos donn\xE9es personnelles. Notre politique de confidentialit\xE9 vise \xE0 vous informer sur la mani\xE8re dont nous collectons, utilisons et prot\xE9geons vos informations lorsque vous utilisez nos services de recherche d&#39;emploi et de commerce \xE9lectronique. Nous nous engageons \xE0 respecter votre vie priv\xE9e et \xE0 s\xE9curiser vos donn\xE9es conform\xE9ment aux normes les plus strictes. En utilisant les Services d&#39;Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: </p></div></div><ul class="mt-10 primary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}><div class="title" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Le but de cette politique de confidentialit\xE9 </span></div><div class="content text-body-2 mt-5 d-flex flex-column ga-3" data-v-6afa51c1${_scopeId3}><p data-v-6afa51c1${_scopeId3}> Notre site respecte votre vie priv\xE9e, vos droits relatifs \xE0 l&#39;achat effectu\xE9 sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. </p><p data-v-6afa51c1${_scopeId3}> L&#39;utilisation du Site est soumise \xE0 l&#39;acceptation pr\xE9alable de la pr\xE9sente politique de confidentialit\xE9 (la \xAB Politique \xBB). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l&#39;utilisation qui en est faite et les droits que vous pouvez exercer. </p><p data-v-6afa51c1${_scopeId3}> Ainsi, cette politique de confidentialit\xE9 consiste aussi \xE0 informer les utilisateurs de notre site des donn\xE9es personnelles que nous recueillons ainsi que les informations suivantes, le cas \xE9ch\xE9ant : </p></div><ul class="mt-4 text-body-2 secondary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>les obligations</b><div data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Nous avons obligation de :</span><ul class="tertiary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}> Rendre disponible \xE0 tout utilisateur les articles et services num\xE9riques ouverts ; </li><li data-v-6afa51c1${_scopeId3}> S&#39;assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de fa\xE7on transparente ; </li><li data-v-6afa51c1${_scopeId3}> Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fix\xE9es par l&#39;Autorit\xE9 de R\xE9gulation du Num\xE9rique ; </li><li data-v-6afa51c1${_scopeId3}> Publier par tout moyen d&#39;information de masse et sans d\xE9lais, les pr\xE9visions d&#39;interruption de services, notamment pour des raisons d&#39;installation, de r\xE9paration ou de changement d&#39;\xE9quipement ; </li><li data-v-6afa51c1${_scopeId3}> Etablir un m\xE9canisme efficace de traitement des r\xE9clamations et de r\xE9solution exp\xE9ditive des incidents; </li><li data-v-6afa51c1${_scopeId3}> Veiller au respect des r\xE8gles relatives \xE0 la protection des donn\xE9es \xE0 caract\xE8re personnel. </li></ul></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>les activit\xE9s et services num\xE9riques</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Les activit\xE9s et services num\xE9riques s&#39;exercent librement, dans le respect des dispositions l\xE9gales et r\xE8glementaires applicables en R\xE9publique D\xE9mocratique du Congo. Ils sont soumis aux principes ci-apr\xE8s :</span></div><ul class="tertiary-list" data-v-6afa51c1${_scopeId3}><li data-v-6afa51c1${_scopeId3}>Egalit\xE9</li><li data-v-6afa51c1${_scopeId3}>Transparence</li><li data-v-6afa51c1${_scopeId3}>Non-discrimination</li><li data-v-6afa51c1${_scopeId3}>Libre concurrence</li><li data-v-6afa51c1${_scopeId3}>Neutralit\xE9</li></ul></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>mineurs</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Si vous \xEAtes mineur dans le pays depuis lequel vous acc\xE9dez \xE0 notre site, vous ne pouvez communiquer vos donn\xE9es personnelles sur le site qu&#39;avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous \xEAtes parent(s) ou tuteur(s) et que vous consentiez \xE0 ce qu&#39;un mineur acc\xE8de sur ce site, vous acceptez les pr\xE9sentes r\xE8gles de confidentialit\xE9 concernant l&#39;utilisation du site par le mineur ;</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>tiers</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et proc\xE9der \xE0 l&#39;achat des articles). Vous saurez que vous \xEAtes sur le site d&#39;un tiers parce qu&#39;il n&#39;aura pas la m\xEAme pr\xE9sentation et que l&#39;adresse Internet dans la barre d&#39;adresse de votre navigateur aura chang\xE9. Au moment de choisir un tiers, puis r\xE9guli\xE8rement ensuite, nous v\xE9rifions ses r\xE8gles de confidentialit\xE9 et de protection des donn\xE9es pour nous assurer qu&#39;elles soient conformes aux n\xF4tres.</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>la responsable de l\xFAtilisateur du site</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Tout utilisateur de ce site engage sa propre responsabilit\xE9, et ce de plein droit \xE0 l&#39;\xE9gard de tiers lors de la bonne ex\xE9cution des obligations r\xE9sultant du contrat conclu \xE0 distance, que ces obligations soient ex\xE9cutables par elle-m\xEAme ou par d&#39;autres prestataires des services.</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>avis de modification des pr\xE9sentes r\xE8gles</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Nous ne cessons d&#39;am\xE9liorer le fonctionnement de notre site et d&#39;y ajouter des fonctionnalit\xE9s, ainsi que d&#39;am\xE9liorer et d&#39;\xE9largir nos services actuels. En raison de ces modifications constantes et des changements dans la l\xE9gislation et la technologie, notre pratique en mati\xE8re de donn\xE9es personnelles sera modifi\xE9e de temps en temps. Quand des modifications s&#39;av\xE9reront n\xE9cessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles donn\xE9es nous recueillons et quel usage nous en faisons</span></div></li><li data-v-6afa51c1${_scopeId3}><b data-v-6afa51c1${_scopeId3}>lois applicables</b><div class="" data-v-6afa51c1${_scopeId3}><span data-v-6afa51c1${_scopeId3}>Cette politique de confidentialit\xE9 est conforme \xE0 l&#39;ORDONNANCE LOI N\xB0 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, </span></div></li></ul></li></ul>`);
                      } else {
                        return [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_CoreTitle2, { title: "Politique de Confidentielit\xE9" }),
                            createVNode("div", { class: "mt-1" }, [
                              createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                                createVNode("span", null, "Derni\xE8re mise \xE0 jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                              ])
                            ]),
                            createVNode(VDivider, { class: "my-5" }),
                            createVNode("div", {
                              class: "text-body-2",
                              style: { "font-weight": "450" }
                            }, [
                              createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale \xE0 la protection de vos donn\xE9es personnelles. Notre politique de confidentialit\xE9 vise \xE0 vous informer sur la mani\xE8re dont nous collectons, utilisons et prot\xE9geons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce \xE9lectronique. Nous nous engageons \xE0 respecter votre vie priv\xE9e et \xE0 s\xE9curiser vos donn\xE9es conform\xE9ment aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                            ])
                          ]),
                          createVNode("ul", { class: "mt-10 primary-list" }, [
                            createVNode("li", null, [
                              createVNode("div", { class: "title" }, [
                                createVNode("span", null, "Le but de cette politique de confidentialit\xE9 ")
                              ]),
                              createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                                createVNode("p", null, " Notre site respecte votre vie priv\xE9e, vos droits relatifs \xE0 l'achat effectu\xE9 sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                                createVNode("p", null, " L'utilisation du Site est soumise \xE0 l'acceptation pr\xE9alable de la pr\xE9sente politique de confidentialit\xE9 (la \xAB Politique \xBB). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                                createVNode("p", null, " Ainsi, cette politique de confidentialit\xE9 consiste aussi \xE0 informer les utilisateurs de notre site des donn\xE9es personnelles que nous recueillons ainsi que les informations suivantes, le cas \xE9ch\xE9ant : ")
                              ]),
                              createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                                createVNode("li", null, [
                                  createVNode("b", null, "les obligations"),
                                  createVNode("div", null, [
                                    createVNode("span", null, "Nous avons obligation de :"),
                                    createVNode("ul", { class: "tertiary-list" }, [
                                      createVNode("li", null, " Rendre disponible \xE0 tout utilisateur les articles et services num\xE9riques ouverts ; "),
                                      createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de fa\xE7on transparente ; "),
                                      createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fix\xE9es par l'Autorit\xE9 de R\xE9gulation du Num\xE9rique ; "),
                                      createVNode("li", null, " Publier par tout moyen d'information de masse et sans d\xE9lais, les pr\xE9visions d'interruption de services, notamment pour des raisons d'installation, de r\xE9paration ou de changement d'\xE9quipement ; "),
                                      createVNode("li", null, " Etablir un m\xE9canisme efficace de traitement des r\xE9clamations et de r\xE9solution exp\xE9ditive des incidents; "),
                                      createVNode("li", null, " Veiller au respect des r\xE8gles relatives \xE0 la protection des donn\xE9es \xE0 caract\xE8re personnel. ")
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "les activit\xE9s et services num\xE9riques"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Les activit\xE9s et services num\xE9riques s'exercent librement, dans le respect des dispositions l\xE9gales et r\xE8glementaires applicables en R\xE9publique D\xE9mocratique du Congo. Ils sont soumis aux principes ci-apr\xE8s :")
                                  ]),
                                  createVNode("ul", { class: "tertiary-list" }, [
                                    createVNode("li", null, "Egalit\xE9"),
                                    createVNode("li", null, "Transparence"),
                                    createVNode("li", null, "Non-discrimination"),
                                    createVNode("li", null, "Libre concurrence"),
                                    createVNode("li", null, "Neutralit\xE9")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "mineurs"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Si vous \xEAtes mineur dans le pays depuis lequel vous acc\xE9dez \xE0 notre site, vous ne pouvez communiquer vos donn\xE9es personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous \xEAtes parent(s) ou tuteur(s) et que vous consentiez \xE0 ce qu'un mineur acc\xE8de sur ce site, vous acceptez les pr\xE9sentes r\xE8gles de confidentialit\xE9 concernant l'utilisation du site par le mineur ;")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "tiers"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et proc\xE9der \xE0 l'achat des articles). Vous saurez que vous \xEAtes sur le site d'un tiers parce qu'il n'aura pas la m\xEAme pr\xE9sentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura chang\xE9. Au moment de choisir un tiers, puis r\xE9guli\xE8rement ensuite, nous v\xE9rifions ses r\xE8gles de confidentialit\xE9 et de protection des donn\xE9es pour nous assurer qu'elles soient conformes aux n\xF4tres.")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "la responsable de l\xFAtilisateur du site"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilit\xE9, et ce de plein droit \xE0 l'\xE9gard de tiers lors de la bonne ex\xE9cution des obligations r\xE9sultant du contrat conclu \xE0 distance, que ces obligations soient ex\xE9cutables par elle-m\xEAme ou par d'autres prestataires des services.")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "avis de modification des pr\xE9sentes r\xE8gles"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Nous ne cessons d'am\xE9liorer le fonctionnement de notre site et d'y ajouter des fonctionnalit\xE9s, ainsi que d'am\xE9liorer et d'\xE9largir nos services actuels. En raison de ces modifications constantes et des changements dans la l\xE9gislation et la technologie, notre pratique en mati\xE8re de donn\xE9es personnelles sera modifi\xE9e de temps en temps. Quand des modifications s'av\xE9reront n\xE9cessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles donn\xE9es nous recueillons et quel usage nous en faisons")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("b", null, "lois applicables"),
                                  createVNode("div", { class: "" }, [
                                    createVNode("span", null, "Cette politique de confidentialit\xE9 est conforme \xE0 l'ORDONNANCE LOI N\xB0 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
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
                          createVNode(_component_CoreTitle2, { title: "Politique de Confidentielit\xE9" }),
                          createVNode("div", { class: "mt-1" }, [
                            createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                              createVNode("span", null, "Derni\xE8re mise \xE0 jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                            ])
                          ]),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("div", {
                            class: "text-body-2",
                            style: { "font-weight": "450" }
                          }, [
                            createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale \xE0 la protection de vos donn\xE9es personnelles. Notre politique de confidentialit\xE9 vise \xE0 vous informer sur la mani\xE8re dont nous collectons, utilisons et prot\xE9geons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce \xE9lectronique. Nous nous engageons \xE0 respecter votre vie priv\xE9e et \xE0 s\xE9curiser vos donn\xE9es conform\xE9ment aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                          ])
                        ]),
                        createVNode("ul", { class: "mt-10 primary-list" }, [
                          createVNode("li", null, [
                            createVNode("div", { class: "title" }, [
                              createVNode("span", null, "Le but de cette politique de confidentialit\xE9 ")
                            ]),
                            createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                              createVNode("p", null, " Notre site respecte votre vie priv\xE9e, vos droits relatifs \xE0 l'achat effectu\xE9 sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                              createVNode("p", null, " L'utilisation du Site est soumise \xE0 l'acceptation pr\xE9alable de la pr\xE9sente politique de confidentialit\xE9 (la \xAB Politique \xBB). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                              createVNode("p", null, " Ainsi, cette politique de confidentialit\xE9 consiste aussi \xE0 informer les utilisateurs de notre site des donn\xE9es personnelles que nous recueillons ainsi que les informations suivantes, le cas \xE9ch\xE9ant : ")
                            ]),
                            createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                              createVNode("li", null, [
                                createVNode("b", null, "les obligations"),
                                createVNode("div", null, [
                                  createVNode("span", null, "Nous avons obligation de :"),
                                  createVNode("ul", { class: "tertiary-list" }, [
                                    createVNode("li", null, " Rendre disponible \xE0 tout utilisateur les articles et services num\xE9riques ouverts ; "),
                                    createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de fa\xE7on transparente ; "),
                                    createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fix\xE9es par l'Autorit\xE9 de R\xE9gulation du Num\xE9rique ; "),
                                    createVNode("li", null, " Publier par tout moyen d'information de masse et sans d\xE9lais, les pr\xE9visions d'interruption de services, notamment pour des raisons d'installation, de r\xE9paration ou de changement d'\xE9quipement ; "),
                                    createVNode("li", null, " Etablir un m\xE9canisme efficace de traitement des r\xE9clamations et de r\xE9solution exp\xE9ditive des incidents; "),
                                    createVNode("li", null, " Veiller au respect des r\xE8gles relatives \xE0 la protection des donn\xE9es \xE0 caract\xE8re personnel. ")
                                  ])
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "les activit\xE9s et services num\xE9riques"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Les activit\xE9s et services num\xE9riques s'exercent librement, dans le respect des dispositions l\xE9gales et r\xE8glementaires applicables en R\xE9publique D\xE9mocratique du Congo. Ils sont soumis aux principes ci-apr\xE8s :")
                                ]),
                                createVNode("ul", { class: "tertiary-list" }, [
                                  createVNode("li", null, "Egalit\xE9"),
                                  createVNode("li", null, "Transparence"),
                                  createVNode("li", null, "Non-discrimination"),
                                  createVNode("li", null, "Libre concurrence"),
                                  createVNode("li", null, "Neutralit\xE9")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "mineurs"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Si vous \xEAtes mineur dans le pays depuis lequel vous acc\xE9dez \xE0 notre site, vous ne pouvez communiquer vos donn\xE9es personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous \xEAtes parent(s) ou tuteur(s) et que vous consentiez \xE0 ce qu'un mineur acc\xE8de sur ce site, vous acceptez les pr\xE9sentes r\xE8gles de confidentialit\xE9 concernant l'utilisation du site par le mineur ;")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "tiers"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et proc\xE9der \xE0 l'achat des articles). Vous saurez que vous \xEAtes sur le site d'un tiers parce qu'il n'aura pas la m\xEAme pr\xE9sentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura chang\xE9. Au moment de choisir un tiers, puis r\xE9guli\xE8rement ensuite, nous v\xE9rifions ses r\xE8gles de confidentialit\xE9 et de protection des donn\xE9es pour nous assurer qu'elles soient conformes aux n\xF4tres.")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "la responsable de l\xFAtilisateur du site"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilit\xE9, et ce de plein droit \xE0 l'\xE9gard de tiers lors de la bonne ex\xE9cution des obligations r\xE9sultant du contrat conclu \xE0 distance, que ces obligations soient ex\xE9cutables par elle-m\xEAme ou par d'autres prestataires des services.")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "avis de modification des pr\xE9sentes r\xE8gles"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Nous ne cessons d'am\xE9liorer le fonctionnement de notre site et d'y ajouter des fonctionnalit\xE9s, ainsi que d'am\xE9liorer et d'\xE9largir nos services actuels. En raison de ces modifications constantes et des changements dans la l\xE9gislation et la technologie, notre pratique en mati\xE8re de donn\xE9es personnelles sera modifi\xE9e de temps en temps. Quand des modifications s'av\xE9reront n\xE9cessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles donn\xE9es nous recueillons et quel usage nous en faisons")
                                ])
                              ]),
                              createVNode("li", null, [
                                createVNode("b", null, "lois applicables"),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Cette politique de confidentialit\xE9 est conforme \xE0 l'ORDONNANCE LOI N\xB0 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
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
                        createVNode(_component_CoreTitle2, { title: "Politique de Confidentielit\xE9" }),
                        createVNode("div", { class: "mt-1" }, [
                          createVNode("div", { class: "text-subtitle-2 text-disabled" }, [
                            createVNode("span", null, "Derni\xE8re mise \xE0 jour: " + toDisplayString(unref(dateFormat_Month)(/* @__PURE__ */ new Date("2024-07-05"))), 1)
                          ])
                        ]),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode("div", {
                          class: "text-body-2",
                          style: { "font-weight": "450" }
                        }, [
                          createVNode("p", null, " Chez Smartsell, nous accordons une importance primordiale \xE0 la protection de vos donn\xE9es personnelles. Notre politique de confidentialit\xE9 vise \xE0 vous informer sur la mani\xE8re dont nous collectons, utilisons et prot\xE9geons vos informations lorsque vous utilisez nos services de recherche d'emploi et de commerce \xE9lectronique. Nous nous engageons \xE0 respecter votre vie priv\xE9e et \xE0 s\xE9curiser vos donn\xE9es conform\xE9ment aux normes les plus strictes. En utilisant les Services d'Smartsell, vous acceptez, en votre nom et au nom de toute autre personne utilisant un service sous votre compte, les conditions suivantes: ")
                        ])
                      ]),
                      createVNode("ul", { class: "mt-10 primary-list" }, [
                        createVNode("li", null, [
                          createVNode("div", { class: "title" }, [
                            createVNode("span", null, "Le but de cette politique de confidentialit\xE9 ")
                          ]),
                          createVNode("div", { class: "content text-body-2 mt-5 d-flex flex-column ga-3" }, [
                            createVNode("p", null, " Notre site respecte votre vie priv\xE9e, vos droits relatifs \xE0 l'achat effectu\xE9 sur certains articles ainsi que toutes les informations qui peuvent permettre de vous identifier directement ou indirectement. "),
                            createVNode("p", null, " L'utilisation du Site est soumise \xE0 l'acceptation pr\xE9alable de la pr\xE9sente politique de confidentialit\xE9 (la \xAB Politique \xBB). La Politique a pour but de vous expliquer quels articles ou objets nous collectons, l'utilisation qui en est faite et les droits que vous pouvez exercer. "),
                            createVNode("p", null, " Ainsi, cette politique de confidentialit\xE9 consiste aussi \xE0 informer les utilisateurs de notre site des donn\xE9es personnelles que nous recueillons ainsi que les informations suivantes, le cas \xE9ch\xE9ant : ")
                          ]),
                          createVNode("ul", { class: "mt-4 text-body-2 secondary-list" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "les obligations"),
                              createVNode("div", null, [
                                createVNode("span", null, "Nous avons obligation de :"),
                                createVNode("ul", { class: "tertiary-list" }, [
                                  createVNode("li", null, " Rendre disponible \xE0 tout utilisateur les articles et services num\xE9riques ouverts ; "),
                                  createVNode("li", null, " S'assurer que les frais, les tarifs, les pratiques et les classifications sont justes, raisonnables et disponibles de fa\xE7on transparente ; "),
                                  createVNode("li", null, " Fournir des services efficaces, fiables et conformes aux normes reconnues au plan national, international ou fix\xE9es par l'Autorit\xE9 de R\xE9gulation du Num\xE9rique ; "),
                                  createVNode("li", null, " Publier par tout moyen d'information de masse et sans d\xE9lais, les pr\xE9visions d'interruption de services, notamment pour des raisons d'installation, de r\xE9paration ou de changement d'\xE9quipement ; "),
                                  createVNode("li", null, " Etablir un m\xE9canisme efficace de traitement des r\xE9clamations et de r\xE9solution exp\xE9ditive des incidents; "),
                                  createVNode("li", null, " Veiller au respect des r\xE8gles relatives \xE0 la protection des donn\xE9es \xE0 caract\xE8re personnel. ")
                                ])
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "les activit\xE9s et services num\xE9riques"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Les activit\xE9s et services num\xE9riques s'exercent librement, dans le respect des dispositions l\xE9gales et r\xE8glementaires applicables en R\xE9publique D\xE9mocratique du Congo. Ils sont soumis aux principes ci-apr\xE8s :")
                              ]),
                              createVNode("ul", { class: "tertiary-list" }, [
                                createVNode("li", null, "Egalit\xE9"),
                                createVNode("li", null, "Transparence"),
                                createVNode("li", null, "Non-discrimination"),
                                createVNode("li", null, "Libre concurrence"),
                                createVNode("li", null, "Neutralit\xE9")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "mineurs"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Si vous \xEAtes mineur dans le pays depuis lequel vous acc\xE9dez \xE0 notre site, vous ne pouvez communiquer vos donn\xE9es personnelles sur le site qu'avec le consentement de votre (vos) parent(s) ou tuteur(s). Si vous \xEAtes parent(s) ou tuteur(s) et que vous consentiez \xE0 ce qu'un mineur acc\xE8de sur ce site, vous acceptez les pr\xE9sentes r\xE8gles de confidentialit\xE9 concernant l'utilisation du site par le mineur ;")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "tiers"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Ce site contient parfois des liens vers des tiers dont nous employons les services (par exemple pour remplir des formulaires en ligne et proc\xE9der \xE0 l'achat des articles). Vous saurez que vous \xEAtes sur le site d'un tiers parce qu'il n'aura pas la m\xEAme pr\xE9sentation et que l'adresse Internet dans la barre d'adresse de votre navigateur aura chang\xE9. Au moment de choisir un tiers, puis r\xE9guli\xE8rement ensuite, nous v\xE9rifions ses r\xE8gles de confidentialit\xE9 et de protection des donn\xE9es pour nous assurer qu'elles soient conformes aux n\xF4tres.")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "la responsable de l\xFAtilisateur du site"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Tout utilisateur de ce site engage sa propre responsabilit\xE9, et ce de plein droit \xE0 l'\xE9gard de tiers lors de la bonne ex\xE9cution des obligations r\xE9sultant du contrat conclu \xE0 distance, que ces obligations soient ex\xE9cutables par elle-m\xEAme ou par d'autres prestataires des services.")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "avis de modification des pr\xE9sentes r\xE8gles"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Nous ne cessons d'am\xE9liorer le fonctionnement de notre site et d'y ajouter des fonctionnalit\xE9s, ainsi que d'am\xE9liorer et d'\xE9largir nos services actuels. En raison de ces modifications constantes et des changements dans la l\xE9gislation et la technologie, notre pratique en mati\xE8re de donn\xE9es personnelles sera modifi\xE9e de temps en temps. Quand des modifications s'av\xE9reront n\xE9cessaires, nous les publierons sur cette page pour que vous sachiez toujours quelles donn\xE9es nous recueillons et quel usage nous en faisons")
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "lois applicables"),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Cette politique de confidentialit\xE9 est conforme \xE0 l'ORDONNANCE LOI N\xB0 23/010 DU 13 MARS 2023 PORTANT CODE DU NUMERIQUE, ")
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

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-pgN4T6Hz.mjs.map
