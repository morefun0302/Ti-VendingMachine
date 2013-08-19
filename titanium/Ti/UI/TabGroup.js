define(["Ti/_/declare","Ti/_/UI/SuperView","Ti/UI/View","Ti/UI","Ti/_/lang"],function(t,e,i,n,r){var o=require.is,a=n.FILL,s={post:"_updateTabsBackground"};return t("Ti.UI.TabGroup",e,{constructor:function(e){var o=this,s=(o.constants.tabsAtBottom=r.val(e&&e.tabsAtBottom,o.constants.tabsAtBottom),t(i,{declaredClass:"Ti.UI.TabBarContainer"}));o._tabBarContainer=new s({width:a,layout:n._LAYOUT_CONSTRAINING_HORIZONTAL}),o.tabHeight=75,o._tabContentContainer=n.createView({width:a,height:a}),o.layout=n._LAYOUT_CONSTRAINING_VERTICAL,o.tabs=[],o.tabsAtBottom=r.val(e&&e.tabsAtBottom,!0)},addTab:function(t){var e=this.tabs;e.push(t),t._setTabGroup(this),1===e.length?this.activeTab=t:this._tabBarContainer._add(this._createTabDivider()),this._tabBarContainer._add(t),this._updateTabBackground(t),this._publish(t)},_addTabContents:function(t){this._tabContentContainer._add(t)},_removeTabContents:function(t){this._tabContentContainer._remove(t)},removeTab:function(t){var e=this.tabs,i=this.tabs.indexOf(t);i>=0&&(e.splice(i,1),this._tabBarContainer.remove(t),t===this._activeTab&&this._activateTab(e[0]),this._unpublish(t))},_createTabDivider:function(){return n.createView({width:this.tabDividerWidth,height:a,backgroundColor:this.tabDividerColor})},close:function(){this._previousTab=null,e.prototype.close.call(this)},_getEventData:function(){var t=this.tabs,e=this._previousTab,i=this._activeTab;return{index:i&&t.indexOf(i),previousIndex:e&&t.indexOf(e),tab:i,previousTab:e}},_handleFocusEvent:function(){var t=this._previousTab,e=this._activeTab;t&&t._blur(),!this._focused&&this._opened&&(this.fireEvent("focus",this._getEventData()),e&&e._focus()),this._focused=1},_handleBlurEvent:function(t){if(t){for(var e,i=0,n=this.tabs.length;n>i;)e=this.tabs[i++],(2!==t||e===this._activeTab)&&e._blur();this._previousTab=void 0}this._focused&&this._opened&&this.fireEvent("blur",this._getEventData()),this._focused=0},_activateTab:function(t){var e=(this.tabs,this._activeTab);e!==t&&((this._previousTab=e)&&(e.active=!1,e._doBackground()),n.currentTab=this._activeTab=t,t.active=!0,this._updateTabsBackground())},_updateTabBackground:function(t){var e=t.active?"activeTab":"tabs";["","Focused","Disabled","Selected"].forEach(function(i){i="Background"+i,t["_default"+i+"Color"]=this[e+i+"Color"],t["_default"+i+"Image"]=this[e+i+"Image"]},this),t._doBackground()},_updateTabsBackground:function(){for(var t=this.tabs,e=0,i=t.length;i>e;)this._updateTabBackground(t[e++])},_updateDividers:function(){for(var t=this._tabBarContainer._children,e=1;t.length>e;e+=2){var i=t[e];i.width=this.tabDividerWidth,i.backgroundColor=this.tabDividerColor}},_defaultWidth:a,_defaultHeight:a,constants:{bubbleParent:!1},properties:{activeTab:{set:function(t){return o(t,"Number")&&(t=this.tabs[t]),!t in this.tabs?void 0:t},post:function(t){r.isDef(t)&&this._activateTab(t)}},tabs:{set:function(t){if(o(t,"Array")){var e,i=this._tabBarContainer;if(i._removeAllChildren(),t.length)for(e=0;t.length>e;e++)t[e]._setTabGroup(this),0==e&&this._activateTab(this.activeTab=t[e]),this._publish(t[e]),e&&i._add(this._createTabDivider()),i._add(t[e]);return t}},post:"_updateTabsBackground"},tabsAtBottom:{set:function(t,e){if(t!==e){var i=this._tabContentContainer,n=this._tabBarContainer;this._activeTab&&this._activeTab._setNavBarAtTop(t),this._remove(i),this._remove(n),t?(this._add(i),this._add(n)):(this._add(n),this._add(i))}return t}},activeTabBackgroundColor:{post:"_updateTabsBackground",value:"#fff"},activeTabBackgroundImage:s,activeTabBackgroundDisabledColor:{post:"_updateTabsBackground",value:"#888"},activeTabBackgroundDisabledImage:s,activeTabBackgroundFocusedColor:{post:"_updateTabsBackground",value:"#ccc"},activeTabBackgroundFocusedImage:s,activeTabBackgroundSelectedColor:{post:"_updateTabsBackground",value:"#ddd"},activeTabBackgroundSelectedImage:s,tabsBackgroundColor:{post:"_updateTabsBackground",value:"#aaa"},tabsBackgroundImage:s,tabsBackgroundDisabledColor:{post:"_updateTabsBackground",value:"#666"},tabsBackgroundDisabledImage:s,tabsBackgroundFocusedColor:{post:"_updateTabsBackground",value:"#ccc"},tabsBackgroundFocusedImage:s,tabsBackgroundSelectedColor:{post:"_updateTabsBackground",value:"#ddd"},tabsBackgroundSelectedImage:s,tabDividerColor:{post:"_updateDividers",value:"#555"},tabDividerWidth:{post:"_updateDividers",value:1},tabHeight:{set:function(t){return this._tabBarContainer.height=t,t}}}})});