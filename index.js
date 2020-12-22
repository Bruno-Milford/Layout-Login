const inputs = document.querySelectorAll(".input");

function AddFocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function RemoveFocus() {
    let parent = this.parentNode.parentNode;

    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", AddFocus);
    input.addEventListener("blur", RemoveFocus);
});
