//Lista con objetos li, empieza en 1. SOLO DE TAG LI. no hay que inicializar los atributos, un array puede tener distintos tipos de datos
let listaElementos = [0]
var contadorIds = 0

const agregarALista = (id,elemento,fechacreacion,fechaTachado) => {
    let objeto = {
        id: id,
        elemento: elemento,
        fechacreacion: fechacreacion,
        fechaTachado: fechaTachado, //la fecha de tachado de su child <input>
    }
    listaElementos.push(objeto)
}
const modififcarObjetoLista = (id,elemento,fechacreacion,fechaTachado) => {
    let idObjeto = id

    let objeto = {
        id: parseInt(id),
        elemento: elemento,
        fechacreacion: fechacreacion,
        fechaTachado: fechaTachado,
    }
    listaElementos.forEach(objetos => {
        if(objetos.id === parseInt(idObjeto)){ //id.slice(2,3) corta desde el segundo caracter hasta el tercero. por ejemplo de "li4" guarda "4"
            objetos = objeto
            listaElementos[id] = objetos
        }
    })
}

function agregarElemento() { //Agrega el nuevo elemento. Crea un elemento con los datos del html - hoy.toUTCString(); // Devuelve "Sat, 13 Jun 2020 18:30:00 GMT"

    contadorIds++;
    const tiempoTranscurrido = Date.now()
    const hoy = new Date(tiempoTranscurrido)
    
    let ul = document.getElementById("list")
    
    //traer los elementos del botón
    let li = ul.firstElementChild
    let input = document.getElementById("inputNuevoElemento")
    var valor = contadorIds + "- " + input.value;

    //crea el elemento li
    let nuevoli = document.createElement("li")
    nuevoli.classList.add('list-group-item')
    nuevoli.setAttribute("id", "li" + listaElementos.length)
    //input.type = 'checkbox'
    
    //nuevo elemento label
    let nuevolabel = document.createElement("label")
    nuevolabel.classList.add('form-check-label', 'stretched-link', 'notachado')
    nuevolabel.setAttribute("for", contadorIds)
    nuevolabel.innerText = valor;
    nuevolabel.id = contadorIds
    
    //nuevo elemento input. los vamos a llamar mediante sus padres - listaElementos.elemento.firstElementChild/lastElementChild
    let nuevoinput = document.createElement("input")
    nuevoinput.type = 'checkbox'
    nuevoinput.value = 0
    nuevoinput.classList.add('form-check-input', 'me-1')
    nuevoinput.onclick = function() { cambiarEstilo(nuevolabel) }
    nuevoinput.id = contadorIds

    //appends
    nuevoli.appendChild(nuevoinput)
    nuevoli.appendChild(nuevolabel)
    ul.appendChild(nuevoli)

    //agregar el li a la lista
    agregarALista(listaElementos.length,nuevoli,hoy,null)
}

opcionMasRapida = () => { //restar fechas, fechacreación - fechatachado, comparar y definir la menor fecha
    var mayorTachado = Date.parse('01 Jan 1970 00:00:00 GMT')
    let idTachado = -1
    let texto = null
    
    //fecha actual
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    
    //recorrer la lista de elementos y hacer la resta
    for(var i = 1; i <= listaElementos.length-1; i++){
        if(listaElementos[i].fechaTachado != null){
            const resta = listaElementos[i].fechaTachado - listaElementos[i].fechacreacion
            if(resta < mayorTachado || mayorTachado == Date.parse('01 Jan 1970 00:00:00 GMT')){
                mayorTachado = resta
                idTachado = listaElementos[i].id;
                texto = listaElementos[i].elemento.lastElementChild.innerText
            }
        }
    }

    //mostrar resultado
    if(texto != null){
        alert(`La tarea que más rápido se realizó fue: "${texto}"`)
    }
    else{
        alert(`No hay tareas tachadas todavía`)
    }
}

function cambiarEstilo(objeto){ //cambiar el estilo del input a tachado/no tachado cuando se hace clic en el checkbox. recibe el objeto que lo llamó
    //traer los objetos
    let id = objeto.id
    console.log(listaElementos, objeto.id)
    let li = listaElementos[id].elemento
    let input = li.firstElementChild
    let label = li.lastElementChild
    
    //crear/eliminar fechaTachado
    if(label.classList.contains("notachado")){
        label.classList.replace("notachado","tachado")
        const fechaActual = Date.now()
        const fechaTachado = new Date(fechaActual)
        modififcarObjetoLista(id,li,listaElementos[id].fechacreacion,fechaTachado)
    }
    else{
        label.classList.replace("tachado","notachado")
        modififcarObjetoLista(id,li,listaElementos[id].fechacreacion,null) //id = 1, li.id = "li1"
    }
}

const limpiarLista = () => {
    //primero guardar el li importante y traer el padre
    let creadorDeElementos = document.getElementById("nuevoElemento")
    let padre = document.getElementsByClassName("form-check")

    //eliminar el ul
    let ul = document.getElementById("list")
    ul.remove()

    //crear uno nuevo y appendChild
    let ul2 = document.createElement("ul")
    ul2.classList.add('list-group', 'mb-2')
    ul2.setAttribute("id", "list")
    ul2.appendChild(creadorDeElementos)
    padre[0].appendChild(ul2)
    
    //inicializar las variables públicas
    listaElementos = [0]
    contadorIds = 0
}
