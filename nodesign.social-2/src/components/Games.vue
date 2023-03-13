<template>

  <section class="slots" id="games">
    <div class="container">
      <ul class="slots__list">
        <li class="slots__item" v-for="DataGames in DataGames">
          <div class="slots__image">
            <router-link class="lt" :to="DataGames.link">
              <picture>
          <source media="(min-width: 320px)" :srcset="DataGames.imageWebp" type="image/webp">
          <img :src="DataGames.image" width="300" height="300" loading="lazy" alt="Image">
          </picture>
            </router-link>
          </div>
          <router-link class="slots__link lt" :to="DataGames.link">
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
  .slots {
    &:not(:last-child) {
      margin-bottom: 80px;

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      flex: 0 0 370px;

      @media (max-width: 991px) {
        flex: 0 0 342px;
      }

      @media (max-width: 600px) {
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
      display: flex;
      padding: 10px;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      transition: color .3s ease;
      min-height: 50px;
      background-color: #EC6F00;
      transition: color .3s ease, background-color .3s ease;

      @media (max-width: 600px) {
        font-size: 16px;
        min-height: 40px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #EC6F00;
          background-color: #fff;
        }
      }

      &:active {
        color: #EC6F00;
        background-color: #fff;
        transition-duration: .1s;
      }
    }
  }
</style>