<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 <em>Conditionals</em> (Condicionales)
    .tarjeta.rounded-0.margin-n.p-4.mb-5(style='background-color: #ff9fa3')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .contenedor-traductor.mb-5
            .contenedor-traductor__eng
              p.fst-italic Conditionals are a type of grammatical structures that are used when you want to present real and imaginary scenarios, therefore, they are used to express plans, wishes, dreams or purposes.
                br
                br
                |In general, there are several types of conditionals in English, which are structured according to the possibility they are expressing and according to the verb tenses used, which can be present, past or future.
                br
                br
                |Basically, the conditionals are formed with the particle “if”, which relates an action that depends on another.
                br
                br
                |In this way, it is established that the first action is a condition (also known as 
                span.r-1 “if clause”) 
                | and the following is the result (or 
                span.r-1 “main clause”
                | ).
                br
                br
                |Next, the first two conditionals are detailed, which are: the conditional “0” (zero) and the conditional 1 (first).fact, several adjectives can be used together. 
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
              p Los condicionales son un tipo de estructuras gramaticales que se utilizan cuando se quiere plantear escenarios reales e imaginarios, por tanto, sirven para expresar planes, deseos, sueños o propósitos. 
                br
                |En general, existen varios tipos de condicionales en inglés, los cuales son estructurados de acuerdo con la posibilidad que están expresando y también de acuerdo con los tiempos verbales que se utilizan, que pueden estar en presente, pasado o futuro.
                br
                |Básicamente, los condicionales se forman con la partícula <em>“if”</em>, la cual relaciona una acción que depende de otra. De esta manera, se establece que la primera acción es una condición (también conocida como <em>“if clause”</em>) y la siguiente es el resultado (o <em>“main clause”</em>).
            a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
        .col-lg-4.col-6
          img(src='@/assets/curso/temas/59.png', alt='')
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1   <em>Structure of the zero (0) conditional</em> (Estructura del cero (0) condicional)
    .contenedor-traductor.mb-5.margin-n
      .contenedor-traductor__eng
        p.fst-italic The 
          span.r-1 zero conditional 
          | is formed with two verbs in the present tense, one in the 
          span.r-1 main clause 
          | and the other in the subordinate clause 
          span.r-1 (if clause). 
          | That is, both the condition and the result are real events and are in the present tense. It is widely used to express scientific facts or universal truths.
      .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
        p El condicional cero se forma con dos verbos en presente, uno en la oración principal (<em>main clause</em>) y otro en la subordinada (<em>if clause</em>). Es decir, tanto la condición como el resultado son hechos reales y están en tiempo presente. Es muy utilizado para expresar hechos de carácter científico o verdades universales.
      a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    p <em>Its structure is as follows:</em> / Su estructura es la siguiente:
    TabsB.color-acento-botones.mb-5
      .p-5(titulo="Structure 1" :icono="require('@/assets/curso/temas/63.svg')" style='background-color: #eff3ff')
        .row.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/temas/60.svg', alt='').mb-3
        .d-flex.justify-content-center.aling-items-center.p-3
          img(src='@/assets/curso/temas/61.svg', alt='' style='width: 123px').me-4
          p
            span.fst-italic.fw-bold For example: /
            | Por ejemplo:
            br
            br
            span.fst-italic.fw-bold If you mix black and white, you get gray.
            br
            | Si mezclas negro y blanco, obtienes gris.
      .p-5(titulo="Structure 2" :icono="require('@/assets/curso/temas/64.svg')" style='background-color: #eff3ff')
        .row.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/temas/62.svg', alt='').mb-3
        .d-flex.justify-content-center.aling-items-center.p-3
          img(src='@/assets/curso/temas/61.svg', alt='' style='width: 123px').me-4
          p
            span.fst-italic.fw-bold For example: /
            | Por ejemplo:
            br
            br
            span.fst-italic.fw-bold You get gray if you mix black and white.
            br
            | Obtienes gris si mezclas negro y blanco.
    .tarjeta.rounded-0.margin-n.color-acento-contenido.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta.bg-white.p-4
            SlyderA(tipo='b')
              .row
                p.text-center
                  span.r-2.fst-italic  Here are some examples:
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3.d-none.d-lg-block(src='@/assets/curso/temas/66.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you drink too many beers, you get drunk <span class='b-1'>/ Si tomas muchas cervezas, te emborrachas.</span> "
                    :audio="require('@/assets/audios/tema2/1.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you spend a lot of time in the sun, you tan a lot <span class='b-1'> / Si estás mucho tiempo al sol, te bronceas mucho. tema2/1.mp3</span>"
                    :audio="require('@/assets/audios/tema2/2.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you scare a dog, it bites you <span class='b-1'>/ Si asustas a un perro, te muerde.</span> "
                    :audio="require('@/assets/audios/tema2/3.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If Ken works all day, he gets tired <span class='b-1'>/ Si Ken trabaja todo el día, se cansa. </span>"
                    :audio="require('@/assets/audios/tema2/4.mp3')"
                    )
              .row
                p.text-center
                  span.r-2.fst-italic  Here are some examples:
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3.d-none.d-lg-block(src='@/assets/curso/temas/67.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you put the lettuce in the fridge, it stays fresh  <span class='b-1'>/ Si pones la lechuga en el refrigerador, se mantiene fresca.</span>"
                    :audio="require('@/assets/audios/tema2/5.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Charles gets up late if he doesn’t hear the alarm clock <span class='b-1'>  Charles se levanta tarde si no escucha la alarma del reloj. </span>"
                    :audio="require('@/assets/audios/tema2/6.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If the cell phone drops, its screen breaks  <span class='b-1'> / Si el celular cae, se rompe su pantalla.</span>"
                    :audio="require('@/assets/audios/tema2/7.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="The baby cries if he is hungry  <span class='b-1'> / El bebé llora si tiene hambre.</span>"
                    :audio="require('@/assets/audios/tema2/8.mp3')"
                    )
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/65.svg', alt='')
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2  <em>Structure of the first (I) conditional</em> / (Estructura del primer (I) condicional)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/68.svg', alt='').mb-3
      .col-lg-9 
        .contenedor-traductor.mb-4
          .contenedor-traductor__eng
            p.fst-italic The first conditional is used to talk about a real possibility in the future, that is, real or possible situations arise, but it is not certain that they will occur. Basically, future scenarios are considered, with a high probability of realization. And it will be possible when the condition is met. Therefore, it is the indicated conditional to express plans, projects or to make predictions about any particular matter.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp4}")
            p 
              span.r-5 El primer condicional se utiliza para hablar de una posibilidad real en el futuro, es decir, se plantean situaciones reales o posibles, pero no es seguro que ocurran. Básicamente, se proponen escenarios en el futuro, con una alta probabilidad de realización, y serán posibles cuando la condición se cumpla. Por ello, es el condicional indicado para expresar planes, proyectos o para hacer predicciones sobre cualquier asunto particular.
          a.boton-traduccion(@click='ocultarEsp4 = !ocultarEsp4') Ver traducción
    p <em>Its structure is as follows:</em> / Su estructura es la siguiente:
    TabsB.color-acento-botones.mb-5
      .p-5(titulo="Structure 1" :icono="require('@/assets/curso/temas/63.svg')" style='background-color: #eff3ff')
        .row.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/temas/70.svg', alt='').mb-3
        .d-flex.justify-content-center.aling-items-center.p-3
          img(src='@/assets/curso/temas/69.svg', alt='' style='width: 123px').me-4
          p
            span.fst-italic.fw-bold For example: / 
            | Por ejemplo:
            br
            br
            span.fst-italic.fw-bold If Maddy studies more, she will pass the exam.
            br
            | Si Maddy estudia más, pasará el examen.
      .p-5(titulo="Structure 2" :icono="require('@/assets/curso/temas/64.svg')" style='background-color: #eff3ff')
        .row.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/temas/71.svg', alt='').mb-3
        .d-flex.justify-content-center.aling-items-center.p-3
          img(src='@/assets/curso/temas/69.svg', alt='' style='width: 123px').me-4
          p
            span.fst-italic.fw-bold For example: / 
            | Por ejemplo:
            br
            br
            span.fst-italic.fw-bold Maddy will pass the exam if she studies more.
            br
            | Maddy pasará el examen si estudia más.
    .tarjeta.rounded-0.margin-n.color-secundario.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.bg-white.p-4
            SlyderA(tipo='b')
              .row
                p.text-center
                  span.r-2.fst-italic  Here are some examples:
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3.d-none.d-lg-block(src='@/assets/curso/temas/72.png', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you come to my house, you will meet my parents <span class='b-1'> / Si vienes a mi casa, conocerás a mis padres.</span> "
                    :audio="require('@/assets/audios/tema2/9.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If you don’t study, you won’t pass the exam <span class='b-1'>/ Si no estudias, no pasarás el examen.</span> "
                    :audio="require('@/assets/audios/tema2/10.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="You will miss the bus if you don’t hurry <span class='b-1'> / Perderás el bus si no te apuras. </span> "
                    :audio="require('@/assets/audios/tema2/11.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If Sara buys the fruits, I will make a fruit cocktail <span class='b-1'> / Si Sara compra las frutas, yo haré un cóctel de frutas</span> "
                    :audio="require('@/assets/audios/tema2/12.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If Marcus gets home early from work, we’ll go to the movies <span class='b-1'> / Si Marcus llega temprano del trabajo, iremos al cine.</span> "
                    :audio="require('@/assets/audios/tema2/13.mp3')"
                    )
              .row
                p.text-center
                  span.r-2.fst-italic  Here are some examples:
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3.d-none.d-lg-block(src='@/assets/curso/temas/72.png', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We will travel by plane if we go to the island <span class='b-1'> / Viajaremos por avión si vamos a la Isla.</span> "
                    :audio="require('@/assets/audios/tema2/14.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="They will have many clients if they do a good promotion <span class='b-1'> / Ellos tendrán muchos clientes si hacen una buena promoción.</span> "
                    :audio="require('@/assets/audios/tema2/15.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If Samuel raises enough Money, he will buy a laptop <span class='b-1'> / Si Samuel reúne dinero suficiente, el comprará una computadora portátil. </span> "
                    :audio="require('@/assets/audios/tema2/16.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Dana will be your dance partner if you learn to dance <span class='b-1'> / Dana será tu pareja de baile si aprendes a bailar.</span> "
                    :audio="require('@/assets/audios/tema2/17.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="If it doesn’t rain, we’ll go for a walk in the park <span class='b-1'> / Si no llueve, iremos a pasear al parque </span> "
                    :audio="require('@/assets/audios/tema2/18.mp3')"
                    )



























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
    ocultarEsp3: true,
    ocultarEsp4: true,
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
