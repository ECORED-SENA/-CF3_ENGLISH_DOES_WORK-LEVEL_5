<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 <em>Holidays and weather</em> (Las vacaciones y el clima)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .contenedor-traductor
          .contenedor-traductor__eng
            p.fst-italic When a topic that is so enjoyable for everyone comes up, it is important to handle the appropriate vocabulary. In this case, it is necessary to specify the use of “holidays” since it does not have a single meaning, but can vary according to the context in which it is used.
              br
              br
              |The word “holiday” or “holidays” in British English is used as a person’s vacation. And the expression bank holiday is used to indicate a national holiday. In American English, “holiday” is used to indicate a national holiday (such as Independence Day) and “vacation” to refer to a vacation or free time.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Cuando surge un tema tan agradable para todos, es importante manejar el vocabulario adecuado. En este caso, es necesario precisar el uso de "holidays", ya que no tiene un único significado, sino que puede variar según el contexto en el que se utilice.
              br
              br
              |La palabra <em>"holiday"</em> o <em>"holidays"</em> en inglés británico se utiliza para referirse a las vacaciones de una persona. Y la expresión <em>"bank holiday"</em> se utiliza para indicar una fiesta nacional. En inglés americano, <em>"holiday"</em> se utiliza para indicar una fiesta nacional (como el Día de la Independencia) y "vacation" para referirse a unas vacaciones o tiempo libre.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
    p.my-5(data-aos='fade-right') A continuación, puede observar algunos ejemplos para identificar las palabras “holiday” o “holidays” utilizadas en inglés británico y americano:
    .row.justify-content-center.mb-5
      .col-lg-6
        .card-flag
          .card-flag__flag
            .tarjeta.color-acento-contenido.p-5.mb-5
              img(src='@/assets/curso/temas/2.svg', alt=' ' style='width: 67px').mb-4.m-auto
              p.fst-italic.mb-0.fw-bold  “Holidays” in British English
          .card-flag__information.p-4.rounded-3
            .row.justify-content-center.mt-5
              .col-lg-3
                img.d-none.d-lg-block(src='@/assets/curso/temas/3.svg', alt='')
              .col-lg-9
                p
                  span.r-1.fst-italic For example:
                  br
                  br

                  span.r-1.fst-italic Joe goes on holiday. 
                  | / Joe va de vacaciones.
                  br
                  span.r-1.fst-italic You have holidays in August. 
                  | / Tú tienes vacaciones en Agosto.
                  br
                  span.r-1.fst-italic Today is a bank holiday in this country. 
                  | / Hoy es día feriado en este país.
                  br
                  br
                  |En inglés británico, <b><em>“holiday”</em></b> se usa como vacaciones de las personas. Y la expresión día festivo se utiliza para indicar un día de fiesta nacional.
      .col-lg-6
        .card-flag
          .card-flag__flag
            .tarjeta.color-acento-contenido.p-5.mb-5
              img(src='@/assets/curso/temas/4.svg', alt=' ' style='width: 67px').mb-4.m-auto
              p.fst-italic.mb-0.fw-bold  “Holidays” in British English
          .card-flag__information.p-4.rounded-3
            .row.justify-content-center.mt-5
              .col-lg-3
                img.d-none.d-lg-block(src='@/assets/curso/temas/5.svg', alt='')
              .col-lg-9
                p
                  span.r-1.fst-italic For example:
                  br
                  br

                  span.r-1.fst-italic July 4th is a national holiday in The United States 
                  |  / El 4 de Julio es un día de fiesta nacional en los Estados Unidos.

                  br
                  span.r-1.fst-italic Mary has fifteen days of vacation
                  |  / Mary tiene quince días de vacaciones.
                  br
                  br
                  |En el inglés americano, se usa <b><em>“holiday”</em></b> para indicar un día festivo nacional (como el Día de la Independencia) y “vacation” para hacer referencia a un tiempo vacacional. 
    p 
      span.r-2.fw-normal.fst-italic After having made the previous specifications, vocabulary is presented that can be used when you want to talk about vacations, either individually or when going with family or a group of friends. Listen to the audio. 
      | / Luego de haber hecho las especificaciones anteriores, se presenta vocabulario que puede utilizarse cuando se quiere hablar acerca de las vacaciones, sea en forma individual o cuando se va con la familia o en grupo de amigos. Escuche el audio.
    .tarjeta.rounded-0.margin-n.color-acento-contenido.p-5.mb-5 
      .bg-slide__1.p-5.rounded-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/6.svg', alt='')
          .col-lg-9
            .tarjeta.bg-white.p-5
              SlyderA(tipo='b')
                .row
                  p.mb-5.text-center
                    span.r-1.fst-italic Planning holidays or vacation / 
                    | Planeando las vacaciones
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Business trip</b></em> / Viaje de negocios 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Jonas goes on a <span class='r-4'>business trip.</span>"
                      :audio="require('@/assets/audios/tema1/1.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Car rental (USA)</b></em> / Alquiler de autos 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="She wants to <span class='r-4'>rent a car.</span>"
                      :audio="require('@/assets/audios/tema1/2.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Car hire (GB)</b></em> / Alquiler de autos
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="She wants to <span class='r-4'>hire a car.</span>"
                      :audio="require('@/assets/audios/tema1/3.mp3')"
                      )
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Cruise</b></em> / Crucero
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Nina goes to Hawaii on a <span class='r-4'>cruise.</span>"
                      :audio="require('@/assets/audios/tema1/4.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Excursion - outing</b></em> / Excursión 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Paul goes to an <span class='r-4'>excursion.</span>"
                      :audio="require('@/assets/audios/tema1/5.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Motor-home</b></em> / Casa rodante
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Mike wants a <span class='r-4'>motor-home</span> to travel with the family."
                      :audio="require('@/assets/audios/tema1/6.mp3')"
                      )
                .row
                  p.mb-5.text-center
                    span.r-1.fst-italic Planning holidays or vacation / 
                    | Planeando las vacaciones
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Journey - trip</b></em> / Viaje
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="This is a long <span class='r-4'> journey.</span>"
                      :audio="require('@/assets/audios/tema1/7.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Pleasure trip </b></em> / Viaje de placer 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="She goes on a <span class='r-4'>pleasure trip.</span>"
                      :audio="require('@/assets/audios/tema1/8.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Return</b></em> / Volver - devolver
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="My father  <span class='r-4'>returns </span> next week. "
                      :audio="require('@/assets/audios/tema1/9.mp3')"
                      )
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go camping</b></em>  / Ir de campamento
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="The kids want  <span class='r-4'>to go camping.</span> "
                      :audio="require('@/assets/audios/tema1/10.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go abroad </b></em> / Irse al extranjero 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="He prefers <span class='r-4'>to go abroad. </span>"
                      :audio="require('@/assets/audios/tema1/11.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go climbing </b></em> / Ir a escalar
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Felix likes <span class='r-4'> to go climbing .</span>"
                      :audio="require('@/assets/audios/tema1/12.mp3')"
                      )
                .row
                  p.mb-5.text-center
                    span.r-1.fst-italic Planning holidays or vacation / 
                    | Planeando las vacaciones
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go on vacation  </b></em> / Irse de vacaciones 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="They  <span class='r-4'>go on vacation. </span>"
                      :audio="require('@/assets/audios/tema1/13.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go to the beach </b></em> / Ir a la playa 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Frank goes  <span class='r-4'>to the beach </span> on weekends."
                      :audio="require('@/assets/audios/tema1/14.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To go sightseeing </b></em> / Visitar lugares de interés
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Vicky likes  <span class='r-4'>to go sightseeing.</span>"
                      :audio="require('@/assets/audios/tema1/15.mp3')"
                      )
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>To plan </b></em> / Organizar
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Jean is planning vacations."
                      :audio="require('@/assets/audios/tema1/16.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Tourist office </b></em> / Oficina de turismo
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Tomorrow she will go to the <span class='r-4'>tourist office. </span>"
                      :audio="require('@/assets/audios/tema1/17.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Travel agent </b></em> / Agente de viajes
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Sean is my favorite <span class='r-4'> travel agent. </span>"
                      :audio="require('@/assets/audios/tema1/18.mp3')"
                      )


                .row
                  p.mb-5.text-center
                    span.r-1.fst-italic Planning holidays or vacation / 
                    | Planeando las vacaciones
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Train</b></em> / Tren 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Sue would like to travel by <span class='r-4'>train. </span>"
                      :audio="require('@/assets/audios/tema1/19.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Travel bag </b></em> / Bolsa de viaje 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Candy carries her <span class='r-4'> travel bag. </span>"
                      :audio="require('@/assets/audios/tema1/20.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Travel insurance </b></em> / Seguro de viajes
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="It is necessary to have <span class='r-4'> travel insurance. </span>"
                      :audio="require('@/assets/audios/tema1/21.mp3')"
                      )
                  .col-lg-6
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Voyage </b></em> / Viaje (en barco)
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Mr. Smith makes a long <span class='r-4'>voyage.</span>"
                      :audio="require('@/assets/audios/tema1/22.mp3')"
                      )
                    .contenedor-audio.mb-3
                      p.text-center <em><b>Visa  </b></em> / Visado 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Charlie has his <span class='r-4'> visa</span> up to day."
                      :audio="require('@/assets/audios/tema1/23.mp3')"
                      )
    p.fst-italic.mb-5 Below, there are useful vocabulary and expressions when you want to talk about the airport, either individually or when going with family or a group of friends. Listen to audio. 
    p.fw-bold.mb-5.text-center Vocabulario de revisión de pasajeros en el aeropuerto
    p.mb-4.text-center
      span.r-1.fst-italic.fw-bold At the airport / 
      | En el aeropuerto
    SlyderF.mb-5(columnas="col-lg-6 col-xl-3")
      .tarjeta.color-primario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/7.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Airline</b>
            br
            | Compañía aérea
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/24.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  This 
                span.r-2 airline 
                | is very reliable.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/8.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Boarding gate</b>
            br
            |  Puerta de embarque
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/25.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Let’s go to 
                span.r-2 boarding gate 
                | N° 25.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/9.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Boarding pass</b>
            br
            |  Ticket/Boleto de embarque
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/26.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic You must have the
                span.r-2  boarding pass  
                | in hand.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/10.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Carry-on bag</b>
            br
            |  Maleta de mano
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/27.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Don’t forget your 
                span.r-2 carry-on bag. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/11.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Check-in desk</b>
            br
            |  Mostrador de chequeo/registro
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/28.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic That’s the  
                span.r-2 check-in desk. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Delay</b>
            br
            |  Retraso
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/29.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The board marks a delay in flight 504.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Departure</b>
            br
            |  Salida 
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/30.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The departure of the flight is in ten minutes.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Destination</b>
            br
            |  Destino
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/31.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic We go to the same destination.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Flight number</b>
            br
            |  Número de vuelo
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/32.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic What is our flight number?
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Luggage</b>
            br
            |  Equipaje
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/33.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Do you have a lot of luggage?
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Passport</b>
            br
            | Pasaporte
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/34.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Let me see your passport, please.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/18.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Arrival time</b>
            br
            | Hora de llegada
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/35.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The arrival time of the flight is at 6 o’clock.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/19.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Baggage allowance</b>
            br
            |  Equipaje permitido
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/36.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The brochure indicates the amount of baggage allowed.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/20.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Excess baggage</b>
            br
            |  Exceso de equipaje
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/37.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic There is excess baggage.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/21.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Flight</b>
            br
            | Vuelo 
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/38.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic It is a smooth flight.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/22.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Passenger</b>
            br
            |  Pasajero
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/39.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic There is a passenger at the ticket office.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/23.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Waiting list</b>
            br
            | Lista de espera
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/40.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Maurice is on the waiting list.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/24.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Waiting room</b>
            br
            | Sala de espera
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.justify-content-center.flex-column
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/41.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic They are in the waiting room.
    p.text-center.mb-5
      span.r-2.fw-normal.fst-italic Here are some expressions used during a family’s stay at the hotel: 
      | / A continuación, estudie algunas expresiones utilizadas durante la estadía de una familia en el hotel:
    .tarjeta.rounded-0.margin-n.color-acento-contenido.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta.bg-white.p-4
            SlyderA(tipo='b')
              .row
                p.text-center
                  span.r-2.fst-italic The family enjoying in the hotel
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3(src='@/assets/curso/temas/26.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="They asked about accomodation  / <span class='b-1'>Ellos preguntaron por el alojamiento.</span>"
                    :audio="require('@/assets/audios/tema1/42.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="In high season, there are too many people in the hotel / <span class='b-1'>En temporada alta, hay demasiada gente en el hotel.</span>"
                    :audio="require('@/assets/audios/tema1/43.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Do you prefer the hostal? / <span class='b-1'>¿Tú prefieres el hostal?</span>"
                    :audio="require('@/assets/audios/tema1/44.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="This is the best hotel in the city / <span class='b-1'>Este es el mejor hotel en la ciudad.</span>"
                    :audio="require('@/assets/audios/tema1/45.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Let’s ask at the Information office / <span class='b-1'>Vamos a preguntar en la oficina de información.</span>"
                    :audio="require('@/assets/audios/tema1/46.mp3')"
                    )
              .row
                p.text-center
                  span.r-2.fst-italic The family enjoying in the hotel
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3(src='@/assets/curso/temas/28.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="In the inn, they are very friendly with tourists / <span class='b-1'>En la posada, son muy amables con los turistas.</span>"
                    :audio="require('@/assets/audios/tema1/47.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="This hotel is in low season / <span class='b-1'>Este hotel está en temporada baja.</span>"
                    :audio="require('@/assets/audios/tema1/48.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="The bellboy carries our luggage / <span class='b-1'>El botones lleva nuestro equipaje.</span>"
                    :audio="require('@/assets/audios/tema1/49.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="My luggage is also carried in that luggage trolley / <span class='b-1'>Mi equipaje también se lleva en ese carrito de equipajes.</span>"
                    :audio="require('@/assets/audios/tema1/50.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="This is a very luxury hotel / <span class='b-1'>Este es un hotel muy lujoso.</span>"
                    :audio="require('@/assets/audios/tema1/51.mp3')"
                    )
              .row
                p.text-center
                  span.r-2.fst-italic The family enjoying in the hotel
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3(src='@/assets/curso/temas/29.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We need a map for the route / <span class='b-1'>Nosotros necesitamos un mapa para el recorrido.</span>"
                    :audio="require('@/assets/audios/tema1/52.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="I want to order food to the room 501 / <span class='b-1'>Quiero pedir comida para la habitación 501.</span>"
                    :audio="require('@/assets/audios/tema1/53.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Sorry, there is no reservation in your name / <span class='b-1'>Disculpe, no hay ninguna reservación a su nombre.</span>"
                    :audio="require('@/assets/audios/tema1/54.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We like to go to that resort / <span class='b-1'>A nosotros nos gusta ir a ese lugar de vacaciones.</span>"
                    :audio="require('@/assets/audios/tema1/55.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="This is the best season to vacation / <span class='b-1'>Esta es la mejor temporada para vacacionar.</span>"
                    :audio="require('@/assets/audios/tema1/56.mp3')"
                    )
              .row
                p.text-center
                  span.r-2.fst-italic The family enjoying in the hotel
                .col-lg-4.mb-lg-0.mb-3: img.rounded-3(src='@/assets/curso/temas/30.jpg', alt='')
                .col-lg-8
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="She booked a single room / <span class='b-1'>Ella reservó una habitación individual.</span>"
                    :audio="require('@/assets/audios/tema1/57.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We hope your stay is pleasant / <span class='b-1'>Esperamos que su estancia sea placentera.</span>"
                    :audio="require('@/assets/audios/tema1/58.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Can you open my suitcase, please? / <span class='b-1'>¿Puedes abrir mi maleta, por favor?</span>"
                    :audio="require('@/assets/audios/tema1/59.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Please, tip the bellboy / <span class='b-1'>Por favor, dale una propina al botones.</span>"
                    :audio="require('@/assets/audios/tema1/60.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="We must confirm the reservation of the room / <span class='b-1'>Debemos confirmar la reservación de la habitación.</span>"
                    :audio="require('@/assets/audios/tema1/61.mp3')"
                    )
                  TarjetaAudio.color-primario.bg-white.mb-3(
                    texto="Ok. I will hold your reservation for two days / <span class='b-1'>Bien. Le mantendré la reservación por dos días.</span>"
                    :audio="require('@/assets/audios/tema1/62.mp3')"
                    )

        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/27.svg', alt='')
    p
      span.r-2.fst-italic.fw-normal Below, there are some useful vocabulary and expressions when you want to talk to a tour guide, either individually or when going with family or a group of friends. Listen to the audio. 
      | / A continuación, se presentan un vocabulario y unas expresiones útiles cuando se quiere hablar con un guía turístico, sea en forma individual o cuando se va con la familia o en grupo de amigos. Escuche el audio.

    .tarjeta.rounded-0.margin-n.color-secundario.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/31.svg', alt='')
        .col-lg-9
          p.text-center.fw-bold Vocabulario guía turístico
          .tarjeta.bg-white.p-4
            SlyderA(tipo='b')
              .row
                p.text-center
                  span.r-2.fst-italic Enjoying  the holidays / vacation 
                  | / Disfrutando las vacaciones
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Double room </b></em> / Habitación doble
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="They booked a double <span class='r-4'>  room.</span>"
                      :audio="require('@/assets/audios/tema1/63.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Guide; tour guide </b></em> / Guía (guía turístico) 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="The <span class='r-4'>guide </span>  took us on a <span class='r-4'> tour </span> of the city."
                      :audio="require('@/assets/audios/tema1/64.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Guidebook </b></em> / Guía (libro)
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="We have a city  <span class='r-4'>guidebook. </span>"
                      :audio="require('@/assets/audios/tema1/65.mp3')"
                      )
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Sunblock  </b></em> / Filtro solar
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="You should put on a lot of sunscreen before lying in the sun."
                      :audio="require('@/assets/audios/tema1/66.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Sunburn </b></em> /Quemadura de sol 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="You should avoid <span class='r-4'>sunburn.</span>"
                      :audio="require('@/assets/audios/tema1/67.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Sunglasses </b></em> / Gafas de sol
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="I love these  <span class='r-4'> sunglasses.</span>"
                      :audio="require('@/assets/audios/tema1/68.mp3')"
                      )
                .col-lg-12.mt-4
                  img(src='@/assets/curso/temas/32.svg', alt='')
              .row
                p.text-center
                  span.r-2.fst-italic Vocabulario guía turístico
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Ticket </b></em> / Billete
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Let’s buy the  <span class='r-4'>tickets </span> for the train."
                      :audio="require('@/assets/audios/tema1/69.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Ticket office </b></em> / Taquilla
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="There is the  <span class='r-4'> ticket office.</span>"
                      :audio="require('@/assets/audios/tema1/70.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Time-sharing </b></em> / Tiempo compartido 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Those employees have <span class='r-4'> timesharing </span> at the box office."
                      :audio="require('@/assets/audios/tema1/71.mp3')"
                      )
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b>To drive </b></em>  / Conducir
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="I don’t like  <span class='r-4'>to drive </span> in this city."
                      :audio="require('@/assets/audios/tema1/72.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>To have a good time </b></em> / Pasarlo bien 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Let’s have a  <span class='r-4'> good time. </span>"
                      :audio="require('@/assets/audios/tema1/73.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>To rent a car </b></em> / Rentar un carro
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="We need  <span class='r-4'>to rent a car</span>  to tour the city."
                      :audio="require('@/assets/audios/tema1/74.mp3')"
                      )
                .col-lg-12.mt-4
                  img(src='@/assets/curso/temas/33.svg', alt='')
              .row
                p.text-center
                  span.r-2.fst-italic Vocabulario guía turístico
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b> To sunbathe </b></em>  / Tomar sol 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="You need to  <span class='r-4'> sunbathe.</span>"
                      :audio="require('@/assets/audios/tema1/75.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>To take a photograph </b></em> / Tomar una fotografía
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="Could you  <span class='r-4'>take a photograph  </span> of us, please?"
                      :audio="require('@/assets/audios/tema1/76.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Tour </b></em>  / Recorrido
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="I don’t like this  <span class='r-4'> tour. </span>"
                      :audio="require('@/assets/audios/tema1/77.mp3')"
                      )
                .col-lg-6
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Tourism </b></em> / Turismo 
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="I want to do adventure  <span class='r-4'>  tourism.</span>"
                      :audio="require('@/assets/audios/tema1/78.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Tourist </b></em>  / Turista
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="A tourist didn’t return to the hotel. "
                      :audio="require('@/assets/audios/tema1/79.mp3')"
                      )
                  .contenedor-audio.mb-3
                      p.text-center <em><b>Vacation  </b></em> / Vacaciones
                      TarjetaAudio.color-primario.bg-white.mb-3(
                      texto="My friends and I are going on  <span class='r-4'>vacation </span> to Hawaii."
                      :audio="require('@/assets/audios/tema1/80.mp3')"
                      )
                .col-lg-12.mt-4
                  img(src='@/assets/curso/temas/34.svg', alt='')
    p
      span.r-2.fst-italic.fw-normal Below, there are some useful vocabulary and expressions when you want to talk about the weather, either individually or when going with family or a group of friends. Listen to the audio. 
      | / A continuación, se presentan vocabulario y expresiones útiles cuando se quiere hablar acerca del clima, sea en forma individual o cuando se va con la familia o en grupo de amigos. Escuche el audio.
    p.fw-bold.mb-5.text-center Vocabulario y expresiones del clima
    p.mb-4.text-center
      span.r-1.fst-italic.fw-bold Time expressions - past. / 
      | (Expresiones de tiempo - pasado)
    SlyderF.mb-5(columnas="col-lg-6 col-xl-3")
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/35.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Cloudy </b> 
            br
            | Nublado
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/81.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  I don’t get out because this is a 
                span.r-2 cloudy 
                | day.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/36.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>It’s raining cats and dogs </b>
            br
            | Llueve a cántaros
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/82.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Today 
                span.r-2  it’s raining cats and dogs.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/37.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Fog</b>
            br
            | Niebla
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/83.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The 
                span.r-2  fog 
                | approaches the town.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/38.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Foggy </b>
            br
            | Neblinoso
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/84.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  The atmosphere is
                span.r-2  foggy.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/39.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Hot day </b>
            br
            | Día caluroso
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/85.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic This is a   
                span.r-2 hot day. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/40.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Wind </b>
            br
            | Viento
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/86.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In this place, the wind blows all day. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/41.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Showery day </b>
            br
            | Día lluvioso
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/87.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Looks like this will be a showery day.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/42.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Humid day </b>
            br
            | Día húmedo
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/88.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic Karla doesn’t like humid days.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/43.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Icy day</b>
            br
            | Día helado
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/89.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  The child is warm because it is an icy day.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/44.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Breeze</b>
            br
            | Brisa
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/90.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In this window you can feel a gentle breeze.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/45.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Strong wind </b>
            br
            | Viento fuerte
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/91.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic A strong wind is blowing on the mountain. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/46.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Gale </b>
            br
            | Vendaval
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/92.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic After the gale came a great calm in the town. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/47.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Hurricane </b>
            br
            | Huracán
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/93.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic The hurricane hit the island. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/48.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Seasons of the year </b>
            br
            | Estaciones del año
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/94.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In this country there are the four seasons of the year.  
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/49.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Spring </b>
            br
            | Primavera
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/95.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic  In spring, the plants bloom.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/50.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Summer </b>
            br
            | Verano
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/96.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In summer, it is very hot. 
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Winter </b>
            br
            | Invierno
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/97.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In winter, a lot of snow falls in this city.
      .tarjeta.color-secundario.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/52.svg' alt='AvatarTop')
        .tarjeta.bg-white.p-2
          p.text-center
            span.fst-italic <b>Autumn / Fall </b>
            br
            | Otoño 
            
          .tarjeta.color-primario--borde.border-1.p-3.d-flex.flex-column.justify-content-center
            Audio.color-primario.d-block(:audio="require('@/assets/audios/tema1/98.mp3')").m-auto.mb-2
            p.text-center
              span.r-1.fst-italic In autumn, you can see the leaves falling from the trees.
    .row.justify-content-center.mb-5
      .col-lg-9
        .bg-slide__2.d-flex.align-items-center.justify-content-end.p-5
          .tarjeta.color-acento-contenido.p-4
            p.text-center.mb-0 <b><em>Let’s enjoy the holidays!</em></b> 
              br
              |¡Disfrutemos las vacaciones!
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1 <em>Time expressions - past</em>  (Expresiones de tiempo - pasado)
    .tarjeta.rounded-0.margin-n.p-5(style='background-color: #ffbfc1')
      .row.justify-content-center.mb-3
        .col-lg-5
          .contenedor-traductor
            .contenedor-traductor__eng
              p.fst-italic These time expressions are used to express events or situations that have occurred in the past, it can be yesterday, a week before, or a month before. In general, they allow sequencing the events that have occurred. Therefore, these expressions are going to be used when commenting or talking about events from the past and for this reason the verbs are being used in the simple past tense.
                br
                br
                |Below, there are some expressions of time to use when talking about something that has already happened and ended. It means it happened in the past. Listen to the audio.
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
              p 
                span.r-5 Estas expresiones de tiempo se utilizan para expresar hechos o situaciones que han ocurrido en el pasado, puede ser ayer, una semana antes, un mes antes. En general, permiten secuenciar los eventos que han ocurrido. Por lo tanto, estas expresiones se van a utilizar cuando se está comentando o hablando de eventos del pasado y por ello se están utilizando los verbos en tiempo pasado simple.
                  br
                  br
                  |Seguidamente, se presentan algunas expresiones de tiempo para utilizar cuando se habla de algo que ya ocurrió y finalizó. Ello significa que sucedió en el pasado. Escuche el audio.
            a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2') Ver traducción
        .col-lg-7
          .tarjeta.color-secundario.p-5
            img(src='@/assets/curso/temas/53.svg' alt='AvatarTop').mb-4
            p.text-center.text-white <em><b>Time expressions - past.</b></em> / (Expresiones de tiempo - pasado)
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-10
                .tarjeta.bg-white.p-4
                  SlyderE(indicadores="derecha")
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>A minute ago  </b></em> / Hace un minuto
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="I arrived  <span class='r-4'>a minute ago.</span>"
                          :audio="require('@/assets/audios/tema1/99.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>A week ago  </b></em> / Hace una semana
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Mark finished his training <span class='r-4'>a week ago. </span>"
                          :audio="require('@/assets/audios/tema1/100.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Ago </b></em> Atrás
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="She suffered a long time  <span class='r-4'>ago. </span>"
                          :audio="require('@/assets/audios/tema1/101.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>An hour ago  </b></em> / Hace una hora 
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="The conference ended  <span class='r-4'> an hour ago.</span>"
                          :audio="require('@/assets/audios/tema1/102.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Back then </b></em> / En aquel entonces / momento
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="She was his girlfriend <span class='r-4'> back then.</span>"
                          :audio="require('@/assets/audios/tema1/103.mp3')"
                          )
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>In those days </b></em> / En esos días
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Everything was happiness  <span class='r-4'>in those days. </span>"
                          :audio="require('@/assets/audios/tema1/104.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Last century  </b></em> / El siglo pasado 
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="All those inventions are from the <span class='r-4'> last century.</span>"
                          :audio="require('@/assets/audios/tema1/105.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Last month </b></em> / El mes pasado
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Celine went to Paris <span class='r-4'>last month. </span>"
                          :audio="require('@/assets/audios/tema1/106.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Last night </b></em> / Anoche
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="<span class='r-4'>Last night</span> i heard a strange noise outside the house."
                          :audio="require('@/assets/audios/tema1/107.mp3')"
                          )
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Last week </b></em> / La semana pasada
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Peter went to Japan  <span class='r-4'>last week.</span>"
                          :audio="require('@/assets/audios/tema1/108.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Last year  </b></em> / El año pasado
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Helen sold her car  <span class='r-4'>last year. </span>"
                          :audio="require('@/assets/audios/tema1/109.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Long time ago  </b></em> / Hace mucho tiempo 
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="I moved to this city a  <span class='r-4'>long time ago. </span>"
                          :audio="require('@/assets/audios/tema1/110.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Once upon a time </b></em> / Érase una vez
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="<span class='r-4'>Once upon a time  </span> there was a frog who became a prince."
                          :audio="require('@/assets/audios/tema1/111.mp3')"
                          )
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Recently  </b></em> / Recientemente
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="I saw Martha  <span class='r-4'>recently. </span>"
                          :audio="require('@/assets/audios/tema1/112.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Yesterday night </b></em> / Ayer por la noche
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="We went to the disco  <span class='r-4'>  yesterday night.</span>"
                          :audio="require('@/assets/audios/tema1/113.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Yesterday  </b></em> / El día de ayer
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Jim’s funeral was <span class='r-4'> yesterday.</span>"
                          :audio="require('@/assets/audios/tema1/114.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Yesterday morning </b></em> / Ayer por la mañana 
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Chemistry test was  <span class='r-4'> yesterday morning.</span>"
                          :audio="require('@/assets/audios/tema1/115.mp3')"
                          )
    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.2   <em>Time expressions - present</em> /  (Expresiones de tiempo - presente)
    .row.justify-content-center.mb-3
      .col-lg-5
        .contenedor-traductor.mb-4
          .contenedor-traductor__eng
            p.fst-italic In this case, they are expressions of time that are used to indicate events or situations that occur in the present. In general, they are used with verb tenses in the present, basically with the present simple. In general, they allow the events that occur on that day, in that week to be sequenced. Also, to indicate situations or events that take place from time to time, among other uses. Therefore, these expressions are going to be used when commenting or talking about events in the present tense and verbs are used in the simple present tense.
              br
              br
              |Below are some expressions of time to use when talking about something that happens in the present or takes place from time to time, that is, with expressions that indicate a frequency. Listen to the audio.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
            p 
              span.r-5 En este caso, son expresiones de tiempo que se utilizan para indicar hechos o situaciones que ocurren en el presente. En general, se utilizan con tiempos verbales en presente, básicamente con el presente simple. En general, permiten secuenciar los eventos que ocurren en ese día, en esa semana. También, para indicar situaciones o eventos que ocurren de vez en cuando, entre otros usos. Por lo tanto, estas expresiones se van a utilizar cuando se comenten o hablen de eventos en tiempo presente y los verbos se utilicen en presente simple.
                br
                br
                |A continuación se presentan algunas expresiones de tiempo para utilizar cuando se habla de algo que sucede en el presente o que tiene lugar de vez en cuando, es decir, con expresiones que indican una frecuencia. Escuche el audio.
          a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2') Ver traducción
        
        img(src='@/assets/curso/temas/54.png' style='width: 398px ').m-auto
      .col-lg-7
        .tarjeta.color-acento-contenido.p-5
          img(src='@/assets/curso/temas/55.svg' alt='AvatarTop').mb-4
          p.text-center.fw-bold Expresiones de tiempo pasado 
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              .tarjeta.bg-white.p-4
                SlyderE(indicadores="derecha")
                  div
                    .contenedor-audio.mb-3
                        p.text-center <em><b>At this moment </b></em> 
                          br
                          | En este momento
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Karla can’t sing at  <span class='r-4'></span> this moment."
                        :audio="require('@/assets/audios/tema1/116.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Currently </b></em>
                          br
                          | Actualmente
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="<span class='r-4'>Currently</span>, Jimmy is out of work."
                        :audio="require('@/assets/audios/tema1/117.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Every morning</b></em>
                          br
                          | Cada mañana 
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Sebastian goes to school <span class='r-4'>every morning. </span>"
                        :audio="require('@/assets/audios/tema1/118.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>In the evening</b></em>
                          br
                          | En la tarde
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Melany goes to the gym  <span class='r-4'> in the afternoon.</span>"
                        :audio="require('@/assets/audios/tema1/119.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Now </b></em>
                          br
                          | Ahora
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="<span class='r-4'>Now  </span> it’s your turn to carry the suitcase."
                        :audio="require('@/assets/audios/tema1/120.mp3')"
                        )
                  div
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Nowadays </b></em> 
                          br
                          | Hoy en día
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Children do not respect elders  <span class='r-4'>nowadays.</span>"
                        :audio="require('@/assets/audios/tema1/121.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>On Fridays</b></em> 
                          br
                          | Los viernes
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="I love to go to the club  <span class='r-4'>on Fridays. </span>"
                        :audio="require('@/assets/audios/tema1/122.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>On weekends </b></em>
                          br
                          | En los fines de semana
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Susan goes to the pool  <span class='r-4'>on weekends.</span>"
                        :audio="require('@/assets/audios/tema1/123.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Once a day</b></em>
                          br
                          | Una vez al día
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Mark goes for a walk  <span class='r-4'>once a day. </span>"
                        :audio="require('@/assets/audios/tema1/124.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Right now </b></em>
                          br
                          | Ahora mismo
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Pick up your toys  <span class='r-4'>right now! </span>"
                        :audio="require('@/assets/audios/tema1/125.mp3')"
                        )
                  div
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Since </b></em>
                          br
                          | Ya que
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="She gets scared  <span class='r-4'>since  </span> her dad is angry."
                        :audio="require('@/assets/audios/tema1/126.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>These days </b></em>
                          br
                          | Estos días
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Clara feels in love  <span class='r-4'>these days.</span>"
                        :audio="require('@/assets/audios/tema1/127.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>This week </b></em>
                          br
                          | Esta semana
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Henry works hard  <span class='r-4'>this week.</span>"
                        :audio="require('@/assets/audios/tema1/128.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Today </b></em>
                          br
                          | Este día / Hoy
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="<span class='r-4'>Today </span> is Karen’s birthday."
                        :audio="require('@/assets/audios/tema1/129.mp3')"
                        )
                    .contenedor-audio.mb-3
                        p.text-center <em><b>Twice a day </b></em>
                          br
                          | Dos veces al día
                        TarjetaAudio.color-primario.bg-white.mb-3(
                        texto="Sue calls her boyfriend  <span class='r-4'>twice a day. </span>"
                        :audio="require('@/assets/audios/tema1/130.mp3')"
                        )
    Separador
    #t_1_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.3 <em>Time expressions - future</em> / (Expresiones de tiempo - futuro)
    .tarjeta.rounded-0.margin-n.p-5(style='background-color: #a6bbff').mb-5
      .row.justify-content-center.mb-3
        .col-lg-5
          img(src='@/assets/curso/temas/56.svg', alt='').mb-3
          .contenedor-traductor
            .contenedor-traductor__eng
              p.fst-italic These expressions of time are used to express events or situations that have not yet occurred, that will occur later, after some time, the next day, next week, next month. They are used to comment on the plans that are to be carried out, express decisions, give orders, among other activities. In addition, certain predictions of probable or certain future events can also be made. In addition, they are also used to make proposals and invitations.
                br
                br
                |Below are some expressions of time to use when talking about something that happens in the future, to express plans in the short, medium, and long term, and also to make predictions 
            .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
              p 
                span.r-5 Estas expresiones de tiempo se utilizan para expresar hechos o situaciones que aún no han ocurrido, que van a ocurrir luego, después de un tiempo, al otro día, la próxima semana, el próximo mes. Se utilizan para comentar los planes que se quieren realizar, expresar decisiones, dar órdenes, entre otras actividades. Además, se pueden hacer ciertas predicciones de eventos futuros probables o de los que se tiene seguridad, y también se usan para realizar propuestas e invitaciones.
            a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2') Ver traducción
        .col-lg-7
          .tarjeta.color-secundario.p-5
            p.text-center <em><b>Time expressions - past </b></em> / (Expresiones de tiempo - pasado)
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-10
                .tarjeta.bg-white.p-4
                  SlyderE(indicadores="derecha")
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Coming soon </b></em> / Próximamente
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Coming soon, they will show that special film."
                          :audio="require('@/assets/audios/tema1/131.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Eventually  </b></em> / Eventualmente
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Eventually, he will be fired from the company."
                          :audio="require('@/assets/audios/tema1/132.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Later  </b></em> / Despúes
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Sara will go to your house later."
                          :audio="require('@/assets/audios/tema1/133.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Next day  </b></em> / El día siguiente
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Silvie is going to travel the next day. "
                          :audio="require('@/assets/audios/tema1/134.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Next month  </b></em> / El próximo mes
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Joan will reap the harvest next month. "
                          :audio="require('@/assets/audios/tema1/135.mp3')"
                          )
                    div
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Next week  </b></em> / La próxima semana
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="I will see you next week. "
                          :audio="require('@/assets/audios/tema1/136.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b> Next year  </b></em> / Eventualmente
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Susy will return from Japan next year. "
                          :audio="require('@/assets/audios/tema1/137.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Soon  </b></em> / Pronto 
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Camile is going to learn the lesson soon."
                          :audio="require('@/assets/audios/tema1/138.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Tomorrow  </b></em> / Mañana
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="Charles will leave the hospital tomorrow."
                          :audio="require('@/assets/audios/tema1/139.mp3')"
                          )
                      .contenedor-audio.mb-3
                          p.text-center <em><b>Tomorrow night  </b></em> / Mañana en la noche
                          TarjetaAudio.color-primario.bg-white.mb-3(
                          texto="They will have a date tomorrow night. "
                          :audio="require('@/assets/audios/tema1/140.mp3')"
                          )
    h3 <em>Other expressions of time</em> / Otras expresiones de tiempo
    .row.justify-content-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/57.svg', alt='').mb-3
      .col-lg-10 
        .contenedor-traductor.mb-4
          .contenedor-traductor__eng
            p.fst-italic In addition to the above, some other expressions of time or idioms are presented, which serve to express ideas related to the importance of time for many people, in order to take advantage of time, since many persons know the phrase that 
              span.r-1 “time is gold”, 
              | which means the value of using time in activities that benefit people. This often represents the culture of a country where time is valued as a resource for progress and national development.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
            p 
              span.r-5 Aunado a lo anterior, se presentan algunas otras expresiones de tiempo o modismos, que sirven para manifestar ideas relacionadas con la importancia que tiene el tiempo para muchas personas, para efectos de aprovechar ese tiempo, pues muchos conocen la frase que señala que <b>“el tiempo es oro”</b>, lo cual quiere significar el valor de utilizar el tiempo en actividades de provecho para las personas. Ello representa muchas veces la cultura de un país donde se valora el tiempo como recurso para el progreso y desarrollo nacional.
          a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-10
        p.text-center 
          span.fst-italic.fw-bold For example 
          | / Por ejemplo:
        img(src='@/assets/curso/temas/58.svg', alt='').mb-3
    p.text-center 
      span.fst-italic.fw-bold Idioms 
      | / Modismos
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold A day late, a dollar short.
            br
            | Un día tarde, un dólar corto
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Finish your work early because a day late is a dollar short."
            :audio="require('@/assets/audios/tema1/141.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Against the clock
            br
            | Contra reloj
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="He’s working against the clock. "
            :audio="require('@/assets/audios/tema1/142.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Better late than never
            br
            | Mejor tarde que nunca
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Please do it now, better late than never."
            :audio="require('@/assets/audios/tema1/143.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold In the blink of an eye
            br
            | En un abrir y cerrar de ojos
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Jimmy will repair the TV in the blink of an eye."
            :audio="require('@/assets/audios/tema1/144.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Make time
            br
            | Hacer tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Lucy makes time to say the truth to her dad. "
            :audio="require('@/assets/audios/tema1/145.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Nick of time
            br
            | Justo a tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Robert arrived in a nick of time to make the English test."
            :audio="require('@/assets/audios/tema1/146.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold On time
            br
            | A tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Nelly is always on time when she goes to an interview. "
            :audio="require('@/assets/audios/tema1/147.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Once in a blue moon
            br
            | Rara vez
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Once in a blue moon, you do your homework early. "
            :audio="require('@/assets/audios/tema1/148.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Save time
            br
            | Ahorrar tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="You must save time to leave work earlier. "
            :audio="require('@/assets/audios/tema1/149.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Spare time
            br
            | Tiempo de ocio
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="You have too much spare time. "
            :audio="require('@/assets/audios/tema1/150.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Spend time
            br
            | Pasar el tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Carol spends her time reading good books. "
            :audio="require('@/assets/audios/tema1/151.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Take time
            br
            | Tomar tiempo
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Making a big cake takes time. "
            :audio="require('@/assets/audios/tema1/152.mp3')"
            ) 
      .tarjeta.color-primario.p-4
        .tarjeta.bg-white.p-4
          p.text-center
            span.fst-italic.fw-bold Time flies
            br
            | El tiempo vuela
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Time flies when we are together. "
            :audio="require('@/assets/audios/tema1/153.mp3')"
            ) 


