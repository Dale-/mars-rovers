jest.dontMock('../src/model/nasa');
jest.dontMock('../src/model/rover');
jest.dontMock('../src/model/plateau');
jest.dontMock('../src/command/parseCommand');
jest.dontMock('../src/strategy/turnStrategy');
jest.dontMock('../src/strategy/moveStrategy');
jest.dontMock('../src/strategy/exploreStrategy');

describe('NASA', function() {

    var NASA;

    beforeEach(function() {

        NASA = require('../src/model/nasa');
    });

    describe('#getPlateau', function() {

        it('it should return one correct object of Plateau', function() {
            var result = NASA.getPlateau('55\n12N\nLMLMLMLMM');
            expect(result.right_coordinate).toBe(5);
            expect(result.upper_coordinate).toBe(5);
        });
    });

    describe('#getRoverText', function() {

        it('it should return one correct string of Rover', function() {
            var result = NASA.getRoverText('55\n12N\nLMLMLMLMM');
            expect(result).toBe('12N\nLMLMLMLMM');
        });
    });

    describe('#parseInputToRoverPositionText', function() {

        describe('#No Turn', function() {

            it('#only run "M" operation with one rover', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nMMM');
                expect(result).toBe('15N');
            });

            it('#only run "M" operation with two rover', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nMMM\n11N\nMMM');
                expect(result).toBe('15N\n14N');
            });
        });

        describe('#Have Turn', function() {

            it('#it should be return the correct Text when the insturction exist turn with one rover', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nLMLMLMLMM');
                expect(result).toBe('13N');
            });

            it('#it should be return the correct Text when the insturction exist turn with two rover', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nLMLMLMLMM\n33E\nMMRMMRMRRM');
                expect(result).toBe('13N\n51E');
            });
        });

        describe('#Edge', function() {

            it('#the rover could not exceed to the edge of plateau', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nMMMM');
                expect(result).toBe('15N');
            });
        });

        describe('#Meet Other Rover', function() {

            it('#the rover could not achieve of the place has one rover', function() {

                var result = NASA.parseInputToRoverPositionText('55\n12N\nLMLMLMLMM\n11E\nLLMRMRMLM');
                expect(result).toBe('13N\n12N');
            });
        });
    });
});