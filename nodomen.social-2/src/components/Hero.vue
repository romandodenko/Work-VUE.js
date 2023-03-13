<template>

  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__descr">
          <span class="hero__span">
            Spend your free time with pleasure
          </span>
          <h1 class="hero__title">
            Free games for fun
          </h1>
          <p class="hero__text">
            <span>The games offered on the site do not give users a chance to win real money.</span>
            The site does not provide users with skills that can be used in real gambling. The games are available for
            users over the age of 18.
          </p>
          <a class="hero__link" href="#games">
            Play now
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .hero {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;

    &:not(:last-child) {
      margin-bottom: 80px;
    }

    &__content {
      display: flex;
      align-items: center;
      min-height: 638px;
      padding: 85px 0;

      @media (max-width: 991px) {
        min-height: 745px;
      }

      @media (max-width: 600px) {
        align-items: flex-start;
        min-height: 812px;
        padding: 150px 0 50px 0;
      }
    }

    &__descr {
      max-width: 676px;

      @media (max-width: 991px) {
        max-width: 433px;
      }
    }

    &__span {
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__title {
      font-weight: 900;
      font-size: 60px;
      line-height: 85px;
      color: #FFC800;

      @media (max-width: 991px) {
        font-size: 48px;
        line-height: 53px;
      }

      @media (max-width: 600px) {
        font-size: 38px;
        line-height: 46px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;

        @media (max-width: 991px) {
          margin-bottom: 16px;
        }
      }
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #FFFFFF;

      & span {
        display: block;
      }

      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      min-width: 255px;
      min-height: 56px;
      background: radial-gradient(89.02% 1361.86% at 3.14% 13.39%, #FFE600 0%, #F38300 100%);
      border-radius: 44px;
      width: fit-content;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
      transition: opacity .3s ease;

      @media (max-width: 600px) {
        min-width: 230px;
        min-height: 46px;
      }

      @media (any-hover: hover) {
        &:hover {
          opacity: .6;
        }
      }

      &:active {
        opacity: .2;
        transition-duration: .1s;
      }
    }
  }

  .webp .hero {
    background-image: url(../assets/hero.webp);

    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.webp);
    }

    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.webp);
    }
  }

  .no-webp .hero {
    background-image: url(../assets/hero.png);

    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.png);
    }

    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.png);
    }
  }
</style>