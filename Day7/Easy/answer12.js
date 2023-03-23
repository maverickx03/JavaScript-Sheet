function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32;
    return oF;
}

console.log('Temperature in oF:',convertCelsiusToFahrenheit(37));