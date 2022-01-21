window.addEventListener("load", function() {

// Validaciones de creacion y modificacion de productos


console.log("testeo de vinculacion de javascript");

let formulario = document.querySelector("main form")
let nombre = document.querySelector ("input.nombre")
let precio = document.querySelector ("input.precio")
let description = document.querySelector ("textarea")
let image = document.querySelector ("input.image")



// console.log(nombre)
// console.log(precio)
// console.log(description)
// console.log(categoria)
console.log(image)
//console.log(formulario)

 formulario.addEventListener("submit", function(event) {
    // event.preventDefault()
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
    // Validacion campo image
    let acceptedExtensions = ['jpg', 'png', 'gif', 'jpeg']
    fileName = image.value
    extension = fileName.split('.').pop()
    console.log(extension)
    if (image.value == ""){
        errors.push("Debe cargar una imagen")
        //alert("Debe cargar una imagen")
    } else if (!acceptedExtensions.includes(extension)) {
        errors.push(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
        //alert(`Las extensiones de archiio permitidas son ${acceptedExtensions.join(', ')}`)
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