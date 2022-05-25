var content7Created = false;
var menu_h, elem_7_1, elem_7_2, elem_7_3, elem_7_4; 
var timer0, timer1, timer2, timer3, timer4;

function runOnlyOnceForContent7() {
	// required but you can leave empty
}

function createContent7() {
	
	if (content7Created == false) {
		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";
		
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";
        
		elem_7_1 = document.createElement ("VIDEO");
		elem_7_1.id = "elem_7_1";
		elem_7_1.setAttribute("src", "videos/umbigovideo.mp4");
		elem_7_1.setAttribute("muted", "true");
		elem_7_1.setAttribute("preload", "auto");
		elem_7_1.setAttribute("autoplay", "autoplay");
		document.body.appendChild(elem_7_1);


		elem_7_2 = document.createElement ("p")
        elem_7_2.id="elem_7_2"
        elem_7_2.innerHTML = " <p> O Umbigo Feliz está situado na Rua Dr. Afonso Cordeiro, em Matosinhos. <br> O projeto nasceu em 2017 e alia o estilo de vida saudável com a comida tradicional portuguesa, em marmitas únicas."
		elem_7_2.style.backgroundColor = "#C8D6A5";

		elem_7_3= document.createElement("IMG");
		elem_7_3.src = "imagens/umbigo1.jpg";
		elem_7_3.id = "elem_7_3";

        elem_7_4 = document.createElement ("IMG");
        elem_7_4.src = "imagens/fraseumbigo.png";
		elem_7_4.id = "elem_7_4";


		content7Created = true;
	}
}

    function content7BuildVideosAndHide() {

    }

    function resetContent7() {

	createContent7();

	menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);

	elem_7_1.style.opacity="0.0";
	document.body.appendChild(elem_7_1);
	
	elem_7_2.style.opacity = "0.0";
	document.body.appendChild(elem_7_2);
	
	elem_7_3.style.opacity = "0.0";
	document.body.appendChild(elem_7_3);

    elem_7_4.style.opacity = "0.0";
	document.body.appendChild(elem_7_4);

    }

function displayContent7() {

	resetContent7();
	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);


	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_7_1, 0.03);
		},30);
	}, 1100);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, elem_7_2, 0.03);
		}, 30);
	}, 9500);

	window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, elem_7_3, 0.03);
		}, 30);
	}, 10000);

    window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, elem_7_4, 0.03);
		}, 30);
	}, 10500);


}


   

function hideContent7() {
	menu_h.parentNode.removeChild(menu_h);
	elem_7_1.parentNode.removeChild(elem_7_1);
	elem_7_2.parentNode.removeChild(elem_7_2);
	elem_7_3.parentNode.removeChild(elem_7_3);
    elem_7_4.parentNode.removeChild(elem_7_4);
}
