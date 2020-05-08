const app = new AppContainer;

const btn = document.getElementById('getQuizzesBtn');
btn.addEventListener('click', (e) => app.getCategories())