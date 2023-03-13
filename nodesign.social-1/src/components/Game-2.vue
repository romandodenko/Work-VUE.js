<template>
  <section class="game">
    <div class="container">
      <h1 class="game__title">
        Dance party
      </h1>
      <div class="game__content">
        <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs243dancingpar&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0"></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .game {
    margin-top: 100px;
    @media (max-width: 991px) {
      margin-top: 80px;
    }
    @media (max-width: 600px) {
      margin-top: 60px;
    }
    &:not(:last-child) {
      margin-bottom: 100px;

      @media (max-width: 991px) {
        margin-bottom: 80px;
      }

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-size: 42px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      line-height: 1.3;

      @media (max-width: 991px) {
        font-size: 36px;
      }

      @media (max-width: 600px) {
        font-size: 28px;
      }

      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 24px;
        }
      }
    }

    &__content {
      height: 800px;

      @media (max-width: 991px) {
        height: 550px;
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