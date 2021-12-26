console.log("App running ...");

const button = document.getElementById("button-01");
button.addEventListener("click", () => console.log(`You're playing with me`));

for (let index = 0; index < 4; index++) {
  button.click();
}
