webpackJsonp([0],{EYAs:function(t,e){},Ehq3:function(t,e){},IUbp:function(t,e){},KV8y:function(t,e){},"L/iM":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=(s("KV8y"),s("btaI"),s("L/iM"),s("Ehq3"),s("svqu"),{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"mainMenu"}},[s("div",{staticClass:"menu container"},[s("div",{staticClass:"menu__nav col-md-12 d-flex justify-content-between"},[s("nav",{staticClass:"d-flex col-md-4 align-items-center"},[s("router-link",{staticClass:"menu__route",attrs:{to:{name:"carriers"},tag:"a"}},[t._v("Перевозчикам")]),t._v(" "),s("router-link",{staticClass:"menu__route",attrs:{to:{name:"clients"},tag:"a"}},[t._v("Пользователям")]),t._v(" "),s("router-link",{staticClass:"menu__route",attrs:{to:{name:"premium"},tag:"a"}},[t._v("Премиум")])],1),t._v(" "),s("router-link",{staticClass:"logo",attrs:{to:{name:"homepage"},tag:"a"}}),t._v(" "),s("div",{staticClass:"col-md-4 d-flex align-items-center justify-content-end"},[s("router-link",{staticClass:"menu__actions menu__sing-in",attrs:{to:{name:"modallogin"},tag:"a"}},[t._v("Вход")]),t._v(" "),s("router-link",{staticClass:"menu__actions button button--wapasha button--round-s d-flex align-items-center justify-content-center",attrs:{to:{name:"modalregistration"},tag:"a"}},[t._v("Регистрация")]),t._v(" "),t._m(0)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu__change-lang menu__actions"},[e("div",{staticClass:"select"},[e("input",{staticClass:"d-none",attrs:{id:"rus",type:"radio",name:"action",value:"rus",checked:""}}),this._v(" "),e("label",{staticClass:"rus lang-logo",attrs:{for:"rus"}}),this._v(" "),e("input",{staticClass:"d-none",attrs:{id:"en",type:"radio",name:"action",value:"en"}}),this._v(" "),e("label",{staticClass:"en lang-logo",attrs:{for:"en"}})])])}]}),i=s("VU/8")({name:"mainmenu"},n,!1,null,null,null).exports,l={name:"App",components:{MainMenu:i}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var r=s("VU/8")(l,o,!1,function(t){s("x96W")},null,null).exports,c=s("/ocq"),m=(s("xr8D"),{name:"homepage",components:{MainMenu:i}}),_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backgorund"},[s("MainMenu"),t._v(" "),s("div",{staticClass:"home-page d-flex flex-column justify-content-between",attrs:{id:"homepage"}},[s("div",{staticClass:"preview d-flex flex-column align-items-center justify-content-center"},[s("div",{staticClass:"ship"}),t._v(" "),s("h1",{staticClass:"title"},[t._v("\n      Быстро. Просто. Удобно.\n    ")]),t._v(" "),s("h2",{staticClass:"sub-title"},[t._v("Ищем маршрут до двери за несколько секунд. И это бесплатно.")]),t._v(" "),s("div",{staticClass:"preview__wave"}),t._v(" "),s("router-link",{staticClass:"common-button",attrs:{to:{name:"shipmentsearch"},tag:"a"}},[t._v("Считаем!")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"home-page__waves"})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom-row container d-flex justify-content-between align-items-center"},[e("div",{staticClass:"home-page__copy-right"},[this._v("\n        2018 Loggie\n      ")]),this._v(" "),e("div",{staticClass:"home-page__social"},[e("a",{staticClass:"fb social-icon",attrs:{href:"#"}}),this._v(" "),e("a",{staticClass:"twitter social-icon",attrs:{href:"#"}}),this._v(" "),e("a",{staticClass:"vk social-icon",attrs:{href:"#"}})])])}]},d=s("VU/8")(m,_,!1,null,null,null).exports,u=(s("hhkj"),{name:"modal",props:{from:String}}),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[t._t("modal-title")],2),t._v(" "),s("div",{staticClass:"modal-body"},[t._t("modal-add-description"),t._v(" "),s("div",{staticClass:"modal-form"},[t._t("form")],2)],2)])]),t._v(" "),s("router-link",{staticClass:"modal-close",attrs:{to:{name:t.from},tag:"div"}},[s("div",{staticClass:"text"},[t._v("Закрыть")]),t._v(" "),s("div",{staticClass:"modal-button"},[s("span",{staticClass:"cross first"}),t._v(" "),s("span",{staticClass:"cross second"})])])],1)},staticRenderFns:[]},p=s("VU/8")(u,v,!1,null,null,null).exports,h={name:"CombinedInput",props:{placeholder:String,type:String,labelText:String,name:String}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input"},[s("label",{attrs:{for:t.name}},[s("div",{staticClass:"label-text"},[t._v(t._s(t.labelText))]),t._v(" "),s("input",{attrs:{type:t.type,id:t.name,placeholder:t.placeholder,autocomplete:"off"}}),t._v(" "),s("span",{staticClass:"active"})])])},staticRenderFns:[]};var C=s("VU/8")(h,f,!1,function(t){s("IUbp")},"data-v-6a18a4f2",null).exports,b={name:"modalrecovery",data:function(){return{from:""}},beforeRouteEnter:function(t,e,s){s(function(t){t.$data.from=null===e.name||["modallogin","modalregistration"].includes(e.name)?"homepage":e.name})},components:{ModalTemplate:p,CombinedInput:C}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ModalTemplate",{attrs:{from:t.from}},[s("h5",{staticClass:"modal-title",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v("Восстановление пароля")]),t._v(" "),s("div",{staticClass:"modal-add-description",attrs:{slot:"modal-add-description"},slot:"modal-add-description"},[t._v("\r\n        Забыли пароль? Напишите Ваш Email и мы вышлем инструкцию по восстановлению на указанный адрес\r\n    ")]),t._v(" "),s("form",{attrs:{slot:"form"},slot:"form"},[s("div",{staticClass:"controls-container"},[s("CombinedInput",{attrs:{type:"text",labelText:"Email",name:"email",placeholder:"VasyaPupkin@gmail.com"}})],1),t._v(" "),s("div",{staticClass:"back"},[s("router-link",{attrs:{to:{name:"modallogin"},tag:"a"}},[t._v("Вернуться ко входу в аккаунт")])],1),t._v(" "),s("span",{staticClass:"common-button submit"},[t._v("Восстановить")])])])},staticRenderFns:[]},x=s("VU/8")(b,g,!1,null,null,null).exports,y={name:"modalregistration",data:function(){return{from:""}},beforeRouteEnter:function(t,e,s){s(function(t){t.$data.from=null===e.name||["modalrecovery","modallogin"].includes(e.name)?"homepage":e.name})},components:{ModalTemplate:p,CombinedInput:C}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ModalTemplate",{attrs:{from:t.from}},[s("h5",{staticClass:"modal-title",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v("Новый аккаунт")]),t._v(" "),s("form",{attrs:{slot:"form"},slot:"form"},[s("div",{staticClass:"controls-container"},[s("CombinedInput",{attrs:{type:"text",labelText:"Логин",name:"login",placeholder:"Wadduphey"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Email",name:"email",placeholder:"VasyaPupkin@gmail.com"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Пароль",name:"password",placeholder:"•••••••••••••••••"}})],1),t._v(" "),s("p",{staticClass:"modal-terms"},[t._v("* Нажимая «Создать» Вы соглашаетесь с условиями пользовательского соглашения")]),t._v(" "),s("span",{staticClass:"common-button submit"},[t._v("Создать")])])])},staticRenderFns:[]},w=s("VU/8")(y,k,!1,null,null,null).exports,M={name:"modallogin",data:function(){return{from:""}},beforeRouteEnter:function(t,e,s){s(function(t){t.$data.from=null===e.name||["modalrecovery","modalregistration"].includes(e.name)?"homepage":e.name})},components:{ModalTemplate:p,CombinedInput:C}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ModalTemplate",{attrs:{from:t.from}},[s("h5",{staticClass:"modal-title",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v("Вход в аккаунт")]),t._v(" "),s("form",{attrs:{slot:"form"},slot:"form"},[s("div",{staticClass:"controls-container"},[s("CombinedInput",{attrs:{type:"text",labelText:"Логин",name:"login",placeholder:"Wadduphey"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Пароль",name:"password",placeholder:"•••••••••••••••••"}})],1),t._v(" "),s("div",{staticClass:"modal-controls"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox",name:"remember"}}),t._v(" "),s("span",{staticClass:"checkbox__checker"}),t._v(" "),s("span",{staticClass:"text"},[t._v("Запомнить")])]),t._v(" "),s("router-link",{staticClass:"recovery",attrs:{to:{name:"modalrecovery"},tag:"a"}},[t._v("Восстановление пароля")])],1),t._v(" "),s("div",{staticClass:"buttons-container"},[s("span",{staticClass:"common-button submit"},[t._v("Создать")]),t._v(" "),s("router-link",{staticClass:"common-button-white submit",attrs:{to:{name:"modalregistration"},tag:"button"}},[t._v("Регистрация")])],1)])])},staticRenderFns:[]},I=s("VU/8")(M,E,!1,null,null,null).exports,T=(s("mOMo"),{name:"shipmentresult",components:{MainMenu:i}}),V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"backgorund"},[e("MainMenu"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"shipmentresult"}},[s("div",{staticClass:"shipment-result container d-flex flex-column align-items-center"},[s("h1",{staticClass:"title"},[t._v("\n      Маршруты\n    ")]),t._v(" "),s("h2",{staticClass:"sub-title"},[t._v("\n      Мы отобрали для вас самые подходящие варианты по результатам поиска\n    ")]),t._v(" "),s("div",{staticClass:"shipment-result__info col-12"},[s("div",{staticClass:"shipment-result__info-top col-10"},[s("div",{staticClass:"d-flex align-items-stretch position-relative"},[s("div",{staticClass:"shipment-result__col shipment-result__col_big col-6"},[s("div",{staticClass:"shipment-result__row d-flex"},[s("h3",{staticClass:"shipment-result__title"},[t._v("\n                Shanghai — Vladivostok:\n              ")]),t._v(" "),s("p",{staticClass:"shipment-result__desc d-flex"},[t._v("\n                680$ (0% НДС), Фрахт, 6-10 дней\n              ")])]),t._v(" "),s("div",{staticClass:"shipment-result__row d-flex"},[s("h3",{staticClass:"shipment-result__title"},[t._v("\n                Vladivostok — Novosibirsk:\n              ")]),t._v(" "),s("p",{staticClass:"shipment-result__desc"},[t._v("\n                75.000 Р. (18% НДС), Ж.Д, 14-17 дней\n              ")])]),t._v(" "),s("div",{staticClass:"shipment-result__row d-flex"},[s("h3",{staticClass:"shipment-result__title"},[t._v("\n                Срок выдачи порожнего контейнера:\n              ")]),t._v(" "),s("p",{staticClass:"shipment-result__desc"},[t._v("\n                14 дней\n              ")])])]),t._v(" "),s("div",{staticClass:"shipment-result__col col-3 shipment-result__col_little d-flex flex-wrap align-content-center justify-content-center"},[s("h3",{staticClass:"shipment-result__total"},[t._v("Итого:")]),t._v(" "),s("p",{staticClass:"shipment-result__total-count"},[t._v("143 000 Р")]),t._v(" "),s("span",{staticClass:"shipment-result__last-date"},[t._v("Актуально до 25.02.18")])]),t._v(" "),s("div",{staticClass:"shipment-result__col col-3 shipment-result__col_middle"},[s("div",{staticClass:"receive-container"},[t._v("Выдача контейнера")]),t._v(" "),s("div",{staticClass:"receive-logo maersk"})]),t._v(" "),s("div",{staticClass:"shipment-result__waves"})])]),t._v(" "),s("div",{staticClass:"shipment-result__info-big-row d-flex align-items-center justify-content-center"},[s("div",{staticClass:"shipment-result__info-options"},[s("h2",{staticClass:"shipment-result__info-options-title title-left"},[t._v("Ещё варианты")]),t._v(" "),s("div",{staticClass:"shipment-result__info-options-circles circles-left"},[s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_big"}),t._v(" "),s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_middle"}),t._v(" "),s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_small"})])]),t._v(" "),s("div",{staticClass:"shipment-result__info-top_width col-10"},[s("div",{staticClass:"shipment-result__info-bottom d-flex align-items-center justify-content-between"},[s("div",{staticClass:"shipment-result__city"},[s("div",{staticClass:"shipment-result__city-name"},[t._v("Shanghai, CN")]),t._v(" "),s("div",{staticClass:"shipment-result__transport ship-img"})]),t._v(" "),s("div",{staticClass:"shipment-result__city"},[s("div",{staticClass:"shipment-result__city-name"},[t._v("Vladivostok, RU")]),t._v(" "),s("div",{staticClass:"shipment-result__transport car-img"})]),t._v(" "),s("div",{staticClass:"shipment-result__city"},[s("div",{staticClass:"shipment-result__city-name"},[t._v("Novosibirsk, RU")]),t._v(" "),s("div",{staticClass:"shipment-result__transport train-img"})])])]),t._v(" "),s("div",{staticClass:"shipment-result__info-options"},[s("div",{staticClass:"shipment-result__info-options-circles circles-right"},[s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_big"}),t._v(" "),s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_middle"}),t._v(" "),s("div",{staticClass:"info-options-circle shipment-result__info-options-circles_small"})]),t._v(" "),s("h2",{staticClass:"shipment-result__info-options-title title-right"},[t._v("Новый поиск")])])])])])])}]},$=s("VU/8")(T,V,!1,null,null,null).exports,R=(s("EYAs"),{name:"shipmentsearch",data:function(){return{from:""}},components:{MainMenu:i,CombinedInput:C}}),j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backgorund"},[s("MainMenu"),t._v(" "),s("div",{attrs:{id:"shipmentsearch"}},[s("div",{staticClass:"shipment-search container d-flex align-items-center justify-content-between flex-column"},[s("h1",{staticClass:"title"},[t._v("Считаем")]),t._v(" "),s("p",{staticClass:"sub-title"},[t._v("Это очень просто — всего лишь заполните поля ниже")]),t._v(" "),s("form",{staticClass:"shipment-search__form d-flex flex-column align-items-center justify-content-center",attrs:{slot:"form"},slot:"form"},[s("div",{staticClass:"controls-container"},[s("CombinedInput",{attrs:{type:"text",labelText:"Город: Откуда",name:"cityFrom",placeholder:"Шанхай, Китай"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Город: Куда",name:"cityTo",placeholder:"Владивосток, Россия"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Контейнер",name:"container",placeholder:"40ft"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Условия Поставки",name:"conditions",placeholder:"CIF"}}),t._v(" "),s("CombinedInput",{attrs:{type:"text",labelText:"Прибытие",name:"arrival",placeholder:"До склада"}})],1),t._v(" "),s("router-link",{staticClass:"common-button shipment-result__link",attrs:{to:{name:"shipmentresult"},tag:"a"}},[t._v("Посчитать")])],1)])])],1)},staticRenderFns:[]},U=s("VU/8")(R,j,!1,null,null,null).exports;a.a.use(c.a);var F=new c.a({mode:"history",routes:[{name:"homepage",path:"/",component:d},{name:"modalregistration",path:"/registration",component:w},{name:"modalrecovery",path:"/recovery",component:x},{name:"modallogin",path:"/login",component:I},{name:"shipmentresult",path:"/shipmentresult",component:$},{name:"shipmentsearch",path:"/shipmentsearch",component:U},{name:"carriers",path:"/",component:d},{name:"clients",path:"/",component:d},{name:"premium",path:"/",component:d}],scrollBehavior:function(t,e,s){return{x:0,y:0}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:F,components:{App:r},template:"<App/>"})},btaI:function(t,e){},hhkj:function(t,e){},mOMo:function(t,e){},svqu:function(t,e){},x96W:function(t,e){},xr8D:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.423292627109d114d7f1.js.map