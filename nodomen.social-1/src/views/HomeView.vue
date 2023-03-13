<template>

  <Popup />

  <Hero />

  <Benefits :DataBenefits="DataBenefits" />

  <About />

  <Games :DataGames="DataGames" />

</template>

<script>

import Hero from '@/components/Hero.vue';

import About from '@/components/About.vue';

import Benefits from '@/components/Benefits.vue';

import Games from '@/components/Games.vue';

import Popup from '@/components/Popup.vue';

import DataBenefits from '@/data/DataBenefits';

import DataGames from '@/data/DataGames';

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
    Benefits,
    About,
    Games,
    Popup,
  }
}
</script>
