import {Question} from "./questions";
import './style.css'
import {isValid} from "./utils";

const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const questions = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true;
        Question.create(questions).then(() => {

            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })

    }
}









