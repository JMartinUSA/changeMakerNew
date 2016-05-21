function comingSoon(){
	alert("This feature coming soon!!");
}
function Stats(){
	exitSubmenu();
	if(!LOGGEDIN){
		document.getElementById('right').innerHTML = '<!-- Stats -->\
		<link href="stats.css" rel="stylesheet"></style>\
		<div id="stats">\
			<div id="statText">\
				<br>\
				<br>\
				<br>\
				<br>\
				<br>\
				Correct: '+sessionCorrect+'<br>\
				Incorrect: '+sessionIncorrect+'<br>\
				Accuracy: '+sessionAccuracy+'%<br>\
			</div>\
			<div id="backButton" onclick="exitSubmenu();">Back</div>\
		</div>';
	}else if(LOGGEDIN){
		document.getElementById('right').innerHTML = '<!-- Stats -->\
		<link href="stats.css" rel="stylesheet"></style>\
		<div id="stats">\
			<div id="statText">\
				<br>\
				Welcome, '+USERNAME+'<br>\
				Thank you for playing!<br>\
				<br>\
				This Session<br>\
				Correct: '+sessionCorrect+'<br>\
				Incorrect: '+sessionIncorrect+'<br>\
				Accuracy: '+sessionAccuracy+'%<br>\
				<br>\
				Your Alltime Scores<br>\
				Alltime Correct: '+CORRECTUSER+'<br>\
				Alltime Incorrect: '+INCORRECTUSER+'<br>\
				Alltime Accuracy: '+ACCURACYUSER+'%<br>\
			</div>\
			<div id="backButton" onclick="exitSubmenu();">Back</div>\
		</div>';
	}
}
function Menu(){
	exitSubmenu();
	if(!LOGGEDIN){
		document.getElementById('left').innerHTML = '<!-- Menu -->\
		<link href="menu.css" rel="stylesheet"></style>\
		<div id="transparentCover"></div>\
		<div id="menu">\
			<div id="menuButton0" class="menuButton" onclick="Home();exitLeft();">Home</div>\
			<div id="menuButton1" class="menuButton" onclick="Stats();exitLeft();">Stats</div>\
			<div id="menuButton2" class="menuButton" onclick="comingSoon();exitLeft();">Settings</div>\
			<div id="menuButton3" class="menuButton" onclick="exitLeft();insertLogin();">Login</div>\
		</div>';
	}else if(LOGGEDIN){
		document.getElementById('left').innerHTML = '<!-- Menu -->\
		<link href="menu.css" rel="stylesheet"></style>\
		<div id="transparentCover"></div>\
		<div id="menu">\
			<div id="menuButton0" class="menuButton" onclick="Home();exitLeft();">Home</div>\
			<div id="menuButton1" class="menuButton" onclick="Stats();exitLeft();">Stats</div>\
			<div id="menuButton2" class="menuButton" onclick="comingSoon();exitLeft();">Settings</div>\
			<div id="menuButton3" class="menuButton" onclick="exitLeft();logout();">Logout</div>\
		</div>';
	}
}