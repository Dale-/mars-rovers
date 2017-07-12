var NASA = require('./model/nasa');
var Input = require('./io/input');
var Output = require('./io/output');

(function main() {
    var roverPositionText = NASA.parseInputToRoverPositionText(Input());
    console.log(roverPositionText);
    Output(roverPositionText);
})();


