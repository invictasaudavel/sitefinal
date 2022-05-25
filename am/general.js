
// initialize player to the first video. The name of the function must be onYouTubePlayerAPIReady() DO NOT CHANGE function name
function onYouTubePlayerAPIReady() {
	content1BuildVideosAndHide();
	content2BuildVideosAndHide();
	content3BuildVideosandHide();
	content4BuildVideosandHide();
	content5BuildVideosandHide();
	content6BuildVideosandHide();
	content7BuildVideosandHide();
	content8BuildVideosandHide();
}

function buildYoutubePlayer(htmlId, width, height, videoId, controls, playerReadyFunc, onPlayerStateChangeFunc) {

	var player = new YT.Player(htmlId, {
		height: width,
		width: height,
		videoId: videoId,
		playerVars: {
			autoplay: 1,
			controls: controls,
			vq: 'hd720'
		},
		events: {
			'onReady': playerReadyFunc,
			'onStateChange': onPlayerStateChangeFunc
		}
	});

	return player;
}

function generalFadein(timer, img, speed) {

	if (timer == null) {
		console.log("Está a passar para esta função um temporizador nulo. Fadein cancelado")
		return
	}

	if (img == null) {
		console.log("Está a passar para esta função uma imagem nula. Fadein cancelado")
		return
	}

	if (img.style.opacity == "") {
		img.style.opacity = "0.0";
	}

	var opacity = Number(img.style.opacity);
	if (opacity < 1) {
		opacity = opacity + speed;
		// in the next instruction, for instance number 0.7 is converted to the text representation "0.7" and stored in variable
		img.style.opacity = "" + opacity;
	}
	else {
		window.clearInterval(timer);
	}
}

function generalFadeoutAndRemove(timer, img, speed) {

	if (timer == null) {
		console.log("Está a passar para esta função um temporizador nulo. Fadeout cancelado")
		return
	}

	if (img == null) {
		console.log("Está a passar para esta função uma imagem nula. Fadeout cancelado")
		return
	}

	if (img.style.opacity == "") {
		img.style.opacity = "1.0";
	}

	var opacity = Number(img.style.opacity);
	if (opacity > 0) {
		opacity = opacity - speed;
		// in the next instruction, for instance number 0.7 is converted to the text representation "0.7" and stored in variable
		img.style.opacity = "" + opacity;
	}
	else {
		window.clearInterval(timer);
		if (img.parentNode != null) {
			img.parentNode.removeChild(img);
		}
	}
}

var currentCode=null;
var previousCode=null;



function runWhenSoundsAreLoaded() {	
}



function start() {
	elem_0_1 = document.createElement("DIV");
	elem_0_1.id = "elem0_1";
	document.body.appendChild(elem_0_1);

	

	runOnlyOnceForContent1();
	runOnlyOnceForContent2();
	runOnlyOnceForContent3();
	runOnlyOnceForContent4();
	runOnlyOnceForContent5();
	runOnlyOnceForContent6();
	runOnlyOnceForContent7();
	runOnlyOnceForContent8();


	switchContent("conteudo1");
}


function switchContent(code) {
	previousCode = code;
	if (currentCode != null) {
		hideCurrentContent();
	}
	displayContent(code);
}

function hideCurrentContent() {
	if (currentCode == "conteudo1") {
		hideContent1();
	}
	else
	if (currentCode == "conteudo2") {
		hideContent2();
	}
	else
	if (currentCode == "conteudo3") {
		hideContent3();
	}
	else
	if (currentCode == "conteudo4") {
		hideContent4();
	}
	else
	if (currentCode == "conteudo5") {
		hideContent5();
	}
	else
	if (currentCode == "conteudo6") {
		hideContent6();
	}
	else
	if (currentCode == "conteudo7") {
		hideContent7();
	}
	else
	if (currentCode == "conteudo8") {
		hideContent8();
	}
    currentCode = null;
}




function displayContent(code) {
	currentCode = code;

	if (code == "conteudo1") {
		displayContent1();
	}
	else
	if (code == "conteudo2") {
		displayContent2();
	}
	else
	if(code=="conteudo3") {
		displayContent3();
	}
	else
	if (code == "conteudo4") {
		displayContent4();
	}
	else
	if (code=="conteudo5") {
		displayContent5();
	}
	else
	if (code=="conteudo6") {
		displayContent6();
	}
	else
	if (code=="conteudo7") {
		displayContent7();
	}
	else
	if (code=="conteudo8") {
		displayContent8();
	}
}
