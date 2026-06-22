export const portfolioData = {
  profile: {
    name: "Lesly Mathew",
    title: "Web Developer & Data Analyst",
    subtitle: "Pursuing B.Tech | Creating clean web applications and data dashboards.",
    bio: "I am a B.Tech student passionate about web development and data analytics. I enjoy bridging the gap between clean frontend code and analytical data insights. I build user-friendly interfaces and turn complex datasets into clear, actionable dashboards.",
    email: "leslymathew1306@gmail.com",
    location: "India",
    socials: {
      github: "https://github.com/Leslythomasmathew",
      linkedin: "https://www.linkedin.com/in/lesly-mathew-149898327",
      twitter: "#",
    },
    resumeUrl: "#",
  },
  skills: [
    {
      category: "Programming & Web",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Python", level: 80 },
        { name: "C / C++", level: 75 }
      ]
    },
    {
      category: "Data & Databases",
      items: [
        { name: "SQL", level: 85 },
        { name: "Data Analytics", level: 80 },
        { name: "KPI Dashboards", level: 85 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Parking Management System",
      description: "A smart application designed to track vehicle entries/exits, monitor available slots in real time, and calculate fees dynamically.",
      tags: ["React.js", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Leslythomasmathew",
      liveUrl: "https://dbms-project-parking.vercel.app",
      image: "nova-dashboard", // Re-uses the clean visual graphics
      featured: true
    },
    {
      id: 2,
      title: "Sales KPI Dashboard",
      description: "An interactive sales metrics dashboard visualizing key performance indicators, regional growth charts, and revenue distributions using data models.",
      tags: ["SQL", "Data Analytics", "React.js"],
      githubUrl: "https://github.com/Leslythomasmathew",
      liveUrl: "http://yourchoice-boutique-13421.surge.sh",
      image: "apex-ecommerce",
      featured: true
    },
    {
      id: 3,
      title: "Analysing Customer Churn Patterns",
      description: "A detailed data analysis project investigating customer churn trends, identifying high-risk segments, and providing recommendations to improve retention.",
      tags: ["Python", "SQL", "Data Analytics"],
      githubUrl: "https://github.com/Leslythomasmathew",
      liveUrl: "https://churn-gents-formal-all-products.surge.sh",
      image: "clarity-notes",
      featured: true
    }
  ],
  experience: [
    {
      id: 1,
      role: "Academic Projects & Web Dev",
      company: "B.Tech Development Work",
      period: "Ongoing",
      description: [
        "Engineered a responsive Parking Management System to optimize real-time spot tracking and operations.",
        "Modelled customer databases in SQL to identify business KPIs and user behavior patterns.",
        "Developed interactive dashboards, integrating multiple charts and filters to visualize customer retention metrics."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech (Bachelor of Technology)",
      school: "SJCET Palai",
      period: "Ongoing"
    }
  ]
};
