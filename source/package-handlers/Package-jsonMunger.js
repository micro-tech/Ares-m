/* global async, ares */

/**
 * Manages the content of 'package.json' files
 * 
 * @class Ares.PackageMunger
 * @augments enyo.Component
 */





// Copyright 2016, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "Ares.Package-jsonMunger",
	kind: "enyo.Component",
	debug: true,
	events: {
		
	},
	create: function() {
		ares.setupTraceLogger(this);		// Setup this.trace() function according to this.debug value
		this.inherited(arguments);
	},
});
