console.log("App running ...");

// Selecting exixsting buttons
const button = document.getElementById("button-01");
const button_6787678232 = document.getElementById("6787678232");
const button_6787678233 = document.getElementById("6787678233");
const button_6787678234 = document.getElementById("6787678234");

// Adding buttons listeners to test programmatic events
button.addEventListener("click", () => console.log(`You're playing with me`));
button_6787678232.addEventListener("click", () =>
  alert(`You're playing with 6787678232`)
);
button_6787678233.addEventListener("click", () =>
  alert(`You're playing with 6787678233`)
);
button_6787678234.addEventListener("click", () =>
  alert(`You're playing with 6787678234`)
);

// Testing programmatic click buttons by content
const rows = [...document.querySelectorAll("li")];

const clickButtonRow = (content) => {
  const searchResult = rows.filter((item) =>
    item.textContent.includes(content)
  );
  [...searchResult[0].childNodes][1].click();
};

// Testing isolate button
for (let index = 0; index < 4; index++) {
  button.click();
}

// Testing click button from search
clickButtonRow("6787678233");
