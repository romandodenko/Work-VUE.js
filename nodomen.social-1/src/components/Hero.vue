<template>

  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__descr">
          <span class="hero__span">
            Players who want to play free games without registration will have plenty to choose from.
          </span>
          <h1 class="hero__title">
            <span>Colorful</span> free games
          </h1>
          <p class="hero__text">
            <span>The games offered on the site do not give users a chance to win real money.</span>
            The site does not provide users with skills that can be used in real gambling. The games are available for
            users over the age of 18.
          </p>
          <ul class="hero__list">
            <li class="hero__item">
              <a class="hero__link hero__link_1" href="#games">
                Play
              </a>
            </li>
            <li class="hero__item">
              <a class="hero__link hero__link_2" href="#about">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <span class="hero__icon">
          <img src="../assets/18+.svg" loading="lazy" width="50" height="50" alt="Icon">
        </span>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .hero {
    margin-top: 34px;

    @media (max-width: 991px) {
      margin-top: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 80px;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 30px 20px;
      min-height: 504px;
      border-radius: 10px;
      overflow: hidden;

      @media (max-width: 991px) {
        min-height: 468px;
        padding: 30px 15px;
        justify-content: flex-end;
      }

      @media (max-width: 600px) {
        min-height: 611px;
        padding: 30px 10px;
        justify-content: center;
      }
    }

    &__descr {
      max-width: 622px;

      @media (max-width: 991px) {
        max-width: 402px;
      }
    }

    &__span {
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: #FFFFFF;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__title {
      font-weight: 900;
      font-size: 44px;
      line-height: 62px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      max-width: 540px;
      margin: 0 auto;
      @media (max-width: 991px) {
        font-size: 40px;
        line-height: 56px;
      }

      @media (max-width: 600px) {
        font-size: 30px;
        line-height: 38px;
      }

      & span {
        color: #3AB8FF;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      color: #FFFFFF;

      & span {
        display: block;
      }

      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 19px;
        }

        @media (max-width: 600px) {
          margin-bottom: 50px;
        }
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 13px;
    }

    &__item {}

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: fit-content;
      min-width: 176px;
      min-height: 42px;
      font-weight: 400;
      font-size: 17px;
      line-height: 17px;
      text-align: center;
      color: #FFFFFF;
      transition: color .3s ease, background-color .3s ease, border-color .3s ease;

      &_1 {
        background-color: #14C59A;

        @media (any-hover: hover) {
          &:hover {
            color: #14C59A;
            background-color: #FFFFFF;
          }
        }

        &:active {
          color: #14C59A;
          background-color: #FFFFFF;
          transition-duration: .1s;
        }
      }

      &_2 {
        border: 3px solid #14C59A;

        @media (any-hover: hover) {
          &:hover {
            border-color: #FFFFFF;
          }
        }

        &:active {
          border-color: #FFFFFF;
          transition-duration: .1s;
        }
      }
    }

    &__icon {
      position: absolute;
      display: block;
      width: 50px;
      height: 50px;
      top: 15px;
      right: 15px;

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

  .webp .hero__content {
    background-image: url(../assets/hero.webp);

    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.webp);
    }

    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.webp);
    }
  }

  .no-webp .hero__content {
    background-image: url(../assets/hero.png);

    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.png);
    }

    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.png);
    }
  }
</style>