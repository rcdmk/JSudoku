function Board() {
	'use strict';
	
	var self = this;
	var map = [];
	
	self.INVALID_COORDINATES_ERROR = 'Invalid or out of range coordinates: ';
	

	self.init = function() {
		map = [
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
	};
	
	self.getMap = function() {
		return map.slice();
	};
	
	self.setNumber = function(x, y, number) {
		checkCoordinates(x, y);
		
		map[y][x] = number;
	};
	
	self.getNumber = function(x, y) {
		checkCoordinates(x, y);

		return map[y][x];
	};
	
	self.checkLine = function(y, number) {
		if (!checkY(y)) throw new Error(self.INVALID_COORDINATES_ERROR + y);
		
		var linha = map[y];
		
		return linha.indexOf(number) === -1;
	};
	
	self.checkColumn = function(x, number) {
		if (!checkX(x)) throw new Error(self.INVALID_COORDINATES_ERROR + x);
		
		var coluna = map.map(function(el, i) {
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
			throw new Error(INVALID_COORDINATES_ERROR + x + ', ' + y);
		}
	}
}

module.exports = new Board();
