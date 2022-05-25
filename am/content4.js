var content4Created = false;
var menu_h, elem_4_1, elem_4_2, elem_4_3, elem_4_4;
var timer0, timer1, timer2, timer3, timer4;

function runOnlyOnceForContent4() {
	// required but you can leave empty
}

function createContent4() {
	
	if (content4Created == false) {
		document.body.style.backgroundImage = "url('imagens/fundo.jpg')";

		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";
		
        elem_4_1 = document.createElement ("VIDEO");
		elem_4_1.id = "elem_4_1";
		elem_4_1.setAttribute("src", "videos/noshivideo.mp4");
		elem_4_1.setAttribute("muted", "true");
		elem_4_1.setAttribute("preload", "auto");
		elem_4_1.setAttribute("autoplay", "autoplay");
		document.body.appendChild(elem_4_1); 


		elem_4_2 = document.createElement ("p")
        elem_4_2.id="elem_4_2"
        elem_4_2.innerHTML = " <p> Situado na Rua do Carmo, o Noshi é um dos cafés mais acolhedores da Invicta. <br> Começou em 2017 e privilegia a comida saudável, sem açúcar e sem glúten. <br> Nesta Green Coffee Shop podemos também encontrar várias exposições temporárias de artistas."
		elem_4_2.style.backgroundColor = "#D1CFE2";

		elem_4_3= document.createElement("IMG");
		elem_4_3.src = "imagens/noshi1.jpg";
		elem_4_3.id = "elem_4_3";
        elem_4_3.addEventListener("mousedown", function () { switchContent("conteudo2") });

        elem_4_4 = document.createElement ("IMG");
        elem_4_4.src = "imagens/frasenoshi.png";
		elem_4_4.id = "elem_4_4";


		content4Created = true;
	}
}

    function content4BuildVideosAndHide() {

    }

    function resetContent4() {

	createContent4();
	menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);

	elem_4_1.style.opacity="0.0";
	document.body.appendChild(elem_4_1);
	
	elem_4_2.style.opacity = "0.0";
	document.body.appendChild(elem_4_2);
	
	elem_4_3.style.opacity = "0.0";
	document.body.appendChild(elem_4_3);

    elem_4_4.style.opacity = "0.0";
	document.body.appendChild(elem_4_4);

    }

function displayContent4() {

	resetContent4();

	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);

	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_4_1, 0.03);
		},30);
	}, 1100);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, elem_4_2, 0.03);
		}, 30);
	}, 8500);

	window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, elem_4_3, 0.03);
		}, 30);
	}, 9500);

    window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, elem_4_4, 0.03);
		}, 30);
	}, 10000);


}


   

function hideContent4() {
	menu_h.parentNode.removeChild(menu_h);
	elem_4_1.parentNode.removeChild(elem_4_1);
	elem_4_2.parentNode.removeChild(elem_4_2);
	elem_4_3.parentNode.removeChild(elem_4_3);
    elem_4_4.parentNode.removeChild(elem_4_4);
}
