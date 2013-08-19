define(["Ti/_/declare","Ti/_/Evented","Ti/_/style","Ti/UI"],function(e,t,i,n){function r(){n._layoutInProgress?h.once(n,"postlayout",function(){requestAnimationFrame(o)}):requestAnimationFrame(o)}function o(){var e,t,i,n,o,a,s,u,h,p,_,f,v,y=d();c=0;for(e in b)for(t=b[e],o=0;t.length>o;o++)if(i=t[o],!i.paused){if(p=i.duration?Math.min(1,(y-i.ts)/i.duration):1,_=l[i.curve](i.forward?p:1-p),n=i.elem,n._isAttachedToActiveWin())for(prop in i.props){if(v=i.props[prop],u=v[0],h=v[1],1===p&&(f=i.forward?h:u),"transform"===prop){if(1!==p){for(f=[],s=u.length,a=0;s>a;a++)(12>a||a>14)&&(f[a]=u[a]+(h[a]-u[a])*_);c=1}16===f.length?(a=f.splice(12),f="matrix3d("+f.join(",")+") rotate3d("+a.join(",")+"deg)"):(a=f.pop(),f="matrix("+f.join(",")+") rotate("+a+"deg)"),prop=S}else if(g[prop]){if(1!==p){for(f=[],a=0;4>a;a++)f[a]=Math.floor(u[a]+(h[a]-u[a])*_);c=1}f="rgba("+f.join(",")+")"}else m[prop]&&(1!==p&&(f=u+(h-u)*_,c=1),f="opacity"===prop?f:f+"px");i.prev!==f&&(n.domNode.style[prop]=f),i.prev=f}1===p&&(i.ts=y,i.duration&&i.reverse&&i.forward?(i.forward=0,c=1):i.repeat-->0?c=i.forward=1:(t.splice(o--,1),i.promise.resolve(),t.length||delete b[e]))}c&&r()}function a(e){var t,i,n,r;if(e=e.trim().toLowerCase(),"#"===e.charAt(0))i=4==e.length?4:8,isNaN(e=Number("0x"+e.substring(1)))||(n=(1<<i)-1,r=4===i?17:1,r=[(e>>2*i&n)*r,(e>>i&n)*r,(e&n)*r,1]);else if(t=e.match(y))for(r=t[1].split(/\s*,\s*/),t=0;3>t;)r[t++]|=0;else A&&(r=A[e]);return r?(r[3]=isNaN(t=parseFloat(r[3]))?1:Math.min(Math.max(t,0),1),r):void 0}function s(e,t,i,n){var r,o,a,s,c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];if(e)if(r=e[1],o=e[2].split(","),a=o.length,r&&16===a)for(s=0;12>s;s++)c[s]=o[s];else r||6!==a||(c[0]=o[0],c[1]=o[1],c[4]=o[2],c[5]=o[3],c[3]=o[4],c[7]=o[5]);if(t)if(r=t[1],o=t[2].split(","),a=o.length,r&&4===a)for(s=0;4>s;s++)c[12+s]=o[s];else r||1!==a||(c[14]=1,c[15]=o[0]);return i=2===n?[i.a,i.b,0,i.tx,i.c,i.d,0,i.ty,0,0,1,0,0,0,1,i.rotation]:[i.m11,i.m12,i.m13,i.m14,i.m21,i.m22,i.m23,i.m24,i.m31,i.m32,i.m33,i.m34,i.rotationX,i.rotationY,i.rotationZ,i.rotation],[c,i]}for(var c,l=[function(e){return e*=2,1>e?Math.pow(e,2)/2:-1*(--e*(e-2)-1)/2},function(e){return Math.pow(e,2)},function(e){return-1*e*(e-2)},function(e){return e}],u=window,d=Date.now,h=require.on,p=0,_=["ms","moz","webkit","o"],f=_.length,v={autoreverse:1,bottom:1,center:1,curve:1,delay:1,duration:1,repeat:1,right:1,visible:1,zIndex:1},g={backgroundColor:1,color:1},m={height:1,left:1,opacity:1,top:1,width:1},y=/^rgba?\(([\s\.,0-9]+)\)/,T=/3d/,E=/^Ti\.UI\.(2|3)DMatrix$/,w=/matrix(3d)?\(([^\)]*)/,I=/rotate(3d)?\(([^\)]*)/,b={},S=i.discover("transform"),A=require(require.config.ti.colorsModule),O=e("Ti.UI.Animation",t,{properties:{autoreverse:void 0,backgroundColor:void 0,bottom:void 0,center:void 0,color:void 0,curve:void 0,delay:void 0,duration:void 0,height:void 0,left:void 0,opacity:void 0,repeat:void 0,right:void 0,top:void 0,transform:void 0,visible:void 0,width:void 0,zIndex:void 0}});--f>=0&&!u.requestAnimationFrame;)u.requestAnimationFrame=u[_[f]+"RequestAnimationFrame"];return u.requestAnimationFrame||(u.requestAnimationFrame=function(e){var t=d(),i=Math.max(0,16-(t-p)),n=window.setTimeout(function(){e(t+i)},i);return p=t+i,n}),O._play=function(e,t){function n(){var n,o,y,S,A,O,N,L,k,C,x={},D=e._parent._layout.calculateAnimation(e,t);for(y in f)if(O=f[y],!v[y]&&void 0!==O){for(n=0;_.length>n;n++)delete _[n].props[y],require.isEmpty(_[n].props)&&_.splice(n--,1);if(S=i.get(e.domNode,y),g[y])S=a(S),O=a(O),(O>S||S>O)&&(x[y]=[S,O]);else if(m[y])isNaN(S=parseFloat(S))&&"opacity"===y&&(S=1),O=y in D?D[y]:O,S!==O&&(x[y]=[S,O]);else if("transform"===y&&(A=O.declaredClass.match(E))){if(A=0|A[1],k=S.match(w),C=S.match(I),T.test(S)||3===A)N=s(k,C,O,A),S=N[0],O=N[1];else if(2===A){if(S=[1,0,0,1,0,0,0],k)for(L=k[2].split(","),o=Math.min(6,L.length),n=0;o>n;n++)S[n]=parseFloat(L[n]);C&&(L=C[2].split(","),L.length&&(S[6]=parseFloat(L[0]))),O=[O.a,O.b,O.c,O.d,O.tx,O.ty,O.rotation],N=[S,O]}(O>S||S>O)&&(x[y]=N)}}b[h].push({id:p,elem:e,promise:u,props:x,ts:d(),reverse:!!f.autoreverse,forward:1,curve:Math.max(0,Math.min(l.length-1,0|f.curve)),duration:0|f.duration,repeat:!!f.repeat}),t.fireEvent("start"),c||(c=1,r())}function o(){for(var e=b[h],t=0,i=e&&e.length;i>t;t++)if(e[t].id===p)return e[t]}var u=new require.Promise,h=e.widgetId,p=0|1e9*Math.random(),_=b[h]=b[h]||[],f=t.properties.__values__,y=0|f.delay,S=!!f.visible;return y?setTimeout(n,y):n(),u.source=e,u.animation=t,u.pause=function(){var e=o();return e=!!e&&(e.paused||(e.paused=d())),t.fireEvent("pause"),e},u.resume=function(){var e=o();return e&&(e.paused&&(e.ts+=d()-e.paused),c||(c=1,r())),e=!!e&&!(e.paused=0),t.fireEvent("resume"),e},u.cancel=function(e){for(var n,r,o,a=b[h],s=0,c=a&&a.length,l=!1;c>s;s++)if(a[s].id===p){if(n=a[s],e){o=n.elem.domNode;for(r in n.props)c=n.props[r][0],i.set(o,r,m[r]&&"opacity"!==r?c+"px":c)}a.splice(s,1),a.length||delete b[h],l=!0;break}return t.fireEvent("cancel"),l},u.then(function(){void 0!==f.visible&&(e.visible=S),void 0!==f.zIndex&&(e.zIndex=zIndex),t.fireEvent("complete")})},O});