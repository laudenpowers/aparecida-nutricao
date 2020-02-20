var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
	
	console.log("Buscando pacientes...");
	
	var conector = new XMLHttpRequest();
	
	conector.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
	
	conector.addEventListener("load", function(){
		
		var response = conector.responseText;
		
		var msgErroDeAjax = document.querySelector("#erro-busca-ajax");
		
		if (conector.status == 200){						
		
			msgErroDeAjax.textContent = "";
			
			msgErroDeAjax.classList.add("hide-componente");
		
			var pacientes = JSON.parse(response);
		
			addPacientes(pacientes);	
				
		}else{
			
			console.log(conector.status, " -> ", response);					
			
			msgErroDeAjax.textContent = "Erro ao listar pacientes. Motivo: " 
					+ conector.status + " -> " + response;
			
			msgErroDeAjax.classList.remove("hide-componente");
			
		}		
		
	});
	
	conector.send();
});