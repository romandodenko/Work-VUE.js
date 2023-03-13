<template>

  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <p class="footer__text">
          <span>The games offered on the site do not give users a chance to win real money.</span>
          The site does not provide users with skills that can be used in real gambling. The games are available for
          users over the age of 18.
        </p>
      </div>
      <ul class="footer__list">
        <li class="footer__item">
          <router-link class="footer__link lt" to="/terms">Terms and conditions</router-link>
        </li>
        <li class="footer__item">
          <router-link class="footer__link lt" to="/policy">Privacy policy</router-link>
        </li>
        <li class="footer__item">
          <router-link class="footer__link lt" to="/cookie">Cookie policy</router-link>
        </li>
      </ul>
    </div>
  </footer>

</template>

<style lang="scss">
  .footer {
    padding: 0 0 30px 0;

    @media (max-width: 600px) {
      padding: 0 0 20px 0;
    }

    &__container {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px 30px;
    }

    &__left {
      flex: 0 1 515px;

      @media (max-width: 991px) {
        flex: 0 1 420px;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      color: #FFFFFF;

      & span {
        display: block;
      }
    }

    &__list {
      text-align: right;
      margin-left: auto;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__link {
      font-weight: 400;
      font-size: 19px;
      line-height: 27px;
      color: #FFFFFF;
      transition: color .3s ease;

      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #3AB8FF;
        }
      }

      &:active {
        color: #3AB8FF;
        transition-duration: .1s;
      }
    }
  }
</style>