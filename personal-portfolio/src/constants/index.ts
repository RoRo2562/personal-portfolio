export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  
  const experiences: ExperienceType[] = [    
    {
      title: "Full Stack Software Engineer",
      company_name: "GRC Ready",
      icon: 'assets/grc_ready.png',
      iconBg: "#383E56",
      date: "Oct 2024 - Present",
      points: [
        "Designed and optimised a modular, full-stack web application (React, MongoDB), improving query efficiency by approx. 30% and reducing website load times by an estimated 20% through indexing and optimising API calls.",
        "Led team of 3 developers, streamlining workflows (GitHub CI/CD pipelines); boosted deployment efficiency by ~25%.",
        "Improved system reliability/scalability by optimising back-end (efficient indexing, reducing API response times."

      ],
    },
    {
      title: "Software Developer Intern (Academic Integrity)",
      company_name: "Australasia Polytechnic",
      icon: 'assets/aa_poly.png',
      iconBg: "#383E56",
      date: "September 2024 - December 2024",
      points: [
        "Developed a Python/Django web app that automated warning letter generation, reducing processing time by ~100% and eliminating manual errors, improving workflow efficiency for 50+ cases per semester.",
        "Designed and optimised an SQL database for student credit transfers, reducing manual approvals by ~30% and enhancing data integrity through indexing and normalisation."

      ],
    },

  ];

  export type ExperienceType = {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
  



  
  export { experiences };