class Completed {

    constructor(name) {
        this.name = name
        this.url = "http://localhost:3000"
    }

    completedFetch() {
        fetch(this.url + `/finishedquizzes`)
        .then(resp => resp.json())
        .then(data => this.renderComplete(data))
        .catch(err => alert(err))
    }

    renderComplete(data) {
        const completed = document.querySelector(".completed");
        data.forEach((completed_quiz) => {
            const h2 = document.createElement('h2');
            h2.innerText = `${completed_quiz.name}`;
            const btn = document.createElement('button');
            btn.className = `${completed_quiz.id}`
            btn.innerText = `Delete`;


            completed.appendChild(h2);
            h2.appendChild(btn);

            btn.addEventListener('click', (event) => {
                location.reload();
            })
        });
    }

    markComplete(params) {
        const finishBtn = document.querySelector('.finished');
        const finish = new PostFetch();
        finishBtn.addEventListener('click', (event) => {
            finish.postFetch(params.toLowerCase());
            location.reload();
        })
    }
}

addEventListener('DOMContentLoaded', () => {
    const listener = new Completed();
    listener.completedFetch();
})