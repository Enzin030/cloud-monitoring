document.addEventListener('DOMContentLoaded', function() {
    initLayout();
});

async function initLayout() {
    const head = document.head;
    
    // Add Fonts (Outfit, Lexend)
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap';
    head.appendChild(fontLink);
    
    // Add Material Symbols
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
        
        // 如果是載入 header，重新執行 setActiveMenu 以確保動態載入後能生效
        if (id === 'header-placeholder') {
            setActiveMenu();
        }
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
            // Apply Active Class (樣式已在 header.html 自定義)
            link.classList.add('active');
            
            // 確保文字顏色切換
            link.classList.add('text-slate-900');
            link.classList.remove('text-slate-500');
        } else {
            link.classList.remove('active');
        }
    });
}
