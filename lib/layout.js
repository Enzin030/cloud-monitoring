document.addEventListener('DOMContentLoaded', function() {
    initLayout();
});

async function initLayout() {
    const head = document.head;
    
    // Add Fonts (Outfit, DM Sans)
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Outfit:wght@400;700&display=swap';
    head.appendChild(fontLink);
    
    // Add Material Symbols (穩定版網址)
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Symbols+Outlined';
    head.appendChild(iconLink);
    
    // Load Components
    await loadComponent('header-placeholder', 'components/header.html');
    await loadComponent('footer-placeholder', 'components/footer.html');

    // Set Active Menu State
    setActiveMenu();
}

async function loadComponent(id, path) {
    const el = document.getElementById(id);
    if (!el) return;
    
    try {
        const response = await fetch(path);
        const html = await response.text();
        el.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component: ${path}`, error);
    }
}

function setActiveMenu() {
    const currentPath = window.location.pathname;
    const page = currentPath.split('/').pop().split('.')[0] || 'index';
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === page) {
            // Apply Active Styles
            link.classList.remove('text-slate-500', 'border-transparent');
            link.classList.add('text-slate-900', 'border-slate-900');
            
            // Icon highight
            const icon = link.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.classList.add('text-slate-900');
            }
        }
    });
}
