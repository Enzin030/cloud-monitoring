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
        body: ['Noto Sans TC', 'sans-serif']
      },
      // 全站字體尺寸基準（覆蓋 Tailwind 預設值，確保各頁一致）
      fontSize: {
        'xs':   ['12px', { lineHeight: '1.6' }],  // label / caption / tag
        'sm':   ['14px', { lineHeight: '1.65' }], // 表格內文 / 輸入框
        'base': ['15px', { lineHeight: '1.7' }],  // section header
        'lg':   ['17px', { lineHeight: '1.6' }],
        'xl':   ['19px', { lineHeight: '1.5' }],
        '2xl':  ['22px', { lineHeight: '1.4' }],  // 頁面標題
        '3xl':  ['28px', { lineHeight: '1.3' }],  // 統計數字
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'lux': '0 10px 30px -5px rgba(31, 41, 55, 0.1)'
      }
    }
  }
}

