define(["Ti/_/declare","Ti/_/UI/FontWidget","Ti/UI"],function(e,t,i){return e("Ti.UI.PickerRow",t,{constructor:function(){this._addStyleableDomNode(this.domNode)},_defaultWidth:i.SIZE,_defaultHeight:i.SIZE,properties:{title:{post:function(){this._parentColumn&&this._parentColumn._updateContentDimensions()}}}})});