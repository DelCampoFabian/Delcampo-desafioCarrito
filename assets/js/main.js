// Clases
class Producto {
    constructor (id,nombre,imagen , precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
class Carrito {
    constructor (id,){
        this.id = id;
        this.productos = [];
    }
    calcularTotal (){
        let total = 0
        for (let i = 0; i < this.productos.length; i++){
            total = total + this.productos[i].precio;
        }
        return total  
    }
}
//REGISTRAR VARIABLES

let registroNombre
let registroId
let registroPrecio
let registrarTotal

let contenedorNombre
let contenedorId
let contenedorPrecio

//FUNCIONES

function registrarHtml (){
    registroNombre = document.querySelector("#registro-nombre");
    registroId = document.querySelector("#registro-id");
    registroPrecio = document.querySelector("#registro-precio");
    registrarTotal = document.querySelector ("#registro-total");
}
registrarHtml()

function registrarProductos (){  
    registroNombre.innerHTML += `<li>${contenedorNombre}</li>`;
    registroId.innerHTML += `<li>${contenedorId}</li>`
    registroPrecio.innerHTML += `<li>$ ${contenedorPrecio}</li>`
}

function recorridoArray () {
    for (const producto of carrito.productos){
        contenedorNombre = producto.nombre 
        contenedorId = producto.id
        contenedorPrecio = producto.precio;
    }   
}

function mostrarTotal (){  
    registrarTotal.innerHTML = `<li>$ ${carrito.calcularTotal()}</li>`
} 

function tarjetaDom (producto){
    let tarjetaDom =
`<div class="productos p-0">
    <div class="productos__img">
    <img src="./assets/img/${producto.imagen}">
    </div>
    <div class="productos__text">
        <h4>${producto.nombre}</h4>
        <p>$ ${producto.precio}</p>
        <button id="${producto.id}" class="boton">Agregar al carrito</button>        
    </div>
</div>`;
    return tarjetaDom
}

// LISTA DE PRODUCTOS
let listaProductos = []
let producto1 = new Producto (1,"Camiseta Boca Juniors","ropaHombre3.jpg",7500);
let producto2 = new Producto (2,"Pantalon Corto","ropaHombre.jpg",2000);
let producto3 = new Producto (3,"Short","ropaMujer6.jpg",1800);
let producto4 = new Producto (4,"Remera","ropaHombre5.jpg",1900);
let producto5 = new Producto (5,"Campera","ropaMujer3.jpg",8000);
let producto6 = new Producto (6,"Calza","ropaMujer2.jpg",3500);
let producto7 = new Producto (7,"remera y corto","ropaHombre2.jpg",5200);
let producto8 = new Producto (8,"Pantalon corto","ropaHombre4.jpg",1800);
let producto9 = new Producto (9,"Remera","ropaHombre6.jpg",1900);
let producto10 = new Producto (10,"Campera","ropaMujer4.jpg",8000);
let producto11 = new Producto (11,"Top deportivo","ropaMujer.jpg",1100);
let producto12 = new Producto (12,"Top deportivo","ropaMujer5.jpg",2500);
listaProductos.push (producto1);
listaProductos.push (producto2);
listaProductos.push (producto3);
listaProductos.push (producto4);
listaProductos.push (producto5);
listaProductos.push (producto6);
listaProductos.push (producto7);
listaProductos.push (producto8);
listaProductos.push (producto9);
listaProductos.push (producto10);
listaProductos.push (producto11);
listaProductos.push (producto12);



let tarjetaContenedora = document.querySelector("#cards");
listaProductos.forEach (producto => {
    tarjetaContenedora.innerHTML += tarjetaDom(producto)
})


// Generacion del carrito
let carrito = new Carrito (1)
let botones = document.querySelectorAll(".boton");
let arrayBotones = Array.from (botones)
arrayBotones.forEach (boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = listaProductos.find (producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        recorridoArray()
        registrarProductos()
        mostrarTotal()
    })
})



