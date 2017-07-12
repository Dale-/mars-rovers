var TurnStrategy = {

    turnLeft: function(rover) {
        return TurnStrategy.action(rover, 3) },

    turnRight: function(rover) {
        return TurnStrategy.action(rover, 1) }
};

TurnStrategy.action = function(rover, num) {

    var HeadingCollection = TurnStrategy.headingCollection();
    rover.orientation = HeadingCollection[(HeadingCollection.indexOf(rover.orientation) + num) % 4];
    return rover.orientation ;
};

TurnStrategy.headingCollection = function() {
    return ['W', 'N', 'E', 'S'];
};

module.exports = TurnStrategy;