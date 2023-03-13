<template>

  <Hero />

  <Benefits :DataBenefits="DataBenefits" />

  <Games :DataGames="DataGames" />

  <About />

</template>

<script>
  import Hero from '@/components/Hero.vue';

  import Benefits from '@/components/Benefits.vue';

  import Games from '@/components/Games.vue';

  import About from '@/components/About.vue';

  import DataGames from '@/data/DataGames';

  import DataBenefits from '@/data/DataBenefits';

  export default {
    name: 'MainView',
    data() {
      return {
        DataGames,
        DataBenefits,
      }
    },
    components: {
      Hero,
      Benefits,
      Games,
      About,
    }
  }
</script>