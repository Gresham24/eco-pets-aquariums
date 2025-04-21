# Eco-Pets & Aquariums - Landing Page

A responsive, mobile-first landing page for Eco-Pets and Aquariums built with React, Vite, and styled-components.

## Hosted Link
https://eco-pets-aquariums.netlify.app/

## Features

- Fully responsive design (mobile, tablet, desktop)
- Mobile-first approach
- Component-based architecture
- Styled with styled-components
- Smooth scrolling and animations
- Image gallery with filtering
- Contact information with Google Maps integration
- Opening hours display
- Customer reviews section
- Pet care tips section
- Newsletter signup
- Social media integration

## Tech Stack

- React.js
- Vite
- styled-components
- Intersection Observer API (for scroll animations)
- Google Maps iframe

## Color Scheme

- Teal Blue (#007C91): Primary color for headings, buttons, and key elements
- Sky Blue (#A7D8FF): Light backgrounds and cards
- Seafoam Green (#C2F2E4): Subtle highlights or secondary accents
- Coral Red (#FF6B6B): Accent color for call-to-action (CTA) buttons
- Off White (#FAFAFA): Main background color
- Slate Gray (#4A4A4A): Text and navigation elements

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/eco-pets-aquariums.git
cd eco-pets-aquariums
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
eco-pets-aquariums/
├── public/
│   └── (static assets)
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── OpeningHours/
│   │   ├── PetCareTips/
│   │   ├── Reviews/
│   │   └── common/
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for easy deployment to Netlify:

```bash
# Install Netlify CLI if you haven't already
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize a new Netlify site (first time only)
netlify init

# Deploy to Netlify
npm run deploy
```

## Customization

- To change the color scheme, edit the `theme.js` file in the `src/styles` directory
- To add or modify components, edit the files in the respective component directories
- To add new images, place them in the `src/assets/images` directory and update the import paths

## License

This project is licensed under the MIT License.

## Credits

- Created by Gresham Tembo
- Design based on requirements for Eco-Pets & Aquariums