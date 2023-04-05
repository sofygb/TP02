//Lista con objetos. La lista empieza en 1
let listaElementos = [
    id,
    elemento,
    texto,
    fechacreacion,
    fechaTachado,
    padre
];

const agregarALista = (id,elemento,texto,fechacreacion,fechaTachado,padre) => {
    let objeto = {
        idThis: id,
        elementoThis: elemento,
        textoThis: texto,
        fechacreacionThis: fechacreacion,
        fechaTachadoThis: fechaTachado,
        padreThis: padre
    }
    listaElementos.push(objeto);
}
const modififcarLista = (id,elemento,texto,fechacreacion,fechaTachado,padre) => {
    let objeto = {
        idThis: id,
        elementoThis: elemento,
        textoThis: texto,
        fechacreacionThis: fechacreacion,
        fechaTachadoThis: fechaTachado,
        padreThis: padre
    }
    listaElementos[id] = objeto => objeto.id === listaElementos[id]
}

const agregarElemento = () => { //Agrega el nuevo elemento - hoy.toUTCString(); // Devuelve "Sat, 13 Jun 2020 18:30:00 GMT"
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    console.log(listaElementos);
    //Get element y create element
    var ul = document.getElementById("list"); 
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

    agregarALista(listaElementos.length+1,input,valor,hoy,null,li)
    agregarALista(listaElementos.length+1,label,valor,hoy,null,li)
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
            lista[i].style.color = "green";
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