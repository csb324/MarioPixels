var constants = require("./constants");

class Grid {
	constructor() {
		this.draw();
	}

	draw() {
		for (var i = 0; i < 16; i++) {
			this.createLine("y", i);
			this.createLine("x", i);

			this.createLabel("y", i);
			this.createLabel("x", i);

		}
	}

	createLine(axis, index) {
		var $gridLine = $('<span>').addClass("grid").addClass("grid-" + axis);
		var css = {};
		if (axis == "y") {
			css = {
				left: constants.getPercentage(index)
			};
		} else {
			css = {
				top: constants.getPercentage(index)
			}
		}

		$gridLine.css(css);
		constants.canvas.append($gridLine);
	}

	createLabel(axis, index) {
		var $gridLabel = $('<span>');
		$gridLabel.addClass("label")
			.addClass("label-" + axis)
			.text(index);
		
		var css = {};
		if (axis == "y") {
			css = {
				left: constants.getPercentage(index),
				width: constants.getPercentage(1)
			};
		} else {
			css = {
				top: constants.getPercentage(index)
			}
		}
		$gridLabel.css(css);
		constants.canvas.append($gridLabel);

	}
}

module.exports = Grid;