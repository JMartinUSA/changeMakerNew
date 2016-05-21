var sessionCorrect = 0,
	sessionIncorrect = 0,
	sessionRow = 0,
	sessionRecordRow = 0,
	sessionAccuracy = 100;

var CORRECTUSER,
	INCORRECTUSER,
	ACCURACYUSER;

function calculateSessionAccuracy(){
	sessionAccuracy = Math.ceil(100*(sessionCorrect/(sessionCorrect+sessionIncorrect)));
	if(isNaN(sessionAccuracy)){
		sessionAccuracy = 100;
	}
}
function calculateUSERACCURACY(){
	var c = Number(CORRECTUSER);
	var i = Number(INCORRECTUSER);
	ACCURACYUSER = Math.ceil(100*(c/(c+i)));
	if(isNaN(ACCURACYUSER)){
		ACCURACYUSER = 100;
	}	
	console.log('user accuracy: '+ACCURACYUSER);
}

function submitAnswer(){
	var changeGiven = pennies+(nickels*5)+(dimes*10)+(quarters*25);
	var billsGiven = (ones+(fives*5)+(tens*10)+(twenties*20))*100;
	var totalGiven = (billsGiven+changeGiven)/100;
	var moneyGivenByCustomer = Number(moneyReceived);
	console.log('total: '+total);
	console.log('moneyGivenByCustomer: '+moneyGivenByCustomer);
	console.log('totalGiven: '+totalGiven);
	console.log(total+totalGiven - 0.0003);
	console.log(total+totalGiven + 0.0003);
	if((total+totalGiven - 0.0003) < moneyGivenByCustomer && moneyGivenByCustomer < (total+totalGiven + 0.0003)){
		console.log('correct');
		answerCorrect();
	}else{
		console.log('incorrect');
		answerIncorrect();
	}
	resetLevel();

	function resetLevel(){
		ones = 0,
		fives = 0,
		tens = 0,
		twenties = 0,
		pennies = 0,
		nickels = 0,
		dimes = 0,
		quarters = 0;
		document.getElementById('amountOnes').innerHTML = '';
		document.getElementById('amountFives').innerHTML = '';
		document.getElementById('amountTens').innerHTML = '';
		document.getElementById('amountTwenties').innerHTML = '';
		document.getElementById('amountPennies').innerHTML = '';
		document.getElementById('amountNickels').innerHTML = '';
		document.getElementById('amountDimes').innerHTML = '';
		document.getElementById('amountQuarters').innerHTML = '';
		setLevel();
	}
}
function nextLevel(){
	document.getElementById('gameResult').innerHTML = '';
}