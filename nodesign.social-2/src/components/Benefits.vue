<template>

  <section class="benefits" id="benefits">
    <div class="container">
      <ul class="benefits__list">
        <li class="benefits__item" v-for="DataBenefits in DataBenefits">
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

      @media (max-width: 991px) {
        flex: 0 0 342px;
      }

      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__title {
      font-size: 22px;
      line-height: 1.3;
      color: #fff;
      font-weight: 600;
      text-align: center;

      @media (max-width: 600px) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      text-align: center;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
</style>