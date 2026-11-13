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

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Soy estudiante de octavo semestre de <strong>Ingeniería de Software</strong> en la Universidad Manuela Beltrán. Me apasiona desarrollar soluciones tecnológicas que respondan a problemas del mundo real. Aunque sigo aprendiendo y consolidando mi experiencia, me enfoco en participar activamente en todo el ciclo de vida del software, asegurando que cada fase cuente con <strong>metodologías ágiles</strong>, buena <strong>documentación técnica</strong> y un fuerte compromiso con la <strong>calidad del código</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Soy una persona curiosa que investiga constantemente para adaptarse a las necesidades de cada proyecto. Actualmente, combino el desarrollo Fullstack (con <strong>Node.js</strong> y <strong>Laravel</strong>) con mi interés por la <strong>Inteligencia de Negocios</strong>. Estoy convencido de que los datos son el pilar fundamental de cualquier empresa para tomar decisiones estratégicas; por eso, me apoyo en herramientas como <strong>Tableau</strong>, <strong>Power BI</strong>, <strong>Excel</strong> y <strong>Power Automate</strong> para construir soluciones que no solo funcionen a nivel técnico, sino que aporten un valor real al negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="skills-grid"
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
              <h4 style={{ color: 'var(--text-main)' }}>Inteligencia de Negocios (BI)</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Tableau, Power BI, Excel, Power Automate (Nociones)</p>
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
