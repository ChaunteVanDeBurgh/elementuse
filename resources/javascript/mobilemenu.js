const mobileMenu = () => {
	document.getElementById('sidebar').style.display = "flex";
	document.getElementById('banner').style.display = "none";
	document.getElementById('menu-icon').style.display = "none";
	document.getElementById('menu-close').style.display = "flex";
	document.getElementById('content').style.display = "none";
};

const closeMenu = () => {
	document.getElementById('sidebar').style.display = "none";
	document.getElementById('banner').style.display = "flex";
	document.getElementById('menu-icon').style.display = "flex";
	document.getElementById('menu-close').style.display = "none";
	document.getElementById('content').style.display = "flex"
};