tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',      // 深海軍藍 (User 指定)
        secondary: '#E67E22',    // 橘色 (僅作為警告/點綴)
        accent: '#3B82F6',       // 藍色 (用於 Logo 文字或高亮)
        surface: '#FFFFFF',      // 純白底
        'surface-container': '#F8FAFC',
        on: {
          surface: '#1E293B'
        },
        error: '#EF4444'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
        headline: ['Noto Sans TC', 'sans-serif'],
        body: ['Noto Sans TC', 'sans-serif'],
        logo: ['Noto Serif TC', 'serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'lux': '0 10px 30px -5px rgba(31, 41, 55, 0.1)'
      }
    }
  }
}
