const completedFetch = () => {

    fetch(url + `/finishedquizzes`)
    .then(resp => resp.json())
    .then(data => renderComplete(data))
    .catch(err => alert(err))
}

const renderComplete = (data) => {
    const completed = document.querySelector(".completed");
    data.forEach((completed_quiz) => {
        h2 = document.createElement('h2');
        h2.innerText = `${completed_quiz.name}`;
        btn = document.createElement('button');
        btn.className = `${completed_quiz.id}`
        btn.innerText = `Delete`;


        completed.appendChild(h2);
        h2.appendChild(btn);

        btn.addEventListener('click', (event) => {
            location.reload();
        })
    });
}

const markComplete = (params) => {
    const finishBtn = document.querySelector('.finished');
    finishBtn.addEventListener('click', (event) => {
        postFetch(params.toLowerCase());
        location.reload();
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    completedFetch();
})