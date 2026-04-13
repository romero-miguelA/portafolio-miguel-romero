import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', minHeight: '60vh', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}
        >
          ¿Qué sigue?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
        >
          Ponte en Contacto
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}
        >
          Actualmente estoy abierto a nuevas oportunidades donde pueda aportar valor con mis conocimientos Fullstack y aprender en un entorno profesional. ¡Hablemos!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
        >
          <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Configuración de Web3Forms */}
            <input type="hidden" name="access_key" value="3b639c4d-6379-4684-9f37-366b43f15b4e" />
            <input type="hidden" name="subject" value="¡Nuevo mensaje desde tu Portafolio Profesional!" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Tu Nombre</label>
              <input type="text" id="name" name="name" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Tu Correo Electrónico</label>
              <input type="email" id="email" name="email" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Tu Mensaje</label>
              <textarea id="message" name="message" required rows="4" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <Mail size={20} /> Enviar Mensaje
            </button>
          </form>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>O si prefieres, escríbeme directamente a WhatsApp</p>
            <a href="https://wa.me/573204197758" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.8rem 1.5rem', fontSize: '1rem', borderColor: '#25D366', color: '#25D366', margin: '0 auto' }}>
              <MessageCircle size={20} /> Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <footer style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
        <p>&copy; 2026 Miguel Romero. Diseñado con React.</p>
      </footer>
    </section>
  );
};

export default Contact;
