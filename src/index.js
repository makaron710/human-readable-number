module.exports = function toReadable (number) {
  var arrFrom1To19 = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

  var figures = ['one','two','three','four','five','six','seven','eight','nine'];

  var dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(number < 100) {
    if(number == 0) 
    return 'zero';

    if(number <= 19) 
    return arrFrom1To19[number - 1];

    if(number % 10 == 0) 
    return dozens[(number / 10) - 2];

    return  dozens[Math.floor(number / 10) - 2] + ' ' + figures[(number % 10) - 1];
  } else {
    if(number % 100 == 0) 
    return figures[Math.floor(number / 100) - 1] + ' ' + 'hundred';

    if(number % 100 <= 19) 
    return figures[Math.floor(number / 100) - 1] + ' ' + 'hundred' + ' ' + arrFrom1To19[(number % 100) - 1];

    if((number % 100) % 10 == 0)
    return figures[Math.floor(number / 100) - 1] + ' ' + 'hundred' + ' ' + dozens[Math.floor((number % 100) / 10) - 2];

    return figures[Math.floor(number / 100) - 1] + ' ' + 'hundred' + ' ' + dozens[Math.floor((number % 100) / 10) - 2] + ' ' + figures[(number % 10) - 1];
  }
}
