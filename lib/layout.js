// Common layout and component loader
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
            item.classList.add('active', 'text-white', 'bg-white/10');
            item.classList.remove('text-slate-500');
            // Set fill for icon
            const icon = item.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = "'FILL' 1";
        } else {
            item.classList.remove('active', 'text-white', 'bg-white/10');
            item.classList.add('text-slate-500');
            const icon = item.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = "'FILL' 0";
        }
    });
}
