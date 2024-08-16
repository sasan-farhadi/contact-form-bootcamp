const mode = document.getElementById('mode')
const star = document.querySelector('body')
const contact = document.getElementById('contact')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const general = document.getElementById('color-1')
const support = document.getElementById('color-2')
const message = document.getElementById('message')
const check = document.getElementById('check')
const sectionQuery = document.querySelector('.query')



form.addEventListener('submit', (e) => {
    console.log(check.checked, support.checked, general.checked);
    if (!validateInputs()) {
        e.preventDefault();
    }
})


const validateInputs = () => {
    const fnameVal = fname.value.trim()
    const lnameVal = lname.value.trim()
    const emailVal = email.value.trim()
    const messageVal = message.value.trim()
    const checkVal = check.checked
    const generalVal = general.checked
    const supportVal = support.checked
    let success = true

    if (fnameVal === '') {
        success = false
        setError(fname, "This field is required")
    } else {
        setSuccess(fname)
    }

    if (lnameVal === '') {
        success = false
        setError(lname, "This field is required")
    } else {
        setSuccess(lname)
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if (messageVal === '') {
        success = false
        setError(message, "This field is required")
    } else {
        setSuccess(message)
    }


    if (checkVal == false) {
        success = false
        setError(check, "This field is required")
    } else {
        setSuccess(check)
    }

    if (generalVal == false && supportVal == false) {
        success = false
        setError(sectionQuery, "This field is required")
    } else {
        setSuccess(sectionQuery)
    }
}




const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}


function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


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


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

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