# Gnana Yadeswar — portfolio design guide

## One visual language

Use a dark canvas, silver display headings, violet accents, rounded surfaces, fine borders, and restrained motion. The toolkit and interactive notebook use the same pale violet surface and dark ink. The notebook's layered pages express a personal story within this system.

The shared values live in `src/design-tokens.css`. Reuse those values for new interface surfaces and text. Project photographs, product screenshots, brand marks, and decorative drawings may retain their own colours.

## Typography

Use Kanit throughout, including the SVG annotations. Use bold uppercase section headings, medium-weight card and chapter titles, and sentence case for paragraphs and chapter controls. Compact navigation, project actions, and contact actions use uppercase labels. Small uppercase labels identify sections and categories. Italic annotations use the same font, not a separate handwriting or serif typeface.

Keep paragraph sizes and line spacing close to the existing project and toolkit copy. At small widths, let text wrap and surfaces grow. Never truncate personal stories, project facts, or contact details to force a fixed height.

## Layout and interaction

Retain the existing section order: Home, Selected work, About, Experience, Education, Toolkit, Contact. Four projects remain, with GoThreadly featured first. Vaishnav Bazaar is excluded.

Keep consistent section gutters, numbered labels, fine dividers, rounded image frames, and pill-shaped actions. The notebook has three visitor-controlled chapters with Previous, Next, Replay, and accessible tabs. Its drawings support the story; they are not evidence of unprovided achievements.

Use one dedicated contact section at the bottom. LinkedIn is the primary action and email is a separate option. The Home section links to About; the navigation can link to Contact. Do not repeat contact buttons in Home or About.

## Voice and facts

Write in a personal, concise, confident voice. Use plain words and first person for Yadeswar's own work. Attribute team revenue to the team. Describe planned product capabilities as planned. Avoid expert claims, invented outcomes, motivational slogans, and unnecessary corporate language.

Use British/Indian spelling consistently: maths, fulfilment, enquiries, organised/organising. Preserve official names and supplied project URLs. Spell the instrument **mridangam**. Use GoThreadly, StockFlow, Make, n8n, Google AI Studio, Google Stitch, Microsoft Excel, PowerPoint, Canva, Figma, Midjourney, Lovable, Cursor, Zoho ERP, and Zoho OMS consistently.

The final About chapter looks forward with curiosity and excitement about building. It does not repeat the project list or use fresher, beginner, or expert labels. StockFlow remains in Selected work.

The school story is specific: in Class 9, Yadeswar focused on cricket while training for under-16 competition, failed the final maths exam, and took a retest. The lesson concerns balancing cricket and school and managing multiple commitments. Do not add a retest result, examination score, selection outcome, or later academic achievement.

## Motion and accessibility

Use short fades, small translations, gentle floating objects, and subtle page turns. Visitors control the narrative; no autoplay, scroll trapping, or forced reading order. Respect reduced motion in CSS and Framer Motion. Maintain visible keyboard focus, labelled controls, readable contrast, and decorative SVGs hidden from assistive technology.

## Before publishing

Check every section and expanded project description. Exercise all three chapters, previous/next/replay, arrow keys, Home/End, navigation, and image links. Verify one primary contact button, four projects, three experiences, two qualifications, and thirteen supplied tools. Check phone, tablet, and desktop layouts for clipping and overflow. Confirm exact link destinations, locally hosted images, and anonymous access to the production URL. Build with TypeScript checking, save source on GitHub, then deploy the same public Vercel address.
