define(["Ti/_","Ti/_/string"],function(t,e){function i(t,i,n){for(var r,o=0,a=" "+t.className+" ",i=require.is(i,"Array")?i:i.split(" ");i.length>o;o++)r=a.indexOf(" "+i[o]+" "),n&&-1===r?a+=i[o]+" ":n||-1===r||(a=a.substring(0,r)+a.substring(r+i[o].length+1));t.className=e.trim(a)}return t.css={add:function(t,e){i(t,e,1)},remove:function(t,e){i(t,e)},clean:function(t){return t.replace(/[^A-Za-z0-9\-]/g,"")}}});