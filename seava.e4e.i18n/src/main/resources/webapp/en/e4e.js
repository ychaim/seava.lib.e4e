Ext.ns("dnet");
dnet.Translation = {
	appmenuitem : {
		about__lbl: "About",
		appmenus__lbl: "Application menu",
		bookmark__lbl: "Bookmarks",
		calendar__lbl: "Calendar",
		changepswd__lbl: "Change password",
		client__lbl: "Client",
		clientmgmt__lbl: "Clients",
		company__lbl: "Company",
		dateformat__lbl: "Date formats",
		dateformatmask__lbl: "Date format masks",
		dbchangelog__lbl: "Database changelog",
		frameInspector__lbl: "Frame inspector",
		help__lbl: "Help",
		home__lbl: "Home",
		lang__lbl: "Language",
		lock__lbl: "Lock",
		login__lbl: "Authenticate",
		logout__lbl: "Logout",
		managebookmark__lbl: "Manage",
		myaccount__lbl: "My account",
		mysettings__lbl: "My settings",
		selectCompany__lbl: "Default company",
		session__lbl: "Session",
		sysds__lbl: "Data-sources",
		sysjob__lbl: "Jobs",
		sysparam__lbl: "Parameters",
		system__lbl: "System menus",
		theme__lbl: "Theme",
		theme_aqua__lbl: "Standard",
		theme_gray__lbl: "Gray",
		tools__lbl: "Tools",
		upload_imp__lbl: "Upload and import",
		user__lbl: "User",
		userprefs__lbl: "Preferences",
		version__lbl: "Version"
	},
	asgn : {
		btn_ok__lbl: "Ok",
		cancel__lbl: "Cancel",
		cancel__tlp: "Cancel changes and reload initial selection.",
		filter__lbl: "Filter",
		move_left__tlp: "Remove selected.",
		move_left_all__tlp: "Remove all.",
		move_right__tlp: "Add selected.",
		move_right_all__tlp: "Add all.",
		save__lbl: "Save",
		save__tlp: "Save changes.",
		select_filter_field__msg: "Select the field to filter."
	},
	changePswd : {
		btn: "Change password",
		nomatch: "The new password is not confirmed correctly. Re-enter `Confirm password` field.",
		pswd: "Current password",
		pswd1: "New password",
		pswd2: "Confirm password",
		success: "Password changed.<BR> Use the new password on next login.",
		title: "Change password"
	},
	cmp : {
		csv_cfg_encoding: "Character encoding",
		csv_cfg_quote: "Optionally enclosed by",
		csv_cfg_separator: "Field separator",
		dsName: "Data-source",
		keyshortcut_title: "Keyboard shortcuts",
		selcomp_companyCode: "Company",
		selcomp_title: "Select default company"
	},
	dcExp : {
		col_all: "All list columns",
		col_visible: "Visible columns",
		columns: "Columns",
		format: "Format",
		layout: "Layout",
		title: "Export data"
	},
	dcFilter : {
		apply__lbl: "Apply",
		apply__tlp: "Apply filter condition",
		clear__lbl: "Clear",
		clear__tlp: "Clear filter condition",
		copy__lbl: "Copy",
		copy__tlp: "Copy selected criteria",
		delete__lbl: "Remove",
		delete__tlp: "Remove selected criteria",
		field: "Field",
		new__lbl: "Add",
		new__tlp: "Add new filter criteria",
		op: "Field",
		title: "Advanced filter",
		val1: "Value 2",
		val2: "Value 1"
	},
	dcGridLayout : {
		apply__lbl: "Apply",
		apply__tlp: "Apply selected layout",
		cancel__lbl: "Cancel",
		cancel__tlp: "Cancel and close window",
		delete__lbl: "Delete",
		delete__tlp: "Delete",
		hideMine: "Hide mine",
		hideOther: "Hide other's",
		layout: "Layout",
		name: "Name",
		save__lbl: "Save",
		save__tlp: "Save changes",
		saveAs__lbl: "Save as",
		saveAs__tlp: "Save as...",
		title: "Predefined layouts"
	},
	dcImp : {
		desc: "Import files from a data-package located on server. <br> Specify the index file used for import. ",
		loc: "File location",
		success: "Import executed successfully",
		title: "Import data-package"
	},
	dcPrint : {
		format: "Format",
		layout: "Layout",
		title: "Print data"
	},
	dcvgrid : {
		btn_bulkedit_tlp: "Bulk update selected records",
		btn_perspective_tlp: "Manage custom layouts",
		btn_perspective_txt: "Layout",
		bulkedit_run: "Apply changes",
		bulkedit_title: "Bulk update",
		exp__lbl: "E",
		exp__tlp: "Export data",
		exp_btn: "Export",
		filter__lbl: "F",
		filter__tlp: "Advanced filter",
		imp__lbl: "I",
		imp__tlp: "Import data",
		imp_btn: "Import",
		imp_file: "File",
		imp_format: "Format",
		imp_notes: "The first line from the file is skipped. It is assumed to be the headers line.",
		imp_notes_lbl: "Notes",
		imp_run: "Run",
		imp_strgy: "Strategy",
		imp_strgy_bean: "Tehnical name( Fields in csv file have the same header as the grid data model - see export )",
		imp_strgy_pos: "Grid layout( Visible columns in grid match the fields in csv file in the same order )",
		imp_title: "Import data",
		layout__lbl: "L",
		layout__tlp: "Layout management",
		layout_applySelected: "Apply selected",
		layout_mylayouts: "Select existing layout",
		layout_name: "Save current layout as",
		layout_saveCurrent: "Save current",
		layout_title: "My layouts",
		print__lbl: "P",
		print__tlp: "Print data",
		sort__lbl: "S",
		sort__tlp: "Sort by multiple fields",
		sort_btn: "Sort",
		sort_run: "Apply",
		sort_title: "Sort by multiple fields",
		upd__lbl: "U",
		upd__tlp: "Bulk update"
	},
	ds : {
		active: "Active",
		clientId: "Client",
		code: "Code",
		createdAt: "Created at",
		createdBy: "Created by",
		description: "Description",
		fld: "Field",
		id: "ID",
		modifiedAt: "Modified at",
		modifiedBy: "Modified by",
		name: "Name",
		notes: "Notes",
		refid: "Ref-ID",
		title: "Title",
		valid: "Valid",
		validAt: "Valid at",
		validFrom: "Valid from",
		validTo: "Valid to",
		version: "Version"
	},
	keyshortcut : {
		desc: "Actions are executed in the context of the focused data-block view, or in the context of the main data-block",
		doCancel: "Cancel changes",
		doClearQuery: "Clear filter criteria",
		doCopy: "Create a copy of the current record",
		doDelete: "Delete selected records",
		doEditIn: "Enter edit mode for the current record",
		doEditOut: "Leave edit mode",
		doEnterQuery: "Focus the filter view to enter query criteria",
		doNew: "Create new record",
		doQuery: "Execute query",
		doSave: "Save changes",
		nextPage: "Load next data page",
		nextRec: "Go to next record",
		prevPage: "Load previous data page",
		prevRec: "Go to previous record"
	},
	login : {
		btn: "Login",
		client: "Client",
		lang: "Language",
		pswd: "Password",
		title: "Authentication",
		user: "User"
	},
	msg : {
		AT_FIRST_PAGE: "At first page.",
		AT_FIRST_RECORD: "At first available record.",
		AT_LAST_PAGE: "At last page.",
		AT_LAST_RECORD: "At last available record.",
		DC_COPY_NOT_ALLOWED: "Is not allowed to copy a record.",
		DC_DELETE_NOT_ALLOWED: "Delete is not allowed in this context.",
		DC_EDIT_OUT_NOT_ALLOWED: "Save or cancel changes before leaving editor.",
		DC_NEW_NOT_ALLOWED: "Is not allowed to create new record.",
		DC_QUERY_NOT_ALLOWED: "Is not allowed to query for data.",
		DC_RECORD_CHANGE_NOT_ALLOWED: "Is not allowed to change the current record.",
		DC_RELOAD_RECORD_NOT_ALLOWED: "Save or cancel changes before reload record.",
		DC_SAVE_NOT_ALLOWED: "Is not allowed to save changes.",
		DIRTY_DATA_FOUND: "Unsaved changes found. Save your changes or discard them.",
		DIRTY_DATA_FOUND: "Unsaved changes found. Save your changes or discard them.",
		INVALID_FILTER: "Filter contains invalid data. Please fix the errors then try again.",
		INVALID_FORM: "Form contains invalid data. Please fix the errors then try again.",
		NO_CURRENT_RECORD: "There is no current record to perform the requested action.",
		NO_SELECTED_RECORDS: "There are no selected records to perform the requested action.",
		PARENT_RECORD_NEW: "Parent record is new. Save or discard changes then try again.",
		bool_false: "No",
		bool_true: "Yes",
		dc_confirm_action: "Confirm action",
		dc_confirm_delete_selection: "Do you really want to delete the selected records? ",
		dirty_data_found: "Unsaved changes found. Save your changes or discard them.",
		dirty_data_on_frame_close: "Frame contains un-saved changes which will be lost. \n Would you like to close frame anyway? ",
		grid_emptytext: "No records found to match the specified selection criteria.",
		initialize: "Initializing",
		loading: "Loading",
		no_current_record: "No current record",
		no_current_record_for_report: "There is no current record.<br> Cannot call report `{1}` without a current record which must provide  values for the report parameters.",
		preferences_wdw: "Preferences",
		remember_view_state: "Remember view state",
		saving: "Saving data...",
		upload_btn: "Upload",
		upload_file: "File",
		upload_name: "Name",
		upload_title: "Upload file",
		uploading: "Uploading...",
		valid_not_null: "cannot be empty",
		working: "Working..."
	},
	tlbitem : {
		autoload__lbl: "Auto",
		autoload__tlp: "Toogle auto-load mode (Load data automatically when parent record is changed)",
		back__lbl: "Back",
		back__tlp: "Back to previous canvas",
		cancel__lbl: "Cancel",
		cancel__tlp: "Cancel all changes",
		clear_query__lbl: "Clear filter",
		clear_query__tlp: "Clear filter",
		close__lbl: "Close",
		close__tlp: "Close",
		copy__lbl: "Copy",
		copy__tlp: "Create a copy of the current record",
		delete__lbl: "Delete",
		delete__tlp: "Delete selected records",
		edit__lbl: "Edit",
		edit__tlp: "Toogle edit mode for the current record",
		enter_query__lbl: "Set filter",
		enter_query__tlp: "Enter query criteria",
		load__lbl: "Load",
		load__tlp: "Load records from database according to specified filter",
		new__lbl: "New",
		new__tlp: "Create new record",
		next_rec__lbl: "Next",
		next_rec__tlp: "Go to next selected record or next available record if no selection",
		ok__lbl: "OK",
		ok__tlp: "OK",
		prev_rec__lbl: "Previous",
		prev_rec__tlp: "Go to previous selected record or previous available record if no selection",
		reload_page__lbl: "Reload page",
		reload_page__tlp: "Reload records from current page",
		reload_rec__lbl: "Reload record",
		reload_rec__tlp: "Reload current record",
		save__lbl: "Save",
		save__tlp: "Save changes"
	}
};
