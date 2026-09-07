# Portfolio Page Implementation Prompts

This file contains all the section-by-section implementation prompts for the Portfolio page.

---

## Prompt Pattern Template

```
Read AGENTS.md first and follow it strictly.

Implement the [SECTION/FEATURE] exactly as shown in the attached design, with the spacing, structure, layout, and visual elements accurately reproduced.

[Specific content/functionality that the section needs.]

Use assets from the assets folder where appropriate. If any required image is missing, use a suitable placeholder from Unsplash or Picsum.

Make the [SECTION] responsive while preserving the design and composition across screen sizes.

Do not modify any other section.

@prompt_material/[reference-image].png
```

---

## 1. Portfolio Page Hero Section

```
Read AGENTS.md first and follow it strictly.

Implement the Portfolio page Hero section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

Include the following elements in order from top to bottom:
- A pill badge centered at the top reading "WEBSITE RESULTS" with a red border and red text
- A large bold headline split across three lines: "200+ CONTRACTOR WEBSITES BUILT. EVERY ONE WE'RE" on the first two lines in white, and "PROUD TO PUT OUR NAME ON." on the third line where "PROUD" is styled with a red-to-orange gradient color (solid white on "TO PUT OUR NAME ON.")
- A centered supporting subtitle in light gray reading "Real brands. Real results. Built for contractors who are serious about winning."
- A horizontal row of four industry tags (Roofing, HVAC, Plumbing, Solar), each preceded by a red circular check icon
- A social proof row consisting of an overlapping group of 4 user avatars, a Facebook icon, a "5.0" rating with five yellow stars, and the text "Trusted by 200 Contractors Nationwide"
- A primary CTA button reading "GET YOUR FREE CUSTOM DESIGN" styled with a red-to-orange gradient background and white text
- Two laptop mockup images positioned at the bottom-left and bottom-right corners, both tilted slightly inward, emerging from rubble/debris at the base
- A dark background (near-black) with a subtle red radial gradient glow at the bottom center

Use the existing assets from the assets folder where appropriate. If any required image is missing (avatars, laptop mockups, debris), use a suitable placeholder from Unsplash or Picsum.

Make the hero fully responsive while preserving the design composition, headline impact, badge centering, laptop positioning, and CTA prominence across screen sizes (mobile, tablet, desktop).

Do not modify any other section or page.

@prompt_material/portfolio-hero.png
```

---

## 2. Portfolio Gallery Section

```
Read AGENTS.md first and follow it strictly.

Implement the Portfolio Gallery section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a filterable portfolio gallery section on a black background:

FILTER TABS (centered at top, horizontal row of pill buttons):
- A row of 4 pill-shaped filter buttons:
  - "ALL WORK" (active state: solid red background, white text)
  - "ROOFING" (inactive: dark background, white text, subtle border)
  - "CONSTRUCTION" (inactive: dark background, white text, subtle border)
  - "EXTERIOR" (inactive: dark background, white text, subtle border)

PORTFOLIO GRID (3 columns x 2 rows, equal-sized cards):

Card 01 - COLORADO PREFERRED ROOFING:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the Colorado Preferred Roofing logo and website mockup on a blue background)
- The browser frame has traffic light buttons (red, yellow, green) at the top-left and a subtle address bar
- Below the image: bold white uppercase title "COLORADO PREFERRED ROOFING"
- A red uppercase category label "ROOFING" beneath the title

Card 02 - HORVATH ROOFING:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the Horvath Roofing logo and website mockup)
- The browser frame has traffic light buttons at the top-left
- Below the image: bold white uppercase title "HORVATH ROOFING"
- A red uppercase category label "ROOFING" beneath the title

Card 03 - NEW YORK ROOFERS:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the New York Roofers logo and website mockup)
- The browser frame has traffic light buttons at the top-left
- Below the image: bold white uppercase title "NEW YORK ROOFERS"
- A red uppercase category label "ROOFING" beneath the title

Card 04 - NEXGEN EXTERIORS:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the Nexgen Exteriors logo and website mockup)
- The browser frame has traffic light buttons at the top-left
- Below the image: bold white uppercase title "NEXGEN EXTERIORS"
- A red uppercase category label "ROOFING" beneath the title

Card 05 - PANTHER ROOFING:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the Panther Roof logo and website mockup)
- The browser frame has traffic light buttons at the top-left
- Below the image: bold white uppercase title "PANTHER ROOFING"
- A red uppercase category label "ROOFING" beneath the title

Card 06 - ROCKY ROOFING:
- A browser-frame mockup image at the top showing a laptop with the client's website displayed (featuring the Rocky Roofing logo and website mockup)
- The browser frame has traffic light buttons at the top-left
- Below the image: bold white uppercase title "ROCKY ROOFING"
- A red uppercase category label "ROOFING" beneath the title

TYPOGRAPHY & STYLING:
- Section background is black
- Cards have dark backgrounds with soft rounded corners and subtle borders
- Browser-frame mockups feature a dark browser chrome with traffic light buttons and address bar
- Card titles are bold, uppercase, white
- Category labels are red, uppercase, smaller text
- Filter buttons are pill-shaped with consistent padding
- Active filter button uses solid red background with white text
- Inactive filter buttons use dark background with subtle border

Use the existing assets from the assets folder where appropriate. If any portfolio mockup image is missing, use a suitable placeholder from Unsplash or Picsum (laptop with website mockup).

Make the section fully responsive: on smaller screens the 3-column grid should reflow to 2 columns on tablet and a single column on mobile, while maintaining card proportions and the filter tab layout.

Do not modify any other section or page.

@prompt_material/portfolio-gallery.png
```

