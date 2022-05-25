var content5Created = false;
var menu_h, elem_5_1, elem_5_2, elem_5_3, elem_5_4;
var timer0, timer1, timer2, timer3, timer4;

function runOnlyOnceForContent5() {
	// required but you can leave empty
}

function createContent5() {
	
	if (content5Created == false) {

		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";
		
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";

        elem_5_1 = document.createElement ("VIDEO");
		elem_5_1.id = "elem_5_1";
		elem_5_1.setAttribute("src", "videos/nicolauvideo.mp4");
		elem_5_1.setAttribute("muted", "false");
		elem_5_1.setAttribute("preload", "auto");
		elem_5_1.setAttribute("autoplay", "autoplay");
		document.body.appendChild(elem_5_1);

		elem_5_2 = document.createElement ("p")
        elem_5_2.id="elem_5_2"
        elem_5_2.innerHTML = " <p> É no largo Alberto Pimental que se situa o Nicolau. <br> Uma esquina verde no Porto cheia de luz e vida <br> Inaugurado em 2016, o espaço é já conhecido pelo seu brunch, pensado para ser dividido entre amigos."
		elem_5_2.style.backgroundColor = "#C8E4D6";

        elem_5_3= document.createElement("IMG");
		elem_5_3.src = "imagens/frasenicolau.png";
		elem_5_3.id = "elem_5_3";

		elem_5_4= document.createElement("IMG");
		elem_5_4.src = "imagens/nicolau2.jpg";
		elem_5_4.id = "elem_5_4";
		elem_5_4.style.marginBottom="8px";


		content5Created = true;
	}
}

    function content5BuildVideosAndHide() {

    }

    function resetContent5() {

	createContent5();

	menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);

	elem_5_1.style.opacity="0.0";
	document.body.appendChild(elem_5_1);
	
	elem_5_2.style.opacity = "0.0";
	document.body.appendChild(elem_5_2);
	
    elem_5_3.style.opacity = "0.0";
	document.body.appendChild(elem_5_3);

	elem_5_4.style.opacity = "0.0";
	document.body.appendChild(elem_5_4);
    }

function displayContent5() {

	resetContent5();

	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);

	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_5_1, 0.03);
		},30);
	}, 1100);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, elem_5_2, 0.03);
		}, 30);
	}, 7500);

    window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, elem_5_3, 0.03);
		}, 30);
	}, 9800);

	window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, elem_5_4, 0.03);
		}, 30);
	}, 8500);


}


function hideContent5() {
	menu_h.parentNode.removeChild(menu_h);
	elem_5_1.parentNode.removeChild(elem_5_1);
	elem_5_2.parentNode.removeChild(elem_5_2);
    elem_5_3.parentNode.removeChild(elem_5_2);
	elem_5_3.parentNode.removeChild(elem_5_2);
}
