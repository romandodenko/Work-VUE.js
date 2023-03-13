<template>

  <Header />

  <main>

  <section class="slot">
    <div class="container">
      <h1 class="slot__title">
        Aztec gems
      </h1>
      <div class="slot__content">
        <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs9aztecgemsdx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0"></iframe>
      </div>
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

.slot {
  margin-top: 80px;
  @media (max-width: 991px) {
    margin-top: 70px;
  }
  @media (max-width: 600px) {
    margin-top: 60px;
  }
  &__title {
    font-size: 32px;
    line-height: 1.3;
    color: #fff;
    font-weight: 700;
    @media (max-width: 991px) {
      font-size: 26px;
    }
    @media (max-width: 600px) {
      font-size: 22px;
    }
    &:not(:last-child) {
      margin-bottom: 32px;
      @media (max-width: 991px) {
        margin-bottom: 24px;
      }
      @media (max-width: 600px) {
        margin-bottom: 16px;
      }
    }
  }
  &__content {
    height: 800px;
    @media (max-width: 991px) {
      height: 500px;
    }
    @media (max-width: 600px) {
      height: 350px;
    }
    & iframe {
      width: 100%;
      height: 100%;
    }
  }
}

</style>