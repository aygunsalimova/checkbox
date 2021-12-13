function check(checked = true) {
    let boxes = document.querySelectorAll(".form-check-input");
    boxes.forEach((box) => {
        box.checked = checked;
    });
}

const btn = document.getElementById("btn");
btn.onclick = checkAll;


function checkAll() {
    check();
    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false);
    this.onclick = checkAll;
}