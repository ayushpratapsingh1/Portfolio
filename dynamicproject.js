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
        category: "wel",
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
            { text: "Live Demo", url: "https://pixelwebdev.vercel.app/", type: "live" }
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
            { text: "Source Code", url: "https://github.com/ayushpratapsingh1/HTTP-Server", type: "live" }
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
                text: "Github", 
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
            { text: "Github", url: "https://github.com/ayushpratapsingh1/ai-study-app", type: "github" },
            { text: "Live Demo", url: "https://ai-study-tool.vercel.app/", type: "live" }
        ]
    },
    {
        id: 11,
        title: "Digital Library Platform",
        category: ["web","dev"],
        image: "./assets/images/book.png",
        technologies: ["MongoDB","ExpressJS", "ReactJS", "NodeJS", "Docker", "AWS"],
        description: [
            "The Digital Library Platform is an advanced web application that enables users to share and discover books with PDF uploads and cover images. It features a dynamic frontend built with React and styled using Tailwind CSS, ensuring an interactive and smooth user experience. The backend is powered by Node.js and MongoDB, providing robust data management capabilities. Docker is used for containerized deployment, making the application scalable and easy to maintain.",
            "This project is designed to create a seamless digital library experience, offering an organized and efficient way to manage book collections."
        ],
        features: [
            "User-friendly interface for book uploads and management",
            "Secure and scalable backend architecture",
            "API documentation for seamless integration"
        ],
        links: [
            { text: "Github", url: "https://github.com/ayushpratapsingh1/bookstore", type: "github" },
            { text: "Live Demo", url: "https://apsbookstore.vercel.app/", type: "live" }
        ]
    },
    {
        id: 12,
        title: "Cloud Authentication System",
        category: ["others","dev"],
        image: "./assets/images/login.png",
        technologies: ["Docker", "AWS", "Terraform", "GitHub Actions", "React", "Node.js"],
        description: [
            "Engineered a cloud-native authentication system showcasing advanced DevOps practices. Implemented containerization using Docker with multi-stage builds, orchestrated through Docker Compose for development and production environments. The infrastructure is provisioned using Terraform on AWS, featuring EC2 instances, VPC networking, and automated secret management.",
            "Established a robust CI/CD pipeline using GitHub Actions, incorporating automated testing, security scanning, and deployment workflows. Infrastructure security is enforced through AWS IAM roles, security groups, and network ACLs."
        ],
        features: [
            "Containerized microservices architecture",
            "Automated infrastructure deployment",
            "Secure credential management with AWS Secrets Manager",
            "Zero-downtime deployments",
            "Comprehensive monitoring and logging"
        ],
        links: [
            { text: "Github", url: "https://github.com/ayushpratapsingh1/EC2-Deployment-with-Docker-for-MERN-Project", type: "github" },
            { text: "Live Demo", url: "https://loginaps.duckdns.org/", type: "live" }
        ]
    },
    {
        id: 15,
        title: "AWS Cost Optimization & Reporting System",
        category: ["dev"],
        image: "./assets/images/crypto.png",
        technologies: ["Python", "AWS Cost Explorer", "Google Cloud Functions", "BigQuery", "Terraform"],
        description: [
            "Developed an enterprise-grade automated cost reporting system that reduced manual reporting time from 5-6 hours to 10 minutes. Built comprehensive cost analysis pipelines using AWS Cost Explorer API, BigQuery for data warehousing, and Google Cloud Functions for serverless processing.",
            "Implemented spot instance mismatch detection system that identified $1,500/month cost discrepancies by analyzing Ocean controller data against AWS Cost Explorer. Created automated alerting for missing cluster costs and zombie resource cleanup workflows."
        ],
        features: [
            "Automated daily cost reports with anomaly detection",
            "Spot instance cost mismatch detection and resolution",
            "Multi-cloud cost allocation and tenant mapping",
            "AI-powered cost analysis using Gemini API",
            "Slack integration for real-time cost alerts",
            "Historical cost baseline analysis with 7-day trending"
        ],
        links: [
            { text: "Cost Dashboard", url: "https://github.com/ayushpratapsingh1/aws-cost-optimization", type: "github" }
        ]
    },
    {
        id: 16,
        title: "FinOps AI Agent with Google ADK",
        category: ["dev"],
        image: "./assets/images/aistudy.png",
        technologies: ["Google ADK", "Python", "AWS Cost Explorer", "BigQuery", "AI/ML"],
        description: [
            "Built an intelligent FinOps agent using Google Application Development Kit (ADK) to democratize cloud cost analysis. The agent enables non-technical users to query complex cost data, get optimization recommendations, and understand cloud spending patterns through natural language interactions.",
            "Integrated 13 specialized tools including tenant mapping, cost analysis, optimization recommendations, and context-aware responses. The system provides actionable insights for cost reduction and helps teams make data-driven decisions about cloud resource usage."
        ],
        features: [
            "Natural language cost queries and analysis",
            "Automated tenant cost mapping and allocation",
            "AI-powered optimization recommendations",
            "Context-aware cost analysis with historical data",
            "Integration with AWS Cost Explorer and BigQuery",
            "User-friendly interface for non-technical stakeholders"
        ],
        links: [
            { text: "Agent Demo", url: "https://github.com/ayushpratapsingh1/finops-ai-agent", type: "github" }
        ]
    },
    {
        "id": 13,
        "title": "SMS Spam Classifier",
        "category": "ml",
        "image": "./assets/images/sms.png", 
        "technologies": ["Jupyter Notebook", "Python"],
        "description": [
            "The SMS Spam Classifier is a machine learning-based web application that classifies SMS messages as either spam or ham (non-spam). It features an intuitive interface built with Jupyter Notebook and Python, providing a seamless user experience. The backend is powered by machine learning models, integrating advanced text processing techniques to offer accurate spam prediction. The tool also includes a robust set of system design documents, providing in-depth insights into the tool's architecture and technical specifications.",
            "This project was developed to identify spam messages using various machine learning algorithms, with Multinomial Naive Bayes demonstrating the best performance."
        ],
        "features": [
            "User-friendly interface",
            "Technical specifications and API documentation",
            "Implementation guidelines and best practices"
        ],
        "links": [
            { "text": "Github", "url": "https://github.com/ayushpratapsingh1/SMS-Classifier", "type": "github" },
            { "text": "Live Demo", "url": "https://sms-classifier-aps.streamlit.app/", "type": "live" }
        ]
    },
    {
        id: 14,
        title: "Potato Disease Classifier",
        category: "ml",
        image: "./assets/images/plant.png",
        technologies: ["Jupyter Notebook", "Python"],
        description: [
            "The Potato Disease Classifier is a comprehensive web application designed to help users identify various plant diseases through image recognition. It features an intuitive interface built with Jupyter Notebook and Python, providing a seamless user experience. The backend is powered by machine learning models, integrating advanced image processing techniques to offer accurate disease identification and recommendations. The tool also includes a robust set of system design documents, providing in-depth insights into the tool's architecture and technical specifications.",
            "This project was developed in collaboration with individuals from different categories, bringing together diverse skill sets to create an innovative plant disease identification tool."
        ],
        features: [
            "Potato-disease identification",
            "User-friendly interface",
            "Implementation guidelines and best practices"
        ],
        links: [
            { text: "Github", url: "https://github.com/ayushpratapsingh1/Plant-Disease-Classifier", type: "github" }
        ]
    }         
];

