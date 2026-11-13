import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, LayoutTemplate, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Automatización de Pedidos (PWA)',
    subtitle: 'Panadería y Cafetería La Gran Barcelona',
    tag: 'PROYECTO ACADÉMICO',
    badge: 'Proyecto de Grado',
    bullets: [
      'Diseñé y desarrollé una PWA con arquitectura cliente-servidor para digitalizar la toma y gestión de pedidos en tiempo real.',
      'Implementé almacenamiento local y sincronización con Service Workers para operar sin conexión y resolver la sincronización de pedidos tras caídas de red.',
      'Estructuré la lógica de órdenes y optimicé la interfaz para agilizar la atención y mejorar la trazabilidad de los pedidos.'
    ],
    tech: ['PWA', 'React', 'Service Workers', 'Offline-First', 'Almacenamiento Local'],
    highlight: 'Arquitectura offline-first con sincronización automática en tiempo real.',
    icon: <Smartphone size={24} color="var(--accent-primary)" />
  },
  {
    title: 'POS (Punto de Venta) Fullstack',
    subtitle: 'Sistema Comercial & Inventarios',
    tag: 'PROYECTO ACADÉMICO',
    bullets: [
      'Sistema de Punto de Venta desarrollado para optimizar la gestión de ventas, facturación y control de inventarios.',
      'Diseño modular con arquitectura cliente-servidor y endpoints REST estructurados.',
      'Consultas optimizadas para alta concurrencia y respuesta inmediata en caja.'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    highlight: 'Arquitectura escalable y consultas SQL de alto rendimiento.',
    icon: <LayoutTemplate size={24} color="var(--accent-teal)" />
  },
  {
    title: 'ERP Escolar Integral',
    subtitle: 'Gestión Institucional Educativa',
    tag: 'PROYECTO ACADÉMICO',
    bullets: [
      'Plataforma administrativa integral para colegios, controlando estudiantes, profesores, asignaturas y calificaciones.',
      'Implementación del patrón de arquitectura MVC con validaciones robustas.',
      'Gestión de sesiones seguras y control de accesos basado en roles (RBAC).'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    highlight: 'Arquitectura MVC robusta y control estricto de roles y permisos.',
    icon: <Server size={24} color="var(--accent-indigo)" />
  },
  {
    title: 'E-commerce de Equipos de Cómputo',
    subtitle: 'Plataforma Comercial Web',
    tag: 'PROYECTO ACADÉMICO',
    bullets: [
      'Tienda en línea completa con catálogo dinámico de hardware y periféricos.',
      'Carrito de compras interactivo, persistencia de estado y flujo completo de procesamiento de órdenes.',
      'Lógica de negocio sólida respaldada por una base de datos relacional normalizada.'
    ],
    tech: ['Node.js', 'MySQL', 'Express', 'Vanilla JS'],
    highlight: 'Lógica transaccional sólida y persistencia estructurada.',
    icon: <ExternalLink size={24} color="var(--accent-secondary)" />
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
          Proyectos <span>Destacados</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
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
                      color: '#a5b4fc',
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
                    <span style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }}>▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Highlight Note */}
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginBottom: '1.25rem', fontStyle: 'italic', borderLeft: '2px solid var(--accent-primary)', paddingLeft: '0.75rem' }}>
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

export default Projects;
