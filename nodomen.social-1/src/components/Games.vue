<template>

  <section class="games" id="games">
    <div class="container">
      <ul class="games__list">
        <li class="games__item" v-for="DataGames in DataGames">
          <div class="games__image">
            <router-link class="lt" :to="DataGames.src">
              <picture>
                <source media="(min-width: 320px)" :srcset="DataGames.imageWebp" type="image/webp">
                <img :src="DataGames.image" loading="lazy" width="300" height="300" alt="Image">
              </picture>
            </router-link>
          </div>
          <router-link class="games__link lt" :to="DataGames.src">
            {{ DataGames.name }}
          </router-link>
          <router-link class="games__play lt" :to="DataGames.src">
            Play
          </router-link>
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
  .games {
    &:not(:last-child) {
      margin-bottom: 80px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    &__item {
      flex: 0 0 400px;
      border: 3px solid #3AB8FF;
      padding: 15px;

      @media (max-width: 991px) {
        flex: 0 0 342px;
      }

      @media (max-width: 600px) {
        padding: 10px;
      }

      @media (max-width: 450px) {
        flex: 0 1 100%;
      }
    }

    &__image {
      height: 234px;
      border-radius: 5px;
      overflow: hidden;

      @media (max-width: 991px) {
        height: 191px;
      }

      @media (max-width: 600px) {
        height: 181px;
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

    &__link {
      display: block;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
      transition: color .3s ease;

      @media (any-hover: hover) {
        &:hover {
          color: #14C59A;
        }
      }

      &:active {
        color: #14C59A;
        transition-duration: .1s;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__play {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: fit-content;
      margin: 0 auto;
      min-width: 176px;
      min-height: 34px;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      background-color: #14C59A;
      transition: background-color .3s ease, color .3s ease;
      @media (max-width: 600px) {
        min-width: 167px;
        min-height: 32px;
      }

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
  }

</style>