<template>

  <section class="slots" id="games">
    <div class="container">
      <h2 class="slots__title">
        Games
      </h2>
      <ul class="slots__list">
        <li class="slots__item" v-for="DataGames in DataGames">
          <div class="slots__image">
            <router-link class="lt" :to="DataGames.link">
              <picture>
                <source media="(min-width: 320px)" :srcset="DataGames.imageWebp" type="image/webp">
                <img :src="DataGames.image" loading="lazy" width="300" height="300" alt="Image">
              </picture>
            </router-link>
          </div>
          <div class="slots__descr">
            <router-link class="slots__link lt" :to="DataGames.link">
              {{ DataGames.name }}
            </router-link>
            <router-link class="slots__play lt" :to="DataGames.link">
              <img src="../assets/play.svg" loading="lazy" width="300" height="300" alt="Image">
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
  export default {
    props: ['DataGames'],
  }
</script>

<style lang="scss">
  .slots {
    &:not(:last-child) {
      margin-bottom: 90px;
    }

    &__title {
      font-weight: 900;
      font-size: 32px;
      line-height: 45px;
      text-align: center;
      color: #FFC800;

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
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
      overflow: hidden;
      border-radius: 5px;
      height: 257px;

      @media (max-width: 991px) {
        height: 245px;
      }

      @media (max-width: 600px) {
        height: 226px;
      }

      & a {
        display: block;
        width: 100%;
        height: 100%;

        & picture {
          & img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__descr {
      display: flex;
      align-items: center;
      gap: 15px;
      justify-content: space-between;
      width: 100%;
    }

    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
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

    &__play {
      display: block;
      flex: 0 0 64px;
      height: 64px;
      transition: opacity .3s ease;

      @media (max-width: 991px) {
        flex: 0 0 60px;
        height: 60px;
      }

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
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