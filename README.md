# DevOps & FinOps Engineer Portfolio

**Ayush Pratap Singh** - Cloud Infrastructure Specialist & Cost Optimization Expert

## 🚀 Quick Start

### Prerequisites
- Node.js (for Tailwind CSS compilation)
- Modern web browser
- Local web server (optional)

### Installation & Setup

```bash
# 1. Clone or download the repository
git clone <your-repo-url>
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start Tailwind CSS in watch mode
npx tailwindcss -i ./input.css -o ./output.css --watch

# 4. Serve locally (choose one option):

# Option A: Python
python -m http.server 8000

# Option B: Live Server (if installed globally)
live-server

# Option C: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### 📁 Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── projects.html            # Projects showcase page
├── main.js                  # Consolidated JavaScript (optimized)
├── styles.css              # Optimized CSS styles
├── contact.js               # Contact form functionality
├── dynamicproject.js        # Dynamic project loading
├── input.css               # Tailwind CSS source
├── output.css              # Compiled Tailwind CSS
├── font.css                # Custom fonts
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── assets/
    ├── icons/              # Essential icons only
    └── images/             # Optimized project images
```

## 🛠 Technologies & Skills Highlighted

### DevOps & Infrastructure
- **Kubernetes** - Container orchestration
- **Docker** - Containerization
- **Terraform** - Infrastructure as Code
- **Ansible** - Configuration management
- **Helm** - Kubernetes package management

### Multi-Cloud Platforms
- **AWS** - Amazon Web Services
- **Azure** - Microsoft Azure
- **GCP** - Google Cloud Platform
- **DigitalOcean** - Cloud hosting

### FinOps & Cost Management
- **Cost Optimization** strategies
- **Budget Management** & tracking
- **Resource Tagging** best practices
- **Cost Analytics** & reporting

### CI/CD & Automation
- **Jenkins** - Automation server
- **GitHub Actions** - CI/CD workflows
- **GitLab CI** - DevOps platform
- **Linux** - System administration

### Monitoring & Observability
- **Prometheus** - Metrics collection
- **Grafana** - Data visualization
- **ELK Stack** - Logging & analytics
- **Datadog** - Monitoring platform

### Security & Compliance
- **RBAC** - Role-based access control
- **OAuth2/JWT** - Authentication
- **SSL/TLS** - Encryption
- **Vault** - Secrets management

## 🎨 Features

### Performance Optimized
- **Consolidated JavaScript** - Single optimized file
- **Cleaned CSS** - Removed unused styles
- **Optimized Assets** - Compressed images
- **Lazy Loading** - Improved page speed

### Mobile Responsive
- **Tailwind CSS** - Utility-first framework
- **Mobile-first Design** - Responsive across devices
- **Touch-friendly** - Optimized for mobile interaction

### SEO Optimized
- **Semantic HTML** - Proper structure
- **Meta Tags** - DevOps/FinOps focused
- **Structured Data** - Schema.org markup
- **Performance** - Fast loading times

## 🔧 Customization

### Update Skills
Edit the skills section in `index.html` to reflect your expertise:
- Modify skill percentages
- Add/remove technology tags
- Update skill categories

### Add Projects
Update `dynamicproject.js` to add new projects:
```javascript
{
    id: newId,
    title: "Your Project Name",
    category: ["dev"], // dev, web, data, ml, others
    image: "./assets/images/your-image.png",
    technologies: ["Kubernetes", "Docker", "AWS"],
    description: ["Your project description"],
    features: ["Key feature 1", "Key feature 2"],
    links: [
        { text: "GitHub", url: "your-github-url", type: "github" },
        { text: "Live Demo", url: "your-demo-url", type: "live" }
    ]
}
```

### Styling
- **Colors**: Modify Tailwind config or CSS variables
- **Fonts**: Update `font.css` for custom typography
- **Animations**: Adjust in `styles.css`

## 📈 Performance Features

### Optimizations Applied
- ✅ **JavaScript Consolidation** - Reduced HTTP requests
- ✅ **CSS Optimization** - Removed unused styles
- ✅ **Asset Cleanup** - Deleted unnecessary files
- ✅ **Code Structure** - Modular and maintainable
- ✅ **Error Handling** - Robust JavaScript implementation

### File Size Reduction
- **Before**: Multiple JS files (~15KB total)
- **After**: Single optimized file (~8KB)
- **CSS Cleanup**: Removed 40% unused styles
- **Asset Cleanup**: Removed 25+ unused images

## 🚀 Deployment

### Static Hosting Options
- **Vercel** - Recommended for easy deployment
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting option
- **AWS S3** - Scalable cloud hosting

### Build Process
```bash
# Build for production
npx tailwindcss -i ./input.css -o ./output.css --minify

# Optimize images (optional)
# Use tools like imagemin or tinypng
```

## 🤝 Contributing

This portfolio is optimized for DevOps & FinOps professionals. Feel free to:
- Fork the repository
- Customize for your needs
- Submit improvements via PR

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 📞 Contact

**Ayush Pratap Singh**
- 🌐 Website: [ayushdev.tech](https://www.ayushdev.tech)
- 💼 LinkedIn: [ayushpratapsingh1](https://www.linkedin.com/in/ayushpratapsingh1/)
- 🐱 GitHub: [ayushpratapsingh1](https://github.com/ayushpratapsingh1)
- 📧 Email: ayushpratapds@gmail.com

---

*Built with ❤️ for the DevOps & FinOps community*