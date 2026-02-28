// ============================================================
// DATA.JS - Contenido de la tesis, preguntas y flashcards
// ============================================================

const THESIS_CONTENT = {
  general: {
    title: 'Sistemas de Informacion Gerencial en la Gestion Educativa: un Analisis desde la Revision Sistematica',
    university: 'TECH Universidad Tecnologica',
    program: 'Doctorado en Tecnologias de la Informacion y Comunicacion (TIC)',
    director: 'Doctor Juan Pablo Ucan Pech',
    author: 'Juan Camilo Rodriguez Restrepo'
  },

  sections: [
    {
      id: 'vision',
      title: 'Vision General',
      content: `
        <h3>Pregunta Central</h3>
        <p>"Como se configuran, implementan y aprovechan los SIG en los procesos de gestion educativa, y que factores condicionan su efectividad segun la literatura academica reciente?"</p>

        <h3>Supuesto de Investigacion</h3>
        <p>Los SIG se configuran como herramientas estrategicas cuya relevancia y efectividad <strong>NO son inherentes al software</strong>, sino que se construyen en la interaccion con las practicas de gestion, las necesidades institucionales y las condiciones del entorno.</p>

        <h3>Objetivos Especificos</h3>
        <ul>
          <li><strong>OE1:</strong> Clasificar tipologias de SIG (EMIS, SIS, ERP, BI/Analytics)</li>
          <li><strong>OE2:</strong> Identificar factores criticos de exito y barreras</li>
          <li><strong>OE3:</strong> Evaluar impacto de SIG en mejora de procesos de gestion</li>
          <li><strong>OE4:</strong> Detectar brechas en investigacion actual</li>
          <li><strong>OE5:</strong> Formular recomendaciones para practica gerencial y politicas publicas</li>
        </ul>

        <h3>Conclusion Principal</h3>
        <p><em>"Los SIG son herramientas NECESARIAS pero NO SUFICIENTES. Su transformacion a herramientas estrategicas depende de una inversion equilibrada en el componente humano y organizativo."</em></p>
      `
    },
    {
      id: 'marco',
      title: 'Marco Teorico',
      content: `
        <h3>Tres Pilares del Marco Teorico</h3>

        <h4>1. Tipologias de SIG</h4>
        <table>
          <thead><tr><th>Tipologia</th><th>Porcentaje en literatura</th></tr></thead>
          <tbody>
            <tr><td>EMIS (Education Management Information Systems)</td><td>31%</td></tr>
            <tr><td>SIS (Student Information Systems)</td><td>25%</td></tr>
            <tr><td>ERP (Enterprise Resource Planning)</td><td>22%</td></tr>
            <tr><td>BI/Analytics (Business Intelligence)</td><td>22%</td></tr>
          </tbody>
        </table>

        <h4>2. Modelos Teoricos</h4>
        <ul>
          <li><strong>DeLone & McLean:</strong> 6 dimensiones de exito de sistemas de informacion (calidad del sistema, calidad de la informacion, calidad del servicio, uso, satisfaccion del usuario, beneficios netos)</li>
          <li><strong>TOE de Tornatzky & Fleischer:</strong> Tres contextos para adopcion tecnologica: Tecnologia - Organizacion - Entorno</li>
          <li><strong>UTAUT de Venkatesh:</strong> Modelo de aceptacion individual de tecnologia (expectativa de rendimiento, expectativa de esfuerzo, influencia social, condiciones facilitadoras)</li>
        </ul>

        <h4>3. Perspectiva Socio-Tecnica (Eje Transversal)</h4>
        <p>Los SIG como ecosistemas de interaccion entre: <strong>tecnologia - personas - procesos - contexto</strong>. No se pueden entender los SIG solo desde lo tecnologico; requieren analisis de la interaccion entre componentes humanos y tecnicos.</p>
      `
    },
    {
      id: 'metodologia',
      title: 'Metodologia',
      content: `
        <h3>Tipo de Estudio</h3>
        <p>Revision Sistematica de Literatura (RSL) con enfoque <strong>cualitativo-interpretativo</strong></p>

        <h3>Protocolo</h3>
        <p>Kitchenham & Charters + PRISMA 2020</p>

        <h3>Parametros de Busqueda</h3>
        <ul>
          <li><strong>Periodo:</strong> 2014-2025</li>
          <li><strong>Idiomas:</strong> espanol, ingles, portugues</li>
          <li><strong>Bases de datos:</strong> Scopus, Web of Science, ERIC, ScienceDirect, SciELO, Redalyc, Dialnet, Google Scholar (8 bases)</li>
        </ul>

        <h3>Herramienta de Analisis</h3>
        <p><strong>ATLAS.ti</strong> - codificacion cualitativa y analisis de co-ocurrencias</p>

        <h3>Flujo PRISMA</h3>
        <div class="prisma-flow">
          <p>650 registros iniciales &rarr; 258 duplicados eliminados &rarr; 392 cribados &rarr; 304 no relevantes eliminados &rarr; 88 elegibles &rarr; 56 excluidos tras lectura completa &rarr; <strong>32 estudios finales</strong></p>
        </div>
        <p>Ratio de inclusion: ~5%, consistente con otras RSL rigurosas.</p>
      `
    },
    {
      id: 'resultados',
      title: 'Resultados',
      content: `
        <h3>Hallazgo Central</h3>
        <p><strong>Las barreras ORGANIZACIONALES son MAS persistentes que las tecnologicas.</strong></p>

        <h3>Facilitadores (por co-ocurrencia en ATLAS.ti)</h3>
        <table>
          <thead><tr><th>Factor</th><th>Frecuencia</th></tr></thead>
          <tbody>
            <tr><td>Liderazgo institucional</td><td>25/32</td></tr>
            <tr><td>Capacitacion estrategica</td><td>22/32</td></tr>
            <tr><td>Calidad de datos</td><td>20/32</td></tr>
            <tr><td>Infraestructura</td><td>18/32</td></tr>
            <tr><td>Gestion del cambio</td><td>16/32</td></tr>
          </tbody>
        </table>

        <h3>Barreras</h3>
        <table>
          <thead><tr><th>Barrera</th><th>Frecuencia</th></tr></thead>
          <tbody>
            <tr><td>Resistencia al cambio</td><td>26/32</td></tr>
            <tr><td>Silos de informacion</td><td>21/32</td></tr>
            <tr><td>Capacitacion insuficiente</td><td>19/32</td></tr>
            <tr><td>Infraestructura limitada</td><td>17/32</td></tr>
            <tr><td>Falta de gobernanza de datos</td><td>15/32</td></tr>
          </tbody>
        </table>

        <h3>Impacto en 3 Niveles</h3>
        <ul>
          <li><strong>Operativo:</strong> Automatizacion de procesos (matricula, calificaciones, asistencia)</li>
          <li><strong>Tactico:</strong> Seguimiento de rendimiento estudiantil, identificacion de desercion</li>
          <li><strong>Estrategico:</strong> Planificacion basada en evidencia, transparencia, rendicion de cuentas</li>
        </ul>

        <h3>Brecha Global vs Colombia</h3>
        <ul>
          <li><strong>Global:</strong> Mayor avance con BI y ERP</li>
          <li><strong>Colombia:</strong> SIG en fases iniciales, predominan SIS y EMIS en uso basico</li>
        </ul>
      `
    },
    {
      id: 'conclusiones',
      title: 'Conclusiones y Recomendaciones',
      content: `
        <h3>Conclusion Principal</h3>
        <p><em>"Los SIG son herramientas necesarias pero no suficientes para la mejora de la gestion educativa. Su transformacion a herramientas estrategicas depende de una inversion equilibrada en el componente humano y organizativo."</em></p>

        <h3>Recomendaciones para Directivos y Administradores</h3>
        <ul>
          <li>Priorizar gobernanza de datos (comites de calidad, interoperabilidad)</li>
          <li>Desarrollar liderazgo con vision digital</li>
          <li>Capacitacion estrategica: uso de analitica para tomar decisiones, no solo operar el sistema</li>
        </ul>

        <h3>Recomendaciones para Politicas Publicas</h3>
        <ul>
          <li>Promover estandares abiertos de intercambio de datos a nivel nacional/regional</li>
          <li>Invertir en infraestructura critica (conectividad en areas rurales)</li>
        </ul>

        <h3>Recomendaciones para Comunidad Academica</h3>
        <ul>
          <li>Estudios longitudinales de 3 a 5 anos que midan impacto real</li>
          <li>Investigacion comparativa en contextos de America Latina</li>
        </ul>

        <h3>Limitaciones del Estudio</h3>
        <ul>
          <li>Sesgo de publicacion: solo literatura indexada, excluye "literatura gris"</li>
          <li>No se infiere causalidad, solo correlaciones y asociaciones</li>
          <li>Heterogeneidad de contextos educativos</li>
        </ul>

        <h3>Frases Fuerza</h3>
        <ol>
          <li>"Los SIG son herramientas necesarias pero no suficientes para la mejora de la gestion educativa."</li>
          <li>"El exito de un SIG no depende del software en si, sino de como se integra con las practicas de gestion, la cultura organizacional y las condiciones del entorno."</li>
          <li>"Las barreras organizacionales son mas persistentes que las tecnologicas: la resistencia al cambio supera a la falta de infraestructura."</li>
          <li>"La gobernanza de datos no es un problema tecnico, es un problema de politicas y liderazgo institucional."</li>
        </ol>
      `
    }
  ]
};

