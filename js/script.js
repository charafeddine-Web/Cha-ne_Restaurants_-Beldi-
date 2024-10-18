const nav = document.querySelector("nav");
window.addEventListener ("scroll", function() {
	nav.classList.toggle ("sticky", window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
/*explore more - tabs*/
function openExplore(evt, foodname) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(foodname).style.display = "flex";
	const testElements = document.querySelectorAll('.test');
    testElements.forEach(element => {
        element.style.display = "none"; 
    });
    if (foodname === "Cake") {
        const cakeElement = document.getElementById(foodname);
        if (cakeElement) {
            cakeElement.style.display = "block";
        }
    }
    evt.currentTarget.className += " active";
}


/*scroll*/
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
    });
}
