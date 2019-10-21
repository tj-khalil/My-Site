function Mathsss(){

const math1 = parseInt(prompt('Please enter an angle between 1 and 90'));

if (math1 > 90){
	return alert('Number should be between 1 and 90');
}

else if (math1 <= 0){
	return alert('Number should be between 1 and 90');
}

else if (math1 == ''){
	return alert('Number should be between 1 and 90');
}

const math2 = parseInt(prompt('Please enter another angle between 1 and 90'));

if (math2 > 90){
	return alert('Number should be between 1 and 90');
}

else if (math2 <= 0){
	return alert('Number should be between 1 and 90');
}

else if (math1 == ''){
	return alert('Number should be between 1 and 90');
}

return alert('Your remaining angle is ' + (180 -(math1 + math2)));
}

