var constants = {
	size: (100.0/16),
	margin: 0,
	canvas: $('#canvas'),

	getPercentage: function(gridNumber) {
		return (gridNumber * this.size)+'%';
	},

	easing: Power2.easeOut,

	speed: 0.4,
	interval: 400

};

module.exports = constants;