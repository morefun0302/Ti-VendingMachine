function ucfirst(e){return e?e[0].toUpperCase()+e.substr(1):e}function addNamespace(e){return(CONST.IMPLICIT_NAMESPACES[e]||CONST.NAMESPACE_DEFAULT)+"."+e}function processStyle(e,t,i,n,r){n=n||{},n.classes=i,t.apiName&&(n.apiName=t.apiName),t.id&&(n.id=t.id),t.applyProperties(exports.createStyle(e,n,r))}function isTabletFallback(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=700}var _=require("alloy/underscore")._,Backbone=require("alloy/backbone"),CONST=require("alloy/constants");exports.version="1.2.0",exports._=_,exports.Backbone=Backbone;var DEFAULT_WIDGET="widget",IDENTITY_TRANSFORM=void 0,RESET={bottom:null,left:null,right:null,top:null,height:null,width:null,shadowColor:null,shadowOffset:null,backgroundImage:null,backgroundRepeat:null,center:null,layout:null,backgroundSelectedColor:null,backgroundSelectedImage:null,opacity:1,touchEnabled:!0,enabled:!0,horizontalWrap:!0,zIndex:0,backgroundColor:null,font:null,visible:!0,color:null,transform:null,backgroundGradient:{},borderColor:"transparent",borderRadius:null,borderWidth:null};exports.M=function(e,t,i){var n,r=(t||{}).config||{},o=r.adapter||{},a={},s={};o.type?(n=require("alloy/sync/"+o.type),a.sync=function(e,t,i){n.sync(e,t,i)}):a.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a model that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))},a.defaults=r.defaults,i&&(s.migrations=i),n&&_.isFunction(n.beforeModelCreate)&&(r=n.beforeModelCreate(r,e)||r);var l=Backbone.Model.extend(a,s);return l.prototype.config=r,_.isFunction(t.extendModel)&&(l=t.extendModel(l)||l),n&&_.isFunction(n.afterModelCreate)&&n.afterModelCreate(l,e),l},exports.C=function(e,t,i){var n,r={model:i},o=(i?i.prototype.config:{})||{};o.adapter&&o.adapter.type?(n=require("alloy/sync/"+o.adapter.type),r.sync=function(e,t,i){n.sync(e,t,i)}):r.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a collection that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))};var a=Backbone.Collection.extend(r);return a.prototype.config=o,_.isFunction(t.extendCollection)&&(a=t.extendCollection(a)||a),n&&_.isFunction(n.afterCollectionCreate)&&n.afterCollectionCreate(a),a},exports.UI={},exports.UI.create=function(controller,apiName,opts){opts=opts||{};var baseName,ns,parts=apiName.split(".");if(1===parts.length)baseName=apiName,ns=opts.ns||CONST.IMPLICIT_NAMESPACES[baseName]||CONST.NAMESPACE_DEFAULT;else{if(!(parts.length>1))throw"Alloy.UI.create() failed: No API name was given in the second parameter";baseName=parts[parts.length-1],ns=parts.slice(0,parts.length-1).join(".")}opts.apiName=ns+"."+baseName,baseName=baseName[0].toUpperCase()+baseName.substr(1);var style=exports.createStyle(controller,opts);return eval(ns)["create"+baseName](style)},exports.createStyle=function(e,t,i){var n,r;if(!t)return{};n=_.isArray(t.classes)?t.classes.slice(0):_.isString(t.classes)?t.classes.split(/\s+/):[],r=t.apiName,r&&-1===r.indexOf(".")&&(r=addNamespace(r));var o;o=e&&_.isObject(e)?require("alloy/widgets/"+e.widgetId+"/styles/"+e.name):require("alloy/styles/"+e);var a,s,l={};for(a=0,s=o.length;s>a;a++){var c=o[a],u=c.key;if(c.isApi&&-1===u.indexOf(".")&&(u=(CONST.IMPLICIT_NAMESPACES[u]||CONST.NAMESPACE_DEFAULT)+"."+u),c.isId&&t.id&&c.key===t.id||c.isClass&&_.contains(n,c.key));else{if(!c.isApi)continue;if(-1===c.key.indexOf(".")&&(c.key=addNamespace(c.key)),c.key!==r)continue}c.queries&&c.queries.formFactor&&!Alloy[c.queries.formFactor]||_.extend(l,c.style)}var d=_.omit(t,[CONST.CLASS_PROPERTY,CONST.APINAME_PROPERTY]);return _.extend(l,d),l[CONST.CLASS_PROPERTY]=n,l[CONST.APINAME_PROPERTY]=r,i?_.defaults(l,i):l},exports.addClass=function(e,t,i,n){if(!i)return n&&t.applyProperties(n),void 0;var r=t[CONST.CLASS_PROPERTY]||[],o=r.length;i=_.isString(i)?i.split(/\s+/):i;var a=_.union(r,i||[]);return o===a.length?(n&&t.applyProperties(n),void 0):(processStyle(e,t,a,n),void 0)},exports.removeClass=function(e,t,i,n){i=i||[];var r=t[CONST.CLASS_PROPERTY]||[],o=r.length;if(!o||!i.length)return n&&t.applyProperties(n),void 0;i=_.isString(i)?i.split(/\s+/):i;var a=_.difference(r,i);return o===a.length?(n&&t.applyProperties(n),void 0):(processStyle(e,t,a,n,RESET),void 0)},exports.resetClass=function(e,t,i,n){i=i||[],i=_.isString(i)?i.split(/\s+/):i,processStyle(e,t,i,n,RESET)},exports.createWidget=function(e,t,i){return t!==void 0&&null!==t&&_.isObject(t)&&!_.isString(t)&&(i=t,t=DEFAULT_WIDGET),new(require("alloy/widgets/"+e+"/controllers/"+(t||DEFAULT_WIDGET)))(i)},exports.createController=function(e,t){return new(require("alloy/controllers/"+e))(t)},exports.createModel=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Model)(t)},exports.createCollection=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Collection)(t)},exports.isTablet=function(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=400}(),exports.isHandheld=!exports.isTablet,exports.Globals={},exports.Models={},exports.Models.instance=function(e){return exports.Models[e]||(exports.Models[e]=exports.createModel(e))},exports.Collections={},exports.Collections.instance=function(e){return exports.Collections[e]||(exports.Collections[e]=exports.createCollection(e))},exports.CFG=require("alloy/CFG");