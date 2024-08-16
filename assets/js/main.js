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
const alertSuccess = document.querySelector('.alert-success')
const alertFailed = document.querySelector('.alert-failed')



form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    } else if (validateInputs) {
        e.preventDefault();
        showSuccess()
    }
})

const showSuccess = () => {
    alertSuccess.style.display = "block"
    setTimeout(() => {
        alertSuccess.style.display = "none"
        window.location.reload(false);
    }, 1500)
}

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
        setError(check, "To submit this form , please consent to being contacted")
    } else {
        setSuccess(check)
    }

    if (generalVal == false && supportVal == false) {
        success = false
        setError(sectionQuery, "This field is required")
    } else {
        setSuccess(sectionQuery)
    }

    return success
}

const setError = (element, message) => {
    console.log(element)
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

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

fname.addEventListener('paste', function (event) {
    event.preventDefault();
    alertFailed.style.display = "block"
    setTimeout(() => {
        alertFailed.style.display = "none"
    }, 1500);
});

lname.addEventListener('paste', function (event) {
    event.preventDefault();
    alertFailed.style.display = "block"
    setTimeout(() => {
        alertFailed.style.display = "none"
    }, 1500);
});

email.addEventListener('paste', function (event) {
    event.preventDefault();
    alertFailed.style.display = "block"
    setTimeout(() => {
        alertFailed.style.display = "none"
    }, 1500);
});

message.addEventListener('paste', function (event) {
    event.preventDefault();
    alertFailed.style.display = "block"
    setTimeout(() => {
        alertFailed.style.display = "none"
    }, 2500);
});


const modeHandler = () => {
    localStorage.setItem("mode", mode.checked)
    if (!mode.checked) {
        star.style.color = "white"
        star.style.backgroundColor = "#485460"
        contact.style.backgroundColor = "#2d3436"
        contact.style.boxShadow = "-2px 7px 16px 5px #fff"
        label.style.color = "white"
    } else {
        star.style.color = "black"
        star.style.backgroundColor = "#f1f2f6"
        contact.style.backgroundColor = "#eeedfb"
        contact.style.boxShadow = "-2px 7px 16px 5px black"
        label.style.color = "black"
    }
}

const loadHandler = () => {
    const modeStatus = localStorage.getItem("mode")
    if (modeStatus === 'true') {
        mode.checked = true
    } else if (modeStatus === 'false') {
        mode.checked = false
    }

    if (!mode.checked) {
        star.style.color = "white"
        star.style.backgroundColor = "#485460"
        contact.style.backgroundColor = "#2d3436"
        contact.style.boxShadow = "-2px 7px 16px 5px #fff"
        label.style.color = "white"
    } else {
        star.style.color = "black"
        star.style.backgroundColor = "#f1f2f6"
        contact.style.backgroundColor = "#eeedfb"
        contact.style.boxShadow = "-2px 7px 16px 5px black"
        label.style.color = "black"
    }
}

window.addEventListener("load", loadHandler)
mode.addEventListener("click", modeHandler)