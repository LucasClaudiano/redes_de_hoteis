function carregarEstados(){
    const estadoSelect = document.getElementById('estadoselect'); 

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(data =>{
            estadoSelect.innerHTML="<option value='' disabled selected>Selecione um Estado</option>";
            data.forEach(estado => {
                estadoSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
            });
        })
        .catch(error => console.error(error)); 
}

function carregarCidades(){
    const estadoSelect =document.getElementById("estadoselect"); 
    const cidadeSelect = document.getElementById("cidadeselect");

    const selectedEstado = estadoSelect.value; 

    if(selectedEstado !==""){

        const cidadesUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`;
        
        fetch(cidadesUrl)
        .then(response => response.json())
        .then(data =>{
            cidadeSelect.innerHTML="<option value='' disabled selected>Selecione uma Cidade</option>";
            data.forEach(cidade =>{
                cidadeSelect.innerHTML+=`<option value="${cidade.id}">${cidade.nome}</option>`;
            });
            cidadeSelect.disabled = false; 
        })
        .catch(error =>console.error(error)); 
    }else{
        cidadeSelect.innerHTML = "<option value='' disabled selected>Selecione uma Cidade</option>";
        cidadeSelect.disabled = true; 
    }
}

document.addEventListener('DOMContentLoaded', carregarEstados); 
document.getElementById("estadoselect").addEventListener('change', carregarCidades);