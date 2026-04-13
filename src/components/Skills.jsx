import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const skillsData = [
  { category: 'Frontend', items: ['React', 'HTML / CSS Moderno', 'Vue.js', 'JavaScript (ES6+)'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Java / C++'] },
  { category: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Herramientas & BI', items: ['Gestión Ágil / SCRUM', 'Git / GitHub', 'Inteligencia Negocios', 'Jira'] }
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Habilidades Técnicas
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt 
                className="glass-card" 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1000}
                style={{ height: '100%', background: 'var(--bg-primary)' }}
              >
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
                  {skillGroup.category}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                      <span style={{ color: 'var(--accent-secondary)' }}>▹</span> {item}
                    </li>
                  ))}
                </ul>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
