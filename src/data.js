const GH = 'https://github.com/ahmadmnashawi'

export const SITE_URL = 'https://ahmadmnashawi.github.io/'

export const links = {
  email: 'ahmadnashawi2003@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/ahmad-nashawi-b8717b335/',
  avatar: 'https://avatars.githubusercontent.com/u/192372069?v=4&s=640',
  cv: 'Ahmad_Nashawi_CV.pdf',
}

const repos = {
  travel: `${GH}/Travel-App`,
  swb: `${GH}/saas-dashboard`,
  connexa: `${GH}/Social-Media-Site`,
  amazon: `${GH}/Amazon-Clone`,
  crud: `${GH}/crud-app`,
  quiz: `${GH}/Quiz-App`,
  tasks: `${GH}/Student-Task-Manager`,
  prayer: `${GH}/prayer-times-syria`,
  templates: `${GH}/4-HTML-CSS-Templates`,
}

const techs = {
  travel: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Router', 'Laravel API'],
  swb: ['React 19', 'React Router v7', 'Tailwind CSS', 'Context API'],
  connexa: ['JavaScript (ES6+)', 'Axios', 'Bootstrap 5', 'REST API'],
}

const skillItems = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  frameworks: ['React.js', 'Vue.js', 'React Router', 'TanStack Query', 'Context API', 'Tailwind CSS', 'Bootstrap', 'shadcn/ui', 'Framer Motion', 'Axios'],
  tools: ['Git', 'GitHub', 'Vite', 'Firebase', 'REST APIs'],
}

