<template>
  <div class="page__content">

  <Header :Elements="Elements"></Header>

  <div class="page__body">

    <main>

      <section class="game">
      <div class="container">
        <h1 class="game__title">
          The Wild Machine
        </h1>
        <div class="game__content">
          <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs40madwheel&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0"></iframe>
        </div>
      </div>
    </section>

  </main>

  <Footer :Elements="Elements"></Footer>

</div>

</div>

</template>

<script>

import Header from './Header.vue';

import Footer from './Footer.vue';

import Elements from '../data/Elements';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Elements,
    }
  },
}
</script>

<style lang="scss">

  .game {
    margin-top: 90px;
    @media (max-width: 991px) {
      margin-top: 70px;
    }
    @media (max-width: 600px) {
      margin-top: 50px;
    }
    &__title {
      font-size: 32px;
      line-height: 42px;
      font-weight: 700;
      color: #fff;
      @media (max-width: 991px) {
        font-size: 26px;
        line-height: 30px;
      }
      @media (max-width: 600px) {
        font-size: 22px;
        line-height: 28px;
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
        height: 600px;
        }
        @media (max-width: 600px) {
          height: 450px;
        }
      & iframe {
        width: 100%;
        height: 100%;
      }
    }

  }

</style>