// ─────────────────────────────────────────────────────────────
// Static data — separated from component logic (Open/Closed)
// Components consume this data without needing modification
// when content changes.
// ─────────────────────────────────────────────────────────────

import type { HeroImage, Project, BTSItem, GraphicsShowcaseItem, ToolItem, CertificationItem, BeyondDesignItem, SocialLink, Testimonial, ClientId } from '../types';

export const HERO_IMAGES: HeroImage[] = [
  {
    src: '/images/emma-profile-pic.jpg',
    alt: 'Emmanuel profile picture',
  },
  {
      src: '/images/hero-img-3.jpg',
      alt: 'Film set lighting',
    },
    {
      src: '/images/hero-img-2.png',
    alt: 'Cinematic frame',
  },
  {
    src: 'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?q=80&w=1887&auto=format&fit=crop',
    alt: 'Urban movement',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'Klyn:Clo',
    category: 'Streetwear Fashion/Lifestyle',
    year: '2025',
    role: 'Brand Designer',
    client: 'Klyn:Clo',
    tools: 'Adobe Photoshop, Adobe Illustrator',
    desc: 'Klyn:Clo is an affordable everyday fashion brand with a streetwear edge. Guided by the tagline “Clean Cuts. Clear Style,” the brand champions bold, versatile, and comfortable clothing that empowers people to wear their identity without the premium price tag. It blends cultural authenticity with modern design, creating fashion that’s approachable, expressive, and made for movement.',
    cover: 'images/emma-brand-works/klynClo/klynclo-img (25).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/klynClo/klynclo-img (1).png',
      'images/emma-brand-works/klynClo/klynclo-img (2).png',
      'images/emma-brand-works/klynClo/klynclo-img (3).png',
      'images/emma-brand-works/klynClo/klynclo-img (4).png',
      'images/emma-brand-works/klynClo/klynclo-img (5).png',
      'images/emma-brand-works/klynClo/klynclo-img (6).png',
      'images/emma-brand-works/klynClo/klynclo-img (7).png',
      'images/emma-brand-works/klynClo/klynclo-img (8).png',
      'images/emma-brand-works/klynClo/klynclo-img (9).png',
      'images/emma-brand-works/klynClo/klynclo-img (10).png',
      'images/emma-brand-works/klynClo/klynclo-img (19).png',
      'images/emma-brand-works/klynClo/klynclo-img (20).png',
      'images/emma-brand-works/klynClo/klynclo-img (21).png',
      'images/emma-brand-works/klynClo/klynclo-img (22).png',
      'images/emma-brand-works/klynClo/klynclo-img (25).png',
      'images/emma-brand-works/klynClo/klynclo-img (28).png',
      'images/emma-brand-works/klynClo/klynclo-img (33).png',
    ],
  },
  {
    id: 1,
    title: 'Open Discussion',
    category: 'Media',
    year: '2024',
    role: 'Brand Designer',
    client: 'Rendezvous',
    tools: 'Adobe Photoshop, Adobe Illustrator',
    desc: 'Open Discussion is a dynamic platform created under the Rendezvouz brand, designed to ignite curiosity and foster enlightened thinking. Rooted in the belief that meaningful conversations drive both personal and collective growth, the brand serves as a hub for compelling content that challenges norms, sparks new ideas, and cultivates a community of reflective, forward‑thinking individuals. Through open dialogue and fresh perspectives, Open Discussion champions objectivity, understanding, and thoughtful engagement - bridging realism with idealism in every conversation.',
    cover: 'images/emma-brand-works/open-discussion/open-disc-img (9).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/open-discussion/open-disc-img (1).png',
      'images/emma-brand-works/open-discussion/open-disc-img (2).png',
      'images/emma-brand-works/open-discussion/open-disc-img (3).png',
      'images/emma-brand-works/open-discussion/open-disc-img (4).png',
      'images/emma-brand-works/open-discussion/open-disc-img (5).png',
      'images/emma-brand-works/open-discussion/open-disc-img (6).png',
      'images/emma-brand-works/open-discussion/open-disc-img (7).png',
      'images/emma-brand-works/open-discussion/open-disc-img (8).png',
      'images/emma-brand-works/open-discussion/open-disc-img (9).png',
      'images/emma-brand-works/open-discussion/open-disc-img (10).png',
      'images/emma-brand-works/open-discussion/open-disc-img (13).png',
    ],
  },
  {
    id: 2,
    title: 'iDiploy',
    category: 'Digital Solutions Agency',
    year: '2025',
    role: 'Logo Designer',
    client: 'iDiploy',
    tools: 'Adobe illustrator, Adobe Photoshop',
    desc: 'IDiploy is a forward‑thinking digital solutions agency specializing in web and mobile application development, complemented by strategic consulting for businesses and founders. The brand positions itself as a trusted partner bridging the gap between ideas and execution; helping clients hire, manage, and scale technical teams. IDiploy’s identity reflects clarity, precision, and innovation, embodying the dual strength of design thinking and technical expertise.',
    cover: '/images/emma-brand-works/iDiploy/iDiploy-img (5).png',
    videoUrl: '',
    gallery: [
      '/images/emma-brand-works/iDiploy/iDiploy-img (1).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (2).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (3).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (4).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (5).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (6).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (7).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (9).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (10).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (11).png',
      '/images/emma-brand-works/iDiploy/iDiploy-img (13).png',
    ],
  },
  {
    id: 3,
    title: '3riumf',
    category: 'Motion Design',
    year: '2023',
    role: 'Logo Design',
    client: '3riumf Studios',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: '3riumf Studios is a motion design agency built at the intersection of creativity and technology, dedicated to helping brands move audiences emotionally and visually. The project centers on crafting purposeful motion experiences that elevate brand identity and storytelling.Through a combination of striking explainer videos and memorable brand animations, 3riumf Studios demonstrates how design can inspire, engage, and drive action. The focus was on developing a clear, impactful visual language - simple, sharp, and full of intent - that cuts through the noise of modern media.The final brand narrative positions 3riumf Studios as a catalyst for momentum, where every frame contributes to a brand’s triumph. It’s not just about creating videos - it’s about creating victories, one frame at a time.',
    cover: '/images/emma-brand-works/3riumf/3riumf (8).png',
    videoUrl: '',
    gallery: [
      '/images/emma-brand-works/3riumf/3riumf (1).png',
      '/images/emma-brand-works/3riumf/3riumf (2).png',
      '/images/emma-brand-works/3riumf/3riumf (3).png',
      '/images/emma-brand-works/3riumf/3riumf (4).png',
      '/images/emma-brand-works/3riumf/3riumf (5).png',
      '/images/emma-brand-works/3riumf/3riumf (6).png',
      '/images/emma-brand-works/3riumf/3riumf (7).png',
    ],
  },
  {
    id: 4,
    title: 'Psalmuels Africa',
    category: 'Fashion',
    year: '2025',
    role: 'Logo Designer',
    client: 'Amoo Samuel',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Psalmuels Africa is a fashion brand dedicated to celebrating cultural diversity through innovative design. Inspired by the rich tapestry of global cultures, the brand merges traditional African craftsmanship with contemporary aesthetics. Each collection showcases the beauty of heritage and modernity, empowering individuals to express their unique identity through fashion that transcends boundaries and unites communities worldwide.',
    cover: 'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (6).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (1).png',
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (2).png',
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (3).png',
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (4).png',
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (5).png',
      'images/emma-brand-works/psamuels-africa/psalmuels-africa-img (6).png',
    ],
  },
  {
    id: 5,
    title: 'Abby Couture',
    category: 'Fashion',
    year: '2025',
    role: 'Brand Designer',
    client: 'Abiodun Olatunbosun',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Abby Couture is a refined African heritage fashion brand that celebrates culture through modern tailoring and timeless craftsmanship. Rooted in tradition yet elevated by contemporary design, the brand creates ready‑to‑wear pieces for men and women that embody confidence, elegance, and pride in African identity. Each collection reflects a balance of bold colors, rich fabrics, and artisanal detail - an authentic expression of African heritage reimagined for today’s fashion landscape.',
    cover: 'images/emma-brand-works/abby-couture/abby-couture-img (5).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/abby-couture/abby-couture-img (2).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (3).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (1).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (7).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (8).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (4).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (6).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (9).png',
      'images/emma-brand-works/abby-couture/abby-couture-img (10).png',
    ],
  },
  {
    id: 6,
    title: 'Director Extraordinaire',
    category: 'Film/Videography/Creative Media',
    year: '2025',
    role: 'Logo Designer',
    client: 'Director Extraordinaire',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Director Extraordinaire is a visionary brand in videography and filmmaking, dedicated to crafting bold, unforgettable visual stories that inspire emotion and command attention. At its core lies a passion for storytelling - blending creativity with technical mastery to produce films that are both visually stunning and narratively compelling. Every project reflects originality, precision, and a signature mark of brilliance, shaping cinematic experiences that resonate and endure.',
    cover: 'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (10).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (7).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (6).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (5).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (4).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (3).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (2).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (1).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (8).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (9).png',
      'images/emma-brand-works/director-extraordinaire/director-extraordinaire-img (10).png',
    ],
  },
  {
    id: 7,
    title: 'Christ Connect',
    category: 'Faith-Based Organization',
    year: '2025',
    role: 'Logo Designer',
    client: 'Christ Connect',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Christ Connect is a global Christian movement with a divine mandate to transcend borders and barriers through the gospel of salvation. Rooted in truth and energized by grace, the organization seeks to reach nations, cultivate intentional discipleship, and inspire societal transformation through the power of Christ. More than a mission, Christ Connect represents a movement - one that embodies purpose, unity, and lasting impact.',
    cover: 'images/emma-brand-works/christ-connect/christ-connect-img (1).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/christ-connect/christ-connect-img (8).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (7).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (6).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (5).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (4).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (3).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (2).png',
      'images/emma-brand-works/christ-connect/christ-connect-img (1).png',
    ],
  },
  {
    id: 8,
    title: 'Marsred',
    category: 'Blockchain',
    year: '2025',
    role: 'Logo Designer',
    client: 'Marsred',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Marsred is a next‑generation blockchain protocol built to explore trustless systems at the edge of innovation. Designed for developers, explorers, and systems thinkers, the brand embodies a spirit of digital rebellion and forward‑thinking creativity. Its identity reflects precision, clarity, and disruption - positioning Marsred as a pioneer in decentralized technology and a catalyst for progress in the blockchain frontier.',
    cover: 'images/emma-brand-works/marsred/marsred-img (2).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/marsred/marsred-img (8).png',
      'images/emma-brand-works/marsred/marsred-img (7).png',
      'images/emma-brand-works/marsred/marsred-img (6).png',
      'images/emma-brand-works/marsred/marsred-img (5).png',
      'images/emma-brand-works/marsred/marsred-img (4).png',
      'images/emma-brand-works/marsred/marsred-img (3).png',
      'images/emma-brand-works/marsred/marsred-img (2).png',
      'images/emma-brand-works/marsred/marsred-img (1).png',
    ],
  },
  {
    id: 9,
    title: 'Sagegrid',
    category: 'Smart Technology & Energy',
    year: '2025',
    role: 'Logo Designer',
    client: 'Sagegrid',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    desc: 'Sagegrid is a modern electrical solutions company that bridges traditional craftsmanship with cutting‑edge innovation. The brand delivers a comprehensive suite of services - from high‑standard home installations to advanced smart automation and sustainable solar integrations. With a focus on reliability, safety, and efficiency, Sagegrid builds the “nervous system” of modern infrastructure, ensuring seamless power delivery and intelligent connectivity for residential and commercial spaces alike.',
    cover: 'images/emma-brand-works/sagegrid/sagegrid-img (5).png',
    videoUrl: '',
    gallery: [
      'images/emma-brand-works/sagegrid/sagegrid-img (6).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (4).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (3).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (2).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (1).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (5).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (7).png',
      'images/emma-brand-works/sagegrid/sagegrid-img (8).png',
    ],
  },
];

