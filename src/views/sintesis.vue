<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-6: img.mb-5(src='@/assets/curso/temas/sintesis.jpg', alt='')
      .col-lg-6

        p 
          span.r-4.fst-italic.fw-normal As a synthesis, the following conceptual map of the theme developed in this component is presented, in attention to vocabulary related to vacation and the weather, the use of time expressions in past, present and future. Zero and First conditionals are also handled. Likewise, the simple future tense of verbs is presented through the use of “will” and “be going to”, which facilitate the formulation of plans and predictions.
          br
          br
          |A modo de síntesis, se presenta el siguiente mapa conceptual del tema desarrollado en este componente, en atención al vocabulario relacionado con las vacaciones y el clima, el uso de expresiones de tiempo en pasado, presente y futuro. También se manejan los condicionales <em>Zero</em> y <em>First</em>. Asimismo, se presenta el futuro simple de los verbos mediante el uso de <em>“will”</em> y <em>“ be going to”</em>, que facilitan la formulación de planes y predicciones.

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
