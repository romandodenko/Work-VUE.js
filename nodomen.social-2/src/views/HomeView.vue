<template>

  <Popup />

  <Hero />

  <Games :DataGames="DataGames" />

  <Benefits :DataBenefits="DataBenefits" />

  <About />

</template>

<script>
  // @ is an alias to /src
  import Hero from '@/components/Hero.vue';

  import Games from '@/components/Games.vue';

  import Benefits from '@/components/Benefits.vue';

  import About from '@/components/About.vue';

  import Popup from '@/components/Popup.vue';

  import DataBenefits from '@/data/DataBenefits';

  import DataGames from '@/data/DataGames';

  import DocSite from '@/modules/document';

  import Smooth from '@/modules/smooth-scroll';

  import WebpInit from '@/modules/webp';

  export default {
    name: 'HomeView',
    data() {
      return {
        DataBenefits,
        DataGames,
      }
    },
    components: {
      Hero,
      Games,
      Benefits,
      About,
      Popup,
    },
  }

  DocSite();

  Smooth();

  WebpInit();
</script>
