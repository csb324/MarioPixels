var ascii1 = "\
................\
......rrrrr.....\
.....rrrrrrrrr..\
.....bbb--b-....\
....b-b---b---..\
....b-bb---b---.\
....bb----bbbb..\
......-------...\
.....bbbbrb.-...\
....-bbbbbb---..\
...--rbbbbb--...\
...bbrrrrrrr....\
...brrrrrrrr....\
..bbrrr.rrr.....\
..b....bbb......\
.......bbbb.....";

var ascii2 = "\
.....rrrrr......\
....rrrrrrrrr...\
....bbb--b-.....\
...b-b---b---...\
...b-bb---b---..\
...bb----bbbb...\
.....-------....\
....bbrbbb......\
...bbbbrrbb.....\
...bbbrr-rr-....\
...bbbbrrrrr....\
...rbb---rrr....\
....rb--rrr.....\
.....rrrbbb.....\
.....bbbbbbb....\
.....bbbb.......";

var ascii3 = "\
......rrrrr.....\
.....rrrrrrrrr..\
.....bbb--b-....\
....b-b---b---..\
....b-bb---b---.\
....bb----bbbb..\
......-------...\
...bbbbrrbb.....\
.--bbbbrrrbbb---\
.---.bbr-rrrbb--\
.--..rrrrrrr..b.\
....rrrrrrrrrbb.\
...rrrrrrrrrrbb.\
..bbrrr...rrrbb.\
..bbb...........\
...bbb..........\
";

var frames = [];

class Frame {
	constructor(ascii) {
		this.red = new ColorFrame(ascii, "r");
		this.white = new ColorFrame(ascii, "-");
		this.green = new ColorFrame(ascii, "b");
	}
}

class ColorFrame {

	constructor(ascii, symbol) {
		this.pixels = [];
		this.count = 0;
		this.symbol = symbol;
		this.finalPosition = {
			x: 0,
			y: 0
		};

		for (var y = 0; y < 16; y++) {

			this.pixels[y] = [];

			for (var x = 0; x < 16; x++) {
				var value = ascii[(16*y) + x];
				this.pixels[y][x] = -1;

				if (value == symbol) {
					this.pixels[y][x] = this.count;

					this.finalPosition = {
						x: x,
						y: y
					};

					this.count++;
				}
			}
		}
	}
}
frames.push(new Frame(ascii1));

frames.push(new Frame(ascii3));

frames.push(new Frame(ascii2));

module.exports = frames;