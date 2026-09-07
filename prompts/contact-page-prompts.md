# Contact Page Implementation Prompts

This file contains all the section-by-section implementation prompts for the Contact page.

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

## 1. Contact Page Hero Section

```
Read AGENTS.md first and follow it strictly.

Implement the Contact page Hero section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

Include the following elements in order from top to bottom:
- A pill badge centered at the top reading "CONTACT US" with a red border and red text
- A large bold headline split across two lines: "LET'S TALK ABOUT MAKING YOU THE #1" on the first line in white with "#1" in solid red, and "CONTRACTOR IN YOUR MARKET." on the second line where "CONTRACTOR" is styled with a red-to-orange gradient color (solid white on "IN YOUR MARKET.")
- A centered supporting subtitle in light gray reading "Fill out the form below and we'll be in touch within 24 hours."
- A horizontal row of four industry tags (Roofing, HVAC, Plumbing, Solar), each preceded by a red circular check icon
- A social proof row consisting of an overlapping group of 4 user avatars, a Facebook icon, a "5.0" rating with five yellow stars, and the text "Trusted by 200 Contractors Nationwide"
- A primary CTA button reading "GET YOUR FREE CUSTOM DESIGN" styled with a red-to-orange gradient background and white text
- Two laptop mockup images positioned at the bottom-left and bottom-right corners, both tilted slightly inward, emerging from rubble/debris at the base
- A dark background (near-black) with a subtle red radial gradient glow at the bottom center

Use the existing assets from the assets folder where appropriate. If any required image is missing (avatars, laptop mockups, debris), use a suitable placeholder from Unsplash or Picsum.

Make the hero fully responsive while preserving the design composition, headline impact, badge centering, laptop positioning, and CTA prominence across screen sizes (mobile, tablet, desktop).

Do not modify any other section or page.

@prompt_material/contact-hero.png
```

---

## 2. Get In Touch - Contact Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Get In Touch" contact section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a two-column section on a black background:

LEFT COLUMN (text content + contact info):
- A large bold headline split into two parts: "GET IN" in white and "TOUCH" styled with a red-to-orange gradient color (solid, not gradient on "GET IN")
- A body paragraph in light gray: "We work with roofing, HVAC, plumbing, solar, and construction companies across the United States. If you're serious about growing your business online, we want to hear from you."
- A second body paragraph in light gray: "Book a call directly via Calendly, or fill out the form and we'll reach out to schedule your free strategy session."
- Two contact info cards (dark rounded rectangles with subtle borders):
  - Email Card: A red rounded square icon tile containing a white envelope icon, followed by a small uppercase muted label "EMAIL US" and a bold white email "dean@kingcontractor.com"
  - Phone Card: A red rounded square icon tile containing a white phone icon, followed by a small uppercase muted label "CALL US, AVAILABLE 24/7" and a bold white phone number "+(407) 641-3731"
- A primary CTA button reading "BOOK A CALL" with a calendar icon, styled with a red-to-orange gradient background, white uppercase text, and a subtle red glow/shadow effect

RIGHT COLUMN (contact form card):
- A white rounded rectangle card with generous padding containing:
- A header line: "START HERE." in bold black followed by "IT'S FREE." styled with a red-to-orange gradient color (solid black on "START HERE.")
- A two-column input grid with the following fields (label uppercase + bold black, input pill-shaped with light gray background and placeholder text):
  - Row 1: "FULL NAME" (placeholder: John Smith) | "COMPANY NAME" (placeholder: Smith Roofing Co.)
  - Row 2: "PHONE NUMBER" (placeholder: (407) 000-0000) | "EMAIL ADDRESS" (placeholder: you@company.com)
  - Row 3: "WEBSITE URL" (placeholder: smithroofing.com) | "HOW MANY JOBS A WEEK" (placeholder: e.g. 3-5)
- A full-width single-column field: "SERVICES CURRENTLY RUNNING" (placeholder: SEO, Ads, none yet...)
- A full-width textarea field: "ANYTHING ELSE WE SHOULD KNOW?" (placeholder: Tell us about your goals...)
- A full-width primary CTA button: "GET MY FREE STRATEGY CALL" styled with a red background, white text, uppercase, and rounded corners with subtle glow
- A small centered disclaimer text in gray below the button: "No commitment. No hard sell. Just a straight conversation about what it would take to make you the most trusted contractor in your city."

