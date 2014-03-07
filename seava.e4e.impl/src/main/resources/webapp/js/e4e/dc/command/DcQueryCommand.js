/**
 * DNet eBusiness Suite. Copyright: Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define("e4e.dc.command.DcQueryCommand", {
	extend : "e4e.dc.command.AbstractDcAsyncCommand",

	dcApiMethod : e4e.dc.DcActionsFactory.RUN_QUERY,

	beforeExecute : function() {
		var dc = this.dc;
		if (!dc.filter.isValid()) {
			this.dc.error(Main.msg.INVALID_FILTER, "msg");
			return;
		}
	},

	onExecute : function(options) {
		var dc = this.dc;
		var _p = dc.buildRequestParamsForQuery();
		Ext.apply(dc.store.proxy.extraParams, _p);
		dc.store.load({
			page : 1,
			scope : dc
		});
	},

	isActionAllowed : function() {
		if (e4e.dc.DcActionsStateManager.isQueryDisabled(this.dc)) {
			this.dc.warning(Main.msg.DC_QUERY_NOT_ALLOWED, "msg");
			return false;
		}
		return true;
	}
});
