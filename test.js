var nombre = "alejito el mejor"
console.log (nombre) 

var lista = ["pelita", "morita", "susanita"]
console.log(lista)

lista.forEach(i => {

    console.log(i)

})

var persona = {

    "nombre" : "alejito",
    "apellido" : "lombana",
    "edad" : 20,

}

var persona2 = {

    "nombre" : "andres",
    "apellido" : "pepita",
    "edad" : 35,

}

listaPersonas = []
listaPersonas.push(persona)
listaPersonas.push(persona2)

listaPersonas.forEach(per => {

    console.log(per.nombre + " " + per.apellido + " Edad: " + per.edad);

})

let persona5 = {

    "nombre" : "pepito",
    "edad" : 35,
    "caracteristicas" : "quiero guardar en la rama"

}

console.log(persona5)

listaPersonas.push(persona5)

listaPersonas.forEach(a => {

    console.log("Nombre: " + a.nombre + " " + a.caracteristicas)

} )

