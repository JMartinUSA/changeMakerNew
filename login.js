var ID;
var USERNAME;
var PASSWORD;
var LOGGEDIN = false;

// document.addEventListener('pause', logout(), false);
// document.addEventListener('resume', login(), false);

function registerTab(){
	document.getElementById('loginTab').style.background = 'black';
	document.getElementById('loginTab').style.color = 'white';
	document.getElementById('loginTab').title = 'false';
	document.getElementById('registerTab').style.background = 'white';
	document.getElementById('registerTab').style.color = 'black';
	document.getElementById('registerTab').title = 'true';
	document.getElementById('registerSection').style.display = 'block';
	document.getElementById('loginSection').style.display = 'none';
}
function loginTab(){
	document.getElementById('registerTab').style.background = 'black';
	document.getElementById('registerTab').style.color = 'white';
	document.getElementById('registerTab').title = 'false';
	document.getElementById('loginTab').style.background = 'white';
	document.getElementById('loginTab').style.color = 'black';
	document.getElementById('loginTab').title = 'true';
	document.getElementById('loginSection').style.display = 'block';
	document.getElementById('registerSection').style.display = 'none';
}
function exitLogin(){
	document.getElementById('otherSubmenu').innerHTML = '';
}
function logout(){
	LOGGEDIN = false;
	CORRECT = 0;
	INCORRECT = 0;
	sessionCorrect = 0,
	sessionIncorrect = 0,
	sessionRow = 0,
	sessionRecordRow = 0,
	sessionAccuracy = 100;

	localStorage.setItem('FibonacciUsernameSaved', USERNAME);
	localStorage.setItem('FibonacciPasswordSaved', PASSWORD);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			afterLogout();
		}
	};

	xhttp.open("GET", "http://jaymartmedia.com/game/changemaker/logout.php?ID="+ID, true);
	xhttp.send();

	function afterLogout(){
		// ID = '';
		// USERNAME = '';
		// PASSWORD = '';
	}
}
function login(){
	console.log('try login');
	var error = [];
	if(document.getElementsByClassName('loginCover').length > 0){
		var username = document.getElementById('loginUsername').value,
			password = document.getElementById('loginPassword').value;
			USERNAME = username;
			PASSWORD = password;
		if( username != '' && password != '' ){	
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (xhttp.readyState == 4 && xhttp.status == 200){
					var receivePHP = xhttp.responseText;
					doPHP(receivePHP);
				}
			};
		
			xhttp.open("GET", "http://jaymartmedia.com/game/changemaker/login.php?USERNAME="+username+"&PASSWORD="+password, true);
			xhttp.send();
			
			function doPHP(receivePHP){
				if( receivePHP == 'login'){
					doLogin();
				}else if( receivePHP == 'needVerify' ){
					error += ['Please verify your email first. If you don\'t see an email from us, please check your spam folder.'];
				}else if( receivePHP == 'passwordIncorrect' ){
					error += ['Password incorrect. '];
				}else if( receivePHP == 'noAccount' ){
					error += ['There is no account with this name.'];
				}else if( receivePHP == 'fillField' ){
					error += ['Please fill out all fields.'];
				}
				if( error.length > 0){
					document.getElementById('errorMsgLogin').innerHTML = error;
				}
			}
		}else{ 
			error += ['Please fill out all fields.'];
			document.getElementById('errorMsgLogin').innerHTML = error;
		}
	}else if(document.getElementsByClassName('loginCover').length == 0){
		var username = localStorage.getItem('FibonacciUsernameSaved'),
			password = localStorage.getItem('FibonacciPasswordSaved');
			USERNAME = username;
			PASSWORD = password;

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var receivePHP = xhttp.responseText;
				if( receivePHP == 'login'){
					doLogin();
				}
			}
		};
	
		xhttp.open("GET", "http://jaymartmedia.com/game/changemaker/login.php?USERNAME="+username+"&PASSWORD="+password, true);
		xhttp.send();
	}
}

