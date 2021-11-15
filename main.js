const iconBars = document.getElementById('icon-bars');
const iconClose = document.getElementById('icon-close');

iconBars.addEventListener('click',
    function() {
        const hamburgerPopup = document.getElementById('popup');
        console.log(hamburgerPopup);
        hamburgerPopup.classList.add('active');
    }
);

iconClose.addEventListener('click',
    function() {
        const hamburgerPopup = document.getElementById('popup');
        console.log(hamburgerPopup);
        hamburgerPopup.classList.remove('active');
    }
);