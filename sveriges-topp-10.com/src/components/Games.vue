<template>
  <section class="slots" id="games">
     <div class="container">
      <h2 class="slots__title">
        Spel
      </h2>
      <h3 class="slots__subtitle">
        Våra gratisspel
      </h3>
      <ul class="slots__list">
        <li class="slots__item" v-for="GamesData in GamesData">
          <div class="slots__image">
            <a :href="GamesData.src">
              <img :src="GamesData.image" alt="Image">
            </a>
          </div>
          <a class="slots__play" :href="GamesData.src">
              Spela
            </a>
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
 
  .slots {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
    
    &__title {
      font-weight: 900;
      font-size: 35px;
      line-height: 49px;
      text-transform: uppercase;
      color: #FDFDFD;
      @media (max-width: 1439px) {

      }
      @media (max-width: 1220px) {

      }
      @media (max-width: 991px) {
        font-size: 32px;
        line-height: 45px;
      }
      @media (max-width: 600px) {

      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-transform: capitalize;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 20px;
        line-height: 23px;
      }
      &:not(:last-child) {
        margin-bottom: 16px;
        @media (max-width: 600px) {
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
      background: #2E2A29;
      border-radius: 10px 10px 5px 5px;
      overflow: hidden;
      padding-bottom: 20px;
      @media (max-width: 991px) {
        flex: 0 0 342px;
        padding-bottom: 15px;
      }
      @media (max-width: 450px) {
        flex: 0 1 100%;
      }
    }

    &__image {
      height: 180px;
      border-radius: 10px;
      overflow: hidden;
      @media (max-width: 991px) {
        height: 164px;
      }
      @media (max-width: 600px) {
        height: 161px;
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

    &__play {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: fit-content;
      margin: 0 auto;
      min-width: 125px;
      min-height: 38px;
      background: #03A688;
      border: 1px solid #FFFFFF;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
      transition: border-color .3s ease, background-color .3s ease, color .3s ease;
      @media (max-width: 991px) {
        min-width: 113px;
        min-height: 35px;
      }
      @media (max-width: 600px) {
        min-width: 110px;
        min-height: 34px;
      }
      @media (any-hover: hover) {
      &:hover {
        color: #03A688;
        background-color: #FFFFFF;
        border-color: #03A688;
      }
      }
      &:active {
        color: #03A688;
        background-color: #FFFFFF;
        border-color: #03A688;
        transition-duration: .1s;
      }
    }
  }

 </style>