window.addEventListener('load', function () {
    let formulario = document.querySelector('form.register')

    formulario.addEventListener('submit', function (e) {

        let errores = [];

        let nombre = document.querySelector('input#nombre');
        let apellido = document.querySelector('input#apellido')
        let email = document.querySelector('input#email')
        let nombreDeUsuario = document.querySelector('input#nombreDeUsuario')
        let fecha = document.querySelector('input#fecha')
        let categoria = document.querySelector('input#categoria')
        let contrasena = document.querySelector('input#contrasena')
        let avatar = document.querySelector('input#avatar')


        if (nombre.value == "") {
            errores.push('El campo de nombre tiene que estar completo');
        }else if (nombre.value.length < 2) {
            errores.push('El campo de nombre de tener al menos 2 caracteres')
        }

        if (apellido.value == "") {
            errores.push('El campo de apellido tiene que estar completo');
        }

        if (email.value == "") {
            errores.push('El campo de email tiene que estar completo');
        } else if( !email.value.includes('@') ) {
            errores.push('El campo de email debe ser un email')
        }

        if (nombreDeUsuario.value == "") {
            errores.push('El campo de nombre de usuario tiene que estar completo');
        }

        if (fecha.value == "") {
            errores.push('Debes elegir una fecha');
        }

        if (categoria.value == "") {
            errores.push('Debes elegir una categoría');
        }

        if (contrasena.value == "") {
            errores.push('El campo de contraseña tiene que estar completo');
        } else if( contrasena.value.length < 8 ) {
            errores.push('La contraseña debe de ser de al menos 8 caracteres')
        }

        //TODO Ver como asegurar el formato
        let avatarFormats=['jpg', 'png', 'jpeg', 'gif']
        if (avatar.value == "") {
            errores.push('Debes subir una imagen');
        } else if (!avatarFormats.some(el => avatar.value.includes(el))){
            errores.push('Asegurate de subir un archivo con formato JPG, PNG, JPEG o GIF')

        }

        if (errores.length > 0) {
            e.preventDefault()
            let ulErrores = document.querySelector('div.errores ul')

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'

            }
        }

    })
})