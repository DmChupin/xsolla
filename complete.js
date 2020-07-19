//На вход подаем массив строк и валюту
let currencySum = (arr, currency) => {
    let sum = 0;
    arr.forEach( element => {
      if (element.includes(currency)) {
          sum += parseFloat(element.replace(/[^\d.]/, ''));;
      }
    })
    return sum;
  }
  
   console.log(currencySum( ["$11", "$1.5", "36₽", "$4", "6.2.3₽"], "$"));

   function func(s, a) {
    let i, x;
    for (i = s.length - 1; i > -1; i--) {
        for (x = a.length - 1; x > -1; x--) {
            if (s[i + x] !== a[x]) {
                break;
            }
        }
        if( x === -1) {
            return i;
        }
    }
    return -1;
  }

  let hashTag = (str) => {
    if (str.size == 0 || str.size > 99) {
        return false;
    }
    let regexp = /[\p{Alpha}0-9]/gu;
    str = str.match(regexp).join('');
    str = str[0].toUpperCase() +  
            str.slice(1).toLowerCase();
    return '#' + str;
}

let res = hashTag('ППримерНовогоХэштега##12');
console.log(res); // #ПримерНовогоХэштега"