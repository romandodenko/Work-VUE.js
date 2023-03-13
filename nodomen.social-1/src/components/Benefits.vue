<template>

  <section class="benefits" id="benefits">
    <div class="container">
      <ul class="benefits__list">
        <li class="benefits__item" v-for="DataBenefits in DataBenefits">
          <div class="benefits__top">
            <div class="benefits__wrapper-icon">
              <span class="benefits__icon">
                <img src="../assets/icon.svg" loading="lazy" width="47" height="47" alt="Icon">
              </span>
            </div>
            <h3 class="benefits__title">
              {{ DataBenefits.title }}
            </h3>
          </div>
          <p class="benefits__text">
            {{ DataBenefits.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
  export default {
    props: ['DataBenefits'],
  }
</script>

<style lang="scss">
  .benefits {
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
      padding: 15px 0 35px 0;
      border: 2px solid #3AB8FF;

      @media (max-width: 991px) {
        flex: 0 0 342px;
        padding: 15px 0;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__top {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-right: 15px;

      @media (max-width: 991px) {
        gap: 15px;
      }

      @media (max-width: 600px) {
        padding-right: 10px;
        gap: 10px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &__wrapper-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 85px;
      height: 54px;
      background-color: #3AB8FF;

    }

    &__icon {
      display: block;
      width: 47px;
      height: 47px;

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: #FFFFFF;
      padding: 0 20px;
      @media (max-width: 991px) {
        padding: 0 15px;
      }
      @media (max-width: 600px) {
        padding: 0 10px;
      }
    }
  }
</style>