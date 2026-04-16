tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // Lumina Care 溫馨專業配色
                "primary": "#E67E22",      // 溫暖橘 (活力與關懷)
                "primary-dark": "#D35400",
                "surface": "#FDFBFA",      // 米白底色
                "surface-container": "#F4F2F0", 
                "on-surface": "#2C3E50",   // 深沉藍黑文字
                "on-surface-variant": "#7F8C8D",
                "accent-blue": "#3498DB",
                "error": "#E74C3C",
                "success": "#27AE60"
            },
            "borderRadius": {
                "none": "0",
                "sm": "0.5rem",
                "DEFAULT": "0.75rem",
                "md": "1rem",
                "lg": "1.25rem",
                "xl": "1.5rem",   // 參考圖的大圓角
                "2xl": "2rem",
                "full": "9999px"
            },
            "fontFamily": {
                // 使用 Lexend 或 Outfit 提供更圓潤親近的視覺感
                "headline": ["Lexend", "Outfit", "Noto Sans TC", "sans-serif"],
                "body": ["Lexend", "Noto Sans TC", "sans-serif"],
            },
            "boxShadow": {
                "soft": "0 10px 30px -5px rgba(230, 126, 34, 0.05)",
                "card": "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
                "pill": "0 8px 15px -3px rgba(230, 126, 34, 0.2)"
            }
        },
    },
}
