import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Sobre Mí
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Soy estudiante de séptimo semestre de <strong>Ingeniería de Software</strong> en la Universidad Manuela Beltrán, con una profunda pasión por el desarrollo de aplicaciones robustas usando <strong>Clean Code</strong> y <strong>Arquitecturas Ágiles</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Me caracterizo por investigar constantemente y aprender nuevas tecnologías adaptándome a las necesidades del negocio. Mi enfoque actual combina el desarrollo Fullstack (tanto en <strong>Node.js</strong> como en <strong>Laravel</strong>) y el análisis de datos a través de <strong>Inteligencia de Negocios (BI)</strong>, permitiéndome construir soluciones que no solo operan, sino que aportan valor estratégico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          >
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <Code2 size={40} color="var(--accent-primary)" />
              <h4 style={{ color: 'var(--text-main)' }}>Desarrollo Frontend</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>React, Vue.js, CSS Moderno</p>
            </div>
            
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <Database size={40} color="var(--accent-teal)" />
              <h4 style={{ color: 'var(--text-main)' }}>Backend & DB</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Node.js, Laravel, PHP, PostgreSQL, MySQL</p>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <BrainCircuit size={40} color="var(--accent-indigo)" />
              <h4 style={{ color: 'var(--text-main)' }}>Inteligencia Negocios</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>BI, Analítica de Datos (Data-Driven)</p>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <Users size={40} color="var(--accent-secondary)" />
              <h4 style={{ color: 'var(--text-main)' }}>Gestión Ágil</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Scrum, Jira, Liderazgo Técnico</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
