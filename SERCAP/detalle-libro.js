/* ════════════════════════════════════════════
   BASE DE DATOS DE LIBROS
   ════════════════════════════════════════════ */
const BOOKS = {
    /* ─── NIVEL INICIAL ─── */
    'inicial-1': {
        title:'Informática Inicial – Tomo 1',
        subtitle:'Primeros pasos en el mundo digital: manejo del equipo, teclado y software básico.',
        level:'Nivel Inicial',
        badgeBg:'rgba(245,158,11,.15)',badgeColor:'#b45309',
        img:'./img/libros/nuevos libros.jpg',
        tags:['Principiante','Windows 11','1.° Grado'],
        desc:'Este libro introduce a los más pequeños al mundo de la computación de forma lúdica y progresiva. A través de actividades coloridas y ejemplos cotidianos, los estudiantes aprenden a encender y apagar el equipo correctamente, identificar sus partes, usar el teclado y el ratón, y dar sus primeros pasos con el sistema operativo Windows. Cada capítulo incluye ejercicios prácticos y evaluaciones para el docente.',
        toc:[
            {title:'Conociendo mi computadora',pages:'Págs. 1–24'},
            {title:'El sistema operativo Windows',pages:'Págs. 25–48'},
            {title:'Usando el teclado y el ratón',pages:'Págs. 49–70'},
            {title:'Mis primeras aplicaciones',pages:'Págs. 71–92'},
            {title:'Repaso y evaluaciones',pages:'Págs. 93–108'},
        ]
    },
    'inicial-2': {
        title:'Informática Inicial – Tomo 2',
        subtitle:'Introducción a procesadores de texto y hojas de cálculo para los más pequeños.',
        level:'Nivel Inicial',
        badgeBg:'rgba(245,158,11,.15)',badgeColor:'#b45309',
        img:'./img/libros/nuevos libros.jpg',
        tags:['Principiante','Office Básico','2.° Grado'],
        desc:'Continuando el viaje iniciado en el Tomo 1, este libro lleva al estudiante a explorar el procesador de texto Word y la hoja de cálculo Excel en su nivel más básico. Con una metodología paso a paso y actividades guiadas, los niños aprenden a escribir, formatear textos sencillos e ingresar datos en tablas simples.',
        toc:[
            {title:'Introducción a Word',pages:'Págs. 1–28'},
            {title:'Escribir y dar formato',pages:'Págs. 29–54'},
            {title:'Primeros pasos en Excel',pages:'Págs. 55–80'},
            {title:'Tablas y datos simples',pages:'Págs. 81–100'},
            {title:'Proyecto integrador',pages:'Págs. 101–116'},
        ]
    },
    /* ─── PRIMER CICLO ─── */
    'primero-1': {
        title:'Informática – Primer Ciclo Tomo 1',
        subtitle:'Fundamentos de la computación, sistema operativo y aplicaciones de productividad.',
        level:'Primer Ciclo',
        badgeBg:'rgba(16,185,129,.12)',badgeColor:'#065f46',
        img:'./img/libros/primer ciclo.jpg',
        tags:['1.° Grado','Windows 11','Fundamentos'],
        desc:'Diseñado para el primer año del ciclo básico, este libro consolida los conceptos fundamentales de informática: hardware, software, sistema operativo y gestión de archivos. El enfoque es eminentemente práctico: cada unidad incluye actividades guiadas en Windows 11 y ejercicios de refuerzo que el docente puede adaptar al ritmo de su aula.',
        toc:[
            {title:'Hardware y componentes',pages:'Págs. 1–26'},
            {title:'Sistema operativo Windows 11',pages:'Págs. 27–56'},
            {title:'Gestión de archivos y carpetas',pages:'Págs. 57–80'},
            {title:'Aplicaciones de productividad',pages:'Págs. 81–106'},
            {title:'Internet y seguridad básica',pages:'Págs. 107–124'},
        ]
    },
    'primero-2': {
        title:'Informática – Primer Ciclo Tomo 2',
        subtitle:'Word y PowerPoint: habilidades esenciales para crear documentos y presentaciones.',
        level:'Primer Ciclo',
        badgeBg:'rgba(16,185,129,.12)',badgeColor:'#065f46',
        img:'./img/libros/primer ciclo.jpg',
        tags:['2.° Grado','Word','PowerPoint'],
        desc:'Este tomo profundiza en el uso de Microsoft Word y PowerPoint como herramientas de comunicación escolar. Los estudiantes aprenden a crear documentos con formato profesional, insertar imágenes y tablas, y construir presentaciones visuales atractivas para exponer sus trabajos.',
        toc:[
            {title:'Word: formato avanzado',pages:'Págs. 1–30'},
            {title:'Tablas e imágenes en Word',pages:'Págs. 31–58'},
            {title:'Introducción a PowerPoint',pages:'Págs. 59–84'},
            {title:'Diseño de presentaciones',pages:'Págs. 85–112'},
            {title:'Proyecto: presentación final',pages:'Págs. 113–128'},
        ]
    },
    'primero-3': {
        title:'Informática – Primer Ciclo Tomo 3',
        subtitle:'Excel básico e Internet: navegación segura y primeros pasos en la hoja de cálculo.',
        level:'Primer Ciclo',
        badgeBg:'rgba(16,185,129,.12)',badgeColor:'#065f46',
        img:'./img/libros/primer ciclo.jpg',
        tags:['3.° Grado','Excel','Internet'],
        desc:'El tercer tomo del Primer Ciclo introduce la hoja de cálculo Excel como herramienta de organización de datos, y desarrolla habilidades para la navegación segura en Internet. Los estudiantes aprenden fórmulas básicas, crean gráficos sencillos y conocen las normas de convivencia digital.',
        toc:[
            {title:'Introducción a Excel',pages:'Págs. 1–28'},
            {title:'Fórmulas y funciones básicas',pages:'Págs. 29–56'},
            {title:'Gráficos en Excel',pages:'Págs. 57–76'},
            {title:'Internet: navegación segura',pages:'Págs. 77–100'},
            {title:'Ciudadanía digital',pages:'Págs. 101–116'},
        ]
    },
    /* ─── SEGUNDO CICLO ─── */
    'segundo-1': {
        title:'Informática – Segundo Ciclo Tomo 1',
        subtitle:'Procesamiento de textos avanzado, diseño de documentos y primeros conceptos de red.',
        level:'Segundo Ciclo',
        badgeBg:'rgba(59,130,246,.12)',badgeColor:'#1d4ed8',
        img:'./img/libros/segundo ciclo.jpg',
        tags:['4.° Grado','Word Avanzado','Redes'],
        desc:'En el Segundo Ciclo el estudiante ya posee bases sólidas. Este libro lleva el uso de Word a un nivel avanzado: tablas de contenido, estilos, combinación de correspondencia y macros básicas. Además, introduce los conceptos de red: tipos de redes, protocolos y seguridad.',
        toc:[
            {title:'Estilos y plantillas en Word',pages:'Págs. 1–32'},
            {title:'Tablas de contenido y referencias',pages:'Págs. 33–60'},
            {title:'Combinación de correspondencia',pages:'Págs. 61–82'},
            {title:'Fundamentos de redes',pages:'Págs. 83–110'},
            {title:'Seguridad en redes locales',pages:'Págs. 111–128'},
        ]
    },
    'segundo-2': {
        title:'Informática – Segundo Ciclo Tomo 2',
        subtitle:'Excel intermedio: fórmulas, gráficos y análisis de datos para el aula.',
        level:'Segundo Ciclo',
        badgeBg:'rgba(59,130,246,.12)',badgeColor:'#1d4ed8',
        img:'./img/libros/segundo ciclo.jpg',
        tags:['5.° Grado','Excel Intermedio','Datos'],
        desc:'Excel cobra protagonismo en este tomo: los estudiantes trabajan con funciones lógicas (SI, Y, O), funciones de búsqueda (BUSCARV), gráficos dinámicos y tablas de datos. Todo ello aplicado a situaciones escolares concretas para que el aprendizaje sea significativo.',
        toc:[
            {title:'Funciones lógicas',pages:'Págs. 1–30'},
            {title:'Funciones de búsqueda',pages:'Págs. 31–54'},
            {title:'Gráficos dinámicos',pages:'Págs. 55–78'},
            {title:'Tablas y filtros',pages:'Págs. 79–102'},
            {title:'Proyecto de análisis de datos',pages:'Págs. 103–120'},
        ]
    },
    'segundo-3': {
        title:'Informática – Segundo Ciclo Tomo 3',
        subtitle:'Presentaciones dinámicas con PowerPoint y herramientas colaborativas en la nube.',
        level:'Segundo Ciclo',
        badgeBg:'rgba(59,130,246,.12)',badgeColor:'#1d4ed8',
        img:'./img/libros/segundo ciclo.jpg',
        tags:['6.° Grado','PowerPoint','Google Workspace'],
        desc:'Este libro enseña a crear presentaciones de nivel profesional con animaciones, transiciones y multimedia, y da el salto a las herramientas colaborativas en la nube: Google Docs, Slides y Drive. Los estudiantes aprenden a trabajar en equipo de forma virtual.',
        toc:[
            {title:'PowerPoint avanzado',pages:'Págs. 1–32'},
            {title:'Animaciones y multimedia',pages:'Págs. 33–58'},
            {title:'Google Drive y Docs',pages:'Págs. 59–80'},
            {title:'Google Slides colaborativo',pages:'Págs. 81–104'},
            {title:'Proyecto grupal en la nube',pages:'Págs. 105–122'},
        ]
    },
    /* ─── TERCER CICLO ─── */
    'tercero-1': {
        title:'Informática – Tercer Ciclo Tomo 1',
        subtitle:'Introducción a la programación, lógica computacional y algoritmos básicos.',
        level:'Tercer Ciclo',
        badgeBg:'rgba(139,92,246,.12)',badgeColor:'#5b21b6',
        img:'./img/libros/tercer ciclo.jpg',
        tags:['7.° Grado','Programación','Algoritmos'],
        desc:'El mundo de la programación se abre en este libro. A través de Scratch y los primeros conceptos de pseudocódigo, los estudiantes desarrollan el pensamiento computacional: descomposición de problemas, patrones, abstracción y diseño de algoritmos. Un libro pensado para despertar vocaciones tecnológicas.',
        toc:[
            {title:'Pensamiento computacional',pages:'Págs. 1–24'},
            {title:'Algoritmos y pseudocódigo',pages:'Págs. 25–52'},
            {title:'Introducción a Scratch',pages:'Págs. 53–80'},
            {title:'Estructuras de control',pages:'Págs. 81–108'},
            {title:'Proyecto: mi primer programa',pages:'Págs. 109–126'},
        ]
    },
    'tercero-2': {
        title:'Informática – Tercer Ciclo Tomo 2',
        subtitle:'Bases de datos, redes y seguridad informática básica para estudiantes.',
        level:'Tercer Ciclo',
        badgeBg:'rgba(139,92,246,.12)',badgeColor:'#5b21b6',
        img:'./img/libros/tercer ciclo.jpg',
        tags:['8.° Grado','Bases de Datos','Redes'],
        desc:'Los estudiantes se adentran en el mundo de los datos: qué son las bases de datos, cómo se diseñan y cómo se consultan con SQL básico. Paralelamente, se profundiza en redes LAN/WAN, protocolos TCP/IP y conceptos de ciberseguridad aplicada al entorno escolar y personal.',
        toc:[
            {title:'Fundamentos de bases de datos',pages:'Págs. 1–28'},
            {title:'Diseño de tablas y relaciones',pages:'Págs. 29–58'},
            {title:'SQL básico',pages:'Págs. 59–84'},
            {title:'Redes LAN y WAN',pages:'Págs. 85–108'},
            {title:'Ciberseguridad básica',pages:'Págs. 109–128'},
        ]
    },
    'tercero-3': {
        title:'Informática – Tercer Ciclo Tomo 3',
        subtitle:'Diseño gráfico y multimedia: herramientas creativas para proyectos escolares.',
        level:'Tercer Ciclo',
        badgeBg:'rgba(139,92,246,.12)',badgeColor:'#5b21b6',
        img:'./img/libros/tercer ciclo.jpg',
        tags:['9.° Grado','Diseño','Multimedia'],
        desc:'Creatividad y tecnología se unen en este libro. Los estudiantes aprenden los fundamentos del diseño gráfico digital: composición, color y tipografía. Trabajan con Canva y herramientas gratuitas para crear afiches, infografías y presentaciones multimedia de alto impacto.',
        toc:[
            {title:'Principios de diseño gráfico',pages:'Págs. 1–26'},
            {title:'Color y tipografía',pages:'Págs. 27–50'},
            {title:'Diseño con Canva',pages:'Págs. 51–78'},
            {title:'Infografías y afiches',pages:'Págs. 79–104'},
            {title:'Proyecto multimedia final',pages:'Págs. 105–124'},
        ]
    },
    /* ─── NIVEL MEDIO ─── */
    'medio-1': {
        title:'Informática – Nivel Medio Tomo 1',
        subtitle:'Suite Office avanzada: integración de Word, Excel y PowerPoint en proyectos reales.',
        level:'Nivel Medio',
        badgeBg:'rgba(236,72,153,.12)',badgeColor:'#9d174d',
        img:'./img/libros/nivel medio.jpg',
        tags:['1.° Medio','Office 365','Integración'],
        desc:'Este tomo eleva las habilidades de Office a nivel profesional: combinación de herramientas, automatización con macros, hipervínculos entre documentos y creación de informes completos que integran datos de Excel en Word y presentaciones de PowerPoint. Preparación real para el mundo laboral.',
        toc:[
            {title:'Word profesional: macros y campos',pages:'Págs. 1–34'},
            {title:'Excel avanzado: tablas dinámicas',pages:'Págs. 35–70'},
            {title:'Integración Office: vínculos OLE',pages:'Págs. 71–96'},
            {title:'PowerPoint: diseño corporativo',pages:'Págs. 97–122'},
            {title:'Proyecto integrador empresarial',pages:'Págs. 123–142'},
        ]
    },
    'medio-2': {
        title:'Informática – Nivel Medio Tomo 2',
        subtitle:'Programación con Python: lógica, estructuras de control y proyectos prácticos.',
        level:'Nivel Medio',
        badgeBg:'rgba(236,72,153,.12)',badgeColor:'#9d174d',
        img:'./img/libros/nivel medio.jpg',
        tags:['2.° Medio','Python','Programación'],
        desc:'Python es el lenguaje del presente y del futuro. Este libro guía al estudiante desde la instalación del entorno hasta la creación de programas funcionales: variables, tipos de datos, condicionales, bucles, funciones y manejo de archivos. Cada capítulo incluye mini-proyectos motivadores.',
        toc:[
            {title:'Entorno Python e IDLE',pages:'Págs. 1–28'},
            {title:'Variables y tipos de datos',pages:'Págs. 29–54'},
            {title:'Condicionales y bucles',pages:'Págs. 55–84'},
            {title:'Funciones y módulos',pages:'Págs. 85–112'},
            {title:'Proyectos: calculadora y más',pages:'Págs. 113–134'},
        ]
    },
    'medio-3': {
        title:'Informática – Nivel Medio Tomo 3',
        subtitle:'Desarrollo web: HTML, CSS y primeros pasos en JavaScript para crear sitios propios.',
        level:'Nivel Medio',
        badgeBg:'rgba(236,72,153,.12)',badgeColor:'#9d174d',
        img:'./img/libros/nivel medio.jpg',
        tags:['3.° Medio','HTML/CSS','Web'],
        desc:'El mundo web se abre en este libro. Los estudiantes aprenden a crear páginas web desde cero con HTML5 semántico y CSS3 moderno (Flexbox, Grid, responsive design). Hacia el final, se introducen los fundamentos de JavaScript: manipulación del DOM e interactividad básica.',
        toc:[
            {title:'HTML5 semántico',pages:'Págs. 1–30'},
            {title:'CSS3: estilos y layout',pages:'Págs. 31–62'},
            {title:'Responsive design',pages:'Págs. 63–86'},
            {title:'JavaScript básico',pages:'Págs. 87–114'},
            {title:'Proyecto: mi primer sitio web',pages:'Págs. 115–136'},
        ]
    },
    /* ─── BACHILLERATO ─── */
    'bach-1': {
        title:'Bachillerato Técnico en Informática – Tomo 1',
        subtitle:'Programación orientada a objetos, estructuras de datos y manejo de bases de datos SQL.',
        level:'Bachillerato Técnico',
        badgeBg:'rgba(249,115,22,.12)',badgeColor:'#c2410c',
        img:'./img/libros/bachillerato.jpg',
        tags:['1.° Bachillerato','POO','SQL'],
        desc:'El Bachillerato Técnico demanda un nivel profesional. Este primer tomo profundiza en la Programación Orientada a Objetos con Java, cubre estructuras de datos (listas, pilas, colas, árboles) y desarrolla habilidades avanzadas en diseño y consulta de bases de datos relacionales con SQL estándar.',
        toc:[
            {title:'POO: clases y objetos',pages:'Págs. 1–36'},
            {title:'Herencia y polimorfismo',pages:'Págs. 37–70'},
            {title:'Estructuras de datos',pages:'Págs. 71–104'},
            {title:'Bases de datos relacionales',pages:'Págs. 105–136'},
            {title:'SQL: consultas avanzadas',pages:'Págs. 137–162'},
        ]
    },
    'bach-2': {
        title:'Bachillerato Técnico en Informática – Tomo 2',
        subtitle:'Redes, administración de sistemas y proyectos de software en entorno profesional.',
        level:'Bachillerato Técnico',
        badgeBg:'rgba(249,115,22,.12)',badgeColor:'#c2410c',
        img:'./img/libros/bachillerato.jpg',
        tags:['2.° Bachillerato','Redes','Administración'],
        desc:'El tomo final del Bachillerato Técnico prepara al estudiante para el mundo profesional: administración de servidores Linux, configuración de redes empresariales, seguridad avanzada y gestión de proyectos de software con metodologías ágiles (Scrum). Incluye guías para el desarrollo del proyecto de grado.',
        toc:[
            {title:'Administración Linux',pages:'Págs. 1–38'},
            {title:'Redes empresariales',pages:'Págs. 39–74'},
            {title:'Seguridad avanzada',pages:'Págs. 75–106'},
            {title:'Metodologías ágiles (Scrum)',pages:'Págs. 107–134'},
            {title:'Proyecto de grado',pages:'Págs. 135–158'},
        ]
    },
    /* ─── NUEVOS ─── */
    'nuevos-1': {
        title:'IA para Estudiantes',
        subtitle:'Conceptos de Inteligencia Artificial, Machine Learning y herramientas del futuro.',
        level:'Nuevo 2026',
        badgeBg:'rgba(20,184,166,.12)',badgeColor:'#0f766e',
        img:'./img/libros/nuevos libros.jpg',
        tags:['Todos los niveles','IA','Machine Learning'],
        desc:'Un libro pionero que lleva la Inteligencia Artificial al aula de forma accesible y ética. Los estudiantes conocen qué es la IA, cómo funciona el Machine Learning, qué son las redes neuronales y cómo usar herramientas de IA generativa de forma responsable. Incluye actividades desenchufadas y proyectos con plataformas educativas de IA.',
        toc:[
            {title:'¿Qué es la Inteligencia Artificial?',pages:'Págs. 1–24'},
            {title:'Machine Learning sin código',pages:'Págs. 25–50'},
            {title:'IA generativa en el aula',pages:'Págs. 51–74'},
            {title:'Ética e impacto social de la IA',pages:'Págs. 75–98'},
            {title:'Proyectos creativos con IA',pages:'Págs. 99–120'},
        ]
    },
    'nuevos-2': {
        title:'Ciberseguridad Básica',
        subtitle:'Protección digital, privacidad en línea y buenas prácticas de seguridad informática.',
        level:'Nuevo 2026',
        badgeBg:'rgba(20,184,166,.12)',badgeColor:'#0f766e',
        img:'./img/libros/nuevos libros.jpg',
        tags:['Nivel Medio / Bach.','Seguridad','Privacidad'],
        desc:'En un mundo hiperconectado, la ciberseguridad es una competencia esencial. Este libro enseña a identificar amenazas (phishing, malware, ingeniería social), proteger contraseñas, configurar la privacidad en redes sociales y actuar ante incidentes digitales. Contenido actualizado a los riesgos de 2026.',
        toc:[
            {title:'Amenazas digitales actuales',pages:'Págs. 1–26'},
            {title:'Contraseñas y autenticación',pages:'Págs. 27–50'},
            {title:'Privacidad en redes sociales',pages:'Págs. 51–74'},
            {title:'Seguridad en dispositivos móviles',pages:'Págs. 75–96'},
            {title:'Respuesta a incidentes',pages:'Págs. 97–116'},
        ]
    },
};

