const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const button = document.getElementById("get-joke");

button.addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      setupElement.textContent = data.setup;
      punchlineElement.textContent = data.punchline;
    })
    .catch(error => {
      setupElement.textContent = "Oops! Something went wrong.";
      punchlineElement.textContent = "";
      console.error("Error fetching joke:", error);
    });
}
