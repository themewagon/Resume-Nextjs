# Resume Next.js - GitHub Pages Deployment

This is a [Next.js](https://nextjs.org) project configured for static export and GitHub Pages deployment.

## Project Structure

This project uses static JSON data files instead of API routes to enable deployment on GitHub Pages (static hosting).

### Data Files
- `/public/data/page-data.json` - Contains contact bar, education, and contact information
- `/public/data/work-data.json` - Contains work/portfolio data

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the static site:

```bash
npm run build
```

This will create an `out` directory with the static export ready for deployment.

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

### Setup Instructions

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "GitHub Actions"
5. Push to the `main` branch to trigger deployment

### Automated Deployment

The `.github/workflows/deploy.yml` file automates the deployment process:
- Builds the Next.js static export
- Deploys to GitHub Pages on every push to `main` branch
- Uses GitHub's Pages deployment action

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The static files are in the 'out' directory
# You can push this to the gh-pages branch or deploy via the Actions tab
```

## Modifying Data

To update the content on the site:

1. Edit `/public/data/page-data.json` for contact, education, and skills
2. Edit `/public/data/work-data.json` for portfolio work items
3. Commit and push to trigger automatic deployment

## Configuration

The project is configured in `next.config.ts` for static export:
- `output: 'export'` - Enables static export
- `images.unoptimized: true` - Required for static hosting
- `trailingSlash: true` - Ensures proper routing on GitHub Pages
