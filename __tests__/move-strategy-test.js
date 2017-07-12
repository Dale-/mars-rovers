jest.dontMock('../src/model/rover');
jest.dontMock('../src/model/plateau');
jest.dontMock('../src/strategy/moveStrategy');
jest.dontMock('../src/strategy/exploreStrategy');

describe('MoveStrategy', function() {

    var MoveStrategy;
    var Plateau;
    var plateau;
    var Rover;

    beforeEach(function() {

        Rover = require('../src/model/rover');
        Plateau = require('../src/model/plateau');
        plateau = new Plateau(5, 5);
        MoveStrategy = require('../src/strategy/moveStrategy');
    });

    describe('#N', function() {

        it('it should return one correct coordinate', function() {
            var result = MoveStrategy['N'](new Rover(1, 2, 'N'), plateau);
            expect(result).toBe(3);
        });
    });

    describe('#S', function() {

        it('it should return one correct coordinate', function() {
            var result = MoveStrategy['S'](new Rover(1, 2, 'S'), plateau);
            expect(result).toBe(1);
        });
    });

    describe('#W', function() {

        it('it should return one correct coordinate', function() {
            var result = MoveStrategy['W'](new Rover(1, 2, 'W'), plateau);
            expect(result).toBe(0);
        });
    });

    describe('#E', function() {

        it('it should return one correct coordinate', function() {
            var result = MoveStrategy['E'](new Rover(1, 2, 'E'), plateau);
            expect(result).toBe(2);
        });
    });
});