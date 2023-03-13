<template>

  <div class="page">
    <div class="page__content">
      <Header />
      <div class="page__bottom">

        <main>
          <router-view />
        </main>
        <Footer />

      </div>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';

  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>