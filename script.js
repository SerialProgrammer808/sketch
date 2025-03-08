/*logic to select pencil and eraser*/
let pencil = document.querySelector(".pencil");
pencil.addEventListener("mouseover", () => enlarge(pencil));
pencil.addEventListener("mouseleave", () => shrink(pencil));
pencil.addEventListener("click", () => draw(".sketchpad .column div"));

let eraser = document.querySelector(".eraser");
eraser.addEventListener("mouseover", () => enlarge(eraser));
eraser.addEventListener("mouseleave", () => shrink(eraser));
eraser.addEventListener("click", () => erase(".sketchpad .column div"));

function enlarge(item) {
    item.style.transition = "transform 0.5s";
    item.style.transform = "scale(1.2)";
}

function shrink(item) {
    item.style.transition = "transform 0.5s";
    item.style.transform = "scale(0.8333333)";
}

/*writing logic*/
function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

function draw(x) {
    let divs = document.querySelectorAll(x);

    divs.forEach(div => {
        div.addEventListener("mousedown", () => startStopDrawing(divs, true));
        div.addEventListener("mouseup", () => startStopDrawing(divs, false));
        div.removeEventListener("mouseover", changeColor2)
    })

    function startStopDrawing(divs, bool) {
        if (bool === true) {
            divs.forEach(div => {
                div.addEventListener("mouseover", changeColor)
                div.removeEventListener("mouseover", changeColor2)
            })
        }
        else if (bool === false) {
            divs.forEach(div => {
                div.removeEventListener("mouseover", changeColor)
            })
        }
    }
}

/*erasing logic*/
function changeColor2(event) {
    event.target.style.backgroundColor = "white";
}

function erase(x) {
    let divs = document.querySelectorAll(x);

    divs.forEach(div => {
        div.addEventListener("mousedown", () => startStopErasing(divs, true));
        div.addEventListener("mouseup", () => startStopErasing(divs, false));
    })

    function startStopErasing(divs, bool) {
        if (bool === true) {
            divs.forEach(div => {
                div.addEventListener("mouseover", changeColor2)
                div.removeEventListener("mouseover", changeColor)
            })
        }
        else if (bool === false) {
            divs.forEach(div => {
                div.removeEventListener("mouseover", changeColor2)
            })
        }
    }
}


