const app = new AppContainer;

const btn = document.getElementById('getQuizzesBtn');

btn.addEventListener('click', () =>
   app.getOrRemoveCategories()
)