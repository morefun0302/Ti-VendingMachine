define(["Ti/_/Evented","Ti/_/lang","Ti/Network"],function(e,t){function i(e){var t=d(window,"deviceorientation",function(i){t(),e(i)})}function n(e){return function(t){s={heading:{accuracy:t.webkitCompassAccuracy,magneticHeading:t.webkitCompassHeading},success:!0,timestamp:Date.now()},a.fireEvent("heading",s),e&&e(s)}}function r(e){return function(t){var i="coords"in t;u={success:i},i?u.coords=t.coords:u.code=t.code,a.fireEvent("location",u),e&&e(u)}}function o(){return{enableHighAccuracy:a.accuracy===a.ACCURACY_HIGH,timeout:a.MobileWeb.locationTimeout,maximumAge:a.MobileWeb.maximumLocationAge}}var a,s,l,c,u,d=require.on,h=!1,p=0,f=0,_=t.isDef;return i(function(e){_(e.webkitCompassHeading)&&(h=!0)}),a=t.setObject("Ti.Geolocation",e,{getCurrentPosition:function(e){a.locationServicesEnabled&&navigator.geolocation.getCurrentPosition(r(e),r(e),o())},getCurrentHeading:function(e){h&&(s&&Date.now()-s.timestamp<a.maximumHeadingAge?e(s):i(n(e)))},forwardGeocoder:function(e,t){if(require.is(e,"String")){var i=Ti.Network.createHTTPClient({onload:function(){var e=this.responseText.split(",");t({success:!0,places:[{latitude:parseFloat(e[2]),longitude:parseFloat(e[3])}]})},onerror:function(){t({success:!1})},timeout:a.MobileWeb.forwardGeocoderTimeout});i.open("GET","http://api.appcelerator.net/p/v1/geo?d=f&q="+escape(e)),i.send()}},reverseGeocoder:function(e,t,i){if(_(e)&&_(t)){var n=Ti.Network.createHTTPClient({onload:function(){i(JSON.parse(this.responseText))},onerror:function(){i({success:!1})},timeout:a.MobileWeb.forwardGeocoderTimeout});n.open("GET","http://api.appcelerator.net/p/v1/geo?d=r&q="+e+","+t),n.send()}},addEventListener:function(t,i){switch(t){case"heading":h&&(p++,1===p&&(l=d(window,"deviceorientation",n())));break;case"location":a.locationServicesEnabled&&(f++,1===f&&(c=navigator.geolocation.watchPosition(r(),r(),o())))}e.addEventListener.call(this,t,i)},removeEventListener:function(t,i){switch(t){case"heading":h&&(p--,0===p&&l());break;case"location":a.locationServicesEnabled&&(f--,1>p&&navigator.geolocation.clearWatch(c))}e.removeEventListener.call(this,t,i)},constants:{ACCURACY_HIGH:1,ACCURACY_LOW:2,ERROR_DENIED:1,ERROR_LOCATION_UNKNOWN:2,ERROR_TIMEOUT:3,locationServicesEnabled:{get:function(){return!!navigator.geolocation}},MobileWeb:{locationTimeout:1/0,maximumLocationAge:0,maximumHeadingAge:1e3,forwardGeocoderTimeout:void 0,reverseGeocoderTimeout:void 0},hasCompass:function(){return h}},properties:{accuracy:2}})});