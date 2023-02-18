// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs["JPY"];
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * oneEuroIs["GBP"];
    return parseFloat(valueInPound.toFixed(2));
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}
// just a console log for ourselves.
console.log(sum(7, 3))
console.log(fromDollarToYen(1));
console.log(parseFloat((4.2 * 127.9).toFixed(2)));
console.log(fromYenToPound(1));
console.log(parseFloat((537.18 * 0.8).toFixed(2)));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

