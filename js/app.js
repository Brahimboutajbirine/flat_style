// variables here :

let sandwich = document.getElementById('sandwich');
let nav = document.getElementById('nav');

let bullet0 = document.getElementById('bullet0');
let bullet1 = document.getElementById('bullet1');
let bullet2 = document.getElementById('bullet2');
let bullet3 = document.getElementById('bullet3');
let bullet4 = document.getElementById('bullet4');

let slider = document.getElementById('slider');


let current = "bg0";

// responsive sandwich bar

sandwich.addEventListener('click', function(){
	nav.classList.toggle('show');
});

//slider

bullet0.addEventListener('click', function(){
	if (current !== "bg0"){
		slider.classList.remove(current);
		slider.classList.add('bg0');
	}
	current = "bg0"
});
bullet1.addEventListener('click', function(){
	if (current !== "bg1") {
		slider.classList.remove(current);
		slider.classList.add('bg1');
	}
	current = "bg1";
});
bullet2.addEventListener('click', function(){
	if (current !== "bg2") {
		slider.classList.remove(current);
		slider.classList.add('bg2');
	}
	current = "bg2";
});
bullet3.addEventListener('click', function(){
	if (current !== "bg3") {
		slider.classList.remove(current);
		slider.classList.add('bg3');
	}
	current = "bg3";
});
bullet4.addEventListener('click', function(){
	if (current !== "bg4") {
		slider.classList.remove(current);
		slider.classList.add('bg4');
	}
	current = "bg4";
});

