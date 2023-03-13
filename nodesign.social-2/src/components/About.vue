<template>

  <section class="about" id="about">
    <div class="container">
      <h2 class="about__title">
        About us
      </h2>
      <p class="about__text">
        It is worth starting your adventure with casino games that offer a demo version of the game. Free slot machines
        are a very good solution for both beginners and more experienced players.
      </p>
      <p class="about__text">
        The slots available on our website are demo versions, but they fully faithfully reflect the mechanics of a real
        slot machine game. This allows you to have fun and also allows you to get to know the features of the slots in
        advance.
      </p>
      <p class="about__text">
        Free games without registration give you the opportunity to test the most iconic versions of casino slots, learn
        about the symbols, odds of winning and the audiovisual setting of each game. Just go to our website, select a
        game and click the "Play for Free" button. We don't require any deposits, so you don't risk losing your funds.
      </p>
    </div>
  </section>

</template>

<style lang="scss">
  .about {
    &:not(:last-child) {
      margin-bottom: 80px;

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.3;
      color: #fff;
      font-weight: 700;

      @media (max-width: 991px) {
        font-size: 28px;
      }

      @media (max-width: 600px) {
        font-size: 22px;
      }

      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 26px;
        }

        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }
    }

    &__text {
      font-size: 20px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;

      @media (max-width: 991px) {
        font-size: 18px;
      }

      @media (max-width: 600px) {
        font-size: 16px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }
    }
  }
</style>