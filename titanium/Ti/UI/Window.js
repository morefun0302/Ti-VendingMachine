define(["Ti/_/declare","Ti/Gesture","Ti/Locale","Ti/_/UI/SuperView","Ti/UI"],function(t,e,i,n,r){var o=r.FILL,a=r.SIZE,s={post:function(){this._navGroup&&this._navGroup._updateNavBar()}};return t("Ti.UI.Window",n,{_defaultWidth:o,_defaultHeight:o,postscript:function(){if(this.url){var t=r.currentWindow;r._setWindow(this),require("Ti/_/include!sandbox!"+this.url),r._setWindow(t)}},_getTitle:function(){return i.getString(this.titleid,this.title)},constants:{url:void 0,bubbleParent:!1},properties:{modal:{set:function(t,e){if(t!==e)if(t){var i=this._modalParentContainer=r.createView();i._add(r.createView({backgroundColor:"#000",opacity:.5})),i._add(this._modalContentContainer=r.createView({width:a,height:a})),this._modalContentContainer.add(this)}else this._modalParentContainer&&(this._modalParentContainer._opened&&this._modalParentContainer.close(),this._modalContentContainer.remove(this),this._modalParentContainer=null,this._opened&&(this.close(),this.open()));return t}},orientation:{get:function(){return e.orientation}},barColor:s,barImage:s,leftNavButton:s,navBarHidden:s,rightNavButton:s,titleControl:s,titleImage:s,title:s,titleid:s,translucent:s}})});