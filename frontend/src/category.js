
    
    getOrRemoveCategories = () => {
        if(app.categoryClickControl === 0) {
            let main = document.createElement("div");
            main.className += 'categories';
            document.body.appendChild(main);
     
     
            fetch(this.url + '/categories')
            .then(resp => resp.json())
            .then(data => this.renderCategories(data))
     
            .catch(err => alert(err));
     
            app.categoryClickControl += 1;
     
        } else if(app.categoryClickControl === 1) {
            const main = document.querySelector('.categories');
            main.parentNode.removeChild(main);
            app.categoryClickControl -= 1;
        } else {
        }
    }

    setCategory = () => {
        const cat = document.querySelectorAll('h2.category');
        cat.forEach((category) =>
           category.addEventListener('click', () => {
              //have this function render the subcategories
              setTimeout(function(){
                getSubcategory()
              }, 100)
           })
        )
    }

    renderCategories = (data) => {
        const main = document.querySelector('.categories');
        data.forEach(category => {
          const h2 = document.createElement('h2')
          h2.className = "category"
          h2.innerHTML = `${category.name.toUpperCase()}`
          main.appendChild(h2)
        });
    }

    getSubcategory = () => {
        const child1 = document.querySelector('div').children[0];
        const child2 = document.querySelector('div').children[1];
        const child3 = document.querySelector('div').children[2];
     
        sports = () => {
           renderSubcategory("SPORTS")
        }
     
        movies = () => {
           renderSubcategory("MOVIES")
        }
     
        videoGames = () => {
           renderSubcategory("VIDEO GAMES")
        }
     
     
        child1.addEventListener('click', sports, {once: true});
        child2.addEventListener('click', movies, {once: true})
        child3.addEventListener('click', videoGames, {once: true})
    }

    renderSubcategory = (params) => {
        if(params === "SPORTS") {
           fetch(this.url + '/subcategories/sports')
           .then(resp => resp.json())
           .then(data => this.renderSubcategories(data));
        } else if(params === "MOVIES") {
           fetch(this.url + '/subcategories/movies')
           .then(resp => resp.json())
           .then(data => this.renderSubcategories(data));
        } else if(params === "VIDEO GAMES") {
           fetch(this.url + '/subcategories/video_games')
           .then(resp => resp.json())
           .then(data => this.renderSubcategories(data));
        }
    }

    renderSubcategories = (data) => {
        let currentData = [];
        currentData.push(data)
     
        if(app.subCategoryClickControl === 0) {
           let subMain = document.createElement("div")
           subMain.className = "subCategories";
           document.body.appendChild(subMain);
     
           data.forEach((subCat) => {
              const h4 = document.createElement('h4');
              h4.className = "subCategory";
              h4.innerHTML = `${subCat.name.toUpperCase()}`;
              subMain.appendChild(h4);
           })

           categoryBtn = document.querySelectorAll('.subCategory');
           categoryBtn.forEach((btn) => {
               btn.addEventListener('click', getQuiz);
           });
     
     
           app.subCategoryClickControl += 1;
        } else if(app.subCategoryClickControl === 1) {
           if(data === currentData[0]) {
              destroy = () => {
                 const subCat = document.querySelector('.subCategories');
                 subCat.parentNode.removeChild(subCat);
                 app.subCategoryClickControl = 0;
                 currentData.pop();
                }
                destroy()
           } else if(data !== currentData[0]) {
              currentData.pop();
              currentData.push(data);
     
              data.forEach((subCat) => {
                 h4 = document.createElement('h4');
                 h4.className = "subCategory";
                 h4.innerHTML = `${subCat.name.toUpperCase()}`;
                 subMain.appendChild(h4);
              })
              app.subCategoryClickControl = 1;
           }
        }
    }


    

