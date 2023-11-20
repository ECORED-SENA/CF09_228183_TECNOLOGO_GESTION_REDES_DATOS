<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Usted ha finalizado el recorrido por los temas de este componente formativo. A continuación, haga un análisis del mapa que se muestra y realice su propia síntesis de lo estudiado.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: validación de estándares y normatividad. Temas integradores: estándares internacionales, Site Survey, zona de Fresnel, calidad del servicio QoS, Estándares en WLAN y normativa.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis_cf9.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
