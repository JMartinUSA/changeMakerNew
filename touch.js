var body = document.getElementById('body');

// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
body = new Hammer.Manager(body);

// Press recognizer with minimal 2000ms press
body.add( new Hammer.Swipe);
// This is where the magic happens
body.on("swipeleft", function(ev) {
    console.log('You swiped left on "body"');
    Stats();
});
body.on("swiperight", function(ev) {
    console.log('You swiped right on "body"');
    Menu();
});

var left = document.getElementById('left');
left = new Hammer.Manager(left);
left.add( new Hammer.Swipe);
left.on("swipeleft", function(ev) {
	document.getElementById('left').innerHTML = '';
});
left.on("swiperight", function(ev) {
});

var right = document.getElementById('right');
right = new Hammer.Manager(right);
right.add( new Hammer.Swipe);
right.on("swipeleft", function(ev) {
});
right.on("swiperight", function(ev) {
	document.getElementById('right').innerHTML = '';
});

var gameResult = document.getElementById('gameResult');
gameResult = new Hammer.Manager(gameResult);
gameResult.add( new Hammer.Swipe);
gameResult.on("swipeleft", function(ev) {
	Stats();
});
gameResult.on("swiperight", function(ev) {
	Menu();
});

