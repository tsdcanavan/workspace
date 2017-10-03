var numbers = [];

// load hex number list 0 - 15
for (var i = 0; i < 16; i++) {
    numbers[i] = i.toString(16);
}

// build hex color code
var hexCode = '';
for (i = 0; i < 6; i++) {
    var rndmNumber = Math.floor(Math.random() * 16);
    hexCode = hexCode + numbers[rndmNumber];
}

var addHtml = $('<div>');
addHtml.attr('class', 'jumbotron');
addHtml.attr('style', 'background-color: #' + hexCode);
addHtml.html('<h1>The color is ' + hexCode + '</h1>');
$('.container').html(addHtml);
// display code
console.log(hexCode);
// Your link: https://www.tixr.com/amp/f1rrt/6051
