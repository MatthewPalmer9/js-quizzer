class CategoryFetch {
    constructor(name) {
        this.name = name;
        this.url = "http://localhost:3000"
    }

    mainFetcher(params) {
        const c = new Category();

        fetch(this.url + `${params}`)
        .then(resp => resp.json())
        .then(data => c.renderCategories(data))
        .catch(err => alert(err));
    }

    subFetcher(params) {
        const c = new Category();

        fetch(this.url + `${params}`)
        .then(resp => resp.json())
        .then(data => c.renderSubcategories(data))
        // .catch(err => alert(err));
    }

    quizFetcher(params) {
        const q = new Quiz()

        fetch(this.url + `${params}`)
        .then(resp => resp.json())
        .then(data => q.renderQuestions(data, params))
        .catch(err => alert(err));
    }

    answerFetcher(params) {
        const q = new Quiz();

        fetch(this.url + `${params}`)
        .then(resp => resp.json())
        .then(answers => q.renderAnswers(answers, params))
        .catch(err => alert(err));
    }
}