---

## 3. Your Brand Could Be Right Here - CTA Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Your Brand Could Be Right Here" portfolio CTA section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a two-column section inside a large rounded card with a red dashed border on a black page background:

CARD CONTAINER:
- A wide rounded rectangle with a dark background, red dashed border, and very faint red radial glow centered behind the content
- Generous internal padding

LEFT COLUMN (badge image):
- A large gold "Satisfaction Guarantee" badge/seal image featuring a crowned figure in the center, surrounded by a sunburst/serrated gold border, with a banner reading "SATISFACTION GUARANTEE" across the middle and "KING CONTRACTOR AGENCY" curved around the top, plus five small stars at the bottom
- The badge has a subtle red glow behind it

RIGHT COLUMN (text content, vertically centered):
- A large bold headline split across two lines: "YOUR BRAND COULD BE" on the first line in white, and "RIGHT HERE." on the second line styled with a red-to-orange gradient color (solid, not gradient on "YOUR BRAND COULD BE")
- A body paragraph in light gray: "200+ contractors trusted us to build their online presence. The ones you see above are ranking higher, generating more leads, and closing more jobs because of it."

TYPOGRAPHY & STYLING:
- Card background is near-black with a red dashed border
- Headline text is bold and large
- Body text is light gray and easy to read
- Badge has a subtle red glow effect
- Generous vertical padding inside the card

Use the existing assets from the assets folder where appropriate. If the gold guarantee badge image is missing, use a suitable placeholder from Unsplash or Picsum (gold seal/medal).

Make the section fully responsive: on smaller screens the badge should stack above the text content with the headline and paragraph remaining prominent, and the card padding should adjust for mobile while maintaining the dashed border effect.

Do not modify any other section or page.

@prompt_material/your-brand-here.png
```

---

## 4. Portfolio Contact Form Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Ready To Build Something Your Competitors Will Lose Sleep Over?" portfolio contact form section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a centered-form section on a black page background:

HEADER (centered at top):
- A large bold headline split across three lines: "READY TO BUILD SOMETHING YOUR COMPETITORS WILL" on the first two lines in white, and "LOSE SLEEP OVER?" on the third line where "LOSE SLEEP OVER?" is styled with a red-to-orange gradient color (solid white on the rest of the headline)
- A centered subtitle in light gray: "Fill out the form below and we'll be in touch within 24 hours to book your free custom design call."

FORM CARD (centered below header, white background, large rounded corners, generous padding):
- A two-column input grid with the following fields (label uppercase + bold black, input pill-shaped with light gray background and placeholder text):
  - Row 1: "FULL NAME" (placeholder: John Smith) | "COMPANY NAME" (placeholder: Smith Roofing Co.)
  - Row 2: "PHONE NUMBER" (placeholder: (407) 555-0123) | "EMAIL ADDRESS" (placeholder: you@company.com)
  - Row 3: "WEBSITE URL" (placeholder: smithroofing.com) | "HOW MANY JOBS DO YOU DO A WEEK?" (placeholder: e.g. 5-10 jobs per week)
- A full-width single-column field:
  - "WHAT SERVICES ARE YOU CURRENTLY RUNNING?" (placeholder: SEO, Google Ads, social media, website, etc.)
- A full-width primary CTA button at the bottom: "GET YOUR FREE CUSTOM DESIGN" styled with a red background, white text, uppercase, and rounded corners

TYPOGRAPHY & STYLING:
- Form card has white background with soft rounded corners
- Input fields are pill-shaped with subtle gray backgrounds and placeholder text in lighter gray
- Labels are bold, uppercase, small, and black
- CTA button has a slight red glow/shadow effect
- Section background is black

Use the existing assets from the assets folder where appropriate. No images required for this section.

Make the section fully responsive: on smaller screens the two-column input grid should collapse to a single column with all inputs stacking vertically, and the form card padding should adjust for mobile while maintaining readability and CTA prominence.

Do not modify any other section or page.

@prompt_material/portfolio-contact-form.png
```

---

## Summary

This file contains **4 implementation prompts** for the Portfolio page:

1. **Portfolio Page Hero** - Main hero with "WEBSITE RESULTS" badge, headline with "PROUD" accent, industry tags, social proof, CTA, and laptop mockups
2. **Portfolio Gallery** - Filterable 3x2 grid of portfolio cards with browser-frame mockups, filter tabs (ALL WORK / ROOFING / CONSTRUCTION / EXTERIOR), and category labels
3. **Your Brand Could Be Right Here CTA** - Two-column card with red dashed border, gold guarantee badge on the left, headline with "RIGHT HERE." accent on the right
4. **Portfolio Contact Form** - Centered form with headline featuring "LOSE SLEEP OVER?" accent, white form card with 2-column input grid, and red CTA button

All prompts follow the standard project pattern and include:
- Reference to AGENTS.md
- Detailed content specifications
- Asset guidance (use existing or placeholder)
- "Do not modify any other section" constraint
- Reference image path