tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // 專業政府/醫療風格：深藍主色 + 橘色點綴
                "primary": "#1E293B",      // 深海軍藍 (權威與專業)
                "secondary": "#E67E22",    // 點綴橘 (保留溫暖亮點)
                "accent": "#3B82F6",       // 科技藍
                "surface": "#FFFFFF",      // 純白底色
                "surface-container": "#F8FAFC", 
                "on-surface": "#0F172A",   
                "on-surface-variant": "#64748B",
                "error": "#EF4444",
                "success": "#10B981"
            },
            "borderRadius": {
                "none": "0",
                "sm": "0.4rem",
                "DEFAULT": "0.6rem",
                "md": "0.8rem",
                "lg": "1rem",
                "xl": "1.25rem",   
                "2xl": "1.5rem",
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
