import {Quest} from "./quest";

const login = document.getElementById('login')
const passw = document.querySelector('#password')
const form = document.querySelector('#form')

form.addEventListener('submit', formHundler)

function  formHundler(event) {
        event.preventDefault()
    const testObj = {
            login: login.value,
            password: passw.value
    }
    // async
    Quest.create(testObj).then(() => {
        login.value = ''
        passw.value = ''
    })

}
