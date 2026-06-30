# Bitácora de uso de IA — wiki_gonmar
**Estudiante:** Maribel Natalia González Fuentes  
**Asignatura:** TI3V35 — Sistemas Operativos  
**Docente:** Rubén Schnettler L.  
**Herramienta utilizada:** Claude (claude.ai) — chatbot externo

---

## Introducción

Durante el desarrollo de esta evaluación utilicé Claude como asistente de IA
para apoyar tanto la configuración del laboratorio de Windows Server como la
construcción de la wiki en React. A continuación se registran los prompts
utilizados por sección, qué se aceptó, qué se corrigió y por qué.

---

## Sección: Entorno web (Guía 1)

**Prompt utilizado:**
"Necesito realizar este trabajo para entregarlo. Ayúdame a configurar el
entorno desde cero: Node.js, Git, VS Code, proyecto React con Vite,
repositorio GitHub y despliegue en Vercel."

**Herramienta:** Claude (chatbot externo)

**Qué se aceptó:**
- La secuencia de comandos para crear el proyecto con Vite:
  `npm create vite@latest wiki_gonmar -- --template react`
- La configuración de Tailwind CSS en `vite.config.js` y `src/index.css`
- El código base de `src/App.jsx` con encabezado, tarjeta de bienvenida
  y pie de página

**Qué se corrigió:**
- La guía indicaba crear el proyecto en `C:\` pero lo creé en `D:\`
  por espacio disponible. Claude adaptó las instrucciones sin problema.

**Justificación:**
El asistente guió paso a paso la verificación de herramientas y la
configuración del entorno. Se validó cada resultado en la terminal antes
de avanzar al siguiente paso.

---

## Sección: Estructura de documentación

**Prompt utilizado:**
"¿Cómo creo la carpeta docs_gonmar con los 7 archivos .md y la subcarpeta
img_gonmar dentro del proyecto React?"

**Herramienta:** Claude (chatbot externo)

**Qué se aceptó:**
- La estructura de carpetas y nombres exactos de los 7 archivos `.md`
  con el sufijo `_gonmar`

**Qué se corrigió:**
- Nada. La estructura coincidía exactamente con lo indicado en la guía
  de la evaluación.

---

## Sección: Criterio 2.1.2 — Active Directory

**Prompt utilizado:**
"¿Esto cubre el criterio 2.1.2? Tengo el dominio creado, una OU llamada
OU_Ventas, un usuario gonmar y el grupo G-Ventas."

**Herramienta:** Claude (chatbot externo)

**Qué se aceptó:**
- La observación de que la OU debía llamarse `Ventas` y no `OU_Ventas`
- La indicación de que faltaba un segundo usuario para cumplir la rúbrica

**Qué se corrigió:**
- Renombré la OU de `OU_Ventas` a `Ventas` siguiendo la guía del docente
- Creé un segundo usuario dentro de la OU Ventas y lo agregué al grupo
  G-Ventas

**Justificación:**
La rúbrica exige explícitamente "al menos 1 OU, 2 usuarios y 1 grupo"
para nivel Habilitado. El asistente detectó que solo había 1 usuario y
señaló la corrección necesaria antes de continuar.

---

## Sección: Criterio 2.1.3 — Incorporación del cliente al dominio

**Prompt utilizado:**
"Indícame el paso a paso para unir el cliente Windows 10 al dominio
inacap.local y qué capturas debo tomar para la evaluación."

**Herramienta:** Claude (chatbot externo)

**Qué se aceptó:**
- La secuencia completa: ipconfig → ping → sysdm.cpl → unión al dominio
  → reinicio → login como INACAP\gonmar
- Las capturas recomendadas para evidenciar cada paso

**Qué se corrigió:**
- Se verificó previamente que la fecha y hora del cliente coincidieran
  con el servidor, tal como indica la guía para evitar errores de
  credenciales.

---

## Reflexión final — Agente vs Chatbot

Durante esta evaluación utilicé Claude como **chatbot externo** (desde
el navegador en claude.ai), no como agente integrado en VS Code.

**Diferencias que observé:**

| Característica | Agente (Copilot en VS Code) | Chatbot externo (Claude) |
|---|---|---|
| Acceso al proyecto | Lee los archivos directamente | Solo ve lo que le pegas |
| Contexto | Conoce toda la estructura | Solo el mensaje actual |
| Correcciones | Puede editar archivos | Propone código para copiar |
| Velocidad | Más rápido para código | Requiere más pasos manuales |

**Lo que funcionó bien con el chatbot:**
Claude fue útil para guiar procesos paso a paso, especialmente para
la configuración del servidor y el laboratorio de Windows Server, donde
no se trata de generar código sino de seguir procedimientos. Para esas
tareas, un chatbot externo funciona igual de bien que un agente.

**Lo que habría sido mejor con un agente:**
Para construir los componentes React de la wiki, un agente integrado
en VS Code habría sido más eficiente porque puede leer directamente
los archivos `.md` de `docs_gonmar/` y generar el componente sin
necesidad de copiar y pegar el contenido manualmente.

**Conclusión:**
El uso de IA como apoyo requiere criterio: hay que validar cada
respuesta, corregir lo que no coincide con la guía del docente, y
entender el resultado antes de aceptarlo. La IA no reemplaza el
trabajo propio sino que lo apoya cuando se usa con prompts específicos
y se verifica cada paso.