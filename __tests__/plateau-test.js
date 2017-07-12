jest.dontMock('../src/model/rover');
jest.dontMock('../src/model/plateau');

describe('Plateau', function() {

    var Plateau;
    var plateau;
    var Rover;

    beforeEach(function() {

        Rover = require('../src/model/rover');
        Plateau = require('../src/model/plateau');
        plateau = new Plateau(5, 5);
    });

    describe('#constuctor', function() {

        it('it should return one correct object after one Plateau was newed', function() {
            expect(plateau.upper_coordinate).toBe(5);
            expect(plateau.right_coordinate).toBe(5);
        });
    });

    describe('#initFieldsStatus', function() {

        it('it should return one correct array after init it', function() {
            expect(plateau.fields[0][0]).toBe('empty');
            expect(plateau.fields[4][4]).toBe('empty');
        });
    });

    describe('#setRover', function() {

        it('it should set one rover to plateau', function() {
            plateau.setRover(new Rover(1, 2, 'S'));
            expect(plateau.fields[1][2].orientation).toBe('S');
        });
    });

});