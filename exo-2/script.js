// you can write js here
console.log('exo-2');
var dejaInscrit = false;
var ageRunner = Math.floor(Math.random()*100);;
var raceNumber = Math.floor(Math.random()*1000);

if(!dejaInscrit){
	dejaInscrit = true;
	var raceNumber = raceNumber + 1000;
	console.log(ageRunner);
	if(ageRunner > 18 && dejaInscrit){
		console.log('You will race at 9:30 am');
	} else if (ageRunner > 18 || !dejaInscrit) {
		console.log('You will race at 11:00 am ' + raceNumber);
	}	else if ((ageRunner < 18 || !dejaInscrit)) {
		console.log('You will race at 12:30 pm ' + raceNumber);
	}
	} else {
		console.log('Go to see the registration desk');
}
