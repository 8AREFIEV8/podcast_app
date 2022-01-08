
export class Question {
    static create(question) {
       return  fetch(`https://podcast---app-1b2b0-default-rtdb.firebaseio.com/question.json`, {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
           .then(addToLocalStorage)
           .then(Question.renderList)
    }
    static renderList() {
        const questions = getQuestionsFromLocalStorage()

        const html = questions.length
        ? questions.map(toCard).join('')
            : ` <div class="mui&#45;&#45;text-headline">You have not asked anything yet </div>`

        const list = document.getElementById('list')
        list.innerHTML = html
    }
}
function addToLocalStorage(question) {
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
   return `<div class="mui&#45;&#45;text-black-54">

           </div>
               ${new Date(question.date).toLocaleDateString()}
               ${new Date(question.date).toLocaleTimeString()}
            <div>
               ${question.text}
            </div>
          `



}