export const BTS_DATA: BTSItem[] = [
  {
    title: 'Arri Alexa Mini LF Setup',
    location: 'London Studio',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    desc: 'Rigging the primary A-Cam for the high-speed tracking shots required for the Midnight City opening sequence. The large format sensor gave us that crucial depth of field drop-off.',
    notes: 'Lenses: Signature Primes. Handled exclusively by 1st AC Markus.',
  },
  {
    title: 'Blocking Scene 4',
    location: 'On Location, Essex',
    img: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1974&auto=format&fit=crop',
    desc: 'Working closely with lead talent to nail the emotional beat before losing natural light. The wind added an unscripted intensity to the performance.',
    notes: 'Shoot time window: 45 minutes of golden hour. We got it on take 3.',
  },
  {
    title: 'Grade & Finish Session',
    location: 'Post-House, Soho',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    desc: 'Finalizing the look for the Nike Aura campaign. Pushing the mid-tones into a cooler, metallic space while preserving natural skin tones for the athletes.',
    notes: 'Node structure pushed to limits. Print film emulation applied at timeline level.',
  },
  {
    title: 'Stage Prep',
    location: 'Lagos, Nigeria',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
    desc: 'Pre-lighting the massive soundstage for the pivotal concert scene. Managing over 50 extras and coordinating volumetric lighting cues.',
    notes: 'Haze machines running at 40%. Custom DMX profiles built on set.',
  },
];

