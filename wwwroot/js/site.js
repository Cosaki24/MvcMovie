// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// script.js

$(document).ready(function () {
    $("#account").submit(function () {
        $(this).removeData('validator');
        $(this).removeData('unobtrusiveValidation');
        $.validator.unobtrusive.parse(this);
        $(this).validate();

        if ($(this).valid()) {
            showLoader();
        }
    });
});

function showLoader() {
    document.getElementById("loader").style.display = "block";
    return true;
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

// Check if a list item with text "invalid login attempt" exists in the form with id "account"
function checkInvalidLoginAttempt() {
    var form = document.getElementById('account');

    if (form) {
        var listItems = form.querySelectorAll('ul li');

        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.includes('Invalid login attempt.')) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Invalid credentials'
                })
                console.log('Found: invalid login attempt');
                return true; // Found the specified text
            }
        }
    }

    console.log('Not found: invalid login attempt');
    return false; // Did not find the specified text
}

// Call the function to check for the specified text
checkInvalidLoginAttempt();


//handleLoginResult();



// Check the login result and show appropriate pop-up
//function handleLoginResult() {
  //  hideLoader();
    

//}


