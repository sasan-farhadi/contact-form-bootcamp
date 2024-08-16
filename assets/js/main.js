const mode = document.getElementById('mode')
const star = document.querySelector('body')
const contact = document.getElementById('contact')

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
})


const modeHandler = () => {
    if (!mode.checked) {
        star.style.color = "white"
        star.style.backgroundColor = "#485460"
        contact.style.backgroundColor = "#2d3436"
        contact.style.boxShadow = "-2px 7px 16px 5px #fff"
    } else {
        star.style.color = "black"
        star.style.backgroundColor = "#f1f2f6"
        contact.style.backgroundColor = "#eeedfb"
        contact.style.boxShadow = "-2px 7px 16px 5px black"
    }
}

mode.addEventListener("click", modeHandler)













// const button = document.querySelector('button')
// const mode = document.getElementById('mode')
// const star = document.querySelector('body')
// const contact = document.getElementById('contact')
// const alertfname = document.getElementById('alertfname')
// const alertlname = document.getElementById('alertlname')
// const alertemail = document.getElementById('alertemail')
// const input = document.querySelectorAll(".input")
// const email = document.getElementById('email')
// const fname = document.getElementById('fname')
// const lname = document.getElementById('lname')


// const showAlert = (message, alertname) => {
//     alertfname.innerHTML = ""
//     alertlname.innerHTML = ""
//     alertemail.innerHTML = ""
//     const alert = document.createElement("p")
//     alert.innerText = message
//     alert.classList.add("alert")
//     alertname.append(alert)
// }


// const buttonHandler = () => {
//     const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
//     const res = emailRegex.test(email.value)
//     if (!res) {
//         showAlert("Please enter a valid email address", alertemail)
//         email.classList.add("input-add")
//     } else if (!fname.value.trim()) {
//         showAlert("This field is required", alertfname)
//         fname.classList.add("input-add")
//     } else {
//         email.classList.remove("input-add")
//         fname.classList.remove("input-add")
//         showAlert("")
//     }

// }


// const modeHandler = () => {
//     if (!mode.checked) {
//         star.style.color = "white"
//         star.style.backgroundColor = "#485460"
//         contact.style.backgroundColor = "#2d3436"
//         contact.style.boxShadow = "-2px 7px 16px 5px #fff"
//     } else {
//         star.style.color = "black"
//         star.style.backgroundColor = "#f1f2f6"
//         contact.style.backgroundColor = "#eeedfb"
//         contact.style.boxShadow = "-2px 7px 16px 5px black"
//     }
// }

// // const inputAlert = event => {
// //     if (!event.target.value) {
// //         event.target.classList.add("input-add")
// //         showAlert("This field is required")
// //     } else {
// //         event.target.classList.remove("input-add")
// //         showAlert("")
// //     }
// // }

// // input.forEach(x => {
// //     x.addEventListener("click", inputAlert)
// // })
// mode.addEventListener("click", modeHandler)
// button.addEventListener('click', buttonHandler)