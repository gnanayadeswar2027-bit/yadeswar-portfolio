import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import './about-story.css';

const chapters = [
  {
    tab: 'What draws me in', word: 'wonder', title: 'Something catches my attention.',
    body: 'I like giving things a go. Some interests stay with me for years; others open up something new. Cricket, NCC, and mridangam have all been part of that story.',
    note: 'Different interests. The same curiosity.', label: 'A question is a good place to start.',
  },
  {
    tab: 'Finding a balance', word: 'balance', title: 'Learning to find a balance.',
    body: 'In Class 9, I was focused on cricket and training for under-16 competition. I failed my final maths exam and had to take a retest. That experience taught me to balance cricket and school, and to manage more than one commitment at a time.',
    note: 'I had to make time for both.', label: 'Making room for both.',
  },
  {
    tab: 'What I try next', word: 'onward', title: 'There’s more I want to build.',
    body: 'I’m excited by ideas that make me want to get up and build. There’s a lot I still want to explore, and I don’t see that stopping. I want to keep trying, making things, and finding out what I can do next.',
    note: 'Still curious. Still building.', label: 'The next page is still being written.',
  },
];

function Sketch({ scene }: { scene: number }) {
  const reduce = useReducedMotion();
  const draw = { initial: reduce ? false as const : { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 1.3, ease: 'easeInOut' as const } };
  return <div className="story-art" aria-hidden="true">
    <div className="story-art-grid"/>
    <svg viewBox="0 0 500 410" fill="none" className="story-drawing">
      <defs>
        <linearGradient id="story-paper" x1="120" y1="90" x2="390" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#fffdf5"/><stop offset="1" stopColor="#ded3ee"/></linearGradient>
        <linearGradient id="story-violet" x1="140" y1="100" x2="350" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#b193db"/><stop offset="1" stopColor="#6c458e"/></linearGradient>
        <filter id="story-shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="13" stdDeviation="12" floodColor="#473052" floodOpacity=".16"/></filter>
      </defs>
      {scene === 0 && <>
        <motion.path {...draw} d="M55 295C18 185 184 355 202 246S117 91 245 85s137 141 195 70" stroke="#a698b4" strokeWidth="2" strokeDasharray="5 8"/>
        <g className="sketch-float" filter="url(#story-shadow)">
          <path d="m166 135 126-24 40 190-126 24z" fill="url(#story-paper)" stroke="#8b769d" strokeWidth="1.5"/>
          <path d="m178 135 38 187M201 171l66-13m-60 43 63-12m-57 42 62-12m-55 42 35-7" stroke="#b4a3c4" strokeWidth="2" strokeLinecap="round"/>
          <path d="m235 174 10 13 20-31" stroke="#79559a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <g className="sketch-ball"><circle cx="111" cy="155" r="35" fill="#c59c79"/><path d="M95 124c24 16 32 37 28 63M102 123c24 16 32 37 28 62" stroke="#fff3dd" strokeWidth="2" strokeDasharray="3 4"/></g>
        <g transform="rotate(20 365 279)"><path d="M337 252q28-25 56 0v54q-28 24-56 0z" fill="#d5c29f" stroke="#9c8462" strokeWidth="1.5"/><ellipse cx="365" cy="252" rx="28" ry="11" fill="#f1e6d0" stroke="#9c8462"/><ellipse cx="365" cy="252" rx="11" ry="5" fill="#6c5b49"/><path d="m344 260 1 44m12-40 1 44m13-44 1 42m12-45 1 40" stroke="#9c8462"/></g>
        <path d="m366 93 5 16 17 4-17 5-5 17-5-17-17-5 17-4z" fill="#a584c2"/>
        <text x="57" y="344" transform="rotate(-7 57 344)" className="sketch-hand">What if I gave it a go?</text>
      </>}
      {scene === 1 && <>
        <motion.path {...draw} d="M47 292c50-83 108 51 144-15s-59-132 18-134 45 133 105 93 35-93 122-110" stroke="#9c84b4" strokeWidth="2" strokeDasharray="5 8"/>
        <g transform="rotate(-9 248 214)" filter="url(#story-shadow)"><path d="M158 101h156l29 32v188H158z" fill="url(#story-paper)" stroke="#aa98b9"/><path d="M314 101v32h29" stroke="#aa98b9"/><path d="M185 151h82m-82 23h106m-106 23h65" stroke="#c1b3c9" strokeWidth="2" strokeLinecap="round"/><path d="m183 218 99-5m-100 2 105 9m-106-4 90 12" stroke="#9b7cae" strokeWidth="2" strokeLinecap="round"/><text x="184" y="276" className="sketch-hand">Find a balance.</text><path d="M183 284q49 8 102-3" stroke="#b49bcd" strokeWidth="3" strokeLinecap="round"/></g>
        <g className="sketch-float"><path d="M366 228a37 37 0 1 1-4 49m4-49-19 2m19-2-1 20" stroke="#79559a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g>
        <path d="m94 98 6 14 16 2-13 10 2 16-13-9-15 6 5-15-10-12 16 1z" stroke="#b19ac4" strokeWidth="2"/>
        <text x="59" y="361" transform="rotate(-5 59 361)" className="sketch-hand">Make time for both.</text>
      </>}
      {scene === 2 && <>
        <motion.path {...draw} d="M52 297c82 62 161 4 120-31s-74 39 6 41 158-53 200-153" stroke="#9c84b4" strokeWidth="2" strokeDasharray="5 8"/>
        <g className="sketch-plane" filter="url(#story-shadow)"><path d="m210 137 205-66-66 201-44-86z" fill="url(#story-paper)" stroke="#8b769d" strokeWidth="1.5" strokeLinejoin="round"/><path d="m305 186 110-115-83 137-27 42z" fill="url(#story-violet)"/><path d="m332 208 17 64" stroke="#8b769d"/></g>
        <g transform="rotate(-9 146 192)"><rect x="57" y="151" width="139" height="73" rx="9" fill="#e6ddee" stroke="#c9b8d9"/><circle cx="75" cy="170" r="3" fill="#a78abd"/><path d="M86 170h29" stroke="#b6a1c6" strokeWidth="2"/><text x="73" y="202" className="sketch-project">An idea</text></g>
        <g transform="rotate(7 271 323)"><rect x="224" y="292" width="128" height="62" rx="9" fill="#fffaf0" stroke="#cfbdad"/><path d="M240 309h21m-21 8h48" stroke="#c3b298" strokeWidth="2"/><text x="240" y="339" className="sketch-project">What’s next?</text></g>
        <path d="m107 91 5 14 15 4-15 4-5 15-4-15-15-4 15-4z" fill="#b19ac4"/>
        <text x="55" y="398" transform="rotate(-6 55 398)" className="sketch-hand">Let’s see where this goes.</text>
      </>}
    </svg>
    <span className="story-art-label">{chapters[scene].label}</span>
  </div>;
}

