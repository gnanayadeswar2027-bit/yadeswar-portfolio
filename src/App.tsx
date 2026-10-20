import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowRight, Plus, Minus, Github, Linkedin, Mail, Layers3, Sparkles, Box, Workflow } from 'lucide-react';
import { projects, experiences, capabilities, toolGroups, projectMedia } from './content';
import AboutStory from './AboutStory';

function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>;
}
function ContactButton({ children = 'Let’s connect', showEmail = true }: { children?: ReactNode; showEmail?: boolean }) {
  return <div className="connect-actions"><a className="contact-button" href="https://www.linkedin.com/in/gnanayadeswar" target="_blank" rel="noreferrer">{children}<Linkedin size={17} aria-hidden="true"/></a>{showEmail && <a className="contact-email-option" href="mailto:yadeshwar01@gmail.com">Email me<Mail size={15} aria-hidden="true"/></a>}</div>;
}
function SectionTitle({ label, children, light = false }: { label: string; children: ReactNode; light?: boolean }) { return <FadeIn><div className="section-label"><span>{label}</span><span className="small-cross">✳</span></div><h2 className={`section-title ${light ? '' : 'gradient-text'}`}>{children}</h2></FadeIn>; }


function OrbitalSculpture({ className = '' }: { className?: string }) {
  return <div className={`orbital-art ${className}`} aria-hidden="true"><div className="orbital-halo"/><div className="orbital-float"><div className="orbital-axis"><div className="orbital-ring ring-a"/><div className="orbital-ring ring-b"/><div className="orbital-ring ring-c"/><div className="orbital-core"/></div></div><span className="orbit-satellite satellite-a"/><span className="orbit-satellite satellite-b"/><span className="orbit-spark">✧</span><span className="orbital-shadow"/></div>;
}
function GlassCube({ className = '' }: { className?: string }) {
  return <div className={`glass-art ${className}`} aria-hidden="true"><div className="glass-float"><div className="glass-cube">{['front','back','left','right','top','bottom'].map(face=><span className={`glass-face face-${face}`} key={face}/>)}</div></div><span className="glass-spark">✳</span></div>;
}

function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  function move(event: MouseEvent<HTMLElement>) {
    if (reduce || !window.matchMedia('(pointer: fine)').matches || !portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const near = event.clientX >= rect.left - 150 && event.clientX <= rect.right + 150 && event.clientY >= rect.top - 150 && event.clientY <= rect.bottom + 150;
    setPosition(near ? { x: (event.clientX - rect.left - rect.width / 2) / 3, y: (event.clientY - rect.top - rect.height / 2) / 3 } : { x: 0, y: 0 });
  }
  return <section className="hero" id="home" onMouseMove={move} onMouseLeave={() => setPosition({ x: 0, y: 0 })}>
    <nav aria-label="Main navigation"><a className="home-link" href="#home">Home</a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact <ArrowUpRight size={14}/></a></div></nav>
    <FadeIn className="hero-name"><p className="eyebrow">Gnana Yadeswar · Personal portfolio</p><h1 className="gradient-text">HI, I’M<br className="mobile-break"/> YADESWAR<span className="name-period">.</span></h1></FadeIn>
    <div className="hero-main"><FadeIn delay={0.2} className="hero-copy"><span className="tiny-label"><span className="status-dot"/> A curious mind. A hands-on approach.</span><h2>Curious about problems.<br/><span>I like building things.</span></h2><p>I'm pursuing a PGP in Sports &amp; Gaming Management at Masters' Union. I explore ideas across industries and build around problems that interest me.</p><a className="hero-story-link" href="#about">Get to know me<ArrowRight size={18}/></a></FadeIn>
    <div ref={portraitRef} className="hero-portrait"><span className="hero-orbit-accent" aria-hidden="true"/><span className="hero-float-star" aria-hidden="true">✧</span><motion.img src="/images/boy-no-earrings.png" alt="Stylized 3D boy character from the design reference" width="1205" height="1305" fetchPriority="high" initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, x: position.x, y: position.y }} transition={{ opacity: { duration: 0.7, delay: 0.6 }, x: { duration: position.x ? 0.3 : 0.6, ease: 'easeOut' }, y: { duration: position.y ? 0.3 : 0.6, ease: 'easeOut' } }}/></div></div>
    <div className="hero-bottom"><span>Business. Technology. Everything in between.</span><a href="#work">Scroll to explore <ArrowDown size={16}/></a></div>
  </section>;
}

