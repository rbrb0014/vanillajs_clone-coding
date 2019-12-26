const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#c0392b";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
        console.log("OTHER");
    } else {
        title.style.color = BASE_COLOR;
        console.log("BASE");
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();