//this is what happens when a user successfully logs in
function doLogin(){
	console.log('logged in');
	LOGGEDIN = true;
	resetSession();
	exitSubmenu();

	//this gets the ID of the user
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var receivePHP = xhttp.responseText;
			ID = receivePHP;
			console.log('line 78 ID= '+ID);
			sendPHP(ID);
		}
	};
	
	xhttp.open("GET", "http://jaymartmedia.com/game/confirm.php?USERNAME="+USERNAME, true);
	xhttp.send();

	//this sends is called once the app has the users id
	function sendPHP(ID){
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function(){
			if (xhttp2.readyState == 4 && xhttp2.status == 200){
			
			}
		};
		console.log('ID: '+ID);
		xhttp2.open("GET", "http://jaymartmedia.com/game/changemaker/changemaker.php?ID="+ID, true);
		xhttp2.send();

		
		var xhttp3 = new XMLHttpRequest(); 
		xhttp3.onreadystatechange = function(){
			if (xhttp3.readyState == 4 && xhttp3.status == 200){
				var fibonacciData = JSON.parse(xhttp3.responseText);
				receiveData(fibonacciData);
			}
		};
		console.log('ID: '+ID);
		xhttp3.open("GET", "http://jaymartmedia.com/game/changemaker/correctincorrect.php?ID="+ID, true);
		xhttp3.send();

		function receiveData(fibonacciData){
			var data = fibonacciData[0];
			var incorrectData = data.INCORRECT;
			INCORRECTUSER = incorrectData;
			var correctData = data.CORRECT;
			CORRECTUSER = correctData;
			calculateUSERACCURACY();
			setTimeout(abcdefg, 700);
			function abcdefg(){
				WelcomeUser(USERNAME);
			}
		}
		
	}
}

function register(){
	var error = [];
	var confirm = [];
	var username = document.getElementById('registerUsername').value;
	var email = document.getElementById('registerEmail').value;
	var password = document.getElementById('registerPassword').value;
	var password2 = document.getElementById('registerPasswordConfirm').value;
	if( password != password2 ){
		error += ['Please make sure passwords match.<br>'];
		console.log(error);
	}
	if( username == '' || username == undefined ){
		error += ['Please fill out username field.<br>'];
		console.log(error);
	}
	if( email == '' || email == undefined ){
		error += ['Please fill out email field.<br>'];
		console.log(error);
	}
	if( password == '' || password == undefined ){
		error += ['Please fill out password field.<br>'];
		console.log(error);
	}
	document.getElementById('errorMsg').innerHTML = error;
	
	if( error.length == 0 ){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var receivePHP = xhttp.responseText;
				doPHP(receivePHP);
			}
		};
	
		xhttp.open("GET", "http://jaymartmedia.com/game/register.php?USERNAME="+username+"&PASSWORD="+password+"&EMAIL="+email, true);
		xhttp.send();
	}
	function doPHP(receivePHP){
		console.log('doing php');
		if( receivePHP == 'This username is taken.' ){
			error += ['Sorry, this username is taken. '];
		}else if( receivePHP == 'This email is taken.' ){
			error += ['Sorry, this email is taken. '];
		}else if( receivePHP == 'Invalid Email.' ){
			error += ['Please enter a valid email address. '];
		}else if( receivePHP == 'Success.' ){
			confirm += ['Your account has been created, please activate it by clicking on the activation link sent to your email. If you don\'t see an email from us, please check your spam folder.'];
			document.getElementById('confirmMsg').innerHTML = confirm;
		}

		document.getElementById('errorMsg').innerHTML = error;
	}

}

function sayInfo(){
	console.log('Username: '+USERNAME+' Password: '+PASSWORD+' ID: '+ID);
}

function resetSession(){
	sessionCorrect = 0;
	sessionIncorrect = 0;
	sessionRow = 0;
	sessionRecordRow = 0;
	sessionAccuracy = 100;
}
