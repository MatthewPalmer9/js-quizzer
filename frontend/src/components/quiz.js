class Quiz {

   constructor(name) {
      this.name = name;
      this.url = "http://localhost:3000";
   }

   getQuiz() {
      const subChild1 = document.querySelector('div.subCategories').children[0];
      const subChild2 = document.querySelector('div.subCategories').children[1];
      const subChild3 = document.querySelector('div.subCategories').children[2];

      let fstQuiz = () => {
         let params = document.querySelector('div.subCategories').children[0].innerText;
         this.getQuizName(params);
      }

      let sndQuiz = () => {
         let params = document.querySelector('div.subCategories').children[1].innerText;
         this.getQuizName(params);
      }

      let thrdQuiz = () => {
         let params = document.querySelector('div.subCategories').children[2].innerText;
         this.getQuizName(params);
      }

      subChild1.addEventListener('click', fstQuiz, { once: true });
      subChild2.addEventListener('click', sndQuiz, { once: true });
      subChild3.addEventListener('click', thrdQuiz, { once: true });
   }

   getQuizName(params) {
      const removePageContent = () => {
         //Removes the page content and prepares the space for the quiz
         const main = document.querySelector('.categories');
         const subMain = document.querySelector('.subCategories');
         main.parentNode.removeChild(main);
         subMain.parentNode.removeChild(subMain);
      }
      removePageContent()
      params = params

      fetch(this.url + `/quizzes/${params.toLowerCase()}`)
         .then(resp => resp.json())
         .then(data => this.renderQuizName(data, params))
   }

   renderQuizName(data, params) {

      params = params;
      //Creates the " <div class="quiz-title"></div> "
      const quizTitle = document.createElement('div');
      quizTitle.className = 'quiz-title';
      document.body.appendChild(quizTitle)

      //Grabs "div.quiz-title" and creates an <h1> with the Quiz Name inside.
      data.forEach((quizHeader) => {
         const main = document.querySelector('div.quiz-title');
         const h1 = document.createElement('h1');

         h1.innerText = `${quizHeader.name}`
         main.appendChild(h1);
      });

      // Uses this same "quiz" data to run this function
      this.getQuizQuestions(data, params);
   }
   // ------------------------------------------//

   // ------------------------------------------//
   getQuizQuestions(data, params) {
      params = params;

      // Creates the " <div class="quiz-questions"></div> "
      const main = document.createElement('div');
      main.className = "quiz-questions"
      document.body.appendChild(main);

      const div = document.querySelector('.quiz-questions')
      const h3 = document.createElement('h3');
      h3.className = "counter";
      h3.innerText = "Score: 0";

      div.appendChild(h3);

      // Fetches the questions passed in by (data) & executes " renderQuestions(data) "
      fetch(this.url + `/quizzes/${params.toLowerCase()}/questions`)
         .then(resp => resp.json())
         .then(data => this.renderQuestions(data, params))
   }
   // ------------------------------------------//

   // ------------------------------------------//
  renderQuestions(data, params) {

      // Uses the data to iterate over each question
      data.forEach((question) => {
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

      const main = document.querySelector('div.quiz-questions');
      const btn = document.createElement('button');
      btn.className = "not-finished";
      btn.innerText = "Submit Quiz"
      btn.style["pointer-events"] = "none";

      main.appendChild(btn);



      // Renders the multiple choice answers
      this.getAnswers(params);
   }

   getAnswers(params) {

      // Grabs each div.question & creates 4 <h3></h3> to each one
      const questions = document.querySelectorAll('.choices');
      questions.forEach((question) => {
         const ans1 = document.createElement('h3');
         const ans2 = document.createElement('h3');
         const ans3 = document.createElement('h3');
         const ans4 = document.createElement('h3');
         const ans5 = document.createElement('h3');

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
      fetch(this.url + `/quizzes/${params.toLowerCase()}/questions/answers`)
         .then(resp => resp.json())
         .then(answers => this.renderAnswers(answers, params))

   }

   renderAnswers(answers, params) {
      app.answers.length = 0;

      answers.forEach((answer) => {
         app.answers.push(answer.description);
      })

      this.renderChoices(params)
   }


   // ANSWERS BELOW //

   // FOOTBALL ANSWERS
   renderChoices(params) {
      const choices = document.querySelectorAll('.choice');
      //Q1
      choices[0].innerText = app.answers[0];
      choices[1].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q1"][0];
      choices[2].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q1"][1];
      choices[3].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q1"][2];

      //Q2
      choices[4].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q2"][0];
      choices[5].innerText = app.answers[1];
      choices[6].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q2"][1];
      choices[7].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q2"][2];
      //Q3 
      choices[8].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q3"][0];
      choices[9].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q3"][1];
      choices[10].innerText = app.answers[2];
      choices[11].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q3"][2];
      //Q4
      choices[12].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q4"][0];
      choices[13].innerText = app.answers[3];
      choices[14].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q4"][1];
      choices[15].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q4"][2];
      //Q5
      choices[16].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q5"][0];
      choices[17].innerText = app.answers[4];
      choices[18].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q5"][1];
      choices[19].innerText = app.fakeAnswers[`${params.toLowerCase()}`]["Q5"][2];


      let allChoices = document.querySelectorAll('.choice');
      let eachQuestion = document.querySelectorAll('.asked-question');

      allChoices.forEach((choice) => {
         choice.addEventListener('click', function (event) {
            if (app.answers.includes(choice.innerText)) {
               const thisParent = choice.parentNode.querySelectorAll(".choice")
               thisParent.forEach((choice) => {
                  choice.style["background-color"] = "lightgrey";
                  choice.style["pointer-events"] = "none";
               })

               choice.style["background-color"] = "green";
               let counter = document.querySelector('.counter');
               let score = parseInt(counter.innerText.split(' ')[1]);
               counter.innerText = "Score: " + (score += 20);

               const checkScore = document.querySelector('.counter');
               if (parseInt(checkScore.innerText.split(' ')[1]) >= 80) {
                  const getBtn = document.querySelector('.not-finished')
                  getBtn.className = "finished";
                  setTimeout(function () {
                     const comp = new Completed();
                     comp.markComplete(params);
                  }, 100);


                  getBtn.style["pointer-events"] = "";
               }
            } else {
               const thisParent = choice.parentNode.querySelectorAll(".choice")
               thisParent.forEach((choice) => {
                  choice.style["background-color"] = "red";
                  choice.style["pointer-events"] = "none";
               })
            };
         }), { once: true };
      });
   }
}