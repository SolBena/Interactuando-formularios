window.addEventListener('load', () => {

    console.log('Se vinculó correctamente');

    //Para abreviar document.querySelector a qs
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    //Validacion para desactivar el boton
    const funcValidate = (obj) => {
        let arr = Object.values(validate)

        if (!arr.includes(false)) {
            button.disabled = false
            button.classList.remove('bttn-invalid')
        } else {
            button.disabled = true
            button.classList.add('bttn-invalid')
        }
    }

    //capturo todos los elementos del formulario
    const form = qs('form')
    const title = qs('#title')
    const select = qs('select')
    const awards = qs('#awards')
    const inputs = document.querySelectorAll('.inputs')
    const small = document.querySelectorAll('small')
    const smallAw = qs('.awards')
    const smallTitle = qs('small.title')
    const smallAwards = qs('small.awards')
    const smallGenre = qs('small.genre')
    const smallLen = qs('small.length')
    const smallDate = qs('small.date')
    const smallRating = qs('small.rating')
    const button = qs('button.botonAgregar')
    const len = qs('#length')
    const genre = qs('select#genre_id')
    const date = qs('#date')
    const rating = qs('#rating')

    const validate = {
        title: false,
        rating: false,
        awards: false,
        len: false,
        genre: false,
        date: false
    }

    button.disabled = true
    button.classList.add('bttn-invalid')

    title.focus()

    title.addEventListener('input', (e) => {
        if (e.target.value.length < 3) {
            title.classList.add('is-invalid')
            title.classList.remove('is-valid')
            smallTitle.innerHTML = "El título debe tener más de dos caracteres"
            validate.title = false
        } else {
            title.classList.remove('is-invalid')
            title.classList.add('is-valid')
            smallTitle.innerHTML = 'Bien!'
            validate.title = true
        }

        funcValidate(validate)
    })

    rating.addEventListener('input', (e) => {
        if (e.target.value < 0 || e.target.value > 10) {
            rating.classList.add('is-invalid')
            rating.classList.remove('is-valid')
            smallRating.innerHTML = "El rating debe ser entre 0 y 10"
            validate.rating = false
        } else {
            rating.classList.remove('is-invalid')
            rating.classList.add('is-valid')
            smallRating.innerHTML = 'Bien!'
            smallRating.
            validate.rating = true
        }

        funcValidate(validate)
    })

    awards.addEventListener('input', (e) => {
        if (e.target.value < 0 || e.target.value > 10) {
            awards.classList.add('is-invalid')
            awards.classList.remove('is-invalid')
            smallAwards.innerHTML = 'El número de premios tiene que estar entre 0 y 10'
            validate.awards = false

        } else {
            awards.classList.remove('is-invalid')
            awards.classList.add('is-valid')
            smallAwards.innerHTML = 'Bien!'
            validate.awards = true

        }

        funcValidate(validate)
    })


    len.addEventListener('input', (e) => {
        if (e.target.value < 60 || e.target.value > 360) {
            len.classList.add('is-invalid')
            len.classList.remove('is-valid')
            smallLen.innerHTML = 'El número de premios tiene que estar entre 60 y 360'
            validate.len = false

        } else {
            len.classList.remove('is-invalid')
            len.classList.add('is-valid')
            smallLen.innerHTML = 'Bien!'
            validate.len = true

        }

        funcValidate(validate)
    })


    date.addEventListener('input', (e) => {
        const now = new Date()
        let fecha = Date.parse(e.target.value)
        let actual = Date.parse(now)

        if (actual < fecha) {
            date.classList.add('is-invalid')
            date.classList.remove('is-valid')
            smallDate.innerHTML = "La fecha tiene que ser anterior a la fecha actual"
            validate.date = false
        } else {
            date.classList.remove('is-invalid')
            date.classList.add('is-valid')
            smallDate.innerHTML = 'Bien!'
            validate.date = true
        }

        funcValidate(validate)
    })


    genre.addEventListener('input', (e) => {
        if (e.target.value < 1 || e.target.value > 12) {
            genre.classList.add('is-invalid')
            genre.classList.remove('is-valid')
            smallGenre.innerHTML = "Debes seleccionar un género"
            validate.genre = false
        } else {
            genre.classList.add('is-valid')
            genre.classList.remove('is-invalid')
            smallGenre.innerHTML = 'Bien!'
            validate.genre = true
        }

        funcValidate(validate)
    })



    form.addEventListener('submit', (e) => {

        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].value === '') {
                e.preventDefault()
                inputs[i].classList.add('is-invalid')
                small[i].innerHTML = 'Este campo no debe estar vacío'
                button.disabled = true

            } else if (inputs[i].classList.contains('is-invalid')) {
                inputs[i].classList.remove('is-invalid')
                small[i].innerHTML = 'Bien!'
                button.disabled = false
                button.classList.remove('bttn-invalid')
            }
        }

        if (awards.value > 10 || awards.value < 0) {
            e.preventDefault()
            smallAw.innerHTML = 'Los premios tienen que estar entre 0 y 10'
        }

        if (select.value === '') {
            e.preventDefault()
            select.classList.add('is-invalid')
            small[5].innerHTML = "Este campo no debe estar vacío"
        } else if (select.classList.contains('is-invalid')) {
            select.classList.remove('is-invalid')
            
        }
    })
})
