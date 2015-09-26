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
			expectedMap[5][5] = 1;
			board.setNumber(5, 5, 1);

			expect(board.getMap()).to.be.eql(expectedMap);

			expectedMap[3][2] = 4;
			board.setNumber(2, 3, 4);

			expect(board.getMap()).to.be.eql(expectedMap);

			done();
		});

		it('should throw and error for positions out of the map', function (done) {
			expect(board.setNumber).withArgs(1, 9, 5).to.throwException(board.INVALID_COORDINATES_ERROR + '1, 9');

			done();
		});
	});

	describe('#getNumber(x, y)', function () {
		it('should return the number stored in the provided coordinates', function (done) {
			var expectedNumber = 6;
			expectedMap[3][2] = expectedNumber;

			board.setNumber(2, 3, expectedNumber);

			expect(board.getNumber(2, 3)).to.be.equal(expectedNumber);

			done();
		});

		it('should throw and error for positions out of the map', function (done) {
			expect(board.getNumber).withArgs(9, 1).to.throwException(board.INVALID_COORDINATES_ERROR + '9, 1');

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
