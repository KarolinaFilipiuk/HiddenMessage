const input = document.getElementById("password");
const div = document.querySelector(".message");
const ul = document.querySelector("#hint");

const passwords = ["poGOda", "poRa rokU", "ziEmia", "20", "jAVa"]
const messages = ["Dzisiaj jest idealna pogoda na rower!", "Na szczęście mamy już wiosnę :)", "... nie jest płaska.", "20..21", "script!"]

const addHints = () => {
    passwords.forEach(password => {
        const li = document.createElement("li");
        li.textContent = password;
        li.style.listStyle = "none";
        li.style.display = "inline";
        li.style.marginLeft = "10px";
        li.style.fontSize = "7px";
        li.style.height = "30px"
        li.style.color = "gray"
        ul.appendChild(li);
    })
}

const loadingData = () => {
    let i = 0;

    function move() {
        if (i == 0) {
            i = 1;
            var bar = document.getElementById("bar");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    bar.style.width = width + "%";
                }
            }
        }
    }

    const progress = document.createElement("div");
    const bar = document.createElement("div");
    progress.id = "progress";
    bar.id = "bar";
    progress.appendChild(bar);
    document.body.insertBefore(progress, document.getElementById("welcome"));
    move();
}

async function showMessage(e) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const deleteProgressBar = () => document.body.removeChild(document.getElementById("progress"))

    div.textContent = "";
    for (let i = 0; i < passwords.length; i++) {
        if (passwords[i].toUpperCase() === e.target.value.toUpperCase()) {
            loadingData();
            await sleep(2000);
            div.textContent = messages[i];
            e.target.value = "";
            deleteProgressBar();
        }
    }
}

input.addEventListener("input", showMessage)

input.addEventListener("focus", e => {
    e.target.classList.add("active");
})

input.addEventListener("blur", e => {
    e.target.classList.remove("active");
})

addHints()