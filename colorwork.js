var numbers = [];

// load hex number list 0 - 15
for (var i = 0; i < 16; i++) {
    if (i < 10) {
        numbers[i] = i.toString();
    } else {
        switch (i) {
            case 10:
                numbers[i] = "a";
                break;
            case 11:
                numbers[i] = 'b';
                break;
            case 12:
                numbers[i] = 'c';
                break;
            case 13:
                numbers[i] = 'd';
                break;
            case 14:
                numbers[i] = 'e';
                break;
            case 15:
                numbers[i] = 'f';
                break;
            default:
                break;
        }
    }
}


// build hex color code
var hexCode = '';
for (i = 0; i < 6; i++) {
    var rndmNumber = Math.floor(Math.random() * 16);
    hexCode = hexCode + numbers[rndmNumber];
//    console.log(rndmNumber, numbers[rndmNumber], hexCode);
}

var addHtml = $('<div>');
addHtml.attr('class','jumbotron');
addHtml.attr('style','background-color: #' + hexCode);
addHtml.html('<h1>The color is ' + hexCode + '</h1>');
$('.container').html(addHtml);
// display code
console.log(hexCode);
// Your link: https://www.tixr.com/amp/f1rrt/6051