let currentCategory = 'all';

// Enhanced filter projects function
function filterProjects(category) {
    const grid = document.getElementById('projectGrid');
    const emptyState = document.getElementById('emptyState');
    const loader = document.getElementById('projectLoader');
    
    if (!grid) return;
    
    // Show loader if available
    if (loader) loader.classList.remove('hidden');
    
    // Update tab buttons with enhanced transitions
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
            btn.classList.remove('bg-white/10');
            
            // Set gradient based on category
            if (category === 'web') {
                btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, 'from-purple-600 to-blue-500');
            } else if (category === 'data') {
                btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, 'from-green-600 to-teal-500');
            } else if (category === 'others') {
                btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, 'from-yellow-600 to-orange-500');
            } else if (category === 'dev') {
                btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, 'from-red-600 to-pink-500');
            }
        } else {
            btn.classList.remove('active');
            btn.classList.add('bg-white/10');
            // Remove gradients from inactive tabs
            btn.className = btn.className.replace(/from-\w+-\d+\s+to-\w+-\d+/g, '');
        }
    });

    // Enhanced animation for existing cards
    const existingCards = grid.querySelectorAll('.project-card');
    existingCards.forEach(card => {
        card.classList.add('opacity-0');
        card.style.transform = 'translateY(20px)';
    });
    
    // Delayed grid update for smoother transitions
    setTimeout(() => {
        // Clear grid
        grid.innerHTML = '';
        
        // Filter projects
        const filteredProjects = projects.filter(project => project.category.includes(category));
        currentCategory = category;
        
        // Show empty state if no projects match
        if (filteredProjects.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
            if (loader) loader.classList.add('hidden');
            return;
        }
        
        if (emptyState) emptyState.classList.add('hidden');
        
        // Add new cards with enhanced staggered animation
        filteredProjects.reverse().forEach((project, index) => {
            const card = createProjectCard(project);
            card.classList.add('project-card');
            card.style.transitionDelay = `${index * 100}ms`;
            grid.appendChild(card);
            
            // Trigger reflow for smooth animation
            void card.offsetWidth;
            
            // Animate in
            setTimeout(() => {
                card.classList.remove('opacity-0');
                card.style.transform = 'translateY(0)';
            }, 50);
        });
        
        // Hide loader
        if (loader) loader.classList.add('hidden');
    }, 300);
}

