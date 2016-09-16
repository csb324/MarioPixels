var constants = require("./constants");

class Pixel {
	constructor(id, x, y, color, defaultX, defaultY) {
		this.label = parseInt(id);
		this.color = color;
		this.id = id;
		this.current = 0;

		this.positions = [{
			x: x,
			y: y
		}, {
			x: defaultX,
			y: defaultY
		}, {
			x: defaultX,
			y: defaultY
		}];

		this.create();
	}

	getPercentage(gridNumber) {
		return constants.getPercentage(gridNumber);
	}

	create() {
		var $canvas = constants.canvas;
		var $pixel = $('<div>');

		$pixel.addClass("pixel");
		$pixel.css({
			height: (constants.size - constants.margin) + "%",
			width: (constants.size - constants.margin) + "%"
		});

		$pixel.attr('data-index', this.id);

		var firstPosition = this.positions[this.current];
		this.current++;

		$pixel.css({
			left: this.getPercentage(firstPosition['x']),
			top: this.getPercentage(firstPosition['y']),			
			'background-color': this.color
		});

		// $pixel.text(this.label);
		$canvas.append($pixel);
	}

	addPosition(x, y, frameNumber) {
		this.positions[frameNumber] = {
			x: x,
			y: y
		};
	}

	move() {
		this.moveTo(this.current);
		this.current++;

		if (this.current == this.positions.length) {
			this.current--;
		}
	}

	moveTo(index) {

		var newPosition = this.positions[index];
		if (!newPosition) {
			console.log(this);
			console.log(index);
		}
		var $pixel = '[data-index="'+ this.id +'"]';

		TweenLite.to($pixel, constants.speed, {
			left: this.getPercentage(newPosition['x']),
			top: this.getPercentage(newPosition['y']),
			ease: constants.easing,
		});

	}
}

module.exports = Pixel;