window.addEventListener('load', function () {
    let formularioLogIn = document.querySelector('form.logIn')

    formularioLogIn.addEventListener('submit', function (e) {

        let errores = [];
        let email = document.querySelector('input#email')
        let contrasena = document.querySelector('input#contrasena')

        if (email.value == "") {
            errores.push('El campo de email tiene que estar completo');
        } else if (!email.value.includes('@')) {
            errores.push('El campo de email debe ser un email')
        }

        if (contrasena.value == "") {
            errores.push('El campo de contraseña tiene que estar completo');
        }

        if (errores.length > 0) {

            let ulErrores = document.querySelector('div.errores ul')

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'

            }
        }

    })
})