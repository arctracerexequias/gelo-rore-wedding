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
- Calendar start time: `assets/gelo-and-rore.ics`. It is 4:30 PM in the Philippines (08:30 UTC) on November 21, 2026, as confirmed by the couple.
- Invitation image: `assets/invitation.png`. This is the available Canva slide 2 preview. Replace it with a higher-resolution export of the same slide for sharper artwork; preserve its filename or update the image path.

RSVP buttons open the visitor's messaging app; phone links open their dialer. The site does not collect or store responses. Desktop visitors can use the displayed phone numbers.

The Canva RSVP deadline typo “206” is rendered as 2026. The detailed draft program is omitted; the wedding start time is 4:30 PM as requested. The six-color palette and matching illustration describe bridesmaids’ attire. Google Fonts needs an internet connection; built-in serif/sans-serif fallbacks are provided.

References: https://www.weddingsph.com/jerc-and-sweet and the supplied Canva design. No photos or guest policies from the reference couple's site are reused.

## Save-the-date video

`assets/save-the-date.mp4` is a web-optimized H.264/AAC copy of the supplied film. The responsive player appears after the celebration photos, with native playback controls, inline mobile playback, and no autoplay. It uses a supplied photo as its poster and waits until playback to load the video. Include this MP4 when uploading the assets folder to GitHub.

## Bridesmaids illustration

Active asset: `assets/bridesmaids-slide9.png`. Recolored from the supplied Canva slide 9 ladies illustration using built-in image generation. Four figures illustrate sunflower yellow, sage, lavender, and blush; all six palette swatches remain visible. The Canva design itself was not modified.

Prompt: Edit the supplied Canva slide 9 image for a website asset. Extract ONLY the group of FOUR ladies shown at the left under LADIES. Preserve these exact four simple black line-art figures, their silhouettes, poses, hair, faces, dress shapes, and hand-drawn style. Do not redesign them or add women. Color their dresses, left to right: sunflower yellow #f3ba30, sage green #abcbb3, lavender #bf99c8, blush pink #e9aba7. Keep black outlines and hair, use flat restrained fills, no watercolor, no realistic rendering. Remove all surrounding slide content: men, words, title, dots, swatch circles, white side margins. Arrange the original four ladies together at a comfortably legible scale on a plain warm cream #f7f2e7 background, full figures visible with margin, landscape image. This is a precise extraction and recoloring of existing artwork, not a new illustration.
