# About Page Implementation Prompts

This file contains all the section-by-section implementation prompts for the About page. Each prompt follows the standard pattern used across the project.

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

## 1. About Page Hero Section

```
Read AGENTS.md first and follow it strictly.

Implement the About page Hero section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

Include the following elements in order from top to bottom:
- An "OUR STORY" pill badge centered at the top with red border and red text
- A large bold headline reading "WE BUILD AI WEBSITES THAT MAKE CONTRACTORS THE #1 CHOICE IN THEIR MARKET", where "#1 CHOICE" is highlighted with a red-to-orange gradient color
- A supporting subtitle reading "More traffic. Better lead quality. Sell more roofs."
- A horizontal row of four industry tags (Roofing, HVAC, Plumbing, Solar), each preceded by a red circular check icon
- A social proof row consisting of an overlapping group of 4 user avatars, a Facebook icon, a "5.0" rating with five yellow stars, and the text "Trusted by 200 Contractors Nationwide"
- A primary CTA button reading "GET YOUR FREE CUSTOM DESIGN" styled with a red-to-orange gradient background and white text
- Two laptop mockup images positioned at the bottom-left and bottom-right corners, both tilted slightly inward, emerging from rubble/debris at the base
- A dark background (near-black) with a subtle red radial gradient glow at the bottom center

Use the existing assets from the assets folder where appropriate. If any required image is missing (avatars, laptop mockups, debris), use a suitable placeholder from Unsplash or Picsum.

Make the hero fully responsive while preserving the design composition, headline impact, badge centering, laptop positioning, and CTA prominence across screen sizes (mobile, tablet, desktop).

Do not modify any other section or page.

@prompt_material/about-hero.png
```

---

## 2. Meet The Founder / My Story Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Meet The Founder / My Story, Your Results" section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a two-column section on a black background:

LEFT COLUMN (text content):
- A small red eyebrow label reading "MEET THE FOUNDER" at the top
- A large bold headline split across two lines: "MY STORY," on the first line and "YOUR RESULTS" on the second line. "YOUR RESULTS" must be styled in red (solid red, not gradient)
- A multi-paragraph founder story body text in light gray/white, including:
  - Opening paragraph about starting King Contractor Agency
  - A short standalone sentence "I decided to fix that."
  - A longer paragraph about working with 200+ contractors across the US
  - A paragraph describing the agency as a comprehensive brand system
  - A bold emphasized closing statement: "MY NAME GOES ON EVERY SINGLE PROJECT WE DELIVER. THAT IS THE STANDARD I HOLD MYSELF AND MY TEAM TO EVERY DAY."
  - A closing line: "If you're ready to be the #1 contractor in your city, I'm ready to make it happen."
- At the bottom-left: a small badge/seal icon, followed by "DEAN WHITE" in bold white and "Founder, King Contractor Agency" in smaller muted gray text underneath

RIGHT COLUMN (image):
- A large rounded-corner photograph showing a young man (the founder) smiling, wearing a black Raiders t-shirt, holding a phone displaying a "Roofing" mockup and a blue object, standing in front of a King Contractor Agency branded backdrop. The image must have rounded corners and dominate the right half of the layout.

Use the existing assets from the assets folder where appropriate. If any required image is missing (founder photo, badge/seal icon), use a suitable placeholder from Unsplash or Picsum.

Make the section fully responsive: on smaller screens the image should stack below the text content with appropriate spacing, and the headline should remain prominent.

Do not modify any other section or page.

@prompt_material/my-story.png
```

---

## 3. By The Numbers / Track Record Stats Section

```
Read AGENTS.md first and follow it strictly.

Implement the "By The Numbers / Track Record" stats section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a full-width stats band with a vibrant red background and white text:

LAYOUT (centered, top-to-bottom):
- A small white eyebrow label reading "BY THE NUMBERS" centered at the top
- A large bold white headline directly below reading "A TRACK RECORD CONTRACTORS TRUST"

STATS ROW (four equally-spaced columns separated by thin vertical dividers):
- Column 1: Large number "200+" with label "CONTRACTOR BRANDS BUILT" beneath
- Column 2: Large number "50" with label "STATES SERVED" beneath
- Column 3: Large number "100%" with label "CUSTOM BUILT" beneath
- Column 4: Large number "5.0" followed by a solid white star icon, with label "AVERAGE CLIENT RATING" beneath

TYPOGRAPHY & STYLING:
- All text is white on a saturated red background
- The numbers should be very large, bold, and condensed
- The labels are uppercase, letter-spaced, and smaller
- Thin vertical divider lines between each stat column (subtle white at low opacity)
- Generous vertical padding above and below the stats

Use the existing assets from the assets folder where appropriate. No images required for this section.

Make the section fully responsive: on smaller screens, the four stats should reflow into a 2x2 grid on tablet and a single column on mobile, while maintaining the centered alignment and bold visual impact.

Do not modify any other section or page.

