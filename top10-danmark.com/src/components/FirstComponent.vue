<template>

  <div class="page__content">

    <Header :Elements="Elements"></Header>

    <div class="page__body">

      <main>

        <Hero :Elements="Elements"></Hero>

        <Benefits :BenefitsElements="BenefitsElements"></Benefits>

        <About :Elements="Elements"></About>

        <Games :GamesElements="GamesElements"></Games>

        <Popup></Popup>

      </main>

      <Footer :Elements="Elements"></Footer>

    </div>

  </div>

</template>

<script>

import Header from './Header.vue';

import Hero from './Hero.vue';

import Benefits from './Benefits.vue';

import About from './About.vue';

import Games from './Games.vue';

import Footer from './Footer.vue';

import Popup from './Popup.vue';

import Elements from '../data/Elements';

import BenefitsElements from '../data/Benefits';

import GamesElements from '../data/Games';

export default {
  components: {
    Header,
    Hero,
    Benefits,
    About,
    Games,
    Footer,
    Popup,
  },
  data() {
    return {
      Elements,
      BenefitsElements,
      GamesElements,
    }
  },
}
</script>
