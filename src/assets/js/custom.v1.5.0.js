


function celsiusAFarenheit(Celsius){
    return(Celsius * 9 / 5) + 32;
}
    

function farenheitACelsius(Farenheit){
    return(Farenheit - 32) * 5/9;
}



console.log("10 grados Celsius = " + celsiusAFarenheit (10) + " grados Farenheit ");
console.log("50 grados Celsius = " + celsiusAFarenheit (50) + " grados Farenheit ");

console.log("50 grados Farenheit = " + farenheitACelsius (50) + " grados Celsius ");
console.log("100 grados Farenheit = " + farenheitACelsius (100).toFixed(2) + " grados Celsius ");