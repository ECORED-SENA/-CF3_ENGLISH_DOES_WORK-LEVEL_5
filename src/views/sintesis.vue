<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p 
      span.r-4.fst-italic.fw-normal As a synthesis, the following conceptual map of the theme developed in this component is presented, in which the simple present tense is handled, indicating its function, form and pronunciation, as well as the qualifying adjectives, in attention to their classification in comparatives and superlatives.
      br
      br
      |Como síntesis, se presenta el siguiente mapa conceptual de la temática desarrollada en este componente en el que se maneja el tiempo verbal presente simple, señalando su función, forma y pronunciación, así como también se presentan los adjetivos calificativos, en atención a su clasificación en comparativos y superlativos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
