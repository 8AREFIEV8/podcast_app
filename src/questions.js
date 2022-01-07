
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
                console.log(response);
            })
    }
}