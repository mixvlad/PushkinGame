# PushkinGame - Russian Punctuation Learning Game

An interactive educational web application for learning Russian punctuation rules through engaging quizzes and exercises. The game features classic Russian literature excerpts and helps users master comma and dash placement rules.

## 🎯 Project Overview

PushkinGame is an Angular-based educational platform that makes learning Russian punctuation fun and interactive. Users can practice their knowledge of Russian grammar rules through carefully crafted questions based on famous literary works by authors like Pushkin, Gogol, Tolstoy, and Chekhov.

## 🎮 Available Games

### Comma Rules Quiz
- **Route**: `/comma`
- **Purpose**: Practice comma placement rules in Russian sentences
- **Features**: Interactive questions with multiple choice answers
- **Content**: Literary excerpts requiring comma knowledge

### Timer Quiz
- **Route**: `/timer`
- **Purpose**: Timed punctuation challenges
- **Features**: Countdown timer with pressure-based learning
- **Content**: Quick-fire questions from Russian literature

### Dash Rules Quiz
- **Route**: `/dash`
- **Purpose**: Master dash usage in Russian grammar
- **Features**: Specialized dash placement exercises
- **Content**: Sentences requiring dash knowledge

## 📚 Educational Content

### Literary Sources
The game uses authentic excerpts from classic Russian literature:
- **A.S. Pushkin** - "The Blizzard" and other works
- **N.V. Gogol** - "The Nose" and other stories
- **L.N. Tolstoy** - "Anna Karenina" and other novels
- **A.P. Chekhov** - Various short stories

### Grammar Rules Covered
- **Comma placement** with conjunctions and complex sentences
- **Dash usage** in various grammatical constructions
- **Punctuation in direct speech**
- **Complex sentence punctuation**

## 🏗️ Project Structure

```
src/app/
├── main-page/                    # Landing page with game previews
├── game/                        # Main game component
├── comma-question-page/         # Comma-specific question interface
├── dash-question-page/          # Dash-specific question interface
├── timer-question-page/         # Timer-based questions
├── result-page/                 # Game results and scoring
├── rating/                      # User ratings and leaderboards
├── blog/                        # Educational blog content
├── blog-page/                   # Individual blog posts
├── top-panel/                   # Navigation and UI elements
├── countdown-timer/             # Timer component
├── game-button/                 # Interactive game buttons
├── input-block/                 # User input components
├── svg/                         # SVG graphics and icons
├── email-subscribe/             # Newsletter subscription
├── user-input/                  # User interaction components
└── services/                    # Game logic and data services
```

## 🚀 Quick Start

### Prerequisites
- Node.js (version 12 or higher)
- Angular CLI (version 12 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/PushkinGame.git
cd PushkinGame

# Install dependencies
npm install

# Start development server
npm start
```

### Development Commands
```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run end-to-end tests
npm run e2e

# Lint code
npm run lint
```

## 🛠️ Technology Stack

### Frontend Framework
- **Angular 12** - Main application framework
- **TypeScript** - Programming language
- **Stylus** - CSS preprocessor for styling

### UI Components
- **Angular Material** - Material Design components
- **FontAwesome** - Icon library
- **HammerJS** - Touch gesture support

### Analytics & Tracking
- **Google Analytics** - User behavior tracking
- **Yandex Metrika** - Russian market analytics

### Social Features
- **ngx-share** - Social media sharing buttons

## 📊 Game Features

### Interactive Learning
- **Multiple choice questions** with immediate feedback
- **Progressive difficulty** - questions get harder as you advance
- **Score tracking** - monitor your progress over time
- **Help system** - explanations for grammar rules

### User Experience
- **Responsive design** - works on desktop and mobile
- **Touch-friendly interface** - optimized for tablets and phones
- **Accessibility features** - keyboard navigation support
- **Visual feedback** - animations and transitions

### Educational Content
- **Blog section** - articles about Russian grammar
- **Rating system** - compare scores with other users
- **Email subscription** - stay updated with new content

## 🔧 Configuration

### Environment Setup
The application uses Angular environment files for configuration:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://your-api-domain.com/api'
};
```

### Analytics Configuration
```typescript
// Google Analytics
ga('create', 'UA-XXXXXXXX-X', 'auto');

// Yandex Metrika
this.metrika.hit(event.urlAfterRedirects);
```

## 📱 Deployment

### GitHub Pages
```bash
# Build for GitHub Pages
npm run build:gh-pages

# Deploy to GitHub Pages
ng deploy --base-href=./ --prod
```

### Production Build
```bash
# Create production build
npm run build

# The build artifacts will be stored in the `dist/` directory
```

## 🧪 Testing

### Unit Tests
```bash
# Run unit tests
npm test

# Run tests with coverage
ng test --code-coverage
```

### End-to-End Tests
```bash
# Run e2e tests
npm run e2e
```

### Linting
```bash
# Run linter
npm run lint

# Fix linting issues
ng lint --fix
```

## 📈 Performance

### Optimization Features
- **Lazy loading** - components load on demand
- **Tree shaking** - unused code is eliminated
- **Minification** - code is compressed for production
- **Caching** - static assets are cached for better performance

### Monitoring
- **Performance metrics** tracked via analytics
- **Error tracking** for debugging issues
- **User behavior analysis** for improvements

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow Angular style guide
- Write unit tests for new features
- Update documentation as needed
- Use TypeScript strict mode

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Russian Literature** - For providing the educational content
- **Angular Team** - For the excellent framework
- **Material Design** - For the beautiful UI components
- **Open Source Community** - For the amazing tools and libraries

## 📞 Support

If you have questions or need help:
- Create an [Issue](https://github.com/your-username/PushkinGame/issues)
- Check the [Wiki](https://github.com/your-username/PushkinGame/wiki) for documentation
- Contact the development team

---

⭐ If this project helps you learn Russian punctuation, please give it a star!
