# Joke Generator [![Netlify Status](https://api.netlify.com/api/v1/badges/3f8371cf-9f76-4d10-9a09-7dd3deb3a848/deploy-status)](https://app.netlify.com/sites/joke-generator-webpack-hld/deploys)

## About the User
- The user of this app wants to get a random joke related to web development. 

## Features
- The user can click a "Get a Joke" button and will be given a joke setup.
- The user can then click the "Get Punchline" button and will be given the punchline for the joke.
- The user can click the "Get Another Joke" button to receive a new joke setup. 

## Code Snippet 
```javascript

document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id === 'getAJoke' || e.target.id === 'getAnotherJoke') {
      jokeData().then((response) => {
        showJoke(response);
        document.querySelector('#mainContainer').innerHTML = `<h1>${joke.setup}</h1>`;
        getPunchlineButton();
      });
    }

```
## ScreenShots

![image](https://user-images.githubusercontent.com/86806913/137170751-816d8910-c04a-47a1-b815-842eab62217d.png)
<br>
![image](https://user-images.githubusercontent.com/86806913/137170826-4b0c24b3-f89e-4f7a-a9ed-23eaa84775a8.png)

## Relevent Links
- [View App](https://joke-generator-webpack-hld.netlify.app)
- [View the mock](https://www.figma.com/file/dUTnw5fZfWCB2RCRJpS7Af/JJ-Wireframe-JS?node-id=0%3A1)

## Author
[Halie Dyer](https://github.com/DyerHL)


