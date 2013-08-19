define(["Ti/_/css","Ti/_/declare","Ti/_/style","Ti/_/lang","Ti/API","Ti/UI","Ti/_","Ti/_/dom"],function(t,e,i,n,r,o,a,s){var c=n.val;return e("Ti._.Layouts.Base",null,{computedSize:{width:0,height:0},constructor:function(e){this.element=e,t.add(e.domNode,t.clean(this.declaredClass))},destroy:function(){t.remove(this.element.domNode,t.clean(this.declaredClass))},handleInvalidState:function(t,e){r.debug("WARNING: Attempting to layout element that has been destroyed.\n	 Removing the element from the parent.\n	 The parent has a widget ID of "+e.widgetId+".");var i=e._children;i.splice(i.indexOf(t),1)},getValueType:function(t){return void 0!==t?t===o.SIZE||t===o.FILL?t:~(t+"").indexOf("%")?"%":"#":void 0},calculateAnimation:function(t,e){var i=t._animationCoefficients||(t._animationCoefficients={height:{},left:{},minWidth:{},sandboxWidth:{},minHeight:{},sandboxHeight:{},top:{},width:{}}),n={};return this._measureNode(t,{left:c(e.left,t.left),right:c(e.right,t.right),top:c(e.top,t.top),bottom:c(e.bottom,t.bottom),center:(t.center||e.center)&&{x:c(e.center&&e.center.x,t.center&&t.center.x),y:c(e.center&&e.center.y,t.center&&t.center.y)},width:c(e.width,t.width),minWidth:t.minWidth,minHeight:t.minHeight,height:c(e.height,t.height)},i,this),n=this._doAnimationLayout(t,i),{left:n.left,top:n.top,width:n.width-t._borderLeftWidth-t._borderRightWidth,height:n.height-t._borderTopWidth-t._borderBottomWidth}},computeValue:function(t,e){return"%"===e?parseFloat(t)/100:"#"===e?s.computeSize(t):void 0}})});