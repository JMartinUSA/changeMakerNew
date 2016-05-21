function Home(){
    insertHome();
}
function Game(){
    insertGame();
    setLevel();
}
function exitSubmenu(){
    document.getElementById('left').innerHTML = "";
    document.getElementById('right').innerHTML = "";
    document.getElementById('otherSubmenu').innerHTML = "";
    setTimeout(exitSheets, 6000);
    function exitSheets(){
      document.getElementById('sheets').innerHTML = "";
    }
}
function exitResult(){
    document.getElementById('gameResult').innerHTML = "";
}
function exitLeft(){
  document.getElementById('left').innerHTML = '';
}
function WelcomeUser(username){
  document.getElementById('welcomeUser').innerHTML = '<link rel="stylesheet" href="welcomeUser.css" />\
    <div id="roundContainer">\
      <div id="round">\
        <div id="roundText"> &nbsp Welcome, '+username+' &nbsp </div>\
      </div>\
    </div>';
    setTimeout(hideWelcome, 7000);
    function hideWelcome(){
      document.getElementById('welcomeUser').innerHTML = '';
      console.log('hidden');
    }
}
function insertHome(){
	document.getElementById('body').innerHTML='<!-- Index Container -->\
	<link href="home.css" rel="stylesheet"></style>\
    <div class="container" id="container">\
      	<div class="thumbnailIndex" id="welcomeIcon"> <img src="ChangeMaker400px.jpg" /></div>\
      	<div class="button" id="welcomeSlide1" onclick="Game();"> <p>Game</p> </div>\
      	<div class="button" id="welcomeSlide2" onclick="comingSoon();"> <p>Highscores</p> </div>\
      	<div class="button" id="welcomeSlide3" onclick="comingSoon();"> <p>Settings</p> </div>\
    </div>';
};

function insertLogin(){
  document.getElementById('otherSubmenu').innerHTML='<link rel="stylesheet" href="login.css" />\
    <div id="loginCover" class="loginCover" onclick="exitSubmenu();"></div>\
    <div id="loginContainer">\
      <div id="loginArea">\
        <div id="loginHeader">\
          <div id="loginTab" title="true" onclick="loginTab()">Login</div>\
          <div id="registerTab" title="false" onclick="registerTab()">Register</div>\
        </div>\
        <div id="loginSection">\
          <div class="loginSpacer">Username</div>\
          <input type="text" id="loginUsername">\
          <div class="loginSpacer">Password</div>\
          <input type="password" id="loginPassword">\
          <div id="errorMsgLogin"></div>\
          <div id="loginContinue" onclick="login()">Continue</div>\
        </div>\
        <div id="registerSection">\
          <div class="loginSpacer">Username</div>\
          <input type="text" id="registerUsername">\
          <div class="loginSpacer">Email</div>\
          <input type="text" id="registerEmail">\
          <div class="loginSpacer">Password</div>\
          <input type="password" id="registerPassword">\
          <div class="loginSpacer">Confirm Password</div>\
          <input type="password" id="registerPasswordConfirm">\
          <div id="errorMsg"></div>\
          <div id="confirmMsg"></div>\
          <div id="registerContinue" onclick="register()">Continue</div>\
        </div>\
      </div>\
    </div>';
}

function insertGame(){
	document.getElementById('body').innerHTML='<!--Game Container-->\
	<link href="game.css" rel="stylesheet"></style>\
	<div id="container">\
        <div id="gameContainer">\
        	<div id="top">\
        		<div id="totalSpacer"></div>\
        		<div id="total">\
        			A customer bought\
        			<div id="textBought"></div>\
        			for a total of\
        			<div id="textTotal"></div>\
        		</div>\
        		<div id="receivedSpacer"></div>\
        		<div id="received">\
        			They gave you\
        			<div id="textReceived"></div>\
        		</div>\
        		What is their change?\
        	</div>\
        	<div id="bottom">\
        		<div id="bills">\
        			<div id="ones" class="bills">\
        				<div id="onesPlus"><div class="arrowUp" onclick="plus(\'ones\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="oneDollar.jpg">\
        				</div>\
        				<div id="amountOnes" class="amount"></div>\
        				<div id="onesMinus"><div class="arrowDown" onclick="minus(\'ones\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="fives" class="bills">\
        				<div id="fivesPlus"><div class="arrowUp" onclick="plus(\'fives\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="fiveDollars.jpg">\
        				</div>\
        				<div id="amountFives" class="amount"></div>\
        				<div id="fivesMinus"><div class="arrowDown" onclick="minus(\'fives\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="tens" class="bills">\
        				<div id="tensPlus"><div class="arrowUp" onclick="plus(\'tens\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="tenDollars.jpg">\
        				</div>\
        				<div id="amountTens" class="amount"></div>\
        				<div id="tensMinus"><div class="arrowDown" onclick="minus(\'tens\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="twenties" class="bills">\
        				<div id="twentiesPlus"><div class="arrowUp" onclick="plus(\'twenties\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="twentyDollars.jpg">\
        				</div>\
        				<div id="amountTwenties" class="amount"></div>\
        				<div id="twentiesMinus"><div class="arrowDown" onclick="minus(\'twenties\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        		</div>\
        		<div id="moneySpacer"></div>\
        		<div id="change">\
        			<div id="pennies" class="change">\
        				<div id="penniesPlus"><div class="arrowUp" onclick="plus(\'pennies\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="penny.png">\
        				</div>\
        				<div id="amountPennies" class="amount amountChange"></div>\
        				<div id="penniesMinus"><div class="arrowDown" onclick="minus(\'pennies\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="nickels" class="change">\
        				<div id="nickelsPlus"><div class="arrowUp" onclick="plus(\'nickels\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="nickel.png">\
        				</div>\
        				<div id="amountNickels" class="amount amountChange"></div>\
        				<div id="nickelsMinus"><div class="arrowDown" onclick="minus(\'nickels\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="dimes" class="change">\
        				<div id="dimesPlus"><div class="arrowUp" onclick="plus(\'dimes\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="dime.png">\
        				</div>\
        				<div id="amountDimes" class="amount amountChange"></div>\
        				<div id="dimesMinus"><div class="arrowDown" onclick="minus(\'dimes\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        			<div id="quarters" class="change">\
        				<div id="quartersPlus"><div class="arrowUp" onclick="plus(\'quarters\');"><div class="arrowUpImg"></div></div></div>\
        				<div class="img">\
        					<img src="quarter.png">\
        				</div>\
        				<div id="amountQuarters" class="amount amountChange"></div>\
        				<div id="quartersMinus"><div class="arrowDown" onclick="minus(\'quarters\');"><div class="arrowDownImg"></div></div></div>\
        			</div>\
        		</div>\
        	</div>\
        	<div id="submit">\
        		<div id="buttonSpacer"></div>\
        		<div id="buttonSubmit" onclick="submitAnswer();">Submit</div>\
        	</div>\
        </div>\
    </div> '
};