define(["Ti/_/declare","Ti/_/UI/FontWidget","Ti/_/dom","Ti/UI","Ti/_/style","Ti/_/lang"],function(e,t,i,n,r,o){var a=r.set,s=15,l=require.on;return e("Ti.UI.PickerColumn",t,{constructor:function(){var e=this,t="ontouchstart"in window?"touchend":"click",r=e.domNode,o=e.constants.__values__.rows=[],a=e._upArrow=i.create("div",{className:"TiUIElementGradient",style:{textAlign:"center",position:"absolute",top:0,height:"40px",left:0,right:0,borderBottom:"1px solid #666",fontSize:"28px",cursor:"pointer"},innerHTML:"∧"},r),s=e._titleContainer=i.create("div",{style:{position:"absolute",top:"50%",height:"1em",width:"100%",marginTop:"-0.5em",textAlign:"center"}},r),c=i.create("div",{style:{position:"absolute",top:"40px",bottom:"40px",width:"100%"}},r),u=e._downArrow=i.create("div",{className:"TiUIElementGradient",innerHTML:"∨",style:{textAlign:"center",position:"absolute",bottom:"0px",height:"40px",width:"100%",borderTop:"1px solid #666",fontSize:"28px",cursor:"pointer"}},r);e._addStyleableDomNode(s),this._handles=[l(a,t,function(){var t=o.indexOf(e.selectedRow);e.selectedRow=t>0?o[t-1]:o[o.length-1]}),l(c,t,function(){var t=n.createWindow(),i=n.createView({backgroundColor:"#000",opacity:0,left:0,top:0,right:0,bottom:0}),r=n.createView({width:"75%",height:n.SIZE,backgroundColor:"#fff",layout:n._LAYOUT_CONSTRAINING_VERTICAL,borderRadius:3,opacity:0}),a=0,s=0,l=o.map(function(t){var i=t===e.selectedRow;return i&&(a=parseInt(s++)),{title:t.title,hasCheck:i}}),c=n.createTableView({left:5,right:5,top:5,height:10>l.length?n.SIZE:"70%",data:l}),u=n.createButton({left:5,top:5,right:5,title:"Cancel"});c.addEventListener("singletap",function(i){i.index in o&&(e.selectedRow=o[i.index]),t.close()}),u.addEventListener("singletap",function(){t.close()}),t._add(i),t._add(r),r._add(c),r._add(u),r._add(n.createView({height:"5px"})),t.open(),setTimeout(function(){i.animate({opacity:.5,duration:200},function(){r.animate({opacity:1,duration:200},function(){c.scrollToIndex(a)})})},30)}),l(u,t,function(){var t=o.indexOf(e.selectedRow);e.selectedRow=o.length-1>t?o[t+1]:o[0]})]},destroy:function(){event.off(this._handles),t.prototype.destroy.apply(this,arguments)},_setCorners:function(e,t,i){a(this._upArrow,{borderTopLeftRadius:e?i:"0px",borderTopRightRadius:t?i:"0px"}),a(this._downArrow,{borderBottomLeftRadius:e?i:"0px",borderBottomRightRadius:t?i:"0px"}),this.borderWidth=[0,t?0:1,0,0],this.borderColor="#666"},_defaultWidth:n.SIZE,_defaultHeight:n.SIZE,_preLayout:function(){return this._updateContentWidth(),this._parentPicker&&this._parentPicker._updateColumnHeights(),!0},_getContentSize:function(){var e=this._titleContainer;return text=e.innerHTML,{width:Math.max(this._widestRowWidth+s,100),height:this._tallestRowHeight+s+this._upArrow.clientHeight+this._downArrow.clientHeight}},_widestRowWidth:0,_tallestRowHeight:0,_updateContentWidth:function(){for(var e,t=0,i=0,n=this.rows.length;n>i;)e=this.rows[i++],t=Math.max(t,e._measureText(e.title,e.domNode).width);this._widestRowWidth!==t&&(this._widestRowWidth=t)},_getTallestRowHeight:function(){for(var e=0,t=0,i=this.rows.length;i>t;t++){var n=this.rows[t];e=Math.max(e,n._measureText(n.title,n.domNode).height)}return e},_setTallestRowHeight:function(e){this._tallestRowHeight!==e&&(this._tallestRowHeight=e,this._triggerLayout())},addRow:function(e){this.rows.push(e),e._parentColumn=this,this._updateContentWidth(),this._parentPicker&&this._parentPicker._updateColumnHeights(),this.selectedRow||(this.selectedRow=e),this._publish(e)},removeRow:function(e){var t=this.rows.indexOf(e);-1!==t&&(this.rows.splice(t,1),e._parentColumn=void 0,this._updateContentWidth(),this._parentPicker&&this._parentPicker._updateColumnHeights(),this.selectedRow===e&&(this.selectedRow=this.rows[0])),this._unpublish(e)},constants:{rowCount:{get:function(){return this.rows.length}},rows:void 0},properties:{selectedRow:{set:function(e){if(e){var t=this.rows.indexOf(e);if(-1===t)return;this.font=e.font,this.color=o.val(e.color,""),this._titleContainer.innerHTML=e.title,this._hasSizeDimensions()&&this._triggerLayout()}else this.font=void 0,this.color=void 0,this._titleContainer.innerHTML="",this._hasSizeDimensions()&&this._triggerLayout();return e},post:function(e){this.fireEvent("change",{column:this,rowIndex:this.rows.indexOf(e),row:e,value:e&&e.title})}}}})});