import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      padding: '0 5%'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
          <span className="gradient-text"> MR.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{ 
                color: 'var(--text-muted)', 
                fontWeight: 500, 
                transition: 'color 0.3s ease',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem'
              }}
              onMouseOver={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Menu Toggle logic can be added later if needed */}
    </nav>
  );
};

export default Navbar;
