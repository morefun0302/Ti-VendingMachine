var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._,Controller=function(){function t(){return i.__widgetId?{widgetId:i.__widgetId,name:i.__controllerPath}:i.__controllerPath}var e=[],i=this;this.__iamalloy=!0,_.extend(this,Backbone.Events,{__views:{},setParent:function(t){var i=e.length;if(i){this.parent=t.__iamalloy?t.parent:t;for(var n=0;i>n;n++)e[n].__iamalloy?e[n].setParent(this.parent):this.parent.add(e[n])}},addTopLevelView:function(t){e.push(t)},getTopLevelViews:function(){return e},getView:function(t){return t===void 0||null===t?e[0]:this.__views[t]},getViews:function(){return this.__views},destroy:function(){},getViewEx:function(t){var e=t.recurse||!1;if(e){var i=this.getView();return i.__iamalloy?i.getViewEx({recurse:!0}):i}return this.getView()},createStyle:function(e){return Alloy.createStyle(t(),e)},UI:{create:function(e,i){return Alloy.UI.create(t(),e,i)}},addClass:function(e,i,n){return Alloy.addClass(t(),e,i,n)},removeClass:function(e,i,n){return Alloy.removeClass(t(),e,i,n)},resetClass:function(e,i,n){return Alloy.resetClass(t(),e,i,n)}})};module.exports=Controller;