tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // 深邃公務高級配色
                "primary": "#001e40",      // 極致深藍 (權威)
                "primary-light": "#003366",
                "accent": "#BA1A1A",       // 警示紅 (醒目)
                "surface": "#FDFDFD",      // 純淨白底
                "surface-container-low": "#F8F9FA", // 淺灰底
                "outline-variant": "#E2E8F0",
                "secondary": "#475569",
                "on-surface": "#0F172A",
                "on-surface-variant": "#64748B",
                "error": "#E11D48",
                "success": "#10B981"
            },
            "borderRadius": {
                "none": "0",
                "sm": "0.375rem",
                "DEFAULT": "0.5rem",
                "md": "0.75rem",
                "lg": "1rem",   // 更現代的圓角
                "xl": "1.25rem",
                "2xl": "1.5rem",
                "full": "9999px"
            },
            "fontFamily": {
                // 採用 Outfit 作為標題字體，DM Sans 作為內文
                "headline": ["Outfit", "Public Sans", "PingFang TC", "Noto Sans TC", "sans-serif"],
                "body": ["DM Sans", "Inter", "PingFang TC", "Noto Sans TC", "sans-serif"],
                "label": ["Inter", "PingFang TC", "Noto Sans TC", "sans-serif"]
            },
            "boxShadow": {
                "premium": "0 10px 40px -10px rgba(0, 30, 64, 0.05)",
                "premium-hover": "0 20px 50px -12px rgba(0, 30, 64, 0.12)",
                "glow-error": "0 0 15px rgba(225, 29, 72, 0.3)"
            }
        },
    },
}
