"use strict";var __extends=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),__awaiter=this&&this.__awaiter||function(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d["throw"](a))}catch(b){f(b)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})},__generator=this&&this.__generator||function(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,f&&(g=f[2&c[0]?"return":c[0]?"throw":"next"])&&!(g=g.call(f,c[1])).done)return g;switch(f=0,g&&(c=[0,g.value]),c[0]){case 0:case 1:g=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,f=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(g=i.trys,!(g=g.length>0&&g[g.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!g||c[1]>g[0]&&c[1]<g[3])){i.label=c[1];break}if(6===c[0]&&i.label<g[1]){i.label=g[1],g=c;break}if(g&&i.label<g[2]){i.label=g[2],i.ops.push(c);break}g[2]&&i.ops.pop(),i.trys.pop();continue}c=b.call(a,i)}catch(d){c=[6,d],f=0}finally{e=g=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e,f,g,h,i={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return h={next:c(0),"throw":c(1),"return":c(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},SITE_SETTINGS_MODULE_ID="SITE_SETTINGS",SiteSettingsModule=function(a){function b(){var c=null!==a&&a.apply(this,arguments)||this;return c.showToast=function(){c.wasInRolesPage=b.inRolesPage();var a={timeout:window.BusinessManagerAPI.ToastTimeout.NONE,message:c.i18n.site_in_transfer,biName:"transfer_site.in_progress",type:window.BusinessManagerAPI.ToastType.WARNING,scope:window.BusinessManagerAPI.ToastScope.DASHBOARD};b.inRolesPage()||(a.action={uiType:window.BusinessManagerAPI.ToastActionUiType.BUTTON,text:c.i18n.view_status,navigationTarget:{navigateToConfig:{pageComponentId:window.BusinessManagerAPI.PageComponentId.SiteSettings,contextData:{appState:"authorization"}}}}),c.removeToast=window.BusinessManagerAPI.showToast(a).remove},c.isOwner=function(a){return a?a.split(",").indexOf("owner")>-1:!1},c}return __extends(b,a),b.prototype.init=function(a){var c=a.metaSiteId,d=a.config,e=a.locale,f=a.liveSite,g=a.userRole;return __awaiter(this,void 0,void 0,function(){var a,h,i,j=this;return __generator(this,function(k){switch(k.label){case 0:return window.ModuleRegistry.registeredMethods["businessManager.showToast"]?(a=window.BusinessManagerAPI.PageComponentId,window.Sentry&&window.BusinessManagerAPI.registerPageComponentMonitors(a.SiteSettings,{sentryClient:new window.Sentry.BrowserClient({dsn:"https://e866a8ec081144a5a2b9b3bd6561479a@sentry.wixpress.com/214"})}),f&&this.isOwner(g)?[4,window.axios.get("/_api/sites-list/sites/"+c+"/isInTransfer")]:[3,3]):[2];case 1:return(h=k.sent().data.isInTransfer)?(i=this,[4,window.axios.get(d.topology.staticsUrl+"locale/messages_"+e+".json")]):[3,3];case 2:i.i18n=k.sent().data,window.ModuleRegistry.addListener("businessManager.onNavigationCompleted",function(){var a=b.inRolesPage();(j.wasInRolesPage&&!a||!j.wasInRolesPage&&a)&&(j.removeToast&&j.removeToast(),j.showToast())}),this.showToast(),k.label=3;case 3:return[2]}})})},b}(window.BusinessManagerAPI.BusinessManagerModule);SiteSettingsModule.inRolesPage=function(){return!!window.location.href.match(/manage-website\/authorization/)||!!window.location.href.match(/settings\/authorization/)},window.BusinessManagerAPI.registerModule(SITE_SETTINGS_MODULE_ID,SiteSettingsModule);var __extends=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();window.AngularLazyComponent=AngularLazyComponent||{},window.ModuleRegistry=ModuleRegistry||{};var mockNeededExperiments=function(){return{"specs.wos.HackSEOToggle":"false","specs.wos.PremiumTabsInSiteSettings":"false","specs.wos.UnpublishInSiteSettings":"true"}},getMetaSite=function(a){return window.axios.get("/_api/wix-dashboard-ng-webapp/metaSite/"+a)["catch"](function(a){window.Sentry&&window.Sentry.captureException(a)})},getExperiments=function(){return window.axios.get("/_api/wix-laboratory-server/laboratory/conductAllInScope?scope=business-manager")},SiteSettingsComponent=function(a){function b(c){var d=a.call(this,c,{files:b.getFiles(c),module:"siteSettingsApp",component:"site-settings-business-manager",prepare:function(){return b.prepare(c)}})||this;return getExperiments().then(function(a){var b=a.data;window.SiteSettingsStatics_Experiments=b}),d}return __extends(b,a),b.prefetch=function(a){return b.getFiles(a)},b.prepare=function(a){return Promise.all([getMetaSite(a.metaSiteId),mockNeededExperiments()]).then(function(a){var b=a[0],c=a[1];return[b.data.metaSiteId?b.data:b.data.payload,c]}).then(function(b){var c=b[0],d=b[1],e=a.metaSiteId,f=a.config.topology,g=a.brand;angular.module("dashboardSdk",[]),angular.module("dashboardHeaderMobileApp",[]),angular.module("siteSettingsApp").constant("brand",g).constant("clientTopology",f).service("Wix",function(){}).config(["wixAngularProvider","permissionsManagerProvider",function(a,b){a.setStaticsUrl(f.staticsUrl),b.setPermissions(new PermissionsDefinition(c.authorizationInfo))}]).config(["$provide","$locationProvider",function(a,b){b.html5Mode(!0),a.decorator("$browser",["$delegate",function(a){var b=window.location.pathname.match("manage-website")?"manage-website":"settings";return a.baseHref=function(){return""+window.location.pathname.split(b)[0]},a}])}]).config(["experimentManagerProvider",function(a){a.setExperiments(d)}]).config(["wixDashboardProvider",function(a){a.setMetaSiteId(e),a.setMetaSite(c)}]),angular.module("wixDashboardFramework").config(["wixDashboardProvider",function(a){a.setMetaSiteId(e)}]).run(["permissionsManager","wixDashboard",function(a,b){b.setCurrentApp("site-settings"),a.assignPermissionsMap((d={},d[e]=new PermissionsDefinition(c.authorizationInfo),d));var d}]),angular.module("wixDashboardFramework").config(["wixDashboardFrameworkConfig",function(a){a.experiments=d}])})},b.getFiles=function(a){var b=a.accountLanguage,c=a.debug,d=a.config.topology,e=d.staticsUrl,f=d.publicUrl,g=d.dashboardAppStaticsUrl,h=d.siteActionsStaticsUrl,i=c?"concat/":"",j=c?"":"min.";return[[e+"bower_components/wix-angular/dist/wix-angular.js",e+"bower_components/fedops-logger/fedops-logger-angular.bundle.js",e+"bower_components/dashboard-ui-components/dist/styles/dashboard-ui-components-base.css",e+"bower_components/dashboard-ui-components/dist/styles/dashboard-ui-components.css",e+"bower_components/wix-dashboard-framework-statics/dist/styles/main.css","//static.parastorage.com/unpkg/wix-style@1.0.2476/dist/styles/main.css","//static.parastorage.com/services/third-party/angular-material/1.1.1/angular-material.min.css",e+"styles/main.css"],[e+"bower_components/commons-validator-js/commons-validator-js.js",e+"bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js",e+"bower_components/wix-angular/dist/wix-angular-storage.js",e+"bower_components/ng-debounce/angular-debounce.js",f+"my-account/dashboard-config.js",e+"bower_components/wix-dashboard-framework-statics/dist/scripts/locale/messages_"+b+".js",e+"bower_components/dashboard-ui-components/dist/scripts/locale/common_"+b+".js",e+"bower_components/angular-bootstrap/ui-bootstrap-tpls.js",e+"bower_components/wix-dashboard-framework-statics/dist/scripts/scripts.js",e+"bower_components/dashboard-ui-components/dist/scripts/dashboard-ui-components.js",e+"bower_components/wix-bi-logger/dist/scripts/bi-logger/wix-bi-angular.js",e+"bower_components/cross-storage/dist/client.js",e+"bower_components/locale-data/dist/scripts/locale/messages_"+b+".js",e+"bower_components/locale-data/dist/scripts/locale/localeData_"+b+".js",e+"scripts/locale/messages_"+b+".js","//static.parastorage.com/unpkg/bi-logger-sanitizer@1.0.2/dist/statics/app.bundle.min.js",""+e+i+"scripts/modules.js",""+g+i+"scripts/scripts.js",""+e+i+"scripts/scripts.js",h+"transfer-dialog-lazy-component.bundle."+j+"js",h+"rename-dialog-lazy-component.bundle."+j+"js",h+"add-contributor-dialog-lazy-component.bundle."+j+"js"]]},b}(AngularLazyComponent);ModuleRegistry.registerComponent("site-settings-lazy-module",function(){return SiteSettingsComponent}),ModuleRegistry.registerComponent("site-settings-lazy-module-old",function(){return SiteSettingsComponent});