function results() {
    var sosmed = "Follow Instagram & Twitter BersinarProject yuk! <br> Instagram : https://www.instagram.com/BersinarProject <br> Twitter : https://twitter.com/BersinarProject​"
    var linkSoal = "Yuk akses soal yang akan dibahas di http://Bit.ly/SoalBersinar​ <br> Yuk akses materi yang akan dibahas di http://Bit.ly/MateriBersinar​"
    var caption = document.getElementById('caption').value;
    var split = caption.split('\n');
    var newCaption = split.join('<br>');

    if (document.getElementById('mapel1').checked) {
        poll = "#MenyinariSejarah #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel2').checked) {
        poll = "#MenyinariGeografi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel3').checked) {
        poll = "#MenyinariEkonomi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel4').checked) {
        poll = "#MenyinariSosiologi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel5').checked) {
        poll = "#MenyinariMatematika #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel6').checked) {
        poll = "#MenyinariFisika #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel7').checked) {
        poll = "#MenyinariBiologi #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel8').checked) {
        poll = "#MenyinariKimia #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel9').checked) {
        poll = "#MenyinariBahasa #MenyinariTPS #BersinarBersama"
    } else if (document.getElementById('mapel10').checked) {
        poll = "#MenyinariEnglish #MenyinariTPS #BersinarBersama"
    } else if (document.getElementById('mapel11').checked) {
        poll = "#MenyinariPK #MenyinariTPS #BersinarBersama"
    }

    var txt =
        newCaption + "<br/> </br>" + sosmed + "<br/> </br>" +
        linkSoal + "<br/> </br>" +
        poll + "<br/> </br>";


    document.getElementById("summary").innerHTML = txt;
}


// clipboard.js
var btn = document.getElementById('btn');
var clipboard = new ClipboardJS(btn);

clipboard.on('success', function(e) {
    console.log(e);
    alert("Copied!")
});

clipboard.on('error', function(e) {
    console.log(e);
});
