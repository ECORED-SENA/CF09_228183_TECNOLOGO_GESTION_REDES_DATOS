<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mx-0
      .col-12.bg-c1(data-aos="fade-right")
        .p-4
          .row
            .col-12.bg-white.shadow-lg
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/intro/img1.svg', style="max-width: 128px" ,alt='').m-auto
                  .col
                    p.mb-0 Para comenzar con el estudio de la temática del componente formativo, lo invitamos a ver el siguiente video.
    .row
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rngc8nDv0G0?si=w1KY8bREKM9GIgPq" title="Validación de estándares y normatividad vigente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
