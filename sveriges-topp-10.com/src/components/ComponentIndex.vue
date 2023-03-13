<template>

      <Header />
  
      <main>
  
        <Hero />
  
        <Games :GamesData="GamesData" />
  
        <About />
  
        <Benefits :BenefitsData="BenefitsData" />
  
        <Popup />
  
      </main>
  
      <Footer />
  
  </template>
  
  <script>
  
  import Header from './Header.vue';
  
  import Hero from './Hero.vue';
  
  import Games from './Games.vue';
  
  import About from './About.vue';
  
  import Benefits from './Benefits.vue';
  
  import Footer from './Footer.vue';
  
  import Popup from './Popup.vue';
  
  import GamesData from '../data/GamesData';
  
  import BenefitsData from '../data/BenefitsData';
  
  export default {
    name: 'App',
    components: {
      Header,
      Hero,
      Games,
      About,
      Benefits,
      Footer,
      Popup,
    },
    data() {
      return {
        GamesData,
        BenefitsData,
      }
    },
  }
  </script>