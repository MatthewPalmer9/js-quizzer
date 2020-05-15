let app = new AppContainer;

subCategoryClickControl = 0;
theAnswers = [];

// -------------------------------------------------//

// BUTTON / EVENT HANDLING
btn = document.querySelector('#getQuizzesBtn');
btn.addEventListener('click', () =>
   getOrRemoveCategories()
);

btn.addEventListener('click', () =>(
   setTimeout(function(){
      setCategory()
   }, 90)
));





  