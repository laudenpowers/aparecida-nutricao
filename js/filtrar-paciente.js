var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
	
	var nomeDigitado = this.value;
	
	var linhasDaTabela = document.querySelectorAll(".paciente");
	
	if (nomeDigitado.length > 0){
	
		linhasDaTabela.forEach(function(paciente){
		
			var nomeDaCelula = paciente.querySelector(".info-nome").textContent;
			
			var expressaoDeBusca = new RegExp(nomeDigitado, "i");
			
			if (!expressaoDeBusca.test(nomeDaCelula)){
				paciente.classList.add("hide-componente");	
			}else{
				paciente.classList.remove("hide-componente");
			}
			
		});
	
	}else{

		linhasDaTabela.forEach(function(paciente){
			paciente.classList.remove("hide-componente");
		});

	}	

});