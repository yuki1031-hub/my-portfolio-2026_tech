import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LiquidMetalBackground from './components/LiquidMetalBackground';
import './styles.css';

const LINES = [
  "Welcome to my portfolio!",
  "Scroll down to check out",
  "my works (o^^)o",
];
const TYPING_SPEED = 55;

const WORKS = [
  { 
    id: 1, 
    seed: 'work1', 
    url: '/works/line-bot',
    thumbnail: '/image/linedb_thumbnail.png',
    title: '偉人性格診断 LINE Bot',
    tags: ['Node.js', 'Supabase', 'LINE API'],
  },
  { id: 2, seed: 'work2', url: '#work-2', thumbnail: null, title: 'Coming Soon', tags: [] },
  { id: 3, seed: 'work3', url: '#work-3', thumbnail: null, title: 'Coming Soon', tags: [] },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started || typingDone) return;
    const timer = setTimeout(() => {
      if (charIdx < LINES[lineIdx].length) {
        setCharIdx(c => c + 1);
      } else if (lineIdx < LINES.length - 1) {
        setLineIdx(l => l + 1);
        setCharIdx(0);
      } else {
        setTypingDone(true);
      }
    }, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [started, charIdx, lineIdx, typingDone]);

  return (
    <div className="home-page">

      {/* ── Top bar ── */}
      <div className="home-top-bar">
        <span className="home-logo">hishi</span>
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger__line" />
        </button>
      </div>

      {/* ── Canvas frame ── */}
      <div className="home-page__frame">
        <LiquidMetalBackground />
        <div className="home-page__content">
          <div className="home-page__name typing-text">
            {LINES.map((line, i) => {
              const isCurrentLine = i === lineIdx;
              const isPastLine = i < lineIdx;
              const displayed = isPastLine
                ? line
                : isCurrentLine
                  ? line.slice(0, charIdx)
                  : '';
              const showCursor = !typingDone && (isCurrentLine || (!started && i === 0));
              return (
                <div key={i} className="typing-line">
                  {displayed}
                  {showCursor && <span className="typing-cursor" aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Works grid ── */}
      <div className="works-section">
        <div className="works-grid">
          {WORKS.map((work) => (
 <div
    key={work.id}
    className="works-card"
    onMouseEnter={() => setActiveCard(work.id)}
    onMouseLeave={() => setActiveCard(null)}
  >
    <img
      src={work.thumbnail || `https://picsum.photos/seed/${work.seed}/800/500`}
      alt={work.title}
      className="works-card__img"
    />
    <div className="works-card__info">
      <p className="works-card__title">{work.title}</p>
      <div className="works-card__tags">
        {work.tags.map((tag) => (
          <span key={tag} className="works-card__tag">{tag}</span>
        ))}
      </div>
    </div>
    {activeCard === work.id && (
      <div className="works-card__overlay">
        <Link to={work.url} className="works-card__more">more</Link>
        <button
          className="works-card__close"
          onClick={() => setActiveCard(null)}
        >
          close
        </button>
      </div>
    )}
  </div>
))}
      </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="home-bottom-bar" />

      {/* ── Full-screen nav overlay ── */}
      <div className={`nav-overlay${menuOpen ? ' nav-overlay--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav-overlay__menu">
          <Link to="/about" className="nav-overlay__link" tabIndex={menuOpen ? 0 : -1}>
            <span className="nav-overlay__num">01</span>
            About
          </Link>
          <Link to="/contact" className="nav-overlay__link" tabIndex={menuOpen ? 0 : -1}>
            <span className="nav-overlay__num">02</span>
            Contact
          </Link>
        </nav>
        <button
          className="nav-overlay__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={-1}
        />
      </div>

    </div>
    );  // ← returnの閉じ括弧
} 