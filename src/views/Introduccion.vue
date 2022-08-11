<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic In this training component we are going to present content related to vacations and the weather, incorporating expressions of time that are handled in the present, past and future. The structures of the zero and first conditionals are also explained. To finally focus on the future tense, by using “will” and “be going to”, to describe our plans and make some predictions.
              br
              br
              |That’s why this component is called “Things I’m going to do”. Therefore, this content is presented through a variety of simple examples that facilitate the learning of these structures, in order to develop the specific skills required by the learner to manage the English language.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p 
              span.r-5 En este componente formativo vamos a presentar contenidos referidos a las vacaciones y el clima, incorporando expresiones de tiempo que se manejan en presente, pasado y futuro. También se explican las estructuras de los condicionales zero y first. Para finalmente enfocar el tiempo verbal futuro, mediante el uso de "will" y "be going to", para describir nuestros planes y formular algunas predicciones.
                br
                br
                |Es por ello que este componente se llama "Las cosas que voy a hacer". Por tanto, este contenido se presenta mediante diversidad de ejemplos sencillos, que facilitan el aprendizaje de estas estructuras, a fin de desarrollar las competencias específicas requeridas por el aprendiz para el manejo del idioma inglés.

          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
      .col-lg-5.col-8: img(src='@/assets/curso/temas/0.png', alt='')
    p.mb-5(data-aos='fade-right') Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Syt_rvxtLvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/introduction.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Guion video Introducción
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    ocultarEsp: true,
  }),
}
</script>

<style lang="sass"></style>
