<template>
  <section class="hero">
    <div class="container" v-for="Elements in Elements">
      <div class="hero__content" :style="{backgroundImage:'url(./img/hero.png)'}">
        <div class="hero__body">
          <span class="hero__span">
            Dyk ned i en verden af ​​gratis spil
          </span>
          <h1 class="hero__title">
            De bedste gratis spil
          </h1>
          <p class="hero__text">
            <span>De spil, der tilbydes på siden, giver ikke brugerne en chance for at vinde rigtige penge.</span>
              Siden giver ikke brugerne færdigheder, der kan bruges i ægte gambling. Spillene er tilgængelige for brugere over 18 år.
          </p>
          <ul class="hero__list">
            <li class="hero__item hero__item_1">
              <a class="hero__link hero__link_1" href="#games">
                Spil
              </a>
            </li>
            <li class="hero__item hero__item_2">
              <a class="hero__link hero__link_2" href="#about">
                Om os
              </a>
            </li>
          </ul>
        </div>
        <span class="hero__icon">
          <img :src="Elements.Icon18" alt="Icon">
        </span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['Elements'],
  }
</script>


<style lang="scss">

  .hero {
    margin-top: 34px;
    @media (max-width: 991px) {
      margin-top: 0;
    }
    &:not(:last-child) {
      margin-bottom: 70px;
      @media (max-width: 991px) {
        margin-bottom: 90px;
      }
    }
    &__content {
      position: relative;
      padding: 30px;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 504px;
      @media (max-width: 991px) {
        min-height: 402px;
      }
      @media (max-width: 600px) {
        min-height: 536px;
      }
    }

    &__body {
      max-width: 628px;
      @media (max-width: 991px) {
        max-width: 523px;
      }
    }

    &__span {
      display: block;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
      &:not(:last-child) {
        @media (max-width: 991px) {
          margin-bottom: 10px;
        }
      }
    }

    &__title {
      font-weight: 900;
      font-size: 48px;
      line-height: 68px;
      text-align: center;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 36px;
        line-height: 42px;
      }
      @media (max-width: 600px) {
        font-size: 30px;
        line-height: 38px;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      color: #FFFFFF;
      & span {
        display: block;
      }
      &:not(:last-child) {
        margin-bottom: 28px;
        @media (max-width: 991px) {
          margin-bottom: 16px;
        }
        @media (max-width: 600px) {
          margin-bottom: 24px;
        }
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px 20px;
      @media (max-width: 991px) {
         gap: 15px 30px;
      }
      @media (max-width: 600px) {
        gap: 10px 20px;
      }
    }

    &__item {
      flex: 0 0 176px;
      min-height: 41px;
      border-radius: 38px;
      @media (max-width: 991px) {
        min-height: 34px;
      }
      &_1 {
        @media (max-width: 991px) {
          flex: 0 0 161px;
        }
        @media (max-width: 600px) {
          flex: 0 0 157px;
        }
      }
      &_2 {
        @media (max-width: 991px) {
          flex: 0 0 151px;
        }
        @media (max-width: 600px) {
          flex: 0 0 157px;
        }
      }
    }

    &__icon {
      position: absolute;
      right: 15px;
      top: 15px;
      width: 47px;
      height: 47px;
      @media (max-width: 991px) {
        display: none;
      }
      & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 10px;
      font-weight: 400;
      font-size: 22px;
      line-height: 25px;
      text-align: center;
      color: #FFFFFF;
      border-radius: 38px;
      transition: background-color .3s ease, border-color .3s ease;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
      @media (max-width: 600px) {

      }
      &_1 {
        background-color: #F88A00;
        @media (any-hover: hover) {
        &:hover {
          color: #F88A00;
          background-color: #ffffff;
        }
        }
        &:active {
          color: #F88A00;
          background-color: #ffffff;
         transition-duration: .1s;
        }
      }
      &_2 {
        border: 3px solid #F88A00;
        @media (any-hover: hover) {
        &:hover {
          border-color: #ffffff;
        }
        }
        &:active {
          border-color: #ffffff;
         transition-duration: .1s;
        }
      }
    }
  }

</style>
