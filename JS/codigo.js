//Lista con objetos
let lista = []; //Hay que agregar los objetos ya que no se los asigna nunca

const agregarElemento = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //hoy.toUTCString(); // Devuelve "Sat, 13 Jun 2020 18:30:00 GMT"
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
    label.classList.add('form-check-label', 'stretched-link', 'notachado');
    label.innerText = valor;
    label.setAttribute("for", "forthCheckboxStretched");
    
    li.appendChild(input);
    li.appendChild(label);
    
    //li.childElementCount - Puede servir para una lista
    li.firstElementChild
    
    //li.appendChild(document.createTextNode(valor));  //lo que está dentro del elemento ul
    li.setAttribute("id", "element"); // setea el id
    ul.appendChild(li);
    
    
    //nuevoElemento.before(document.getElementById("element"));
    //li.body.before(document.getElementById("element"));
    let objeto = {
        elemento: li,
        texto: valor,
        idInput: input.className("id"),
        idLabel: label.className("id"),
        fechacreacion: hoy,
        fechaTachado: null
    };
    lista.push(objeto);
}

opcionMasRapida = () => { //restar fechas, fechacreación - fechatachado
    var mayorTachado;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    for(var i = 1; i <= lista.length; i++){
        if(lista[i].fechaTachado!= null){
            const fechaTachadoMs = lista[i].fechaTachado
            var resta = hoy - fechaTachadoMs
            console.log(resta)
            lista[i].texto.style.color = "green";
            alert(resta)
        }
    }
}

const cambiarEstilo = (elemento) => {
    //let input = document.getElementById("flexCheckDefault");
    console.log(elemento)
    let input = elemento
    let label = document.getElementById("labelCheckbox")
    console.log(label.style.textDecoration);
    
    if(label.style.textDecoration === "none"){
        label.style.textDecoration = "overline"
    }
    else{
        label.style.textDecoration = "none"
    }
}