/* ════════════════════════════════════════════
   RELACIONADOS por nivel
   ════════════════════════════════════════════ */
const RELATED_IMG = {
    inicial:  './img/libros/nuevos libros.jpg',
    primero:  './img/libros/primer ciclo.jpg',
    segundo:  './img/libros/segundo ciclo.jpg',
    tercero:  './img/libros/tercer ciclo.jpg',
    medio:    './img/libros/nivel medio.jpg',
    bach:     './img/libros/bachillerato.jpg',
    nuevos:   './img/libros/nuevos libros.jpg',
};
const RELATED_MAP = {
    inicial:  ['primero-1','segundo-1','nuevos-1'],
    primero:  ['inicial-1','segundo-1','primero-2'],
    segundo:  ['primero-3','tercero-1','segundo-2'],
    tercero:  ['segundo-3','medio-1','tercero-2'],
    medio:    ['tercero-3','bach-1','medio-2'],
    bach:     ['medio-3','nuevos-1','nuevos-2'],
    nuevos:   ['bach-2','medio-3','tercero-3'],
};

/* ════════════════════════════════════════════
   RENDER
   ════════════════════════════════════════════ */
function getParam(key){
    return new URLSearchParams(window.location.search).get(key);
}

function render(){
    const id = getParam('id') || 'inicial-1';
    const b  = BOOKS[id];
    if(!b){ document.getElementById('book-title').textContent='Libro no encontrado'; return; }

    document.getElementById('bc-title').textContent = b.title;
    document.title = b.title + ' – SERCAP';

    document.getElementById('book-img').src  = b.img;
    document.getElementById('book-img').alt  = b.title;

    const badge = document.getElementById('book-badge');
    badge.textContent = b.level;
    badge.style.background = b.badgeBg;
    badge.style.color       = b.badgeColor;

    document.getElementById('book-title').textContent    = b.title;
    document.getElementById('book-subtitle').textContent = b.subtitle;
    document.getElementById('book-desc').textContent     = b.desc;

    const metaRow = document.getElementById('book-meta');
    b.tags.forEach(t => {
        const chip = document.createElement('span');
        chip.className = 'meta-chip';
        chip.textContent = t;
        metaRow.appendChild(chip);
    });

    const tocList = document.getElementById('book-toc');
    b.toc.forEach((item,i) => {
        const li = document.createElement('li');
        li.className = 'toc-item';
        li.innerHTML = `<span class="toc-num">${i+1}</span><span class="toc-title">${item.title}</span><span class="toc-pages">${item.pages}</span>`;
        tocList.appendChild(li);
    });

    const levelKey = id.split('-')[0];
    const relIds   = (RELATED_MAP[levelKey] || []).filter(rid => rid !== id).slice(0,3);
    const grid     = document.getElementById('related-grid');
    relIds.forEach(rid => {
        const rb = BOOKS[rid];
        if(!rb) return;
        const rlvl = rid.split('-')[0];
        const card = document.createElement('a');
        card.className = 'rel-card';
        card.href = `detalle-libro.html?id=${rid}`;
        card.innerHTML = `
            <div class="rel-img"><img src="${RELATED_IMG[rlvl]||rb.img}" alt="${rb.title}"></div>
            <div class="rel-body">
                <p class="rel-level">${rb.level}</p>
                <p class="rel-name">${rb.title}</p>
                <span class="rel-link">Ver detalle →</span>
            </div>`;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    /* ── Navbar hamburger ── */
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu   = document.getElementById('navbarMenu');
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
        document.querySelectorAll('.navbar-link, .navbar-cta').forEach(link => {
            link.addEventListener('click', () => {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });
    }

    render();
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold:0.1});
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});
