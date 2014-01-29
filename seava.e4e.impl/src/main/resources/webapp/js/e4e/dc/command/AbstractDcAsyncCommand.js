/**
 * DNet eBusiness Suite. Copyright: Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
/**
 * Abstract base class for asynchronous commands. An asynchronous command is one
 * which involves an AJAX call so that the result is not available immediately.
 */
Ext.define("e4e.dc.command.AbstractDcAsyncCommand", {

	extend : "e4e.dc.command.AbstractDcCommand",

	onAjaxSuccess : function(response, options) {
		Ext.Msg.hide();
	},

	onAjaxFailure : function(response, options) {
		this.dc.showAjaxErrors(response, options);
	}

});