// Enhanced project card creation with status indicators
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card group relative bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-md 
        rounded-xl overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] border border-purple-500/20 
        hover:border-purple-500/40 hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.4)] opacity-0`;
    card.style.transform = 'translateY(20px)';
    
    // Determine project status
    let statusBadge = '';
    if (project.status) {
        // If project has explicit status
        let statusColor, statusText, hasAnimation;
        
        if (project.status === 'live') {
            statusColor = 'bg-green-500/80';
            statusText = 'Live';
            hasAnimation = true;
        } else if (project.status === 'in-progress') {
            statusColor = 'bg-yellow-500/80';
            statusText = 'In Progress';
        } else if (project.status === 'completed') {
            statusColor = 'bg-blue-500/80';
            statusText = 'Completed';
        } else if (project.status === 'archived') {
            statusColor = 'bg-gray-500/80';
            statusText = 'Archived';
        }
        
        statusBadge = `
            <div class="absolute top-3 right-3 z-10">
                <span class="${statusColor} backdrop-blur-md text-white text-xs py-1 px-3 rounded-full font-medium shadow-lg flex items-center">
                    ${hasAnimation ? '<span class="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>' : ''}
                    ${statusText}
                </span>
            </div>
        `;
    } else {
        // Infer status from project.links
        const hasLiveLink = project.links.some(link => link.type === 'live' || link.type === 'demo');
        if (hasLiveLink) {
            statusBadge = `
                <div class="absolute top-3 right-3 z-10">
                    <span class="bg-green-500/80 backdrop-blur-md text-white text-xs py-1 px-3 rounded-full font-medium shadow-lg flex items-center">
                        <span class="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                        Live
                    </span>
                </div>
            `;
        }
    }
    
    card.innerHTML = `
        <div class="relative overflow-hidden group">
            <img src="${project.image}" 
                alt="${project.title}"
                loading="lazy"
                class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer">
            
            ${statusBadge}
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 
                            group-hover:translate-y-0 transition-transform duration-500 open-overlay">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${project.technologies.map(tech => 
                            `<span class="bg-black/20 px-2 py-1 rounded-full text-xs font-medium text-white">
                                ${tech}
                            </span>`).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="p-6">
            <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-4">${project.title}</h3>
            <div class="flex gap-3">
                ${project.links.map(link => 
                    `<a href="${link.url}" 
                        target="_blank" 
                        class="${link.type === 'github' ? 'bg-black text-[#781c9c]' : 'bg-gradient-to-r from-[#5e2176b8] to-[#c004ff] text-white'} 
                        px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110 flex items-center gap-1.5">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            ${link.type === 'github' 
                                ? '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
                                : '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>'}
                        </svg>
                        ${link.text}
                    </a>`).join('')}
            </div>
        </div>`;
    
    // Attach event for modal opening
    const overlay = card.querySelector('.open-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => openModal(project));
    }
    
    // Make the card image area also clickable for modal
    const imageArea = card.querySelector('img');
    if (imageArea) {
        imageArea.addEventListener('click', (e) => {
            // Don't trigger if clicking a direct link
            if (!e.target.closest('a')) {
                openModal(project);
            }
        });
    }

    return card;
}

// Enhanced modal functions with animations
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalStatus = document.getElementById('modalStatus');
    
    if (!modal) return;
    
    document.body.style.overflow = 'hidden';
    
    // Set modal image
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
    }
    
    // Set modal title
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.textContent = project.title;
        modalTitle.className = "text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent";
    }
    
    // Set technologies with improved styling
    const techContainer = document.getElementById('modalTechnologies');
    if (techContainer) {
        techContainer.innerHTML = project.technologies.map(tech => 
            `<span class="bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 rounded-full text-xs font-medium text-purple-300">${tech}</span>`
        ).join('');
    }
    
    // Set description with proper formatting
    const descContainer = document.getElementById('modalDescription');
    if (descContainer) {
        if (Array.isArray(project.description)) {
            descContainer.innerHTML = project.description.map(text => 
                `<p class="text-gray-300">${text}</p>`
            ).join('');
        } else {
            descContainer.innerHTML = `<p class="text-gray-300">${project.description}</p>`;
        }
    }
    
    // Set features with better formatting
    const featuresContainer = document.getElementById('modalFeatures');
    if (featuresContainer && project.features) {
        featuresContainer.innerHTML = `
            <h4 class="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Key Features
            </h4>
            <ul class="list-disc list-inside text-gray-300 space-y-1 pl-2">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }
    
    // Set links with enhanced styling
    const linksContainer = document.getElementById('modalLinks');
    if (linksContainer) {
        linksContainer.innerHTML = project.links.map(link => {
            const isGithub = link.type === 'github';
            return `
                <a href="${link.url}" 
                   target="_blank" 
                   class="${isGithub 
                    ? 'flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/10' 
                    : 'flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                        ${isGithub 
                            ? '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
                            : '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>'}
                    </svg>
                    <span>${link.text}</span>
                </a>
            `;
        }).join('');
    }
    
    // Set status badge in modal if available
    if (modalStatus) {
        // Determine status - either from explicit property or infer from links
        let statusInfo = { show: false };
        
        if (project.status) {
            statusInfo.show = true;
            
            if (project.status === 'live') {
                statusInfo.color = 'bg-green-500/80';
                statusInfo.text = 'Live';
                statusInfo.animate = true;
            } else if (project.status === 'in-progress') {
                statusInfo.color = 'bg-yellow-500/80';
                statusInfo.text = 'In Progress';
            } else if (project.status === 'completed') {
                statusInfo.color = 'bg-blue-500/80';
                statusInfo.text = 'Completed';
            } else if (project.status === 'archived') {
                statusInfo.color = 'bg-gray-500/80';
                statusInfo.text = 'Archived';
            }
        } else {
            // Infer status from project.links
            const hasLiveLink = project.links.some(link => link.type === 'live' || link.type === 'demo');
            if (hasLiveLink) {
                statusInfo = {
                    show: true,
                    color: 'bg-green-500/80',
                    text: 'Live',
                    animate: true
                };
            }
        }
        
        if (statusInfo.show) {
            modalStatus.className = `${statusInfo.color} backdrop-blur-md text-white text-xs py-1 px-3 rounded-full font-medium shadow-lg flex items-center`;
            modalStatus.innerHTML = `
                ${statusInfo.animate ? '<span class="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>' : ''}
                ${statusInfo.text}
            `;
            modalStatus.classList.remove('hidden');
        } else {
            modalStatus.classList.add('hidden');
        }
    }
    
    // Show modal with enhanced animation
    modal.classList.remove('hidden');
    if (modalContent) {
        setTimeout(() => {
            modal.classList.add('opacity-100');
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal) return;
    
    // Add exit animation
    if (modalContent) {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        modal.classList.remove('opacity-100');
    }
    
    // Delay hiding to allow for animation
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing projects...');
    
    // Set up close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Initial load with web projects
    filterProjects('dev');
});