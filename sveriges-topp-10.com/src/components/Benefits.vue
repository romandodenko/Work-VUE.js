<template>
  <section class="benefits" id="benefits">
     <div class="container">
        <ul class="benefits__list">
          <li class="benefits__item" v-for="BenefitsData in BenefitsData">
            <span class="benefits__icon">
              <img :src="BenefitsData.icon" width="72" height="72" alt="Icon">
            </span>
            <h3 class="benefits__title">
              {{ BenefitsData.title }}
            </h3>
            <p class="benefits__text">
              {{ BenefitsData.text }}
            </p>
          </li>
        </ul>
    </div>
  </section>
 </template>
 
 <script>
 
 export default {
  props: ['BenefitsData'],
 }
 
 </script>
 
 <style lang="scss">
 
  .benefits {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      background-color: #03A688;
      border-radius: 10px;
      flex: 0 0 370px;
      padding: 25px 15px;
      @media (max-width: 991px) {
        flex: 0 0 342px;
        padding: 20px 10px;
      }
      @media (max-width: 600px) {
        flex: 0 1 100%;
        padding: 15px 10px;
      }
    }

    &__icon {
      display: block;
      width: 72px;
      height: 72px;
      margin: 0 auto;
      @media (max-width: 991px) {
        width: 65px;
        height: 66px;
      }
      & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__title {
      font-weight: 900;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: #FFFFFF;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }

 </style>