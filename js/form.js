var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function (event){
	event.preventDefault();
	var form = document.querySelector("#form-adiciona");
	var paciente = extrairPacienteDoFormulario(form);
	console.log(paciente);
	console.log(paciente.imc);
	
	if (isPacienteValido(paciente)){			
		
		addPaciente(paciente);
	
		form.reset();
		
		apresentarMensagensDeErro([]);
		
	}else{
		var erros = processarMsgsDeErroDoPaciente(paciente);
		console.log(erros);
		apresentarMensagensDeErro(erros);
	}
	
});

function addPaciente(paciente){
	var pacienteTr = criarLinhaDoPaciente(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function addPacientes(pacientes){
	
	pacientes.forEach(function(paciente){
		addPaciente(paciente);
	});
	
}	

function extrairPacienteDoFormulario(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcularImc(form.peso.value, form.altura.value)
	}
	
	return paciente;
	
}

function criarLinhaDoPaciente(paciente){
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(criarCelulaDaLinha(paciente.nome, "info-nome"));
	pacienteTr.appendChild(criarCelulaDaLinha(paciente.peso, "info-peso"));
	pacienteTr.appendChild(criarCelulaDaLinha(paciente.altura, "info-altura"));
	pacienteTr.appendChild(criarCelulaDaLinha(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(criarCelulaDaLinha(paciente.imc, "info-imc"));
	
	return pacienteTr;
	
}

function criarCelulaDaLinha(conteudo, classeCss){
	var celula = document.createElement("td");
	celula.textContent = conteudo;
	celula.classList.add(classeCss);
	return celula;
}

function isPacienteValido(paciente){
	return isPesoValido(paciente.peso) && 
			isAlturaValida(paciente.altura) &&
			paciente.nome.length > 0 &&
			paciente.gordura.length > 0;
}

function processarMsgsDeErroDoPaciente(paciente){
	
	var erros = [];
	
	if (paciente.nome.length <= 0){
		erros.push("Nome obrigatório");
	}
	
	if (!isPesoValido(paciente.peso)){
		erros.push("Peso inválido");
	}
	
	if (!isAlturaValida(paciente.altura)){
		erros.push("Altura inválida");
	}
	
	if (paciente.gordura.length <= 0){
		erros.push("% de Gordura Obrigatório");
	}
	
	return erros;

}

function apresentarMensagensDeErro(erros){
	
	var msgDeErro = document.querySelector("#msg-erro-form");
	msgDeErro.innerHTML = "";
	
	erros.forEach(function(erro){
		var msgDetalhada = document.createElement("li");
		msgDetalhada.textContent = erro;
		msgDeErro.appendChild(msgDetalhada);
	});
	
}	