function Controller(){function e(){u.coinSlotOverlayWrapper.visible=!0}function t(e){Ti.API.info("coin value: "+e.source.coinValue);var t=e.source.coinValue;if(Alloy.Globals.isNumber(t)){var i=w.coin.insert(t);s(i)}else alert("Coin value is not valid")}function i(e){w.vend(e,n,o)}function n(e,t){Ti.API.info("vend complete"),s(e),a(t)}function o(e){Ti.API.error("vend failed"),alert(e.message)}function r(){u.coinSlotOverlayWrapper.visible=!1}function s(e){var t=Alloy.Globals.formatSterling(e);e>parseFloat(0)?(u.coinBalance.color="green",u.coinSlotOverlayBalance.color="black"):(u.coinBalance.color="red",u.coinSlotOverlayBalance.color="red"),u.coinBalance.text=t,u.coinSlotOverlayBalance.text=t}function a(e){_.each(e,function(e){var t=_.find(f,function(t){return t.item.name==e.name});t.stockLevel.text=e.qty,e.qty>0?(t.bg.backgroundColor="green",t.bg.opacity=.3,t.stockLevel.color="black"):(t.bg.backgroundColor="red",t.bg.opacity=.3,t.stockLevel.color="red")})}function l(){var e=w.coin.eject();s(e)}function c(){w.switchMode(w.modes.VEND),a(w.stock.levels)}function d(e){var t=[{name:"Sweets",height:38},{name:"Crisps",height:38},{name:"Cakes",height:32},{name:"Bottles",height:56},{name:"Cans",height:50}];_.each(e,function(e){var n=_.find(t,function(t){return e.name==t.name}),o=Alloy.createController("vendItem",{width:116,height:n.height,bottom:3,item:e,click:i});u.itemWrapper.add(o.getView()),f.push(o)})}function h(){l();var e=w.stock.levels;d(e),a(e)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="vend",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var u=this,v={},p={};u.__views.vend=Ti.UI.createWindow({title:"Ready to Vend",id:"vend"}),u.__views.vend&&u.addTopLevelView(u.__views.vend),c?u.__views.vend.addEventListener("focus",c):p["$.__views.vend!focus!windowFocused"]=!0,h?u.__views.vend.addEventListener("open",h):p["$.__views.vend!open!windowOpened"]=!0,u.__views.__alloyId8=Ti.UI.createView({width:Ti.UI.SIZE,height:Ti.UI.SIZE,backgroundColor:"white",id:"__alloyId8"}),u.__views.vend.add(u.__views.__alloyId8),u.__views.machineWrapper=Ti.UI.createView({width:266,height:343,id:"machineWrapper"}),u.__views.__alloyId8.add(u.__views.machineWrapper),u.__views.machine=Ti.UI.createView({width:180,height:343,backgroundImage:"/images/machine.png",id:"machine"}),u.__views.machineWrapper.add(u.__views.machine),u.__views.coinBalance=Ti.UI.createLabel({width:Ti.UI.FILL,height:Ti.UI.SIZE,textAlign:"center",font:{fontSize:28,fontWeight:"bold"},color:"red",text:"0.00",bottom:13,id:"coinBalance"}),u.__views.machine.add(u.__views.coinBalance),u.__views.itemWrapper=Ti.UI.createView({width:267,height:340,layout:"vertical",top:15,left:0,id:"itemWrapper"}),u.__views.machineWrapper.add(u.__views.itemWrapper),u.__views.coinSlot=Ti.UI.createView({width:26,height:108,top:52,right:49,opacity:.3,backgroundColor:"green",id:"coinSlot"}),u.__views.machineWrapper.add(u.__views.coinSlot),e?u.__views.coinSlot.addEventListener("click",e):p["$.__views.coinSlot!click!showCoinSlot"]=!0,u.__views.coinSlotOverlayWrapper=Ti.UI.createView({width:Ti.UI.FILL,height:Ti.UI.FILL,visible:!1,id:"coinSlotOverlayWrapper"}),u.__views.__alloyId8.add(u.__views.coinSlotOverlayWrapper),r?u.__views.coinSlotOverlayWrapper.addEventListener("click",r):p["$.__views.coinSlotOverlayWrapper!click!hideCoinSlot"]=!0,u.__views.coinSlotOverlayBg=Ti.UI.createView({opacity:.7,backgroundColor:"black",id:"coinSlotOverlayBg"}),u.__views.coinSlotOverlayWrapper.add(u.__views.coinSlotOverlayBg),u.__views.coinSlotOverlay=Ti.UI.createView({width:290,height:290,backgroundImage:"/images/coins.png",bubbleParent:!1,id:"coinSlotOverlay"}),u.__views.coinSlotOverlayWrapper.add(u.__views.coinSlotOverlay),u.__views.coin1p=Ti.UI.createView({width:53,height:53,left:4,top:155,coinValue:.01,id:"coin1p"}),u.__views.coinSlotOverlay.add(u.__views.coin1p),t?u.__views.coin1p.addEventListener("click",t):p["$.__views.coin1p!click!insertCoin"]=!0,u.__views.coin2p=Ti.UI.createView({width:65,height:65,left:71,top:149,coinValue:.02,id:"coin2p"}),u.__views.coinSlotOverlay.add(u.__views.coin2p),t?u.__views.coin2p.addEventListener("click",t):p["$.__views.coin2p!click!insertCoin"]=!0,u.__views.coin5p=Ti.UI.createView({width:47,height:47,left:154,top:158,coinValue:.05,id:"coin5p"}),u.__views.coinSlotOverlay.add(u.__views.coin5p),t?u.__views.coin5p.addEventListener("click",t):p["$.__views.coin5p!click!insertCoin"]=!0,u.__views.coin10p=Ti.UI.createView({width:62,height:62,left:219,top:151,coinValue:.1,id:"coin10p"}),u.__views.coinSlotOverlay.add(u.__views.coin10p),t?u.__views.coin10p.addEventListener("click",t):p["$.__views.coin10p!click!insertCoin"]=!0,u.__views.coin20p=Ti.UI.createView({width:55,height:55,left:4,bottom:11,coinValue:.2,id:"coin20p"}),u.__views.coinSlotOverlay.add(u.__views.coin20p),t?u.__views.coin20p.addEventListener("click",t):p["$.__views.coin20p!click!insertCoin"]=!0,u.__views.coin50p=Ti.UI.createView({width:69,height:69,left:67,bottom:4,coinValue:.5,id:"coin50p"}),u.__views.coinSlotOverlay.add(u.__views.coin50p),t?u.__views.coin50p.addEventListener("click",t):p["$.__views.coin50p!click!insertCoin"]=!0,u.__views.coin1pound=Ti.UI.createView({width:58,height:58,left:149,bottom:10,coinValue:1,id:"coin1pound"}),u.__views.coinSlotOverlay.add(u.__views.coin1pound),t?u.__views.coin1pound.addEventListener("click",t):p["$.__views.coin1pound!click!insertCoin"]=!0,u.__views.coin2pound=Ti.UI.createView({width:71,height:71,left:216,bottom:2,coinValue:2,id:"coin2pound"}),u.__views.coinSlotOverlay.add(u.__views.coin2pound),t?u.__views.coin2pound.addEventListener("click",t):p["$.__views.coin2pound!click!insertCoin"]=!0,u.__views.coinSlotOverlayBalance=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,textAlign:"left",font:{fontSize:28,fontWeight:"bold"},color:"red",text:"0.00",top:65,left:10,id:"coinSlotOverlayBalance"}),u.__views.coinSlotOverlay.add(u.__views.coinSlotOverlayBalance),u.__views.coinSlotOverlayClose=Ti.UI.createButton({width:80,height:42,top:10,left:10,title:"Close",id:"coinSlotOverlayClose"}),u.__views.coinSlotOverlay.add(u.__views.coinSlotOverlayClose),r?u.__views.coinSlotOverlayClose.addEventListener("click",r):p["$.__views.coinSlotOverlayClose!click!hideCoinSlot"]=!0,u.__views.coinEject=Ti.UI.createView({width:32,height:85,right:112,top:14,backgroundColor:"green",opacity:.4,id:"coinEject"}),u.__views.coinSlotOverlay.add(u.__views.coinEject),l?u.__views.coinEject.addEventListener("click",l):p["$.__views.coinEject!click!ejectCoins"]=!0,v.destroy=function(){},_.extend(u,u.__views);var w=Alloy.Globals.machine,f=[];p["$.__views.vend!focus!windowFocused"]&&u.__views.vend.addEventListener("focus",c),p["$.__views.vend!open!windowOpened"]&&u.__views.vend.addEventListener("open",h),p["$.__views.coinSlot!click!showCoinSlot"]&&u.__views.coinSlot.addEventListener("click",e),p["$.__views.coinSlotOverlayWrapper!click!hideCoinSlot"]&&u.__views.coinSlotOverlayWrapper.addEventListener("click",r),p["$.__views.coin1p!click!insertCoin"]&&u.__views.coin1p.addEventListener("click",t),p["$.__views.coin2p!click!insertCoin"]&&u.__views.coin2p.addEventListener("click",t),p["$.__views.coin5p!click!insertCoin"]&&u.__views.coin5p.addEventListener("click",t),p["$.__views.coin10p!click!insertCoin"]&&u.__views.coin10p.addEventListener("click",t),p["$.__views.coin20p!click!insertCoin"]&&u.__views.coin20p.addEventListener("click",t),p["$.__views.coin50p!click!insertCoin"]&&u.__views.coin50p.addEventListener("click",t),p["$.__views.coin1pound!click!insertCoin"]&&u.__views.coin1pound.addEventListener("click",t),p["$.__views.coin2pound!click!insertCoin"]&&u.__views.coin2pound.addEventListener("click",t),p["$.__views.coinSlotOverlayClose!click!hideCoinSlot"]&&u.__views.coinSlotOverlayClose.addEventListener("click",r),p["$.__views.coinEject!click!ejectCoins"]&&u.__views.coinEject.addEventListener("click",l),_.extend(u,v)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;