define(["Ti/_/declare","Ti/_/Evented","Ti/_/Map/Google","Ti/App/Properties"],function(e,t,i,n){var r=n.getString("ti.map.backend");return e("Ti.Map.View",[t,r?require(r):i])});