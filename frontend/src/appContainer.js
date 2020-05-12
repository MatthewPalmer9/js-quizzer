class AppContainer {
    categories = [];
    theAnswers = [];
    categoryClickControl = 0;
    subCategoryClickControl = 0;

    url = "http://localhost:3000";

    // CATEGORIES //

    getOrRemoveCategories() {
        if(this.categoryClickControl === 0) {
            let main = document.createElement("div");
            main.className += 'categories';
            document.body.appendChild(main);


            fetch(this.url + '/categories')
            .then(resp => resp.json())
            .then(data => renderCategories(data))

            .catch(err => alert(err));

            this.categoryClickControl += 1;

        } else if(this.categoryClickControl === 1) {
            const main = document.querySelector('.categories');
            main.parentNode.removeChild(main);
            this.categoryClickControl -= 1;
        } else {
        }
    }

    renderCategories(data) {
        let subMain = document.createElement("div")
        subMain.className = "subCategories"
        document.body.appendChild(subMain)

        const main = document.querySelector('.categories');
        data.forEach(category => {
          const h2 = document.createElement('h2')
          h2.className = "category"
          h2.innerHTML = `${category.name.toUpperCase()}`
          main.appendChild(h2)
        });
    }

    
}