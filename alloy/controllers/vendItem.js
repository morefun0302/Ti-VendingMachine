function Controller(){function e(e){o.click(e.source.name)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="vendItem",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var t=this,i={},n={};t.__views.vendItem=Ti.UI.createView({width:Ti.UI.SIZE,height:Ti.UI.SIZE,layout:"horizontal",left:0,id:"vendItem"}),t.__views.vendItem&&t.addTopLevelView(t.__views.vendItem),t.__views.stockLevel=Ti.UI.createLabel({width:60,font:{fontSize:24,fontWeight:"bold"},textAlign:"left",id:"stockLevel"}),t.__views.vendItem.add(t.__views.stockLevel),t.__views.item=Ti.UI.createView({width:Ti.UI.SIZE,height:Ti.UI.SIZE,id:"item"}),t.__views.vendItem.add(t.__views.item),e?t.__views.item.addEventListener("click",e):n["$.__views.item!click!itemClicked"]=!0,t.__views.bg=Ti.UI.createView({opacity:.3,backgroundColor:"green",touchEnabled:!1,id:"bg"}),t.__views.item.add(t.__views.bg),t.__views.title=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",backgroundColor:"white",touchEnabled:!1,left:3,bottom:3,font:{fontSize:18,fontWeight:"bold"},id:"title"}),t.__views.item.add(t.__views.title),t.__views.price=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",backgroundColor:"white",touchEnabled:!1,right:3,top:3,font:{fontSize:14,fontWeight:"bold"},id:"price"}),t.__views.item.add(t.__views.price),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{};t.vendItem.width=o.width+t.stockLevel.width,t.vendItem.height=o.height,t.item.width=o.width,t.item.height=o.height,void 0!==o.bottom&&(t.vendItem.bottom=o.bottom),t.stockLevel.text=o.item.qty,t.title.text=o.item.name,t.price.text=Alloy.Globals.formatSterling(o.item.price),t.item.name=o.item.name,n["$.__views.item!click!itemClicked"]&&t.__views.item.addEventListener("click",e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;