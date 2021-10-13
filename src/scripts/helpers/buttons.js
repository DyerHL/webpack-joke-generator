const getJokeButton = () => {
  document.querySelector('#mainContainer').innerHTML += `
    <button type="button" class="btn btn-outline-primary" id="getAJoke">Get A Joke!</button>
    `;
};

const getPunchlineButton = () => {
  document.querySelector('#mainContainer').innerHTML += `
    <button type="button" class="btn btn-outline-success" id="getPunchline">Get Punchline</button>
    `;
};

const getAnotherJokeButton = () => {
  document.querySelector('#mainContainer').innerHTML += `
    <button type="button" class="btn btn-outline-info" id="getAnotherJoke">Get Another Joke</button>
    `;
};

export { getJokeButton, getPunchlineButton, getAnotherJokeButton };