export const TESTIMONIALS: Record<ClientId, Testimonial> = {
  rendezvous: {
    text: '"Akin completely understood our vision for Open Discussion. The brand identity he crafted captures the essence of intellectual curiosity and open dialogue — bold, thoughtful, and unmistakably ours."',
    name: 'Rendezvous Team',
    role: 'Founders, Rendezvous',
  },
  idiploy: {
    text: '"Working with Akin was seamless. He translated our technical DNA into a visual identity that feels both innovative and approachable. The logo and brand system he delivered exceeded every expectation."',
    name: 'iDiploy Team',
    role: 'Founders, iDiploy',
  },
  triumf: {
    text: '"Akin has an incredible ability to distill complex ideas into clean, impactful design. The 3riumf brand identity perfectly communicates momentum and creative energy — exactly what we needed."',
    name: '3riumf Studios',
    role: 'Creative Lead, 3riumf',
  },
  psalmuels: {
    text: '"He brought our African heritage fashion vision to life with a logo and brand system that feels both rooted in tradition and refreshingly modern. Every detail was intentional."',
    name: 'Amoo Samuel',
    role: 'Founder, Psalmuels Africa',
  },
  abbycouture: {
    text: '"Akin\'s design sensibility is remarkable. He captured the elegance and cultural pride of Abby Couture in a way that resonates with our audience. The brand feels premium and authentic."',
    name: 'Abiodun Olatunbosun',
    role: 'Founder, Abby Couture',
  },
};

