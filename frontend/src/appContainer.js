class AppContainer {
    categories = [];

    url = "http://localhost:3000";

    getCategories() {
        console.log("Getting categories.....");
        fetch(this.url + '/categories')
        .then(resp => resp.json())
        .then(data => this.renderCategories(data))

        .catch(err => alert(err));
    }

    renderCategories(data) {
        const main = document.querySelector('.categories');
        data.forEach(category => {
          const h2 = document.createElement('h2')
          h2.className = "category"
          h2.innerHTML = `${category.name.toUpperCase()}`
          main.appendChild(h2)
        });
    }
}