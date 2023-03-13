<template>
 <section class="hero">
    <div class="container">
        <div class="hero__content">
          <div class="hero__body">
            <span class="hero__span">
              Spela för skojs skull och ha det bra
            </span>
            <h1 class="hero__title">
              Spela spel nu och ha kul
            </h1>
            <a class="hero__link" href="#games">
              Spela
            </a>
            <p class="hero__text">
              <span>Spelen som erbjuds på sajten ger inte användarna en chans att vinna riktiga pengar.</span>
              Webbplatsen ger inte användare färdigheter som kan användas i riktiga spel. Spelen är tillgängliga för användare över 18 år.
            </p>
          </div>
        </div>
    </div>
 </section>
</template>

<script>

export default {

}

</script>

<style lang="scss">

  .hero {
    background-image: url(../assets/hero.png);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 991px) {
      background-image: url(../assets/hero_2.png);
    }
    @media (max-width: 600px) {
      background-image: url(../assets/hero_3.png);
    }
    &:not(:last-child) {
      margin-bottom: 80px;
    }
    &__content {
      display: flex;
      align-items: center;
      padding: 35px 0;
      min-height: 509px;
      @media (max-width: 1439px) {
        
      }
      @media (max-width: 1220px) {
        
      }
      @media (max-width: 991px) {
        min-height: 474px;
        padding: 25px 0;
      }
      @media (max-width: 600px) {
        min-height: 548px;
        padding: 45px 0;
      }
    }

    &__body {
      max-width: 773px;
      @media (max-width: 991px) {
        max-width: 523px;
      }
    }

    &__span {
      display: block;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 18px;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__title {
      font-weight: 900;
      font-size: 54px;
      line-height: 62px;
      max-width: 550px;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 36px;
        line-height: 41px;
      }
      @media (max-width: 600px) {
        font-size: 28px;
        line-height: 34px;
      }
      &:not(:last-child) {
        margin-bottom: 44px;
        @media (max-width: 991px) {
          margin-bottom: 32px;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: fit-content;
      min-width: 230px;
      min-height: 48px;
      background-color: #03A688;
      border: 1px solid #FFFFFF;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
      transition: border-color .3s ease, background-color .3s ease, color .3s ease;
      @media (max-width: 991px) {
        min-width: 211px;
        min-height: 48px;
      }
      &:not(:last-child) {
        margin-bottom: 69px;
        @media (max-width: 991px) {
          margin-bottom: 68px;
        }
        @media (max-width: 600px) {
          margin-bottom:76px;
        }
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

    &__text {
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 16px;
        line-height: 21px;
      }
      & span {
        display: block;
      }
    }
  }

</style>