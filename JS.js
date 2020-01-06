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

function alternating(string){
  altstr = "";
  for(let i=1; i<string.length; i+=2){
    altstr += string[i-1].toUpperCase();
    altstr += string[i].toLowerCase();
  }
  return(altstr);

console.log(alternating("pais"));
}

function pigLatinTranslator(sentence){ //Made by fupuchu@repl.it

	sentence = prompt("Please enter a string")

	if(typeof(sentence)!=='string'){
	  alert('You must enter a valid string. The value you entered is not a string');
	  return false;
	}
	
	else{
	//split the sentence into an array of words
	var words = sentence.split(" ");
	
	//create an array to hold the new pigLatin sentence
	var pigLatinSentence = [];
	//loop through each word in the new array and split it to an array of characters
	for(var i=0;i<words.length;i++){
	  letters = words[i].split("");
	  
	  //extract the first element of the array, concantenate with "ay" and push it to the array of letters
	  letters.push(letters.splice(0,1)+"ay");
	  
	  //join the letters to form a new word
	  word = letters.join('');
	  
	  //if it is the first word of the sentence, convert the first letter to UpperCase
	  if(i===0){
		word = word.slice(0,1).toUpperCase() + word.slice(1);
	  }
	  
	  //push the newly formed words to the pigLatinSentence array
	  pigLatinSentence.push(word);
	}
	
	//join the words to form a new sentence
	pigLatinSentence = pigLatinSentence.join(" ");
	return alert(pigLatinSentence);
  }
}

function pigLatinComplicator(sentence1){

	sentence1 = prompt("Please enter a Pig Latin string")

	if(typeof(sentence1)!=='string'){
	  alert('You must enter a valid string. The value you entered is not a string');
	  return false;
	}
	
	else{
	var words1 = sentence1.split(" ");
	
	var pigLatinSentence1 = [];
	
	for(var i=0;i<words1.length;i++){
	  letters1 = words1[i].split("");
	  
	  
	  letters1.pop(letters1.splice(3,0)-"ay");
	  
	  
	  word1 = letters1.join('');
	  
	  
	  if(i===0){
		word1 = word1.slice(1,0).toLowerCase() + word1.slice(1);
	  }
	  
	
	  pigLatinSentence1.push(word1);
	}
	
	pigLatinSentence1 = pigLatinSentence1.join(" ");
	return alert(pigLatinSentence1);
  }
}