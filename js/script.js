const nav = document.querySelector("nav");
window.addEventListener ("scroll", function() {
	nav.classList.toggle ("sticky", window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};