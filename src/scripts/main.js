import 'bootstrap';
import '../styles/main.scss';
import jokeData from './helpers/jokeData';
import { getAnotherJokeButton, getPunchlineButton } from './helpers/buttons';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div id="mainContainer">
  <button type="button" class="btn btn-outline-primary" id="getAJoke">Get A Joke!</button>
  </div>
  `;

  let joke = {};

  const showJoke = (obj) => {
    joke = {
      setup: obj.setup,
      punchline: obj.delivery
    };
  };

  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id === 'getAJoke' || e.target.id === 'getAnotherJoke') {
      jokeData().then((response) => {
        showJoke(response);
        document.querySelector('#mainContainer').innerHTML = `<h1>${joke.setup}</h1>`;
        getPunchlineButton();
      });
    }

    if (e.target.id === 'getPunchline') {
      document.querySelector('#mainContainer').innerHTML = `<h1>${joke.setup}</h1>`;
      document.querySelector('#mainContainer').innerHTML += `<p>${joke.punchline}</p>`;
      getAnotherJokeButton();
    }
  });
};

init();
