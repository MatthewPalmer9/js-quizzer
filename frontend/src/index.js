let app = new AppContainer;
app.subCategoryClickControl = 0;

// -------------------------------------------------//

// BUTTON / EVENT HANDLING
const btn = document.getElementById('getQuizzesBtn');

function setCategory(){
   const cat = document.querySelectorAll('h2.category');
   cat.forEach((category) =>
      category.addEventListener('click', () => {
         //have this function render the subcategories
         setTimeout(function(){
            getSubCategory()
         }, 100)
      })
   )
}

btn.addEventListener('click', () =>
   app.getOrRemoveCategories()
);

btn.addEventListener('click', () =>(
   setTimeout(function(){
      setCategory()
   }, 90)
))
// END BUTTON / EVENT HANDLING

// -------------------------------------------------//

// FIRST 
function getOrRemoveCategories() {
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

// SECOND
function renderCategories(data) {
   const main = document.querySelector('.categories');
   data.forEach(category => {
     const h2 = document.createElement('h2')
     h2.className = "category"
     h2.innerHTML = `${category.name.toUpperCase()}`
     main.appendChild(h2)
   });
}

// THIRD
function getSubCategory() {
   const child1 = document.querySelector('div').children[0];
   const child2 = document.querySelector('div').children[1];
   const child3 = document.querySelector('div').children[2];

   sports = () => {
      renderSubCategory("SPORTS")
   }

   movies = () => {
      renderSubCategory("MOVIES")
   }

   videoGames = () => {
      renderSubCategory("VIDEO GAMES")
   }


   child1.addEventListener('click', sports, {once: true});

   child2.addEventListener('click', movies, {once: true})

   child3.addEventListener('click', videoGames, {once: true})
}

// FORTH
function renderSubCategory(params) {
      if(params === "SPORTS") {
         fetch("http://localhost:3000" + '/subcategories/sports')
         .then(resp => resp.json())
         .then(data => renderSubcategories(data));
      } else if(params === "MOVIES") {
         fetch("http://localhost:3000" + '/subcategories/movies')
         .then(resp => resp.json())
         .then(data => renderSubcategories(data));
      } else if(params === "VIDEO GAMES") {
         fetch("http://localhost:3000" + '/subcategories/video_games')
         .then(resp => resp.json())
         .then(data => renderSubcategories(data));
      }
}

// FIFTH
function renderSubcategories(data) {
   currentData = []
   currentData.push(data)

   if(app.subCategoryClickControl === 0) {
      let subMain = document.createElement("div")
      subMain.className = "subCategories";
      document.body.appendChild(subMain);

      data.forEach((subCat) => {
         h4 = document.createElement('h4');
         h4.className = "subCategory";
         h4.innerHTML = `${subCat.name.toUpperCase()}`;
         subMain.appendChild(h4);
      })


      app.subCategoryClickControl += 1;
   } else if(app.subCategoryClickControl === 1) {
      if(data === currentData[0]) {
         destroy = () => {
            const subCat = document.querySelector('.subCategories');
            subCat.parentNode.removeChild(subCat);
            app.subCategoryClickControl = 0;
            currentData.pop();
         }
         destroy();

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

   // SUB CATEGORY CLICK HANDLING 

   const subBtn = document.querySelectorAll('.subCategory')

   getQuiz = () => {
      subChild1 = document.querySelector('div.subCategories').children[0];
      subChild2 = document.querySelector('div.subCategories').children[1];
      subChild3 = document.querySelector('div.subCategories').children[2];

      fstQuiz = () => {
         params = document.querySelector('div.subCategories').children[0].innerText;
         renderQuiz(params);
      }

      sndQuiz = () => {
         params = document.querySelector('div.subCategories').children[1].innerText;
         renderQuiz(params);
      }

      thrdQuiz = () => {
         params = document.querySelector('div.subCategories').children[2].innerText;
         renderQuiz(params);
      }

      subChild1.addEventListener('click', fstQuiz, {once: true});
      subChild2.addEventListener('click', sndQuiz, {once: true});
      subChild3.addEventListener('click', thrdQuiz, {once: true});
   }

   // QUIZ RENDERING
   function renderQuiz(params) {
      // removePageContent();

      fetch(`http://localhost:3000/quizzes/${params.toLowerCase()}`)
      .then(resp => resp.json())
      .then(data => data.forEach((dataType) => {
         console.log(dataType.name);
      }));
   }

   subBtn.forEach((btn) => {
      btn.addEventListener('click', getQuiz);
   });
      
}


