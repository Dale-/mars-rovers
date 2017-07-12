var TurnStrategy = require('../strategy/turnStrategy');
var MoveStrategy = require('../strategy/moveStrategy');
var ExploreStrategy = require('../strategy/exploreStrategy');

var Rover = function(x_coordinate, y_coordinate, orientation) {
    this.x_coordinate = x_coordinate;
    this.y_coordinate = y_coordinate;
    this.orientation = orientation;
};

Rover.prototype.move = function(plateau) {
    return MoveStrategy[this.orientation](this, plateau);
};

Rover.prototype.explore = function(instructions, plateau) {

    for (var i = 0; i < instructions.length; i++) {
        ExploreStrategy[instructions[i]](this, plateau);
    }
    return this;
};

Rover.prototype.turnLeft = function() {
    return TurnStrategy['turnLeft'](this);
};

Rover.prototype.turnRight = function() {
    return TurnStrategy['turnRight'](this);
};

Rover.prototype.getPosition = function() {
    return this.x_coordinate.toString() + this.y_coordinate.toString() + this.orientation + '\n';
};

module.exports = Rover;