define(["Ti/_/declare","Ti/_/lang","Ti/_/UI/Widget","Ti/_/dom","Ti/_/style","Ti/Locale","Ti/UI","Ti/UI/ActivityIndicatorStyle"],function(e,t,i,n,r,o,a,s){var c=.3,l=r.set;return e("Ti.UI.ActivityIndicator",i,{constructor:function(){var e=this._contentContainer=a.createView({layout:a._LAYOUT_CONSTRAINING_HORIZONTAL,width:a.SIZE,height:a.SIZE});this._add(e),i.prototype.hide.call(this),e._add(this._indicatorIndicator=a.createView()),e._add(this._indicatorMessage=a.createLabel()),this._createProngs()},_createProngs:function(){var e,t=0,i=this._prongs=[],r=this._indicatorIndicator,o=r.domNode,a=this.indicatorColor,s=this.indicatorDiameter,l=s/36;for(r.width=r.height=s;o.firstChild;)o.removeChild(o.firstChild);for(e=n.create("div",{className:"TiUIActivityIndicatorProngContainer",style:{transformOrigin:"0px 0px",transform:"scale("+l+")"}},o);12>t;t++)i.push(n.create("div",{className:"TiUIActivityIndicatorProng",style:{transform:"translate(16px,0px) rotate("+30*t+"deg)",transformOrigin:"2px 18px",opacity:c,backgroundColor:a}},e))},show:function(){i.prototype.show.call(this),this._timer=setInterval(t.hitch(this,"_animate"),100)},hide:function(){clearTimeout(this._timer),i.prototype.hide.call(this)},_currentProng:0,_animate:function(){var e=this._prongs[this._currentProng];12==++this._currentProng&&(this._currentProng=0),l(e,"transition",""),setTimeout(function(){l(e,"opacity",1),setTimeout(function(){l(e,"transition","opacity 500ms linear 0ms"),setTimeout(function(){l(e,"opacity",c)},1)},1)},1)},_defaultWidth:a.SIZE,_defaultHeight:a.SIZE,_messagePadding:0,properties:{color:{set:function(e){return this._indicatorMessage.color=e}},font:{set:function(e){return this._indicatorMessage.font=e}},indicatorColor:{post:"_createProngs",value:"#fff"},indicatorDiameter:{post:"_createProngs",value:36},message:{set:function(e){var t=this._indicatorMessage;return t.left=e?5:0,t.text=e}},messageid:{set:function(e){var t=this._indicatorMessage;return t.left=e?5:0,t.textid=e}},style:{set:function(e){this.indicatorColor=~[s.DARK,s.BIG_DARK].indexOf(e)?"#444":"#fff",this.indicatorDiameter=~[s.BIG,s.BIG_DARK].indexOf(e)?72:36}}}})});