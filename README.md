# im-cache
im-cache is asimple and naive in-memory object cache.

## Install
npm install im-cache

## Usage
### cache.set(key, object[, timeout])
	var cache = require('im-cache');
	//Cache {data: true} for one hour with key "key"
	cache.set("key", {data: true}, 1000*60*60)
	//Cache {data: true} forever with key "key"
	cache.set("key", {data: true})
### cache.get(key)
	// Set data:
	cache.set("key", {data: true}, 10000)
	// Equals {data: true}:
	cache.get("key");
### cache.remove(key)
	// Set data:
	cache.set("key", {data: true}, 10000)
	// Equals {data: true}:
	cache.remove("key");
	// Equals undefined:
	cache.get("key");
### cache.size()
Returns cache size
### cache.flush()
Empties cache