</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
export default {
  name: 'Tema1',
  components: {
    DialogoChat,
  },
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
    ocultarEsp3: true,
    dialogoUno: {
      personajes: [
        {
          nombre: 'Paul',
          img: require('@/assets/curso/temas/paul.png'),
        },
        {
          nombre: 'July',
          img: require('@/assets/curso/temas/july.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Paul',
          textoIng: 'July, do you want to go to the movies?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'July',
          textoIng: 'That’s fine. Which movie do you want to watch?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Paul',
          textoIng: 'I want to see “Jurassic World Dominion.”',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'July',
          textoIng: 'That’s an excellent choice! I love the protagonist!',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Paul',
          textoIng: 'Well, I have very good taste in everything!',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
      ],
    },
    dialogoDos: {
      personajes: [
        {
          nombre: 'Paul',
          img: require('@/assets/curso/temas/paul.png'),
        },
        {
          nombre: 'July',
          img: require('@/assets/curso/temas/july.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Paul',
          textoIng: 'Do you *** to go to the movies?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'want',
        },
        {
          personaje: 'July',
          textoIng: 'I ***  the protagonist',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'love',
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
.card-flag
  position: relative
  height: fit-content
  &__flag
    position: inherit
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    transform: translateY(40%)
  &__information
    display: flex
    background-color: #ffdfe0
.bg-slide
  background-repeat: no-repeat
  background-size: cover
  background-position: center center

  &__1
    background-image: url(../assets/curso/temas/bg-slide-1.png)
  &__2
    background-image: url(../assets/curso/temas/bg-slide-2.svg)
</style>
