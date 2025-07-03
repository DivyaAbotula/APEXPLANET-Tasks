function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(res => res.json())
    .then(data => {
      if (data.type === "twopart") {
        document.getElementById("joke").textContent = `${data.setup} - ${data.delivery}`;
      } else {
        document.getElementById("joke").textContent = data.joke;
      }
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Couldn't fetch a joke right now!";
    });
}
