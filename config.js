// Configuration and Constants
const CONFIG = {
    APP_NAME: "Sandeep Portfolio",
    VERSION: "1.0.0",
    
    // Typing animation texts
    TYPING_TEXTS: [
        'Full-Stack Developer',
        'React.js Expert',
        'Node.js Specialist',
        'Cloud Engineer',
        'Problem Solver',
        'Tech Innovator'
    ],
    
    // Social Media Links (Update with your actual links)
    SOCIAL_LINKS: {
        linkedin: "https://www.linkedin.com/in/sandeep-kumar-161948272/",
        github: "https://github.com/sandeepgithu",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://www.instagram.com/singsandeep971/"
    },
    
    // Contact Information
    CONTACT_INFO: {
        phone: "+91-7678677047",
        email: "singsandeep971@gmail.com",
        location: "Delhi, India"
    },
    
    // Animation Settings
    ANIMATION: {
        loadingDuration: 2500, // ms
        typingSpeed: 100, // ms per character
        confettiDuration: 3000 // ms
    },
    
    // Skill Levels
    SKILL_LEVELS: {
        frontend: [
            { name: 'React.js', level: 95 },
            { name: 'JavaScript (ES6+)', level: 92 },
            { name: 'HTML5/CSS3', level: 98 },
            { name: 'Tailwind CSS', level: 94 },
            { name: 'TypeScript', level: 85 },
            { name: 'Next.js', level: 88 }
        ],
        backend: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 88 },
            { name: 'Python', level: 85 },
            { name: 'REST APIs', level: 92 },
            { name: 'GraphQL', level: 80 },
            { name: 'FastAPI', level: 75 }
        ],
        tools: [
            { name: 'Git/GitHub', level: 94 },
            { name: 'MongoDB', level: 87 },
            { name: 'AWS', level: 82 },
            { name: 'VS Code', level: 98 },
            { name: 'Docker', level: 78 },
            { name: 'PostgreSQL', level: 85 }
        ]
    },
    
    // Technology Stack
    TECHNOLOGIES: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 
        'JavaScript', 'TypeScript', 'Tailwind CSS', 'WebRTC', 
        'Socket.IO', 'Git', 'Docker', 'REST APIs', 'GraphQL', 
        'Next.js', 'Python', 'PostgreSQL', 'Redis', 'Firebase',
        'Vite', 'Webpack', 'Jest', 'Cypress', 'Nginx', 'Linux'
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}