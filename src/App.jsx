import { Server, BookOpen } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-10 px-6 shadow">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Server size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Wiki — Windows Server (Unidad 2)
            </h1>
            <p className="text-slate-300 mt-1">
              TI3V35 — Sistemas Operativos
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-slate-700" />
            <h2 className="text-xl font-semibold text-slate-800">
              Bienvenida
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Guía paso a paso del laboratorio de Windows Server.
            Cada criterio (2.1.1 a 2.1.5) se incorpora como un
            componente en el menú superior.
          </p>
        </div>
      </main>
      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Estudiante: Maribel Gonzalez</span>
          <span>Docente: Rubén Schnettler L. — INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App