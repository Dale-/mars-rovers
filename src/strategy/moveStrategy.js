var  MoveStrategy = {

    N: function (rover, plateau) {
        var isExceed = rover.y_coordinate + 1 > plateau.upper_coordinate;
        var isExistedRover = typeof(plateau.fields[rover.x_coordinate][rover.y_coordinate + 1]) === 'object';
        return (!isExceed && !isExistedRover) ? ++rover.y_coordinate : rover.y_coordinate },

    S: function (rover, plateau) {
        var isExceed = rover.y_coordinate - 1 < plateau.lower_coordinate;
        var isExistedRover = typeof(plateau.fields[rover.x_coordinate][rover.y_coordinate - 1]) === 'object';
        return (!isExceed && !isExistedRover) ? --rover.y_coordinate : rover.y_coordinate },

    W: function (rover, plateau) {
        var isExceed = rover.x_coordinate - 1 < plateau.left_coordinate;
        var isExistedRover = typeof(plateau.fields[rover.x_coordinate - 1][rover.y_coordinate]) === 'object';
        return (!isExceed && !isExistedRover)  ? --rover.x_coordinate : rover.x_coordinate },

    E: function (rover, plateau) {
        var isExceed = rover.x_coordinate + 1 > plateau.right_coordinate;
        var isExistedRover = typeof(plateau.fields[rover.x_coordinate + 1][rover.y_coordinate]) === 'object';
        return (!isExceed && !isExistedRover) ? ++rover.x_coordinate : rover.x_coordinate }
};

module.exports = MoveStrategy;