// ================================
// PROJECTS DATA (ALL 15 – FINAL)
// ================================
const PROJECTS_DATA = {
    projects: [
        {
            id: 1,
            title: 'Live-Link Video Conferencing',
            description: 'Built a real-time video conferencing platform using React and Node.js.Implemented WebRTC for low-latency audio/video calls with screen sharing support.Integrated Socket.IO for real-time chat and signaling between users.',
            category: ['react', 'node', 'fullstack', 'aws'],
            image: './image/Live-link-video-conferencing-software.png',
            demo: 'https://morning-escarpment-67980.onrender.com/',
            github: 'https://github.com/sandeepgithu/Live-link-video-conferencing-software',
            technologies: ['React', 'Node.js', 'WebRTC', 'Socket.IO', 'AWS', 'Express'],
            featured: true,
            status: 'Completed',
            year: '2024'
        },
        {
            id: 2,
            title: 'YouTube Clone (Advanced)',
            description: 'YouTube Clone is a modern, responsive video-streaming web application inspired by YouTube.It allows users to browse, search, and watch videos with a clean UI and smooth performance.The application integrates multiple APIs to provide real-time data, smart recommendations, and voice-based interactions.',
            category: ['frontend'],
            image: './image/youtube-clone.png',
            demo: 'https://sandeepgithu.github.io/YouTube-Clone/#',
            github: 'https://github.com/sandeepgithu/YouTube-Clone',
            technologies: ['HTML', 'Tailwind-CSS', 'JavaScript'],
            featured: true,
            status: 'Completed',
            year: '2024'
        },
        {
            id: 3,
            title: ' Trading UI',
            description: 'Real-time Market Data — Live forex, crypto, and indices pricesInteractive Charts — Price movements with technical indicatorsWatchlist — Personalized trading pairs monitoringCategory Tabs — Easy navigation between Forex, Crypto, Indices, and Derivatives',
            category: ['react'],
            image: './image/Trading UI.png',
            demo: 'https://sandeepgithu.github.io/Trading.uI/',
            github: 'https://github.com/sandeepgithu/Trading-UI/blob/main/README.md',
            technologies: ['React','Tailwind-CSS'],
            featured: true,
            status: 'Completed',
            year: '2025'
        },
        {
            id: 4,
            title: 'Snake game',
            description: 'An enhanced Snake Game built using Python and Pygame with smooth animations, particles, and sound effects.Includes difficulty levels, high-score tracking, and keyboard/mouse controls.',
            category: ['Python'],
            image: './image/Snake_game.png',
            github: 'https://github.com/sandeepgithu/Snake_game',
            technologies: ['Python'],
            featured: false,
            status: 'Completed',
            year: '2024'
        },
        {
            id: 5,
            title: 'Fresh Food',
            description: 'A modern and responsive Fresh Food & Organic Grocery website built using HTML, CSS, and JavaScript.Features product categories, cart system, search, and a clean user-friendly UI.',
            category: ['react'],
            image: './image/FreshFood.png',
            demo: 'https://sandeepgithu.github.io/Fresh-Food/',
            github: 'https://github.com/sandeepgithu/Fresh-Food/blob/main/README.md',
            technologies: ['HTML','Tailwind-CSS','JavaScript'],
            featured: false,
            status: 'In Progress',
            year: '2024'
        },
        {
            id: 6,
            title: 'HILL-RACER--GAME',
            description: ' Vehicle Upgrade System - Improve engine, fuel tank, and tire grip and Shop System - Purchase vehicles with earned coins (1000 coins each)Responsive HUD - Real-time stats display',
            category: ['frontend'],
            image: './image/HILL RACER.png',
            demo: 'https://sandeepgithu.github.io/HILL-RACER--GAME/',
            github: 'https://github.com/sandeepgithu/HILL-RACER--GAME/blob/main/README.md',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            featured: false,
            status: 'Completed',
            year: '2024'
        },
        {
            id: 7,
            title: 'Emotion Detection',
            description: 'real-time facial emotion detection.Supports live webcam input with deep learning-based emotion classification.',
            category: ['Python'],
            image: './image/Emotion-recognition.webp',
            demo: '#',
            github: 'https://github.com/sandeepgithu/Emotion-detection',
            technologies: ['Python', 'OpenCV', 'ensorFlow / Keras','NumPy','Matplotlib / Seaborn','Haar Cascade / DNN','Webcam / Video Input'],
            featured: false,
            status: 'Completed',
            year: '2024'
        },
        {
            id: 8,
            title: 'Quora-Ai-Assistant',
            description: 'Quorra – AI Voice Assistant is a Python-based smart assistant that uses speech recognition and AI to understand voice commands and respond naturally.It automates tasks like web browsing, system control, information retrieval, and media playback through voice interaction.',
            category: ['Python'],
            image: './image/Quorra – AI Voice Assistant.jpg',
            demo: '#',
            github: 'https://github.com/sandeepgithu/Quora-Ai-Assistant',
            technologies: ['Python', 'AI / NLP', 'PyAudio','Google Speech API'],
            featured: false,
            status: 'Completed',
            year: '2023'
        },
        {
            id: 9,
            title: 'Weather Forecast App',
            description: 'Location-based weather forecasting app',
            category: ['react'],
            image: 'cloud-sun',
            demo: '#',
            github: '#',
            technologies: ['React', 'Weather API'],
            featured: false,
            status: 'NOT Completed',
            year: '2023'
        },
        {
            id: 10,
            title: 'Butterfly-Species-Classification',
            description: 'Butterfly Species Classification is a deep learning–based Python project that identifies butterfly species from images using CNN models.It applies image preprocessing and model training to achieve accurate species recognition from visual data.',
            category: ['Python'],
            image: './image/Jupyter Notebook.png',
            demo: '#',
            github: 'https://github.com/sandeepgithu/Butterfly-Species-Classification',
            technologies: ['Python', 'TensorFlow & Keras', 'OpenCV','NumPy & Pandas','Matplotlib / Seaborn', 'Scikit-learn','Jupyter Notebook'],
            featured: false,
            status: 'Completed',
            year: '2023'
        },
        {
            id: 11,
            title: 'Portfolio Builder',
            description: 'Drag & drop portfolio website creator',
            category: ['react', 'fullstack'],
            image: 'briefcase',
            demo: '#',
            github: '#',
            technologies: ['React', 'MongoDB'],
            featured: false,
            status: 'In Progress',
            year: '2024'
        },
        {
            id: 12,
            title: 'Chat Application',
            description: 'Real-time chat app with rooms',
            category: ['react', 'node', 'fullstack'],
            image: 'comments',
            demo: '#',
            github: '#',
            technologies: ['React', 'Socket.IO'],
            featured: false,
            status: 'Completed',
            year: '2023'
        },
        {
            id: 13,
            title: 'Job Board',
            description: 'Job listing platform with filters',
            category: ['react', 'node'],
            image: 'briefcase',
            demo: '#',
            github: '#',
            technologies: ['React', 'Node.js'],
            featured: false,
            status: 'NOT Completed',
            year: '2023'
        },
        {
            id: 14,
            title: 'Learning Management System',
            description: 'Online course platform with video lessons',
            category: ['react', 'node', 'fullstack'],
            image: 'graduation-cap',
            demo: '#',
            github: '#',
            technologies: ['React', 'Node.js', 'MongoDB'],
            featured: false,
            status: 'NOT Completed',
            year: '2024'
        },
        {
            id: 15,
            title: 'Health Monitoring System',
            description: 'IoT-based health monitoring dashboard',
            category: ['react', 'node', 'aws'],
            image: 'heartbeat',
            demo: '#',
            github: '#',
            technologies: ['React', 'AWS IoT', 'WebSocket'],
            featured: false,
            status: 'In Progress',
            year: '2024'
        }
    ],

    // ================================
    // FILTER
    // ================================
    getFilteredProjects(category) {
        if (category === 'all') return this.projects;
        return this.projects.filter(p => p.category.includes(category));
    },

    // ================================
    // CARD CREATOR
    // ================================
    createProjectCard(project) {
        const statusColors = {
            'Completed': 'bg-green-500/20 text-green-400',
            'In Progress': 'bg-yellow-500/20 text-yellow-400'
        };

        const isImage = /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(project.image);

        return `
        <div class="project-card group gradient-border p-1 rounded-2xl">
            <div class="glass-effect p-6 rounded-xl h-full">

                <div class="relative mb-6 h-48 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    ${
                        isImage
                        ? `<img src="${project.image}" class="w-full h-full object-cover group-hover:scale-110 transition" />`
                        : `<i class="fas fa-${project.image} text-6xl opacity-40"></i>`
                    }

                    <div class="absolute top-3 left-3 flex gap-2">
                        <span class="px-2 py-1 text-xs rounded-full ${statusColors[project.status]}">
                            ${project.status}
                        </span>
                        <span class="px-2 py-1 text-xs rounded-full bg-gray-800/60">
                            ${project.year}
                        </span>
                    </div>

                    ${project.featured ? `
                        <div class="absolute top-3 right-3 text-xs px-3 py-1 bg-primary/20 text-primary rounded-full animate-pulse">
                            ⭐ Featured
                        </div>` : ''}
                </div>

                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4">${project.description}</p>

                <div class="flex flex-wrap gap-2 mb-5">
                    ${project.technologies.map(t => `
                        <span class="px-3 py-1 text-xs rounded-full bg-gray-900/60">${t}</span>
                    `).join('')}
                </div>

                <div class="flex justify-between items-center border-t border-gray-800 pt-4">
                    <div class="flex gap-3">
                        <a href="${project.demo}" target="_blank" class="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                            🚀 Demo
                        </a>
                        <a href="${project.github}" target="_blank" class="px-4 py-2 text-sm rounded-full border border-gray-700">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <span class="text-xs uppercase text-primary">${project.category[0]}</span>
                </div>
            </div>
        </div>`;
    }
};

// ================================
// EXPORT
// ================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROJECTS_DATA;
}
