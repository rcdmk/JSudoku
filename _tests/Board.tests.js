var expect = require('expect.js');

var board;
var expectedMap;

describe('SUDOKU - Board', function () {
	'use strict';

	before(function (done) {
		board = require('../src/Board');

		done();
	});

	beforeEach(function (done) {
		expectedMap = [
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

		board.init();

		done();
	});

	describe('#init()', function () {
		it('should init a matrix with 81 empty cells', function (done) {
			expect(board.getMap()).to.be.eql(expectedMap);

			done();
		});
	});

	describe('#setNumber(x, y, number)', function () {
		it('should set the provided coordinates with the provided value', function (done) {
			var x = 5,
				y = 5,
				numberToSet = 1;
			
			expectedMap[y][x] = numberToSet;
			board.setNumber(x, y, numberToSet);

			expect(board.getMap()).to.be.eql(expectedMap);

			x = 2;
			y = 3;
			numberToSet = 4;
			
			expectedMap[y][x] = numberToSet;
			board.setNumber(x, y, numberToSet);

			expect(board.getMap()).to.be.eql(expectedMap);

			done();
		});

		it('should throw an error for positions out of the map', function (done) {
			var x = 1,
				y = 9,
				numberToSet = 5;
			
			expect(board.setNumber).withArgs(x, y, numberToSet).to.throwException(board.INVALID_COORDINATES_ERROR + x + ', ' + y);

			done();
		});
	});

	describe('#getNumber(x, y)', function () {
		it('should return the number stored in the provided coordinates', function (done) {
			var expectedNumber = 6,
				x = 2,
				y = 3;
				
			expectedMap[y][x] = expectedNumber;

			board.setNumber(x, y, expectedNumber);

			expect(board.getNumber(x, y)).to.be.equal(expectedNumber);

			done();
		});

		it('should throw an error for positions out of the map', function (done) {
			var x = 9,
				y = 1;
			
			expect(board.getNumber).withArgs(x, y).to.throwException(board.INVALID_COORDINATES_ERROR + x + ', ' + y);

			done();
		});
	});

	describe('#checkLine(y, number)', function () {
		it('should return true if the provided value does not exists in the line', function (done) {
			var lineToCheck = 3,
				valueToSet = 7;

			expect(board.checkLine(lineToCheck, valueToSet)).to.be(true);

			board.setNumber(0, lineToCheck, 1);
			expect(board.checkLine(lineToCheck, valueToSet)).to.be(true);

			board.setNumber(5, lineToCheck, 8);
			expect(board.checkLine(lineToCheck, valueToSet)).to.be(true);

			done();
		});
		
		it('should return false if the provided value already exists in the line', function (done) {
			var lineToCheck = 5,
				valueToSet = 2;

			board.setNumber(8, lineToCheck, valueToSet);
			expect(board.checkLine(lineToCheck, valueToSet)).to.be(false);

			board.setNumber(3, lineToCheck, 4);
			expect(board.checkLine(lineToCheck, valueToSet)).to.be(false);

			done();
		});
		});
	
	describe('#checkColumn(x, number)', function () {
		it('should return true if the provided value does not exists in the line', function (done) {
			var columnToCheck = 8,
				valueToSet = 4;

			expect(board.checkColumn(columnToCheck, valueToSet)).to.be(true);

			board.setNumber(columnToCheck, 2, 1);
			expect(board.checkColumn(columnToCheck, valueToSet)).to.be(true);

			board.setNumber(columnToCheck, 6, 8);
			expect(board.checkColumn(columnToCheck, valueToSet)).to.be(true);

			done();
		});
		
		it('should return false if the provided value already exists in the line', function (done) {
			var columnToCheck = 3,
				valueToSet = 8;

			board.setNumber(columnToCheck, 2, valueToSet);
			expect(board.checkColumn(columnToCheck, valueToSet)).to.be(false);

			board.setNumber(columnToCheck, 6, 1);
			expect(board.checkColumn(columnToCheck, valueToSet)).to.be(false);

			done();
		});
		});
	});