// ============================================================
// QUIZ - Preguntas de opcion multiple
// ============================================================

const QUIZ_QUESTIONS = [
  // --- METODOLOGIA ---
  {
    category: 'Metodologia',
    question: 'Cual es el tipo de estudio utilizado en esta tesis?',
    options: [
      'Estudio de caso multiple con enfoque cuantitativo',
      'Revision Sistematica de Literatura (RSL) con enfoque cualitativo-interpretativo',
      'Investigacion-accion participativa en instituciones educativas',
      'Estudio experimental con grupo control y grupo tratamiento'
    ],
    correct: 1,
    explanation: 'La tesis emplea una Revision Sistematica de Literatura (RSL) con enfoque cualitativo-interpretativo, siguiendo el protocolo de Kitchenham & Charters + PRISMA 2020.'
  },
  {
    category: 'Metodologia',
    question: 'Que protocolo metodologico se siguio para la RSL?',
    options: [
      'Cochrane y Meta-analisis',
      'PRISMA 2020 y Kitchenham & Charters',
      'Grounded Theory y codificacion abierta',
      'CASP y JBI'
    ],
    correct: 1,
    explanation: 'Se utilizo el protocolo de Kitchenham & Charters combinado con las directrices PRISMA 2020 para garantizar la sistematicidad y transparencia de la revision.'
  },
  {
    category: 'Metodologia',
    question: 'Cuantas bases de datos academicas se consultaron?',
    options: [
      '5 bases de datos',
      '6 bases de datos',
      '8 bases de datos',
      '10 bases de datos'
    ],
    correct: 2,
    explanation: 'Se consultaron 8 bases: Scopus, Web of Science, ERIC, ScienceDirect, SciELO, Redalyc, Dialnet y Google Scholar.'
  },
  {
    category: 'Metodologia',
    question: 'Cual fue la herramienta de analisis cualitativo utilizada?',
    options: [
      'NVivo',
      'MAXQDA',
      'ATLAS.ti',
      'Dedoose'
    ],
    correct: 2,
    explanation: 'Se utilizo ATLAS.ti para la codificacion cualitativa y el analisis de co-ocurrencias entre categorias.'
  },
  {
    category: 'Metodologia',
    question: 'Cual fue el periodo de busqueda de la literatura?',
    options: [
      '2010-2023',
      '2014-2025',
      '2015-2024',
      '2018-2025'
    ],
    correct: 1,
    explanation: 'El periodo de busqueda fue de 2014 a 2025, cubriendo mas de una decada de literatura academica.'
  },
  {
    category: 'Metodologia',
    question: 'En que idiomas se busco la literatura?',
    options: [
      'Solo espanol e ingles',
      'Espanol, ingles y frances',
      'Espanol, ingles y portugues',
      'Espanol, ingles, portugues y aleman'
    ],
    correct: 2,
    explanation: 'Se busco en tres idiomas: espanol, ingles y portugues, ampliando la cobertura a literatura iberoamericana.'
  },

  // --- NUMEROS CLAVE ---
  {
    category: 'Numeros Clave',
    question: 'Cuantos estudios se identificaron inicialmente en la busqueda?',
    options: [
      '392',
      '500',
      '650',
      '800'
    ],
    correct: 2,
    explanation: 'Se identificaron 650 registros iniciales en las 8 bases de datos consultadas.'
  },
  {
    category: 'Numeros Clave',
    question: 'Cuantos estudios conformaron la muestra final?',
    options: [
      '24 estudios',
      '32 estudios',
      '45 estudios',
      '56 estudios'
    ],
    correct: 1,
    explanation: 'Tras aplicar los criterios de inclusion/exclusion del protocolo PRISMA, la muestra final quedo en 32 estudios.'
  },
  {
    category: 'Numeros Clave',
    question: 'Cuantos registros duplicados se eliminaron?',
    options: [
      '150',
      '200',
      '258',
      '304'
    ],
    correct: 2,
    explanation: 'Se eliminaron 258 registros duplicados de los 650 iniciales, dejando 392 para cribado.'
  },
  {
    category: 'Numeros Clave',
    question: 'Cual es el ratio de inclusion de estudios en la RSL?',
    options: [
      'Aproximadamente 2%',
      'Aproximadamente 5%',
      'Aproximadamente 10%',
      'Aproximadamente 15%'
    ],
    correct: 1,
    explanation: 'El ratio de inclusion fue de aproximadamente 5% (32 de 650), consistente con otras RSL rigurosas.'
  },
  {
    category: 'Numeros Clave',
    question: 'En cuantos de los 32 estudios aparece el "liderazgo institucional" como facilitador?',
    options: [
      '18/32',
      '20/32',
      '22/32',
      '25/32'
    ],
    correct: 3,
    explanation: 'El liderazgo institucional es el facilitador con mayor frecuencia de co-ocurrencia: 25 de 32 estudios.'
  },
  {
    category: 'Numeros Clave',
    question: 'En cuantos estudios se identifica la "resistencia al cambio" como barrera?',
    options: [
      '19/32',
      '21/32',
      '24/32',
      '26/32'
    ],
    correct: 3,
    explanation: 'La resistencia al cambio es la barrera mas frecuente, identificada en 26 de 32 estudios.'
  },

  // --- MARCO TEORICO ---
  {
    category: 'Marco Teorico',
    question: 'Cuales son los tres pilares del marco teorico?',
    options: [
      'Tecnologia, Economia, Sociedad',
      'Tipologias de SIG, Modelos Teoricos, Perspectiva Socio-Tecnica',
      'Hardware, Software, Recursos Humanos',
      'Gestion, Innovacion, Educacion'
    ],
    correct: 1,
    explanation: 'Los tres pilares son: (1) Tipologias de SIG, (2) Modelos Teoricos (DeLone & McLean, TOE, UTAUT), y (3) Perspectiva Socio-Tecnica como eje transversal.'
  },
  {
    category: 'Marco Teorico',
    question: 'Que mide el modelo de DeLone & McLean?',
    options: [
      'La adopcion individual de tecnologia',
      'El exito de los sistemas de informacion en 6 dimensiones',
      'Los factores del entorno organizacional',
      'La madurez digital de las instituciones'
    ],
    correct: 1,
    explanation: 'DeLone & McLean propone 6 dimensiones de exito: calidad del sistema, calidad de la informacion, calidad del servicio, uso, satisfaccion del usuario y beneficios netos.'
  },
  {
    category: 'Marco Teorico',
    question: 'Que tres contextos analiza el marco TOE de Tornatzky & Fleischer?',
    options: [
      'Tiempo, Operacion, Estrategia',
      'Tecnologia, Organizacion, Entorno',
      'Tecnica, Objetivo, Ejecucion',
      'Transformacion, Optimizacion, Evaluacion'
    ],
    correct: 1,
    explanation: 'TOE (Technology-Organization-Environment) analiza tres contextos: Tecnologia, Organizacion y Entorno para la adopcion tecnologica.'
  },
  {
    category: 'Marco Teorico',
    question: 'Que modelo teorico se enfoca en la aceptacion individual de la tecnologia?',
    options: [
      'DeLone & McLean',
      'TOE de Tornatzky & Fleischer',
      'UTAUT de Venkatesh',
      'Perspectiva Socio-Tecnica'
    ],
    correct: 2,
    explanation: 'UTAUT (Unified Theory of Acceptance and Use of Technology) de Venkatesh se enfoca en la aceptacion individual, considerando expectativa de rendimiento, esfuerzo, influencia social y condiciones facilitadoras.'
  },
  {
    category: 'Marco Teorico',
    question: 'Cual es la tipologia de SIG mas frecuente en la literatura revisada?',
    options: [
      'ERP (22%)',
      'SIS (25%)',
      'EMIS (31%)',
      'BI/Analytics (22%)'
    ],
    correct: 2,
    explanation: 'EMIS (Education Management Information Systems) es la tipologia mas frecuente con un 31% de presencia en la literatura.'
  },
  {
    category: 'Marco Teorico',
    question: 'Que significa la perspectiva socio-tecnica en el contexto de esta tesis?',
    options: [
      'Que los SIG son puramente herramientas tecnologicas',
      'Que los SIG son ecosistemas de interaccion entre tecnologia, personas, procesos y contexto',
      'Que la sociedad determina el tipo de tecnologia',
      'Que los aspectos tecnicos son mas importantes que los sociales'
    ],
    correct: 1,
    explanation: 'La perspectiva socio-tecnica entiende los SIG como ecosistemas donde interactuan tecnologia, personas, procesos y contexto, no solo como herramientas tecnologicas aisladas.'
  },

  // --- RESULTADOS ---
  {
    category: 'Resultados',
    question: 'Cual es el hallazgo central de la tesis?',
    options: [
      'La falta de presupuesto es el principal obstculo para los SIG',
      'Las barreras organizacionales son mas persistentes que las tecnologicas',
      'Los SIG solo funcionan en paises desarrollados',
      'La tecnologia cloud resuelve todos los problemas de implementacion'
    ],
    correct: 1,
    explanation: 'El hallazgo central es que las barreras ORGANIZACIONALES son MAS persistentes que las tecnologicas, lo que implica que invertir solo en tecnologia no garantiza el exito.'
  },
  {
    category: 'Resultados',
    question: 'Cual es el facilitador con mayor frecuencia de co-ocurrencia?',
    options: [
      'Infraestructura adecuada',
      'Calidad de datos',
      'Capacitacion estrategica',
      'Liderazgo institucional'
    ],
    correct: 3,
    explanation: 'El liderazgo institucional aparece en 25 de 32 estudios, siendo el facilitador mas recurrente para el exito de los SIG.'
  },
  {
    category: 'Resultados',
    question: 'A que nivel de impacto corresponde la "planificacion basada en evidencia"?',
    options: [
      'Nivel operativo',
      'Nivel tactico',
      'Nivel estrategico',
      'Nivel tecnico'
    ],
    correct: 2,
    explanation: 'La planificacion basada en evidencia, transparencia y rendicion de cuentas corresponden al nivel estrategico de impacto de los SIG.'
  },
  {
    category: 'Resultados',
    question: 'En que situacion se encuentra Colombia respecto a los SIG educativos?',
    options: [
      'Lidera la implementacion en America Latina',
      'Esta en fases iniciales, predominan SIS y EMIS en uso basico',
      'Ha implementado BI y ERP en todas sus instituciones',
      'No tiene ningun tipo de SIG en educacion'
    ],
    correct: 1,
    explanation: 'Colombia se encuentra en fases iniciales de implementacion, predominando el uso basico de SIS y EMIS, a diferencia del avance global con BI y ERP.'
  },
  {
    category: 'Resultados',
    question: 'Que tipo de proceso corresponde al nivel operativo de impacto de los SIG?',
    options: [
      'Planificacion estrategica y rendicion de cuentas',
      'Seguimiento de rendimiento estudiantil y desercion',
      'Automatizacion de matricula, calificaciones y asistencia',
      'Toma de decisiones basada en analitica'
    ],
    correct: 2,
    explanation: 'El nivel operativo incluye la automatizacion de procesos administrativos como matricula, calificaciones y asistencia.'
  },

  // --- PREGUNTAS DEL JURADO ---
  {
    category: 'Preguntas del Jurado',
    question: 'Por que se eligio una RSL y no un estudio empirico?',
    options: [
      'Porque es mas facil y rapida de ejecutar',
      'Porque el campo presenta alta fragmentacion conceptual y la RSL permite sintetizar evidencia dispersa',
      'Porque no habia acceso a instituciones educativas',
      'Porque el director de tesis lo recomendo'
    ],
    correct: 1,
    explanation: 'El campo presenta alta fragmentacion conceptual y metodologica. La RSL permite sintetizar y unificar evidencia dispersa bajo un marco analitico coherente.'
  },
  {
    category: 'Preguntas del Jurado',
    question: 'Como se justifica la seleccion de solo 32 estudios de 650 iniciales?',
    options: [
      'Se eligieron al azar los mas recientes',
      'Solo 32 estaban en espanol',
      'El ratio de ~5% es normal y consistente con otras RSL con protocolo PRISMA',
      'Los demas no estaban disponibles en texto completo'
    ],
    correct: 2,
    explanation: 'Es normal en RSL con protocolo PRISMA. De 650: 258 duplicados, 304 no relevantes por titulo/resumen, 56 excluidos tras lectura completa. El ratio de ~5% es consistente con otras RSL.'
  },
  {
    category: 'Preguntas del Jurado',
    question: 'Que diferencia esta RSL de otras revisiones similares?',
    options: [
      'Tiene mas estudios incluidos que cualquier otra',
      'Es la unica realizada en espanol',
      'Su enfoque integrador bajo perspectiva socio-tecnica e integracion de 4 tipologias con ATLAS.ti',
      'Incluye un componente experimental'
    ],
    correct: 2,
    explanation: 'Se distingue por: enfoque integrador bajo perspectiva socio-tecnica, integracion de las 4 tipologias bajo un mismo marco analitico, y uso de ATLAS.ti que aporta dimension cuantitativa.'
  },
  {
    category: 'Preguntas del Jurado',
    question: 'Que haria diferente si repitiera la investigacion?',
    options: [
      'Usaria solo bases de datos en ingles',
      'Incluiria literatura gris, mas bases latinoamericanas y entrevistas a directivos',
      'Reduciria el periodo de busqueda',
      'Eliminaria el analisis con ATLAS.ti'
    ],
    correct: 1,
    explanation: 'Tres mejoras: (1) Incluir "literatura gris", (2) Extender busqueda a mas bases de America Latina, (3) Complementar con entrevistas a directivos educativos.'
  },
  {
    category: 'Preguntas del Jurado',
    question: 'Que evidencia respalda la importancia de la gobernanza de datos?',
    options: [
      'Solo la opinion del autor',
      'Co-ocurrencia alta entre "falta de interoperabilidad" y "silos de informacion" en ATLAS.ti, respaldada por estudios especificos',
      'Un unico estudio de caso en Colombia',
      'Datos estadisticos del Ministerio de Educacion'
    ],
    correct: 1,
    explanation: 'Se evidencia por la co-ocurrencia alta en ATLAS.ti entre "falta de interoperabilidad" y "silos de informacion", respaldada por estudios como Kaindaneh y de Kadt (2024) y Sequeira et al. (2024).'
  },
  {
    category: 'Preguntas del Jurado',
    question: 'Como se aplican los hallazgos a America Latina?',
    options: [
      'No se aplican, son exclusivos de paises desarrollados',
      'Se aplican igual que en cualquier otra region',
      'Las barreras de infraestructura son mas pronunciadas, la resistencia al cambio es cultural y la brecha urbano-rural es significativa',
      'Solo se aplican a Colombia'
    ],
    correct: 2,
    explanation: 'En America Latina las barreras de infraestructura y conectividad son mas pronunciadas, la resistencia al cambio tiene componentes culturales propios, y la brecha urbano-rural es significativa.'
  }
];

