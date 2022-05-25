var content6Created = false;
var menu_h, elem_6_1, elem_6_2, elem_6_3, elem_6_4; 
var timer0, timer1, timer2, timer3, timer4;
function runOnlyOnceForContent6() {
	// required but you can leave empty
}

function createContent6() {
	
	if (content6Created == false) {
		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";
		
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";
        
		elem_6_1 = document.createElement ("VIDEO");
		elem_6_1.id = "elem_6_1";
		elem_6_1.setAttribute("src", "videos/mannavideo.mp4");
		elem_6_1.setAttribute("muted", "true");
		elem_6_1.setAttribute("preload", "auto");
		elem_6_1.setAttribute("autoplay", "autoplay");
		document.body.appendChild(elem_6_1);


		elem_6_2 = document.createElement ("p")
        elem_6_2.id="elem_6_2"
        elem_6_2.innerHTML = " <p> O MANNA está situado na Rua da Conceição, em plena Baixa do Porto. <br> O projeto nasceu em 2019 e junta o estilo de vida saudável com a prática do yoga."
		elem_6_2.style.backgroundColor = "#C8D6A5";

		elem_6_3= document.createElement("IMG");
		elem_6_3.src = "imagens/manna1.jpg";
		elem_6_3.id = "elem_6_3";

        elem_6_4 = document.createElement ("IMG");
        elem_6_4.src = "imagens/frasemanna.png";
		elem_6_4.id = "elem_6_4";


		content6Created = true;
	}
}

    function content6BuildVideosAndHide() {

    }

    function resetContent6() {

	createContent6();
	menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);

	elem_6_1.style.opacity="0.0";
	document.body.appendChild(elem_6_1);
	
	elem_6_2.style.opacity = "0.0";
	document.body.appendChild(elem_6_2);
	
	elem_6_3.style.opacity = "0.0";
	document.body.appendChild(elem_6_3);

    elem_6_4.style.opacity = "0.0";
	document.body.appendChild(elem_6_4);

    }

function displayContent6() {

	resetContent6();
	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);


	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_6_1, 0.03);
		},30);
	}, 1100);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, elem_6_2, 0.03);
		}, 30);
	}, 8500);

	window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, elem_6_3, 0.03);
		}, 30);
	}, 9500);

    window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, elem_6_4, 0.03);
		}, 30);
	}, 10000);


}


   

function hideContent6() {

	menu_h.parentNode.removeChild(menu_h);
	elem_6_1.parentNode.removeChild(elem_6_1);
	elem_6_2.parentNode.removeChild(elem_6_2);
	elem_6_3.parentNode.removeChild(elem_6_3);
    elem_6_4.parentNode.removeChild(elem_6_4);
}
