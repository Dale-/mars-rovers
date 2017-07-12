jest.dontMock('../src/strategy/turnStrategy');

describe('TurnStrategy', function() {

    var TurnStrategy;
    var rover;

    beforeEach(function() {

        TurnStrategy = require('../src/strategy/turnStrategy');
        rover = {orientation:'N'};
    });

    describe('#action', function() {

        it('it should return one heading', function() {
            expect(TurnStrategy.action(rover, 3)).toBe('W');
        });
    });

    describe('#turnLeft', function() {

        it('it should return one heading after turnLeft', function() {
            expect(TurnStrategy['turnLeft'](rover)).toBe('W');
        });
    });

    describe('#turnRight', function() {

        it('it should return one heading after turnRight', function() {
            expect(TurnStrategy['turnRight'](rover)).toBe('E');
        });
    });
});