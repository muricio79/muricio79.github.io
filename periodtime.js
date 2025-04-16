var hoje = new Date();
var horAtual = hoje.getHours();

const listaTxtEntrada  = document.querySelectorAll('.entrada');
const listaTxtRecepcao = document.querySelectorAll('.recep');
const listaTxtObras = document.querySelectorAll('.obras')

if (horAtual < 12) {
	listaTxtEntrada[2].classList.toggle("hide")
} else if (horAtual < 18) {
	listaTxtEntrada[1].classList.toggle("hide")
} else {
	listaTxtEntrada[0].classList.toggle("hide")
}

if (horAtual < 12) {
	listaTxtRecepcao[2].classList.toggle("hide");
} else if (horAtual < 18) {
	listaTxtRecepcao[1].classList.toggle("hide");
} else {
	listaTxtRecepcao[0].classList.toggle("hide");
}

if (horAtual < 12) {
	listaTxtObras[1].classList.toggle("hide");
} else {
	listaTxtObras[0].classList.toggle("hide");
}

//document.getElementById("hora").innerHTML = hora;
//console.log(hora);
