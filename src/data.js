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
  summary:
    "Front-End Developer with a Bachelor's in Information Technology and hands-on experience building responsive, user-friendly web applications with React.js, TypeScript, JavaScript, and Tailwind CSS. I integrate REST APIs, implement token-based authentication and role-based access, build reusable UI components, and turn UI/UX designs into clean, performant interfaces. I'm also a part-time React & Vue.js instructor who has taught 150+ students across 10 courses.",
}

export const stats = [
  { value: '150+', label: 'Students taught' },
  { value: '15+', label: 'Reusable components shipped' },
  { value: '20+', label: 'Responsive client pages' },
  { value: '40%', label: 'Faster page loads' },
]

export const experience = [
  {
    title: 'Front-End Developer Intern',
    company: 'Technova',
    period: 'Jul 2025 – Present',
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
    tagline: 'Trip Booking Platform',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Router', 'Laravel API'],
    points: [
      'A 17+ screen booking platform with search, filters, sorting, seat booking, favorites, ratings, and comments.',
      'Laravel REST API with token-based auth and role-based protected routes for users and admins.',
      'Admin dashboard to manage trips (CRUD), users, bookings, and comments.',
    ],
    repo: `${GH}/Travel-App`,
  },
  {
    name: 'SWB Dashboard',
    tagline: 'SaaS Management Platform',
    tech: ['React 19', 'React Router v7', 'Tailwind CSS', 'Context API'],
    points: [
      'Responsive landing page and a protected dashboard with full CRUD for tasks and projects.',
      'Login/register flow, statistics overview, form validation, loading and error states, and modal dialogs.',
    ],
    repo: `${GH}/saas-dashboard`,
  },
  {
    name: 'Connexa',
    tagline: 'Social Media Web App',
    tech: ['JavaScript (ES6+)', 'Axios', 'Bootstrap 5', 'REST API'],
    points: [
      'Consumes a live REST API with Bearer-token auth, profile image upload, and image posts via FormData.',
      'Infinite-scroll feed with API pagination and a post details page with comments.',
    ],
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
