export default {
  global: {
    componenteFormativo: 'Verificación / transmisión de datos',
    descripcionCurso:
      'Este componente formativo, aborda generalidades y aspectos clave sobre el proceso de verificación / transmisión de datos, la comprobación del flujo de información sobre la infraestructura inalámbrica y otras acciones conexas. Co su estudio responsable, el aprendiz estará se afianzará en: medios inalámbricos, estándares de transmisión, seguridad en la red, métodos y métodos de funcionamiento, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Revisión y actualización de los estándares y normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares en WLAN',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Site Survey',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Zona de Fresnel',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Calidad del Servicio QoS',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Marco legal',
            hash: 't_1_5',
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
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
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
      tema: '1.1 Estándares en WLAN',
      referencia:
        'Asociación para el progreso de las telecomunicaciones. (2016). <em>Colombia: especialistas debaten sobre la creación de redes inalámbricas comunitarias.</em>',
      tipo: 'Artículo',
      link:
        'https://www.apc.org/es/news/colombia-especialistas-debaten-sobre-la-creacion-d ',
    },
    {
      tema: '1.1 Estándares en WLAN',
      referencia:
        'Oracle. (2010). <em>Guía de administración del sistema: servicios IP. Modelo de referencia OSI.</em>',
      tipo: 'Sitio web',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      tema: '1.5 Marco legal',
      referencia: 'Sin Juriscol. (s.f.). <em>Compilación jurídica MINTIC.</em>',
      tipo: 'Sitio web',
      link: 'https://normograma.mintic.gov.co/docs/arbol/1000.htm',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'dispositivo de hardware que se inserta en una estación de trabajo de una red y le permite comunicarse con otros elementos unidos a la red. El adaptador de red recibe y convierte señales entrantes de la red a la estación de trabajo y convierte y envía comunicaciones salientes a la red.',
    },
    {
      termino: 'Protocolo',
      significado:
        'reglas de comunicación bajo las cuales opera la red. Un protocolo prescribe la manera como se formatean y transmiten las solicitudes, los mensajes y otras señales a través de la red.',
    },
    {
      termino: 'VoIP',
      significado:
        'es un conjunto de recursos que hacen posible que la señal de voz viaje a través de Internet empleando el protocolo IP (Protocolo de Internet)',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia [Constitución 1991]. Art. 75. El espectro electromagnético es un bien público inenajenable e imprescriptible sujeto a la gestión y control del Estado. 7 de julio de 1991 (Colombia).',
      link: '',
    },
    {
      referencia: 'Covarrubias, N. (2020). ¿Qué es la zona de Fresnel? ',
      link:
        'https://soporte.syscom.mx/es/articles/1455193-que-es-la-zona-de-fresnel',
    },
    {
      referencia:
        'Ligth, E. (2013). El espectro radioeléctrico como medio de vida. Commons. Revista de Comunicación y Ciudadanía Digital, 2(1).',
      link: '',
    },
    {
      referencia:
        'Ministerio TIC de Colombia. (Junio 4, 2020). Resolución 2256 de 2020. Por la cual se actualiza la Política de Tratamiento de Datos Personales del Ministerio TIC".',
      link: '',
    },
    {
      referencia:
        'Resolución 3436 de 2017. Por la cual se reglamentan los requisitos técnicos, operativos y de seguridad que deberán cumplir las zonas de acceso a Internet inalámbrico de que trata el capítulo 2, título 9, parte 2, del Decreto 1078 de 2015. Diciembre 27 de 2017. Diario Oficial 50.484.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Deivis Eduard Ramirez Martinez',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Heidi Zuleima Gil Castañeda',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios  - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro industrial del diseño y la manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
