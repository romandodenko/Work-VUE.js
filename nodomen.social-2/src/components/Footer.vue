<template>

  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <router-link class="logo logo_footer lt" to="/main">
          <img src="../assets/logo.svg" loading="lazy" width="60" height="60" alt="Logo">
        </router-link>
        <p class="footer__text">
          <span>The games offered on the site do not give users the opportunity to win real money.</span> 
          The site does not provide users with skills that can be used in real gambling. The games are available to users over 18 years of age.
        </p>
      </div>
      <div class="footer__right">
        <ul class="footer__list">
          <li class="footer__item">
            <router-link class="footer__link lt" to="/main">
              Home
            </router-link>
          </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/main#benefits">
              Benefits
            </router-link>
          </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/main#games">
              Games
            </router-link>
          </li>
          <li class="footer__item">
            <router-link class="footer__link" to="/main#about">
              About us
            </router-link>
          </li>
        </ul>
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
    </div>
  </footer>

</template>

<style lang="scss">
  .footer {
    padding: 32px 0 52px 0;
    background-color: #200202;

    @media (max-width: 991px) {
      padding: 45px 0 29px 0;
    }

    @media (max-width: 600px) {
      padding: 36px 0 67px 0;
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 26px 20px;

      @media (max-width: 991px) {
        align-items: flex-start;
        gap: 16px 20px;
      }
    }

    &__left {
      flex: 0 1 572px;

      @media (max-width: 991px) {
        flex: 0 1 614px;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
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
    }

    &__right {
      flex: 0 1 400px;
      margin-left: auto;

      @media (max-width: 600px) {
        flex: none;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        gap: 24px;
      }
    }

    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px 46px;

      @media (max-width: 991px) {
        gap: 15px 35px;
      }

      @media (max-width: 600px) {
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }
    }

    &__item {}

    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #FFFFFF;
      transition: color .3s ease;

      @media (any-hover: hover) {
        &:hover {
          color: #FFE600;
        }
      }

      &:active {
        color: #FFE600;
        transition-duration: .1s;
      }
    }
  }
</style>