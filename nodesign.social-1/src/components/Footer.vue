<template>

  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <router-link class="footer__logo lt" to="/main">
          <img src="../assets/logo.png" loading="lazy" width="150" height="100" alt="Logo">
        </router-link>
        <p class="footer__text">
          <span>
            The games offered on the site do not give users a chance to win real money.
          </span>
          The site does not provide users with any skills that can be used in real gambling. The games are available to
          users over 18 years of age.
        </p>
      </div>
      <ul class="footer__list">
        <li class="footer__item">
          <router-link class="footer__link lt" to="/terms">
            Terms and Conditions
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

<script>

</script>

<style lang="scss">
  .footer {
    background-color: #000000;
    padding: 25px 0 50px 0;

    @media (max-width: 991px) {
      padding: 20px 0 40px 0;
    }

    @media (max-width: 600px) {
      padding: 20px 0 30px 0;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      @media (max-width: 700px) {
        align-items: flex-start;
        flex-direction: column;
      }
      @media (max-width: 600px) {
        gap: 16px;
      }
    }

    &__left {
      flex: 0 1 773px;

      @media (max-width: 991px) {
        flex: 0 1 456px;
      }

      @media (max-width: 700px) {
        flex: none;
        width: 100%;
      }
    }

    &__logo {
      display: block;
      width: 90px;
      height: 90px;

      @media (max-width: 991px) {
        width: 80px;
        height: 80px;
      }

      @media (max-width: 600px) {
        width: 70px;
        height: 70px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

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
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    &__list {
      flex-shrink: 0;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 24px;
        }
      }
    }

    &__link {
      font-size: 16px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      transition: opacity .3s ease;

      @media (max-width: 600px) {
        font-size: 14px;
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
</style>