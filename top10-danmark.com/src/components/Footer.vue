<template>
  <section class="footer" id="games">
    <div class="footer__container container" v-for="Elements in Elements">
      <div class="footer__left">
        <a class="footer__logo" href="#/main">
          <img :src="Elements.LogoSite" alt="Logo">
        </a>
        <p class="footer__text">
          <span>De spil, der tilbydes på siden, giver ikke brugerne en chance for at vinde rigtige penge.</span>
          Siden giver ikke brugerne færdigheder, der kan bruges i ægte gambling. Spillene er tilgængelige for brugere over 18 år.
        </p>
      </div>
      <ul class="footer__list">
        <li class="footer__item">
          <a class="footer__link" href="#/terms">
            Vilkår og betingelser
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#/policy">
            Fortrolighedspolitik
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#/cookie">
            Cookie politik
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['Elements'],
  }
</script>


<style lang="scss">

.footer {
  padding: 0 0 23px 0;
  @media (max-width: 1439px) {

  }
  @media (max-width: 1220px) {

  }
  @media (max-width: 991px) {
    padding: 0 0 34px 0;
  }
  @media (max-width: 600px) {
    padding: 0 0 27px 0;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__left {
    flex: 0 1 589px;
    @media (max-width: 991px) {
      flex: 0 1 339px;
    }
  }

  &__logo {
    display: block;
    width: 103px;
    height: 38px;
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

  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
    & span {
      display: block;
    }
  }

  &__list {
    margin-left: auto;
    text-align: right;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 21px;
    }
  }

  &__link {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
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
  }
}

</style>
