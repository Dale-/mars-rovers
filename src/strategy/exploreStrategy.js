var ExploreStrategy = {

    M: function(rover, plateau) {
        return rover.move(plateau)    },

    L: function(rover) {
        return rover.turnLeft(rover)  },

    R: function(rover) {
        return rover.turnRight(rover) }
};

module.exports = ExploreStrategy;