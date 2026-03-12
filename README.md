# Estudio Tesis - Defensa Doctoral

Aplicacion web de estudio y preparacion para la defensa de tesis doctoral **"Sistemas de Informacion Gerencial en la Gestion Educativa: un Analisis desde la Revision Sistematica"**.

Desplegada en GitHub Pages: https://jucarore.github.io/tesis-estudio/

## Para que sirve

Es una herramienta interactiva que reune todo el material necesario para preparar y realizar la defensa oral de la tesis. Incluye el contenido de la tesis organizado por secciones, el guion del discurso, herramientas de autoevaluacion y un teleprompter para la presentacion en vivo.

## Secciones

| Seccion | Descripcion |
|---------|-------------|
| **Contenido** | Resumen de la tesis organizado en acordeones: vision general, marco teorico, metodologia, resultados, conclusiones |
| **Discurso** | Guion completo slide por slide (12 slides, 20-25 min) con tips de presentacion |
| **Guia** | Material ampliado de estudio para preparar la defensa |
| **Quiz** | Preguntas de opcion multiple por categoria para autoevaluacion |
| **Flashcards** | Tarjetas de estudio con pregunta/respuesta, filtrables por tema |
| **Jurado** | 16 preguntas probables del jurado organizadas por dificultad, con respuestas modelo |
| **Teleprompter** | App de scroll automatico del discurso para usar durante la presentacion (abre en nueva pestana) |

## Tecnologias

- **HTML, CSS y JavaScript vanilla** — sin frameworks ni dependencias externas
- **GitHub Pages** para el despliegue
- Diseno responsive (mobile-first)
- Todo el contenido se carga desde `js/data.js` (no requiere backend)

## Estructura del proyecto

```
web-estudio/
├── index.html            # Pagina principal (navegacion entre secciones)
├── teleprompter.html     # App standalone de teleprompter
├── css/
│   └── styles.css        # Estilos de toda la aplicacion
└── js/
    ├── data.js           # Datos: contenido tesis, discurso, quiz, flashcards, jurado
    ├── app.js            # Navegacion, acordeones, render de contenido/discurso/guia/jurado
    ├── quiz.js           # Logica del quiz (filtros, progreso, resultados)
    └── flashcards.js     # Logica de flashcards (flip, navegacion, shuffle)
```

## Instalacion y uso local

No requiere instalacion. Es un sitio estatico que se puede abrir directamente en el navegador.

**Opcion 1 — Abrir el archivo directamente:**

```bash
open index.html
```

**Opcion 2 — Servidor local (recomendado):**

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx serve .
```

Luego abrir http://localhost:8000 en el navegador.

**Opcion 3 — Clonar desde GitHub:**

```bash
git clone https://github.com/jucarore/tesis-estudio.git
cd tesis-estudio
open index.html
```

## Despliegue

El sitio se despliega automaticamente en GitHub Pages desde la rama `main`. Cada push actualiza el sitio en https://jucarore.github.io/tesis-estudio/.

## Autor

**Juan Camilo Rodriguez Restrepo**
Doctorado en TIC — TECH Universidad Tecnologica
Director: Dr. Juan Pablo Ucan Pech
