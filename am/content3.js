var content3Created = false;
var elem_3_1, menu_h; 
var timer0, timer1;

function runOnlyOnceForContent3() {
	// required but you can leave empty
}

function createContent3() {
	
	if (content3Created == false) {
		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";

		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";

        elem_3_1 = document.createElement ("VIDEO");
		elem_3_1.id = "elem_3_1";
		elem_3_1.setAttribute("src", "videos/trailervideo.mp4");
		elem_3_1.setAttribute("muted", "true");
		elem_3_1.setAttribute("preload", "auto");
		elem_3_1.setAttribute("autoplay", "autoplay");
		document.body.appendChild(elem_3_1);

		content3Created = true;
	}
}

    function content3BuildVideosAndHide() {

    }

    function resetContent3() {

	createContent3();
	
	menu_h.style.opacity="0.0(";
	document.body.appendChild(menu_h);
	elem_3_1.style.opacity="0.0";
	document.body.appendChild(elem_3_1);

    }

function displayContent3() {

	resetContent3();
	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);

	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_3_1, 0.03);
		},30);
	}, 1100);


}

function hideContent3() {
	menu_h.parentNode.removeChild(elem_3_1);
	elem_3_1.parentNode.removeChild(elem_3_1);
}
