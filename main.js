const input = document.getElementById("password");
const div = document.querySelector(".message");


const passwords = ["user", "wiosna", "Ania", "jeDeN", "DwA"]
const messages = ["wyjechałam na zawsze", "piękna pora roku", "fajny masz styl", "Super", "działa!"]

// version 2
upperCasePasswords = passwords.map(password => password.toUpperCase())

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
    // console.log(e.target.value);
    // console.log(this.value);

    // console.log(e.target);
    // console.log(this);


    // version 1
    // const text = e.target.value;
    // const id = passwords.indexOf(text)
    // div.textContent = id != -1 ? messages[id] : "";

    // version 2
    // div.textContent = "";
    // upperCasePasswords.forEach((password, index) => {
    //     const input = e.target.value.toUpperCase()
    //     if (password === input) {
    //         div.innerHTML = messages[index];
    //         e.target.value = "";
    //     }
    // })



    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const deleteProgressBar = () => document.body.removeChild(document.getElementById("progress"))

    // version 3
    // div.textContent = "";
    // passwords.forEach((password, index) => {
    //     if (password.toUpperCase() === e.target.value.toUpperCase()) {
    //         div.textContent = messages[index];
    //         e.target.value = "";
    //     }
    // })

    // version 4 (last)
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