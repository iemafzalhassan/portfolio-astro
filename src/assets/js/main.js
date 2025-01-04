// Add your javascript here

window.darkMode = false;

const stickyClasses = ["fixed", "h-14"];
const unstickyClasses = ["absolute", "h-20"];
const stickyClassesContainer = [
	"border-neutral-300/50",
	"bg-white/80",
	"dark:border-neutral-600/40",
	"dark:bg-neutral-900/60",
	"backdrop-blur-2xl",
];
const unstickyClassesContainer = ["border-transparent"];
let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
	headerElement = document.getElementById("header");

	// Check system preference for dark mode
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const darkModeStorage = localStorage.getItem("dark_mode");
	
	if (darkModeStorage === "true" || (darkModeStorage === null && prefersDark)) {
		window.darkMode = true;
		showNight();
	} else {
		window.darkMode = false;
		showDay();
	}
	
	stickyHeaderFuncionality();
	applyMenuItemClasses();
	evaluateHeaderPosition();
	mobileMenuFunctionality();

	// Add click event listener for dark mode toggle
	document.getElementById("darkToggle").addEventListener("click", () => {
		document.documentElement.classList.add("duration-300");
		
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("dark_mode", "false");
			showDay(true);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("dark_mode", "true");
			showNight(true);
		}
	});
});

window.stickyHeaderFuncionality = () => {
	window.addEventListener("scroll", () => {
		evaluateHeaderPosition();
	});
};

window.evaluateHeaderPosition = () => {
	if (window.scrollY > 16) {
		headerElement.firstElementChild.classList.add(...stickyClassesContainer);
		headerElement.firstElementChild.classList.remove(
			...unstickyClassesContainer,
		);
		headerElement.classList.add(...stickyClasses);
		headerElement.classList.remove(...unstickyClasses);
		document.getElementById("menu").classList.add("top-[56px]");
		document.getElementById("menu").classList.remove("top-[75px]");
	} else {
		headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
		headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
		headerElement.classList.add(...unstickyClasses);
		headerElement.classList.remove(...stickyClasses);
		document.getElementById("menu").classList.remove("top-[56px]");
		document.getElementById("menu").classList.add("top-[75px]");
	}
};

function showDay(animate) {
	// Clear any existing animations first
	document.getElementById("sun").classList.remove("setting", "rising");
	document.getElementById("moon").classList.remove("setting", "rising");

	if (animate) {
		// Start moon setting animation
		document.getElementById("moon").classList.add("setting");
		
		// Wait for moon to set before showing sun
		setTimeout(() => {
			document.getElementById("moon").classList.add("hidden");
			document.getElementById("sun").classList.remove("hidden");
			
			// Start sun rising animation after a brief pause
			setTimeout(() => {
				document.getElementById("sun").classList.add("rising");
			}, 50);
		}, 500);
	} else {
		// Instant switch without animation
		document.getElementById("moon").classList.add("hidden");
		document.getElementById("sun").classList.remove("hidden");
	}
}

function showNight(animate) {
	// Clear any existing animations first
	document.getElementById("moon").classList.remove("setting", "rising");
	document.getElementById("sun").classList.remove("setting", "rising");

	if (animate) {
		// Start sun setting animation
		document.getElementById("sun").classList.add("setting");
		
		// Wait for sun to set before showing moon
		setTimeout(() => {
			document.getElementById("sun").classList.add("hidden");
			document.getElementById("moon").classList.remove("hidden");
			
			// Start moon rising animation after a brief pause
			setTimeout(() => {
				document.getElementById("moon").classList.add("rising");
			}, 50);
		}, 500);
	} else {
		// Instant switch without animation
		document.getElementById("sun").classList.add("hidden");
		document.getElementById("moon").classList.remove("hidden");
	}
}

window.applyMenuItemClasses = () => {
	const menuItems = document.querySelectorAll("#menu a");
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].pathname === window.location.pathname) {
			menuItems[i].classList.add("text-neutral-900", "dark:text-white");
		}
	}
};

function mobileMenuFunctionality() {
	document.getElementById("openMenu").addEventListener("click", () => {
		openMobileMenu();
	});

	document.getElementById("closeMenu").addEventListener("click", () => {
		closeMobileMenu();
	});
}

window.openMobileMenu = () => {
	document.getElementById("openMenu").classList.add("hidden");
	document.getElementById("closeMenu").classList.remove("hidden");
	document.getElementById("menu").classList.remove("hidden");
	document.getElementById("mobileMenuBackground").classList.add("opacity-0");
	document.getElementById("mobileMenuBackground").classList.remove("hidden");

	setTimeout(() => {
		document
			.getElementById("mobileMenuBackground")
			.classList.remove("opacity-0");
	}, 1);
};

window.closeMobileMenu = () => {
	document.getElementById("closeMenu").classList.add("hidden");
	document.getElementById("openMenu").classList.remove("hidden");
	document.getElementById("menu").classList.add("hidden");
	document.getElementById("mobileMenuBackground").classList.add("hidden");
};
