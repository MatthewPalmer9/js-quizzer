let app = new AppContainer;

subCategoryClickControl = 0;
theAnswers = [];
url = `http://localhost:3000`

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

setTimeout(function() {
   buttons = document.querySelectorAll('h2 button');
   buttons.forEach((bttn) => {
      btn.addEventListener('click', (event) => {
         params = `${bttn.className}`
         deleteFetch(params);
      });
   });
}, 100);

// POST HANDLING
postFetch = (params) => {
   console.log(params)
   fetch(url, {
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
deleteFetch = (params) => {
   fetch(url + `/finishedquizzes/${params}`, {
      method: 'DELETE',
      headers: {
         'Content-type': 'application/json'
      }
   })
   .then(resp => resp.json())
   .then(data => console.log(data))
}




  