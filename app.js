// set initial count.
let count = 0;

// select value and buttons.
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if ( styles.contains('decrease') ) {
            count--;
        } else if ( styles.contains('increase') ) {
            count++;
        } else {
            count = 0;
        }
        // changing value color
        if( count > 0) {
            value.style.color = "#C4E0F9";
        } else if ( count < 0 ) {
            value.style.color = "#CF1259";
        } else if ( count === 0 ) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});