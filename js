let hautgauche, hautdroit, basgauche, basdroit, centre;
let bloublou = [hautdroit, hautgauche, basdroit, basgauche, centre];
function sethautgauche() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(0, 50);

		if (x < 25) {
			y = getRandomInt(0, 50);
		} else {
			y = getRandomInt(0, 25);
		}

	} else {

		y = getRandomInt(0, 50);

		if (y < 25) {
			x = getRandomInt(0, 50);
		} else {
			x = getRandomInt(0, 25);
		}
	}

	hautgauche = [x, y, getRandomInt(0.75, 1), getRandomInt(1, 3)];
}

function sethautdroit() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(50, 100);

		if (x < 75) {
			y = getRandomInt(0, 50);
		} else {
			y = getRandomInt(0, 25);
		}

	} else {

		y = getRandomInt(0, 50);

		if (y < 25) {
			x = getRandomInt(50, 100);
		} else {
			x = getRandomInt(50, 75);
		}
	}

	hautdroit = [x, y, getRandomInt(0.75, 1), getRandomInt(1, 3)];
}

function setbasgauche() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(0, 50);

		if (x < 25) {
			y = getRandomInt(50, 100);
		} else {
			y = getRandomInt(50, 75);
		}

	} else {

		y = getRandomInt(50, 100);

		if (y < 75) {
			x = getRandomInt(0, 50);
		} else {
			x = getRandomInt(0, 25);
		}
	}

	basgauche = [x, y, getRandomInt(0.75, 1), getRandomInt(1, 3)];
}

function setbasdroit() {

	let x, y;
	if (Math.random() > 0.5) {

		x = getRandomInt(50, 100);

		if (x < 75) {
			y = getRandomInt(50, 100);
		} else {
			y = getRandomInt(50, 75);
		}

	} else {

		y = getRandomInt(50, 100);

		if (y < 75) {
			x = getRandomInt(50, 100);
		} else {
			x = getRandomInt(50, 75);
		}
	}

	basdroit = [x, y, getRandomInt(0.75, 1), getRandomInt(1, 3)];
}


function setcentre() {
	let x = getRandomInt(25, 75);
	let y =  getRandomInt(25, 75);
	centre = [x, y, getRandomInt(0.75, 1), getRandomInt(1, 3)];
}

function reset() {
	sethautgauche();
	sethautdroit();
	setbasdroit();
	setbasgauche();
	setcentre();
	document.getElementById('imgcontainer').innerHTML = '';
	bloublou = [hautdroit, hautgauche, basdroit, basgauche, centre];
for (var i = 0; i < bloublou.length; i++) {
	var img = document.createElement("img");
img.src = "img/obj/" + bloublou[i][4] + bloublou[i][3] + ".png";
img.setAttribute('objet', bloublou[i][4]);
img.setAttribute('number', bloublou[i][3]);
img.style.position = 'absolute';
img.style.width = 50*bloublou[i][2] + 'vw';
img.style.height = 'auto';
img.style.top =  bloublou[i][1];
img.style.left =  bloublou[i][0];
document.getElementById('imgcontainer').appendChild(img);
}

	

}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}