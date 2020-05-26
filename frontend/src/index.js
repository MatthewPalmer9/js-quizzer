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
   buttons.forEach((bttn) => {
      bttn.addEventListener('click', (event) => {
         params = `${bttn.className}`
         deleteFetch(params);
      });
   });
}, 100);

// POST HANDLING
const postFetch = (params) => {
   console.log(params)
   fetch(url + `/finishedquizzes`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify({
         name: `${params}`
      })
   })
   .then(resp => resp.json())
   .then(data => console.log(data))
   .catch(err => console.log(err));

}



// DELETE HANDLING
const deleteFetch = (params) => {
   fetch(url + `/finishedquizzes/${params}`, {
      method: 'DELETE',
      headers: {
         'Content-type': 'application/json'
      }
   })
   .then(resp => resp.json())
   .then(data => console.log(data))
}




  