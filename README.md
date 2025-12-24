# 🚀 DevOps Command Lab

An interactive learning platform for mastering DevOps tools through hands-on practice.

## Features

- ✅ 3+ DevOps tools (Linux, Git, docker)
- 📚 Detailed command documentation
- 🎯 Interactive practice scenarios
- 🏆 Knowledge quizzes
- 🔨 Guided mini-projects
- 📊 Progress tracking

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/devops-command-lab.git
cd devops-command-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Deployment
```bash
# Build image
docker build -t devops-command-lab .

# Run container
docker run -p 80:80 devops-command-lab
```

## Project Structure

```
devops-command-lab/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── ToolView.jsx
│   │   ├── CommandView.jsx
│   │   ├── QuizView.jsx
│   │   ├── PracticeView.jsx
│   │   ├── Navigation.jsx
│   │   ├── InfoCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── TerminalOutput.jsx
│   ├── data/
│   │   ├── linuxData.json
│   │   ├── gitData.json
│   │   ├── dockerData.json
│   │   ├── kubernetesData.json
│   │   ├── cicdData.json
│   │   ├── scenarios.json
│   │   └── index.js
│   ├── hooks/
│   │   ├── useProgress.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── progressCalculator.js
│   │   └── clipboard.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── Dockerfile
```

## Adding New Content

### Add a new command:
1. Edit the appropriate JSON file in `src/data/`
2. Follow the command schema
3. Rebuild and test

### Add a new tool:
1. Create `toolnameData.json` in `src/data/`
2. Import in `src/data/index.js`
3. Create tool-specific components if needed

## Technologies

- React 18
- Tailwind CSS
- Vite
- Lucide React Icons
- Docker

## Contributing

Pull requests welcome! Please follow the existing code style.

## License

MIT
