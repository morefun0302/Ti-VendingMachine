define(["Ti/_/declare","Ti/_/Evented","Ti/_/lang","Ti/Platform"],function(e,t,i,n){function r(e,t,i){var n=0==t?1:0,r=2==t?1:2,o=0==e?1:0,a=2==e?1:2;return i[o][n]*i[a][r]-i[o][r]*i[a][n]}function o(e,t,i,n,r,o,a,s){return{a:e.a*t+e.b*n,b:e.a*i+e.b*r,c:e.c*t+e.d*n,d:e.c*i+e.d*r,tx:e.a*o+e.b*a+e.tx,ty:e.c*o+e.d*a+e.ty,rotation:e.rotation+(0|s)}}var a,s="gecko"===n.runtime,l=function(e){return s?e+"px":e};return a=e("Ti.UI.2DMatrix",t,{properties:{a:1,b:0,c:0,d:1,tx:0,ty:0,rotation:0},constructor:function(e){e&&require.mix(this,e)},invert:function(){var e=0,t=0,i=[[this.a,this.b,this.tx],[this.c,this.d,this.ty],[0,0,1]],n=i,s=this.a*r(0,0,i)-this.b*r(0,1,i)+this.tx*r(0,2,i);if(Math.abs(s)>1e-10)for(s=1/s;3>t;t++)for(;3>e;e++)n[t][e]=r(e,t,i)*s,1==(e+t)%2&&(n[t][e]=-n[t][e]);return new a(o(this,n[0][0],n[0][1],n[1][0],n[1][1],n[0][2],n[1][2]))},multiply:function(e){return new a(o(this,e.a,e.b,e.c,e.d,e.tx,e.ty,e.rotation))},rotate:function(e){return new a({a:this.a,b:this.b,c:this.c,d:this.d,tx:this.tx,ty:this.ty,rotation:this.rotation+e})},scale:function(e,t){return new a(o(this,e,0,0,i.val(t,e),0,0))},translate:function(e,t){return new a(o(this,1,0,0,1,e,t))},toCSS:function(){for(var e=0,t=[this.a,this.b,this.c,this.d,this.tx,this.ty];6>e;e++)t[e]=t[e].toFixed(6),e>4&&(t[e]=l(t[e]));return"matrix("+t.join(",")+") rotate("+this.rotation+"deg)"}})});