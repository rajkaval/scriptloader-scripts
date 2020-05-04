console.log("Script Loader - Utils.js getting loaded")
document.getElementByXPath = function(sValue) { var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); if (a.snapshotLength > 0) { return a.snapshotItem(0); } };
document.getElementsByXPath = function(sValue){ var aResult = new Array();var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);for ( var i = 0 ; i < a.snapshotLength ; i++ ){aResult.push(a.snapshotItem(i));}return aResult;};

String.prototype.matchesAny = function (patterns) {
	_this = this;
	return patterns.reduce(function (previous, currentPattern) {
		 return (previous || _this.match(currentPattern))? true : false;
	   }, false);
   };
   
   
String.prototype.matchesAll = function (patterns) {
_this = this;
return patterns.reduce(function (previous, currentPattern) {
		return (previous && _this.match(currentPattern))? true : false;
	}, true);
};