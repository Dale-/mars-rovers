var fs = require('fs');
var path = require('path');

var Input = function() {
    return fs.readFileSync(path.join('io/input.txt'),'utf-8');
};

module.exports = Input;

