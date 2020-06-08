class Category {

   constructor(name) {
      this.name = name;
      this.url = "http://localhost:3000";
   }
    
   getOrRemoveCategories() {
      if(app.categoryClickControl === 0) {
         const c = new CategoryFetch();
         let main = document.createElement("div");
         main.className += 'categories';
         document.body.appendChild(main);
     
     
         c.mainFetcher('/categories');
     
         app.categoryClickControl += 1;
     
      } else if(app.categoryClickControl === 1) {
         const main = document.querySelector('.categories');
         main.parentNode.removeChild(main);
         app.categoryClickControl -= 1;
      } else {
      }
   }

   setCategory() {
      const cat = document.querySelectorAll('h2.category');
      cat.forEach((category) =>
         category.addEventListener('click', () => {
            //have this function render the subcategories
            setTimeout(function(){
               const newCat = new Category()
               newCat.getSubcategory()
            }, 100)
         })
      )
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

   getSubcategory() {
      const child1 = document.querySelector('div').children[0];
      const child2 = document.querySelector('div').children[1];
      const child3 = document.querySelector('div').children[2];
      const newSub = new Category()

      const sports = () => {
         newSub.renderSubcategory("SPORTS")
      }
     
      const movies = () => {
         newSub.renderSubcategory("MOVIES")
      }
     
      const videoGames = () => {
         newSub.renderSubcategory("VIDEO GAMES")
      }
     
     
      child1.addEventListener('click', sports, {once: true});
      child2.addEventListener('click', movies, {once: true})
      child3.addEventListener('click', videoGames, {once: true})
   }

   renderSubcategory(params) {
      const subcat = new CategoryFetch();
      if(params === "SPORTS") {
         subcat.subFetcher('/subcategories/sports');
      } else if(params === "MOVIES") {
         subcat.subFetcher('/subcategories/movies');
      } else if(params === "VIDEO GAMES") {
         subcat.subFetcher('/subcategories/video_games');
      }
   }

   renderSubcategories(data) {
      let currentData = [];
      currentData.push(data)
     
      if(app.subCategoryClickControl === 0) {
         let subMain = document.createElement("div")
         subMain.className = "subCategories";
         document.body.appendChild(subMain);

         const subcats = document.querySelector('.categories');
         const sortBtn = document.createElement('button');
         sortBtn.className = 'sortBtn';
         sortBtn.innerHTML = 'Sort!';

         sortBtn.addEventListener('click', function(event){
            event.preventDefault();
            const btns = document.querySelectorAll('.subCategory');
            let textArray = [];

            
            btns.forEach((btn) => {
               textArray.push(btn.innerText)
            })

            const destroy = () => {
               const subCat = document.querySelector('.subCategories');
               subCat.parentNode.removeChild(subCat);
               app.subCategoryClickControl = 0;
               currentData.pop();
            }
            destroy()

            const main = document.querySelector('body')
            const newSubCat = document.createElement('div');
            newSubCat.className = "subCategories";
            main.appendChild(newSubCat);
            

            let newArray = textArray.sort();
            newArray.forEach((subcat) => {
               const subCat = document.createElement('h4');
               subCat.className = "subCategory";
               subCat.innerText = `${subcat.toUpperCase()}`

               newSubCat.appendChild(subCat);
            })

            console.log(textArray.sort())
         }, false);


         subcats.appendChild(sortBtn);

     
         data.forEach((subCat) => {
            const h4 = document.createElement('h4');
            h4.className = "subCategory";
            h4.innerHTML = `${subCat.name.toUpperCase()}`;
            subMain.appendChild(h4);
         })

         const categoryBtn = document.querySelectorAll('.subCategory');
         categoryBtn.forEach((btn) => {
            const quiz = new Quiz();
            btn.addEventListener('click', quiz.getQuiz());
         });
     
         app.subCategoryClickControl += 1;

         } else if(app.subCategoryClickControl === 1) {
            if(data === currentData[0]) {
               const destroy = () => {
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
}

    

