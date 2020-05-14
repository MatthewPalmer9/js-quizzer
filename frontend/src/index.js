let app = new AppContainer;
app.subCategoryClickControl = 0;
theAnswers = [];

// -------------------------------------------------//

function pushResult(data){
   data.forEach((ans) => {
      theAnswers.push(ans.description);
   })
}

// BUTTON / EVENT HANDLING
const btn = document.getElementById('getQuizzesBtn');

setCategory = () => {
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
   this.getOrRemoveCategories()
);

btn.addEventListener('click', () =>(
   setTimeout(function(){
      setCategory()
   }, 90)
))
// END BUTTON / EVENT HANDLING

// -------------------------------------------------//

// FIRST

getOrRemoveCategories = () => {
   if(app.categoryClickControl === 0) {
       let main = document.createElement("div");
       main.className += 'categories';
       document.body.appendChild(main);


       fetch(app.url + '/categories')
       .then(resp => resp.json())
       .then(data => renderCategories(data))

       .catch(err => alert(err));

       app.categoryClickControl += 1;

   } else if(app.categoryClickControl === 1) {
       const main = document.querySelector('.categories');
       main.parentNode.removeChild(main);
       app.categoryClickControl -= 1;
   } else {
   }
}

// SECOND
renderCategories = (data) => {
   const main = document.querySelector('.categories');
   data.forEach(category => {
     const h2 = document.createElement('h2')
     h2.className = "category"
     h2.innerHTML = `${category.name.toUpperCase()}`
     main.appendChild(h2)
   });
}

// THIRD
getSubCategory = () => {
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
renderSubCategory = (params) => {
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
renderSubcategories = (data) => {
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
         getQuizName(params);
      }

      sndQuiz = () => {
         params = document.querySelector('div.subCategories').children[1].innerText;
         getQuizName(params);
      }

      thrdQuiz = () => {
         params = document.querySelector('div.subCategories').children[2].innerText;
         getQuizName(params);
      }

      subChild1.addEventListener('click', fstQuiz, {once: true});
      subChild2.addEventListener('click', sndQuiz, {once: true});
      subChild3.addEventListener('click', thrdQuiz, {once: true});
   }

   // QUIZ RENDERING

   // ------------------------------------------//
   getQuizName = (params) => {
      // removePageContent();
      params = params

      fetch(`http://localhost:3000/quizzes/${params.toLowerCase()}`)
      .then(resp => resp.json())
      .then(data => renderQuizName(data, params))
   }
   // ------------------------------------------//

   // ------------------------------------------//
   removePageContent = () => {
      //Removes the page content and prepares the space for the quiz
      const main = document.querySelector('.categories');
      const subMain = document.querySelector('.subCategories');
      main.parentNode.removeChild(main);
      subMain.parentNode.removeChild(subMain);
   }
   // ------------------------------------------//

   // ------------------------------------------//
   renderQuizName = (data, params) => {

      params = params;
      //Creates the " <div class="quiz-title"></div> "
      const quizTitle = document.createElement('div');
      quizTitle.className = 'quiz-title';
      document.body.appendChild(quizTitle)

      //Removes the other page content
      removePageContent();

      //Grabs "div.quiz-title" and creates an <h1> with the Quiz Name inside.
      data.forEach((quizHeader) => {
         const main = document.querySelector('div.quiz-title');
         const h1 = document.createElement('h1');
         h1.innerText = `${quizHeader.name}`
         main.appendChild(h1);
      });
      
      // Uses this same "quiz" data to run this function
      getQuizQuestions(data, params);
   }
   // ------------------------------------------//

   // ------------------------------------------//
   getQuizQuestions = (data, params) => {
      params = params;

      // Creates the " <div class="quiz-questions"></div> "
      const main = document.createElement('div');
      main.className = "quiz-questions"
      document.body.appendChild(main);

      // Fetches the questions passed in by (data) & executes " renderQuestions(data) "
      fetch(`http://localhost:3000/quizzes/${params.toLowerCase()}/questions`)
      .then(resp => resp.json())
      .then(data => renderQuestions(data, params))

   }
   // ------------------------------------------//

   // ------------------------------------------//
   renderQuestions = (data, params) => {

      // Uses the data to iterate over each question
      data.forEach((question) => 
      {
         // Grabs "div.quiz-questions" and creates a <div class="asked-question"></div>
         // Then creates an <h1> for each question 
         // with the actual question text inside.
         const main = document.querySelector('div.quiz-questions');
         const div = document.createElement('div');
         div.className = "asked-question";
         main.appendChild(div);

         const ques = document.querySelectorAll(".asked-question");
         const h1 = document.createElement('h1');
         const choicesDiv = document.createElement('div');
         choicesDiv.className = "choices";

         h1.className = "main-question";
         h1.innerText = `${question.name}`;
         ques.forEach((question) => {
            question.appendChild(h1);
            question.appendChild(choicesDiv);
         })
      })


      // Renders the multiple choice answers
      getAnswers(params);
   }

   getAnswers = (params) => {

      // Grabs each div.question & creates 4 <h3></h3> to each one
      const questions = document.querySelectorAll('.choices');
      questions.forEach((question) => {
         ans1 = document.createElement('h3');
         ans2 = document.createElement('h3');
         ans3 = document.createElement('h3');
         ans4 = document.createElement('h3');
         ans5 = document.createElement('h3');

         ans1.className = "choice";
         ans2.className = "choice";
         ans3.className = "choice";
         ans4.className = "choice";
         ans5.className = "choice";

         // Appends the h3.choice(s) to the DOM
         question.appendChild(ans1);
         question.appendChild(ans2);
         question.appendChild(ans3);
         question.appendChild(ans4);
      });

      // Fetches the Answers for this quiz
      fetch(`http://localhost:3000/quizzes/${params.toLowerCase()}/questions/answers`)
      .then(resp => resp.json())
      .then(answers => renderAnswers(answers))

   }

   renderAnswers = (answers) => {
      app.answers.length = 0;
      const choices = document.querySelectorAll('.choice');

      answers.forEach((answer) => {
         app.answers.push(answer.description);
      })

      setTimeout(function() {
         //Question 1
         choices[0].innerText = app.answers[0];
         choices[1].innerText = app.fakeFBAnswers["Q1"][0];
         choices[2].innerText = app.fakeFBAnswers["Q1"][1];
         choices[3].innerText = app.fakeFBAnswers["Q1"][2];
         
         //Question 2
         choices[5].innerText = app.answers[1];
         choices[8].innerText = app.answers[2];
         choices[12].innerText = app.answers[3];
         choices[16].innerText = app.answers[4];
      }, 500);
      
   }
   // ------------------------------------------//

   subBtn.forEach((btn) => {
      btn.addEventListener('click', getQuiz);
   });
      
}


