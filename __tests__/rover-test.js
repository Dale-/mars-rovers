jest.dontMock('../src/model/rover');
jest.dontMock('../src/model/plateau');
jest.dontMock('../src/strategy/turnStrategy');
jest.dontMock('../src/strategy/moveStrategy');
jest.dontMock('../src/strategy/exploreStrategy');

describe('Rover', function() {

    var Rover;
    var rover;
    var Plateau;

    beforeEach(function() {

        Rover = require('../src/model/rover');
        Plateau = require('../src/model/plateau');
        rover = new Rover(1, 2, 'N');
    });

    describe('#move', function() {

        it('it should return one correct orientation after explore', function() {
            var result = rover.move(new Plateau(5, 5));
            expect(result).toBe(3);
        });
    });

    describe('#explore', function() {

        it('it should return one object of rover after the rover stop', function() {
            var result = rover.explore('MMM',new Plateau(5, 5));
            expect(result.x_coordinate).toBe(1);
            expect(result.y_coordinate).toBe(5);
            expect(result.orientation).toBe('N');
        });
    });

    describe('#turnLeft', function() {

        it('it should return one orientation of rover after turnLeft', function() {
            var result = rover.turnLeft();
            expect(result).toBe('W');
        });
    });

    describe('#turnRight', function() {

        it('it should return one orientation of rover after turnRight', function() {
            var result = rover.turnRight();
            expect(result).toBe('E');
        });
    });

});