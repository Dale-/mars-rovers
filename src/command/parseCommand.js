var Rover = require('../model/rover');

var ParseCommand = {
    parseInstruction: function(string) {
        return string;
    },
    parseRover: function(string) {
        return new Rover( parseInt(string[0]),  parseInt(string[1]),  string[2]);
    },
    parseRoverPosition: function(rover) {
        return rover.getPosition();
    }
};

module.exports = ParseCommand;