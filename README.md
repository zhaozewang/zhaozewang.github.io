# Zhaoze Wang - Personal Academic Website

Personal website built with Jekyll and GitHub Pages.

## About

This site uses Jekyll for templating and content management. The homepage presents a single research narrative around predictive world models, neuroscience-inspired planning, and robotic systems.

Design and original source code from [Jon Barron's website](https://github.com/jonbarron/jonbarron_website).

## Structure

```
├── _layouts/
│   ├── default.html    # Base layout for main pages
│   └── project.html    # Layout for project pages with MathJax
├── index.html          # Home page
├── tms/
│   └── index.html      # Project page
└── _config.yml         # Jekyll configuration
```

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

The Grid and Place project page is maintained here at `/grid-and-place/`.
The separate `zhaozewang/grip_latex` paper repository previously published a
duplicate page at `/grip_latex/` from its `gh-pages` branch. Keep that repository's
**Settings → Pages → Branch** set to **None** so future pushes do not republish
the duplicate. This is a separate Pages site; this repository's Jekyll exclusions
do not control it.

## Updating Content

Edit `index.html` for the biography, research interests, selected publications, and open-source projects. Paper titles and project-page scientific descriptions retain their original scope. Homepage descriptions follow the world-model CV framing.

## Tiny-WAM project

The homepage separates **Selected Projects** from **Publications**; original entry IDs
remain stable for existing links. Tiny-WAM is listed first under Selected Projects.

`tiny-wam/index.html` contains the public article adapted from the supplied
`swam.html` export. Its figures, videos, posters, and KaTeX fonts are stored alongside
it under `media/` and `fonts/`. Videos use `preload="none"` on the article page;
`media/preview.mp4` is a small, silent homepage preview of the supplied simulator
rollout. The article retains the experiment's limitations and distinguishes model-side
inference timing from end-to-end robot control.

The export referred to three `/notes/assets/swam-report/` reports that were not supplied.
Those references remain as text, with a release note, rather than broken links.
The supplied `https://github.com/zhaozewang/Tiny-WAM` address returned HTTP 404 when
checked on 2026-10-10, so the public page does not currently include a Code button.
Restore the button and supporting report links when their public destinations are available.
