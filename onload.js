function onload(){
	Home();
	document.getElementById('sheets').innerHTML = '<link href="welcome.css" rel="stylesheet"></style>';

	if((localStorage.getItem('ChangeMakerUsernameSaved') != ('' || null || undefined || 'undefined')) && (localStorage.getItem('ChangeMakerPasswordSaved') != ('' || null || undefined || 'undefined'))){
		console.log('username, password are not blank');
		console.log('Username: '+localStorage.getItem('ChangeMakerUsernameSaved'));
		console.log('Password: '+localStorage.getItem('ChangeMakerPasswordSaved'));
		login();
	}else{
		console.log('Some are blank');
		console.log('Username: '+localStorage.getItem('ChangeMakerUsernameSaved'));
		console.log('Password: '+localStorage.getItem('ChangeMakerPasswordSaved'));
	}
}