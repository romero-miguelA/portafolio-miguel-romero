import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 50%, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
        >
          Estudiante de Ingeniería de Software
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', margin: '0', backgroundClip: 'text', color: 'var(--text-main)' }}
        >
          Miguel Romero.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', marginTop: '0.5rem' }}
        >
          <span style={{ fontWeight: 400 }}>Enfocado en </span>
          <span className="gradient-text">
            <Typewriter
              words={['Ingeniería Web.', 'Arquitectura de Software.', 'Sistemas de Bases de Datos.', 'Inteligencia de Negocios.']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ maxWidth: '650px', margin: '0 auto 3rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}
        >
          Con un enfoque multidisciplinario, combino fundamentos sólidos de ingeniería con las últimas tecnologías. Me apasiona el diseño de arquitecturas eficientes, el análisis y modelado de datos corporativos, y el desarrollo de sistemas escalables.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.8 }}
           style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="https://wa.me/573204197758" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Phone size={18} /> Hablemos
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
