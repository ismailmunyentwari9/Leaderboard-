import './style.css';
import getApiData from './modules/display.js';

getApiData();

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/f5is5nIfSBR4nYJ4c0Ub/scores';

// Add new score
const addScore = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const data = { user: name, score };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
};

// Add event listener to the form
const scoreForm = document.getElementById('score-form');
scoreForm.addEventListener('submit', addScore);
// refrehing

const refreshButton = document.getElementById('refreher');
refreshButton.addEventListener('click', () => {
  getApiData();
});
