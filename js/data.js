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
// DISCURSO DE DEFENSA - Guion slide por slide
// ============================================================

const DISCURSO_SLIDES = [
  {
    number: 1,
    title: 'Portada / Titulo',
    time: '~30 seg',
    slideContent: 'Titulo de la tesis + Autor + Director',
    speech: '<p>Buenos dias / Buenas tardes, miembros del jurado.</p><p>Mi nombre es Juan Camilo Rodriguez Restrepo, y hoy presento ante ustedes mi trabajo de tesis doctoral titulado "Sistemas de Informacion Gerencial en la Gestion Educativa: un Analisis desde la Revision Sistematica", desarrollado bajo la direccion del Doctor Juan Pablo Ucan Pech.</p><p>Agradezco al jurado por su tiempo y disposicion para evaluar esta investigacion.</p>',
    tip: 'Mira al jurado, no a la pantalla. Habla con calma y confianza. Este es tu momento de causar una buena primera impresion.'
  },
  {
    number: 2,
    title: 'Introduccion',
    time: '~2 min',
    slideContent: 'Contexto de la Cuarta Revolucion Industrial, los SIG como recursos estrategicos, y justificacion del estudio mediante RSL con PRISMA 2020.',
    speech: '<p>Vivimos en una era donde la Cuarta Revolucion Industrial y la transformacion digital estan redefiniendo como operan las organizaciones, y las instituciones educativas no son la excepcion.</p><p>Los Sistemas de Informacion Gerencial, conocidos como SIG, han dejado de ser simples herramientas operativas de registro y reporte, para convertirse en recursos estrategicos que permiten la toma de decisiones basada en evidencia.</p><p>Cuando hablamos de SIG en educacion, nos referimos a cuatro grandes tipologias: los EMIS para gestion educativa a nivel de sistema, los SIS para informacion estudiantil, los ERP que integran procesos administrativos, y las herramientas de BI y Analitica que permiten el analisis estrategico de datos.</p><p>Sin embargo, y aqui esta el problema central, la adopcion de estos sistemas no siempre se traduce en mejoras efectivas, medibles y sostenibles en la gestion educativa.</p><p>Por eso, esta investigacion realiza una Revision Sistematica de la Literatura del periodo 2015 a 2025, utilizando el protocolo de Kitchenham y Charters junto con el estandar PRISMA 2020, con el objetivo de identificar patrones, barreras, facilitadores, y proponer recomendaciones concretas.</p>',
    tip: 'Enfatiza la frase "no siempre se traduce en mejoras efectivas" con una pausa. Eso plantea la tension que motiva tu investigacion.'
  },
  {
    number: 3,
    title: 'El Problema',
    time: '~2-3 min',
    slideContent: 'Lista de 8 problemas identificados: infraestructura, interoperabilidad, resistencia al cambio, capacitacion, talla unica, fragmentacion, brechas AL, intuicion.',
    speech: '<p>La revision de la literatura nos permitio identificar ocho problemas recurrentes que afectan la implementacion exitosa de los SIG en educacion. Los voy a agrupar en tres grandes ejes para que quede mas claro:</p><p>Primero, los problemas TECNOLOGICOS: existe una ausencia de infraestructura adecuada, especialmente en areas rurales donde la conectividad es limitada. Ademas, los sistemas operan de forma aislada, uno para matriculas, otro para notas, otro para finanzas, generando lo que llamamos "silos de informacion" donde los datos no se comunican entre si.</p><p>Segundo, los problemas ORGANIZACIONALES, que la evidencia muestra como los mas persistentes: existe una fuerte resistencia al cambio, una falta de liderazgo con vision digital, y una capacitacion deficiente que se limita a ensenar a operar el sistema pero no a usar los datos estrategicamente.</p><p>Y tercero, los problemas ESTRUCTURALES del campo: las implementaciones tienden a ser de "talla unica", ignorando que cada institucion tiene realidades distintas. La investigacion existente esta fragmentada y dispersa, sin una sintesis critica que consolide la evidencia. Y en America Latina, estas brechas se profundizan por deficits de conectividad, talento humano e inversion en gobernanza de datos.</p><p>El resultado de todo esto es que muchas decisiones estrategicas en las instituciones educativas aun se basan en intuicion y no en datos.</p>',
    tip: 'La agrupacion en 3 ejes (tecnologico, organizacional, estructural) no esta en el slide pero ayuda al jurado a procesar la informacion. Usa tus manos para marcar: "primero, segundo, tercero".'
  },
  {
    number: 4,
    title: 'Preguntas de Investigacion',
    time: '~1-2 min',
    slideContent: 'Pregunta general + 5 preguntas especificas (PE1-PE5).',
    speech: '<p>Frente a estos problemas, nuestra investigacion se plantea una pregunta general: Cual es el estado del uso de los SIG en las instituciones educativas durante los ultimos diez anos, y cuales son los factores clave, barreras y estrategias efectivas para su exitosa integracion?</p><p>Esta pregunta general se descompone en cinco preguntas especificas que guian el estudio:</p><p>La primera busca identificar que enfoques metodologicos son mas efectivos para medir el impacto de los SIG.</p><p>La segunda indaga sobre los factores organizacionales y las limitaciones tecnologicas que afectan la implementacion.</p><p>La tercera busca clasificar las barreras recurrentes y emergentes.</p><p>La cuarta se enfoca en detectar las brechas en la literatura academica.</p><p>Y la quinta busca proponer recomendaciones practicas diferenciadas por contexto.</p><p>Cada una de estas preguntas se corresponde directamente con un objetivo especifico.</p>',
    tip: 'No leas las preguntas textualmente del slide. Parafraseealas de forma natural. El jurado puede leerlas; tu solo necesitas mostrar que las dominas.'
  },
  {
    number: 5,
    title: 'Objetivos',
    time: '~1 min',
    slideContent: 'Objetivo General + 5 Objetivos Especificos (OE1-OE5).',
    speech: '<p>El objetivo general de esta investigacion es analizar la implantacion y los efectos de los SIG en las instituciones educativas, mediante una revision sistematica cualitativa de la literatura de los ultimos diez anos.</p><p>Los cinco objetivos especificos van desde evaluar los enfoques metodologicos, pasando por determinar factores organizacionales y tecnologicos, clasificar barreras, identificar brechas en la literatura, hasta proponer recomendaciones practicas.</p><p>Es importante destacar que estos objetivos no son independientes entre si; se articulan de forma progresiva. Los primeros cuatro construyen la base de evidencia que permite al quinto objetivo generar recomendaciones fundamentadas y diferenciadas por contexto.</p>',
    tip: 'Pasa rapido por este slide. El jurado ya leyo las preguntas en el slide anterior y la estructura es la misma. Enfoca tu energia en la frase de articulacion progresiva, que muestra que tu diseno es coherente.'
  },
  {
    number: 6,
    title: 'Supuesto de Investigacion',
    time: '~2 min',
    slideContent: 'Supuesto + tres factores determinantes + conclusion.',
    speech: '<p>Esta investigacion parte de un supuesto central, y quiero enfatizar que este es probablemente el aporte mas importante de la tesis:</p><p>Partimos de que los SIG se configuran como herramientas estrategicas cuya relevancia y efectividad NO son inherentes al software que se utiliza, sino que se construyen en la interaccion con las practicas de gestion, las necesidades institucionales y las condiciones del entorno.</p><p>La evidencia analizada verifico este supuesto de forma concluyente a traves de tres factores:</p><p>Primero, el factor ORGANIZACIONAL: la efectividad del SIG esta mediada por un liderazgo fuerte y una capacitacion estrategica. La resistencia cultural y la falta de vision directiva son las principales causas de fracaso.</p><p>Segundo, el factor TECNOLOGICO y CONTEXTUAL: el exito esta severamente limitado por la infraestructura digital disponible y la calidad de los datos de entrada. Si los datos que alimentan el sistema son malos, ningun software producira resultados utiles.</p><p>Tercero, el factor ESTRATEGICO: el SIG solo genera valor cuando responde a una necesidad de gestion especifica de la institucion, no cuando es una adopcion impuesta desde arriba.</p><p>Por lo tanto, los SIG son necesarios, pero NO suficientes. Su transformacion en herramientas estrategicas depende de la inversion en el componente humano y organizativo. Esto es la perspectiva socio-tecnica que guia todo este estudio.</p>',
    tip: 'Esta es una de las slides mas IMPORTANTES. Haz pausas dramaticas antes de "NO son inherentes al software" y antes de "necesarios pero NO suficientes". Estos son los mensajes fuerza de tu tesis.'
  },
  {
    number: 7,
    title: 'Marco Teorico',
    time: '~2-3 min',
    slideContent: 'Tipologias de SIG + Modelos teoricos + Conceptos transversales.',
    speech: '<p>El marco teorico de esta investigacion se construye sobre tres pilares.</p><p>El primero son las tipologias de SIG en educacion. Identificamos cuatro tipos: los EMIS, que son sistemas nacionales o regionales que recopilan datos para politicas publicas, como el seguimiento de los Objetivos de Desarrollo Sostenible. Los SIS, que gestionan el ciclo de vida del estudiante: matricula, calificaciones, asistencia. Los ERP, que integran multiples procesos administrativos en una sola plataforma, eliminando los silos de informacion. Y las herramientas de BI y Analitica, que representan el nivel mas alto de madurez, transformando datos en informacion estrategica.</p><p>El segundo pilar son los modelos teoricos. Utilizamos tres marcos principales: el modelo de exito de DeLone y McLean, que establece que el exito de un sistema depende de la calidad del sistema, la calidad de la informacion y la calidad del servicio. El marco TOE de Tornatzky y Fleischer, que analiza la adopcion desde los contextos tecnologico, organizacional y del entorno. Y la teoria UTAUT de Venkatesh, que explica por que los usuarios individuales aceptan o rechazan la tecnologia.</p><p>Y el tercer pilar, que es transversal a toda la investigacion, es la perspectiva socio-tecnica: entender los SIG no como software aislado, sino como ecosistemas donde interactuan tecnologia, personas, procesos y contexto.</p>',
    tip: 'Estructura tu discurso en "tres pilares". Esto le da claridad al jurado y demuestra dominio. Si el jurado pregunta sobre algun modelo, tienes detalle de respaldo en la guia de estudio.'
  },
  {
    number: 8,
    title: 'Metodologia',
    time: '~3 min',
    slideContent: 'Paradigma cualitativo + RSL + PRISMA 2020 + bases de datos + ATLAS.ti.',
    speech: '<p>La metodologia de este estudio sigue un paradigma cualitativo-interpretativo, utilizando como metodo la Revision Sistematica de la Literatura.</p><p>Para garantizar el rigor, combinamos dos instrumentos: el protocolo de Kitchenham y Charters para la planificacion, ejecucion y reporte de la revision, y el estandar PRISMA 2020 para la transparencia del proceso de seleccion.</p><p>Nuestra busqueda cubrio el periodo de 2015 a 2025, en tres idiomas: espanol, ingles y portugues. Consultamos multiples bases de datos internacionales como Scopus, Web of Science, ERIC y ScienceDirect, asi como fuentes regionales como SciELO, Redalyc y Dialnet.</p><p>El proceso de seleccion siguio el diagrama de flujo PRISMA. Partimos de 122 registros identificados, eliminamos 17 duplicados, aplicamos criterios de inclusion y exclusion, y llegamos a 64 estudios incluidos en la sintesis final: 52 internacionales y 12 nacionales colombianos.</p><p>Para el analisis, utilizamos dos instrumentos complementarios: Microsoft Excel para la matriz bibliometrica y extraccion de datos, y ATLAS.ti para la codificacion cualitativa. En ATLAS.ti codificamos los 64 estudios usando un libro de codigos tematico que nos permitio analizar co-ocurrencias entre factores, es decir, identificar que variables aparecen juntas con mayor frecuencia.</p>',
    tip: 'El jurado probablemente pregunte sobre la metodologia. Ten claros los NUMEROS: 122 iniciales, 17 duplicados, 64 finales (52 internacionales + 12 nacionales). Y ten claro POR QUE usaste ATLAS.ti: para ir mas alla del conteo y encontrar RELACIONES entre factores.'
  },
  {
    number: 9,
    title: 'Analisis de Resultados',
    time: '~4-5 min',
    slideContent: 'Hallazgos principales: uso gerencial, barreras, facilitadores, impacto, comparacion.',
    speech: '<p>Ahora llegamos a los hallazgos, que es la parte mas sustantiva de esta presentacion.</p><p>Organizare los resultados en cinco dimensiones clave.</p><p>En cuanto al USO GERENCIAL, encontramos que los SIG facilitan la toma de decisiones y la gestion de recursos, pero esto ocurre principalmente en universidades que han implementado herramientas avanzadas como ERP y BI. En instituciones mas pequenas o de educacion basica, los SIG siguen siendo usados casi exclusivamente para registro y reporte operativo.</p><p>En cuanto a las BARRERAS, y este es un hallazgo central, identificamos que las barreras organizacionales son mas persistentes que las tecnologicas. La resistencia al cambio fue la barrera mas mencionada, apareciendo en la gran mayoria de los estudios. Le siguen la falta de interoperabilidad entre sistemas, que genera silos de informacion, y la deficiente capacitacion del personal.</p><p>En cuanto a los FACILITADORES, el factor mas determinante es el liderazgo institucional comprometido con la vision digital. Sin un liderazgo que promueva activamente el uso estrategico de los datos, el SIG se convierte en una herramienta subutilizada. Le siguen la gobernanza de datos, la capacitacion continua y el apoyo gubernamental.</p><p>En cuanto al IMPACTO, cuando los SIG se implementan correctamente, se evidencian mejoras en transparencia, rendicion de cuentas y calidad educativa. Los sistemas de BI permiten identificar estudiantes en riesgo de desercion, optimizar recursos y apoyar la planificacion basada en evidencia.</p><p>Finalmente, la COMPARACION entre contextos revela una brecha significativa: a nivel global existe mayor avance con BI y ERP, mientras que en contextos nacionales como Colombia, los SIG aun estan en fases iniciales, predominando los SIS y EMIS en su uso mas basico.</p>',
    tip: 'Este es el slide donde demuestras que realmente analizaste la evidencia. Habla con seguridad y usa datos concretos. Si el jurado te interrumpe con preguntas, es buena senal: significa que el tema les interesa. Responde con calma y vuelve a tu hilo.'
  },
  {
    number: 10,
    title: 'Conclusiones',
    time: '~2-3 min',
    slideContent: '5 conclusiones principales: interaccion socio-tecnica, barreras organizacionales, gobernanza de datos, brecha en investigacion, uso estrategico.',
    speech: '<p>A partir del analisis, llegamos a cinco conclusiones principales.</p><p>Primera: el exito de los SIG depende de la interaccion socio-tecnica. No basta con adquirir tecnologia; se necesita liderazgo, cultura de datos y capacitacion estrategica. La tecnologia sola no genera impacto.</p><p>Segunda: las barreras organizacionales, como la resistencia al cambio y la falta de vision digital, son mas persistentes y dificiles de superar que las barreras puramente tecnologicas. Esto confirma que el problema es de personas y procesos, no de software.</p><p>Tercera: la gobernanza de datos emerge como el factor mas critico. Los silos de informacion que encontramos en las instituciones educativas no son un problema tecnico de software; son un problema de politicas, de definir quien es responsable de los datos, como se asegura su calidad, y como se comparten.</p><p>Cuarta: existe una brecha significativa en investigacion comparativa y longitudinal, especialmente en contextos de bajos recursos como America Latina. Necesitamos mas estudios que midan el impacto real de los SIG en el tiempo.</p><p>Y quinta: cuando los SIG se usan estrategicamente, y no solo operativamente, se logra optimizar la eficiencia administrativa y fundamentar la toma de decisiones en datos concretos.</p>',
    tip: 'Enumera las conclusiones con los dedos (primera, segunda...). Esto ayuda al jurado a seguir tu estructura. En la tercera conclusion, haz enfasis en que "no es un problema tecnico, es un problema de politicas". Esa es una frase que demuestra profundidad analitica.'
  },
  {
    number: 11,
    title: 'Recomendaciones',
    time: '~2 min',
    slideContent: 'Recomendaciones para practica gerencial, politicas publicas, e investigacion futura.',
    speech: '<p>Las recomendaciones de esta investigacion se dirigen a tres audiencias.</p><p>Para los DIRECTIVOS y administradores educativos, la recomendacion principal es priorizar la gobernanza de datos antes que la compra de software. Esto significa crear comites que definan politicas claras de calidad de datos, interoperabilidad y responsabilidad sobre la informacion. Tambien es fundamental desarrollar liderazgo con vision digital e implementar capacitacion estrategica que ensene a usar la analitica para tomar decisiones, y no solo a operar el sistema.</p><p>Para los responsables de POLITICAS PUBLICAS, proponemos promover estandares abiertos de intercambio de datos a nivel nacional y regional, para superar la fragmentacion entre sistemas. E invertir en infraestructura critica, especialmente conectividad en instituciones de bajos recursos y areas rurales, como condicion habilitante para que cualquier SIG funcione.</p><p>Y para la COMUNIDAD ACADEMICA, recomendamos realizar estudios longitudinales de tres a cinco anos que midan el impacto real de los SIG en indicadores educativos concretos, y desarrollar investigacion comparativa en contextos de America Latina, que es donde mas se necesita y menos se ha estudiado.</p>',
    tip: 'Diferencia claramente las tres audiencias con tono de voz. Esto muestra que tus recomendaciones no son genericas sino especificas y accionables. Si el jurado pregunta "y como se implementaria X?", tienes la base para responder con confianza.'
  },
  {
    number: 12,
    title: 'Cierre / Agradecimiento',
    time: '~30 seg',
    slideContent: '"Gracias por su atencion"',
    speech: '<p>Para cerrar, quisiera resumir el mensaje central de esta investigacion en una frase: los Sistemas de Informacion Gerencial son herramientas necesarias, pero no suficientes. La verdadera transformacion de la gestion educativa no esta en el software, sino en las personas, el liderazgo y la cultura de datos que lo acompanan.</p><p>Agradezco al jurado por su atencion, a mi director el Doctor Juan Pablo Ucan Pech por su guia durante todo este proceso, y a TECH Universidad Tecnologica por esta oportunidad.</p><p>Quedo a disposicion para sus preguntas.</p>',
    tip: 'Termina mirando al jurado con confianza. No te apures. La frase "quedo a disposicion para sus preguntas" es tu senal de que terminaste con seguridad, no con prisa.'
  }
];

