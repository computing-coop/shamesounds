let request = new XMLHttpRequest();
request.open("GET", "soundsfile.json", false);
request.send(null)
let content = JSON.parse(request.responseText);

let TEXT = '<div class="catalog" onclick="changesound(this)"><div class="datecat"></div><div class="hourcat"></div><div class="durationcat"></div></div>';


for (var i = 0; i < content.length; i++) {
    let container = document.createElement('div');

	 container.innerHTML = TEXT;

        let div = container.firstChild;
        div.setAttribute('date', content[i]['date']);
                div.setAttribute('hours', content[i]['hours']);

        div.querySelector('.datecat').innerHTML = content[i]['date'];
                div.querySelector('.hourcat').innerHTML = content[i]['hours'];
div.querySelector('.durationcat').innerHTML = content[i]['duration'];
            document.getElementsByClassName("textbig")[0].appendChild(div);


}

function changesound(blo) {
let datons = blo.getAttribute('date').split('.');
let ecoute = document.getElementsByClassName('ecoute');
for (var i = 0; i < ecoute.length; i++) {
        ecoute[i].classList.remove('ecoute');
}
blo.classList.add('ecoute');
let source = 'https://feministcurricula.org/careclub/sons/' + datons[2] + '.' + datons[1] + '.' + datons[0] + '_' + blo.getAttribute('hours') + '.mp3';
document.getElementById('audio').src = source;
        document.getElementById('audio').play();
}

  $( document ).ready(function() {

        const player = new Plyr('#audio');
        });

