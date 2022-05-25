var content1Created = false;
var elem_1_1, elem_1_2;
var timer_1_1, timer_1_2;

function runOnlyOnceForContent1() {
	// required but you can leave empty
}

function createContent1() {
	
	if (content1Created == false) {
        elem_1_1 = document.createElement("VIDEO");
		elem_1_1.id = "elem_1_1";
		elem_1_1.setAttribute("src", "videos/index.mp4");
		elem_1_1.setAttribute("muted", "true");
		elem_1_1.setAttribute("preload", "auto");
		elem_1_1.setAttribute("autoplay", "autoplay");
		elem_1_1.setAttribute("controls", "hidden");
		document.body.appendChild(elem_1_1);


        elem_1_2 = document.createElement("IMG");
		elem_1_2.src = "imagens/logoinicio.png";
		elem_1_2.id = "elem_1_2";
		elem_1_2.addEventListener("mousedown", function () { switchContent("conteudo2") });
        elem_1_2.addEventListener("mouseover", transparencia);
        elem_1_2.addEventListener("mouseout", opacidade);

		content1Created = true;

	}
}

function content1BuildVideosAndHide() {

}

function resetContent1() {

	createContent1();
	
	elem_1_1.style.opacity = "0.8";
	document.body.appendChild(elem_1_1);

    elem_1_2.style.opacity = "0.0";
	document.body.appendChild(elem_1_2);
    }

    function transparencia() {
    document.getElementById("elem_1_2").style.opacity="0.7";
    }
    function opacidade() {
    document.getElementById("elem_1_2").style.opacity="1";
    }

function displayContent1() {

	resetContent1();
	window.setTimeout(function() {
		timer_1_1 = window.setInterval(function() {
			generalFadein(timer_1_1, elem_1_1, 0.03);
		},30);
	}, 500);

    window.setTimeout(function() {
		timer_1_2 = window.setInterval(function () {
			generalFadein(timer_1_2, elem_1_2, 0.03);
		}, 30);
	}, 700);

}



function hideContent1() {
	elem_1_1.parentNode.removeChild(elem_1_1);
    elem_1_2.parentNode.removeChild(elem_1_2);

}

function tirarmenu_h() {
	document.body.removeChild(menu_h);
}