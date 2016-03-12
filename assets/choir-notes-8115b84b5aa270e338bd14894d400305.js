"use strict";define("choir-notes/app",["exports","ember","choir-notes/resolver","ember-load-initializers","choir-notes/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("choir-notes/components/app-version",["exports","ember-cli-app-version/components/app-version","choir-notes/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("choir-notes/components/column-group",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({})}),define("choir-notes/components/staff-column",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({domIndex:null,click:function(e){var t=e.target,n=$(t).index(),a=void 0;null===this.domIndex?(a=document.createElement("img"),a.src="assets/images/note-919d07b5a231f203dae7a4d1c56a308b.png",a.className="note",t.appendChild(a),this.domIndex=n):"DIV"===t.tagName&&this.domIndex!==n?(a=t.parentElement.children[this.domIndex].children[0],t.appendChild(a),this.domIndex=n):"DIV"===t.tagName&&this.domIndex===n?(t.children[0].remove(),this.domIndex=null):"IMG"===t.tagName&&(t.remove(),this.domIndex=null)}})}),define("choir-notes/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("choir-notes/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("choir-notes/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("choir-notes/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("choir-notes/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","choir-notes/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("choir-notes/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("choir-notes/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("choir-notes/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("choir-notes/initializers/export-application-global",["exports","ember","choir-notes/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("choir-notes/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("choir-notes/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("choir-notes/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("choir-notes/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("choir-notes/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("choir-notes/router",["exports","ember","choir-notes/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("choir-notes/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("choir-notes/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:16}},moduleName:"choir-notes/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Choir Notes");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,2,2,n),a[1]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,null),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]],["content","column-group",["loc",[null,[5,0],[5,16]]]]],locals:[],templates:[]}}())}),define("choir-notes/templates/components/column-group",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:15,column:6}},moduleName:"choir-notes/templates/components/column-group.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","staff");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createTextNode("	");e.appendChild(n,a);var a=e.createElement("span"),r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n	");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,2]),r=new Array(10);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(a,5,5),r[3]=e.createMorphAt(a,7,7),r[4]=e.createMorphAt(a,9,9),r[5]=e.createMorphAt(a,11,11),r[6]=e.createMorphAt(a,13,13),r[7]=e.createMorphAt(a,15,15),r[8]=e.createMorphAt(a,17,17),r[9]=e.createMorphAt(a,19,19),r},statements:[["content","staff-column",["loc",[null,[4,2],[4,18]]]],["content","staff-column",["loc",[null,[5,2],[5,18]]]],["content","staff-column",["loc",[null,[6,2],[6,18]]]],["content","staff-column",["loc",[null,[7,2],[7,18]]]],["content","staff-column",["loc",[null,[8,2],[8,18]]]],["content","staff-column",["loc",[null,[9,2],[9,18]]]],["content","staff-column",["loc",[null,[10,2],[10,18]]]],["content","staff-column",["loc",[null,[11,2],[11,18]]]],["content","staff-column",["loc",[null,[12,2],[12,18]]]],["content","staff-column",["loc",[null,[13,2],[13,18]]]]],locals:[],templates:[]}}())}),define("choir-notes/templates/components/staff-column",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:14,column:6}},moduleName:"choir-notes/templates/components/staff-column.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","staff-column");var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("input");e.setAttribute(a,"type","text"),e.setAttribute(a,"placeholder","lyrics"),e.setAttribute(a,"class","lyrics"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area staff-line"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area staff-line"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area staff-line"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area staff-line"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area staff-line"),e.appendChild(n,a);var a=e.createTextNode("\n	");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","note-area"),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("choir-notes/config/environment",["ember"],function(e){var t="choir-notes";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("choir-notes/app")["default"].create({name:"choir-notes",version:"0.0.0+be3e11ff"});