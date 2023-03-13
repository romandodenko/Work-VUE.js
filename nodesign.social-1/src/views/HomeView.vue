<template>

  <Popup />

  <Hero />

  <Benefits :BenefitsData="BenefitsData" />

  <About />

  <Games :GamesData="GamesData" />

</template>

<script>
  import Hero from '@/components/Hero.vue';

  import Benefits from '@/components/Benefits.vue';

  import About from '@/components/About.vue';

  import Games from '@/components/Games.vue';

  import Popup from '@/components/Popup.vue';

  import BenefitsData from '../data/BenefitsData';

  import GamesData from '../data/GamesData';

  export default {
    name: 'HomeView',
    data() {
      return {
        BenefitsData,
        GamesData,
      }
    },
    components: {
      Hero,
      Benefits,
      About,
      Games,
      Popup,
    }
  }
</script>