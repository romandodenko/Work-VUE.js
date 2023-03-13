<template>

  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__descr">
          <span class="hero__span">
            Immerse yourself in a world of emotions with our games
          </span>
          <h1 class="hero__title">
            Play free games for fun
          </h1>
          <p class="hero__text">
            <span>The games offered on the site do not give users a chance to win real money.</span>
            The site does not provide users with skills that can be used in real gambling. The games are available to
            users over 18 years of age.
          </p>
          <a class="hero__link" href="#games">
            Play
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

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__content {
      padding: 30px 0;
      display: flex;
      align-items: center;
      min-height: 584px;
    }

    &__descr {
      max-width: 665px;

      @media (max-width: 991px) {
        max-width: 565px;
      }
    }

    &__span {
      display: block;
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 17px;
        line-height: 19px;
      }

      @media (max-width: 600px) {
        font-size: 15px;
        line-height: 17px;
      }

      &:not(:last-child) {
        margin-bottom: 5px;
      }

    }

    &__title {
      font-weight: 700;
      font-size: 64px;
      line-height: 74px;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 44px;
        line-height: 54px;
      }

      @media (max-width: 600px) {
        font-size: 34px;
        line-height: 44px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

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

      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 16px;
      }

      & span {
        display: block;
      }

      &:not(:last-child) {
        margin-bottom: 44px;

        @media (max-width: 991px) {
          margin-bottom: 32px;
        }

        @media (max-width: 600px) {
          margin-bottom: 24px;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      color: #FFFFFF;
      width: fit-content;
      min-width: 240px;
      min-height: 50px;
      background-color: #EC6F00;
      border-radius: 44px;
      transition: color .3s ease, background-color .3s ease;

      @media (max-width: 991px) {
        min-width: 200px;
        min-height: 45px;
      }

      @media (max-width: 600px) {
        min-width: 160px;
        min-height: 40px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #EC6F00;
          background-color: #FFFFFF;
        }
      }

      &:active {
        color: #EC6F00;
        background-color: #FFFFFF;
        transition-duration: .1s;
      }

    }
  }

  .webp .hero {
    background-image: url(../assets/hero.webp);
  }

  .no-webp .hero {
    background-image: url(../assets/hero.png);
  }

  @media (max-width: 991px) {
    .webp .hero {
      background-image: url(../assets/hero_2.webp);
    }
    .no-webp .hero {
    background-image: url(../assets/hero_2.png);
  }
  }

  @media (max-width: 600px) {
    .webp .hero {
      background-image: url(../assets/hero_3.webp);
    }
    .no-webp .hero {
    background-image: url(../assets/hero_3.png);
  }
  }
</style>