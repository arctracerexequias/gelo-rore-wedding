# Gelo & Rore's wedding

A responsive, static wedding front page based on the supplied Canva invitation (starting at slide 2). Built with HTML, CSS, and a small optional script. No installation or build required.

## Preview

Open `index.html` in your browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a GitHub repository and upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the entire `assets` folder. Keep `index.html` at the repository root.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose **main** and **/ (root)**, then save.
4. GitHub will display your live website link when deployment finishes, usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

All asset paths are relative, so both repository and custom-domain Pages sites work.

## Editing

- Wedding copy and contacts: `index.html`.
- Colors, layout, and typography: `styles.css`.
- Calendar start time: `assets/gelo-and-rore.ics`. It is 12:00 noon in the Philippines (04:00 UTC) on November 21, 2026, as confirmed by the couple.
- Invitation image: `assets/invitation.png`. This is the available Canva slide 2 preview. Replace it with a higher-resolution export of the same slide for sharper artwork; preserve its filename or update the image path.

RSVP buttons open the visitor's messaging app; phone links open their dialer. The site does not collect or store responses. Desktop visitors can use the displayed phone numbers.

The Canva RSVP deadline typo “206” is rendered as 2026. The draft program's afternoon times are omitted because they conflict with the confirmed noon invitation time. Palette colors are presented as the celebration's palette, not mandatory guest attire colors. Google Fonts needs an internet connection; built-in serif/sans-serif fallbacks are provided.

References: https://www.weddingsph.com/jerc-and-sweet and the supplied Canva design. No photos or guest policies from the reference couple's site are reused.
