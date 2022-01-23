window.addEventListener("load", function() {

// Validaciones de creacion y modificacion de productos


console.log("testeo de vinculacion de javascript");

let formulario = document.querySelector("main form")
let nombre = document.querySelector ("input.nombre")
let precio = document.querySelector ("input.precio")
let description = document.querySelector ("textarea")




// console.log(nombre)
// console.log(precio)
// console.log(description)
//console.log(formulario)

 formulario.addEventListener("submit", function(event) {
    
 let errors = []
  
    // validacion campo nombre-------------------
  if ( nombre.value == "" ){
      errors.push ("Debe ingresar un nombre")
      //alert("Debe ingresar un nombre")
  } else if ( nombre.value.length < 5 ){
    errors.push ("El nombre debe tener al menos 5 caracteres")
    //alert("El nombre debe tener al menos 5 caracteres")
  }

    // Validacion campo precio
    if (precio.value == ""){
        errors.push("Debe ingresar un precio")
        //alert("Debe ingresar un precio")
    }
    else if(isNaN(precio.value)){
        errors.push ("Debe ingresar un valor numérico")
        //alert("Debe ingresar un valor numérico")
    }

    // Validacion campo description
    if (description.value == ""){
        errors.push("Debe ingresar una descripcion")
        //alert("Debe ingresar una descripcion")
    }
    else if (description.value.length < 20){
        errors.push ("La descripción debe tener al menos 20 caracteres")
        //alert("La descripción debe tener al menos 20 caracteres")
    }
    

  if (errors.length >0){
  event.preventDefault()
  let cuadroErrores = document.querySelector("#errores")
  cuadroErrores.innerHTML = ""

    for( i=0; i<errors.length; i++){
    cuadroErrores.innerHTML += "<li>"+errors[i]+"</li>";
        }
    }
 })

})