const DISCURSO_TIEMPOS = [
  { slide: 'Slide 1', contenido: 'Portada', tiempo: '~30 seg' },
  { slide: 'Slide 2', contenido: 'Introduccion', tiempo: '~2 min' },
  { slide: 'Slide 3', contenido: 'El Problema', tiempo: '~2-3 min' },
  { slide: 'Slide 4', contenido: 'Preguntas de Investigacion', tiempo: '~1-2 min' },
  { slide: 'Slide 5', contenido: 'Objetivos', tiempo: '~1 min' },
  { slide: 'Slide 6', contenido: 'Supuesto de Investigacion', tiempo: '~2 min' },
  { slide: 'Slide 7', contenido: 'Marco Teorico', tiempo: '~2-3 min' },
  { slide: 'Slide 8', contenido: 'Metodologia', tiempo: '~3 min' },
  { slide: 'Slide 9', contenido: 'Analisis de Resultados', tiempo: '~4-5 min' },
  { slide: 'Slide 10', contenido: 'Conclusiones', tiempo: '~2-3 min' },
  { slide: 'Slide 11', contenido: 'Recomendaciones', tiempo: '~2 min' },
  { slide: 'Slide 12', contenido: 'Cierre', tiempo: '~30 seg' }
];

const DISCURSO_RECORDATORIOS = [
  'Practica el discurso completo al menos 3 veces con cronometro.',
  'No memorices palabra por palabra; interioriza las IDEAS y los NUMEROS clave.',
  'Los numeros que debes tener claros: 122 registros iniciales, 64 estudios finales, 52 internacionales, 12 nacionales, 4 tipologias de SIG.',
  'Las frases fuerza: "necesarios pero no suficientes", "no es un problema de software sino de personas", "las barreras organizacionales son mas persistentes que las tecnologicas".',
  'Si el jurado te interrumpe, es buena senal. Responde con calma y retoma tu hilo.',
  'Si no sabes una respuesta, di: "Es una excelente pregunta que queda como linea futura de investigacion" y conecta con lo que SI sabes.',
  'Llega 15 minutos antes, verifica que la presentacion se vea bien, y respira profundo.'
];

