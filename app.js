var fs = require('fs');

var fname = 'a_example.in';
var readFile = function(err, contents)  {
    var lines = contents.toString().split('\n');

    var firstData = lines[0].split(' ');
    console.log(contents.toString());

    var rows = firstData[0];
    console.log('rows: ' + rows);

    var columns = firstData[1];
    console.log('columns: ' + columns);

    var cars = firstData[2];
    console.log('cars: ' + cars);

    var rides = firstData[3];
    console.log('rides: ' + rides);

    var bonus = firstData[4];
    console.log('bonus: ' + bonus);

    var steps = firstData[5]
    console.log('steps: ' + steps);

    //console.log(lines)





};

fs.readFile(fname, readFile);
