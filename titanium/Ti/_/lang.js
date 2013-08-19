define(["Ti/_/has"],function(t){function e(t,e){return[].concat(Array.prototype.slice.call(t,e||0))}function i(t,i){var n=e(arguments,2),a=o(i,"String");return function(){var o=t||r,s=a?o[i]:i;return s&&s.apply(o,n.concat(e(arguments)))}}var n,r=this,o=require.is;return{hitch:n=function(t,e){if(arguments.length>2)return i.apply(r,arguments);if(e||(e=t,t=null),o(e,"String")){if(t=t||r,!t[e])throw['hitch: scope["',e,'"] is null (scope="',t,'")'].join("");return function(){return t[e].apply(t,arguments||[])}}return t?function(){return e.apply(t,arguments||[])}:e},isDef:function(t){return!o(t,"Undefined")},mixProps:function(e,i,r){var a,s,l,c={properties:1,constants:0};for(l in i)if(i.hasOwnProperty(l)&&!/^(constructor|__values__)$/.test(l))if(c.hasOwnProperty(l)){a=e[l]||(e[l]={}),a.__values__||(a.__values__={});for(s in i[l])(function(i,r,a,s,l,c,u){var d=o(l,"Object"),h=d&&o(l.get,"Function")&&l.get,_=d&&o(l.set,"Function")&&l.set,f=d&&o(l.post),p="Function"===f?l.post:"String"===f?n(r,l.post):0;d&&(h||_||p)?s[i]=l.value:o(l,"Function")?h=l:s[i]=l,Object.defineProperty(a,i,{get:function(){return h?h.call(r,s[i]):s[i]},set:function(t){var e=[t,s[i],i];e[0]=s[i]=_?_.apply(r,e):t,p&&p.apply(r,e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,i,{get:function(){return a[i]},set:function(t){if(!u)throw Error('Property "'+i+'" is read only');a[i]=t},configurable:!0,enumerable:!0}),t("declare-property-methods")&&(u||i.toUpperCase()!==i)&&(r["get"+c]=function(){return a[i]},u&&(r["set"+c]=function(t){return a[i]=t}))})(s,e,a,a.__values__,i[l][s],s.substring(0,1).toUpperCase()+s.substring(1),c[l])}else r&&(e[l]=i[l]);return e},generateAccessors:function(t,e,i){function n(e){var i="get"+e.substring(0,1).toUpperCase()+e.substring(1);i in t.prototype||(t.prototype[i]=function(){return this[e]})}function r(e){var i="set"+e.substring(0,1).toUpperCase()+e.substring(1);i in t.prototype||(t.prototype[i]=function(t){return this[e]=t})}e&&e.split(",").forEach(n),i&&i.split(",").forEach(function(t){n(t),r(t)})},setObject:function(t){var e,i,n=t.split("."),r=n.pop(),a=window,s=0,l=n[s++];if(l)do a=l in a?a[l]:a[l]={};while(a&&(l=n[s++]));if(a&&r){i=r in a?a[r]:{};for(s=1;arguments.length>s;s++)o(e=arguments[s],"Object")?this.mixProps(i,e,1):i=e}return a[r]=i},toArray:e,urlEncode:function(t){var e,i,n,r,a=encodeURIComponent,s=[];for(e in t)if(t.hasOwnProperty(e))for(o(i=t[e],"Array")||(i=[i]),e=a(e)+"=",n=0,r=i.length;r>n;)s.push(e+a(i[n++]));return s.join("&")},val:function(t,e){return void 0===t?e:t}}});