const en = {
  name: 'Ahmad Nashawi',
  meta: {
    title: 'Ahmad Nashawi · Front-End Developer',
    description:
      'Ahmad Nashawi — Front-End Developer specialised in React.js, TypeScript, JavaScript and Tailwind CSS. Based in Riyadh, Saudi Arabia.',
  },
  ui: {
    skip: 'Skip to content',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', lab: 'UI Lab', skills: 'Skills', contact: 'Contact' },
    navLabel: 'Main navigation',
    talk: "Let's talk",
    theme: 'Toggle color theme',
    menu: 'Toggle menu',
    langSwitch: 'العربية',
    langSwitchLabel: 'عرض الموقع بالعربية',
    openToWork: 'Open to Front-End roles',
    viewWork: 'View my work',
    downloadCv: 'Download CV',
    floatStack: 'React · TypeScript',
    floatStudents: '150+ students taught',
    about: { kicker: '01 · About', title: 'A bit about me' },
    experience: { kicker: '02 · Experience', title: "Where I've worked" },
    projects: { kicker: '03 · Projects', title: "Things I've built", other: 'Other noteworthy projects' },
    lab: {
      kicker: '04 · UI Lab',
      title: 'Try my components',
      intro: 'Small, live versions of patterns I build every day — state, validation and async UI. Go ahead, click around.',
    },
    skills: { kicker: '05 · Skills', title: 'My toolbox' },
    contact: {
      kicker: '06 · Contact',
      title: 'Need a front-end developer who ships clean, fast UIs?',
      text: "I'm open to Front-End Developer roles and freelance projects. Send me a message — I usually reply within a day.",
      send: 'Send an email',
      copy: 'Copy',
      copied: 'Copied!',
    },
    publicRepo: 'Public repo',
    challenge: 'Challenge',
    solution: 'Solution',
    screenshot: 'Screenshot of',
    footer: 'Designed & built by Ahmad Nashawi with React',
  },
  profile: {
    role: 'Front-End Developer',
    location: 'Riyadh, Saudi Arabia',
    headline: ['I turn designs into', 'fast, reliable React apps.'],
    intro:
      'Front-End Developer at Technova and React & Vue.js instructor. I build responsive interfaces with React, TypeScript and Tailwind CSS, wired to real REST APIs with authentication, roles and solid loading and error states.',
    summary:
      "Front-End Developer with a Bachelor's in Information Technology and hands-on experience building responsive, user-friendly web applications with React.js, TypeScript, JavaScript, and Tailwind CSS. I integrate REST APIs, implement token-based authentication and role-based access, build reusable UI components, and turn UI/UX designs into clean, performant interfaces. I'm also a part-time React & Vue.js instructor who has taught 150+ students across 10 courses.",
  },
  heroStats: [
    { value: '150+', label: 'Students taught React & Vue.js' },
    { value: '15+', label: 'Reusable components across 2 apps' },
    { value: '40%', label: 'Faster page loads for clients' },
  ],
  journey: [
    {
      stage: 'Foundation',
      title: 'Responsive web pages',
      desc: 'HTML, CSS and JavaScript, turning UI/UX designs into pixel-accurate pages — 20+ of them for client projects.',
    },
    {
      stage: 'Growth',
      title: 'React applications',
      desc: 'React, TypeScript and REST APIs: reusable components, token auth, role-based routes and full CRUD apps.',
    },
    {
      stage: 'Current focus',
      title: 'Scalable front-ends & teaching',
      desc: 'Component systems shared across apps at Technova, and teaching 150+ students to build real projects.',
    },
  ],
  experience: [
    {
      title: 'Front-End Developer Intern',
      company: 'Technova',
      period: 'Jul 2025 – Present',
      metrics: [
        { value: '15+', label: 'reusable UI components' },
        { value: '2', label: 'React apps sharing them' },
        { value: '4', label: 'developers on the team' },
      ],
      points: [
        'Built 15+ reusable UI components shared across 2 React applications, reducing duplicated UI code and speeding up development.',
        'Integrated REST APIs into both React applications, handling data fetching, loading, and error states.',
        'Collaborated in a 4-member development team using Git and GitHub.',
      ],
    },
    {
      title: 'React & Vue.js Instructor (Part-time)',
      company: 'Time Door Academy',
      period: 'Jun 2025 – Present',
      metrics: [
        { value: '150+', label: 'students taught' },
        { value: '10', label: 'training courses' },
        { value: '10+', label: 'student projects mentored' },
      ],
      points: [
        'Taught 150+ students across 10 training courses in React.js and Vue.js, along with HTML, CSS, JavaScript, and Tailwind CSS.',
        'Mentored students to complete 10+ real-world projects, from page structure to CRUD features and protected routes.',
        'Built a complete SaaS dashboard as the course reference project, showing students the full scope of what they will build.',
      ],
    },
    {
      title: 'Front-End Developer Intern',
      company: 'ProTech Agency',
      period: 'Jan 2025 – Jun 2025',
      metrics: [
        { value: '20+', label: 'responsive client pages' },
        { value: '40%', label: 'faster page loads' },
        { value: '30+', label: 'front-end bugs fixed' },
      ],
      points: [
        'Delivered 20+ responsive pages for client projects, including a dental clinic website.',
        'Improved page load speed by 40% and fixed 30+ front-end bugs, enhancing performance and user experience.',
        'Converted UI/UX designs into functional, pixel-accurate web pages.',
      ],
    },
  ],
  projects: [
    {
      name: 'Travel App',
      category: 'Booking platform',
      tagline: 'A full trip-booking platform for travelers and admins.',
      image: 'projects/travel.webp',
      metrics: [
        { value: '17+', label: 'screens' },
        { value: '2', label: 'user roles' },
        { value: '4', label: 'admin modules' },
      ],
      challenge:
        'Serve two kinds of users from one app — travelers and admins — with secure access to each area and a fast trip search with filters, sorting and seat booking.',
      solution:
        'Token-based auth against a Laravel REST API, role-based protected routes, TanStack Query for server state and caching, and reusable shadcn/ui components across every screen.',
      features: ['Search, filters & sorting', 'Seat booking', 'Favorites, ratings & comments', 'Admin CRUD for trips, users & bookings'],
      tech: techs.travel,
      repo: repos.travel,
    },
    {
      name: 'SWB Dashboard',
      category: 'SaaS dashboard',
      tagline: 'A SaaS management platform with a landing page and a protected dashboard.',
      image: 'projects/swb.webp',
      metrics: [
        { value: '2', label: 'full CRUD modules' },
        { value: 'v7', label: 'React Router' },
        { value: '100%', label: 'responsive' },
      ],
      challenge:
        'Make a management dashboard feel like a real SaaS product: secure access, clear statistics, and instant feedback on every create, edit and delete.',
      solution:
        'Context API for auth and app state, protected routes with React Router v7, validated forms, modal dialogs for create/edit flows, and loading and error states throughout.',
      features: ['Login & register flow', 'Statistics overview', 'Tasks & projects CRUD', 'Form validation & modals'],
      tech: techs.swb,
      repo: repos.swb,
    },
    {
      name: 'Connexa',
      category: 'Social media app',
      tagline: 'A social network built on a live REST API.',
      metrics: [
        { value: '∞', label: 'scroll feed' },
        { value: 'Bearer', label: 'token auth' },
        { value: 'FormData', label: 'image uploads' },
      ],
      challenge:
        'Work against a live third-party API: authenticated requests, profile and post image uploads, and an endless feed that never loads everything at once.',
      solution:
        'Axios with Bearer-token headers, FormData for image uploads, and pagination-driven infinite scroll, plus a post details page with comments.',
      features: ['Sign up & log in', 'Image posts', 'Infinite-scroll feed', 'Post details & comments'],
      tech: techs.connexa,
      repo: repos.connexa,
    },
  ],
  otherProjects: [
    { name: 'Amazon Clone', tech: 'React.js · Firebase', desc: 'An e-commerce store inspired by Amazon, built end-to-end with React.', repo: repos.amazon },
    { name: 'Mobile Products CRUD', tech: 'JavaScript · LocalStorage', desc: 'Add, edit, delete and search mobile products with persistent storage.', repo: repos.crud },
    { name: 'Quiz App', tech: 'JavaScript', desc: 'Interactive quiz application with instant scoring and smooth UX.', repo: repos.quiz },
    { name: 'Student Task Manager', tech: 'JavaScript', desc: 'Helps students organize tasks and track their progress.', repo: repos.tasks },
    { name: 'Prayer Times App', tech: 'JavaScript · Public API', desc: 'Displays accurate prayer times by city using a public API.', repo: repos.prayer },
    { name: 'HTML & CSS Templates', tech: 'HTML · CSS', desc: 'A pack of four landing page templates built with pure HTML & CSS.', repo: repos.templates },
  ],
  skills: [
    { group: 'Languages', items: skillItems.languages },
    { group: 'Frameworks & Libraries', items: skillItems.frameworks },
    { group: 'Tools & Platforms', items: skillItems.tools },
    { group: 'Concepts', items: ['Responsive Design', 'Auth & Authorization', 'CRUD Operations', 'UI/UX Implementation', 'Performance Optimization'] },
    { group: 'Soft Skills', items: ['Teaching & Mentoring', 'Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Fast Learner'] },
  ],
  education: {
    degree: "Bachelor's Degree in Information Technology",
    school: 'Cordoba Private University',
    period: '2020 – 2025',
  },
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency' },
  ],
  labText: {
    accent: 'Pick an accent — the whole site follows',
    seats: {
      title: 'Seat booking',
      hint: 'From Travel App · pick your seats',
      selected: (n) => (n === 1 ? '1 seat' : `${n} seats`),
      none: 'No seats selected',
      currency: 'SAR',
      book: 'Book now',
      booked: 'Booked! Seats confirmed ✓',
    },
    form: {
      title: 'Live form validation',
      hint: 'Validation as you type',
      email: 'Email',
      password: 'Password',
      emailError: 'Enter a valid email address',
      strength: ['Too weak', 'Weak', 'Okay', 'Strong', 'Very strong'],
      passwordHint: '8+ chars, a number and an uppercase letter',
      submit: 'Create account',
      success: 'Account created — welcome aboard!',
    },
    fetch: {
      title: 'Loading & error states',
      hint: 'How I handle real APIs',
      load: 'Fetch trips',
      fail: 'Simulate a failed request',
      error: 'Request failed. Check your connection.',
      retry: 'Try again',
      trips: [
        { city: 'AlUla', price: 890 },
        { city: 'Jeddah', price: 420 },
        { city: 'Abha', price: 560 },
      ],
      perPerson: '/ person',
    },
  },
}

