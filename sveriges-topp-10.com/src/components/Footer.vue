<template>
  <section class="footer">
     <div class="footer__container container">
        <p class="footer__text">
          <span>Spelen som erbjuds på sajten ger inte användarna en chans att vinna riktiga pengar.</span>
          Webbplatsen ger inte användare färdigheter som kan användas i riktiga spel. Spelen är tillgängliga för användare över 18 år.
        </p>
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="#/terms">
              Villkor
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#/policy">
              Integritetspolicy
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#/cookie">
              Cookies sekretess
            </a>
          </li>
        </ul>
        <a class="footer__logo" href="#/main">
          <img src="../assets/logo.svg" width="178" height="44" alt="Logo">
        </a>
    </div>
  </section>
 </template>
 
 <script>
 
 export default {

 }
 
 </script>
 
 <style lang="scss">
 
 .footer {
    padding: 29px 0 34px 0;
    background-color: #010004;
    &__container {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: #FFFFFF;
      flex: 0 1 575px;
      & span {
        display: block;
      }
      @media (max-width: 991px) {
        flex: 0 1 342px;
        font-size: 14px;
        line-height: 18px;
      }
      @media (max-width: 600px) {
        flex: 0 1 100%;
      }
    }

    &__list {
      flex-shrink: 0;
      text-align: center;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 23px;
      }
    }

    &__link {
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      color: #FFFFFF;
      transition: color .3s ease;
      @media (max-width: 991px) {
        font-size: 14px;
        line-height: 16px;
      }
      @media (any-hover: hover) {
      &:hover {
        color: #03A688;
      }
      }
      &:active {
        color: #03A688;
        transition-duration: .1s;
      }
    }

    &__logo {
      display: block;
      flex: 0 0 178px;
      min-height: 68px;
      margin-left: auto;
      @media (max-width: 991px) {
        flex: 0 0 158px;
        height: 60px;
      }
      & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      }
    }
  }

 </style>