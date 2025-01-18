const projects = [
    {
        id: 1,
        title: "Crypto Watcher",
        category: "data",
        image: "./assets/images/crypto.png",
        technologies: ["HTML", "CSS", "Python", "Flask", "BeautifulSoup"],
        description: [
            "Crypto Watcher is a web application designed to track real-time cryptocurrency prices and market trends. Users can view the latest data on various coins, including Bitcoin, Ethereum, and others, with dynamic updates and easy-to-read charts.",
        ],
        features: [
            "Real-time price updates for various cryptocurrencies",
            "Dynamic market cap and trading volume data",
            "Bitcoin dominance tracker",
            "Interactive and user-friendly interface"
        ],
        links: [
            { text: "GitHub", url: "https://github.com/ayushpratapsingh1/crypto-watcher", type: "github" },
            { text: "Live Site", url: "https://crypto-web-scraper.onrender.com/", type: "live" }
        ]
    },
    {
        id: 2,
        title: "Uber Ride Data Analysis",
        category: "data",
        image: "./assets/images/Uber.png",
        technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
        description: [
            "Uber Ride Analysis is a data-driven web application designed to analyze Uber ride data and extract insights about ride patterns, pricing, and other relevant factors. Users can visualize and interpret historical Uber ride data for better decision-making.",
        ],
        features: [
            "Data analysis of Uber ride data, including trip duration, cost, and ride distance",
            "Visualizations of ride patterns and trends over time",
            "Insights into pricing models and ride demand",
            "Interactive charts and graphs for exploring data"
        ],
        links: [
            { text: "GitHub", url: "https://github.com/ayushpratapsingh1/Uber-Ride-Pattern-Analysis", type: "github" },
            { text: "Google Collab", url: "https://colab.research.google.com/github/ayushpratapsingh1/Ride-Pattern-Analysis/blob/main/Ride_Pattern_Analysis.ipynb", type: "live" }
        ]
    },
    {
        id: 3,
        title: "Pixel Dev - Web Solutions",
        category: "web",
        image: "./assets/images/pixel-dev.png",
        technologies: ["TypeScript", "Next.js", "Framer Motion", "React"],
        description: [
            "Pixel Dev offers cutting-edge web solutions tailored to your business needs. Our expertise in scalable architecture, dynamic design, and performance optimization ensures a seamless user experience.",
            "We integrate the latest technologies like Next.js, TypeScript, and Framer Motion to build responsive, interactive websites that drive engagement and growth."
        ],
        features: [
            "High-performance Next.js architecture",
            "Interactive and responsive UI with Framer Motion",
            "Scalable and maintainable codebase"
        ],
        links: [
            { text: "GitHub", url: "https://github.com/ayushpratapsingh1/Pixel-Dev", type: "github" },
            { text: "Live Site", url: "https://pixelwebdev.vercel.app/", type: "live" }
        ]
    },
    {
        id: 4,
        title: "Python HTTP Server",
        category: "others",
        image: "./assets/images/http.png",
        technologies: ["Python"],
        description: [
            "A lightweight and fast Python HTTP server optimized for quick deployment and scalability.",
            "Designed with performance and flexibility in mind, it ensures efficient request handling and a streamlined development workflow."
        ],
        features: [
            "Scalable Architecture for Growing Traffic",
            "Minimal Configuration for Quick Deployments",
            "Made with the help of codecrafters"
        ],
        links: [
            { text: "View Code", url: "https://github.com/ayushpratapsingh1/HTTP-Server", type: "live" }
        ]
    },
    {
        id: 5,
        title: "Custom Shell Interface",
        category: "others", // Changed from "web" to "others"
        image: "./assets/images/shell.png",
        technologies: ["C++"],
        description: [
            "A lightweight and fast Python HTTP server optimized for quick deployment and scalability.",
            "It provides a robust, scalable architecture with built-in WSGI compatibility, efficient request handling, and minimal configuration requirements."
        ],
        features: [
            "Scalable Architecture for Growing Traffic",
            "Minimal Configuration for Quick Deployments",
            "Made with the help of codecrafters"
        ],
        links: [
            { text: "Source Code", url: "https://github.com/ayushpratapsingh1/Custom-Shell", type: "live" }
        ]
    },
    {
        id: 6,
        title: "Electric Vehicle Analysis",
        category: "data",
        image: "./assets/images/Tableau.png",
        technologies: ["Tableau Prep", "Tableau Desktop"],
        description: [
            "A detailed data-driven analysis focused on the adoption of electric vehicles globally. The project explores trends, challenges, and opportunities in the EV market using statistical analysis and visualizations.",
            "The system highlights key metrics such as growth in EV adoption, regional analysis, and CO2 emissions reductions. Insights are presented through interactive dashboards and charts."
        ],
        features: [
            "Comprehensive EV market analysis",
            "Interactive data visualizations",
            "Challenges and opportunities in the EV market"
        ],
        links: [
            { text: "Tableau Dashboard", url: "https://public.tableau.com/views/Book1_17291835252270/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", type: "live" }
        ]
    },
    {
        id: 7,
        title: "Forbes Billionaires Analysis",
        category: "data",
        image: "./assets/images/Forbes.png",
        technologies: ["MS Excel"],
        description: [
            "This project analyzes the wealth distribution and economic disparities among billionaires worldwide. Using data from Forbes, the project visualizes key trends in billionaire wealth over the years.",
            "It offers insights into gender disparities, industry trends, and geographical wealth distribution through a dynamic Excel dashboard and comprehensive reports."
        ],
        features: [
            "Global wealth trend analysis from 2001 to 2023",
            "Interactive Excel dashboards",
            "Insights into billionaire gender disparity",
            "Focus on wealth concentration in specific industries"
        ],
        links: [
            { text: "View Project", url: "https://drive.google.com/drive/folders/1xKzT_XtaKpbnMF9iUjwV2nSgZXPUD0wk?usp=sharing", type: "github" }
        ]
    },
    {
        id: 8,
        title: "Superstore Data Analysis",
        category: "ml",
        image: "./assets/images/Super.png",
        technologies: ["R", "SVM", "Naive Bayes", "Regression", "K-Means Clustering"],
        description: [
            "A data analysis project based on the Superstore dataset, using R to explore and analyze sales, customer data, and business trends.",
            "The project evaluates the impact of gender, time of day, date, and month on model performance. It uses SVM, Naive Bayes, regression models, and K-means clustering for data analysis."
        ],
        features: [
            "Confusion matrices, accuracy, and precision metrics",
            "Analysis of time and demographic factors on sales",
            "Use of multiple machine learning algorithms"
        ],
        links: [
            { text: "GitHub", url: "https://github.com/ayushpratapsingh1/Superstore-Data-Analysis-Models", type: "github" },
            { text: "Live Site", url: "./Prediction.html", type: "live" }
        ]
    },
    {
        id: 9,
        title: "Portfolio Template",
        category: "web",
        image: "./assets/images/porttemp.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        description: [
            "A customizable and modern portfolio template designed to showcase personal projects, skills, and experiences professionally.",
            "Built with Next.js, Tailwind CSS, and TypeScript, this template features a responsive design, dynamic content, and optimized performance."
        ],
        features: [
            "Responsive and mobile-friendly design",
            "Dynamic content management for projects, skills, and experiences",
            "Modern UI/UX built with Tailwind CSS",
            "SEO-optimized structure for better search engine rankings",
            "Performance-focused with fast loading times"
        ],
        links: [
            { 
                text: "View Project", 
                url: "https://github.com/ayushpratapsingh1/Portfolio-Template", 
                type: "github" 
            },
            { 
                text: "Live Demo", 
                url: "https://newapsport.vercel.app", 
                type: "demo" 
            }
        ]
    },
    {
        id: 10,
        title: "AI Study Tool",
        category: "web",
        image: "./assets/images/aistudy.png",
        technologies: ["ReactJS", "Tailwind CSS", "Python", "Flask", "OpenAI"],
        description: [
            "The AI Study Tool is a comprehensive web application designed to help users learn and explore various concepts in artificial intelligence. It features an intuitive interface built with ReactJS and styled using Tailwind CSS, providing a seamless user experience. The backend is powered by Flask, integrating OpenAI's advanced language models to offer personalized study recommendations, quizzes, and interactive learning modules. The tool also includes a robust set of system design documents, providing in-depth insights into the tool's architecture and technical specifications.",
            "This project was developed in collaboration with three individuals from different categories for a hackathon, bringing together diverse skill sets to create an innovative learning experience."
        ],
        features: [
            "Detailed system architecture diagrams",
            "Technical specifications and API documentation",
            "Implementation guidelines and best practices"
        ],
        links: [
            { text: "View Docs", url: "https://github.com/ayushpratapsingh1/ai-study-app", type: "github" },
            { text: "Live Site", url: "https://fikra-space.vercel.app/", type: "live" }
        ]
    }       
];

