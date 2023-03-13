<template>

  <footer class="footer">
    <div class="container">
      <router-link class="footer__logo lt" to="/main">
        <picture>
          <source media="(min-width: 320px)" srcset="../assets/logo.webp" type="image/webp">
          <img src="../assets/logo.png" width="80" height="80" loading="lazy" alt="Logo">
        </picture>
      </router-link>
      <p class="footer__text">
        <span>The games offered on the site do not give users a chance to win real money.</span>
        The site does not provide users with skills that can be used in real gambling. The games are available to users
        over 18 years of age.
      </p>
      <ul class="footer__list">
        <li class="footer__item">
          <router-link class="footer__link lt" to="/terms">
            Terms of Use
          </router-link>
        </li>
        <li class="footer__item">
          <router-link class="footer__link lt" to="/policy">
            Privacy Policy
          </router-link>
        </li>
        <li class="footer__item">
          <router-link class="footer__link lt" to="/cookie">
            Cookie Policy
          </router-link>
        </li>
      </ul>
    </div>
  </footer>

</template>

<style lang="scss">
  .footer {
    padding: 32px 0;
    background-color: #032A56;

    @media (max-width: 991px) {
      padding: 26px 0;
    }

    @media (max-width: 600px) {
      padding: 20px 0;
    }

    &__logo {
      display: block;
      margin: 0 auto;
      width: 80px;
      height: 80px;

      @media (max-width: 991px) {
        width: 70px;
        height: 70px;
      }

      @media (max-width: 600px) {
        width: 60px;
        height: 60px;
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

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__text {
      max-width: 625px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      text-align: center;

      @media (max-width: 991px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }

      & span {
        display: block;
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

    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px 50px;

      @media (max-width: 991px) {
        gap: 15px 40px;
      }

      @media (max-width: 600px) {
        gap: 10px 30px;
      }
    }

    &__link {
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      transition: color .3s ease;

      @media (max-width: 991px) {
        font-size: 16px;
      }

      @media (max-width: 600px) {
        font-size: 14px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #EC6F00;
        }
      }

      &:active {
        color: #EC6F00;
        transition-duration: .1s;
      }
    }
  }
</style>