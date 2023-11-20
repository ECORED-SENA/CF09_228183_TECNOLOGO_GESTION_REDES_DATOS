<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Revisión y actualización de los estándares y normatividad
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        p.mb-0 La carrera tecnológica en que la humanidad se ha visto involucrada y que pareciera no tener descanso, la ha obligado a definir reglas técnicas y normas legales que delimitan el camino recorrido y estandarizan las características técnicas y procedimentales, así como los demás aspectos necesarios para que todos los actores involucrados hablen un mismo idioma y se facilite la compatibilidad, divulgación, adaptación, comercialización, implementación y demás factores alrededor de los avances.
    .row
      .col-12.bg-c11
        .p-4
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p #[b Esta actividad se refleja en los estándares internacionales bien sean:]
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  |
                  p.mb-0 Estándares “no oficiales”, es decir, aún no reconocidos oficialmente pero con gran aceptación, desarrollados por lo general por grupos de empresas y organizaciones.
                li.d-flex
                  i.fas.fa-check(style="color: #8054F8")
                  |
                  p.mb-0 Estándares oficiales o “De iure”, desarrollados por las diferentes entidades oficialmente encargadas de esta labor, ampliamente reconocidas como el caso de IEEE (Asociación Profesional de Ingeniería) ISO (Organización Internacional para la Estandarización), ITU o UIT (Unión internacional de Telecomunicaciones) o la IETF (<i>Internet Engineering Task Force</i> ó Grupo de Trabajo de Ingeniería en Internet) que regula los estándares RFC.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width: 300px" ,alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Estándares en WLAN
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width: 250px" ,alt='').m-auto
      .col-lg-9
        p Específicamente para las redes inalámbricas locales WLAN, existe variedad de estándares definidos para nombrar las comunicaciones, el estándar IEEE 802.11 inicialmente diseñado en 1997 y desarrollado por la IEEE (Instituto de Ingeniería Eléctrica y Electrónica por sus siglas en inglés), se constituye como la referencia universal para redes WLAN. A esta familia de estándares en constante evolución se les conoce como Wi-Fi y son muchas las versiones que se han implementado de esta familia de estándares para comunicaciones de banda ancha, que normaliza los dos niveles más bajos de la arquitectura OSI: La capa física y la capa de enlace.
        p.mb-0 #[b A continuación, conozca los diferentes estándares WLAN.]
    .tarjeta.tarjeta--gris2
      .p-4.p-lg-5
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center(titulo="Estándar 802.11 (1997)")
            .col-lg-10
              h4.mt-4 Estándar 802.11 (1997)
              p.mb-0 Primer estándar IEEE aprobado para redes inalámbricas locales, define las dos primeras capas del modelo OSI (física y de enlace). Trabaja dos tecnologías de transmisión de nivel físico: <i>Direct Sequence Spread Spectrum (DSSS) y Frequency Hopping Spread Spectrum </i> (FHSS); estas capas utilizan métodos distintos de transmisión de señales a través del aire. Utiliza frecuencia de 2.4 GHz, ancho de banda 22 MHz y alcance de 100 m, trabaja a una velocidad máxima de 2 Mbps.
          .row.justify-content-center(titulo="Estándar 802.11a (1999)")
            .col-lg-10
              h4.mt-4 Estándar 802.11a (1999)
              p.mb-0 Emplea frecuencia de 5.4 GHz, ancho de banda de 20 MHz, alcance de 120 m, técnica de transmisión OFDM (Multiplexación Ortogonal por División de Frecuencia por sus siglas en inglés). Velocidades de 54Mbps. Su desventaja es que la infraestructura o teoría de semiconductores para 5 GHz, no estaba suficientemente desarrollada.
          .row.justify-content-center(titulo="Estándar 802.11b (1999)")
            .col-lg-10
              h4.mt-4 Estándar 802.11b (1999)
              p.mb-0 Compatible con 802.11 y con mayor ancho de banda, lo que facilitó la migración desde 802.11 y otorgó gran aceptación en el mercado. Velocidad máxima de 11Mbps, frecuencia de 2.4 GHz, ancho de banda de 22 MHz y alcance de 150 m. Fue un estándar ampliamente usado, así como el estándar 802.11g por su mejoría en la velocidad.
          .row.justify-content-center(titulo="Estándar 802.11g (2003)")
            .col-lg-10
              h4.mt-4 Estándar 802.11g (2003)
              p.mb-0 Trabaja con la modulación OFDM en la capa física en la frecuencia de 2.4GHz. Provee mayor ancho de banda, con una velocidad máxima de 54Mbps. Alcance de 150 m, igual que el IEEE 802.11b pero con el ancho de banda que brinda el 802.11a.
          .row.justify-content-center(titulo="Estándar 802.11n (2004)")
            .col-lg-10
              h4.mt-4 Estándar 802.11n (2004)
              p.mb-0 Permite velocidad de transmisión de hasta 540 Mbps en frecuencias de 2,4 o de 5 GHz, alcance de 300 m y ancho de banda de hasta 40 MHz. Incorpora tecnología MIMO (Múltiples entradas - Múltiples salidas por sus siglas en inglés), es decir, varias antenas para poder utilizar varios canales simultáneamente.
          .row.justify-content-center(titulo="Estándar 802.11ac (2013)")
            .col-lg-10
              h4.mt-4 Estándar 802.11ac (2013)
              p.mb-0 Hace parte de los estándares denominados en 2018 por la WiFi Alliance como WiFi 5. Basado en una mejora realizada al 802.11n, optimiza la tasa de transferencia y alcanza velocidades máximas de 1300 Mbps, con tecnología MIMO emplea 3 antenas, en una banda de 5 GHz.
          .row.justify-content-center(titulo="Estándar 802.11ax (2020)")
            .col-lg-10
              h4.mt-4 Estándar 802.11ax (2020)
              p.mb-0 Denominado WiFi 6 por la WiFi Alliance, amplia formalmente el uso del espectro a 6 GHz, moviéndose tanto en bandas de 2.4 como de 5 GHz. Introduce la tecnología OFDMA (Acceso múltiple por división de frecuencias ortogonales), mejora la eficiencia en el uso del espectro, velocidad de 600 mbps, menor consumo de energía, e incrementa el desempeño en ambientes de alta densidad, disminuyendo la latencia.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 #[em Site Survey]
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una alternativa para verificar el comportamiento de una red inalámbrica, es mediante la encuesta o el estudio de campo, donde la métrica se puede tomar con base en la interferencia, rendimiento, cobertura, etc. Este proceso busca recolectar información suficiente que permita tomar la decisión sobre la ubicación de nuevos puntos de acceso para otorgar la cobertura conveniente.
    p El proceso implica realizar el despliegue de puntos de acceso temporales en puntos estratégicos, para identificar puntos iniciales de instalación de acuerdo con la cobertura y QoS. Luego de ir obteniendo el análisis de los resultados, es importante cambiar las posiciones de los puntos de acceso o su configuración. Luego de este proceso es importante mencionar que esta técnica no debe ser pasiva en la instalación, sino ser frecuente para mantener una operación regular en la red.
    p.mb-5 #[b Para ampliar la información, lo invitamos a ver el siguiente video.]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XaZJ3EYxQHU?si=k5K-SvMkLFFnX2wt" title="<i>Site Survey</i>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Zona de Fresnel
    p.mb-5 La zona de Fresnel hace referencia al volumen de espacio que se genera entre una antena transmisora y una antena receptora.
    .row.mb-5
      .col-12.bg-c12.p-4.p-lg-0
        figure.mb-5
          img(src='@/assets/curso/tema3/img1.svg', style="width: 800px" ,alt='').m-auto
        .row.justify-content-center.mb-5
          .col-lg-10
            p Al hablar de comunicaciones inalámbricas y generar un enlace, es importante tener en cuenta la orientación y altura de las antenas para garantizar la calidad de las ondas electromagnéticas, calcular esta zona permite dimensionar la medida (altura), posición de las antenas, el espacio entre ellas y la ubicación.
            p La zona de Fresnel busca evitar que se produzca interferencia entre una antena transmisora y receptora, producto de obstáculos, los cuales hacen referencia a árboles, casas, montaña, edificio, curvatura de la tierra entre otros.
            p.mb-0 Los obstáculos generan reducción de la potencia de la señal y cancelación de la misma.
        figure.mb-5
          img(src='@/assets/curso/tema3/img2.svg', style="width: 800px" ,alt='').m-auto
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-0 Las ondas generan un punto máximo y punto mínimo de la señal, y mediante la siguiente fórmula se valida el radio.
        figure
          img(src='@/assets/curso/tema3/img3b.svg', style="width: 400px" ,alt='').m-auto
    p En caso de oclusiones particulares, es recomendable optar por el cambio de posición de la antena de forma que tenga al menos el 60 % del radio máximo de esta zona libre.
    p Lo ideal es que al generar el enlace no haya obstrucción, y en caso de que no sea posible evitarlo, no debe superar el 20 % y como máximo el 40 %.
    p Al 20 % el enlace ya no funciona bien, tendrá interferencia y si es más del 40 % el enlace no será efectivo.
    p.mb-5 #[b Para ampliar la información y estudiar un caso práctico, lo invitamos a ver el siguiente video.]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ue2AyM-w-ac?si=ElPUddYysNgONo47" title="Zonas Fresnel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 #[b De acuerdo con Covarrubias (2020):]
    .row.justify-content-center.mb-5
      .col-lg-6.bg-c13
        .p-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check(style="color: #8054F8")
              |
              p.mb-0 Una zona de Fresnel es una de una serie de regiones elipsoidales, de diámetro polar extenso, concéntricas, de espacio entre y alrededor de una antena que transmite y un sistema de antena que recibe.
            li.d-flex
              i.fas.fa-check(style="color: #8054F8")
              |
              p.mb-0 Es el concepto utilizado para entender y calcular la intensidad de la propagación de las ondas entre un transmisor y un receptor.
            li.d-flex
              i.fas.fa-check(style="color: #8054F8")
              |
              p.mb-0 La primera región es el espacio elipsoidal a través del cual pasa la señal de línea de vista directa.
            li.d-flex
              i.fas.fa-check(style="color: #8054F8")
              |
              p.mb-0 La segunda región rodea la primera región, pero excluye la primera. En esta, la onda capturada por el receptor estará desfasada más de 90°, pero menos de 270°.
            li.d-flex
              i.fas.fa-check(style="color: #8054F8")
              |
              p.mb-0 La tercera región rodea la segunda y las ondas desviadas capturadas por el receptor tendrán el mismo efecto que una onda en la primera región. La onda sinusoidal tendrá un desfase mayor a 270°, pero menor a 450° (idealmente sería un desfase de 360°).
      .col-auto.px-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img5.png', style="width: 430px" ,alt='').m-auto
    p.mb-5 #[b Recomendaciones de implementación:]
    .row.bg-c14
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img6.png', style="width: 350px" ,alt='').m-auto
            .col-lg-9
              SlyderF.mb-5(columnas="col-md-6")
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/img5.svg' alt='AvatarTop')
                  .tarjeta.color-secundario
                    .p-4
                      p.mb-0 Como regla general, la máxima obstrucción permitida es 40 %, pero la obstrucción recomendada es 20 % o menor.
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
                  .tarjeta.color-secundario
                    .p-4
                      p.mb-0 Cualquier reflexión o desviación que altere el refuerzo de la Zona uno, reduce la señal recibida.
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
                  .tarjeta.color-secundario
                    .p-4
                      p.mb-0 Como regla general, se establece que: al menos el 60 % de la primera zona de Fresnel debe estar libre de obstáculos, para tener una señal adecuada y así una buena recepción.
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
                  .tarjeta.color-secundario
                    .p-4
                      p.mb-0 Zonas de Fresnel sucesivas tienen menor impacto.
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido
      h2 1.4 Calidad del Servicio QoS
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b #[i Quality of Service]], en español Calidad del servicio, hace referencia al rendimiento promedio de una red; esto desde la óptica del usuario. Este rendimiento se mide en aspectos como el ancho de banda, la latencia, la tasa de errores, etc.
    p.mb-5 Aplicado a redes inalámbricas, en las cuales el medio de transporte es compartido, estas políticas de calidad del servicio se refieren en la capacidad que posea la red para proporcionar un mejor servicio o un servicio especial a determinados usuarios en detrimento de otro u otros usuarios o aplicaciones, mediante la implementación de políticas QoS acordes a los requerimientos, tales como anchos de banda dedicados o diferenciados, control de latencia o priorización de tráficos.
    .row.bg-c16
      .col-12
        .px-5.pb-5
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c15
              .p-4
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p.mb-0 Las redes inalámbricas desde su concepción, fueron ideales para la transferencia de datos, sin contemplar en esos tiempos el envío de voz y video, esta es una de las razones del por qué fue necesario el avance tecnológico para ir implementando estos vacíos, que hoy en día son tan necesarios para tener una comunicación más centralizada.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema3/img8.png', style="width: 200px" ,alt='').m-auto
          p Si se plantea por un momento el escenario de devolver en el tiempo 10 o 15 años para entrar a una plataforma como Youtube, y ver un video, es un tema bastante complejo porque es poner a prueba la paciencia del usuario, debido a que este tipo de contenido era o es bastante “pesado” para su transmisión, requiere una mejor conexión, ancho de banda, velocidad, etc. y todo esto hace parte de la calidad de servicio QoS, porque es entrar a velar por un nivel de eficacia para el usuario final garantizando en un alto porcentaje el servicio recibido.
          p.mb-5 #[b La calidad del servicio QoS en telecomunicaciones, se define como:]
          .row.align-items-end.mb-5
            .col-lg-6
              .bloque-texto-c.color-secundario.p-4.mb-3
                i.fas.fa-quote-right
                p.mb-2 #[b El efecto colectivo del rendimiento de un servicio que determina el grado de satisfacción del usuario de dicho servicio.]
                span Suarez (2013)
              p Siguiendo este concepto, el enfoque de la calidad del servicio QoS es como el usuario final lo siente, visualiza, percibe. En telemática, se define QoS como:
              .bloque-texto-c.color-secundario.p-4
                i.fas.fa-quote-right
                p.mb-2 #[b La capacidad de un elemento de la red de asegurar que su tráfico y los requerimientos de servicio previamente establecidos puedan ser satisfechos.]
                span (ITU. 1984, E-800)
            .col-lg-6.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img9.png', style="width: 500px" ,alt='').m-auto
          p.mb-5 #[b Cuando se habla de redes inalámbricas es importante analizar la calidad del servicio desde dos enfoques:]
          .row.justify-content-center.mb-0.mb-lg-5
            .col-md-5.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
                .tarjeta.color-secundario2
                  .p-4
                    p.mb-0 El primero es el de red, el cual puede hacer referencia a QoS en términos de retardos, latencia, envíos de paquetes, etc.
            .col-md-5.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
                .tarjeta.color-secundario2
                  .p-4
                    p.mb-0 El segundo enfoque está directamente relacionado con el usuario, quien es el encargado de determinar cuál es la calidad de un video, si hubo fallas mientras veía dicho video, interrupciones de carga, etc.
          p.mb-0 El objetivo principal de QoS es que el usuario siempre tenga una excelente experiencia y pueda aprovechar al 100 % los recursos de la red para satisfacer sus necesidades.
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido
      h2 1.5 Marco legal
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img10.png', style="width: 350px" ,alt='').m-auto
      .col-lg-9
        p Es importante conocer la normativa local colombiana referente al uso del espectro de radiofrecuencia y demás aspectos regulados mediante normatividad legal. Para el tema en cuestión, en Colombia, el Ministerio de Tecnologías de la Información y las Comunicaciones se encarga de regular al respecto, y a su vez, la CRC (Comisión de Regulación de Comunicaciones) emite el RITEL (Reglamento para Redes Internas de Telecomunicaciones), específicamente para su campo de acción actualizado por la resolución CRC 5993 de 2020.
        p.mb-0 #[b Conozcamos más sobre el marco legal:]
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-primario.h-100
          .p-4
            p #[b Resolución 2759 de 2020]
            p mediante la cual se adopta la política pública de espectro para la vigencia 2020-2024.
            a.anexo.mb-4.mb-lg-0(href="https://www.ane.gov.co/Sliders/archivos/PlaneacionInvestigacionDesarrolo/1.%20POL%C3%8DTICA%20DE%20ESPECTRO/2020%2012%2015%2004_POLITICA%20PUBLICA%20DE%20ESPECTRO.pdf" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Política Pública de espectro 2020-2024.] Para conocer esta política, lo invitamos a visitar el siguiente enlace.
      .col-lg-6
        .cajon.color-primario
          .p-4
            p #[b Constitución Política de Colombia, Artículo 75]
            p Que establece, literalmente: “El espectro electromagnético es un bien público inajenable e imprescriptible sujeto a la gestión y control del Estado. Se garantiza la igualdad de oportunidades en el acceso a su uso en los términos que fije la ley. Para garantizar el pluralismo informativo y la competencia, el Estado intervendrá por mandato de la ley para evitar las prácticas monopolísticas en el uso del espectro electromagnético”.
    .row.mb-4
      .col-12
        .cajon.color-primario
          .p-4
            p #[b Resolución 3436 de 2017]
            p.mb-5 Por la cual se reglamentan los requisitos técnicos, operativos y de seguridad, que deberán cumplir las zonas de acceso a Internet inalámbrico de que trata el Capítulo 2, Título 9, Parte 2, Libro 2 del Decreto 1078 de 2015. El cual, en su Artículo 2, establece las características técnicas para las zonas de acceso público y gratuito a internet inalámbrico, las cuales deberán como mínimo contar con las siguientes características técnicas:
            .row.justify-content-center
              .col-lg-8
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                  .row(titulo="Espectro Radioeléctrico")
                    .col-12
                      p El acceso inalámbrico a Internet deberá ser implementado sobre las bandas de libre utilización, atribuidas por parte de la Agencia Nacional del Espectro, entre ellos el de Red Inalámbrica de Área Local (RLAN).
                  .row(titulo="Tecnología")
                    .col-12
                      p La tecnología utilizada para la implementación de las RLAN en las entidades del orden nacional, debe ser de amplia utilización y debe ser asequible por los usuarios, en este sentido se recomienda la implementación sobre el estándar IEEE 802.11 (WiFi), IEEE 802.11 a/b/g/n/ac.
                  .row(titulo="<i>Access Point/AP</i> (Puntos de Acceso)")
                    .col-12
                      p La cantidad de Puntos de Acceso (AP) a instalar deben definirse en el estudio de campo y los mismos deben soportar la cobertura al espacio de atención al usuario y el acceso de equipos terminales de usuario portátiles y móviles. Para los espacios de atención al público que colinda con el espacio público, la zona WiFi deberá extenderse para dar cobertura de mínimo dos (2) metros lineales hacia el exterior de la entidad. Los Puntos de Acceso (AP) a implementar, deben contar con la certificación de industria “WiFi <i>Certified</i>”. El acceso deberá prestarse simultáneamente en banda de 2.4 y 5 GHz.
                  .row(titulo="Equipos terminales de usuario")
                    .col-12
                      p Las redes a implementar deben estar en capacidad de permitir la conexión de equipos terminales, tales como computadores portátiles, celulares inteligentes y tabletas con diferentes sistemas operativos.
                  .row(titulo="Latencia")
                    .col-12
                      p Se debe contar con una latencia promedio de menos de 250 ms.
    .row
      .col-lg-6
        .cajon.color-primario
          .p-4
            p #[b Resolución 2256 de 2020]
            p “Por la cual se actualiza la Política General de Seguridad y Privacidad de la Información, Seguridad Digital y Continuidad de la Operación de los Servicios del Ministerio/Fondo Único de Tecnologías de la Información y las Comunicaciones, se definen lineamientos frente al uso y manejo de la información y se derogan las Resoluciones 2999 de 2008 y 1124 de 2020”.
      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img11.png', style="width: 310px" ,alt='')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
