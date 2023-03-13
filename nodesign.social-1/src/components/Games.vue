<template>

  <section class="games" id="games">
    <div class="container">
      <h2 class="games__title">
        Games
      </h2>
      <ul class="games__list">
        <li class="games__item" v-for="GamesData in GamesData">
          <div class="games__image">
            <router-link class="lt" :to="GamesData.link">
              <img :src="GamesData.image" loading="lazy" width="150" height="100" alt="Game">
            </router-link>
          </div>
          <router-link class="games__link lt" :to="GamesData.link">
            {{ GamesData.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
  export default {
    props: ['GamesData'],
  }
</script>

<style lang="scss">
  .games {
    &:not(:last-child) {
      margin-bottom: 100px;

      @media (max-width: 991px) {
        margin-bottom: 80px;
      }

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-size: 42px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      line-height: 1.3;

      @media (max-width: 991px) {
        font-size: 36px;
      }

      @media (max-width: 600px) {
        font-size: 28px;
      }

      &:not(:last-child) {
        margin-bottom: 32px;

        @media (max-width: 991px) {
          margin-bottom: 24px;
        }
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    &__item {
      flex: 0 0 370px;

      @media (max-width: 991px) {
        flex: 0 0 342px;
      }

      @media (max-width: 450px) {
        flex: 0 1 100%;
      }
    }

    &__image {
      height: 250px;
      border-radius: 10px;
      overflow: hidden;

      @media (max-width: 600px) {
        height: 200px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }

      & a {
        display: block;
        width: 100%;
        height: 100%;

        & img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    &__link {
      display: block;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.3;
      transition: opacity .3s ease;

      @media (max-width: 600px) {
        font-size: 16px;
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