TYPOGRAPHY & STYLING:
- Section background is black
- Headline is large, bold, uppercase
- Body copy is light gray, regular weight
- Contact info cards have dark backgrounds, soft rounded corners, and subtle borders
- Icon tiles are red rounded squares with white line icons
- Form card has white background with soft rounded corners
- Input fields are pill-shaped with subtle gray backgrounds and placeholder text in lighter gray
- Labels are bold, uppercase, small, and black
- CTA buttons have prominent red-to-orange gradients with glow effects

Use the existing assets from the assets folder where appropriate. No images required; use inline SVG icons for the email, phone, and calendar icons.

Make the section fully responsive: on smaller screens the left column (text + contact cards + button) should stack above the right column (form card), the two-column input grid should collapse to a single column within the form, and all padding should adjust for mobile while maintaining readability and CTA prominence.

Do not modify any other section or page.

@prompt_material/get-in-touch.png
```

---

## 3. Trusted By Contractors In All 50 States - Map Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Trusted By Contractors In All 50 States" map/coverage section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a two-column section on a light gray background:

LEFT COLUMN (text content + stats):
- A small red eyebrow label reading "COAST TO COAST"
- A large bold headline split across three lines: "TRUSTED BY CONTRACTORS IN" on the first two lines in black, and "ALL 50 STATES" on the third line styled with a red-to-orange gradient color (solid, not gradient on the first two lines)
- A body paragraph in medium gray: "From coast to coast, we've built brands for roofing, HVAC, plumbing, solar, and construction companies. Wherever you are, we can make you the name homeowners call first."
- A horizontal row of three stat blocks below the copy:
  - "200+" with label "BRANDS BUILT"
  - "50" with label "STATES SERVED"
  - "24h" with label "RESPONSE TIME"

RIGHT COLUMN (interactive map):
- A Google Maps embed showing a satellite/terrain view of the United States with a red location pin placed in the central/eastern US region
- A floating info card overlay at the top-left of the map showing:
  - "King Contractor Agency" as the business name in bold black
  - "4.3" rating followed by an orange star icon and "(16)" review count
  - An info icon
  - A small external link icon in a blue circle at the top-right
- Standard Google Maps UI elements: zoom controls (bottom-right), "Keyboard shortcuts" / "Map data" / "Imagery" attribution text at the bottom, and a small map toggle button at the bottom-left
- The map container has rounded corners

TYPOGRAPHY & STYLING:
- Section background is light gray (#F2F2F2 or similar)
- Headline is large, bold, uppercase, black with red-to-orange gradient on "ALL 50 STATES"
- Body copy is medium gray, regular weight, comfortable line-height
- Stat numbers are very large, bold, black
- Stat labels are small, uppercase, letter-spaced, dark gray
- Map container has rounded corners and subtle shadow
- Generous vertical padding above and below the section
- The two columns are visually balanced with text/stats on the left and map on the right

Use the existing assets from the assets folder where appropriate. For the map, embed a Google Maps iframe pointing to the United States (use an embedded map URL or a static map image as a fallback).

Make the section fully responsive: on smaller screens the headline, body copy, stats, and map should stack vertically with appropriate spacing, maintaining the typography hierarchy and the map's responsive aspect ratio.

Do not modify any other section or page.

@prompt_material/contractors-map.png
```

---

## Summary

This file contains **3 implementation prompts** for the Contact page:

1. **Contact Page Hero** - Main hero with "CONTACT US" badge, headline with "#1" inline accent and red gradient on "CONTRACTOR", industry tags, social proof, CTA, and laptop mockups
2. **Get In Touch Section** - Two-column layout with "GET IN TOUCH" headline, contact info cards (email/phone with red icon tiles), "BOOK A CALL" button on the left, and a white form card with 2-column input grid, services field, textarea, CTA button, and disclaimer on the right
3. **Trusted By Contractors In All 50 States** - Two-column section on light gray with "ALL 50 STATES" gradient headline, body copy, three stats blocks (200+ / 50 / 24h), and a Google Maps embed with info card overlay

All prompts follow the standard project pattern and include:
- Reference to AGENTS.md
- Detailed content specifications
- Asset guidance (use existing or placeholder)
- "Do not modify any other section" constraint
- Reference image path