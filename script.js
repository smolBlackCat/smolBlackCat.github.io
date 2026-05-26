// Resources Constants

const SYSTEM_MODE_INDICATOR = "images/system-mode-indicator.png";
const LIGHT_MODE_INDICATOR = "images/light-mode-indicator.png";
const DARK_MODE_INDICATOR = "images/dark-mode-indicator.png";

// Widgets
const body_element = document.getElementById("body-element");
const night_switch = document.getElementById("night-switch");
const night_switch_img = document.getElementById("night-switch-label");

function next_color_scheme(color_scheme) {
	if (color_scheme === "") {
		return "light";
	} else if (color_scheme === "light") {
		return "dark";
	} else if (color_scheme === "dark") {
		return "";
	}
}

function color_scheme_indicator(color_scheme) {
	if (color_scheme === "") {
		return SYSTEM_MODE_INDICATOR;
	} else if (color_scheme === "light") {
		return LIGHT_MODE_INDICATOR;
	} else if (color_scheme === "dark") {
		return DARK_MODE_INDICATOR;
	}
}

function set_color_scheme(color_scheme) {
	document.documentElement.style.colorScheme = color_scheme;
	night_switch_img.setAttribute("src",
		color_scheme_indicator(color_scheme));
	localStorage.setItem("current-theme", color_scheme);
}

let current_color_scheme = localStorage.getItem("current-theme") || "";
set_color_scheme(current_color_scheme);

// TODO: Add commemorative day profile pictures

night_switch.addEventListener("click", (event) => {
	current_color_scheme = next_color_scheme(current_color_scheme);
	set_color_scheme(current_color_scheme);
});