// Initialize Fonts and Global Styles
(function initStyles() {
    const head = document.head;
    
    // Add Fonts (Outfit, DM Sans)
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=DM+Sans:wght@400;700&display=swap';
    head.appendChild(fontLink);
    
    // Add Material Symbols (穩定版網址)
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Symbols+Outlined';
    head.appendChild(iconLink);
    
    // Add Custom CSS
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'lib/style.css';
    head.appendChild(styleLink);
})();

document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Sidebar
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        fetch('components/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebarPlaceholder.innerHTML = data;
                setActiveNavLink();
            });
    }

    // 2. Load Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            });
    }

    // 3. Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop().split('.')[0] || 'index';
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const itemPage = item.getAttribute('data-page');
        if (itemPage === pageName) {
            item.classList.add('bg-primary/5', 'text-primary');
            item.classList.remove('text-slate-500');
            // 將 Icon 填滿
            const icon = item.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 1";
                icon.classList.add('text-primary');
                icon.classList.remove('text-slate-500');
            }
        } else {
            item.classList.remove('bg-primary/5', 'text-primary');
            item.classList.add('text-slate-500');
            const icon = item.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 0";
                icon.classList.remove('text-primary');
                icon.classList.add('text-slate-500');
            }
        }
    });
}
