<template>

  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__body">
          <h1 class="hero__title">
            Slot machines for all game lovers
          </h1>
          <p class="hero__text">
            <span>The games offered on the site do not give users a chance to win real money.</span>
            The site does not provide users with any skills that can be used in real gambling. The games are available
            to users over 18 years of age.
          </p>
          <a class="hero__link" href="#games">
            Play
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

</script>

<style lang="scss">
  .hero {
    background-image: url(../assets/hero.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.png);
    }

    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.png);
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

    &__content {
      display: flex;
      align-items: center;
      padding: 30px 0;
      min-height: 510px;
    }

    &__body {
      max-width: 670px;

      @media (max-width: 991px) {
        max-width: 570px;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 45px;
      line-height: 1.4;
      color: #fff;

      @media (max-width: 991px) {
        font-size: 38px;
      }

      @media (max-width: 600px) {
        font-size: 28px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;

      @media (max-width: 991px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }

      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 26px;
        }

        @media (max-width: 600px) {
          margin-bottom: 22px;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: fit-content;
      min-width: 210px;
      min-height: 46px;
      background-color: #fff;
      font-size: 18px;
      line-height: 1;
      color: #000;
      font-weight: 400;
      border-radius: 10px;
      transition: color .3s ease, background-color .3s ease;

      @media (max-width: 991px) {
        min-width: 180px;
        min-height: 40px;
      }

      @media (max-width: 600px) {
        min-width: 160px;
        font-size: 16px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #fff;
          background-color: #000;
        }
      }

      &:active {
        color: #fff;
        background-color: #000;
        transition-duration: .1s;
      }
    }
  }

</style>