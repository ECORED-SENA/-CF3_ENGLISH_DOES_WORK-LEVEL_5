<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1  <em>Verb tense: future</em> (Tiempo verbal: futuro)
    .tarjeta.margin-n.rounded-0.p-5(style="background-color: #a6bbff").mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .contenedor-traductor.mb-5
            .contenedor-traductor__eng
              p.fst-italic When focusing on the future, it is being expressed that something has not happened yet, but is about to happen, so that it may or may not happen. This verb tense is used when making plans or projects in the short, medium, or long term. Also, when promises or spontaneous decisions are made or when something is offered. Also, when predictions are made based on the person’s opinions.
                br
                br
                |Depending on the certainty of what is being said, the auxiliary “will” or “shall” can be used, or also the structure “be going to”.
                br
                br
                |Basically, when you are very sure of the fact that it is going to happen, you use the “be going to”, while when you want to indicate less certainty, you use the future simple with the modal verb “will”.
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
              p Al enfocar el futuro, se está expresando que algo no ha sucedido aún, sino que está por suceder, de manera que pueden ocurrir o no. Este tiempo verbal se usa cuando se hacen planes o proyectos a corto, mediano o largo plazo, también cuando se hacen promesas, se toman decisiones espontáneas o cuando se ofrece algo y cuando se hacen predicciones basadas en opiniones de la persona.
                br
                |Dependiendo de la certeza de lo que se está diciendo, se puede utilizar el auxiliar <em>“will”</em> o <em>“shall”</em>, o también la estructura <em>“be going to”</em>.
                br
                |Básicamente, cuando se está muy seguro del hecho que va a ocurrir, se utiliza el <em>“be going to”</em>, mientras que cuando se quiere indicar una menor certeza se utiliza el futuro simple, con el verbo modal <em>“will”</em>
            a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
        .col-lg-4.col-6
          img(src='@/assets/curso/temas/73.svg', alt='')
      p.text-center
        span.fst-italic.fw-bold For example: 
        | / Por ejemplo:
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta.color-acento-contenido.p-5
            .row.justify-content-center
              .col-lg-5
                img(src='@/assets/curso/temas/74.svg', alt='')
              .col-lg-7
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Susy is going to buy the tickets for the concert tomorrow."
                    :audio="require('@/assets/audios/tema3/1.wav')"
                    )
                p.mb-0 Susy va a comprar las entradas para el concierto mañana.
        .col-lg-6
          .tarjeta.color-acento-contenido.p-5
            .row.justify-content-center
              .col-lg-7
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I think you will get the prize."
                    :audio="require('@/assets/audios/tema3/2.wav')"
                    )
                p.mb-0 Yo pienso que tú obtendrás el premio.
              .col-lg-5
                img(src='@/assets/curso/temas/75.svg', alt='')
    p.text-center.mb-5 Para ampliar la información, se invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_3_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.1   <em>Use of “will”</em> / (Uso de “will”)
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6
          img(src='@/assets/curso/temas/76.png', alt='')
        .col-lg-8
          .contenedor-traductor.mb-5
            .contenedor-traductor__eng
              p.fst-italic As already stated, the future simple, using the auxiliary/modal “will” is used to express an opinion or predict what is going to happen based generally on personal opinions, for which these structures are generally accompanied by expressions such as: “I think”, “maybe”, “perhaps”, among others, that indicate some doubt about whether what is expressed will be a reality or not.
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
              p Como ya se planteó, el future simple, utilizando el auxiliary/modal <em>“will”</em>, sirve para expresar una opinión o predecir lo que va a suceder, basándose generalmente en opiniones personales, por lo cual es común que estas estructuras vayan acompañadas de expresiones como: <em>“I think”</em>, <em>“maybe”</em>, <em>“perhaps”</em>, entre otras, que indican cierta duda sobre si lo que se expresa será una realidad o no.
            a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
          p.text-center 
            span.fst-italic The structure to use is the following: 
            | / La estructura a utilizar es la siguiente:
          .row.justify-content-center.mb-5
            .col-10: img(src='@/assets/curso/temas/77.svg', alt='').mb-3
            .col-lg-8 
              .row.justify-content-center
                .col-lg-8
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/temas/78.svg' alt='AvatarTop')
                    .tarjeta(style='background-color: #fff7da')
                      .p-4
                        p.mb-0 
                          span.r-1.fst-italic Alice 
                          span.f-3.p-1.fw-bold.rounded-3 will 
                          span.r-2.fst-italic &nbsp read you letter. 
                          br
                          | Alice leerá tu carta. 
    p
      span.fst-italic.fw-normal.r-4 Like other verb tenses, the future simple can be used in affirmative, negative and interrogative sentences to express decisions, plans or predictions. 
      | / Como otros tiempos verbales, el futuro simple puede utilizarse en oraciones afirmativas, negativas e interrogativas. 
    p
      span.fst-italic.fw-normal.r-4 In this case, the structures to use are the following: 
      | / En este caso, las estructuras a utilizar son las siguientes:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-contenido--borde.border-2.p-4(titulo="<em>Affirmative sentence</em>" style='background-color: #fff7da; border-color: #3c3fa7 ')
        h4
          span.r-4.fst-italic Affirmative sentence  
        .row.justify-content-center.mb-5
          .col-10: img(src='@/assets/curso/temas/77.svg', alt='')
        .row.justify-content-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/80.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Mary will buy a blue purse."
                    :audio="require('@/assets/audios/tema3/3.wav')"
                    )
            p.mb-0 Mary comprará una cartera azul.
      .tarjeta.color-acento-contenido--borde.border-2.p-4(titulo="<em>Negative sentence</em>" style='background-color: #fff7da; border-color: #3c3fa7 ')
        h4
          span.r-4.fst-italic Negative sentence 
        .row.justify-content-center.mb-5
            .col-10: img(src='@/assets/curso/temas/81.svg', alt='')
        .row.justify-content-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/82.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Mary will not buy a blue purse."
                    :audio="require('@/assets/audios/tema3/4.wav')"
                    )
            p.mb-0 Mary no comprará una cartera azul.
      .tarjeta.color-acento-contenido--borde.border-2.p-4(titulo="<em>Interrogative sentence</em>" style='background-color: #fff7da; border-color: #3c3fa7 ')
        h4
          span.r-4.fst-italic Interrogative sentence  
        .row.justify-content-center.mb-5
            .col-10: img(src='@/assets/curso/temas/83.svg', alt='')
        .row.justify-content-center.mb-5
          .col-lg-3
            img(src='@/assets/curso/temas/84.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="will  Mary buy a blue purse?"
                    :audio="require('@/assets/audios/tema3/5.wav')"
                    )
            p.mb-0 ¿Comprará Mary una cartera azul?
    p.mb-5(data-aos='fade-right') A continuación, puede escuchar algunos ejemplos que son utilizados en el futuro con “will”
    TabsC.color-acento-botones.mb-5
      .p-4(titulo="Used to predict an event" style='background-color: #fff7da')
        .row.justify-content-center
          .col-lg-3: img(src='@/assets/curso/temas/85.svg', alt='')
          .col-lg-7
            p
              span.r-4.fst-italic Used to predict an event
            p 
              span.fst-italic It is used to predict an event. 
              | / Se utiliza para predecir un evento.
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Bill and Gina will marry next year."
                    :audio="require('@/assets/audios/tema3/6.wav')"
                    )
                p.mb-0 Bill y Gina se casarán el próximo año.
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Next month, they will travel to Mexico."
                    :audio="require('@/assets/audios/tema3/7.wav')"
                    )
                p.mb-0 El próximo mes, ellos viajarán a México.
      .p-4(titulo="It is used to express voluntary actions" style='background-color: #fff7da')
        .row.justify-content-center
          .col-lg-3: img(src='@/assets/curso/temas/86.svg', alt='')
          .col-lg-7
            p
              span.r-4.fst-italic It is used to express voluntary actions
            p 
              span.fst-italic It is used to express voluntary actions. 
              | / Se utiliza para expresar acciones voluntarias.
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I will clean the house this afternoon."
                    :audio="require('@/assets/audios/tema3/8.wav')"
                    )
                p.mb-0 Yo limpiaré la casa en la  tarde.
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I will work all day for you."
                    :audio="require('@/assets/audios/tema3/9.wav')"
                    )
                p.mb-0 Yo trabajaré todo el día por ti.
      .p-4(titulo="It expresses suggestion through “shall" style='background-color: #fff7da')
        .row.justify-content-center
          .col-lg-3: img(src='@/assets/curso/temas/87.svg', alt='')
          .col-lg-7
            p
              span.r-4.fst-italic It expresses suggestion through “shall 
            p 
              span.fst-italic It expresses suggestion through “shall”. 
              | / Expresa sugerencia a través de “shall”.
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I shall take the pills at night."
                    :audio="require('@/assets/audios/tema3/10.wav')"
                    )
                p.mb-0 Yo debo tomar las pastillas por la noche.
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We shall go to the hospital first."
                    :audio="require('@/assets/audios/tema3/11.wav')"
                    )
                p.mb-0 Nosotros iremos al hospital primero.
      .p-4(titulo="It is used to express voluntary actions." style='background-color: #fff7da')
        .row.justify-content-center
          .col-lg-3: img(src='@/assets/curso/temas/88.svg', alt='')
          .col-lg-7
            p
              span.r-4.fst-italic It is used to express voluntary actions.
            p 
              span.fst-italic It expresses orders, requests and promises.
              |  / Expresa órdenes, peticiones y promesas.
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="You will help your sister right now."
                    :audio="require('@/assets/audios/tema3/12.wav')"
                    )
                p.mb-0 Tú ayudarás a tu hermana ahora mismo. 
              .col-lg-6
                TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I will talk with your teacher next Friday."
                    :audio="require('@/assets/audios/tema3/13.wav')"
                    )
                p.mb-0 Hablaré con tu maestra el próximo viernes. 
    p.text-center.mb-5 Escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema:
    Dialogo.color-secundario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completar conversación
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
    Separador
    #t_3_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.2   <em>Use of “be going to”.</em> / (Uso de “be going to”)
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .contenedor-traductor.mb-5
            .contenedor-traductor__eng
              p.fst-italic The structure “be going to” is used when you are very sure of the fact that it is going to happen, to express a plan or some intentions for the future. Likewise, to express a prediction about the future based on evidence.
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
              p La estructura <em>“be going to”</em> se utiliza cuando se está muy seguro de lo que va a suceder, para expresar un plan o unas intenciones para el futuro. Asimismo, para expresar una predicción sobre el futuro con base en evidencia.

            a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
          p.text-center 
            span.fst-italic In this case, the structure to use is the following: /
            | / En este caso, la estructura a utilizar es la siguiente:
          .row.justify-content-center.mb-5
            .col-10: img(src='@/assets/curso/temas/89.svg', alt='').mb-3
            .col-lg-8 
              .row.justify-content-center
                .col-lg-8
                  .tarjeta-avatar-b.mb-5
                    .tarjeta-avatar-b__img
                      img(src='@/assets/curso/temas/78.svg' alt='AvatarTop')
                    .tarjeta(style='background-color: #fff7da')
                      .p-4
                        p.mb-0 
                          span.r-1.fst-italic Alice 
                          spna.r-2.fst-italic is 
                          span.f-3.p-1.fw-bold.rounded-3 goin to 
                          span.r-2.fst-italic &nbsp read your letter.
                          br
                          | Alice va a leer tu carta.
        .col-lg-4.col-6
          img(src='@/assets/curso/temas/90.png', alt='')
    p.fst-italic
      span.r-4.fw-normal Listen to the audio with some examples to use the future with “be going to”.
    p.text-center
      span.fst-italic.fw-bold It is used to predict an event  
      | / Se utiliza para predecir un evento:
    .row.justify-content-center.mb-5
      .col-lg-6
        .tarjeta.p-5(style='background-color: #ffe891').h-100
          img(src='@/assets/curso/temas/91.svg', alt='' style='width: 352px').m-auto.mb-3
          p.text-center.fw-bold For example: / Por ejemplo:
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="James is going to study with you <span class='b-1'>/ James va a estudiar contigo. </span> "
            :audio="require('@/assets/audios/tema3/14.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Carol is going to cook for all of us <span class='b-1'>/ Carol va a cocinar para todos nosotros. </span> "
            :audio="require('@/assets/audios/tema3/15.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Lia and Peter are going to travel to Spain <span class='b-1'> / Lía y Peter van a viajar a España.</span> "
            :audio="require('@/assets/audios/tema3/16.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Samantha is going to sing with the church choir  <span class='b-1'>Samantha va a cantar con el coro de la iglesia. </span> "
            :audio="require('@/assets/audios/tema3/17.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="It’s going to rain <span class='b-1'>/ Va a llover. </span> "
            :audio="require('@/assets/audios/tema3/18.wav')"
            )
      .col-lg-6
        .tarjeta.p-5(style='background-color: #ffe891')
          img(src='@/assets/curso/temas/92.svg', alt='' style='width: 352px').m-auto.mb-3
          p.text-center.fw-bold For example: / Por ejemplo:
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Maluma is going to perform at a concert in Colombia <span class='b-1'>/ Maluma va a presentarse en un concierto en Colombia.</span> "
            :audio="require('@/assets/audios/tema3/19.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Felix is going to work very hard to earn a lot of money <span class='b-1'>/ Félix va a trabajar muy duro para ganar mucho dinero </span> "
            :audio="require('@/assets/audios/tema3/20.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="They are going to visit their parents on weekend <span class='b-1'>/ Ellos van a visitar a sus padres el fin de semana.</span> "
            :audio="require('@/assets/audios/tema3/21.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Cory is going to write a book to publish next year <span class='b-1'> / Cory va a escribir un libro para publicarlo el próximo año.</span> "
            :audio="require('@/assets/audios/tema3/22.wav')"
            )
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="You are going to participate in the contest <span class='b-1'> / Ustedes van a participar en el concurso.</span> "
            :audio="require('@/assets/audios/tema3/23.wav')"
            )
    Separador
    #t_3_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.3   <em>Formulation of plans</em> / (Formulación de planes)
    p.mb-5
      span.r-2.fst-italic.fw-normal When plans are formulated, it is generally stated what is wanted as well as the period of time or date on which it is expected to perform or fulfill that purpose.
      br
      | / Cuando se formulan planes, generalmente, se señala aquello que se quiere, así como el periodo de tiempo o  fecha en que se espera realizar o cumplir con ese propósito.
    p.text-center
      span.r-1.fst-italic For example 
      | / Por ejemplo: 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-3")
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/93.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/24.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Robert is going to study medicine next year.
          p.text-center Robert va a estudiar medicina el próximo año.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/94.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/25.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  We are going to sell handicrafts on weekends.
          p.text-center Nosotros vamos a vender artesanías los fines de semana.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/95.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/26.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Next week, I’m going to present my resumé to that company.
          p.text-center La próxima semana, voy a introducir mi currículo a esa empresa.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/96.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/27.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Today, we’re going to buy sausages to make hot dogs for dinner.
          p.text-center Hoy, vamos a comprar salchichas para hacer perros calientes para la cena.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/97.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/28.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Nelly is going to sell the house after getting divorced.
          p.text-center Nelly va a vender la casa después de divorciarse.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/98.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/29.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Corey is going to write a book to publish next year.
          p.text-center  Corey va a escribir un libro para publicarlo el próximo año.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/99.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/30.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Armando is going to register a company in the mayor’s office next Monday.
          p.text-center  Armando va a registrar una empresa en la alcaldía el próximo lunes.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/100.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/31.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  In the afternoon, we’re going to visit Charlie at the clinic.
          p.text-center En la tarde, vamos a visitar a Charlie en la clínica.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/101.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/32.wav')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Sara is going to perform at the theater of fine arts on September 10.
          p.text-center Sara se va a presentar en el teatro de bellas artes el 10 de septiembre.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/102.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema3/33.wav')").m-auto.mb-2
            p.text-center 
              span.r-1.fst-italic The team is going to compete in the next Olympics.
          p.text-center El equipo va a competir en las próximas Olimpiadas.
    Separador
    #t_3_4.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.4   <em>Making predictions</em> / (Realización de predicciones)
    p.mb-5
      span.r-2.fst-italic.fw-normal When making predictions, assumptions or deductions about a future event, the simple future is used	with the auxiliary “will”.
      br
      | Cuando se hacen predicciones, suposiciones o deducciones sobre un hecho futuro, se emplea el futuro simple con el auxiliar <em>“will”</em>.
    .tarjeta.margin-n.rounded-0.mb-3.p-5(style='background-color: #fff0b5')
      .row.justify-content-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/103.svg' alt='AvatarTop')
        .col-lg-9
          .tarjeta.bg-white.p-5
            SlyderA(tipo='b')
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-9
                  p
                    span.r-2.fst-italic Examples making predictions 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto=" Anna will win the lottery jackpot <span class='b-1'>/ Anna ganará el premio mayor de la lotería.</span> "
                    :audio="require('@/assets/audios/tema3/34.wav')"
                    ) 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We will be rich very soon <span class='b-1'>/ Nosotros seremos ricos muy pronto. </span> "
                    :audio="require('@/assets/audios/tema3/35.wav')"
                    ) 

                .col-lg-3
                  img(src='@/assets/curso/temas/104.svg' alt='AvatarTop')
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-9
                  p
                    span.r-2.fst-italic Examples making predictions 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="  Roberta will have her baby in two weeks <span class='b-1'> / Roberta tendrá a su bebé en dos semanas.</span> "
                    :audio="require('@/assets/audios/tema3/36.wav')"
                    ) 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto=" George will marry Mary in a few months <span class='b-1'>/ George se casará con Mary en unos meses. </span> "
                    :audio="require('@/assets/audios/tema3/37.wav')"
                    ) 

                .col-lg-3
                  img(src='@/assets/curso/temas/105.svg' alt='AvatarTop')
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-9
                  p
                    span.r-2.fst-italic Examples making predictions 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We are going to sell handicrafts on weekends<span class='b-1'> / Nosotros vamos a vender artesanías los fines de semana.</span> "
                    :audio="require('@/assets/audios/tema3/38.wav')"
                    ) 
                .col-lg-3
                  img(src='@/assets/curso/temas/106.svg' alt='AvatarTop')
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-9
                  p
                    span.r-2.fst-italic Examples making predictions 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="You will not sell much with such high prices <span class='b-1'>/ No venderás mucho con precios tan altos.</span> "
                    :audio="require('@/assets/audios/tema3/39.wav')"
                    ) 
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="This child will grow up healthy and strong <span class='b-1'> / Este niño crecerá sano y fuerte.</span> "
                    :audio="require('@/assets/audios/tema3/40.wav')"
                    ) 

                .col-lg-3
                  img(src='@/assets/curso/temas/107.svg' alt='AvatarTop')
    .row.justify-content-center.mb-5
      .col-lg-5
        .tarjeta.color-acento-contenido.p-4.d-flex.align-items-center.justify-content-center
          img(src='@/assets/curso/temas/108.svg' alt='AvatarTop' style='width: 188px').me-3
          .texto
            h4 
              span.r-4.fst-italic You will learn English quickly!...That’s my prediction to you!
            p ¡Tú aprenderás inglés rápidamente!...¡Esa es mi predicción para ti!
    p.text-center.mb-5 A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema.
    Dialogo.color-secundario(:dialogo="dialogo2")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Completar la conversación
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
              
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    ocultarEsp: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Gina',
          img: require('@/assets/curso/temas/Gina.svg'),
        },
        {
          nombre: 'Billy',
          img: require('@/assets/curso/temas/Billy.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Gina',
          textoIng: 'Hi, Billy. How is it going?',
          textoEsp: 'Yo necesito el libro de biologia y las diapositivas.',
          audio: require('@/assets/audios/a2/1.wav'),
        },
        {
          personaje: 'Billy',
          textoIng: 'All fine, thank you Gina. And what about you?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/2.mp3'),
        },
        {
          personaje: 'Gina',
          textoIng:
            'Well, I’m so excited! Tomorrow ***  start my vacation trip!',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/audios/a2/3.wav'),
          palabra: 'I will',
        },
        {
          personaje: 'Billy',
          textoIng: 'Excellent! You deserve it!... And *** you go?',
          textoEsp: '',
          audio: require('@/assets/audios/a2/4.mp3'),
          palabra: 'where will',
        },
        {
          personaje: 'Gina',
          textoIng:
            'First, *** Mexico. Then I will visit my friend Frida. And next week, I will take a cruise to the Caribbean islands.',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/audios/a2/5.wav'),
          palabra: 'I will go to',
        },
        {
          personaje: 'Billy',
          textoIng: 'Marvelous! *** an unforgettable experience!',
          textoEsp: '',
          audio: require('@/assets/audios/a2/6.mp3'),
          palabra: 'It will be',
        },
      ],
    },
    dialogo2: {
      personajes: [
        {
          nombre: 'Father',
          img: require('@/assets/curso/temas/Father.svg'),
        },
        {
          nombre: 'Daugther',
          img: require('@/assets/curso/temas/Daugther.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Father',
          textoIng: 'Honey, tell me, what *** be when you grow up?',
          textoEsp: '',
          audio: require('@/assets/audios/a1/1.mp3'),
          palabra: 'are you going to',
        },
        {
          personaje: 'Daugther',
          textoIng: 'Oh, daddy, I’m not sure yet.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/2.wav'),
        },
        {
          personaje: 'Father',
          textoIng: 'But you *** to study something.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/3.mp3'),
          palabra: 'are going',
        },
        {
          personaje: 'Daugther',
          textoIng:
            'Well, *** be a dancer, singer, psychologist, entertainer, cartoonist, nurse, educator, writer and actress.',
          textoEsp: '',
          audio: require('@/assets/audios/a1/4.wav'),
          palabra: 'I’m going to',
        },
        {
          personaje: 'Father',
          textoIng: 'Oh! Okay, *** going to be a teacher!',
          textoEsp: '',
          audio: require('@/assets/audios/a1/5.mp3'),
          palabra: 'you are',
        },
        {
          personaje: 'Daugther',
          textoIng: 'That’s amazing!',
          textoEsp: '',
          audio: require('@/assets/audios/a1/6.wav'),
        },
      ],
    },
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
.tabs-c
  background-color: #fff7da !important
</style>
