define(["Ti/_/declare","Ti/_/lang"],function(t,e){return e.setObject("Ti._.Gestures.TouchEnd",{processTouchEndEvent:function(t){for(var e=t.changedTouches,i=0,n=e.length,r={touchend:[]};n>i;i++)r.touchend.push({x:e[i].clientX,y:e[i].clientY});return r}})});