@prompt_material/by-the-numbers.png
```

---

## 4. Our Mission / Most Trusted Name Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Our Mission / Most Trusted Name in Contractor Marketing" section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a centered-introduction section followed by a three-row feature list on a black background:

HEADER BLOCK (centered at top):
- A small red eyebrow label reading "THE REASON WE EXIST"
- A second small white eyebrow label directly below reading "OUR MISSION"
- A large bold headline split across three lines: "THE MOST TRUSTED NAME IN CONTRACTOR MARKETING." where "TRUSTED" is styled in red (solid red, not gradient)
- A centered subtitle paragraph in light gray, with the second sentence in bold white ("making you the contractor every homeowner in your city already knows before they even start searching.")

FEATURE LIST (three rows, separated by thin horizontal divider lines):

Row 01 - BUILD:
- Large red number "01" on the left
- A small rounded dark-gray icon tile containing a monitor/website icon
- Bold white label "BUILD"
- A short description: "Custom contractor websites built from scratch. Designed to stop the scroll, earn trust instantly, and turn visitors into booked jobs."
- A horizontal row of four pill-shaped tags with dark backgrounds and light borders: "CUSTOM DESIGN", "MOBILE-FIRST", "AI CHAT WIDGET", "LEAD FORMS"

Row 02 - GROW:
- Large red number "02" on the left
- A small rounded dark-gray icon tile containing a trending-up/graph icon
- Bold white label "GROW"
- A short description: "SEO, LSA, and paid advertising systems that put your business in front of homeowners who are actively searching for a contractor in your city right now."
- A horizontal row of four pill-shaped tags: "SEO", "GOOGLE LSA", "FACEBOOK ADS", "PPC"

Row 03 - DOMINATE:
- Large red number "03" on the left
- A small rounded dark-gray icon tile containing a crown icon
- Bold white label "DOMINATE"
- A short description: "Own your market. Outrank every competitor. Become the name homeowners in your area recognize, trust, and call first."
- A horizontal row of four pill-shaped tags: "GOOGLE MAPS", "REVIEW ENGINE", "REPUTATION", "RETARGETING"

Each row is laid out as: [Number] [Icon + Label] on the left, [Description + Tags] on the right, with thin horizontal dividers between rows.

Use the existing assets from the assets folder where appropriate. No images required; use inline SVG icons for the three feature rows.

Make the section fully responsive: on smaller screens the description and tags should stack beneath the number/icon/label block, and pill tags should wrap naturally.

Do not modify any other section or page.

@prompt_material/our-mission.png
```

---

## 5. What It's Like To Work With Us Section

```
Read AGENTS.md first and follow it strictly.

Implement the "What It's Like To Work With Us" section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a 2x2 grid of feature cards on a light gray background:

HEADER (top-left aligned, not centered):
- A large bold headline split across two lines: "WHAT IT'S LIKE TO" on the first line in black, and "WORK WITH US" on the second line in red (solid red, not gradient)

CARD GRID (2 columns x 2 rows, equal-sized cards with generous padding and rounded corners, white card backgrounds with subtle borders):

Card 01 - STRATEGY FIRST:
- A small rounded black icon tile containing a target/crosshair icon
- A large red number "01" beside the icon
- Bold black title "STRATEGY FIRST"
- Description text: "Before we touch a single design element, we get deep into your market, your competitors, and your goals. Everything we build is engineered around winning in your specific city."

Card 02 - BUILT FOR RESULTS:
- A small rounded black icon tile containing a bar chart/analytics icon
- A large red number "02" beside the icon
- Bold black title "BUILT FOR RESULTS"
- Description text: "Every colour, every headline, and every page layout exists for one reason: turning visitors into booked jobs."

Card 03 - CONTRACTORS ONLY:
- A small rounded black icon tile containing a shield with checkmark icon
- A large red number "03" beside the icon
- Bold black title "CONTRACTORS ONLY"
- Description text: "Roofing, HVAC, plumbing, solar, construction. This is all we do. We know your customers, your buying journey, and what makes homeowners pick up the phone."

Card 04 - ONGOING SUPPORT:
- A small rounded black icon tile containing a headset/support icon
- A large red number "04" beside the icon
- Bold black title "ONGOING SUPPORT"
- Description text: "We don't hand you a website and go silent. We stay in your corner, updating, optimising, and making sure your site keeps performing long after launch."

TYPOGRAPHY & STYLING:
- Card titles are bold, uppercase, black
- Description text is medium gray, regular weight
- Section background is light gray (#F2F2F2 or similar)
- Cards have white backgrounds, soft rounded corners, and subtle borders or shadow
- Icon tiles are small black rounded squares with white line icons
- Numbers (01-04) are large, bold, and red

Use the existing assets from the assets folder where appropriate. No images required; use inline SVG icons for the four feature cards.

Make the section fully responsive: on smaller screens the grid should collapse to a single column with each card stacking vertically, maintaining consistent card width and internal padding.

Do not modify any other section or page.

@prompt_material/work-with-us.png
```

