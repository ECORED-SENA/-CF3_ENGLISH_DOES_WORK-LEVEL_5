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
        titulo: '<em>Simple present tense</em> (Tiempo presente simple)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '<em>Simple present tense function</em> (Función del tiempo presente simple)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Simple present tense form</em> (Forma del tiempo presente simple)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              '<em>Simple present tense pronunciation</em> (Pronunciación del tiempo presente simple)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Qualifying adjectives</em> (Adjetivos calificativos)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Comparative adjectives</em> (Adjetivos comparativos)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Superlative adjectives</em> (Adjetivos superlativos)',
            hash: 't_2_2',
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
      tema:
        'Simple present tense function (Función del tiempo presente simple)',
      referencia:
        'McLellan, C. (2019). ¿Cómo y cuándo se usa el "presente simple" en inglés? British Council España. ',
      tipo: 'Artículo',
      link: 'https://www.britishcouncil.es/blog/presente-simple',
    },
    {
      tema: 'Comparative adjectives (Adjetivos comparativos)',
      referencia:
        'Ochoa, F. [Inglés Fácil]. (s. f.). 4 Reglas básicas del COMPARATIVO en inglés – Muy bien explicado | Clases inglés [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9KIiaLupHuA',
    },
    {
      tema: 'Qualifying adjectives (Adjetivos calificativos)',
      referencia:
        'Boyd, C. (2018). ¿Cómo formar comparativos y superlativos en inglés? British Council España.',
      tipo: 'Artículo',
      link:
        'https://www.britishcouncil.es/blog/como-formar-comparativos-superlativos-ingles',
    },
  ],
  glosario: [
    {
      termino: '<em>Adjectives</em>/Adjetivos',
      significado:
        'son palabras variables que indican características de las personas, los animales y las cosas. Básicamente, se utilizan para describir los sustantivos.',
    },
    {
      termino: '<em>Comparatives</em>/Comparativos',
      significado:
        'son palabras que se utilizan para expresar una comparación de cualidades entre dos elementos.',
    },
    {
      termino: '<em>Superlatives</em>/Superlativos',
      significado:
        'son aquellos adjetivos que sirven para indicar la descripción de un objeto, persona, animal o lugar que se ubica en el extremo superior o inferior de una determinada cualidad.',
    },
    {
      termino: '<em>Present tense</em>/Tiempo presente',
      significado: 'Present tense/Tiempo presente',
    },
  ],
  referencias: [
    {
      referencia:
        'González, A. y Sierra, N. (2008). Retos y posibilidades de la enseñanza del inglés basada en contenidos en la educación superior: visión de los docentes en una experiencia en Colombia. Núcleo, 20(25), p. 125-148. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-97842008000100007&lng=es&tlng=es',
    },
    {
      referencia:
        'English Made Easy with Caroline. (2019). Pronunciation for -s Ending Verbs in the Simple Present Tense + Nouns [Video]. YouTube.',
      link: 'https://youtu.be/671v4Iwg9Ao',
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
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
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
