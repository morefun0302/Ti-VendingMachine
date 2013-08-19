define(["Ti/_","Ti/API","Ti/_/style"],function(t,e,i){var n=require.is,r={innerHTML:1,className:1,value:1},o={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},a={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},s={set:function(t,e,l){if(2===arguments.length){for(var c in e)s.set(t,c,e[c]);return t}var u=e.toLowerCase(),d=a[u]||e,h=r[d];return"style"!==d||require.is(l,"String")?h||n(l,"Boolean")||n(l,"Function")?(t[e]=l,t):(t.setAttribute(o[u]||e,l),t):i.set(t,l)},remove:function(t,e){return t.removeAttribute(e),t}};return{create:function(t,e,i,r){var o=i?i.ownerDocument:document;return n(t,"String")&&(t=o.createElement(t)),e&&s.set(t,e),i&&this.place(t,i,r),t},attr:s,place:function(t,e){return e.appendChild(t),t},detach:function(t){return t.parentNode&&t.parentNode.removeChild(t)},destroy:function(t){try{var e=t.ownerDocument.createElement("div");e.appendChild(this.detach(t)||t),e.innerHTML=""}catch(i){}},calculateDistance:function(t,e,i,n){return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-n,2))},unitize:function(t){return isNaN(t-0)||t-0!=t?t:t+"px"},computeSize:function(i,r,o){if(n(i,"Number")&&isNaN(i))return 0;var a=require.is(i);if("String"===a){var s=require("Ti/UI");if(i===s.SIZE)o&&(i=void 0);else{var l=parseFloat(i),c=i.match(/.*(%|mm|cm|em|pt|in|px|dp)$/);switch(c=c?c[1]:"px"){case"%":if(r==s.SIZE)o?void 0:s.SIZE;else if(!require.is(r,"Number"))return e.error("Could not compute percentage size/position of element."),void 0;return l/100*r;case"mm":l/=10;case"cm":return.393700787*l*t.dpi;case"em":case"pt":l/=12;case"pc":l/=6;case"in":return l*t.dpi;case"px":return l;case"dp":return l*t.dpi/96}}}else"Number"!==a&&(i=void 0);return i}}});