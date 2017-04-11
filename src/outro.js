var MQ1 = getInterface(1);
for (var key in MQ1) (function(key, val) {
  if (typeof val === 'function') {
    MathQuill[key] = function() {
      insistOnInterVer();
      return val.apply(this, arguments);
    };
    MathQuill[key].prototype = val.prototype;
  }
  else MathQuill[key] = val;
}(key, MQ1[key]));
// BEGIN - Added by JLC - https://github.com/mathquill/mathquill/pull/714
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MathQuill;
}
// END - Added by JLC - https://github.com/mathquill/mathquill/pull/714
}());
