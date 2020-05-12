const app = new AppContainer;

const btn = document.getElementById('getQuizzesBtn');

function getSubCats(params) {
   if(params === "SPORTS") {
      fetch("http://localhost:3000" + '/subcategories/sports')
      .then(resp => resp.json())
      .then(data => renderSubcategories(data));
   } 
   if(params === "MOVIES") {
      fetch("http://localhost:3000" + '/subcategories/movies')
      .then(resp => resp.json())
      .then(data => renderSubcategories(data));
   } 
   if(params === "VIDEO GAMES") {
      fetch("http://localhost:3000" + '/subcategories/video_games')
       .then(resp => resp.json())
       .then(data => renderSubcategories(data));
   }
}

function getSubCategory() {
   const sub = document.querySelectorAll(".category");
   const child1 = document.querySelector('div').children[0];
   const child2 = document.querySelector('div').children[1];
   const child3 = document.querySelector('div').children[2];


   child1.addEventListener('click', (e) => {
      this.getSubCats("SPORTS");
      child1.removeEventListener('click', (e));
   })

   child2.addEventListener('click', (e) => {
      getSubCats("MOVIES");
      child1.removeEventListener('click', (e));
   })

   child3.addEventListener('click', (e) => {
      getSubCats("VIDEO GAMES");
      child1.removeEventListener('click', (e));
   })
}


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

function renderSubcategories(data) {
   const main = document.querySelector('.subCategories')
   data.forEach(category => {
      const h4 = document.createElement('h4')
      h4.className = "subCategory"
      h4.innerHTML = `${category.name.toUpperCase()}`
      main.appendChild(h4)
   })
}

btn.addEventListener('click', () =>
   app.getOrRemoveCategories()
);

btn.addEventListener('click', () =>(
   setTimeout(function(){
      setCategory()
   }, 90)
))