---

## 6. Our Promise / Satisfaction Guarantee Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Our Promise / Satisfaction Guarantee" section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a two-column section inside a large rounded card on a black page background:

CARD CONTAINER:
- A wide rounded rectangle with a dark background, subtle border, and very faint red radial glow centered behind the content
- Generous internal padding

LEFT COLUMN:
- A large gold "Satisfaction Guarantee" badge/seal image featuring a crowned figure in the center, surrounded by a sunburst/serrated gold border, with a banner reading "SATISFACTION GUARANTEE" across the middle and "KING CONTRACTOR AGENCY" curved around the top, plus five small stars at the bottom

RIGHT COLUMN (text content, vertically centered):
- A small red eyebrow label reading "OUR PROMISE"
- A large bold headline split across two lines: "WE WORK FOR FREE UNTIL" on the first line in white, and "YOU'RE SATISFIED." on the second line in red (solid red, not gradient)
- A body paragraph in light gray: "Five drafts, ten redesigns, a hundred tweaks, if that's what it takes to get it right, that's what we do."
- A second body paragraph in light gray: "No one else in the contractor space makes that promise, and it's why Dean puts his name on every single project."

TYPOGRAPHY & STYLING:
- Card background is near-black with a subtle red glow behind the badge
- Headline text is bold and large
- Eyebrow text is small, uppercase, red, letter-spaced
- Body text is light gray and easy to read

Use the existing assets from the assets folder where appropriate. If the gold guarantee badge image is missing, use a suitable placeholder from Unsplash or Picsum (gold seal/medal).

Make the section fully responsive: on smaller screens the badge should stack above the text content with the headline and paragraphs remaining prominent, and the card padding should adjust for mobile.

Do not modify any other section or page.

@prompt_material/our-promise.png
```

---

## 7. Ready To Be The #1 Contractor - Contact Form Section

```
Read AGENTS.md first and follow it strictly.

Implement the "Ready To Be The #1 Contractor In Your Market?" contact form section exactly as shown in the attached design, with the spacing, structure, positioning, typography, imagery, and visual elements accurately reproduced.

This is a centered-form section on a black page background:

HEADER (centered at top):
- A large bold headline split across two lines: "READY TO BE THE #1" on the first line in white with "#1" in solid red, and "CONTRACTOR IN YOUR MARKET?" on the second line in white
- A centered subtitle in light gray: "Fill out the form below and we'll be in touch within 24 hours to book your free custom strategy call."

FORM CARD (centered below header, white background, large rounded corners, generous padding):
- A two-column input grid with the following fields (label uppercase + bold black, input pill-shaped with light gray background and placeholder text):
  - Row 1: "FULL NAME" (placeholder: John Smith) | "COMPANY NAME" (placeholder: Smith Roofing Co.)
  - Row 2: "PHONE NUMBER" (placeholder: (407) 555-0123) | "EMAIL ADDRESS" (placeholder: you@company.com)
  - Row 3: "WEBSITE URL" (placeholder: smithroofing.com) | "HOW MANY JOBS DO YOU DO A WEEK?" (placeholder: e.g. 5-10 jobs per week)
- A full-width single-column field:
  - "WHAT SERVICES ARE YOU CURRENTLY RUNNING?" (placeholder: SEO, Google Ads, social media, website, etc.)
- A full-width primary CTA button at the bottom: "GET MY FREE STRATEGY CALL" styled with a red background, white text, uppercase, and rounded corners

TYPOGRAPHY & STYLING:
- Form card has white background with soft rounded corners
- Input fields are pill-shaped with subtle gray backgrounds and placeholder text in lighter gray
- Labels are bold, uppercase, small, and black
- CTA button has a slight red glow/shadow effect
- Section background is black

Use the existing assets from the assets folder where appropriate. No images required for this section.

Make the section fully responsive: on smaller screens the two-column input grid should collapse to a single column with all inputs stacking vertically, and the form card padding should adjust for mobile while maintaining readability and CTA prominence.

Do not modify any other section or page.

@prompt_material/contact-form.png
```

---

## Summary

This file contains **7 implementation prompts** for the About page:

1. **About Page Hero** - Main hero with OUR STORY badge, headline, industry tags, social proof, CTA, and laptop mockups
2. **Meet The Founder / My Story** - Two-column founder story with image
3. **By The Numbers** - Red stats band with 4 key metrics
4. **Our Mission** - Three-row numbered feature list (BUILD/GROW/DOMINATE)
5. **What It's Like To Work With Us** - 2x2 grid of feature cards on light gray
6. **Our Promise / Satisfaction Guarantee** - Two-column card with gold badge
7. **Contact Form / CTA** - Centered form with red CTA button

All prompts follow the standard project pattern and include:
- Reference to AGENTS.md
- Detailed content specifications
- Asset guidance (use existing or placeholder)
- "Do not modify any other section" constraint
- Reference image path