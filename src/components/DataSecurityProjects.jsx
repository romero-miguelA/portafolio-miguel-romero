import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, ShieldCheck } from 'lucide-react';

const dataSecurityProjects = [
  {
    title: 'Análisis del uso de dispositivos electrónicos en Colombia',
    subtitle: 'Semillero de Investigación UMB',
    tag: 'PROYECTO ACADÉMICO',
    badge: 'Tableau • Investigación',
    bullets: [
      'Ciclo completo de ETL, limpieza y modelado de datos para estructuración analítica.',
      'Diseño y desarrollo de tableros interactivos con visualización de patrones de uso y adopción tecnológica.',
      'Sustentado formalmente ante el semillero de investigación de la universidad.'
    ],
    tech: ['Tableau', 'ETL', 'Limpieza de Datos', 'Modelado Dimensional', 'Storytelling'],
    highlight: 'Sustentado y respaldado ante el semillero de investigación universitaria.',
    icon: <BarChart3 size={24} color="var(--accent-secondary)" />
  },
  {
    title: 'Análisis de siniestralidad vial en Cali 2023–2025',
    subtitle: 'Analítica de Datos & Movilidad',
    tag: 'PROYECTO ACADÉMICO',
    badge: 'Power BI • Business Intelligence',
    bullets: [
      'Procesamiento, depuración y estructuración de fuentes masivas de accidentalidad vial (2023–2025).',
      'Definición de KPIs estratégicos de severidad, recurrencia y zonas de alto impacto.',
      'Visualización de patrones críticos para apoyar la toma de decisiones preventivas.'
    ],
    tech: ['Power BI', 'DAX', 'Modelado de Datos', 'Definición de KPIs', 'Toma de Decisiones'],
    highlight: 'Definición de KPIs e identificación de patrones críticos para decisiones estratégicas.',
    icon: <LineChart size={24} color="var(--accent-teal)" />
  },
  {
    title: 'Auditoría de vulnerabilidades web con OWASP ZAP',
    subtitle: 'Seguridad Ofensiva & Análisis de Riesgo',
    tag: 'PROYECTO ACADÉMICO',
    badge: 'OWASP ZAP • Ciberseguridad',
    bullets: [
      'Análisis de seguridad web evaluando metódicamente casos de uso y de abuso.',
      'Construcción de árboles de ataque para trazar rutas potenciales de explotación.',
      'Identificación sistemática de vectores de riesgo para proponer medidas de mitigación técnica.'
    ],
    tech: ['OWASP ZAP', 'Ciberseguridad', 'Árboles de Ataque', 'Vectores de Riesgo', 'Mitigación'],
    highlight: 'Modelado de árboles de ataque y propuesta de medidas efectivas de mitigación.',
    icon: <ShieldCheck size={24} color="var(--accent-indigo)" />
  }
];

const DataSecurityProjects = () => {
  return (
    <section id="bi-security" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--accent-primary)', 
            marginBottom: '0.5rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            fontSize: '0.85rem' 
          }}
        >
          Analítica, Inteligencia & Protección
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Proyectos de <span>BI, Análisis de Datos y Ciberseguridad</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {dataSecurityProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                background: 'var(--bg-primary)',
                position: 'relative' 
              }}
            >
              {/* Header card: Icon + Tags */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ padding: '10px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px' }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    background: 'rgba(14, 165, 233, 0.12)',
                    color: 'var(--accent-secondary)',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}>
                    {project.tag}
                  </span>
                  {project.badge && (
                    <span style={{
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'var(--accent-secondary)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      letterSpacing: '0.5px'
                    }}>
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem', color: 'var(--text-main)', lineHeight: '1.3' }}>
                {project.title}
              </h3>
              {project.subtitle && (
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                  {project.subtitle}
                </p>
              )}

              {/* Description / Bullet Points */}
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.55rem', 
                marginBottom: '1.25rem', 
                flexGrow: 1,
                paddingLeft: 0,
                listStyle: 'none'
              }}>
                {project.bullets.map((point, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.5rem', 
                    color: 'var(--text-muted)', 
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    <span style={{ color: 'var(--accent-teal)', marginTop: '2px', flexShrink: 0 }}>▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Highlight Note */}
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginBottom: '1.25rem', fontStyle: 'italic', borderLeft: '2px solid var(--accent-teal)', paddingLeft: '0.75rem' }}>
                {project.highlight}
              </p>

              {/* Tech Badges */}
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: 'auto' }}>
                {project.tech.map((tech, i) => (
                  <li key={i} style={{ 
                    color: 'var(--text-muted)', 
                    background: 'rgba(255, 255, 255, 0.04)', 
                    padding: '3px 8px', 
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSecurityProjects;
