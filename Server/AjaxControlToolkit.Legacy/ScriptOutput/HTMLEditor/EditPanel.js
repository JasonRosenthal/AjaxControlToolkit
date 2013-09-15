Type.registerNamespace("Sys.Extended.UI.HTMLEditor");Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel=null;Sys.Extended.UI.HTMLEditor.EditPanel=function(e){var d=true,b=null,c=false,a=this;Sys.Extended.UI.HTMLEditor.EditPanel.initializeBase(a,[e]);a._loaded=c;a._eAfter=b;a._toolbars=b;a._modePanels=b;a._contentChangedElement=b;a._contentElement=b;a._contentForceElement=b;a._activeModeElement=b;a._suppressTabInDesignMode=c;a._keyboardEnabled=d;a._noPaste=c;a._hotkeys=b;a._showAnchors=c;a._showPlaceHolders=c;a._startEnd=d;a._relativeImages=d;a._documentCssPath=b;a._designPanelCssPath=b;a._imagePath_1x1=b;a._imagePath_flash=b;a._imagePath_media=b;a._imagePath_anchor=b;a._imagePath_placeHolder=b;a._autofocus=d;a._initialCleanUp=c;a._noScript=c;a._noUnicode=c;a._cachedToolbarIds=b;a._contentPrepared=c;a._activeMode=b;a._pageRequestManager=b;a._formOnSubmitSaved=b;a._validators=b;a._app_onload$delegate=Function.createDelegate(a,a._app_onload);a._onsubmit$delegate=Function.createDelegate(a,a._onsubmit);a._disposed=d};Sys.Extended.UI.HTMLEditor.EditPanel.prototype={get_relativeImages:function(){return this._relativeImages},set_relativeImages:function(a){this._relativeImages=a;this._loaded&&this.raisePropertyChanged("relativeImages")},get_startEnd:function(){return this._startEnd},set_startEnd:function(a){this._startEnd=a;this._loaded&&this.raisePropertyChanged("startEnd")},get_showPlaceHolders:function(){return this._showPlaceHolders},set_showPlaceHolders:function(a){this._showPlaceHolders=a;this._loaded&&this.raisePropertyChanged("showPlaceHolders")},get_showAnchors:function(){return this._showAnchors},set_showAnchors:function(a){this._showAnchors=a;this._loaded&&this.raisePropertyChanged("showAnchors")},get_hotkeys:function(){return this._hotkeys},set_hotkeys:function(a){this._hotkeys=a;this._loaded&&this.raisePropertyChanged("noPaste")},get_noPaste:function(){return this._noPaste},set_noPaste:function(a){this._noPaste=a;this._loaded&&this.raisePropertyChanged("noPaste")},get_suppressTabInDesignMode:function(){return this._suppressTabInDesignMode},set_suppressTabInDesignMode:function(a){this._suppressTabInDesignMode=a;this._loaded&&this.raisePropertyChanged("suppressTabInDesignMode")},get_keyboardEnabled:function(){return this._keyboardEnabled},set_keyboardEnabled:function(a){this._keyboardEnabled=a;this._loaded&&this.raisePropertyChanged("keyboardEnabled")},get_noUnicode:function(){return this._noUnicode},set_noUnicode:function(a){this._noUnicode=a;this._loaded&&this.raisePropertyChanged("noUnicode")},get_noScript:function(){return this._noScript},set_noScript:function(a){this._noScript=a;this._loaded&&this.raisePropertyChanged("noScript")},get_initialCleanUp:function(){return this._initialCleanUp},set_initialCleanUp:function(a){this._initialCleanUp=a;this._loaded&&this.raisePropertyChanged("initialCleanUp")},get_imagePath_1x1:function(){return this._imagePath_1x1},set_imagePath_1x1:function(a){this._imagePath_1x1=a},get_imagePath_flash:function(){return this._imagePath_flash},set_imagePath_flash:function(a){this._imagePath_flash=a},get_imagePath_media:function(){return this._imagePath_media},set_imagePath_media:function(a){this._imagePath_media=a},get_imagePath_anchor:function(){return this._imagePath_anchor},set_imagePath_anchor:function(a){this._imagePath_anchor=a},get_imagePath_placeHolder:function(){return this._imagePath_placeHolder},set_imagePath_placeHolder:function(a){this._imagePath_placeHolder=a},get_documentCssPath:function(){return this._documentCssPath},set_documentCssPath:function(a){this._documentCssPath=a;this._loaded&&this.raisePropertyChanged("documentCssPath")},get_designPanelCssPath:function(){return this._designPanelCssPath},set_designPanelCssPath:function(a){this._designPanelCssPath=a;this._loaded&&this.raisePropertyChanged("designPanelCssPath")},get_autofocus:function(){return this._autofocus},set_autofocus:function(a){this._autofocus=a;this._loaded&&this.raisePropertyChanged("autofocus")},get_content:function(){var a=this;return a._activeMode==null?a.get_contentElement()!=null?a._getContentForPostback():"":a.getContent()},set_content:function(b){var a=this;if(!a.get_isInitialized()||!a._loaded){if(a.get_contentElement()!=null)a.get_contentElement().value=b.replace(/\"/g,"&quot;");return}a.setContent(b);a._contentPrepared=false;a._loaded&&a.raisePropertyChanged("content")},get_activeMode:function(){return this._activeMode==null?Sys.Extended.UI.HTMLEditor.ActiveModeType.Design:this._activeMode},set_activeMode:function(b){var a=this;if(!Sys.Extended.UI.HTMLEditor.ActiveModeType_checkValue(b))throw Error.argumentOutOfRange("value, function: Sys.Extended.UI.HTMLEditor.EditPanel.set_activeMode");var c=a._activeMode,d=true;if(a._loaded&&c!=null&&c!=b){var e=new Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs(c,b,a);a.raiseBeforeActiveModeChanged(e);a._eAfter=new Sys.Extended.UI.HTMLEditor.ActiveModeChangedArgs(c,b,a);d=a._setMode(b)}else a._activeMode=b;a.get_activeModeElement().value=b;return d},get_contentChangedElement:function(){return this._contentChangedElement},set_contentChangedElement:function(a){this._contentChangedElement=a},get_contentElement:function(){return this._contentElement},set_contentElement:function(a){this._contentElement=a},get_contentForceElement:function(){return this._contentForceElement},set_contentForceElement:function(a){this._contentForceElement=a},get_activeModeElement:function(){return this._activeModeElement},set_activeModeElement:function(a){this._activeModeElement=a},setCancelOnPostback:function(){if(this._loaded)this.get_contentForceElement().value=""},setAcceptOnPostback:function(){if(this._loaded)this.get_contentForceElement().value="1"},get_toolbars:function(){if(this._toolbars==null)this._toolbars=[];return this._toolbars},set_toolbars:function(a){this.get_toolbars().push(a)},get_toolbarIds:function(){},set_toolbarIds:function(c){if(!this.get_isInitialized()){this._cachedToolbarIds=c;return}for(var b=c.split(";"),a=0;a<b.length;a++)b[a].length>0&&this.set_toolbars($find(b[a]))},get_modePanels:function(){if(this._modePanels==null)this._modePanels=[];return this._modePanels},set_modePanel:function(a){this.get_modePanels().push(a)},get_modePanelIds:function(){},set_modePanelIds:function(c){for(var b=c.split(";"),a=0;a<b.length;a++)this.set_modePanel($find(b[a]))},add_focused:function(a){this.get_events().addHandler("focused",a)},remove_focused:function(a){this.get_events().removeHandler("focused",a)},raiseFocused:function(b){var a=this.get_events().getHandler("focused");a&&a(this,b)},add_activeModeChanged:function(a){this.get_events().addHandler("activeModeChanged",a)},remove_activeModeChanged:function(a){this.get_events().removeHandler("activeModeChanged",a)},raiseActiveModeChanged:function(b){var a=this.get_events().getHandler("activeModeChanged");a&&a(this,b)},add_beforeActiveModeChanged:function(a){this.get_events().addHandler("beforeActiveModeChanged",a)},remove_beforeActiveModeChanged:function(a){this.get_events().removeHandler("beforeActiveModeChanged",a)},raiseBeforeActiveModeChanged:function(b){var a=this.get_events().getHandler("beforeActiveModeChanged");a&&a(this,b)},get_activePanel:function(){var a=this.get_modePanels()[this.get_activeMode()];if(a==null||typeof a=="undefined")throw Error.argumentOutOfRange("activeMode, function: Sys.Extended.UI.HTMLEditor.EditPanel.get_activePanel");return a},initialize:function(){var a=this;a.__appLoaded__=false;Sys.Extended.UI.HTMLEditor.EditPanel.callBaseMethod(a,"initialize");a._disposed=false;Sys.Application.add_load(a._app_onload$delegate);if(Sys&&Sys.WebForms&&Sys.WebForms.PageRequestManager){a._pageRequestManager=Sys.WebForms.PageRequestManager.getInstance();if(a._pageRequestManager){a._partialUpdateEndRequestHandler=Function.createDelegate(a,a._partialUpdateEndRequest);a._pageRequestManager.add_endRequest(a._partialUpdateEndRequestHandler);a._invokingRequestHandler=Function.createDelegate(a,a._invokingRequest);Sys.Net.WebRequestManager.add_invokingRequest(a._invokingRequestHandler);a._completedRequestHandler=Function.createDelegate(a,a._completedRequest);Sys.Net.WebRequestManager.add_completedRequest(a._completedRequestHandler)}}Sys.Extended.UI.HTMLEditor.addFormOnSubmit(a._onsubmit$delegate,a)},dispose:function(){var b=null,a=this;a._loaded=false;a._disposed=true;if(a._pageRequestManager){if(a._invokingRequestHandler){a._pageRequestManager.remove_endRequest(a._partialUpdateEndRequestHandler);a._partialUpdateEndRequestHandler=b;Sys.Net.WebRequestManager.remove_invokingRequest(a._invokingRequestHandler);a._invokingRequestHandler=b;Sys.Net.WebRequestManager.remove_completedRequest(a._completedRequestHandler);a._completedRequestHandler=b}a._pageRequestManager=b}Sys.Extended.UI.HTMLEditor.removeFormOnSubmit(a._onsubmit$delegate);Sys.Application.remove_load(a._app_onload$delegate);a.disableToolbars();Sys.Extended.UI.HTMLEditor.EditPanel.callBaseMethod(a,"dispose")},_onsubmit:function(){var a=this;if(!a._contentPrepared){a._prepareContentForPostback(a.get_content());a._contentPrepared=true}return true},_invokingRequest:function(f,d){var a=this;if(a._contentPrepared)return;var c=d.get_webRequest(),b=c.get_body(),e=new RegExp("([\\?&])("+a.get_contentElement().name+"=)([^&$]*)([&$])","g");a._prepareContentForPostback(a.get_content());b=b.replace(e,"$1$2"+escape(a.get_contentElement().value)+"$4");a._contentPrepared=true;c.set_body(b)},_completedRequest:function(){this._contentPrepared=false},_partialUpdateEndRequest:function(){var a=this;a._contentPrepared=false;if(Sys.Extended.UI.HTMLEditor.isIE&&a.__blured){a.__blured=false;a.get_activePanel()._focus()}},_app_onload:function(){var c=null,d=true,a=this;if(a.__appLoaded__)return;a.__appLoaded__=d;if(a._disposed)return;var l=a;a._loaded=d;a.set_activeMode(parseInt(a.get_activeModeElement().value));if(a._cachedToolbarIds!=c){a.set_toolbarIds(a._cachedToolbarIds);a._cachedToolbarIds=c}a._validators=a.get_modePanels()[Sys.Extended.UI.HTMLEditor.ActiveModeType.Html].get_element().Validators;a._shouldResize=false;if(Sys.Extended.UI.HTMLEditor.isIE&&document.compatMode!="BackCompat")a._shouldResize=d;if(a._shouldResize){var f=a.get_modePanels(),e=f[Sys.Extended.UI.HTMLEditor.ActiveModeType.Design];if(e==c)e=f[Sys.Extended.UI.HTMLEditor.ActiveModeType.Preview];var i=f[Sys.Extended.UI.HTMLEditor.ActiveModeType.Html];if(e!=c&&i!=c){var b=e.get_element();b.style.display="";var g=b.offsetHeight,j=false,h;if(g==0){j=d;h=Sys.Extended.UI.HTMLEditor.setElementVisibility(b.parentNode);g=b.offsetHeight}i.get_element().style.height=g+"px";if(j){Sys.Extended.UI.HTMLEditor.restoreElementVisibility(h);delete h}b.style.display="none"}}var k=a.get_contentElement().value.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&");a.setContent(a._initialCleanUp?Sys.Extended.UI.HTMLEditor.cleanUp(k.replace(/[\n\r]+/g," ")):k);a.setAcceptOnPostback()},_setActive:function(){var a=this;for(var b=0;b<a.get_toolbars().length;b++)a.get_toolbars()[b].set_activeEditPanel(a,true);if(a._eAfter!=null){a.raisePropertyChanged("activeMode");a.raiseActiveModeChanged(a._eAfter);a._eAfter=null}},_focused:function(c){var a=this;if(!(typeof c!="undefined"&&c))for(var b=0;b<a.get_toolbars().length;b++)a.get_toolbars()[b].set_activeEditPanel(a);Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel=a},_really_focused:function(){this._focused();this.raiseFocused(new Sys.EventArgs)},updateToolbar:function(){this._focused()},getContent:function(){var a=this.get_activePanel().get_content().replace(/<\/?html(?=\s|>)(?:[^>]*?)>/gi,"").replace(/<\/?head(?=\s|>)(?:[^>]*?)>/gi,"").replace(/<\/?body(?=\s|>)(?:[^>]*?)>/gi,"").replace(/^([\n\r]+)/,"").replace(/([\n\r]+)$/,"");if(!Sys.Extended.UI.HTMLEditor.isIE)a=a.replace(/^<br\s*[\/]*>$/,"");return a},setContent:function(c){var b=this,a=c;if(b.get_noScript())a=a.replace(/(<script(?:[^>]*?)>(?:[^<]*?)<\/script(?:[^>]*?)>)/ig,"");a=a.replace(/<\/?html(?=\s|>)(?:[^>]*?)>/gi,"").replace(/<\/?head(?=\s|>)(?:[^>]*?)>/gi,"").replace(/<\/?body(?=\s|>)(?:[^>]*?)>/gi,"").replace(/^([\n\r]+)/,"").replace(/([\n\r]+)$/,"");b._prepareContentForPostback(a);b.get_activePanel().set_content(a);b._validate(null,a)},_validate:function(d,c){var a=this._validators;if(a!=null&&typeof a!="undefined"){this._contentForValidation=c;try{for(var b=0;b<a.length;b++)window.ValidatorValidate(a[b],null,d);window.ValidatorUpdateIsValid()}catch(e){}this._contentForValidation=null}},_prepareContentForPostback:function(a){this.get_contentElement().value=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},_getContentForPostback:function(){return this.get_contentElement().value.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},_setMode:function(b){var a=this,g=a.get_activePanel();if(!g._activated){var k=a;setTimeout(function(){k._setMode(b)},10);return false}var d=a.get_content();if(Sys.Extended.UI.HTMLEditor.isOpera)d=d.replace(/\r/ig,"");if(a._shouldResize&&b==Sys.Extended.UI.HTMLEditor.ActiveModeType.Html){var h=a.get_activePanel(),i=a.get_modePanels()[Sys.Extended.UI.HTMLEditor.ActiveModeType.Html];if(h!=null&&i!=null){var c=h.get_element(),e=c.offsetHeight,j=false,f;if(e==0){j=true;f=Sys.Extended.UI.HTMLEditor.setElementVisibility(c.parentNode);e=c.offsetHeight}i.get_element().style.height=e+"px";if(j){Sys.Extended.UI.HTMLEditor.restoreElementVisibility(f);delete f}}}a.disableToolbars(b);g._deactivate();a._activeMode=b;a.setContent(d);return true},disableToolbars:function(c){for(var a=0;a<this.get_toolbars().length;a++){var b=this.get_toolbars()[a];b._loaded&&b.disable(c)}},openWait:function(){},closeWait:function(){}};Sys.Extended.UI.HTMLEditor.EditPanel.registerClass("Sys.Extended.UI.HTMLEditor.EditPanel",Sys.UI.Control);