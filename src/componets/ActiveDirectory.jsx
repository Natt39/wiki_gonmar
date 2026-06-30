import React from 'react';

export default function ActiveDirectory() {
  return (
    <div style={cardEstilo}>
      <h2>Criterio 2.1.2 — Active Directory y Gestión de Objetos</h2>
      <p><strong>Configuración realizada:</strong> Promoción del equipo a Controlador de Dominio (DC) e implementación del dominio local.</p>
      <h3>Evidencia Técnica:</h3>
      {/* Esto cargará la imagen desde public/docs_gonmar/img_gonmar/ */}
      <img src="/docs_gonmar/img_gonmar/criterio_212.png" alt="Evidencia Active Directory" style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }} />
    </div>
  );
}
const cardEstilo = { background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };