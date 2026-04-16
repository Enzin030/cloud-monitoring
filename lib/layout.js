document.addEventListener('DOMContentLoaded', function() {
    initLayout();
});

async function initLayout() {
    const head = document.head;
    
    // 載入 Noto Sans TC（含 400/500/600/700 四種字重）
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&display=swap';
    head.appendChild(fontLink);
    
    // 載入 Material Symbols（含 filled 變體）
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    head.appendChild(iconLink);
    
    // 載入元件
    await loadComponent('header-placeholder', 'components/header.html');
    await loadComponent('footer-placeholder', 'components/footer.html');

    // 設定選單 active 狀態
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
            // 啟用狀態：海軍藍字體 + semibold
            link.classList.remove('text-slate-400');
            link.classList.add('text-[#1F2937]', 'font-semibold');
            
            // 啟動下底線動畫
            if (indicator) {
                indicator.classList.remove('scale-x-0');
                indicator.classList.add('!scale-x-100');
            }
            
            // 圖示高亮
            const icon = link.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.classList.remove('text-slate-400');
                icon.classList.add('text-[#1F2937]');
            }
        }
    });
}
