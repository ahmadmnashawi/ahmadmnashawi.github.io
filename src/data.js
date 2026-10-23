const GH = 'https://github.com/ahmadmnashawi'

export const profile = {
  name: 'Ahmad Nashawi',
  role: 'Front-End Developer',
  stack: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  location: 'Riyadh, Saudi Arabia',
  email: 'ahmadnashawi2003@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/ahmad-nashawi-b8717b335/',
  avatar: 'https://avatars.githubusercontent.com/u/192372069?v=4',
  cv: 'Ahmad_Nashawi_CV.pdf',
  headline: ['I turn designs into', 'fast, reliable React apps.'],
  intro:
    'Front-End Developer at Technova and React & Vue.js instructor. I build responsive interfaces with React, TypeScript and Tailwind CSS, wired to real REST APIs with authentication, roles and solid loading and error states.',
  summary:
    "Front-End Developer with a Bachelor's in Information Technology and hands-on experience building responsive, user-friendly web applications with React.js, TypeScript, JavaScript, and Tailwind CSS. I integrate REST APIs, implement token-based authentication and role-based access, build reusable UI components, and turn UI/UX designs into clean, performant interfaces. I'm also a part-time React & Vue.js instructor who has taught 150+ students across 10 courses.",
}

export const heroStats = [
  { value: '150+', label: 'Students taught React & Vue.js' },
  { value: '15+', label: 'Reusable components across 2 apps' },
  { value: '40%', label: 'Faster page loads for clients' },
]

export const journey = [
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
]

export const experience = [
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
]

export const projects = [
  {
    name: 'Travel App',
    category: 'Booking platform',
    tagline: 'A full trip-booking platform for travelers and admins.',
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
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Router', 'Laravel API'],
    repo: `${GH}/Travel-App`,
  },
  {
    name: 'SWB Dashboard',
    category: 'SaaS dashboard',
    tagline: 'A SaaS management platform with a landing page and a protected dashboard.',
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
    tech: ['React 19', 'React Router v7', 'Tailwind CSS', 'Context API'],
    repo: `${GH}/saas-dashboard`,
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
    tech: ['JavaScript (ES6+)', 'Axios', 'Bootstrap 5', 'REST API'],
    repo: `${GH}/Social-Media-Site`,
  },
]

export const otherProjects = [
  { name: 'Amazon Clone', tech: 'React.js', desc: 'An e-commerce store inspired by Amazon, built end-to-end with React.', repo: `${GH}/Amazon-Clone` },
  { name: 'Mobile Products CRUD', tech: 'JavaScript · LocalStorage', desc: 'Add, edit, delete and search mobile products with persistent storage.', repo: `${GH}/crud-app` },
  { name: 'Quiz App', tech: 'JavaScript', desc: 'Interactive quiz application with instant scoring and smooth UX.', repo: `${GH}/Quiz-App` },
  { name: 'Student Task Manager', tech: 'JavaScript', desc: 'Helps students organize tasks and track their progress.', repo: `${GH}/Student-Task-Manager` },
  { name: 'Prayer Times App', tech: 'JavaScript · Public API', desc: 'Displays accurate prayer times by city using a public API.', repo: `${GH}/prayer-times-syria` },
  { name: 'HTML & CSS Templates', tech: 'HTML · CSS', desc: 'A pack of four landing page templates built with pure HTML & CSS.', repo: `${GH}/4-HTML-CSS-Templates` },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  {
    group: 'Frameworks & Libraries',
    items: ['React.js', 'Vue.js', 'React Router', 'TanStack Query', 'Context API', 'Tailwind CSS', 'Bootstrap', 'shadcn/ui', 'Framer Motion', 'Axios'],
  },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vite', 'Firebase', 'REST APIs'] },
  {
    group: 'Concepts',
    items: ['Responsive Design', 'Auth & Authorization', 'CRUD Operations', 'UI/UX Implementation', 'Performance Optimization'],
  },
  {
    group: 'Soft Skills',
    items: ['Teaching & Mentoring', 'Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Fast Learner'],
  },
]

export const education = {
  degree: "Bachelor's Degree in Information Technology",
  school: 'Cordoba Private University',
  period: '2020 – 2025',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
]
