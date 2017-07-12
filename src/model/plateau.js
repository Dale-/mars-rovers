var Plateau = function(upper_coordinate, right_coordinate) {
    this.upper_coordinate = upper_coordinate;
    this.right_coordinate = right_coordinate;
    this.lower_coordinate = 0;
    this.left_coordinate  = 0;
    this.fields =[];
    this.initFieldsStatus();
};

Plateau.prototype.initFieldsStatus = function() {
    for(var x_coordinate = 0; x_coordinate < this.right_coordinate + 1; x_coordinate++) {
        this.fields[x_coordinate] = [];
        for(var y_coordinate = 0; y_coordinate < this.upper_coordinate + 1; y_coordinate++) {
            this.fields[x_coordinate][y_coordinate] = 'empty';
        }
    }
};

Plateau.prototype.setRover = function(rover) {
    this.fields[rover.x_coordinate][rover.y_coordinate] = rover;
};

module.exports = Plateau;
