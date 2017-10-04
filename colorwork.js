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
console.log(hexCode.charAt(0));
var hexCodeRem = parseInt(hexCode.charAt(0), 16) % 2
console.log(hexCodeRem);
if ( typeof jQuery !== 'undefined') {
    var addHtml = $('<div>');
    addHtml.attr('class', 'jumbotron');
    addHtml.html('<h1>The color is ' + hexCode + '</h1>');
    if (hexCodeRem) {
        addHtml.attr('style', 'background-color: #' + hexCode + '; color: #fff; text-align: center;');
    } else {
        addHtml.attr('style', 'background-color: #' + hexCode + '; color: #000; text-align: center;');
    }
    $('.container').html(addHtml);
} 

// Your link: https://www.tixr.com/amp/f1rrt/6051
