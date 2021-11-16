// By ID:

// const iconBars = document.getElementById('icon-bars');
// const iconClose = document.getElementById('icon-close');

// iconBars.addEventListener('click',
//     function() {
//         const hamburgerPopup = document.getElementById('popup');
//         console.log(hamburgerPopup);
//         hamburgerPopup.classList.add('active');
//     }
// );

// iconClose.addEventListener('click',
//     function() {
//         const hamburgerPopup = document.getElementById('popup');
//         console.log(hamburgerPopup);
//         hamburgerPopup.classList.remove('active');
//     }
// );

// By Class, not editing html:

const iconClose = document.querySelector('.close');
const iconBars = document.querySelector('.header-right > a');
const hamburgerPopup = document.querySelector('.hamburger-menu');
console.log(iconBars);
console.log(iconClose);


iconBars.addEventListener('click',
    function() {
        console.log(hamburgerPopup);
        hamburgerPopup.classList.add('active');
    }
);

iconClose.addEventListener('click',
    function() {
        const hamburgerPopup = document.querySelector('.hamburger-menu');
        console.log(hamburgerPopup);
        hamburgerPopup.classList.remove('active');
    }
);