var fs = require('fs');
var path = require('path');

var output = function(data) {
    return fs.writeFileSync(path.join('io/output.txt'), data,'utf-8');
};

module.exports = output;