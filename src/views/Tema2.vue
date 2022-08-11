<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Qualifying adjectives (Adjetivos calificativos)
    .contenedor-traductor.mb-5
      .contenedor-traductor__eng
        p
          span.r-1.fst-italic Qualifying adjectives are variable words that indicate characteristics of people, animals and things. In general, they are used to describe nouns.
            br
            |So, the adjective is a part of the sentence that qualifies the noun, providing additional information or complementing its meaning. Also, these adjectives have no gender and no plural.

            br
            br
            |In this order of ideas, adjectives determine names or nouns by specifying or highlighting their characteristics. In fact, several adjectives can be used together. 
      .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
        p Los adjetivos calificativos son palabras variables que indican características de las personas, los animales y las cosas. En líneas generales, se utilizan para describir los sustantivos. De manera que el adjetivo es una parte de la oración que califica al sustantivo, aportando información adicional o complementando su significado. Además, estos adjetivos no tienen género ni plural.
          br
          br
          |En este orden de ideas, los adjetivos determinan los nombres o sustantivos al especificar o resaltar sus características. De hecho, pueden usarse varios adjetivos juntos.
      a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
   































</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'

export default {
  name: 'Tema2',
  components: {
    DialogoChat,
  },
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
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

<style lang="sass">
.card-audio-bg2
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  width: 100%
  height: 516px
.card-audio-bg
  border-radius: 20px
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  width: 100%
  height: 307px
  .tarjeta-audio__texto.h5
    color: #ff5f65 !important
.audio-red
  .tarjeta-audio__texto.h5
    color: #ff5f65 !important
.tarjeta-audio-botton

  overflow: hidden
  border-radius: 20px
  display: flex
  flex: wrap
.border-audio
  .audio__btn, .audio__btn:hover , .audio__btn:focus
    outline: solid 20px  $white
.tarjeta-bg
  background-image: url('../assets/curso/temas/tarjeta-bg.svg')
.tarjeta-icon-up
  position: relative
  border-radius: 20px
  &__img
    width: 100%
    position: inherit
    top: 0
    left: 0
    transform: translateY(-40%)
slyder-f__btn
  .fa-chevron-right:before
    content: 'url(../assets/curso/temas/flecha-derecha.svg)' !important
.titulo-slyder
  background-color: #ff5f65 !important
  border-radius: 0px 50px 50px 30px
.table-purple
  border-color: #3c3fa7 !important
  &__top, &__middle, &__bottom
    overflow: hidden
  &__top
    overflow: hidden
    border-radius: 10px 10px 0px 0px
    border: 2px solid
  &__middle
    overflow: hidden
    border-left: 2px solid
    border-right: 2px solid
  &__bottom
    border-radius: 0px 0px 10px 10px
    border: 2px solid
.table-title
  background-color: #e1e8ff
</style>
