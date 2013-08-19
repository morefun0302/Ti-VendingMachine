define(["Ti/_/css","Ti/_/declare","Ti/_/lang","Ti/_/Evented","Ti/Locale","Ti/UI"],function(e,t,i,n,r,o){return t("Ti.UI.AlertDialog",n,{show:function(){var t=this._alertWindow=o.createWindow(),n=o.createView({backgroundColor:"black",opacity:0,left:0,top:0,right:0,bottom:0}),a=o.createView({backgroundColor:"white",borderRadius:3,height:o.SIZE,layout:o._LAYOUT_CONSTRAINING_VERTICAL,opacity:0,width:"50%"}),s=this.buttonNames||[];t._add(n),t._add(a),a._add(o.createLabel({text:r._getString(this.titleid,this.title),font:{fontWeight:"bold"},left:5,right:5,top:5,height:o.SIZE,textAlign:o.TEXT_ALIGNMENT_CENTER})),a._add(o.createLabel({text:r._getString(this.messageid,this.message),left:5,right:5,top:5,height:o.SIZE,textAlign:o.TEXT_ALIGNMENT_CENTER})),s.length||s.push(r._getString(this.okid,this.ok||"OK")),s.forEach(function(n,r){var c=o.createButton({left:5,right:5,top:5,bottom:r===s.length-1?5:0,height:o.SIZE,title:n,index:r});r===this.cancel&&e.add(c.domNode,"TiUIElementGradientCancel"),a._add(c),c.addEventListener("singletap",i.hitch(this,function(){t.close(),this._alertWindow=void 0,this.fireEvent("click",{index:r,cancel:this.cancel===r})}))},this),n.addEventListener("postlayout",function(){setTimeout(function(){n.animate({opacity:.5,duration:200},function(){a.animate({opacity:1,duration:200})})},0)}),t.open()},hide:function(){this._alertWindow&&this._alertWindow.close()},properties:{buttonNames:void 0,cancel:-1,message:void 0,messageid:void 0,ok:void 0,okid:void 0,title:void 0,titleid:void 0}})});