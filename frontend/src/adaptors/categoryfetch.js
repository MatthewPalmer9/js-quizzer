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
        .catch(err => alert(err));
    }
}