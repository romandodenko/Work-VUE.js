<template>
  <div class="page__content">

  <Header :Elements="Elements"></Header>

  <div class="page__body">

    <main>

      <section class="terms">
        <div class="terms__container container" v-for="Elements in Elements">
          <div class="terms__column">
            <h1>Cookiepolitik for top10-danmark.com</h1>

            <p>Dette er cookiepolitikken for top10-danmark.com, tilgængelig fra top10-danmark.com</p>

            <h2><strong>Hvad er cookies</strong></h2>

            <p>Som det er almindelig praksis med næsten alle professionelle websteder, bruger denne side cookies, som er små filer, der downloades til din computer, for at forbedre din oplevelse. Denne side beskriver, hvilke oplysninger de indsamler, hvordan vi bruger dem, og hvorfor vi nogle gange har brug for at gemme disse cookies. Vi vil også dele, hvordan du kan forhindre, at disse cookies gemmes, men dette kan nedgradere eller "bryde" visse elementer af webstedets funktionalitet.</p>

            <h2><strong>Sådan bruger vi cookies</strong></h2>

            <p>Vi bruger cookies af en række forskellige årsager, som er beskrevet nedenfor. Desværre er der i de fleste tilfælde ingen industristandard muligheder for at deaktivere cookies uden fuldstændig at deaktivere funktionaliteten og funktionerne, de tilføjer til denne side. Det anbefales, at du efterlader alle cookies, hvis du ikke er sikker på, om du har brug for dem eller ej, hvis de bruges til at levere en tjeneste, du bruger.</p>

            <h2><strong>Deaktivering af cookies</strong></h2>

            <p>Du kan forhindre indstilling af cookies ved at justere indstillingerne i din browser (se din browserhjælp for at se, hvordan du gør dette). Vær opmærksom på, at deaktivering af cookies vil påvirke funktionaliteten af denne og mange andre websteder, du besøger. Deaktivering af cookies vil normalt resultere i også at deaktivere visse funktioner og funktioner på dette websted. Derfor anbefales det, at du ikke deaktiverer cookies.</p>

          </div>
          <div class="terms__column">
            <h2><strong>De cookies, vi sætter</strong></h2>

               <ul>


               <li>
                   <p>Webstedspræferencecookies</p>
                   <p>For at give dig en god oplevelse på dette websted tilbyder vi funktionaliteten til at indstille dine præferencer for, hvordan dette websted kører, når du bruger det. For at huske dine præferencer er vi nødt til at indstille cookies, så disse oplysninger kan kaldes, når du interagerer med en side er påvirket af dine præferencer.</p>
               </li>

               </ul>

               <h2><strong>Tredjepartscookies</strong></h2>

               <p>I nogle særlige tilfælde bruger vi også cookies leveret af betroede tredjeparter. Det følgende afsnit beskriver, hvilke tredjepartscookies du kan støde på via dette websted.</p>

               <ul>

               <li>
                   <p>Flere partnere annoncerer på vores vegne, og tilknyttede sporingscookies giver os blot mulighed for at se, om vores kunder er kommet til webstedet gennem et af vores partnerwebsteder, så vi kan kreditere dem korrekt og, hvor det er relevant, tillade vores affilierede partnere at give enhver bonus at de kan give dig mulighed for at foretage et køb.</p>
               </li>


               </ul>
          </div>
          <span class="terms__icon">
            <img :src="Elements.Icon18" alt="Icon">
          </span>
        </div>
      </section>

  </main>

  <Footer :Elements="Elements"></Footer>

</div>

</div>

</template>

<script>

import Header from './Header.vue';

import Footer from './Footer.vue';

import Elements from '../data/Elements';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Elements,
    }
  },
}
</script>

<style lang="scss">

.terms {

  margin-top: 90px;

  @media (max-width: 991px) {
    margin-top: 70px;
  }

  @media (max-width: 600px) {
    margin-top: 50px;
  }

  &__container {
    position: relative;
    display: grid;
    grid-template: auto / repeat(auto-fill,minmax(500px,1fr));
    gap: 20px;
    @media (max-width: 991px) {

    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

 &__icon {
    position: absolute;
    top: 0;
    right: 10px;
    display: block;
    width: 47px;
    height: 47px;
    @media (max-width: 991px) {
      display: none;
    }
    & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    }
  }

  & h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 45px;
    color: #F88A00;
    @media (max-width: 991px) {
      font-size: 26px;
      line-height: 32px;
    }
    @media (max-width: 600px) {
      font-size: 22px;
      line-height: 26px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }
  }

  & h2 {
    font-weight: 900;
    font-size: 32px;
    line-height: 45px;
    color: #F88A00;
    @media (max-width: 991px) {
      font-size: 26px;
      line-height: 32px;
    }
    @media (max-width: 600px) {
      font-size: 22px;
      line-height: 26px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }
  }
  
  & p {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }
  }
  & ul {
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }
  }
  & li {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #FFFFFF;
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
    }
  }
}

</style>