jest.dontMock('../src/model/rover');
jest.dontMock('../src/model/plateau');
jest.dontMock('../src/strategy/moveStrategy');
jest.dontMock('../src/strategy/turnStrategy');
jest.dontMock('../src/strategy/exploreStrategy');

describe('ExploreStrategy', function() {

    var Rover;
    var Plateau;
    var plateau;
    var ExploreStrategy;

    beforeEach(function() {

        Rover = require('../src/model/rover');
        Plateau = require('../src/model/plateau');
        plateau = new Plateau(5, 5);
        ExploreStrategy = require('../src/strategy/exploreStrategy');
    });

    describe('#move', function() {

        it('it should return one correct coordinate', function() {
            var result = ExploreStrategy['M'](new Rover(1, 2, 'N'), plateau);
            expect(result).toBe(3);
        });
    });

    describe('#turnLeft', function() {

        it('it should return one correct coordinate', function() {
            var result = ExploreStrategy['L'](new Rover(1, 2, 'N'));
            expect(result).toBe('W');
        });
    });

    describe('#turnRight', function() {

        it('it should return one correct coordinate', function() {
            var result = ExploreStrategy['R'](new Rover(1, 2, 'N'));
            expect(result).toBe('E');
        });
    });
});