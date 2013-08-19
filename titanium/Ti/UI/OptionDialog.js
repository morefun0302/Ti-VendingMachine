define(["Ti/_/declare","Ti/_/lang","Ti/_/Evented","Ti/Locale","Ti/UI","Ti/_/css"],function(e,t,i,n,r,o){return e("Ti.UI.OptionDialog",i,{show:function(){var e=this._optionsWindow=r.createWindow(),i=r.createView({backgroundColor:"black",opacity:0,left:0,top:0,right:0,bottom:0}),a=r.createView({width:"100%",height:r.SIZE,bottom:0,backgroundColor:"white",layout:r._LAYOUT_CONSTRAINING_VERTICAL,opacity:0});e._add(i),e._add(a),a._add(r.createLabel({text:n._getString(this.titleid,this.title),font:{fontWeight:"bold"},left:5,right:5,top:5,height:r.SIZE,textAlign:r.TEXT_ALIGNMENT_CENTER})),require.is(this.options,"Array")&&this.options.forEach(function(i,n,s){var c=r.createButton({left:5,right:5,top:5,bottom:n===s.length-1?5:0,height:r.SIZE,title:i,index:n});n===this.destructive?o.add(c.domNode,"TiUIElementGradientDestructive"):n===this.cancel&&o.add(c.domNode,"TiUIElementGradientCancel"),a._add(c),c.addEventListener("singletap",t.hitch(this,function(){e.close(),this._optionsWindow=void 0,this.fireEvent("click",{index:n,cancel:this.cancel,destructive:this.destructive})}))},this),a.addEventListener("postlayout",function(){setTimeout(function(){a.animate({bottom:-a._measuredHeight,opacity:1,duration:0}),i.animate({opacity:.5,duration:200},function(){a.animate({bottom:0,duration:200})})},0)}),e.open()},properties:{cancel:-1,destructive:-1,options:void 0,title:void 0,titleid:void 0}})});