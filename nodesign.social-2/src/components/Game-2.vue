<template>

  <section class="slot">
    <div class="container">
      <h1 class="slot__title">
        Grand fruits
      </h1>
      <div class="slot__content">
        <iframe
          src="https://cdn02.cdn.amatic.com/gmsl/amanet/game.html?config=1372&currency=FUN&hash=freeplay&isFreeplay=true&language=en&game=grandfruits"
          frameborder="0"></iframe>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .slot {
    margin-top: 80px;

    @media (max-width: 600px) {
      margin-bottom: 60px;
    }

    &:not(:last-child) {
      margin-bottom: 80px;

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;

      @media (max-width: 991px) {
        font-size: 26px;
      }

      @media (max-width: 600px) {
        font-size: 20px;
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