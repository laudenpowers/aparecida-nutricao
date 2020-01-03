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
	} else if (altura <= 0 || altura >= 3){
		console.log("Altura inválida");
		tdImc.textContent = "Altura inválida";
	} else {
		var imc = peso / (altura * altura);
		console.log(imc);
		tdImc.textContent = imc.toFixed(2);
	}
	
}	