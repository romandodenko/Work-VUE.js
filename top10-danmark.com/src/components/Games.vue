<template>
  <section class="games" id="games">
    <div class="container">
      <ul class="games__list">
        <li class="games__item" v-for="Games in GamesElements">
            <div class="games__image">
              <a :href="Games.HrefPage">
                <img :src="Games.HrefImage" alt="Image">
              </a>
            </div>
            <a class="games__link" :href="Games.HrefPage">
              {{ Games.NameGame }}
            </a>
            <a class="games__play" :href="Games.HrefPage">
              Spil
            </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['GamesElements'],
  }
</script>


<style lang="scss">

  .games {

    &:not(:last-child) {
      margin-bottom: 70px;
      @media (max-width: 991px) {
        margin-bottom: 90px;
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      flex: 0 0 400px;
      @media (max-width: 991px) {
        flex: 0 0 342px;
      }
      @media (max-width: 450px) {
        flex: 0 1 100%;
      }
    }

    &__image {
      height: 222px;
      overflow: hidden;
      border-radius: 10px;
      @media (max-width: 991px) {
        height: 185px;
      }
      @media (max-width: 600px) {
        height: 181px;
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
      &:not(:last-child) {
        margin-bottom: 16px;
        @media (max-width: 991px) {
          margin-bottom: 14px;
        }
        @media (max-width: 600px) {
          margin-bottom: 12px;
        }
      }
    }

    &__link {
      display: block;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #FFFFFF;
      transition: color .3s ease;
      @media (any-hover: hover) {
      &:hover {
        color: #F88A00;
      }
      }
      &:active {
        color: #F88A00;
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
      min-width: 176px;
      min-height: 41px;
      background: #F88A00;
      margin: 0 auto;
      border-radius: 32px;
      font-weight: 400;
      font-size: 22px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
      transition: color .3s ease, background-color .3s ease;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 16px;
        min-width: 146px;
        min-height: 34px;
      }
      @media (max-width: 600px) {
        min-width: 157px;
        min-height: 33px;
      }
      @media (any-hover: hover) {
      &:hover {
        color: #F88A00;
        background-color: #FFFFFF;
      }
      }
      &:active {
        color: #F88A00;
        background-color: #FFFFFF;
        transition-duration: .1s;
      }
    }
  }

</style>
