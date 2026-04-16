document.addEventListener('DOMContentLoaded', function() {
    initLayout();
});

async function initLayout() {
    const head = document.head;
    
    // Add Fonts (Noto Sans TC & Noto Serif TC)
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Serif+TC:wght@700&display=swap';
    head.appendChild(fontLink);
    
    // Add Material Symbols (穩定版網址)
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    head.appendChild(iconLink);
    
    // Add Fill Utility for Material Symbols
    const style = document.createElement('style');
    style.textContent = `
        .fill-1 { font-variation-settings: 'FILL' 1; }
        .font-logo { font-family: 'Noto Serif TC', serif; }
        .nav-link.font-bold { color: #1F2937 !important; }
    `;
    head.appendChild(style);
    
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
        const indicator = link.querySelector('.nav-indicator');
        
        if (linkPage === page) {
            // Apply Active Styles (Navy Blue)
            link.classList.remove('text-slate-400');
            link.classList.add('text-[#1F2937]');
            link.classList.add('font-bold');
            
            // Activate underline animation
            if (indicator) {
                indicator.classList.remove('scale-x-0', 'bg-accent');
                indicator.classList.add('!scale-x-100', 'bg-[#1F2937]'); 
            }
            
            // Icon highlight
            const icon = link.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.classList.remove('text-slate-400');
                icon.classList.add('text-[#1F2937]');
            }
        }
    });
}
