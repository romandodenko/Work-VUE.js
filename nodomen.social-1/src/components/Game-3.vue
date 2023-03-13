<template>

  <section class="slot">
    <div class="slot__container container">
      <h1 class="slot__title">
        Viking voyage
      </h1>
      <div class="slot__content">
        <iframe src="https://democasino.betsoftgaming.com/cwguestlogin.do?bankId=675&CDN=AUTO&gameId=805"
          frameborder="0"></iframe>
      </div>
      <span class="slot__icon">
        <img src="../assets/18+.svg" loading="lazy" width="50" height="50" alt="Icon">
      </span>
    </div>
  </section>

</template>

<style lang="scss">
  .slot {
    padding-top: 100px;

    @media (max-width: 991px) {
      padding-top: 50px;
    }

    @media (max-width: 600px) {
      padding-top: 25px;
    }

    &__container {
      position: relative;
      padding-top: 100px;

      @media (max-width: 991px) {
        padding-top: 50px;
      }

      @media (max-width: 600px) {
        padding-top: 25px;
      }
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

    &__icon {
      display: block;
      position: absolute;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;

      @media (max-width: 991px) {
        display: none;
      }

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
</style>