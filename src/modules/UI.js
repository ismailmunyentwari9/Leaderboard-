const variables = () => {
  const form = document.querySelector('form');
  const names = document.querySelector('#name');
  const refreh = document.querySelector('#refreher');
  const score = document.querySelector('#score');
  const holder = document.querySelector('#score-list-holder');
  let scoreArray = [];
  function ScoreObject(names, score) {
    this.names = names;
    this.score = score;
  }
  class UI {
    static dispalyData() {
      const data = scoreArray.map((items) => `<div class="score-list">
        <p>${items.names}:${items.score}</span></p></div>`);
      holder.innerHTML = data.join('');
    }

    static cleanInputs() {
      names.value = '';
      score.value = '';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newObject = new ScoreObject(names.value, score.value);
    scoreArray = [...scoreArray, newObject];
    localStorage.setItem('scores', JSON.stringify(scoreArray));
    UI.dispalyData();
    UI.cleanInputs();
  });

  refreh.addEventListener('click', () => {
    scoreArray = [];
    localStorage.setItem('scores', JSON.stringify(scoreArray));
    UI.dispalyData();
  });

  window.addEventListener('load', () => {
    if (localStorage.getItem('scores')) {
      scoreArray = JSON.parse(localStorage.getItem('scores'));
      UI.dispalyData();
    }
  });
};

export default variables;
