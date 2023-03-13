<template>

  <section class="slot">
    <div class="container">
      <h1 class="slot__title">
        Starz megaways
      </h1>
      <div class="slot__content">
        <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs117649starz&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0"></iframe>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .slot {
    padding-top: 200px;

    @media (max-width: 991px) {
      padding-top: 140px;
    }

    &__title {
      font-size: 32px;
      color: #fff;
      font-weight: 700;
      line-height: 1.3;

      @media (max-width: 991px) {
        font-size: 26px;
      }

      @media (max-width: 600px) {
        font-size: 22px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 600px) {
          margin-bottom: 16px;
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