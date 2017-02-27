import "babel-polyfill";
let b = {
	name : 'hey'
}

let c = {
	age: 13
}

let d = Object.assign({},b,c);
console.log(d);