// $("#firut").on("click", function () {
//     let e = $("#listofFirut")
//     e.slideToggle()

// })




// $("#change-bg").on("click", changebg)

// function changebg() {
//     $("body").css("background-color", "pink")
// }

// $("#remove-bg").on("click", removebg)

// function removebg() {
//     $("body").css("background-color", "")
// }

function valid() {
    let Fname = $("#name")
    let email = $("#email")
    let Password = $("#password")
    let Pnum = $("#Pnum")

    let error = $("#error")

    error.css("padding", "12px")
    let na = Fname.val()
    let em = email.val()
    let pass = Password.val()

    let num = Pnum.val()
    let pattern = /^\d{4}[\s\-]?\d{2}[\s\-]\d{2}[\s\-]\d{2}/
    let result = pattern.test(num)

    if (na.length < 5) {
        error.html("Full Name is Required")
        return false
    }
    else if (pass.length < 8) {
        error.text("Password is not Strong")
        return false
    }
    else if (em.indexOf("@") == -1 || em.length < 8) {
        error.html("Email Filed is Required")
        return false
    }

    else if (result < 0) {
        error.text("Phone number is not valid")
        return false
    }
    alert("Form Submitted")
    return true
}

