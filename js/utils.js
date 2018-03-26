module.exports = {
	objectArrayHas : function (array, arrayTargetProperty, target) {
		for(var i=0; i<array.length; i++) {
			if (array[i][arrayTargetProperty] === target) {
				return true;
			}
		}
		return false;
	}

}