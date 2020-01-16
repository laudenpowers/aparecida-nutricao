var titulo = document.querySelector(".titulo");
titulo.textContent = "**Aparecida Nutricionista**";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 1000){
	console.log("Peso inválido");
	tdImc.textContent = "Peso inválido";
} else if (altura <= 0 || altura >= 3){
	console.log("Altura inválida");
	tdImc.textContent = "Altura inválida";
} else {
	var imc = peso / (altura * altura);
	console.log(imc);
	tdImc.textContent = imc;
}


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++){
	
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;	

	var tdImc = paciente.querySelector(".info-imc");

	if (peso <= 0 || peso >= 1000){
		console.log("Peso inválido");
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
		//paciente.style.color = "white";
		//paciente.style.backgroundColor = "lightcoral";
	} else if (altura <= 0 || altura >= 3){
		console.log("Altura inválida");
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
		//paciente.style.color = "white";
		//paciente.style.backgroundColor = "lightcoral";
	} else {
		var imc = peso / (altura * altura);
		console.log(imc);
		tdImc.textContent = imc.toFixed(2);
	}
	
}	

var btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function (event){
	event.preventDefault();
	console.log("Botão clicado");
	var form = document.querySelector("#form-adiciona");
	console.log(form.nome.value);
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
});

titulo.addEventListener("click", showMsg);

function showMsg(){
	console.log("Fui clicado")
}

titulo.addEventListener("click", function (){
	console.log("Fui clicado (função anomima)");
});

