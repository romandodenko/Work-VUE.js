<template>

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

  import BenefitsData from '../data/BenefitsData';

  import GamesData from '../data/GamesData';

  export default {
    name: 'MainView',
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
    }
  }
</script>