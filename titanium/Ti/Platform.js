define(["Ti/_","Ti/_/browser","Ti/_/Evented","Ti/_/lang","Ti/Locale","Ti/_/dom","Ti/UI"],function(e,t,i,n,r,o,a){function s(){l||(l=1,c.cookie=u+"="+encodeURIComponent(h)+"; expires="+new Date(Date.now()+63072e7).toUTCString(),localStorage.setItem(u,h))}var l,c=document,u="ti:mid",d=c.cookie.match(RegExp("(?:^|; )"+u+"=([^;]*)")),h=d?decodeURIComponent(d[1]):void 0,_=require.on,p=o.create("iframe",{id:"urlOpener",style:{display:"none"}},c.body);h||(h=localStorage.getItem(u)),h||localStorage.setItem(u,h=e.uuid()),_(window,"beforeunload",s),_(window,"unload",s);var f=navigator,v=f.battery||f.webkitBattery||f.mozBattery,g=n.setObject("Ti.Platform",i,{canOpenURL:function(e){return!!e},createUUID:e.uuid,is24HourTimeFormat:function(){return!1},openURL:function(e){if(/^([tel|sms|mailto])/.test(e))p.contentWindow.location.href=e;else{var t=a.createWindow({layout:a._LAYOUT_CONSTRAINING_VERTICAL,backgroundColor:"#888"}),i=a.createButton({top:2,bottom:2,title:"Close"}),n=a.createWebView({width:a.FILL,height:a.FILL});i.addEventListener("singletap",function(){t.close()}),t.add(i),t.add(n),t.open(),setTimeout(function(){n.url=e},1)}},properties:{batteryMonitoring:!1},constants:{BATTERY_STATE_CHARGING:1,BATTERY_STATE_FULL:2,BATTERY_STATE_UNKNOWN:-1,BATTERY_STATE_UNPLUGGED:0,address:void 0,architecture:void 0,availableMemory:void 0,batteryLevel:function(){return this.batteryMonitoring&&v?100*v.level:-1},batteryState:function(){return this.batteryMonitoring&&v&&v.charging?this.BATTERY_STATE_CHARGING:this.BATTERY_STATE_UNKNOWN},isBrowser:!0,id:h,locale:r,macaddress:void 0,model:f.userAgent,name:"mobileweb",netmask:void 0,osname:"mobileweb",ostype:f.platform,runtime:t.runtime,processorCount:void 0,username:void 0,version:require.config.ti.version}});return v&&require.on(v,"chargingchange",function(){g.batteryMonitoring&&g.fireEvent("battery",{level:g.batteryLevel,state:g.batteryState})}),g});