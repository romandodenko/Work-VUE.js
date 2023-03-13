<template>

  <section class="about" id="about">
    <div class="container">
      <h2 class="about__title">
        About our free games
      </h2>
      <h3 class="about__subtitle">
        Why is it better to play for free?
      </h3>
      <div class="about__content">
        <div class="about__descr">
          <p class="about__text">
            To play games now, you need a computer with a network connection. Just a few clicks separate users from the
            magical world of gambling adventures, in which a small bet can turn into a fantastic jackpot in a few
            seconds. Of course, if you play games for free without registration, the winnings will be conditional, but a
            good mood and excitingly interesting pastime are guaranteed.
          </p>
          <p class="about__text">
            A single universal principle of the game makes it possible to play any games for free, without spending a
            lot of time getting acquainted with the rules. On games during the game, various symbols drop out (images
            may vary depending on the theme and plot of each individual gaminator). Certain combinations of symbols (as
            a rule, we are talking about the loss of a set of identical images) increase the amount of the bet. If we
            are talking about a bet made with real money, the player receives real payouts for such combinations, and if
            you play games for free, the pleasure of the process will be the best reward.
          </p>
        </div>
        <div class="about__image">
          <picture>
            <source media="(min-width: 320px)" srcset="../assets/about.png" type="image/webp">
            <img src="../assets/about.png" loading="lazy" width="200" height="200" alt="Image">
          </picture>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .about {
    &:not(:last-child) {
      margin-bottom: 80px;
    }

    &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      color: #FFE600;

      @media (max-width: 991px) {
        font-size: 30px;
        line-height: 35px;
      }

      @media (max-width: 600px) {
        font-size: 28px;
        line-height: 33px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #FFFFFF;

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 991px) {
          margin-bottom: 16px;
        }
      }
    }

    &__content {
      display: flex;
      gap: 16px 17px;

      @media (max-width: 991px) {
        flex-direction: column;
      }
    }

    &__descr {
      flex: 0 1 773px;

      @media (max-width: 991px) {
        flex: none;
        width: 100%;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 22px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__image {
      align-self: flex-end;
      flex: 0 0 367px;
      height: 228px;

      @media (max-width: 991px) {
        max-width: 342px;
        height: 213px;
        margin: 0 auto;
        width: 100%;
        flex: none;
        align-items: flex-start;
      }

      @media (max-width: 600px) {
        max-width: 315px;
        height: 196px;
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