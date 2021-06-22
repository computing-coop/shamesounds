let hautgauche, hautdroit, basgauche, basdroit, centre;
let bloublou = [hautdroit, hautgauche, basdroit, basgauche, centre];
let allobject = ['abribus','air','appeleur','bac','banc','barrage','guide','guideB','moto','oeuvre']
let allobj = allobject;
let size = [110, 85, 70];
let insideobj = false;

let request = new XMLHttpRequest();
request.open("GET", "soundsfile.json", false);
request.send(null)
let content = JSON.parse(request.responseText);



function sethautgauche() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(15, 50);

		if (x < 25) {
			y = getRandomInt(15, 50);
		} else {
			y = getRandomInt(15, 25);
		}

	} else {

		y = getRandomInt(15, 50);

		if (y < 25) {
			x = getRandomInt(15, 50);
		} else {
			x = getRandomInt(15, 25);
		}
	}

	let numberall = getRandomInt(0, allobj.length - 1);
	hautgauche = [x, y, getRandomInt(75, 100), getRandomInt(1, 3), allobj[numberall]];
	allobj.splice(numberall, 1);

}

function sethautdroit() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(60, 85);

		if (x < 75) {
			y = getRandomInt(15, 50);
		} else {
			y = getRandomInt(15, 25);
		}

	} else {

		y = getRandomInt(15, 35);

		if (y < 25) {
			x = getRandomInt(50, 85);
		} else {
			x = getRandomInt(50, 75);
		}
	}

	let numberall = getRandomInt(0, allobj.length - 1);
	hautdroit = [x, y, getRandomInt(75, 100), getRandomInt(1, 3), allobj[numberall]];
	allobj.splice(numberall, 1);

}

function setbasgauche() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(15, 50);

		if (x < 25) {
			y = getRandomInt(50, 85);
		} else {
			y = getRandomInt(50, 75);
		}

	} else {

		y = getRandomInt(60, 85);

		if (y < 75) {
			x = getRandomInt(15, 39);
		} else {
			x = getRandomInt(15, 25);
		}
	}

	let numberall = getRandomInt(0, allobj.length - 1);
	basgauche = [x, y, getRandomInt(75, 100), getRandomInt(1, 3), allobj[numberall]];
	allobj.splice(numberall, 1);

}

            function soundAction() {
              document.getElementsByClassName('sound')[0].classList.toggle('on');
                            	let allaudio = document.getElementsByClassName('audi');

              if (document.getElementsByClassName('sound')[0].classList.contains('on')) {
              	for (var i = 0; i < allaudio.length; i++) {
              		allaudio[i].muted = false;
              	}
              } else {
              	for (var i = 0; i < allaudio.length; i++) {
              		allaudio[i].muted = true;
              	}

              }
}

function setbasdroit() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(60, 85);

		if (x < 75) {
			y = getRandomInt(50, 85);
		} else {
			y = getRandomInt(50, 75);
		}

	} else {

		y = getRandomInt(60, 85);

		if (y < 75) {
			x = getRandomInt(50, 85);
		} else {
			x = getRandomInt(50, 75);
		}
	}

	let numberall = getRandomInt(0, allobj.length - 1);

	basdroit = [x, y, getRandomInt(75, 100), getRandomInt(1, 3), allobj[numberall]];
	allobj.splice(numberall, 1);

}


function setcentre() {
	let x = getRandomInt(35, 55);
	let y =  getRandomInt(35, 55);
	let numberall = getRandomInt(0, allobject.length - 1);
	centre = [x, y, getRandomInt(65, 80), getRandomInt(1, 3), allobj[numberall]];
	allobj.splice(numberall, 1);

}

function reset() {
	sethautgauche();
	sethautdroit();
	setbasdroit();
	setbasgauche();
	setcentre();
	document.getElementById('imgcontainer').innerHTML = '';
	bloublou = [hautdroit, hautgauche, basdroit, basgauche, centre];
	content = JSON.parse(request.responseText);

	allobj  = ['abribus','air','appeleur','bac','banc','barrage','guide','guideB','moto','oeuvre']
for (var i = 0; i < bloublou.length; i++) {
	var img = document.createElement("img");
img.src = "https://feministcurricula.org/careclub/imgsmall/" + bloublou[i][4] + bloublou[i][3] + ".png";
img.setAttribute('data-large', "https://feministcurricula.org/careclub/img/" + bloublou[i][4] + bloublou[i][3] + ".png");
img.classList.add('blurry-load');


	let numbersound = getRandomInt(0, content.length - 1);


img.setAttribute('objet', bloublou[i][4]);
img.setAttribute('number', bloublou[i][3]);
img.setAttribute('date', content[numbersound]['date']);
img.setAttribute('hours', content[numbersound]['hours']);
img.setAttribute('id', i);


img.addEventListener("mouseout", function( event ) {
	if(!insideobj) {
document.getElementById('audio' + this.id).pause();
	datedisappear();


	} 
});

img.addEventListener("mouseover", function( event ) {
	document.getElementById('audio' + this.id).play();
	console.log(document.getElementById('audio' + this.id).currentTime);
		dateappear(this);

}, false);

img.addEventListener("click", function( event ) {
	let currentTimeImp = document.getElementById('audio' + this.id).currentTime;
	document.getElementById('audio' + this.id).src = document.getElementById('audio' + this.id).src.split('#')[0];
	document.getElementById('audio' + this.id).currentTime = currentTimeImp;
	document.getElementById('audio' + this.id).play();

}, false);


if (content[numbersound]['s2'] == '') {
	img.setAttribute('seq', content[numbersound]['s1']);
} else {

	if (content[numbersound]['s3'] == '') {

		let choice = getRandomInt(1, 2);
		if (choice == 1){
	img.setAttribute('seq', content[numbersound]['s1']);

		} else {
				img.setAttribute('seq', content[numbersound]['s2']);
		}
} else {

			let choice = getRandomInt(1, 3);
		if (choice == 1){
	img.setAttribute('seq', content[numbersound]['s1']);

		} else if (choice == 2) {
				img.setAttribute('seq', content[numbersound]['s2']);
		} else {
							img.setAttribute('seq', content[numbersound]['s3']);
		}

}

let datons = content[numbersound]['date'].split('.');
let source = 'https://feministcurricula.org/careclub/sons/' + datons[2] + '.' + datons[1] + '.' + datons[0] + '_' + content[numbersound]['hours'] + '.mp3';
let sequence = img.getAttribute('seq').split('-');
document.getElementById('audio' + i).src = source + '#t=' + sequence[0]  +',' + sequence[1];

}

img.style.position = 'absolute';

img.classList.add('open');

if (window.innerWidth < 980) {
img.style.width = 50*size[bloublou[i][3]-1]/100 + 'vh';

} else {
	img.style.width = 110*size[bloublou[i][3]-1]/100 + 'vh';
	//img.onClick = function() { 	objOpen(this)};

}
img.style.height = 'auto';
img.style.top =  bloublou[i][1] + 'vh';
img.style.left =  bloublou[i][0] + 'vw';
img.classList.add('scaleup');
if (i%2 == 0)img.classList.add('inv');
document.getElementById('imgcontainer').appendChild(img);
content.splice(numbersound, 1);
}

const blurryImageLoad = new BlurryImageLoad();
blurryImageLoad.load();


}

	reset()



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function(){
  $(window).on('load', function(){
    $('[data-src]').each(function(){
      var $this = $(this),
          src = $(this).data('src');
      $this.attr('src', src);
      console.log(src);
    });
  });
});