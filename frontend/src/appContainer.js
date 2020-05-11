class AppContainer {
    categories = [];
    clickControl = 0;

    url = "http://localhost:3000";

    getOrRemoveCategories() {
        if(this.clickControl === 0) {
            let main = document.createElement("div");
            main.className += 'categories';
            document.body.appendChild(main);


            fetch(this.url + '/categories')
            .then(resp => resp.json())
            .then(data => this.renderCategories(data))

            .catch(err => alert(err));

            this.clickControl += 1;

        } else if(this.clickControl === 1) {
            const main = document.querySelector('.categories');
            main.parentNode.removeChild(main);
            this.clickControl -= 1;
        } else {
        }
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