define(["Ti/_/declare","Ti/_/lang"],function(t,e){var i,n,r=50,o=Math.PI/6,a=.5,s=!1;return e.setObject("Ti._.Gestures.Swipe",{processTouchStartEvent:function(t){1==t.touches.length&&1==t.changedTouches.length?(s=!1,i={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},n=Date.now()):i=null},processTouchEndEvent:function(t){if(0===t.touches.length&&1===t.changedTouches.length&&i){var e,c,l,u=t.changedTouches[0].clientX,d=t.changedTouches[0].clientY,h=Math.abs(i.x-u),_=Math.abs(i.y-d),f=Math.sqrt(Math.pow(i.x-u,2)+Math.pow(i.y-d,2));if(!s&&(s=f>r),s&&(e=r>=f||0===h||0===_?!0:h>_?o>Math.atan(_/h):o>Math.atan(h/_),e&&(c=h>_?i.x-u>0?"left":"right":0>i.y-d?"down":"up",l=Math.abs(f/(Date.now()-n)),l>a)))return{swipe:[{x:u,y:d,direction:c}]}}i=null},processTouchCancelEvent:function(){i=null}})});