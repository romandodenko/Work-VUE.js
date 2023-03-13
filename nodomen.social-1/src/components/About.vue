<template>

  <section class="about" id="about">
    <div class="container">
      <h2 class="about__title">
        About Us
      </h2>
      <div class="about__content">
        <div class="about__descr">
          <p class="about__text">
            Free games is a game of chance that does not have the strategy or experience required to understand and
            play. The game interface usually has a set of reels with a set of rows each - for example, a 5x3 grid with
            five reels featuring three symbols each. Some of them may also have a different, more modern setting, such
            as with cluster payouts or wins paid out from the entire grid.
          </p>
          <p class="about__text">
            The goal of the game is to collect symbols in lines, combinations or clusters that create a win. The exact
            setting and rules may vary slightly depending on the specific game, but you generally need at least three of
            the same symbol to appear side by side on a payline for this to result in a win. Most games also have
            special symbols such as wild and scatter symbols as well as bonus features.
          </p>
        </div>
        <div class="about__image">
          <picture>
            <source media="(min-width: 320px)" srcset="../assets/about.webp" type="image/webp">
            <img src="../assets/about.jpg" loading="lazy" width="300" height="300" alt="Picture">
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
      color: #FFFFFF;
      width: fit-content;
      padding: 5px 25px;
      min-width: 194px;
      background-color: #14C59A;

      @media (max-width: 991px) {
        font-size: 24px;
        line-height: 28px;
      }

      @media (max-width: 600px) {
        padding: 5px 10px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;

        @media (max-width: 600px) {
          margin-bottom: 24px;
        }
      }
    }

    &__content {
      display: flex;
      gap: 18px;
      align-items: flex-start;

      @media (max-width: 991px) {
        flex-direction: column;
        gap: 16px;
      }

      @media (max-width: 600px) {
        gap: 10px;

      }
    }

    &__descr {
      flex: 0 1 625px;

      @media (max-width: 991px) {
        flex: none;
        width: 100%;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 23px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__image {
      position: relative;
      flex: 0 1 625px;
      padding-bottom: 28%;

      @media (max-width: 991px) {
        flex: none;
        max-width: 332px;
        margin: 0 auto;
        width: 100%;
      }

      @media (max-width: 600px) {
        padding-bottom: 52%;
        max-width: 500px;
      }

      & img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
  
</style>