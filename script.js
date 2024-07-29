const url = "https://api.adviceslip.com/advice";
const button = document.getElementById("advice-card__btn");

button.addEventListener("click", (event) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.json();
    })
    .then((adviceSlip) => {
      //console.log(adviceSlip.slip.id);
      //console.log(adviceSlip.slip.advice);

      const adviceTitle = document.getElementById("advice-card__id");
      adviceTitle.textContent = "Advice #" + adviceSlip.slip.id;

      const adviceDesc = document.getElementById("advice-card__desc");
      adviceDesc.textContent = "\u{201C}" + adviceSlip.slip.advice + "\u{201D}";
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.appendChild(document.createTextNode(`Error: ${error.message}`));
      document.body.insertBefore(p, adviceContainer);
    });
});
