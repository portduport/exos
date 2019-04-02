// Partie 8 code academy
console.log("exo-6");

var team = {
_players: [{
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 35 }],
_games: [{
	opponent: "Barça",
    teamPoints: 5,
    opponentPoints: 6
}]
};


function addPlayer(first, last, age){
	var player={};
	player.firstName = first;
 	player.lastName = last;
	player.age = age;
	team._players.push(player);
	return player; 
}

var newPlayer = new addPlayer('Antoine','Griessman',26);
var newPlayer1 = new addPlayer('Clement','Gonzalez',23);
var newPlayer2 = new addPlayer('Carl','Gomez',18);
var newPlayer3 = new addPlayer('Pablo','Callejo',40);
var newPlayer4 = new addPlayer('Thomas','Garcia',19);
var newPlayer5 = new addPlayer('Alex','Fernandez',21);
var newPlayer6 = new addPlayer('Jp','Ninio',24);


console.log(team._players);

function addGame(opponent, teamPoints, opponentPoints){
	var game={};
	game.opponent = opponent;
	game.teamPoints = teamPoints;
	game.opponentPoints = opponentPoints;
	team._games.push(game);
}

var newGame = new addGame('Madrid',6,1);
var newGame1 = new addGame('Cadiz',3,2);
var newGame2 = new addGame('Sevilla',4,1);
var newGame3 = new addGame('Malaga',1,3);
var newGame4 = new addGame('Valencia',2,0);
var newGame5 = new addGame('Asturias',2,2);


console.log(team._games);
console.log(team);

var totalPoints = 0;
var totalOpponentPoints = 0;

for(var i=0; i<team._games.length;i++){
	totalPoints = totalPoints + team._games[i].teamPoints;
	}

for(var i=0; i<team._games.length;i++){
	totalOpponentPoints = totalOpponentPoints + team._games[i].opponentPoints;
	}

function oldestPlayer(){
	var agePlayer = 0;
	for(var i=0; i<team._players.length;i++){
		var newAgePlayer = team._players[i].age;
			if(newAgePlayer > agePlayer){
				agePlayer = newAgePlayer;
		}
	}
	console.log(agePlayer);
}

function alphaPlayer(){
	var namePlayers = [];
	for(var i=0; i<team._players.length;i++){
		var playerName = team._players[i].firstName;
		namePlayers.push(playerName);
		}
	namePlayers.sort();
	console.log(namePlayers);
}

console.log('La somme des points de votre équipe sur tous les matchs : ' + totalPoints);
console.log("La moyenne des points de l'équipe adverse sur tous les matchs est de : " + totalOpponentPoints/team._games.length);
oldestPlayer();
alphaPlayer();

