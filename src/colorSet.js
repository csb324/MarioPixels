var Pixel = require("./pixel");

class ColorSet {

	constructor(name, color, defaultX, defaultY) {
		this.name = name;
		this.color = color;
		this.defaultX = defaultX;
		this.defaultY = defaultY;

		this.frames = [];
		this.pixels = [];
	}

	pixelCount() {
		return this.pixels.length;
	}

	addPixel(x, y) {
		var id = this.pixels.length;

		var pixel = new Pixel(id + this.name, x, y, this.color, this.defaultX, this.defaultY);
		this.pixels.push(pixel);
		return pixel;

	}

	createPixelsFromFrame(colorFrame) {

		this.frames.push(colorFrame);

		for (var y = 0; y < 16; y++) {
			for (var x = 0; x < 16; x++) {
				if (colorFrame.pixels[y][x] > -1) {
					this.addPixel(x, y);
				}
			}
		}

	}

	addBelatedPixel() {
		var pixel = this.addPixel(this.frames[0].finalPosition.x, this.frames[0].finalPosition.y);

		// console.log(this.name);
		// console.log(this.frames.length);

		for (var i = 1; i < this.frames.length - 1; i++) {
			pixel.addPosition(this.frames[i].finalPosition.x, this.frames[i].finalPosition.y, i);
		}

		return pixel;
	}

	createStateFromFrame(colorFrame) {

		var previousState = this.frames[this.frames.length - 1];

		this.frames.push(colorFrame);

		var countInFrame = 0;

		for (var y = 0; y < 16; y++) {
			for (var x = 0; x < 16; x++) {
				if (colorFrame.pixels[y][x] > -1) {
					var pixelId = colorFrame.pixels[y][x];

					if (this.pixels[pixelId]) {

						var pixel = this.pixels[pixelId];

					} else {

						var pixel = this.addBelatedPixel();

					}
					pixel.addPosition(x, y, this.frames.length - 1);



					countInFrame++

				}
			}
		}

		if (countInFrame < previousState.count) {
			for (var i = countInFrame; i < previousState.count; i++) {
				var pixel = this.pixels[i];
				pixel.addPosition(colorFrame.finalPosition.x, colorFrame.finalPosition.y);
				countInFrame++
			}
		}
	}

	moveToState(index) {
		for (var i = 0; i < this.pixels.length; i++) {
			this.pixels[i].moveTo(index);
		}
	}
}


module.exports = ColorSet;