// ============================================================
// FLASHCARDS
// ============================================================

const FLASHCARDS = [
  // --- CONCEPTOS CLAVE ---
  {
    category: 'Conceptos Clave',
    front: 'Que es un SIG en el contexto educativo?',
    back: 'Un Sistema de Informacion Gerencial (SIG) es un conjunto integrado de tecnologia, personas y procesos que recopila, almacena, procesa y distribuye informacion para apoyar la toma de decisiones en la gestion educativa.'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es EMIS?',
    back: 'Education Management Information Systems. Sistemas de informacion para la gestion educativa a nivel macro (ministerios, secretarias). Tipologia mas frecuente en la literatura (31%).'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es SIS?',
    back: 'Student Information Systems. Sistemas enfocados en la gestion de datos estudiantiles: matricula, calificaciones, asistencia, historial academico. Segunda tipologia mas frecuente (25%).'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es ERP educativo?',
    back: 'Enterprise Resource Planning aplicado a educacion. Integra multiples procesos (academico, financiero, RRHH) en una sola plataforma. Representa el 22% en la literatura.'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es BI/Analytics educativo?',
    back: 'Business Intelligence y Analytics. Herramientas avanzadas de analisis de datos para toma de decisiones estrategicas: prediccion de desercion, analisis de rendimiento, dashboards. Representa el 22%.'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es una Revision Sistematica de Literatura (RSL)?',
    back: 'Metodo de investigacion riguroso y replicable que busca identificar, evaluar y sintetizar toda la evidencia relevante sobre una pregunta de investigacion, siguiendo un protocolo predefinido.'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es la perspectiva socio-tecnica?',
    back: 'Enfoque que entiende los SIG como ecosistemas de interaccion entre tecnologia, personas, procesos y contexto. No se puede analizar la tecnologia aislada del componente humano y organizativo.'
  },
  {
    category: 'Conceptos Clave',
    front: 'Que es la gobernanza de datos?',
    back: 'Conjunto de politicas, procesos y estandares para asegurar la calidad, disponibilidad, integridad e interoperabilidad de los datos. Segun la tesis, no es un problema tecnico sino de politicas y liderazgo.'
  },

  // --- MODELOS TEORICOS ---
  {
    category: 'Modelos Teoricos',
    front: 'Modelo de DeLone & McLean: cuales son sus 6 dimensiones?',
    back: '1. Calidad del sistema\n2. Calidad de la informacion\n3. Calidad del servicio\n4. Uso del sistema\n5. Satisfaccion del usuario\n6. Beneficios netos'
  },
  {
    category: 'Modelos Teoricos',
    front: 'Modelo TOE de Tornatzky & Fleischer: que analiza?',
    back: 'Tres contextos para la adopcion tecnologica:\n- Tecnologia: caracteristicas de la innovacion disponible\n- Organizacion: recursos, tamano, estructura, cultura\n- Entorno: regulaciones, competencia, presion del sector'
  },
  {
    category: 'Modelos Teoricos',
    front: 'Modelo UTAUT de Venkatesh: cuales son sus constructos?',
    back: 'Cuatro constructos principales:\n1. Expectativa de rendimiento\n2. Expectativa de esfuerzo\n3. Influencia social\n4. Condiciones facilitadoras\nModeradores: genero, edad, experiencia, voluntariedad de uso.'
  },
  {
    category: 'Modelos Teoricos',
    front: 'Que protocolo es Kitchenham & Charters?',
    back: 'Guia para realizar Revisiones Sistematicas de Literatura en Ingenieria de Software. Define tres fases: planificacion, ejecucion y reporte de la revision.'
  },
  {
    category: 'Modelos Teoricos',
    front: 'Que es PRISMA 2020?',
    back: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses. Directrices para reportar revisiones sistematicas de forma transparente, incluyendo el diagrama de flujo de seleccion de estudios.'
  },

  // --- NUMEROS IMPORTANTES ---
  {
    category: 'Numeros Importantes',
    front: 'Cuantos estudios se identificaron inicialmente?',
    back: '650 registros iniciales en 8 bases de datos academicas.'
  },
  {
    category: 'Numeros Importantes',
    front: 'Cuantos estudios conformaron la muestra final?',
    back: '32 estudios finales (ratio de inclusion ~5%).'
  },
  {
    category: 'Numeros Importantes',
    front: 'Flujo PRISMA completo',
    back: '650 iniciales -> 258 duplicados eliminados -> 392 cribados -> 304 no relevantes -> 88 elegibles -> 56 excluidos -> 32 estudios finales.'
  },
  {
    category: 'Numeros Importantes',
    front: 'Distribucion de tipologias de SIG',
    back: 'EMIS: 31% | SIS: 25% | ERP: 22% | BI/Analytics: 22%'
  },
  {
    category: 'Numeros Importantes',
    front: 'Top 3 facilitadores por frecuencia',
    back: '1. Liderazgo institucional: 25/32\n2. Capacitacion estrategica: 22/32\n3. Calidad de datos: 20/32'
  },
  {
    category: 'Numeros Importantes',
    front: 'Top 3 barreras por frecuencia',
    back: '1. Resistencia al cambio: 26/32\n2. Silos de informacion: 21/32\n3. Capacitacion insuficiente: 19/32'
  },
  {
    category: 'Numeros Importantes',
    front: 'Cuantas bases de datos se consultaron y cuales?',
    back: '8 bases: Scopus, Web of Science, ERIC, ScienceDirect, SciELO, Redalyc, Dialnet, Google Scholar.'
  },

  // --- FRASES FUERZA ---
  {
    category: 'Frases Fuerza',
    front: 'Completa: "Los SIG son herramientas necesarias pero..."',
    back: '"Los SIG son herramientas necesarias pero NO SUFICIENTES para la mejora de la gestion educativa."'
  },
  {
    category: 'Frases Fuerza',
    front: 'Completa: "El exito de un SIG no depende del software en si, sino de..."',
    back: '"...como se integra con las practicas de gestion, la cultura organizacional y las condiciones del entorno."'
  },
  {
    category: 'Frases Fuerza',
    front: 'Completa: "Las barreras organizacionales son mas persistentes que..."',
    back: '"...las tecnologicas: la resistencia al cambio supera a la falta de infraestructura."'
  },
  {
    category: 'Frases Fuerza',
    front: 'Completa: "La gobernanza de datos no es un problema tecnico, es..."',
    back: '"...un problema de politicas y liderazgo institucional."'
  },
  {
    category: 'Frases Fuerza',
    front: 'Cual es el supuesto de investigacion de la tesis?',
    back: 'Los SIG se configuran como herramientas estrategicas cuya relevancia y efectividad NO son inherentes al software, sino que se construyen en la interaccion con las practicas de gestion, las necesidades institucionales y las condiciones del entorno.'
  },

  // --- GLOSARIO ---
  {
    category: 'Glosario',
    front: 'RSL',
    back: 'Revision Sistematica de Literatura. Metodo de investigacion para sintetizar evidencia academica de forma sistematica y reproducible.'
  },
  {
    category: 'Glosario',
    front: 'PRISMA',
    back: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses. Directrices para reportar revisiones sistematicas.'
  },
  {
    category: 'Glosario',
    front: 'Co-ocurrencia',
    back: 'Tecnica de analisis cualitativo que mide la frecuencia con la que dos codigos o categorias aparecen juntos en los datos. Se realizo con ATLAS.ti en esta tesis.'
  },
  {
    category: 'Glosario',
    front: 'Silos de informacion',
    back: 'Situacion donde los datos estan fragmentados en sistemas aislados que no se comunican entre si, dificultando la toma de decisiones integrada.'
  },
  {
    category: 'Glosario',
    front: 'Interoperabilidad',
    back: 'Capacidad de diferentes sistemas y organizaciones para trabajar juntos, intercambiando datos de manera efectiva y coherente.'
  },
  {
    category: 'Glosario',
    front: 'Literatura gris',
    back: 'Documentos producidos fuera de los canales de publicacion academica convencional: informes institucionales, tesis no publicadas, documentos de trabajo. Fue una limitacion de esta tesis no incluirla.'
  }
];
