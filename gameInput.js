var ones = 0,
	fives = 0,
	tens = 0,
	twenties = 0,
	pennies = 0,
	nickels = 0,
	dimes = 0,
	quarters = 0;

function plusMinus(elementClick,amount){
	if(amount != 0){
		document.getElementById(elementClick).innerHTML = amount;
	}else{
		document.getElementById(elementClick).innerHTML = '';
	}
}

function plus(item){
	if(item == 'ones'){
		ones++;
		plusMinus('amountOnes',ones);
	}else if(item == 'fives'){
		fives++;
		plusMinus('amountFives',fives);
	}else if(item == 'tens'){
		tens++;
		plusMinus('amountTens',tens);
	}else if(item == 'twenties'){
		twenties++;
		plusMinus('amountTwenties',twenties);
	}else if(item == 'pennies'){
		pennies++;
		plusMinus('amountPennies',pennies);
	}else if(item == 'nickels'){
		nickels++;
		plusMinus('amountNickels',nickels);
	}else if(item == 'dimes'){
		dimes++;
		plusMinus('amountDimes',dimes);
	}else if(item == 'quarters'){
		quarters++;
		plusMinus('amountQuarters',quarters);
	}
	console.log(item);
}
function minus(item){
	if(item == 'ones'){
		ones--;
		plusMinus('amountOnes',ones);
	}else if(item == 'fives'){
		fives--;
		plusMinus('amountFives',fives);
	}else if(item == 'tens'){
		tens--;
		plusMinus('amountTens',tens);
	}else if(item == 'twenties'){
		twenties--;
		plusMinus('amountTwenties',twenties);
	}else if(item == 'pennies'){
		pennies--;
		plusMinus('amountPennies',pennies);
	}else if(item == 'nickels'){
		nickels--;
		plusMinus('amountNickels',nickels);
	}else if(item == 'dimes'){
		dimes--;
		plusMinus('amountDimes',dimes);
	}else if(item == 'quarters'){
		quarters--;
		plusMinus('amountQuarters',quarters);
	}
	console.log(item);
}