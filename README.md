# Zhaoze Wang - Personal Academic Website

Personal website built with Jekyll and GitHub Pages.

## About

This site uses Jekyll for templating and content management, eliminating code duplication while supporting dual viewing modes (AI Researcher vs. Computational Neuroscientist).

Design and original source code from [Jon Barron's website](https://github.com/jonbarron/jonbarron_website).

## Structure

```
├── _layouts/
│   ├── default.html    # Base layout for main pages
│   └── project.html    # Layout for project pages with MathJax
├── index.html          # Home page
├── tms/
│   └── index.html      # Project page
├── mode-toggle.js      # Handles mode switching via localStorage
└── _config.yml         # Jekyll configuration
```

## Mode Toggle System

The site uses a simple JavaScript-based mode toggle:

1. User preference stored in `localStorage` (key: `content-mode`)
2. Clicking toggle buttons switches between `cs` and `ns` modes
3. Mode-specific content uses `.mode-cs` or `.mode-ns` classes
4. JavaScript shows/hides content based on active mode

## Development

### Running Locally
This processes Jekyll templates just like GitHub Pages:

**First-time setup:**
```bash
# Check if Ruby is installed
ruby --version

# Install Jekyll and Bundler
gem install bundler jekyll

# Create a Gemfile for dependencies
bundle init
bundle add jekyll
```

**To serve the site**
```bash
# Start the Jekyll server
jekyll serve

# Or use bundle exec for better compatibility
bundle exec jekyll serve

# Open in browser: http://localhost:4000
```

**What you'll see:**
- Homepage at: `http://localhost:4000/`
- TMS project at: `http://localhost:4000/tms/`
- Auto-reloads when you edit files (just refresh browser)

**To stop the server:**
Press `Ctrl+C` in the terminal

### Troubleshooting

**"Command not found: jekyll"**
- Make sure Ruby gems are in your PATH: `export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"`
- Or use: `bundle exec jekyll serve`

**"Could not find gem 'jekyll'"**
- Run: `bundle install`

**Port already in use**
- Use a different port: `jekyll serve --port 4001`

### Deployment

Just commit and push to GitHub - **no build step needed**! GitHub Pages automatically detects `_config.yml` and builds Jekyll sites.

```bash
git add .
git commit -m "Update content"
git push
```

Your site will be live at: `https://zhaozewang.github.io/` within 1-2 minutes.

## Customizing Content for Each Mode

To add mode-specific content, use HTML with CSS classes:

```html
<!-- CS Mode Content -->
<div class="mode-cs">
  <p>Content for AI researchers...</p>
</div>

<!-- NS Mode Content -->
<div class="mode-ns">
  <p>Content for neuroscientists...</p>
</div>
```

The JavaScript in `mode-toggle.js` will automatically show/hide these based on the selected mode.

**For content that appears in both modes (doesn't switch):**
Just don't add any mode-specific class and it will show in both modes:

```html
<!-- This content shows in BOTH modes -->
<div>
  <p>This text appears regardless of which mode is selected.</p>
</div>
```
