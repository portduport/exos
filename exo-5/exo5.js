// you can write js here

console.log('exo-5');

var input = "Qui prends pour valeur n'importe quelle phrase ou mot à traduire";
var inputArray = input.split('');
var vowels = ['A','E','I','O','U','Y'];
var resultArray = [];

for (var i = 0; i < inputArray.length; i++) {
	for (var w = 0; w < vowels.length; w++) {
		if(inputArray[i].toUpperCase() === vowels [w]){
			resultArray.push(vowels [w]);
		}	
	}
}

var msgWale = resultArray.join('');

console.log(msgWale);

/*for (var i = 0; i < inputArray.length; i++) {
	for (var w = 0; w < vowels.length; w++) {
		if(inputArray[i].toUpperCase() === vowels [w]){
			resultArray.push(vowels [w]);
		}	
	}
}*/