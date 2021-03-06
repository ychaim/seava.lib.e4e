/**
 * DNet eBusiness Suite. Copyright: Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
/**
 * Base grid used for data-control list views.
 */
Ext.define("e4e.dc.view.AbstractDc_Grid", {
	extend : "Ext.grid.Panel",

	mixins : {
		elemBuilder : "e4e.base.Abstract_View",
		dcViewSupport : "e4e.dc.view.AbstractDc_View"
	},

	// **************** Properties *****************

	/**
	 * Columns definition map
	 */
	_columns_ : null,

	/**
	 * Flag to switch on/off advanced sort on multiple columns.
	 */
	_noSort_ : false,

	/**
	 * Flag to switch on/off advanced filter.
	 */
	_noFilter_ : false,

	/**
	 * Flag to switch on/off data export.
	 */
	_noExport_ : false,

	/**
	 * Flag to switch on/off data import.
	 */
	_noImport_ : false,

	/**
	 * Flag to switch on/off data printing.
	 */
	_noPrint_ : false,

	/**
	 * Flag to switch on/off chart.
	 */
	_noChart_ : true,

	/**
	 * Flag to switch on/off custom layout management.
	 */
	_noLayoutCfg_ : false,

	/**
	 * Flag to switch on/off paging toolbar
	 * 
	 */
	_noPaginator_ : false,

	/**
	 * Data export window.
	 */
	_exportWindow_ : null,

	/**
	 * Data print window.
	 */
	_printWindow_ : null,

	/**
	 * Data import window.
	 */
	_importWindow_ : null,

	/**
	 * Custom views management window.
	 */
	_layoutWindow_ : null,

	/**
	 * Title to be used in the dynamically generated reports.
	 */
	_printTitle_ : null,

	// **************** Public API *****************

	_defineColumns_ : function() {
	},

	_beforeDefineColumns_ : function() {
		return true;
	},

	_afterDefineColumns_ : function() {
	},

	/**
	 * Open the data-import window
	 */
	_doImport_ : function() {
		if (this._importWindow_ == null) {
			this._importWindow_ = new e4e.base.FileUploadWindow(
					{
						_handler_ : "dsCsvImport",
						_fields_ : {
							separator : {
								xtype : "combo",
								store : [ ";", "," ],
								value : ",",
								fieldLabel : Main.translate("cmp",
										"csv_cfg_separator"),
								allowBlank : false,
								labelSeparator : "*"
							},
							quoteChar : {
								xtype : "combo",
								store : [ '"' ],
								value : '"',
								fieldLabel : Main.translate("cmp",
										"csv_cfg_quote"),
								allowBlank : false,
								labelSeparator : "*"
							},
							dsName : {
								xtype : "hidden",
								value : this._controller_.dsName
							}
						},
						_succesCallbackScope_ : this,
						_succesCallbackFn_ : function() {
							this._controller_.doQuery();
						}
					});
		}
		this._importWindow_.show();
	},

	/**
	 * Open the data-export window
	 */
	_doExport_ : function() {
		if (this._exportWindow_ == null) {
			this._exportWindow_ = new e4e.dc.tools.DcExportWindow({
				_grid_ : this,
				closeAction : "hide"
			});
		}
		this._exportWindow_.show();
	},

	/**
	 * Open the data-print window
	 */
	_doPrint_ : function() {
		if (this._printWindow_ == null) {
			this._printWindow_ = new e4e.dc.tools.DcPrintWindow({
				_grid_ : this,
				closeAction : "hide"
			});
		}
		this._printWindow_.show();
	},

	/**
	 * Open the chart window
	 */
	_doChart_ : function() {
		if (this._chartWindow_ == null) {
			this._chartWindow_ = new e4e.dc.tools.DcChartWindow({
				_grid_ : this,
				closeAction : "hide"
			});
		}
		this._chartWindow_.show();
	},

	/**
	 * Show the advanced sort window
	 */
	_doSort_ : function() {
		new e4e.dc.tools.DcSortWindow({
			_grid_ : this
		}).show();
	},

	/**
	 * Show the advanced filter window
	 */
	_doFilter_ : function() {
		new e4e.dc.tools.DcFilterWindow({
			_grid_ : this
		}).show();
	},

	/**
	 * Show the custom views management window
	 */
	_doLayoutManager_ : function() {
		if (this._layoutWindow_ == null) {
			this._layoutWindow_ = new e4e.dc.tools.DcGridLayoutWindow({
				_grid_ : this
			});
		}
		this._layoutWindow_.show();
	},

	// **************** Defaults and overrides *****************

	buttonAlign : "left",
	forceFit : false,
	autoScroll : false,
	scroll : "both",
	border : true,
	frame : true,
	deferRowRender : true,
	// enableLocking : true,
	loadMask : {
		msg : Main.translate("msg", "loading") + "..."
	},
	viewConfig : {
		loadMask : {
			msg : Main.translate("msg", "loading") + "..."
		},
		enableTextSelection : true,
		stripeRows : true,
		emptyText : Main.translate("msg", "grid_emptytext")
	},

	/**
	 * Redirect the default state management to our implementation.
	 */
	getState : function() {
		return this._getViewState_();
	},

	/**
	 * Redirect the default state management to our implementation.
	 */
	applyState : function(state) {
		return this._applyViewState_(state);
	},

	beforeDestroy : function() {
		// call the contributed helpers from mixins
		this._beforeDestroyDNetDcView_();
		this._beforeDestroyDNetView_();
		this.callParent(arguments);
	},

	// **************** Private methods *****************

	_initDcGrid_ : function() {

		this._elems_ = new Ext.util.MixedCollection();
		this._columns_ = new Ext.util.MixedCollection();

		this._defineDefaultElements_();

		this._startDefine_();

		if (this._beforeDefineColumns_() !== false) {
			this._defineColumns_();
			this._afterDefineColumns_();
		}

		if (this._beforeDefineElements_() !== false) {
			this._defineElements_();
			this._afterDefineElements_();
		}

		this._columns_.each(this._postProcessColumn_, this);
		this._endDefine_();
	},

	/**
	 * Create the grid configuration object with the usual properties which are
	 * likely to be required by any subclass
	 */
	_createDefaultGridConfig_ : function() {
		var cfg = {
			store : this._controller_.store,
			columns : this._columns_.getRange()
		};

		if (!this._noPaginator_) {
			cfg.bbar = {
				xtype : "pagingtoolbar",
				store : this._controller_.store,
				displayInfo : true
			}
			var bbitems = [];
			this._buildToolbox_(bbitems);

			if (bbitems.length > 0) {
				cfg["bbar"]["items"] = {
					text : "Tools",
					menu : bbitems
				};
			}
		} else {
			this._noExport_ = true;
			this._noPrint_ = true;
			this._noImport_ = true;
			this._noSort_ = true;
			this._noLayoutCfg_ = true;

		}
		return cfg;
	},

	_gotoFirstNavigationItem_ : function() {
		var v = this.getView();
		if (this._controller_.record != null) {
			v.focusRow(this._controller_.record);
		} else {
			this._controller_.restoreSelection();
			if (this._controller_.record != null) {
				v.focusRow(this._controller_.record);
			} else {
				v.focus();
			}
		}
	},

	/**
	 * Handler for the data-control selectionChange event.
	 */
	_onController_selectionChange : function(evnt) {
		if (evnt.eOpts && evnt.eOpts.fromGrid === true
				&& evnt.eOpts.grid === this) {
			return;
		}
		var s = evnt.dc.getSelectedRecords();
		if (s !== this.getSelectionModel().getSelection()) {
			this.getSelectionModel().select(s, false, true);
		}
	},

	/**
	 * Handler for the data-control's store load event.
	 */
	_onStore_load_ : function(store, records, successful, eOpts) {
		if (!this._noExport_) {
			if (store.getCount() > 0) {
				this._get_("_btnExport_").enable();
			} else {
				this._get_("_btnExport_").disable();
			}
		}
		if (!this._noPrint_) {
			if (store.getCount() > 0) {
				this._get_("_btnPrint_").enable();
			} else {
				this._get_("_btnPrint_").disable();
			}
		}
		if (!this._noChart_) {
			if (store.getCount() > 0) {
				this._get_("_btnChart_").enable();
			} else {
				this._get_("_btnChart_").disable();
			}
		}
		return;
	},

	/**
	 * Build default tools
	 */
	_buildToolbox_ : function(bbitems) {
		if (!this._noLayoutCfg_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnLayout_"));
		}

		if (!this._noSort_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnSort_"));
		}
		if (!this._noFilter_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnFilter_"));
		}
		if (!this._noImport_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnImport_"));
		}

		if (!this._noExport_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnExport_"));
		}

		if (!this._noPrint_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnPrint_"));
		}

		if (!this._noChart_) {
			bbitems.push("-");
			bbitems.push(this._elems_.get("_btnChart_"));
		}
	},

	_getBtnImportCfg_ : function() {
		return c = {
			id : Ext.id(),
			text : Main.translate("dcvgrid", "imp__tlp"),
			handler : this._doImport_,
			scope : this
		};
	},

	_getBtnExportCfg_ : function() {
		return c = {
			id : Ext.id(),
			disabled : true,
			text : Main.translate("dcvgrid", "exp__tlp"),
			handler : this._doExport_,
			scope : this
		};
	},

	_getBtnFilterCfg_ : function() {
		return c = {
			id : Ext.id(),
			text : Main.translate("dcvgrid", "filter__tlp"),
			handler : this._doFilter_,
			scope : this
		};
	},

	_getBtnSortCfg_ : function() {
		return c = {
			id : Ext.id(),
			text : Main.translate("dcvgrid", "sort__tlp"),
			handler : this._doSort_,
			scope : this
		};
	},

	_getBtnPrintCfg_ : function() {
		return c = {
			id : Ext.id(),
			disabled : true,
			text : Main.translate("dcvgrid", "print__tlp"),
			handler : this._doPrint_,
			scope : this
		};
	},

	_getBtnChartCfg_ : function() {
		return c = {
			id : Ext.id(),
			disabled : true,
			text : Main.translate("dcvgrid", "chart__tlp"),
			handler : this._doChart_,
			scope : this
		};
	},

	_getBtnLayoutCfg_ : function() {
		return c = {
			id : Ext.id(),
			text : Main.translate("dcvgrid", "layout__tlp"),
			handler : this._doLayoutManager_,
			scope : this
		};
	},

	/**
	 * Define defaults elements
	 */
	_defineDefaultElements_ : function() {
		this._elems_.add("_btnExport_", this._getBtnExportCfg_());
		this._elems_.add("_btnPrint_", this._getBtnPrintCfg_());
		this._elems_.add("_btnImport_", this._getBtnImportCfg_());
		this._elems_.add("_btnSort_", this._getBtnSortCfg_());
		this._elems_.add("_btnFilter_", this._getBtnFilterCfg_());
		this._elems_.add("_btnLayout_", this._getBtnLayoutCfg_());
		this._elems_.add("_btnChart_", this._getBtnChartCfg_());
	},

	/**
	 * Specific implementation to read the grid columns view-state to be stored
	 * as a custom view.
	 */
	_getViewState_ : function() {
		var me = this;
		var state = null;
		var colStates = [];
		var cm = this.headerCt;
		var cols = cm.items.items;

		for (var i = 0, len = cols.length; i < len; i++) {
			var c = cols[i];
			colStates.push({
				n : c.name,
				h : c.hidden,
				w : c.width
			});
		}
		state = me.addPropertyToState(state, 'columns', colStates);
		return state;
	},

	/**
	 * Apply a view-state read by _getViewState_
	 */
	_applyViewState_ : function(state) {
		if (!this.rendered) {
			this.on("afterrender", this._applyViewStateAfterRender_, this, {
				single : true,
				state : state
			});
			return;
		}

		var sCols = state.columns;
		var cm = this.headerCt;
		var cols = cm.items.items;
		var col = null;

		for (var i = 0, slen = sCols.length; i < slen; i++) {
			var sCol = sCols[i];
			var colIndex = -1;

			for (var j = 0, len = cols.length; j < len; j++) {
				if (cols[j].name == sCol.n) {
					colIndex = j;
					col = cols[j];
					break;
				}
			}

			if (colIndex >= 0) {
				if (sCol.h) {
					col.hide();
				} else {
					col.show();
				}
				col.setWidth(sCol.w);
				if (colIndex != i) {
					col.move(colIndex, i);
				}
			}
		}
	},

	_applyViewStateAfterRender_ : function(cmp, eOpts) {
		this._applyViewState_(eOpts.state);
	},

	_selectionHandler_ : function(sm, selected, options) {
		var gridSel = this.getSelectionModel().getSelection();
		var ctrl = this._controller_;
		ctrl.setSelectedRecords(gridSel, {
			fromGrid : true,
			grid : this
		});
	},

	/**
	 * Postprocessor run to inject framework specific settings into the columns.
	 */
	_postProcessColumn_ : function(column, idx, len) {
		if (column.header == undefined) {
			Main.translateColumn(this._trl_, this._controller_._trl_, column);
		}
	}

});