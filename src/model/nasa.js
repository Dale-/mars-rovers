var Rover = require('./rover');
var Plateau = require('./plateau');
var ParseCommand = require('../command/parseCommand');

var NASA = function() {
};

NASA.parseInputToRoverPositionText = function(input) {
    var plateau = NASA.getPlateau(input);
    var roverText = NASA.getRoverText(input).split('\n');
    var roverPositionText = '';

    for (var i = 0; i < roverText.length; i += 2) {
        var rover = ParseCommand['parseRover'](roverText[i]);
        var instruction = ParseCommand['parseInstruction'](roverText[i + 1]);

        rover.explore(instruction, plateau);
        plateau.setRover(rover);
        roverPositionText += ParseCommand['parseRoverPosition'](rover);
    }
    return roverPositionText.substring(0, roverPositionText.length - 1);
};

NASA.getPlateau = function(input) {

    var plateauText = input.substring(0, input.indexOf('\n'));
    return new Plateau(parseInt(plateauText[0]), parseInt(plateauText[1]));
};

NASA.getRoverText = function(input) {
    return input.substring(input.indexOf('\n') + 1, input.length);
};

module.exports = NASA;
