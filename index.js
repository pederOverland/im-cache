var _ = require('underscore');
(function () {
	var timers, objects;
	timers = {};
	objects = {};
	module.exports = {
		set: function (key, data, timeout) {
			objects[key] = data;
			clearTimeout(timers[key]);

			if (typeof (timeout) == "number") {
				timers[key] = setTimeout(function () {
					delete objects[key];
				}, timeout);
			}
		},
		get: function (key) {
			return objects[key];
		},
		remove: function (key) {
			clearTimeout(timers[key]);
			var obj = objects[key];
			delete objects[key];
			return obj;
		},
		size: function () {
			return _.keys(objects).length;
		},
		flush: function () {
			objects = {};
			timers = {};
		}
	}
}).call(this)