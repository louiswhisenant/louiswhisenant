// ------------------- Variables ------------------- //
const email = document.querySelector('.email'),
    trigger = document.querySelector('.trigger'),
    e0 = document.querySelector('.e0'),
    e1 = document.querySelector('.e1'),
    e2 = document.querySelector('.e2');

let pre,
    post;


// ------------------- Methods ------------------- //
function populateESpans() {
    e1.innerHTML = pre;
    e2.innerHTML = post;
}

function emailClickEvent() {
    pre = '1060waddison';
    post = 'chicagoil';
    e0.href = `mailto:${pre}@${post}.com`;

    populateESpans();

    e0.style.visibility = 'visible';
    e0.style.animation = 'slideinleft .4s';

    e.preventDefault();
}

function triggerClickEvent(e) {
    if (e0.href !== 'mailto:1060waddison@chicagoil.com') {
        pre = 'louiswhisenant';
        post = 'gmail';
        e0.href = `mailto:${pre}@${post}.com`;

        populateESpans();

        e0.style.visibility = 'visible';
        e0.style.animation = 'slideinleft .4s';

        e.preventDefault();
    }
}

// ------------------- Event Listeners ------------------- //
email.addEventListener('click', emailClickEvent);
trigger.addEventListener('click', triggerClickEvent);

// ------------------- End ------------------- //