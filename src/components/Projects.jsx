import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, LayoutTemplate } from 'lucide-react';

const projects = [
  {
    title: 'POS (Punto de Venta) Fullstack',
    description: 'Sistema de Punto de Venta desarrollado para optimizar la gestión de ventas e inventarios.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    highlight: 'Arquitectura escalable y consultas optimizadas.',
    icon: <LayoutTemplate size={24} color="var(--accent-primary)" />
  },
  {
    title: 'ERP Escolar',
    description: 'Plataforma administrativa integral para colegios, controlando estudiantes, profesores y calificaciones.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    highlight: 'Aplicación de Arquitectura MVC y manejo de sesiones seguras.',
    icon: <Server size={24} color="var(--accent-indigo)" />
  },
  {
    title: 'E-commerce de Equipos de Cómputo',
    description: 'Tienda en línea completa con carrito de compras, gestión de productos y procesamiento de órdenes.',
    tech: ['Node.js', 'MySQL', 'Express', 'Vanilla JS'],
    highlight: 'Lógica de negocio sólida y base de datos relacional robusta.',
    icon: <ExternalLink size={24} color="var(--accent-teal)" />
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Proyectos Destacados
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '10px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px' }}>
                  {project.icon}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {project.highlight}
              </p>

              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                {project.tech.map((tech, i) => (
                  <li key={i} style={{ color: 'var(--text-muted)' }}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
