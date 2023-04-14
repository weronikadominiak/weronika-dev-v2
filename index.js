console.log("Hello World! Hopefully nothing to see here... :)");

let currentTheme = "dark";
const toggle = document.querySelector("#toggle-theme");

toggle.addEventListener("click", () => {
	const theme = currentTheme === "dark" ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", theme);
	currentTheme = theme;
});