export const CLIENT_TABS: { id: ClientId; label: string; className: string }[] = [
  { id: 'rendezvous', label: 'Rendezvous',      className: 'font-medium' },
  { id: 'idiploy',    label: 'iDiploy',         className: 'font-medium italic font-serif' },
  { id: 'triumf',     label: '3riumf',          className: 'font-normal' },
  { id: 'psalmuels',  label: 'Psalmuels Africa', className: 'font-light tracking-widest' },
  { id: 'abbycouture', label: 'Abby Couture',   className: 'font-light' },
];

export const NAV_LINKS = [
  { href: '#about',    label: 'About Me?' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#graphics', label: 'Graphics' },
  { href: '#clients',  label: 'Clients' },
];

export const SERVICES = [
  {
    title: 'Brand & Logo Design',
    body: 'Crafting distinctive visual identities that capture the essence of your business. From conceptual sketches to polished logos, ensuring consistency across brand assets and delivering designs that resonate with your target audience.',
    delay: 0.1,
  },
  {
    title: 'Social Media Marketing & Strategy',
    body: 'Building impactful digital presence through tailored campaigns, audience engagement, and content calendars. Leveraging analytics and trends to grow reach, strengthen brand voice, and convert followers into loyal customers.',
    delay: 0.2,
  },
  {
    title: 'No-Code Website Developer',
    body: 'Designing and launching responsive, user-friendly websites without the need for complex coding. Utilizing modern no-code platforms to create scalable solutions that align with your brand and business goals.',
    delay: 0.3,
  },
  {
    title: 'Resume Writing',
    body: 'Crafting professional resumes that highlight strengths, achievements, and career goals. Tailoring content to industry standards and optimizing for applicant tracking systems to help you stand out in competitive job markets.',
    delay: 0.4,
  },
];


// ── Graphics Showcase (replaces BTS) ─────────────────────────
export const GRAPHICS_SHOWCASE: GraphicsShowcaseItem[] = [
  // {
  //   title: 'Placeholder Design 1',
  //   category: 'Brand Identity',
  //   img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  //   desc: 'Placeholder description — replace with your actual graphics design project details.',
  //   tools: 'Adobe Illustrator, Photoshop',
  // },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (1).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (2).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (3).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (4).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (5).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (6).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (7).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (8).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (9).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (10).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (11).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (12).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (13).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (14).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (15).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (16).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (17).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (18).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (19).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (20).png',
  },
  {
    img: 'images/emma-brand-works/sMMs/smms-design-img (21).png',
  },
];

