<template>

<main>

<Header />

  <section class="terms">
      <div class="container">
        <h1>Cookiepolicy för sveriges-topp-10.com</h1>

        <p>Detta är cookiepolicyn för sveriges-topp-10.com, tillgänglig från sveriges-topp-10.com</p>

        <h2><strong>Vad är cookies</strong></h2>

        <p>Som är vanligt med nästan alla professionella webbplatser använder denna webbplats cookies, som är små filer som laddas ner till din dator, för att förbättra din upplevelse. Den här sidan beskriver vilken information de samlar in, hur vi använder den och varför vi ibland behöver lagra dessa cookies. Vi kommer också att berätta hur du kan förhindra att dessa cookies lagras, men detta kan nedgradera eller "bryta" vissa delar av webbplatsens funktionalitet.</p>

        <h2><strong>Hur vi använder cookies</strong></h2>

        <p>Vi använder cookies av en mängd olika skäl som beskrivs nedan. Tyvärr finns det i de flesta fall inga branschstandardalternativ för att inaktivera cookies utan att helt inaktivera funktionaliteten och funktionerna som de lägger till på denna webbplats. Det rekommenderas att du lämnar på alla cookies om du är osäker på om du behöver dem eller inte i fall de används för att tillhandahålla en tjänst som du använder.</p>

        <h2><strong>Inaktivera cookies</strong></h2>

        <p>Du kan förhindra inställningen av cookies genom att justera inställningarna i din webbläsare (se webbläsarens hjälp för hur du gör detta). Var medveten om att inaktivering av cookies kommer att påverka funktionen hos denna och många andra webbplatser som du besöker. Inaktivering av cookies kommer vanligtvis att leda till att vissa funktioner och funktioner på denna webbplats inaktiveras. Därför rekommenderas det att du inte inaktiverar cookies.</p>

        <h2><strong>De cookies vi sätter</strong></h2>

        <ul>

        <li>
            <p>Webbplatspreferenscookies</p>
            <p>För att ge dig en fantastisk upplevelse på den här webbplatsen tillhandahåller vi funktionen för att ställa in dina preferenser för hur den här webbplatsen körs när du använder den. För att komma ihåg dina inställningar måste vi ställa in cookies så att denna information kan anropas när du interagerar med en sida som påverkas av dina inställningar.</p>
        </li>

        </ul>

        <h2><strong>Tredjepartscookies</strong></h2>

        <p>I vissa speciella fall använder vi även cookies från betrodda tredje parter. Följande avsnitt beskriver vilka tredjepartscookies du kan stöta på via den här webbplatsen.</p>

        <ul>

        <li>
            <p>Vi använder även knappar och/eller plugins för sociala medier på den här webbplatsen som låter dig ansluta till ditt sociala nätverk på olika sätt. För att dessa ska fungera följande sociala medier inklusive; {Lista de sociala nätverk vars funktioner du har integrerat med din webbplats?:12}, kommer att sätta cookies via vår webbplats som kan användas för att förbättra din profil på deras webbplats eller bidra till de uppgifter de har för olika ändamål som beskrivs i deras respektive integritet policyer.</p>
        </li>

        </ul>

        <h2><strong>Mer information</strong></h2>

        <p>Förhoppningsvis har det klargjort saker och ting för dig och som tidigare nämnts om det är något som du inte är säker på om du behöver eller inte är det vanligtvis säkrare att lämna cookies aktiverade om det interagerar med någon av funktionerna du använder på vår webbplats.</p>

      </div>
  </section>

</main>

<Footer />
</template>

<script>

import Header from './Header.vue';

import Footer from './Footer.vue';

export default {
  components: {
      Header,
      Footer,
    },
}

</script>

<style lang="scss">

.terms {
  margin-top: 80px;
  @media (max-width: 991px) {
    margin-top: 70px;
  }
  @media (max-width: 600px) {
    margin-top: 60px;
  }
  & h1 {
    font-weight: 900;
    font-size: 24px;
    line-height: 1.3;
    color: #03A688;
    @media (max-width: 991px) {
      font-size: 22px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      @media (max-width: 600px) {
        margin-top: 15px;
      }
    }
  }
  & h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 1.3;
    color: #03A688;
    @media (max-width: 991px) {
      font-size: 22px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      @media (max-width: 600px) {
        margin-top: 15px;
      }
    }
  }
  & p {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: #FFFFFF;
    @media (max-width: 991px) {
      font-size: 18px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      @media (max-width: 600px) {
        margin-top: 15px;
      }
    }
  }
  & ul {
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      @media (max-width: 600px) {
        margin-top: 15px;
      }
    }
  }
  & li {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    color: #FFFFFF;
    @media (max-width: 991px) {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 14px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      @media (max-width: 600px) {
        margin-top: 15px;
      }
    }
  }
}

</style>