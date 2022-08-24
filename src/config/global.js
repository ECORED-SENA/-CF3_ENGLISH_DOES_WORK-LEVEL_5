export default {
  global: {
    componenteFormativo:
      '<em>Things I am going to do </em> <br> / Cosas que voy a hacer',
    descripcionCurso:
      'Este componente va a ser una introducción a las vacaciones y el clima, utilizando expresiones de tiempo en pasado, presente y futuro. También se manejan los condicionales <em>zero</em> y <em>first.</em> Luego, se presenta el tiempo futuro mediante el uso de <em>“will”</em> y <em>“be going to”</em>, los cuales facilitan la formulación de planes y predicciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flag.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Holidays and weather (Las vacaciones y el clima)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '<em>Time expressions - past</em>  (Expresiones de tiempo - pasado)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Time expressions - present</em> (Expresiones de tiempo - presente)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              '<em>Time expressions - future</em> (Expresiones de tiempo - futuro)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conditionals (Condicionales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              '<em>Structure of the zero (0) conditional</em> (Estructura del zero (0) condicional)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '<em>Structure of the first (I) conditional</em> (Estructura del primer (I) condicional)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Verb tense: future</em> (Tiempo verbal: futuro)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Use of "will"</em> (Uso de “will”)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' <em>Use of "be going to"</em> (Uso de “be going to”)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Formulation of plans</em> (Formulación de planes)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<em>Making predictions</em> (Realización de predicciones)',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Conditionals</em> (Condicionales)',
      referencia:
        'Equipo académico. (2021). Usa los conditionals más allá del equivalente al hubiera. British Council México. ',
      tipo: 'Artículo',
      link: 'https://www.britishcouncil.org.mx/blog/conditionals',
    },
    {
      tema: 'Use of <em>"will"</em> (Uso de <em>“will”</em>)',
      referencia:
        'Rodríguez, K. (2019). Futuro simple en inglés con WILL [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/BWDYnpaqGf8',
    },
    {
      tema: 'Use of "<em>be going to</em>" (Uso de “<em>be going to</em>”)',
      referencia:
        'Inglés Fácil - ALEMA. (2019). Futuro Simple En Ingles Usando Be Going To - Oraciones Con Simple Future Tense Lección # 32 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/QCut75JdZss',
    },
  ],
  glosario: [
    {
      termino: '<em>Conditionals</em> / Condicionales',
      significado:
        'los condicionales son un tipo de estructuras gramaticales que se utilizan cuando se quiere plantear escenarios reales e imaginarios, por tanto, sirven para expresar planes, deseos, sueños o propósitos.',
    },
    {
      termino: '<em>Holiday</em> / Vacaciones',
      significado:
        'descanso temporal de una actividad habitual, principalmente del trabajo remunerado o de los estudios.',
    },
    {
      termino: '<em>Prediction</em> / Predicción',
      significado: 'acción de anunciar un hecho futuro.',
    },
    {
      termino: '<em>Weather</em> / Clima',
      significado:
        'se define como las condiciones meteorológicas medias que caracterizan a un lugar determinado.​​ Es una síntesis del tiempo atmosférico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boyd, C. (2018). El futuro en inglés: ¿Cómo se forma? British Council España. ',
      link: 'https://www.britishcouncil.es/blog/futuro-ingles',
    },
    {
      referencia:
        'Equipo Académico. (2021). Usa los conditionals más allá del equivalente al hubiera. British Council México. ',
      link: 'https://www.britishcouncil.org.mx/blog/conditionals',
    },
    {
      referencia:
        'González, A. y Sierra, N. (2008). Retos y posibilidades de la enseñanza del inglés basada en contenidos en la educación superior: Visión de los docentes en una experiencia en Colombia. Núcleo, 20(25), p. 125-148. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-97842008000100007&lng=es&tlng=es',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Ángel Cárdenas López',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital  ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual        ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
