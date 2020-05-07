class AppContainer {
    url = "http://localhost:300"

    getQuiz() {
        console.log("Getting activities...")

        fetch(this.url + '/quizzes')
        .then(resp => resp.json())
        .then(data => console.log(data))

        .catch(err => alert(err))
    }
}