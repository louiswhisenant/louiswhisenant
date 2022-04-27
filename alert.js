// ------------------ Variables ------------------ //

// Create a node list of all links with the dataset "alert-dismiss"
let alertCloses = document.querySelectorAll('a[data-toggle="alert-dismiss"]');
const footerLink = document.querySelector('#footer-link');


// ------------------ Methods ------------------ //

function clickAlertBox(e) {
    if (e.target.classList.contains('alert-close')) {
        // Select the box that corresponds to the close link by e.target's boxtoclose dataset and pass that dataset to the querySelector to set display of correct .alert-box to 'none'
        let boxToClose = document.querySelector(`${e.target.dataset.boxtoclose}`);

        closeAlertBox(boxToClose);

        e.preventDefault();
    }
}

function closeAlertBox(alertBox) {
    fadeout(alertBox);
    setTimeout(() => alertBox.style.display = 'none', 500);
}

function fadeout(el) {
    var fade = (el);

    var intervalID = setInterval(function () {
        if (!fade.style.opacity) {
            fade.style.opacity = 1;
        }

        if (fade.style.opacity > 0) {
            fade.style.opacity -= 0.1;
        } else {
            clearInterval(intervalID);
        }

    }, 35);
}

function createToastAlert() {
    let toastList = document.querySelectorAll('.toast');
    let newToastID = Array.from(toastList).length;

    // create a new div element 
    const newToast = document.createElement('div');

    // assign it an ID
    newToast.setAttribute('id', `toast-${newToastID}`);

    newToast.setAttribute('class', 'alert-box toast bg-danger');

    // and give it some content 
    newToast.innerHTML = `
        <p class="alert-msg">
        You're already here!
        </p>
        <a href="" class="alert-close" data-toggle="alert-dismiss" data-boxtoclose="#toast-${newToastID}">&times;</a>
    `;

    // add the newly created element and its content into the DOM 
    const toastContainer = document.querySelector('.toast-container');
    const toastPost = document.querySelector("#toast-post");
    toastContainer.insertBefore(newToast, toastPost);

    // setTimeout(closeAlertBox(document.querySelector(`#toast-${newToastID}`)), 3000);
    setTimeout(function () {
        fadeout(newToast);
        setTimeout(() => newToast.style.display = 'none', 500);
    }, 3000);
}

// ------------------ Event Listeners ------------------ //

document.addEventListener('click', clickAlertBox);
footerLink.addEventListener('click', createToastAlert);