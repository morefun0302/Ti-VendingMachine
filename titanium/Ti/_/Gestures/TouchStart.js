define(["Ti/_/declare","Ti/_/lang"],function(t,e){return e.setObject("Ti._.Gestures.TouchStart",{processTouchStartEvent:function(t){for(var e=t.changedTouches,i=0,n=e.length,r={touchstart:[]};n>i;i++)r.touchstart.push({x:e[i].clientX,y:e[i].clientY});return r}})});