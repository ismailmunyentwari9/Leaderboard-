const getApiData = async () => {
  const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f5is5nIfSBR4nYJ4c0Ub/scores';

  const response = await fetch(apiUrl);
  const data = await response.json();

  // get element by id ...
  const holder = document.getElementById('score-list-holder');

  const scoreList = data.result.map((item) => `<div class="score-list">
                    <p><span>${item.user}</span>: <span>${item.score}</></p>
                </div>`).join('');

  holder.innerHTML = scoreList;
};

export default getApiData;
