<template>
  <section class="benefits" id="benefits">
    <div class="container">
      <ul class="benefits__list">
        <li class="benefits__item" v-for="BenefitsElements in BenefitsElements">
          <span class="benefits__icon">
            <img :src="BenefitsElements.BenefitsIcon" alt="Icon">
          </span>
          <h3 class="benefits__title">
            {{ BenefitsElements.title }}
          </h3>
          <p class="benefits__text">
            {{ BenefitsElements.text}}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['BenefitsElements'],
  }
</script>


<style lang="scss">

.benefits {

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
      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__icon {
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      width: 88px;
      height: 88px;
      @media (max-width: 991px) {
        width: 73px;
        height: 73px;
      }
      @media (max-width: 600px) {
        width: 75px;
        height: 75px;
      }
      & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      }
      &:not(:last-child) {
        margin-bottom: 16px;
        @media (max-width: 991px) {
          margin-bottom: 13px;
        }
        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }
    }

    &__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #FFFFFF;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: #FFFFFF;
    }

}

</style>
