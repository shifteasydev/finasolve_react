function Validation(values) {
    // alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (values.fname === "") {
        error.fname = "First Name should not be empty*"
    }
    else {
        error.fname = ""
    }
    
    if (values.lname === "") {
        error.lname = "empty*"
    }
    else {
        error.lname = ""
    }


    if (values.email === "") {
        error.email = "email should not be empty*"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match*"
    }
    else {
        error.email = ""
    }

    
    if (values.password === "") {
        error.password = "Password should not be empty*"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password Didn't match*"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;