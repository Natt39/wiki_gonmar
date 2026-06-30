import React from 'react';

export default function Inicio() {
  return (
    <div style={cardEstilo}>
      <h2>Portada — Wiki de Sistemas Operativos</h2>
      <p><strong>Estudiante:</strong> Maribel Gonzalez (gonmar)</p>
      <p><strong>Sección:</strong> TI3V35</p>
      <p><strong>Docente:</strong> Rubén Schnettler Lucero</p>
      <hr />
      <p>Bienvenido a la documentación técnica del laboratorio de Windows Server de la Unidad 2.</p>
    </div>
  );
}
const cardEstilo = { background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };
