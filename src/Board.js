function Board() {
	'use strict';

	var self = this;
	var map = [];

	self.INVALID_COORDINATES_ERROR = 'InvalidCoordinates';
	self.INITIAL_MAP = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	self.init = function () {
		map = self.INITIAL_MAP;
	};

	self.getMap = function () {
		return map.slice();
	};

	self.setNumber = function (x, y, number) {
		checkCoordinates(x, y);

		map[y][x] = number;
	};

	self.getNumber = function (x, y) {
		checkCoordinates(x, y);

		return map[y][x];
	};

	self.checkLine = function (y, number) {
		if (!checkY(y)) {
			throw {
				name: self.INVALID_COORDINATES_ERROR,
				message: 'Invalid Y coordinate: ' + y
			};
		}

		var linha = map[y];

		return linha.indexOf(number) === -1;
	};

	self.checkColumn = function (x, number) {
		if (!checkX(x)) {
			throw {
				name: self.INVALID_COORDINATES_ERROR,
				message: 'Invalid X coordinate: ' + x
			};
		}

		var coluna = map.map(function (el, i) {
				return el[x];
			});

		return coluna.indexOf(number) === -1;
	};

	function checkValidNumber(number) {
		return /^\d+$/.test(String(number));
	}

	function checkX(x) {
		return checkValidNumber(x) && (x >= 0 && x < map[0].length);
	}

	function checkY(y) {
		return checkValidNumber(y) && (y >= 0 && y < map.length);
	}

	function checkCoordinates(x, y) {
		if (!checkX(x) || !checkY(y)) {
			throw {
				name: self.INVALID_COORDINATES_ERROR,
				message: 'Invalid coordinates: ' + x + ', ' + y
			};
		}
	}
}

module.exports = new Board();