let currentCategory = 'all';

function filterProjects(category) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return; // Safety check
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active', 'bg-gradient-to-r', 'from-[#5e2176b8]', 'to-[#9207c1]');
            btn.classList.remove('bg-white/10');
        } else {
            btn.classList.remove('active', 'bg-gradient-to-r', 'from-[#5e2176b8]', 'to-[#9207c1]');
            btn.classList.add('bg-white/10');
        }
    });

    // Clear and filter projects
    grid.innerHTML = '';
    const filteredProjects = projects.filter(project => project.category === category);

    // Add projects to grid
    filteredProjects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `group relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden transform
        transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_10px_rgba(139,92,246,0.2)]`;
    
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" 
                 alt="${project.title}" 
                 class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 
                            group-hover:translate-y-0 transition-transform duration-500">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${project.technologies.map(tech => 
                            `<span class="bg-white/10 px-2 py-1 rounded-md text-xs font-medium text-white">
                                ${tech}
                            </span>`).join('')}
                    </div>
                    <p class="text-white/90 text-sm line-clamp-3">${project.description[0]}</p>
                </div>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
            <div class="flex gap-3">
                ${project.links.map(link => 
                    `<a href="${link.url}" 
                        target="_blank" 
                        class="${link.type === 'github' ? 'bg-white text-[#781c9c]' : 'bg-gradient-to-r from-[#5e2176b8] to-[#c004ff] text-white'} 
                        px-4 py-1 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110">
                        ${link.text}
                    </a>`).join('')}
            </div>
        </div>`;
    
    card.addEventListener('click', () => openModal(project));
    return card;
}

// Modal functions
function openModal(project) {
    const modal = document.getElementById('projectModal');
    document.body.style.overflow = 'hidden';
    
    // Populate modal content
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    
    // Technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="bg-white/10 px-4 py-1 rounded-md text-xs font-medium">${tech}</span>`
    ).join('');
    
    // Description
    const descContainer = document.getElementById('modalDescription');
    descContainer.innerHTML = project.description.map(text => 
        `<p class="text-sm">${text}</p>`
    ).join('');
    
    // Features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = `
        <h4 class="text-white font-semibold mb-2">Key Features:</h4>
        <ul class="list-disc text-sm space-y-1">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    // Links
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = project.links.map(link => `
        <a href="${link.url}" 
           target="_blank" 
           class="${link.type === 'github' ? 'bg-white text-[#781c9c]' : 'bg-gradient-to-r from-[#5e2176b8] to-[#c004ff] text-white'} 
           px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-110">
            ${link.text}
        </a>
    `).join('');
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    document.body.style.overflow = '';
    modal.classList.add('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing projects...'); // Debug log
    
    // Set up tab button listeners
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            console.log('Filter clicked:', category); // Debug log
            filterProjects(category);
        });
    });

    // Initial load with web projects
    filterProjects('web');
    
    // Close modal when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});