<template>
  <section class="about" id="about">
    <div class="container" v-for="Elements in Elements">
        <h2 class="about__title">
          Om os
        </h2>
        <div class="about__content">
          <div class="about__left">
            <h3 class="about__subtitle">
              Spil gratis - Topspil
            </h3>
            <p class="about__text">
              Hvis du vil prøve spillet gratis, kan du selvfølgelig vælge et spil tilfældigt og bare vælge dit spil fra vores liste. Det er trods alt, hvad vores spil er lavet til, og du kan være sikker på, at hvert spil, der vises her, er velrenommeret, såvel som virkelig det bedste i alt andet. Vi anbefaler dog, at du går systematisk til værks, for det bedste ved spillene er, at enhver fan kan finde specielle spil om deres yndlingsemner. Derudover kommer spil i mange forskellige typer, designs, funktioner og producenter.
            </p>
            <p class="about__text">
              Vi foreslår, at du tager et par minutter og først vælger et websted, hvor du kan spille spil gratis uden registrering. I de fleste tilfælde er spil mærket "Gratis", hvilket betyder, at det klart er ønskeligt at spille denne spillemaskine gratis uden registrering, og siden kræver ikke forhåndsregistrering.
              Ved at spille spil gratis uden registrering, kan du lære spillene at kende og øve dig lidt helt uden pres. Find ud af, hvilken model du er mere tilbøjelig til at holde varmen med.
            </p>
          </div>
          <div class="about__images">
            <div class="about__image about__image_1">
              <img :src="Elements.AboutImage1" alt="Image">
            </div>
            <div class="about__image about__image_2">
              <img :src="Elements.AboutImage2" alt="Image">
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['Elements'],
  }
</script>


<style lang="scss">

.about {
  &:not(:last-child) {
    margin-bottom: 70px;
    @media (max-width: 991px) {
      margin-bottom: 90px; 
    }
  }
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 46px;
      color: #FFFFFF;
      @media (max-width: 600px) {
        font-size: 36px;
        line-height: 41px;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__content {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      @media (max-width: 1220px) {
        flex-direction: column;
      }
      @media (max-width: 991px) {
        gap: 24px;
      }
      @media (max-width: 600px) {
        gap: 16px;
      }
    }

    &__left {
      flex: 0 1 625px;
      @media (max-width: 1220px) {
        flex: none;
        width: 100%;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #F88A00;
      &:not(:last-child) {
        margin-bottom: 16px;
        @media (max-width: 600px) {
          margin-bottom: 24px;
        }
      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 23px;
      }
    }
    &__images {
      display: grid;
      grid-template: auto / repeat(2,1fr);
      flex: 0 1 628px;
      gap: 20px;

      @media (max-width: 1220px) {
        flex: none;
        max-width: 521px;
        margin: 0 auto;
        width: 100%;
      }
      @media (max-width: 991px) {
        gap: 15px;
      }
      @media (max-width: 600px) {
        gap: 10px;
      }
    }
    &__image {
      width: 100%;
      height: 413px;
      @media (max-width: 991px) {
        height: 344px;
      }
      @media (max-width: 600px) {
        height: 220px;
      }
      & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      }
      &_1 {

      }

      &_2 {

      }
    }
}

</style>
