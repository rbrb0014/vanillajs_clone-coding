const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    console.log("I did it!");
    const hasClass = title.classList.contains(CLICKED_CLASS);
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    title.addEventListener("click", handleClick);
}
init();