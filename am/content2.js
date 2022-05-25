var content2Created = false;
var menu1, menu2, menu3, menu4, menu5, menu6, menu_h; 
var timer0, timer1, timer2, timer3, timer4, timer5, timer6;

function runOnlyOnceForContent2() {
	// required but you can leave empty
}

function createContent2() {
	
	if (content2Created == false) {

		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";

		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";
	
		menu1 = document.createElement("IMG");
		menu1.src = "imagens/menu1.jpg";
		menu1.id = "menu1";
		menu1.style.width="280px";
		menu1.style.height="250px";
		menu1.style.marginLeft="40px";
		menu1.addEventListener("mouseover",doOnImageHover1);
		menu1.addEventListener("mouseleave",undoOnImageHover1);
		menu1.addEventListener("mousedown", function () { switchContent("conteudo3") });

	
		menu2 = document.createElement("IMG");
		menu2.src = "imagens/menu2.jpg";
		menu2.id = "menu2";
		menu2.style.marginLeft="30px";
		menu2.style.marginBottom="45px";
		menu2.style.width="280px";
		menu2.style.height="250px";
		menu2.addEventListener("mousedown", function () { switchContent("conteudo4") });
		menu2.addEventListener("mouseover",doOnImageHover2);
		menu2.addEventListener("mouseleave",undoOnImageHover2);
		
		menu3 = document.createElement("IMG");
		menu3.src = "imagens/menu3.jpg";
		menu3.id = "menu3";
		menu3.style.width="280px";
		menu3.style.height="250px";
		menu3.style.marginLeft="30px";
		menu3.addEventListener("mouseover",doOnImageHover3);
		menu3.addEventListener("mouseleave",undoOnImageHover3);
		menu3.addEventListener("mousedown", function () { switchContent("conteudo5") });

        menu4 = document.createElement("IMG");
		menu4.src = "imagens/menu4.jpg";
		menu4.id = "menu4";
		menu4.style.marginLeft="30px";
		menu4.style.marginBottom="45px";
		menu4.style.width="280px";
		menu4.style.height="250px";
		menu4.addEventListener("mouseover",doOnImageHover4);
		menu4.addEventListener("mouseleave",undoOnImageHover4);
		menu4.addEventListener("mousedown", function () { switchContent("conteudo6") });

        menu5 = document.createElement("IMG");
		menu5.src = "imagens/menu5.jpg";
		menu5.id = "menu5";
		menu5.style.marginLeft="30px";
		menu5.style.width="280px";
		menu5.style.height="250px";
		menu5.addEventListener("mouseover",doOnImageHover5);
		menu5.addEventListener("mouseleave",undoOnImageHover5);
		menu5.addEventListener("mousedown", function () { switchContent("conteudo7") });

		menu6 = document.createElement("IMG");
		menu6.src = "imagens/menu6.jpeg";
		menu6.id = "menu6";
		menu6.style.marginLeft="30px";
		menu6.style.marginBottom="45px";
		menu6.style.width="280px";
		menu6.style.height="250px";
		menu6.addEventListener("mouseover",doOnImageHover6);
		menu6.addEventListener("mouseleave",undoOnImageHover6);
		menu6.addEventListener("mousedown", function () { switchContent("conteudo8") });

		content2Created = true;
	}
}

    function content2BuildVideosAndHide() {

    }

    function resetContent2() {

	createContent2();

	menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);
	
	menu1.style.opacity = "0.0";
	document.body.appendChild(menu1);
	
	menu2.style.opacity = "0.0";
	document.body.appendChild(menu2);
	
	menu3.style.opacity = "0.0";
	document.body.appendChild(menu3);

    menu4.style.opacity = "0.0";
	document.body.appendChild(menu4);

    menu5.style.opacity = "0.0";
	document.body.appendChild(menu5);
	
	menu6.style.opacity = "0.0";
	document.body.appendChild(menu6);
    }

function displayContent2() {

	resetContent2();

	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 200);

	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, menu1, 0.03);
		},30);
	}, 500);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, menu2, 0.03);
		}, 30);
	}, 700);

	window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, menu3, 0.03);
		}, 30);
	}, 900);

    window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, menu4, 0.03);
		}, 30);
	}, 1100);

    window.setTimeout(function() {
		timer5 = window.setInterval(function () {
			generalFadein(timer5, menu5, 0.03);
		}, 30);
	}, 1300);
	
	window.setTimeout(function() {
		timer6 = window.setInterval(function () {
			generalFadein(timer6, menu6, 0.03);
		}, 30);
	}, 1300);
}


//funções menu

function doOnImageHover1 (){
	var imagehover1 = document.getElementById("menu1");
	imagehover1.src ="imagens/menu1-hover.jpg";}

function undoOnImageHover1 (){
	var imagehover1 = document.getElementById("menu1");
	imagehover1.src ="imagens/menu1.jpg";}

function doOnImageHover2 (){
	var imagehover2 = document.getElementById("menu2");
	imagehover2.src ="imagens/menu2-hover.jpg";}

function undoOnImageHover2 (){
	var imagehover2 = document.getElementById("menu2");
	imagehover2.src ="imagens/menu2.jpg"}
   
function doOnImageHover3 (){
	var imagehover3 = document.getElementById ("menu3");
	imagehover3.src ="imagens/menu3-hover.jpg";}

function undoOnImageHover3 (){
	var imagehover3 = document.getElementById ("menu3");
	imagehover3.src ="imagens/menu3.jpg";}

function doOnImageHover4 (){
var imagehover4 = document.getElementById ("menu4");
imagehover4.src ="imagens/menu4-hover.jpg";}

function undoOnImageHover4 (){
var imagehover4 = document.getElementById ("menu4");
imagehover4.src ="imagens/menu4.jpg";}

function doOnImageHover5 (){
var imagehover5 = document.getElementById ("menu5");
imagehover5.src ="imagens/menu5-hover.jpg";}

function undoOnImageHover5 (){
var imagehover5 = document.getElementById ("menu5");
imagehover5.src ="imagens/menu5.jpg";}

function doOnImageHover6 (){
var imagehover6 = document.getElementById ("menu6");
imagehover6.src ="imagens/menu6-hover.jpeg";}
	
function undoOnImageHover6 (){
var imagehover6 = document.getElementById ("menu6");
imagehover6.src ="imagens/menu6.jpeg";}




function hideContent2() {

	menu_h.parentNode.removeChild(menu_h);
	menu1.parentNode.removeChild(menu1);
	menu2.parentNode.removeChild(menu2);
	menu3.parentNode.removeChild(menu3);
    menu4.parentNode.removeChild(menu4);
    menu5.parentNode.removeChild(menu5);
	menu6.parentNode.removeChild(menu6);



}



