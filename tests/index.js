var cache = require('../');

(function () {
	exports.testSetGet = function (test) {
		var data = {
			one: 1
		};
		cache.set("data", data, 1000);
		test.ok(cache.get("data") == data)

		setTimeout(function () {
			cache.set("data", data, 1000);
		}, 500)

		setTimeout(function () {
			test.ok(cache.get("data") == data);
		}, 1400)

		setTimeout(function () {
			test.ok(!cache.get("data"));
			test.done();
		}, 1600)
	};
	exports.testRemove = function (test) {
		var data = {
			test: true
		};
		var key = "testRemove";

		cache.set(key, data);

		test.ok(cache.get(key) == data);
		test.ok(cache.remove(key) == data);
		test.ok(!cache.get(key))

		test.done();
	};
	exports.testSize = function (test) {
		cache.set(1, 1);
		test.ok(cache.size() == 1);
		cache.set(1, 1);
		test.ok(cache.size() == 1);
		cache.set(2, 1);
		test.ok(cache.size() == 2);
		cache.remove(1);
		test.ok(cache.size() == 1);

		test.done();
	};
	exports.testFlush = function (test) {
		cache.flush();
		cache.set(1, 1);
		test.ok(cache.size() == 1);
		cache.set(1, 1);
		test.ok(cache.size() == 1);
		cache.set(2, 1);
		test.ok(cache.size() == 2);
		cache.remove(1);
		test.ok(cache.size() == 1);

		cache.flush();
		test.ok(cache.size() == 0);

		test.done();
	}
}).call(this);