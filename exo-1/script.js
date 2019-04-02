// you can write js here
console.log('hello from file');
var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");
//var kelvin = 293;								// Declaration de variable kelvin, valeur 293
var celsius = kelvin - 273;						// Declaration de variable celsius, valeur est kelvin moins 273
var fahrenheit = celsius * (9/5) + 32;			// Declaration de variable fahrenheit, valeur est celsuis multiplié par (9/5) plus 32
console.log(celsius);							// La console affiche 'celsius'
console.log(Math.floor(fahrenheit));			// La console affiche la valeur de 'fahrenheit' sans decimals grace a la function Math.floor