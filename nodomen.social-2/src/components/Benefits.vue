<template>

  <section class="benefits" id="benefits">
    <div class="container">
      <ul class="benefits__list">
        <li class="benefits__item" v-for="DataBenefits in DataBenefits">
          <span class="benefits__icon">
            <img :src="DataBenefits.icon" loading="lazy" width="50" height="50" alt="Icon">
          </span>
          <h3 class="benefits__title">
            {{ DataBenefits.title }}
          </h3>
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
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__item {
      padding: 0 23px 40px 23px;
      flex: 0 0 370px;
      background-color: #200202;
      border-radius: 5px;

      @media (max-width: 991px) {
        flex: 0 0 342px;
        padding: 0 18px 30px 18px;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
        padding: 0 10px 20px 10px;
      }
    }

    &__icon {
      display: block;
      width: 75px;
      height: 75px;
      margin: 0 auto;
      margin-top: -10px;

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
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
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #FFFFFF;

      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
</style>