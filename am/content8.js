var content8Created = false;
var elem_8_1, elem_8_2, elem_8_3, elem_8_4, menu_h;
var timer0, timer1, timer2, timer3, timer4;

function runOnlyOnceForContent8() {
	// required but you can leave empty
}

function createContent8() {

	
	if (content8Created == false) {
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h = document.createElement("nav");
		menu_h.classList.toggle('menu');
		menu_h.id = "menu_h";
		menu_h.innerHTML = "<ul><li><a href=\"index.html\"><img id= \"logomenu\" src=\"imagens/logoinicio.png\" width=\"300px\" height=\"120px\"></a></li></ul></nav>";
        
		elem_8_1 = document.createElement ("IMG");
        elem_8_1.src = "imagens/margarida.png";
		elem_8_1.style.marginLeft="300px";
		elem_8_1.style.width="300px";
		elem_8_1.style.height="350px";
		elem_8_1.style.marginTop= "120px";
        elem_8_1.id = "elem_8_1";
	
        elem_8_2 = document.createElement ("IMG");
        elem_8_2.src = "imagens/teresa.png";
		elem_8_2.style.marginLeft="200px";
		elem_8_2.style.width="300px";
		elem_8_2.style.height="350px";
        elem_8_2.id = "elem_8_2";

        elem_8_3 = document.createElement ("IMG");
        elem_8_3.src = "imagens/sofia.png";
		elem_8_3.style.marginLeft="150px";
		elem_8_3.style.width="300px";
		elem_8_3.style.height="350px";
        elem_8_3.id = "elem_8_3";

        elem_8_4 = document.createElement ("p")
        elem_8_4.id="elem_8_4"
        elem_8_4.innerHTML = " <p> Somos a Margarida, a Teresa e a Sofia. <br> Estamos no 2ºano do curso de ciências da comunicação <br> na Faculdade de Letras da Universidade do Porto. ";
		elem_8_4.style.backgroundColor = "#EFE7DB";
        elem_8_4.style.marginTop= "15px";
		elem_8_4.style.textAlign= "center";
		elem_8_4.style.fontWeight= "bold";

		content8Created = true;
	}
}

    function content8BuildVideosAndHide() {

    }

    function resetContent8() {

	createContent8();
    menu_h.style.opacity="0.0";
	document.body.appendChild(menu_h);
	
	elem_8_1.style.opacity="0.0";
	document.body.appendChild(elem_8_1);
	
	elem_8_2.style.opacity = "0.0";
	document.body.appendChild(elem_8_2);
	
	elem_8_3.style.opacity = "0.0";
	document.body.appendChild(elem_8_3);

    elem_8_4.style.opacity = "0.0";
	document.body.appendChild(elem_8_4);

    }

function displayContent8() {

	resetContent8();
	 
	window.setTimeout(function() {
		timer0 = window.setInterval(function() {
			generalFadein(timer0, menu_h, 0.03);
		},30);
	}, 300);

	window.setTimeout(function() {
		timer1 = window.setInterval(function() {
			generalFadein(timer1, elem_8_1, 0.03);
		},30);
	}, 700);

	window.setTimeout(function() {
		timer2 = window.setInterval(function () {
			generalFadein(timer2, elem_8_2, 0.03);
		}, 30);
	}, 900);

	window.setTimeout(function() {
		timer3 = window.setInterval(function () {
			generalFadein(timer3, elem_8_3, 0.03);
		}, 30);
	}, 1100);

    window.setTimeout(function() {
		timer4 = window.setInterval(function () {
			generalFadein(timer4, elem_8_4, 0.03);
		}, 30);
	}, 1400);
	


}


   

function hideContent8() {

	elem_8_1.parentNode.removeChild(elem_8_1);
	elem_8_2.parentNode.removeChild(elem_8_2);
	elem_8_3.parentNode.removeChild(elem_8_3);
    elem_8_4.parentNode.removeChild(elem_8_4);
	menu_h.parentNode.removeChild(menu_h);
}
