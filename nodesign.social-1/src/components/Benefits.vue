<template>

  <section class="benefits" id="benefits">
    <div class="container">
      <ul class="benefits__list">
        <li class="benefits__item" v-for="BenefitsData in BenefitsData">
          <span class="benefits__icon">
            <img :src="BenefitsData.icon" loading="lazy" width="64" height="64" alt="Icon">
          </span>
          <h3 class="benefits__title">
            {{ BenefitsData.title }}
          </h3>
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
      margin-bottom: 100px;

      @media (max-width: 991px) {
        margin-bottom: 80px;
      }

      @media (max-width: 600px) {
        margin-bottom: 60px;
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

      @media (max-width: 1439px) {}

      @media (max-width: 1220px) {}

      @media (max-width: 991px) {
        flex: 0 0 342px;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__icon {
      display: block;
      width: 64px;
      height: 64px;
      margin: 0 auto;

      @media (max-width: 991px) {
        width: 58px;
        height: 58px;
      }

      @media (max-width: 600px) {
        width: 50px;
        height: 50px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__title {
      font-size: 20px;
      line-height: 1.4;
      color: #fff;
      font-weight: 700;
      text-align: center;

      @media (max-width: 991px) {
        font-size: 18px;
      }

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
</style>