export default function AboutStory() {
  const [scene, setScene] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const chapter = chapters[scene];
  function navigateTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % chapters.length;
    else if (event.key === 'ArrowLeft') next = (index + chapters.length - 1) % chapters.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = chapters.length - 1;
    else return;
    event.preventDefault(); setScene(next); tabs.current[next]?.focus();
  }
  return <section id="about" className="about story-section section-pad" aria-labelledby="story-title">
    <div className="section-label"><span>02 / A FEW PAGES FROM MY LIFE</span><span className="small-cross" aria-hidden="true">✳</span></div>
    <div className="story-heading"><h2 id="story-title">Always curious.<br/><span>Still building.</span></h2><p>A little about the person<br className="story-desktop-break"/> behind the projects.</p></div>
    <div className="story-book">
      <div className="story-book-top"><span className="story-book-label"><span className="story-ink-dot"/> THE PERSONAL PAGES</span><span className="story-edition">YADESWAR / AN ONGOING STORY</span></div>
      <div className="story-tabs" role="tablist" aria-label="Chapters of my story">{chapters.map((item, index) => <button key={item.tab} ref={el => { tabs.current[index] = el; }} id={`story-tab-${index}`} role="tab" aria-selected={scene === index} aria-controls="story-panel" tabIndex={scene === index ? 0 : -1} onKeyDown={event => navigateTab(event, index)} onClick={() => setScene(index)}><span>0{index + 1}</span>{item.tab}{scene === index && <motion.i layoutId="story-tab-underline" transition={{ duration: reduce ? 0 : 0.3 }}/>}</button>)}</div>
      <div id="story-panel" role="tabpanel" aria-labelledby={`story-tab-${scene}`} tabIndex={0} className="story-panel">
        <AnimatePresence mode="wait" initial={false}><motion.div key={scene} className="story-scene" initial={reduce ? false : { opacity: 0, y: 8, rotateY: -5 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8, rotateY: reduce ? 0 : 5 }} transition={{ duration: reduce ? 0 : 0.28 }}>
          <div className="story-copy"><span className="story-chapter">CHAPTER 0{scene + 1} <span>/ {chapter.word}</span></span><h3>{chapter.title}</h3><p>{chapter.body}</p><div className="story-margin-note"><span aria-hidden="true">↳</span>{chapter.note}</div></div>
          <Sketch scene={scene}/>
        </motion.div></AnimatePresence>
      </div>
      <div className="story-book-bottom"><span className="story-page-count" aria-live="polite">0{scene + 1}<span> / 03</span></span><span className="story-footnote">A few pages, not the whole story.</span><div className="story-page-actions"><button className="story-previous" aria-label="Previous chapter" disabled={scene === 0} onClick={() => setScene(scene - 1)}><ArrowLeft size={18}/></button><button className="story-next" onClick={() => setScene((scene + 1) % chapters.length)}>{scene === chapters.length - 1 ? 'Read it again' : 'Turn the page'}{scene === chapters.length - 1 ? <RotateCcw size={16}/> : <ArrowRight size={18}/>}</button></div></div>
    </div>
    <p className="story-afterword">There’s a lot to explore. <span>I’m making room for it.</span></p>
  </section>;
}
