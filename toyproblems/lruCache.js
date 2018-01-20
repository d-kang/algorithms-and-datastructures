const LRUCache = function(cap) {
  this._cap = cap;
  this._size = 0;
  this._cached = {};
};

LRUCache.prototype.get = function(key) {
  this._cached[key]++;
  if (this[key] === undefined) {
    return -1;
  } else {
    return this[key];
  }
};


LRUCache.prototype.set = function(key, val) {
  let leastKey;
  let cachedValue;
  if (this._cached[key] === undefined) {
    this._cached[key] = 0;
  }
  if (this._size < this._cap) {
    this[key] = val;
    this._size++;
  } else {
    for (var cachedKey in this._cached) { // delete least used
      if (leastKey === undefined) {
        leastKey = cachedKey;
        cachedValue = this._cached[cachedKey];
      } else if (this._cached[cachedKey] > cachedValue) {
        leastKey = cachedKey;
        cachedValue = this._cachd[cachedKey];
      }
    }
    delete this[leastKey];
    delete this._cached[leastKey];
    this[key] = val;
  }
};
