const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

const objective = "Motivated and versatile Computer Programming student with a background in engineering and hands-on experience in full-stack web development, database systems, and modern frameworks. Known for strong problem-solving, fast learning, and clear communication. Actively seeking a Fall 2025 co-op opportunity to contribute to innovative projects, grow as a developer, and collaborate within dynamic teams.";

const summaryOfSkills = [
  "Full-stack development using React, .NET, Node.js, and RESTful APIs",
  "Proficient in Java, Python, C#, JavaScript, SQL, and modern development tools",
  "Experienced with MongoDB, MS SQL Server, and Oracle for backend data handling",
  "Built and deployed responsive web apps with clean UI and efficient functionality",
  "Strong problem-solving and debugging abilities in academic and project settings",
  "Collaborative team player with clear communication and mentoring experience",
  "Comfortable working in Agile environments with Git-based version control",
  "Quick to learn new technologies and adapt to different project needs"
];

const experience = [
  {
    title: "Fuel Tracker Web App",
    type: "Academic Project",
    tech: "React, Express.js, MongoDB",
    period: "Jan 2025 – Present",
    details: [
      "Built a full-stack fuel tracking app with React (frontend) and Express.js (backend)",
      "Stored user data and metrics (e.g., fuel type, cost, km/L) using MongoDB",
      "Designed dynamic UI with editable tables, dropdowns, and responsive layout",
      "Enabled full CRUD functionality and real-time fuel economy calculations",
      "Integrated form validation and input sanitization to ensure reliable user entries",
      "Organized code using modular components and followed best practices for scalability"
    ]
  },
  {
    title: "Shelf Space Web App",
    type: "Academic Project",
    tech: "React, REST API",
    period: "2024",
    details: [
      "Built a product browsing app that fetches data from a public API",
      "Displayed items in a responsive layout with detailed product views",
      "Implemented basic routing, state handling, and a mock purchase feature",
      "Deployed live using Vercel for public access and testing"
    ]
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    tech: "HTML, CSS, JavaScript",
    period: "Dec 2023 – Jan 2025",
    details: [
      "Built a responsive personal website to showcase academic and personal projects",
      "Included sections for technical blogs, GitHub links, and contact form",
      "Demonstrates front-end skills, clean UI design, and project organization"
    ]
  },
  {
    title: "Career Cloud .NET Application",
    type: "Academic Team Project",
    tech: ".NET, C#, Angular, SQL Server",
    period: "2023",
    details: [
      "Built a web-based system to manage employee records and HR data",
      "Designed features for adding, editing, deleting, and viewing employee info",
      "Used Entity Framework and SQL Server for backend operations and data storage"
    ]
  },
  {
    title: "Customer Service Representative",
    type: "Work Experience",
    tech: "Les Galettes, Lebanon",
    period: "Sep 2018 – 2021",
    details: [
      "Handled customer orders, operated the cashier, and managed daily transactions",
      "Addressed customer inquiries and concerns with professionalism and care",
      "Maintained a clean and efficient front-of-house environment",
      "Contributed to a positive customer experience in a fast-paced food service setting"
    ]
  }
];

const education = [
  {
    school: "Humber Polytechnic, Etobicoke, ON",
    program: "Computer Programming & Analysis Advanced Diploma (Co-op Program)",
    period: "May 2024 – Present",
    note: "Dean’s Honor List – Semesters 1 & 2 (2024)"
  },
  {
    school: "Humber Polytechnic, Etobicoke, ON",
    program: "Full Stack .NET Cloud Developer Bridging Program",
    period: "July 2022 – Dec 2023",
    note: "Focused on .NET technologies, cloud platforms, and full-stack application development"
  },
  {
    school: "Al-Baath University, Syria",
    program: "Bachelor of Chemical Engineering",
    period: "2012 – 2016",
    note: "Studied core chemical engineering subjects and industrial process principles"
  }
];

const volunteer = [
  {
    role: "Peer Tutor",
    place: "Humber College, Etobicoke, ON",
    period: "May 2024 – Present",
    details: [
      "Helped students understand Java and Python concepts and debug assignments",
      "Strengthened communication and problem-solving through one-on-one mentoring"
    ]
  }
];

const interests = [
  "Software development", "Open-source contributions", "Learning new frameworks", "Attending tech meetups"
];

// === Routes - ALL WRAPPED ===

app.get('/getObjective', (req, res) => res.json({ objective }));
app.get('/getSummary', (req, res) => res.json({ summaryOfSkills }));
app.get('/getEducation', (req, res) => res.json({ education }));
app.get('/getExperience', (req, res) => res.json({ experience }));
app.get('/getVolunteer', (req, res) => res.json({ volunteer }));
app.get('/getInterests', (req, res) => res.json({ interests }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
