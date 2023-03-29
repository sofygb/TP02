//Lista con objetos
let lista = [];

const agregarElemento = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //hoy.toUTCString(); // Devuelve "Sat, 13 Jun 2020 18:30:00 GMT"
    lista.push(objeto);
    console.log(lista);
    //Get element y create element
    var ul = document.getElementById("list"); 
    //var ElementoPrevio = document.getElementById("input"); 
    var valor = document.getElementById("input").value;
    
    var li = document.createElement("li");
    li.classList.add('list-group-item');
    
    var input = document.createElement("input");
    input.type = 'checkbox';
    input.classList.add('form-check-input', 'me-1');
    input.value=0;
    input.setAttribute("id", "forthCheckboxStretched");
    
    var label = document.createElement("label");
    label.classList.add('form-check-label', 'stretched-link');
    label.innerText = valor;
    label.setAttribute("for", "forthCheckboxStretched");
    
    li.appendChild(input);
    li.appendChild(label);
    
    //li.appendChild(document.createTextNode(valor));  //lo que está dentro del elemento ul
    li.setAttribute("id", "element"); // setea el id
    ul.appendChild(li);
    
    
    //nuevoElemento.before(document.getElementById("element"));
    //li.body.before(document.getElementById("element"));
    let objeto = {
        elemento: li,
        fechacreacion: hoy,
        fechaTachado: null
    };
}

opcionMasRapida = () => { //restar fechas, fechacreación - fechatachado
    var mayorTachado, elementosTachados;
    for(var i = 1; i <= lista.length; i++){
        if(lista[i].fechaTachado!=null){
            const fechaTachadoMs = lista[i].fechaTachado.
            var resta = 
        }
    }
}

const cambiarEstilo = () => {
    let element = document.getElementById("flexCheckDefault");
    let element2 = document.getElementById("labelCheckbox");
    console.log(element.tachado);
    
    if(element.tachado == true){
        element2.classList.add('chequeado')
    }
    else{
        element2.classList.remove('chequeado')
    }
}