const listaCena = document.querySelectorAll('.tela');
const mapOpcoes = document.querySelectorAll('.mapa__opcoes--link')
const listaBotoes = document.querySelectorAll('[aria-label]')

//controle da birita :-)
var teorAlcool
teorAlcool = 0;
const servicoBeb = document.querySelectorAll('.beb');
const bebMais = servicoBeb[0];
const parouBeb = servicoBeb[1];
const objetoBorrado = document.querySelector(['body']);
const falaManda = document.querySelector('#manda');
const falaPara = document.querySelector('#chega')

bebMais.onclick =	function(){
	teorAlcool++;  
	console.log(teorAlcool);
	if(teorAlcool == 1){
		objetoBorrado.style.filter = 'blur(1px)';
		console.log('10% alcool')
	} else if (teorAlcool == 2){
		objetoBorrado.style.filter = 'blur(2px)';
		console.log('20% alcool')
	} else if (teorAlcool == 3) {
		objetoBorrado.style.filter = 'blur(3px)';
		console.log(teorAlcool);
	} else if (teorAlcool == 4) {
		bebMais.classList.toggle("hide");
		falaManda.classList.toggle("hide");
		falaPara.classList.toggle("hide");
		objetoBorrado.style.filter = 'blur(0)';
		console.log('parou');
		teorAlcool = 0; 
		console.log(teorAlcool);
	}
}

parouBeb.onclick = function(){
}

function SomeMapa () {
	document.getElementById("mapa").classList.toggle("hide");
}

function navegaCena (idAlvo){
	var jaHides = document.querySelector(".tela:not(.hide)");
	jaHides.classList.toggle("hide");
	document.getElementById(idAlvo).classList.toggle("hide");
}

if (teorAlcool == 0) {
	objetoBorrado.style.filter = 'none';
	console.log('0% alcool');
	falaPara.classList.toggle("hide");
}

for (let numero = 0; numero < listaBotoes.length; numero++) {

//	determina qual botão entrega o ID	
const esteBotao = listaBotoes[numero];

//	pega o valor do aria-label
const valorAria = esteBotao.getAttribute("aria-label");
const esteDestino = valorAria;

esteBotao.onclick = function(){
	navegaCena(esteDestino);
}
}

for (let contador = 0; contador < mapOpcoes.length; contador++) {
	
//	determina qual opção/botão - entrega o ID dele
const estaOp = mapOpcoes[contador];

//	selecionar a classe de onde vem o nome que interessa
const estaCena = listaCena[contador].id;
const butPrinc = document.getElementById("botao_main");
const chaMapa = document.getElementById("botao__link");

//	em determinada opção (por esta passagem/loop) tocar determinada cena (correspondente a este loop)
estaOp.onclick = function () {
	navegaCena(estaCena);
	SomeMapa();
};
butPrinc.onclick = function (){
	SomeMapa();
}
chaMapa.onclick = function (){
	SomeMapa();
}
}
