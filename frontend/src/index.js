const app = new App();
app.start()


subCategoryClickControl = 0;
theAnswers = [];
const url = `http://localhost:3000`

// -------------------------------------------------//

// APP START
// BUTTON / EVENT HANDLING

setTimeout(function() {
   buttons = document.querySelectorAll('h2 button');
   const del = new DeleteFetch()
   buttons.forEach((bttn) => {
      bttn.addEventListener('click', (event) => {
         params = `${bttn.className}`
         del.deleteFetch(params);
      });
   });
}, 100);




  