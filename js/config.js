// =====================================================
// Instance Configuration File
// =====================================================
// This file contains all specific configuration for this instance of the application.
// When copying the application to a new instance (e.g. for another mosque or center),
// you only need to modify THIS file. Do not change app.js or index.html.

const APP_CONFIG = {
    // 1. App Identity
    appName: "البراء بن مالك",
    appDescription: "منصة التحفيظ والمتابعة القرآنية",
    
    // 2. Theme Configuration (الثيمات)
    // يمكنك تغيير ألوان التطبيق من هنا. الألوان الافتراضية هي درجات الأخضر (Emerald).
    // لتغيير لون التطبيق، استبدل القيم أدناه بدرجات اللون المطلوب (مثلاً: أزرق، أحمر، الخ)
    themeColors: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981', // اللون الأساسي
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },

    // 3. Supabase Database Configuration (أكواد قاعدة البيانات)
    supabaseUrl: 'https://mngfqzkhlfoxmlsjbwyt.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uZ2ZxemtobGZveG1sc2pid3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0NTk5MzcsImV4cCI6MjA5ODAzNTkzN30.0BQkL5uKQpUb-DGEIiOlCEE42ugCAy4s4rji2UeZDCY',

    // 3. Levels/Groups Configuration
    levels: {
        'uthman':      { name: 'حلقة عثمان بن عفان',      emoji: '<i data-lucide="shield" class="w-6 h-6 inline-block text-emerald-500"></i>' },
        'umar':        { name: 'حلقة عمر بن الخطاب',       emoji: '<i data-lucide="sword" class="w-6 h-6 inline-block text-blue-500"></i>' },
        'khalid':      { name: 'حلقة خالد بن الوليد',       emoji: '<i data-lucide="zap" class="w-6 h-6 inline-block text-orange-500"></i>' },
        'ahmad_hanbal':{ name: 'حلقة الإمام أحمد بن حنبل', emoji: '<i data-lucide="book-open" class="w-6 h-6 inline-block text-teal-500"></i>' },
        'shatbi':      { name: 'حلقة الإمام الشاطبي',       emoji: '<i data-lucide="scroll" class="w-6 h-6 inline-block text-purple-500"></i>' },
        'abu_amr':     { name: 'حلقة أبو عمرو البصري',     emoji: '<i data-lucide="graduation-cap" class="w-6 h-6 inline-block text-yellow-500"></i>', isAdult: true },
        'bukhari':     { name: 'حلقة الإمام البخاري',       emoji: '<i data-lucide="award" class="w-6 h-6 inline-block text-amber-500"></i>', isAdult: true }
    }
};