// ── Tools ────────────────────────────────────────────────────
export const TOOLS: ToolItem[] = [
  { name: 'Adobe Photoshop',    slug: 'adobephotoshop' },
  { name: 'Adobe Illustrator',  slug: 'adobeillustrator' },
  { name: 'Figma',              slug: 'figma' },
  { name: 'Canva',              slug: 'canva' },
  { name: 'Pinterest',          slug: 'pinterest' },
];

// ── Certifications ───────────────────────────────────────────
export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Certified Resume Writer',
    issuer: 'Shea Hanson | LinkedIn Learning',
    year: '2026',
    credentialUrl: 'https://drive.google.com/file/d/14ebkFtBoDYeWgZyuEC66yvRctZobgHO0/view?usp=sharing',
  },
  {
    title: 'Website SEO Strategist',
    issuer: 'Shea Hanson | LinkedIn Learning',
    year: '2026',
    credentialUrl: 'https://drive.google.com/file/d/1WaCTaJYlwunHmeaSfIZy7SWhZfDyWYfy/view?usp=sharing',
  },
  {
    title: 'Social Media Marketer',
    issuer: 'Yamini Rangan | LinkedIn Learning',
    year: '2026',
    credentialUrl: 'https://drive.google.com/file/d/12Yzu_XHAj5s7AD9d5lVz9IcqkUekFs9m/view?usp=sharing',
  },
];

// ── Beyond Design ────────────────────────────────────────────
export const BEYOND_DESIGN: BeyondDesignItem[] = [
  {
    title: 'Critical Design Thinking',
    description: 'I enjoy analyzing problems from multiple angles, applying creativity and logic to uncover innovative solutions that go beyond aesthetics.',
    icon: '🎵',
  },
  {
    title: 'Team Work',
    description: 'Collaboration energizes me—I thrive in group settings where ideas are shared openly, and collective strengths lead to stronger outcomes.',
    icon: '📚',
  },
  {
    title: 'Time-Attuned Deliverables',
    description: 'I pride myself on delivering projects punctually, balancing speed with quality to meet deadlines without compromising standards.',
    icon: '🤝',
  },
  {
    title: 'Attention to Detail',
    description: 'Precision is at the core of my work, ensuring every element—big or small—is refined, consistent, and aligned with the overall vision.',
    icon: '💡',
  },
];


// ── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nuel-akin-6805bb370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'linkedin' },
  { name: 'Behance',  url: 'https://www.behance.net/emmanuelakinleye', icon: 'behance' },
  { name: 'X',        url: 'https://x.com/@mira_akins', icon: 'x' },
];
