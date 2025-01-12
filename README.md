# Projek UAS PemSik A11.4703

**Masahiro Benz Soeryo // A11.2022.14628 // A11.4703**

**Aplikasi Reactjs Tema Kebencanaan pada Tanah Longsor dengan penerapan konsep:**
- CSS framework Tailwind
- Props 
- State 
- Route 
- Axios, Menggunakan API:
  - https://api-disasters-reports.vercel.app
  - (https://github.com/ardiansetya/Disasters-Report-React-Express) untuk:
    - Fitur Login
    - Fitur Register
    - Fitur CRUD 
- Redux 

**Cara Menggunakan:**
- <pre>cd my-project</pre>
- <pre>npm install</pre>

**Instalasi untuk CSS Tailwind:**
- <pre>npm install -D tailwindcss postcss autoprefixer</pre>
- <pre>npx tailwindcss init -p</pre>
- Tambahkan pada <pre>index.css</pre>
  <pre>@tailwind base;
  @tailwind components;
  @tailwind utilities;
  </pre>
- Tambahkan pada <pre>tailwind.config.js</pre>
  <pre>/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }</pre>

**Instalasi untuk Node Modules lainnya:**
- <pre>npm install sweetalert2</pre>
- <pre>npm install react-router-dom</pre>
- <pre>npm install redux react-redux</pre>
- <pre>npm install @reduxjs/toolkit</pre>
- <pre>npm install axios</pre>

**Cara Menjalani:**
- <pre>npm run dev</pre>
