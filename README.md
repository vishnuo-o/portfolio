# Vishnupriyan - iOS Engineer Portfolio

https://github.com/vishnuo-o/portfolio.git

A minimal, Apple-inspired portfolio website showcasing iOS development work and experience.

## Features

- Clean, modern design following Apple's design principles
- Fully responsive (mobile, tablet, desktop)
- Dark mode support
- Smooth scroll animations
- Zero dependencies - pure HTML, CSS, and JavaScript
- Optimized for performance

## Quick Start

### Local Development

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Add remote and push:

```bash
git remote add origin https://github.com/vishnupriyan/portfolio.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your portfolio will be live at `https://vishnupriyan.github.io/portfolio/`

## Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── index.css           # Styles (Apple-inspired design system)
├── script.js           # JavaScript (scroll animations, navigation)
├── images/             # Project mockups and assets
│   ├── swiftweather-mockup.png
│   ├── taskflow-mockup.png
│   └── codesnippets-mockup.png
├── swift-logo.svg      # Swift language logo
├── swiftui-logo.png    # SwiftUI framework logo
└── README.md           # This file
```

## Customization

### Update Contact Information

Edit `index.html` lines 225-253 with your real contact details:
- Email
- GitHub profile
- LinkedIn profile

### Replace Project Images

Replace placeholder images in `images/` folder with your actual project screenshots or mockups.

### Modify Content

All content is in `index.html`:
- **Hero**: Lines 29-40
- **About**: Lines 43-60
- **Experience**: Lines 63-114
- **Projects**: Lines 117-163
- **Skills**: Lines 166-214
- **Contact**: Lines 217-260

### Customize Colors

Edit CSS custom properties in `index.css` (lines 9-30):

```css
--color-accent: #0066CC;        /* Brand color */
--color-bg-light: #FBFBFD;      /* Light background */
--color-text-dark: #1D1D1F;     /* Primary text */
```

## Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari iOS 12+
- Chrome Android (latest)

## Performance

- Lighthouse Score: 90+
- Zero external dependencies
- Optimized animations using Intersection Observer
- Hardware-accelerated CSS transforms

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Design inspired by Apple's design language and principles.
