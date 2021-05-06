const input = document.getElementById("password");
const div = document.querySelector(".message");


const passwords = ["user", "wiosna", "Ania", "jeDeN", "DwA"]
const messages = ["wyjechałam na zawsze", "piękna pora roku", "fajny masz styl", "Super", "działa!"]

// version 2
upperCasePasswords = passwords.map(password => password.toUpperCase())

const showMessage = (e) => {
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

    // version 3
    div.textContent = "";
    passwords.forEach((password, index) => {
        if (password.toUpperCase() === e.target.value.toUpperCase()) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
}

input.addEventListener("input", showMessage)

input.addEventListener("focus", e => {
    e.target.classList.add("active");
})

input.addEventListener("blur", e => {
    e.target.classList.remove("active");
})