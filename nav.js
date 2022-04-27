// ------------------- Variables ------------------- //
const navCollapseBtn = document.querySelector('.nav-collapse'),
	chevDown = document.querySelector('.fa-chevron-down'),
	chevUp = document.querySelector('.fa-chevron-up'),
	navMenu = document.querySelector('.nav-menu'),
	navHighlighter = document.querySelector('.nav-highlighter');

// ------------------- Methods ------------------- //

// Expand and collapse mobile nav
function toggleNavEvent(e) {
	if (navCollapseBtn.classList.contains('collapsed')) {
		// Expand toggle nav
		navCollapseBtn.classList.remove('collapsed');
		navCollapseBtn.classList.add('expanded');
	} else if (navCollapseBtn.classList.contains('expanded')) {
		// Collapse toggle nav
		navCollapseBtn.classList.remove('expanded');
		navCollapseBtn.classList.add('collapsed');
	}

	e.preventDefault();
}

// Dismiss expanded toggle nav on any click except .nav-menu click
function dismissNavEvent(e) {
	if (
		navCollapseBtn.classList.contains('expanded') &&
		!e.target.classList.contains('nav-collapse') &&
		!e.target.parentElement.classList.contains('nav-collapse')
	) {
		toggleNavEvent(e);
	}
}

// Restore functionality of nav after window resize
function navRestore() {
	if (window.innerWidth > 700) {
		navCollapseBtn.style.display = 'none';
		navCollapseBtn.className = 'nav-collapse expanded';
	} else if (window.innerWidth < 701) {
		navCollapseBtn.style.display = 'initial';
		navCollapseBtn.className = 'nav-collapse collapsed';
	}
}

// Slide navHighlighter over nav items according to mouse context
function navHoverEvent(e) {
	if (e.target.dataset.slidenum) {
		const hovered = e.target;

		navHighlighter.style.width = '25%';
		navHighlighter.style.left = `${hovered.dataset.slidenum}%`;
		navHighlighter.style.transition = 'left .25s ease-out';
	}
}

// Slide to active nav item
function navLeaveEvent() {
	let activeNavItem = document.querySelector('.nav-active');

	navHighlighter.width = '0%';
	navHighlighter.style.left = `${activeNavItem.dataset.slidenum}%`;
	navHighlighter.style.transition = 'left .5s ease-out';
}

// Slide animation and show content on nav click
function navClickEvent(e) {
	if (e.target.classList.contains('nav-menu-item')) {
		let newActiveLink = e.target,
			newContent = document.querySelector(
				`${newActiveLink.dataset.toggle}`
			),
			oldActiveLink = document.querySelector('.nav-active'),
			oldContent = document.querySelector(
				`${oldActiveLink.dataset.toggle}`
			);

		if (newActiveLink !== oldActiveLink) {
			// Make link styling changes
			oldActiveLink.classList.remove('nav-active');
			newActiveLink.classList.add('nav-active');

			// Make animation and display changes
			newActiveLink.dataset.slidenum > oldActiveLink.dataset.slidenum
				? oldContent.classList.add('slideoutleft')
				: oldContent.classList.add('slideoutright');
			setTimeout(
				() => {
					oldContent.className = 'content-card';
				},
				300,
				oldContent
			);
			setTimeout(
				() => {
					newContent.classList.add('content-active');
					newActiveLink.dataset.slidenum >
					oldActiveLink.dataset.slidenum
						? newContent.classList.add('slideinright')
						: newContent.classList.add('slideinleft');
				},
				300,
				newContent
			);

			e.preventDefault();
		}
	}
}

// ------------------- Event Listeners ------------------- //
navCollapseBtn.addEventListener('click', toggleNavEvent);
document.addEventListener('click', dismissNavEvent);
window.addEventListener('resize', navRestore);
navMenu.addEventListener('mouseover', navHoverEvent);
navMenu.addEventListener('mouseleave', navLeaveEvent);
navMenu.addEventListener('click', navClickEvent);

// ------------------- End ------------------- //
