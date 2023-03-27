//Lista con objetos
let lista = [];

let agregarElemento = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //hoy.toUTCString(); // Devuelve "Sat, 13 Jun 2020 18:30:00 GMT"
    let objeto = {
        fechacreacion: hoy,
        fechaTachado: null
    };
    lista.push(objeto);
    
    //Get element y create element
    var ElementoPrevio = document.getElementById("input"), textoElemento = document.getElementById("input").innerText;
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = textoElemento;

    // añade el elemento creado y su contenido al DOM
    //document.body.insertBefore(nuevoElemento, ElementoPrevio);

    nuevoElemento.before(document.getElementById("element"));
    //document.body.before(document.getElementById("element"));
}
opcionMasRapida = () => {
    var mayorTachado, elementosTachados;
    for(var i = 1; i <= lista.length; i++){
        //if(){

        //}
    }
}

const cambiarEstilo = () => {
    let element = document.getElementById("flexCheckDefault");
    let element2 = document.getElementById("labelChackbox");
    console.log(element.tachado);
    if(element.tachado == true){
        element2.classList.add('chequeado')
    }
    else{
        element2.classList.remove('chequeado')
    }
}