const ar = {
  name: 'أحمد نشاوي',
  meta: {
    title: 'أحمد نشاوي · مطوّر واجهات أمامية',
    description:
      'أحمد نشاوي — مطوّر واجهات أمامية متخصص في React.js وTypeScript وJavaScript وTailwind CSS، مقيم في الرياض، المملكة العربية السعودية.',
  },
  ui: {
    skip: 'تخطَّ إلى المحتوى',
    nav: { about: 'نبذة', experience: 'الخبرات', projects: 'المشاريع', lab: 'مختبر الواجهات', skills: 'المهارات', contact: 'تواصل' },
    navLabel: 'التنقل الرئيسي',
    talk: 'لنتحدّث',
    theme: 'تبديل الوضع الليلي',
    menu: 'فتح القائمة',
    langSwitch: 'English',
    langSwitchLabel: 'View the site in English',
    openToWork: 'متاح لفرص تطوير الواجهات',
    viewWork: 'شاهد أعمالي',
    downloadCv: 'تحميل السيرة الذاتية',
    floatStack: 'React · TypeScript',
    floatStudents: 'درّستُ أكثر من 150 طالباً',
    about: { kicker: '01 · نبذة', title: 'نبذة عنّي' },
    experience: { kicker: '02 · الخبرات', title: 'أين عملت' },
    projects: { kicker: '03 · المشاريع', title: 'ما الذي بنيته', other: 'مشاريع أخرى' },
    lab: {
      kicker: '04 · مختبر الواجهات',
      title: 'جرّب مكوّناتي بنفسك',
      intro: 'نسخ حيّة مصغّرة من أنماط أبنيها كل يوم: إدارة الحالة، والتحقق من النماذج، والواجهات غير المتزامنة. جرّبها!',
    },
    skills: { kicker: '05 · المهارات', title: 'أدواتي' },
    contact: {
      kicker: '06 · تواصل',
      title: 'تبحث عن مطوّر واجهات يسلّم واجهات نظيفة وسريعة؟',
      text: 'أنا متاح لوظائف تطوير الواجهات الأمامية والمشاريع الحرّة. راسلني، وعادةً أردّ خلال يوم واحد.',
      send: 'أرسل بريداً',
      copy: 'نسخ',
      copied: 'تم النسخ!',
    },
    publicRepo: 'الكود على GitHub',
    challenge: 'التحدّي',
    solution: 'الحل',
    screenshot: 'لقطة شاشة من',
    footer: 'صمّمه وبناه أحمد نشاوي باستخدام React',
  },
  profile: {
    role: 'مطوّر واجهات أمامية',
    location: 'الرياض، السعودية',
    headline: ['أحوّل التصاميم إلى', 'تطبيقات React سريعة وموثوقة.'],
    intro:
      'مطوّر واجهات أمامية في Technova ومدرّب React وVue.js. أبني واجهات متجاوبة باستخدام React وTypeScript وTailwind CSS، مربوطة بواجهات REST حقيقية مع المصادقة والصلاحيات وحالات تحميل وأخطاء متقنة.',
    summary:
      'مطوّر واجهات أمامية حاصل على بكالوريوس في تقنية المعلومات، ولديّ خبرة عملية في بناء تطبيقات ويب متجاوبة وسهلة الاستخدام باستخدام React.js وTypeScript وJavaScript وTailwind CSS. أربط التطبيقات بواجهات REST، وأطبّق المصادقة بالتوكن والصلاحيات حسب الدور، وأبني مكوّنات قابلة لإعادة الاستخدام، وأحوّل تصاميم UI/UX إلى واجهات نظيفة وعالية الأداء. وأعمل أيضاً مدرّباً لـReact وVue.js بدوام جزئي، ودرّست أكثر من 150 طالباً في 10 دورات.',
  },
  heroStats: [
    { value: '+150', label: 'طالباً تعلّموا React وVue.js' },
    { value: '+15', label: 'مكوّناً قابلاً لإعادة الاستخدام في تطبيقين' },
    { value: '40%', label: 'تسريع في تحميل صفحات العملاء' },
  ],
  journey: [
    {
      stage: 'الأساس',
      title: 'صفحات ويب متجاوبة',
      desc: 'HTML وCSS وJavaScript، وتحويل تصاميم UI/UX إلى صفحات دقيقة، منها أكثر من 20 صفحة لمشاريع عملاء.',
    },
    {
      stage: 'التطوّر',
      title: 'تطبيقات React',
      desc: 'React وTypeScript وواجهات REST: مكوّنات قابلة لإعادة الاستخدام، ومصادقة بالتوكن، ومسارات محمية حسب الدور، وتطبيقات CRUD كاملة.',
    },
    {
      stage: 'التركيز الحالي',
      title: 'واجهات قابلة للتوسّع والتدريس',
      desc: 'أنظمة مكوّنات مشتركة بين التطبيقات في Technova، وتدريس أكثر من 150 طالباً على بناء مشاريع حقيقية.',
    },
  ],
  experience: [
    {
      title: 'مطوّر واجهات أمامية (متدرّب)',
      company: 'Technova',
      period: 'يوليو 2025 – الآن',
      metrics: [
        { value: '+15', label: 'مكوّن واجهة قابل لإعادة الاستخدام' },
        { value: '2', label: 'تطبيقا React يستخدمانها' },
        { value: '4', label: 'مطوّرين في الفريق' },
      ],
      points: [
        'بنيت أكثر من 15 مكوّن واجهة قابلاً لإعادة الاستخدام مشتركاً بين تطبيقَي React، ما قلّل تكرار الكود وسرّع التطوير.',
        'ربطت التطبيقين بواجهات REST مع معالجة جلب البيانات وحالات التحميل والأخطاء.',
        'عملت ضمن فريق تطوير من 4 أعضاء باستخدام Git وGitHub.',
      ],
    },
    {
      title: 'مدرّب React وVue.js (دوام جزئي)',
      company: 'Time Door Academy',
      period: 'يونيو 2025 – الآن',
      metrics: [
        { value: '+150', label: 'طالباً' },
        { value: '10', label: 'دورات تدريبية' },
        { value: '+10', label: 'مشاريع طلاب أشرفت عليها' },
      ],
      points: [
        'درّست أكثر من 150 طالباً في 10 دورات في React.js وVue.js، إضافةً إلى HTML وCSS وJavaScript وTailwind CSS.',
        'أشرفت على الطلاب لإنجاز أكثر من 10 مشاريع حقيقية، من بنية الصفحة إلى عمليات CRUD والمسارات المحمية.',
        'بنيت لوحة تحكم SaaS كاملة كمشروع مرجعي للدورة، تُري الطلاب النطاق الكامل لما سيبنونه.',
      ],
    },
    {
      title: 'مطوّر واجهات أمامية (متدرّب)',
      company: 'ProTech Agency',
      period: 'يناير 2025 – يونيو 2025',
      metrics: [
        { value: '+20', label: 'صفحة متجاوبة للعملاء' },
        { value: '40%', label: 'تسريع في تحميل الصفحات' },
        { value: '+30', label: 'خطأ واجهات تم إصلاحه' },
      ],
      points: [
        'سلّمت أكثر من 20 صفحة متجاوبة لمشاريع العملاء، منها موقع لعيادة أسنان.',
        'حسّنت سرعة تحميل الصفحات بنسبة 40% وأصلحت أكثر من 30 خطأ في الواجهات، ما حسّن الأداء وتجربة المستخدم.',
        'حوّلت تصاميم UI/UX إلى صفحات ويب عملية ودقيقة.',
      ],
    },
  ],
  projects: [
    {
      name: 'Travel App',
      category: 'منصة حجز',
      tagline: 'منصة متكاملة لحجز الرحلات للمسافرين والمشرفين.',
      image: 'projects/travel.webp',
      metrics: [
        { value: '+17', label: 'شاشة' },
        { value: '2', label: 'نوعا مستخدمين' },
        { value: '4', label: 'أقسام إدارة' },
      ],
      challenge:
        'خدمة نوعين من المستخدمين في تطبيق واحد، المسافرين والمشرفين، مع وصول آمن لكل قسم، وبحث سريع عن الرحلات مع فلاتر وترتيب وحجز مقاعد.',
      solution:
        'مصادقة بالتوكن مع واجهة Laravel REST، ومسارات محمية حسب الدور، وTanStack Query لإدارة حالة الخادم والتخزين المؤقت، ومكوّنات shadcn/ui قابلة لإعادة الاستخدام في كل الشاشات.',
      features: ['بحث وفلاتر وترتيب', 'حجز المقاعد', 'المفضلة والتقييمات والتعليقات', 'إدارة الرحلات والمستخدمين والحجوزات'],
      tech: techs.travel,
      repo: repos.travel,
    },
    {
      name: 'SWB Dashboard',
      category: 'لوحة تحكم SaaS',
      tagline: 'منصة إدارة SaaS مع صفحة هبوط ولوحة تحكم محمية.',
      image: 'projects/swb.webp',
      metrics: [
        { value: '2', label: 'وحدتا CRUD كاملتان' },
        { value: 'v7', label: 'React Router' },
        { value: '100%', label: 'متجاوب' },
      ],
      challenge:
        'جعل لوحة الإدارة تبدو كمنتج SaaS حقيقي: وصول آمن، وإحصائيات واضحة، واستجابة فورية عند كل إضافة وتعديل وحذف.',
      solution:
        'Context API للمصادقة وحالة التطبيق، ومسارات محمية بـReact Router v7، ونماذج مع تحقق، ونوافذ منبثقة للإضافة والتعديل، وحالات تحميل وأخطاء في كل مكان.',
      features: ['تسجيل الدخول وإنشاء حساب', 'لوحة إحصائيات', 'إدارة المهام والمشاريع', 'تحقق من النماذج ونوافذ منبثقة'],
      tech: techs.swb,
      repo: repos.swb,
    },
    {
      name: 'Connexa',
      category: 'تطبيق تواصل اجتماعي',
      tagline: 'شبكة تواصل اجتماعي مبنية على واجهة REST حيّة.',
      metrics: [
        { value: '∞', label: 'تمرير لا نهائي' },
        { value: 'Bearer', label: 'مصادقة بالتوكن' },
        { value: 'FormData', label: 'رفع الصور' },
      ],
      challenge:
        'العمل مع واجهة خارجية حيّة: طلبات مصادَق عليها، ورفع صور الملف الشخصي والمنشورات، وصفحة منشورات لا نهائية دون تحميل كل شيء دفعة واحدة.',
      solution:
        'Axios مع ترويسات Bearer، وFormData لرفع الصور، وتمرير لا نهائي يعتمد على ترقيم الصفحات، إضافةً إلى صفحة تفاصيل المنشور مع التعليقات.',
      features: ['إنشاء حساب وتسجيل دخول', 'منشورات بالصور', 'تمرير لا نهائي', 'تفاصيل المنشور والتعليقات'],
      tech: techs.connexa,
      repo: repos.connexa,
    },
  ],
  otherProjects: [
    { name: 'Amazon Clone', tech: 'React.js · Firebase', desc: 'متجر إلكتروني مستوحى من أمازون، مبني بالكامل باستخدام React.', repo: repos.amazon },
    { name: 'Mobile Products CRUD', tech: 'JavaScript · LocalStorage', desc: 'إضافة منتجات الموبايلات وتعديلها وحذفها والبحث فيها مع حفظ دائم.', repo: repos.crud },
    { name: 'Quiz App', tech: 'JavaScript', desc: 'تطبيق اختبارات تفاعلي مع احتساب فوري للنتيجة.', repo: repos.quiz },
    { name: 'Student Task Manager', tech: 'JavaScript', desc: 'يساعد الطلاب على تنظيم مهامهم ومتابعة تقدّمهم.', repo: repos.tasks },
    { name: 'Prayer Times App', tech: 'JavaScript · Public API', desc: 'يعرض مواقيت الصلاة بدقة حسب المدينة باستخدام واجهة عامة.', repo: repos.prayer },
    { name: 'HTML & CSS Templates', tech: 'HTML · CSS', desc: 'مجموعة من أربعة قوالب صفحات هبوط مبنية بـHTML وCSS فقط.', repo: repos.templates },
  ],
  skills: [
    { group: 'لغات البرمجة', items: skillItems.languages },
    { group: 'أطر العمل والمكتبات', items: skillItems.frameworks },
    { group: 'الأدوات والمنصات', items: skillItems.tools },
    { group: 'المفاهيم', items: ['التصميم المتجاوب', 'المصادقة والصلاحيات', 'عمليات CRUD', 'تنفيذ تصاميم UI/UX', 'تحسين الأداء'] },
    { group: 'المهارات الشخصية', items: ['التدريس والإرشاد', 'التواصل', 'العمل الجماعي', 'حل المشكلات', 'إدارة الوقت', 'سرعة التعلّم'] },
  ],
  education: {
    degree: 'بكالوريوس في تقنية المعلومات',
    school: 'جامعة قرطبة الخاصة',
    period: '2020 – 2025',
  },
  languages: [
    { name: 'العربية', level: 'اللغة الأم' },
    { name: 'الإنجليزية', level: 'كفاءة مهنية في العمل' },
  ],
  labText: {
    accent: 'اختر لوناً، وسيتبعه الموقع كله',
    seats: {
      title: 'حجز المقاعد',
      hint: 'من Travel App · اختر مقاعدك',
      selected: (n) => (n === 1 ? 'مقعد واحد' : n === 2 ? 'مقعدان' : `${n} مقاعد`),
      none: 'لم تختر أي مقعد',
      currency: 'ر.س',
      book: 'احجز الآن',
      booked: 'تم الحجز! المقاعد مؤكدة ✓',
    },
    form: {
      title: 'تحقق مباشر من النموذج',
      hint: 'التحقق أثناء الكتابة',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      emailError: 'أدخل بريداً إلكترونياً صحيحاً',
      strength: ['ضعيفة جداً', 'ضعيفة', 'مقبولة', 'قوية', 'قوية جداً'],
      passwordHint: '8 أحرف على الأقل، ورقم، وحرف كبير',
      submit: 'إنشاء حساب',
      success: 'تم إنشاء الحساب، أهلاً بك!',
    },
    fetch: {
      title: 'حالات التحميل والأخطاء',
      hint: 'كيف أتعامل مع الواجهات الحقيقية',
      load: 'جلب الرحلات',
      fail: 'محاكاة فشل الطلب',
      error: 'فشل الطلب. تحقّق من اتصالك.',
      retry: 'حاول مجدداً',
      trips: [
        { city: 'العُلا', price: 890 },
        { city: 'جدة', price: 420 },
        { city: 'أبها', price: 560 },
      ],
      perPerson: '/ للشخص',
    },
  },
}

export const content = { en, ar }