// ============================================================
// GUIA DE ESTUDIO - Contenido completo
// ============================================================

const GUIA_SECTIONS = [
  {
    title: '1. De Que Trata la Tesis',
    content: `
      <p>Esta tesis estudia como las instituciones educativas (universidades, colegios, escuelas) usan <strong>sistemas de informacion</strong> para gestionar y tomar decisiones. No se creo un sistema ni se hicieron encuestas: <strong>se analizo lo que otros investigadores ya publicaron</strong> entre 2015 y 2025, para encontrar patrones, problemas comunes y que funciona.</p>
      <p>El metodo usado se llama <strong>Revision Sistematica de la Literatura (RSL)</strong>, que es el estandar academico para sintetizar conocimiento existente de manera rigurosa y transparente.</p>
    `
  },
  {
    title: '2. El Problema',
    content: `
      <h3>Que problema se detecto</h3>
      <p>Las instituciones educativas tienen acceso a mucha tecnologia, pero en la practica:</p>
      <ul>
        <li>Muchos directivos siguen decidiendo <strong>por intuicion</strong>, no con datos</li>
        <li>Los sistemas no se comunican entre si (<strong>silos de informacion</strong>)</li>
        <li>Hay <strong>resistencia al cambio</strong> - el personal no quiere o no sabe usar los sistemas</li>
        <li>La <strong>capacitacion es deficiente</strong> - se ensena a "oprimir botones" pero no a usar los datos estrategicamente</li>
        <li>En <strong>America Latina</strong> la situacion es peor: falta infraestructura basica, conectividad, y talento humano</li>
      </ul>
      <h3>Los 8 Problemas Identificados</h3>
      <ol>
        <li>Ausencia de infraestructura adecuada</li>
        <li>Mala interoperabilidad de plataformas (silos de informacion)</li>
        <li>Resistencia al cambio organizacional</li>
        <li>Deficiente capacitacion del personal</li>
        <li>Enfoque de "talla unica" en implementaciones</li>
        <li>Fragmentacion del conocimiento cientifico</li>
        <li>Brechas en America Latina (conectividad, talento humano)</li>
        <li>Decisiones basadas en intuicion (no en datos)</li>
      </ol>
      <h3>Pregunta General de Investigacion</h3>
      <div class="guia-quote">Cual es el estado actual de la implementacion y uso de los Sistemas de Informacion Gerencial (SIG) en la gestion educativa y cuales son las principales consecuencias, barreras y facilitadores de la mejora de los procesos institucionales?</div>
      <h3>Los 5 Objetivos Especificos</h3>
      <table>
        <thead><tr><th>OE</th><th>Pregunta que responde</th></tr></thead>
        <tbody>
          <tr><td><strong>OE1</strong></td><td>Que metodos usan los investigadores para medir si un SIG funciona?</td></tr>
          <tr><td><strong>OE2</strong></td><td>Que factores organizacionales y tecnologicos influyen en su exito?</td></tr>
          <tr><td><strong>OE3</strong></td><td>Cuales son las barreras recurrentes y emergentes?</td></tr>
          <tr><td><strong>OE4</strong></td><td>Que vacios hay en la investigacion actual?</td></tr>
          <tr><td><strong>OE5</strong></td><td>Que recomendaciones practicas se pueden dar segun el contexto?</td></tr>
        </tbody>
      </table>
      <h3>Supuesto de Investigacion</h3>
      <div class="guia-highlight"><strong>Supuesto:</strong> Los SIG se configuran como herramientas estrategicas cuya relevancia y efectividad se construyen en interaccion con las practicas de gestion, las necesidades institucionales y las condiciones del entorno.</div>
      <p><strong>En palabras simples:</strong> Los SIG no funcionan solos. Su exito depende de como interactuan con la gestion, las necesidades de la institucion y las condiciones del entorno.</p>
    `
  },
  {
    title: '3. Marco Teorico',
    content: `
      <h3>Tipologias de SIG</h3>
      <table>
        <thead><tr><th>Sigla</th><th>Nombre</th><th>Que hace?</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td><strong>EMIS</strong></td><td>Education Management Information Systems</td><td>Gestion educativa a nivel macro (ministerios)</td><td>Sistema del Min. Educacion para monitorear cobertura</td></tr>
          <tr><td><strong>SIS</strong></td><td>Student Information Systems</td><td>Gestion de datos estudiantiles</td><td>Sistema de matricula, notas, asistencia</td></tr>
          <tr><td><strong>ERP</strong></td><td>Enterprise Resource Planning</td><td>Gestion integral (finanzas, RRHH, academico)</td><td>SAP, Oracle en universidades grandes</td></tr>
          <tr><td><strong>BI/Analytics</strong></td><td>Business Intelligence</td><td>Analisis de datos para decisiones</td><td>Dashboards, reportes predictivos de desercion</td></tr>
        </tbody>
      </table>
      <h3>Modelos Teoricos</h3>
      <h4>Modelo DeLone & McLean (2003)</h4>
      <p>Un sistema de informacion tiene exito cuando hay:</p>
      <p><strong>Calidad del sistema + Calidad de la informacion + Calidad del servicio &rarr; Uso &rarr; Satisfaccion &rarr; Beneficio neto</strong></p>
      <p><strong>Implicacion:</strong> No basta con que el software funcione bien; los datos tienen que ser buenos y la gente tiene que usarlo.</p>
      <h4>Marco TOE - Tornatzky & Fleischer (1990)</h4>
      <p>La adopcion de tecnologia depende de 3 contextos:</p>
      <ul>
        <li><strong>Tecnologia:</strong> El sistema es bueno? Es compatible?</li>
        <li><strong>Organizacion:</strong> Hay liderazgo? Hay capacitacion? Hay cultura de datos?</li>
        <li><strong>Entorno:</strong> Hay infraestructura? Hay politicas de apoyo?</li>
      </ul>
      <h4>UTAUT de Venkatesh</h4>
      <p>Explica por que los usuarios aceptan o rechazan una tecnologia, basado en: expectativa de desempeno, expectativa de esfuerzo, influencia social, y condiciones facilitadoras.</p>
      <h4>Perspectiva Socio-Tecnica (base conceptual)</h4>
      <div class="guia-answer"><strong>Idea central:</strong> La tecnologia sola no resuelve nada. Su exito depende de la interaccion entre lo tecnico (software, infraestructura) y lo social (personas, cultura, procesos, liderazgo). Esta es la base filosofica de toda la tesis.</div>
    `
  },
  {
    title: '4. Metodologia',
    content: `
      <h3>Tipo de Investigacion</h3>
      <p><strong>Revision Sistematica de la Literatura (RSL) Cualitativa.</strong> No se fue a encuestar instituciones; se leyo, clasifico y analizo lo que otros investigadores publicaron.</p>
      <p><strong>Enfoque:</strong> Cualitativo-interpretativo (busca comprender patrones y significados, no medir con numeros).</p>
      <h3>El Proceso Paso a Paso</h3>
      <h4>PASO 1 - BUSQUEDA</h4>
      <ul>
        <li>Bases de datos: Scopus, Web of Science, Google Scholar, Redalyc, SciELO</li>
        <li>Idiomas: espanol, ingles, portugues</li>
        <li>Periodo: 2015-2025</li>
        <li>Palabras clave: "management information systems" + "education" + variantes</li>
      </ul>
      <h4>PASO 2 - FILTRADO (protocolo PRISMA 2020)</h4>
      <ul>
        <li>Criterios de inclusion: articulos revisados por pares, sobre SIG en educacion</li>
        <li>Criterios de exclusion: literatura gris, sin relacion con gestion educativa</li>
        <li>Resultado: de cientos de registros &rarr; 52 estudios internacionales + 12 nacionales (Colombia)</li>
      </ul>
      <h4>PASO 3 - EXTRACCION DE DATOS</h4>
      <ul><li>Excel: matriz bibliometrica (autor, ano, pais, tipo de SIG, metodo, hallazgos)</li></ul>
      <h4>PASO 4 - ANALISIS</h4>
      <ul>
        <li>ATLAS.ti: codificacion cualitativa (se etiqueto cada estudio con codigos: EMIS, SIS, ERP, BI, barreras, facilitadores)</li>
        <li>Triangulacion: se cruzaron los codigos para encontrar patrones</li>
        <li>Co-ocurrencia: se analizo que tipos de SIG aparecen juntos en los estudios</li>
      </ul>
      <h4>PASO 5 - SINTESIS</h4>
      <ul><li>Todo vinculado: Excel &harr; ATLAS.ti &harr; PRISMA (trazabilidad completa)</li></ul>
      <h3>Por que PRISMA 2020?</h3>
      <p>Es el <strong>estandar internacional</strong> para reportar revisiones sistematicas. Da credibilidad y transparencia.</p>
      <h3>Por que ATLAS.ti?</h3>
      <p>Permitio ir mas alla de simplemente "leer y resumir". Se codifico cada estudio, se encontraron patrones de co-ocurrencia, y se pudo triangular hallazgos.</p>
      <h3>Por que NO un meta-analisis cuantitativo?</h3>
      <div class="guia-highlight"><strong>Respuesta clave (pregunta casi segura del jurado):</strong> Un meta-analisis requiere variables homogeneas y metricas comparables. La literatura sobre SIG en educacion es altamente heterogenea: mezcla estudios de ingenieria de software, gestion organizacional, politicas publicas y educacion, cada uno con metricas distintas. Forzar una agregacion estadistica habria sacrificado la riqueza contextual.</div>
    `
  },
  {
    title: '5. Resultados',
    content: `
      <h3>Hallazgo 1 - Uso gerencial de los SIG</h3>
      <table>
        <thead><tr><th>Contexto</th><th>Que se encontro</th></tr></thead>
        <tbody>
          <tr><td><strong>Universidades en paises desarrollados</strong> (UK, Australia)</td><td>Usan ERP y BI para planificacion estrategica, prediccion de desercion, optimizacion de recursos</td></tr>
          <tr><td><strong>Escuelas rurales y paises en desarrollo</strong></td><td>Usan SIS y EMIS basicos, muchas veces con datos desactualizados y sin integracion</td></tr>
        </tbody>
      </table>
      <p><strong>Conclusion:</strong> Hay una brecha enorme entre lo que la tecnologia puede hacer y lo que realmente se usa.</p>
      <h3>Hallazgo 2 - Barreras</h3>
      <ul>
        <li><strong>Infraestructura:</strong> falta de internet, equipos obsoletos, sin soporte tecnico</li>
        <li><strong>Resistencia al cambio:</strong> el personal ve los SIG como carga extra</li>
        <li><strong>Capacitacion deficiente:</strong> se ensena a operar pero no a usar datos para decidir</li>
        <li><strong>Silos de informacion:</strong> sistemas que no se comunican entre si</li>
      </ul>
      <h3>Hallazgo 3 - Facilitadores</h3>
      <ul>
        <li><strong>Liderazgo institucional:</strong> cuando los directivos usan y promueven los SIG, funciona</li>
        <li><strong>Gobernanza de datos:</strong> politicas claras sobre quien es dueno de los datos</li>
        <li><strong>Capacitacion estrategica:</strong> no solo el "como" sino el "por que" usar datos</li>
      </ul>
      <h3>Hallazgo 4 - Comparacion Internacional vs. Colombia</h3>
      <table>
        <thead><tr><th>Internacional</th><th>Colombia / Nacional</th></tr></thead>
        <tbody>
          <tr><td>Avance con BI + ERP, arquitecturas integradas</td><td>Predominan SIG y TIC genericos, adopcion desigual</td></tr>
          <tr><td>Co-ocurrencia BI+SIS (datos alimentan analitica)</td><td>Pocos estudios sobre ERP o BI en educacion</td></tr>
          <tr><td>Universidades con infraestructura robusta</td><td>Brechas de conectividad en zonas rurales</td></tr>
        </tbody>
      </table>
      <h3>HALLAZGO CENTRAL</h3>
      <div class="guia-answer"><strong>El exito o fracaso de los SIG NO depende de la tecnologia.</strong> Depende de la interaccion socio-tecnica: liderazgo, cultura de datos, gobernanza. Las barreras organizacionales son mas persistentes que las barreras puramente tecnologicas.</div>
    `
  },
  {
    title: '6. Conclusiones',
    content: `
      <h3>Se verifico el supuesto? SI</h3>
      <p>La evidencia confirma que la efectividad de los SIG depende de 3 factores en interaccion:</p>
      <table>
        <thead><tr><th>Factor</th><th>Que dice la evidencia</th></tr></thead>
        <tbody>
          <tr><td><strong>Organizacional</strong> (gestion)</td><td>El liderazgo y la capacitacion son mas determinantes que el software. Sin vision digital del directivo, el SIG fracasa.</td></tr>
          <tr><td><strong>Tecnologico/Contextual</strong> (entorno)</td><td>Sin infraestructura, conectividad y datos de calidad, no importa que tan bueno sea el sistema.</td></tr>
          <tr><td><strong>Estrategico</strong> (necesidad)</td><td>El SIG funciona cuando responde a una necesidad real, no cuando se impone desde arriba sin contexto.</td></tr>
        </tbody>
      </table>
      <div class="guia-highlight"><strong>Conclusion clave:</strong> Los SIG son herramientas necesarias pero NO suficientes para la mejora de la gestion educativa. Su transformacion a herramientas estrategicas depende de una inversion equilibrada en el componente humano y organizativo.</div>
      <h3>3 Aportaciones del Estudio</h3>
      <ol>
        <li><strong>Teorica:</strong> Unifico EMIS, SIS, ERP, BI bajo un marco socio-tecnico. Antes se estudiaban por separado; aqui se ven como ecosistema.</li>
        <li><strong>Metodologica:</strong> Modelo replicable de RSL cualitativa con PRISMA + ATLAS.ti en un campo altamente heterogeneo.</li>
        <li><strong>Practica:</strong> Mapa clasificado de barreras y facilitadores que un directivo puede usar para saber donde invertir primero.</li>
      </ol>
      <h3>Limitaciones</h3>
      <ul>
        <li><strong>Sesgo de publicacion:</strong> Solo literatura publicada; se excluyo "literatura gris"</li>
        <li><strong>Sin inferencia causal:</strong> La RSL establece correlaciones, no causalidad directa</li>
        <li><strong>Heterogeneidad:</strong> La variabilidad entre contextos limita la generalizacion</li>
      </ul>
    `
  },
  {
    title: '7. Preguntas Probables del Jurado',
    content: `
      <h3>Sobre Metodologia</h3>
      <h4>P: "Por que eligio una RSL cualitativa y no un meta-analisis cuantitativo?"</h4>
      <div class="guia-answer"><strong>R:</strong> Un meta-analisis requiere variables homogeneas y metricas comparables. La literatura sobre SIG en educacion es altamente heterogenea. El enfoque cualitativo con PRISMA 2020 y codificacion en ATLAS.ti me permitio identificar patrones que un analisis puramente numerico no habria revelado, como que el problema de interoperabilidad es en realidad un problema de gobernanza, no tecnico.</div>
      <h4>P: "Como garantizo el rigor y redujo sesgos en la seleccion?"</h4>
      <div class="guia-answer"><strong>R:</strong> A traves de: (1) protocolo PRISMA 2020 con criterios explicitos, (2) trazabilidad completa Excel-ATLAS.ti-PRISMA, (3) reporte transparente de motivos de exclusion, y (4) triangulacion entre codigos en ATLAS.ti para verificar consistencia.</div>
      <h3>Sobre Resultados</h3>
      <h4>P: "Cual es el hallazgo mas novedoso de su investigacion?"</h4>
      <div class="guia-answer"><strong>R:</strong> La confirmacion de que la gobernanza de datos es el factor mas critico, por encima de la tecnologia misma. Y la identificacion de que el problema de interoperabilidad es en realidad un problema de gobernanza de datos - una falla en politicas y estandares comunes - y no un problema puramente tecnico.</div>
      <h4>P: "Que diferencia a su estudio de otras revisiones existentes?"</h4>
      <div class="guia-answer"><strong>R:</strong> Tres cosas: (1) La unificacion de tipologias bajo un marco socio-tecnico unico. (2) La comparacion sistematica internacional vs. nacional usando tablas de co-ocurrencia en ATLAS.ti. (3) La cobertura trilingue que permitio incluir estudios de America Latina frecuentemente excluidos.</div>
      <h4>P: "Con que evidencia sustenta que la gobernanza de datos es el factor mas critico?"</h4>
      <div class="guia-answer"><strong>R:</strong> La evidencia proviene de la convergencia de multiples fuentes. Estudios basados en datos EMIS nacionales muestran que donde hay gobernanza clara, los SIG generan impacto. Los estudios que reportan fracasos senalan consistentemente la fragmentacion de sistemas como causa raiz. Ademas, DeLone y McLean establece que la calidad de la informacion es prerequisito para el beneficio neto. No es una sola fuente, es el patron convergente de la evidencia.</div>
      <h3>Sobre Limitaciones</h3>
      <h4>P: "No es una limitacion haber excluido la literatura gris?"</h4>
      <div class="guia-answer"><strong>R:</strong> Si, es una limitacion reconocida. La literatura gris podria contener experiencias valiosas. Sin embargo, la decision se justifica por el rigor del protocolo PRISMA, que prioriza fuentes verificables y revisadas por pares para garantizar calidad y reproducibilidad.</div>
      <h4>P: "Los resultados son generalizables a Colombia?"</h4>
      <div class="guia-answer"><strong>R:</strong> La heterogeneidad limita la generalizacion directa. Los hallazgos deben interpretarse como hipotesis de trabajo fundamentadas que orientan futuras investigaciones empiricas en contextos locales, no como conclusiones universales.</div>
      <h3>Sobre Relevancia</h3>
      <h4>P: "Cual es la aplicacion practica inmediata?"</h4>
      <div class="guia-answer"><strong>R:</strong> El mapa de barreras y facilitadores permite a un directivo saber donde invertir primero: no en software, sino en gobernanza de datos y capacitacion estrategica. Un directivo que lea esta tesis sabra que antes de comprar un ERP, debe asegurar politicas de datos claras, liderazgo comprometido y capacitacion que ensene el por que usar datos.</div>
      <h4>Si no sabes una respuesta...</h4>
      <div class="guia-warning"><strong>Frase de rescate:</strong> "Es un punto muy interesante que excede el alcance de esta investigacion. Sin embargo, podria constituir una linea valiosa para futuras investigaciones en este campo."</div>
    `
  },
  {
    title: '8. Tips para el Dia de la Defensa',
    content: `
      <h3>Logistica</h3>
      <ul>
        <li>Conectate con el Dr. Ucan Pech <strong>10 minutos antes</strong></li>
        <li>Prueba audio, video y que tu presentacion se comparta bien</li>
        <li>Fondo limpio (pared clara o fondo virtual neutro)</li>
        <li>Camara a nivel del torso-cabeza, bien iluminado, que se vean tus manos</li>
        <li>Usa audifonos con microfono para evitar eco</li>
        <li><strong>Vestimenta formal</strong></li>
      </ul>
      <h3>Presentacion</h3>
      <ul>
        <li><strong>NO leas las diapositivas.</strong> Usalas como apoyo visual, tu cuentas la historia</li>
        <li>Las diapositivas deben tener poco texto, ser claras y limpias</li>
        <li>Evita muletillas: "este...", "o sea...", "basicamente..."</li>
        <li>Habla con seguridad. Tu eres quien mas conoce esta investigacion</li>
      </ul>
      <h3>Estructura de Respuestas al Jurado</h3>
      <p>Para cada respuesta, sigue esta estructura de 3 partes:</p>
      <ol>
        <li><strong>Razon directa</strong> (30 seg): responde la pregunta de frente</li>
        <li><strong>Evidencia/argumento</strong> (30 seg): sustenta con datos o ejemplos de tu tesis</li>
        <li><strong>Cierre con impacto</strong> (15 seg): conecta con la relevancia o implicacion practica</li>
      </ol>
      <h3>Ensayo</h3>
      <div class="guia-warning"><strong>IMPORTANTE:</strong> Ensaya al menos 2 veces cronometrando los 25 minutos. Si te pasas de tiempo en el ensayo, recorta. Es mejor terminar en 23 minutos que ser interrumpido en el minuto 25.</div>
    `
  }
];

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
