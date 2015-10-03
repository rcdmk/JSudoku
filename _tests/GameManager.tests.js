var expect = require('expect.js');

describe('SUDOKU - GameManager', function () {
	'use strict';
	
	var game;
	
	before(function(done) {
		var gameClass = require('../src/GameManager');
		game = new gameClass();
		
		done();
	});
	
	describe('#init()', function() {
		it('should initialize the game variables', function(done) {
			game.init();

			expect(game.getTime()).to.be.equal(0);
			expect(game.getState()).to.be.equal(game.START_MODE);
			
			done();
		});
	});
});