let btn = document.querySelector(".m-burger");
let nav = document.querySelector(" .nav-bar");

btn.addEventListener('click', function () {
    if (nav.style.height != "300px") {
        nav.style.height = "300px";
        nav.style.margin = "0";
    }
    else {
        nav.style.height = "0";
        nav.style.margin = "0";
    }
});




const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


