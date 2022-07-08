const error = [
    "First name required.",
    "Last name required.",
    "E-mail required.",
    "Field required.",
    "Field required.",
    "Passwords do not match."
];

function validateForm() {
    
    //Form Validation Variables
    let fn = document.forms["myForm"]["firstName"].value;
    let ln = document.forms["myForm"]["lastName"].value;
    let em = document.forms["myForm"]["email"].value;
    let pwd = document.forms["myForm"]["pwd"].value;
    let pwdConf = document.forms["myForm"]["pwd-confirm"].value;
    
    // Non-empty value check arrays
    let formArr = [fn, ln, em, pwd, pwdConf];
    let divArr = [".fn-div", ".ln-div", ".email-div", ".pwd-div", ".pwdConf-div"];

    nonEmptyCheck(formArr, divArr);
    passwordCheck(pwd, pwdConf);
    validEmail(em);
}

function nonEmptyCheck(formArr, divArr) {
    for(var i = 0; i < formArr.length; i++) { 
        // If div is flagged and still invalid, continue along
        if (document.querySelector(divArr[i]).classList.contains('flagged') && formArr[i] == "") {
            continue;
        }
        // If div is invalid
        else if (formArr[i] === "") {
            const div = document.querySelector(divArr[i]);
            div.classList.add('flagged');
            const span = document.createElement("span"); 
            span.classList.add('invalid');
            span.textContent = error[i];
            div.appendChild(span);
        }
        // if div is flagged and no longer invalid
        else {
            const div = document.querySelector(divArr[i]);
            if (div.classList.contains('flagged')) {
                div.removeChild(div.lastChild);
                div.classList.remove('flagged');
            }
        }
    }
}

function passwordCheck(pwd, pwdConf) {
    
    const div = document.querySelector(".pwd-div");

    // Confirm passwords are matching
    if(pwd !== pwdConf && pwd !== "" && pwdConf !== "") {
        const span = document.createElement("span");
        span.classList.add('invalid');
        span.textContent = error[5];
        div.classList.add('flagged-pw');
        div.appendChild(span);
    }
    else {
        if(div.classList.contains('flagged-pw')) {
            div.removeChild(div.lastChild);
            div.classList.remove('flagged-pw');
        }
    }
}

function validEmail(em) {

    const div = document.querySelector(".email-div");
    let re = /\S+@\S+\.\S+/;


    if (re.test(em) === false && em !== "") {
        const span = document. createElement("span");
        span.classList.add('invalid');
        span.textContent = "Please enter valid e-mail address.";
        div.classList.add('flagged-em');
        div.appendChild(span);
    } 
    else {
        if(div.classList.contains('flagged-em')) {
            div.removeChild(div.lastChild);
            div.classList.remove('flagged-em');
        }
    }
}