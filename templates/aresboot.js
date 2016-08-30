		/**
		*
		*  loader for the AresM
		*
		*/
		enyo.aresload = function(depends, callback) {
			runtimeLoadQueue.push(arguments);
			if (!enyo.runtimeLoading) {
				enyo.runtimeLoading = true;
				runtimeLoad();
			}
		};