function ProjectMedia({ kind }: { kind: string }) {
  const media = projectMedia[kind];
  if (!media) return <ProjectVisual kind={kind}/>;
  return <div className={`project-media media-${kind} ${media.length > 1 ? 'media-gallery' : ''}`}>
    {media.map((item, index) => <figure key={item.src} className={index === 0 ? 'media-featured' : 'media-supporting'}>
      <a className="media-image-link" href={item.src} target="_blank" rel="noreferrer" aria-label={`View full image: ${item.caption}`}><div className="media-image-viewport"><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async"/></div><span className="media-expand" aria-hidden="true"><ArrowUpRight size={17}/></span></a>
      <figcaption>{item.caption}</figcaption>
    </figure>)}
  </div>;
}

function ProjectVisual({ kind }: { kind: string }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <div className="visual-grid"/>
    {kind === 'growth' ? <><div className="threadly-symbol"><span/><span/><span/></div><div className="visual-word">GoThreadly<span>Find the right people.<br/>Build what comes next.</span></div><span className="visual-tag">PRODUCT IN PROGRESS <span>↗</span></span></> :
    kind === 'workflow' ? <><div className="workflow-nodes"><div><Box/><span>Property visit</span></div><i/><div><Workflow/><span>Make.com</span></div><i/><div><Mail/><span>Notification</span></div></div><div className="visual-word">Research into practice.<span>PROPTECH · WORKFLOW AUTOMATION</span></div></> :
    kind === 'crystal' ? <><div className="crystal crystal-one"/><div className="crystal crystal-two"/><div className="crystal crystal-three"/><div className="visual-word">Sourced. Priced.<br/>Sold at CyberHub.<span>MASTERS’ UNION × DLF CYBERHUB</span></div></> :
    kind === 'inventory' ? <><div className="inventory-art"><div><Layers3 size={24}/> StockFlow <span>Inventory workspace</span></div><div className="inventory-bars">{[62, 90, 45, 75, 55, 88, 68].map((h,i)=><i key={i} style={{height: h}}/>)}</div><div className="inventory-labels"><span>Stock tracking</span><span>Suppliers</span><span>Procurement</span></div></div><div className="visual-word">From idea to application.<span>AN EXPERIMENT IN BUILDING</span></div></> :
    null}
  </div>;
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const reduce = useReducedMotion();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const [expanded, setExpanded] = useState(false);
  return <motion.article ref={ref} id={`project-${project.number}`} className={`project-card project-${project.visual}`} style={{ scale: reduce ? 1 : scale, top: 24 + index * 12 }}>
    <div className="project-top"><span className="project-number">{project.number}</span><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><span className="project-status">{index === 0 && <span className="status-dot"/>}{project.status}</span></div>
    <div className="project-body"><div className="project-copy"><h4>{project.headline}</h4><p>{project.description}</p>{project.result && <div className="project-result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div>}<div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><button className="details-toggle" aria-expanded={expanded} aria-controls={`project-detail-${index}`} onClick={()=>setExpanded(!expanded)}>{expanded ? 'Less about this project' : 'More about this project'}{expanded ? <Minus size={16}/> : <Plus size={16}/>}</button><p id={`project-detail-${index}`} className="project-detail" hidden={!expanded}>{project.detail}</p>{project.link && <a className="outline-button" href={project.link} target="_blank" rel="noreferrer">{project.label}<ArrowUpRight size={18}/></a>}</div><ProjectMedia kind={project.visual}/></div>
  </motion.article>;
}


function App() { return <main><a className="skip-link" href="#work">Skip to selected work</a><Hero/>
  <section id="work" className="work section-pad"><SectionTitle label="01 / IDEAS PUT INTO PRACTICE">Selected work<span className="title-dot">.</span></SectionTitle><div className="section-intro"><p>Products, research, and businesses.</p><span>{projects.length} PROJECTS / DIFFERENT PERSPECTIVES</span></div><div className="project-stack">{projects.map((project,index)=><ProjectCard key={project.number} project={project} index={index}/>)}</div></section>
  <AboutStory/>
  <section id="experience" className="experience section-pad"><SectionTitle label="03 / LEARNING THROUGH EXPERIENCE">Along the way</SectionTitle><div className="experience-list">{experiences.map((item,i)=><FadeIn key={item.company} delay={i*0.07} className="experience-row"><span className="row-number">0{i+1}</span><div className="experience-company"><h3>{item.company}</h3><span>{item.location}</span></div><div className="experience-description"><h4>{item.role}</h4><p>{item.description}</p></div><span className="experience-period">{item.period}</span></FadeIn>)}</div></section>
  <section id="education" className="education section-pad"><GlassCube className="education-cube"/><SectionTitle label="04 / EDUCATION">Always exploring</SectionTitle><div className="education-grid"><FadeIn className="education-item"><span className="tiny-label">2026 – PRESENT <ArrowUpRight size={18}/></span><h3>Masters’ Union</h3><p>PGP in Sports &amp; Gaming Management</p><span>Gurugram, India</span></FadeIn><FadeIn className="education-item" delay={0.1}><span className="tiny-label">2022 – 2025 <ArrowUpRight size={18}/></span><h3>Dwaraka Doss Goverdhan Doss Vaishnav College</h3><p>Bachelor of Commerce — Business Administration</p><span>Chennai, India</span></FadeIn></div></section>
  <section id="tools" className="tools skills-section skills-editorial section-pad">
    <OrbitalSculpture className="tool-orbital"/>
    <SectionTitle label="05 / CAPABILITIES & TOOLKIT" light>What I<br/>work with<span className="purple-dot">.</span></SectionTitle>
    <p className="skills-intro">Three ways I put ideas to work.</p>
    <div className="capability-list">{capabilities.map((item, i) => <FadeIn key={item.name} delay={i * 0.05} className="capability-row">
      <span className="capability-row-number">0{i + 1}</span>
      <div className="capability-row-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
      <div className="capability-examples">{item.examples.map(example => <a key={example.href} href={example.href}>{example.name}<ArrowUpRight size={14}/></a>)}</div>
    </FadeIn>)}</div>
    <div className="toolkit-heading"><h3>Tools I work with</h3><span>Used across projects and day-to-day work</span></div>
    <div className="toolkit-groups">{toolGroups.map(group => <div className="toolkit-group" key={group.name}><h4>{group.name}</h4><ul>{group.items.map(tool => <li key={tool.name}><span aria-hidden="true" className={`tool-mark brand-${tool.brand}`}>{tool.mark}</span><span>{tool.name}</span></li>)}</ul></div>)}</div>
  </section>
  <section id="contact" className="contact section-pad"><GlassCube className="contact-cube"/><FadeIn><div className="section-label"><span>06 / GOOD THINGS START WITH A CONVERSATION</span><Sparkles size={20}/></div><h2 className="gradient-text">Let’s<br/><span className="connect-word">connect<ArrowUpRight aria-hidden="true"/></span></h2><div className="contact-bottom"><p>Open to interesting ideas, conversations, and opportunities to build. Feel free to reach out.</p><div className="contact-choice"><ContactButton showEmail={false}>Connect on LinkedIn</ContactButton><a className="email-link" href="mailto:yadeshwar01@gmail.com">yadeshwar01@gmail.com<Mail size={20}/></a></div></div><div className="footer"><span className="footer-name">Gnana Yadeswar</span><div><a href="https://www.linkedin.com/in/gnanayadeswar" target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={14}/></a><a href="https://github.com/gnanayadeswar2027-bit" target="_blank" rel="noreferrer"><Github size={16}/>GitHub<ArrowUpRight size={14}/></a></div><a href="#home">Back to top<ArrowRight size={16} className="back-arrow"/></a></div></FadeIn></section>
  </main>; }
export default App;
