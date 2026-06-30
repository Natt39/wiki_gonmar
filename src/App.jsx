import React, { useState } from 'react';
// IMPORTACIÓN DE COMPONENTES EXIGIDOS EN LA RÚBRICA
import Inicio from './components/Inicio';
import Instalacion from './components/Instalacion';
import ActiveDirectory from './components/ActiveDirectory';
import Cliente from './components/Cliente';
import ServiciosRed from './components/ServiciosRed';
import Gpo from './components/Gpo';
import Prompts from './components/Prompts';

export default function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');

  // FUNCIÓN PARA RENDERIZAR LA PANTALLA SEGÚN EL MENÚ SELECCIONADO
  const renderPantalla = () => {
    switch (seccionActual) {
      case 'inicio': return <Inicio />;
      case 'instalacion': return <Instalacion />;
      case 'activedirectory': return <ActiveDirectory />;
      case 'cliente': return <Cliente />;
      case 'serviciosred': return <ServiciosRed />;
      case 'gpo': return <Gpo />;
      case 'prompts': return <Prompts />;
      default: return <Inicio />;
    }
  };

  return (
    <div style={{ background: '#f4f6f9', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* MENÚ SUPERIOR EXIGIDO POR LA EVALUACIÓN */}
      <header style={{ background: '#0f172a', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '20px' }}>Wiki — Windows Server (Unidad 2)</h1>
          <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>TI3V35 — Sistemas Operativos — Maribel Gonzalez</p>
        </div>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setSeccionActual('inicio')} style={btnEstilo}>Inicio</button>
          <button onClick={() => setSeccionActual('instalacion')} style={btnEstilo}>2.1.1 Instalación</button>
          <button onClick={() => setSeccionActual('activedirectory')} style={btnEstilo}>2.1.2 AD & Objetos</button>
          <button onClick={() => setSeccionActual('cliente')} style={btnEstilo}>2.1.3 Cliente Dom.</button>
          <button onClick={() => setSeccionActual('serviciosred')} style={btnEstilo}>2.1.4 DNS/DHCP</button>
          <button onClick={() => setSeccionActual('gpo')} style={btnEstilo}>2.1.5 GPO</button>
          <button onClick={() => setSeccionActual('prompts')} style={btnEstilo}>Bitácora IA</button>
        </nav>
      </header>

      <main style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {renderPantalla()}
      </main>
    </div>
  );
}

const btnEstilo = {
  background: '#334155',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '13px'
};