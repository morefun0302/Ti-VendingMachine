function S4(){return(0|65536*(1+Math.random())).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){}function Sync(e,t,i){function n(e){localStorage.setItem(o,JSON.stringify(e))}var o=t.config.adapter.collection_name,r=t.config.data,s=null;switch(e){case"create":t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),r[t.id]=t,n(r),s=t.toJSON();break;case"read":var a=localStorage.getItem(o),l=a&&JSON.parse(a)||{},c=0;for(var d in l){var h=new t.config.Model(l[d]);t.models.push(h),c++}t.length=c,s=1===c?t.models[0]:t.models;break;case"update":r[t.id]=t,n(r),s=t.toJSON();break;case"delete":delete r[t.id],n(r),s=t.toJSON()}s?(_.isFunction(i.success)&&i.success(s),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(s)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.data={},InitAdapter(),e},module.exports.afterModelCreate=function(e){return e=e||{},e.prototype.config.Model=e,e};