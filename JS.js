function Mathsss(){

	const math1 = parseInt(prompt('Please enter an angle between 1 and 90'));

	if (math1 < 90 && math1 > 0){
	
		const math2 = parseInt(prompt('Please enter another angle between 1 and 90'));
	
		if (math2 < 90 && math2 > 0){

			alert('Your remaining angle is ' + (180 -(math1 + math2)));
			
		} else {
			math2 = alert('Wrong! Please enter another angle between 1 and 90');
		}
	} else {
		math1 = alert('Wrong! Please enter an angle between 1 and 90');
	}
}

function Cent(){

	const year = parseInt(prompt('Please enter a year.'));

	if (year <= 0){
		alert('Please enter a valid year.');
	}

	else {
	alert('This year is in century '+ Math.ceil(year / 100))
	}
}

function counter(){
var x = 0;
	while (x <= 99){
		x = x + 1;
		if(x % 4 == 0 && x % 10 == 0) {
			alert('tenfour');
		}else if (x % 10 == 0){
			alert('ten');
		}else if (x % 4 == 0){
			alert('four');
		}else {
			alert(x);
		}
	}
}

function str_lgn(){
	const nem = prompt('Enter a word here');
	alert('Your string has '+nem.length+' characters.')
};

function login_(){
	const user_name = prompt('Please enter your username.');

		var res = user_name.toLowerCase();

	const user_pass = prompt('Please enter your password.');

	if(res == 'tjkhalil' && user_pass == '123'){
		alert('True')
	}

	else{
		alert('False')
	}

	
}

function every_other(){

}