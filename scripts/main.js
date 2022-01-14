let myBtn = document.querySelector('button')
let myH1 = document.querySelector('h1')
myH1.textContent = 'Hello';

function setUsrName(){
	let myName = prompt('Your Name？');
	while( myName === null || !myName ){
		myName = prompt('Your Name? ');
	}
	localStorage.setItem('name', myName);
	myH1.textContent = 'Hello, ' + myName;
}

if( !localStorage.getItem('name') ){
	setUsrName();
}else{
	let myName = localStorage.getItem('name');
	myH1.textContent = 'Hello, ' + myName;
}

myBtn.onclick = function(){
	setUsrName();
}