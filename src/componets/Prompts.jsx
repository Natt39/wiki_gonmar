import React from 'react';

export default function Prompts() {
  return (
    <div style={cardEstilo}>
      <h2>Transversal — Uso de IA y Bitácora de Prompts</h2>
      <p>Registro del proceso de co-creación y resolución de problemas de código y configuración utilizando Inteligencia Artificial.</p>
      <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '6px', marginBottom: '10px' }}>
        <strong>Prompt inicial:</strong> <em>"no abre este archivo... que debo hacer... estoy contra tiempo"</em>
        <br /><strong>Resultado / Corrección:</strong> Se detectó que las carpetas estaban compactadas en VS Code y se modificaron las rutas en App.jsx para corregir errores de importación de Vite.
      </div>
    </div>
  );
}
const cardEstilo = { background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };