<template>
      <header class="header">
        <div class="header__container container" v-for="Elements in Elements">
          <a class="header__logo" href="#/main">
            <img :src="Elements.LogoSite" alt="Logo">
          </a>
          <div class="header__menu">
            <a class="header__logo header__logo_menu" href="/main">
            <img :src="Elements.LogoSite" alt="Logo">
          </a>
          <nav class="nav">
            <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="#/main">
                Hjem
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#/main">
                Om os 
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#/main">
                Fordele
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#/main">
                Spil
              </a>
            </li>
          </ul>
          </nav>
            <button class="header__exit-menu"></button>
          </div>
          <div class="header__right">
            <button class="burger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
            </button>
            <span class="header__icon">
              <img :src="Elements.Icon18" alt="Icon">
            </span>
          </div>
        </div>
      </header>
</template>

<script>
  export default {
    props: ['Elements'],
  }
</script>


<style lang="scss">

  .header {
    padding: 15px 0;
    width: 118px;
    background-color: #2B2A2A;
    @media (max-width: 991px) {
      padding: 20px 0;
      background-color: transparent;
      width: 100%;
    }
    @media (max-width: 600px) {

    }
    &__container {
      padding: 0 10px;
      @media (max-width: 991px) {
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      @media (max-width: 600px) {
        padding: 0 10px;
      }
    }

    &__menu {
      @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #373737;
        z-index: 100;
        padding: 30px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        overflow: auto;
        transition: opacity .2s ease-in-out, visibility .2s ease-in-out, pointer-events .2s ease-in-out;
      }
      @media (max-width: 600px) {
        padding: 15px;
      }
    }
    &__logo {
      display: block;
      max-width: 103px;
      height: 38px;
      flex-shrink: 0;
      margin-bottom: 148px;
      @media (max-width: 1439px) {

      }
      @media (max-width: 1220px) {

      }
      @media (max-width: 991px) {
        max-width: 146px;
        height: 54px;
        margin-bottom: 0;
      }
      @media (max-width: 600px) {

      }
      &_menu {
        display: none;
        margin-bottom: 100px;
        margin-right: auto;
        @media (max-width: 1439px) {

        }
        @media (max-width: 1220px) {

        }
        @media (max-width: 991px) {
          display: block;
        }
        @media (max-width: 600px) {

        }
      }
      & img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
    }

    &__right {
      display: none;
      align-items: center;
      gap: 38px;
      @media (max-width: 1439px) {

      }
      @media (max-width: 1220px) {

      }
      @media (max-width: 991px) {
        display: flex;
      }
      @media (max-width: 600px) {
        gap: 20px;
      }
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

    &__exit-menu {
      display: none;
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: transparent;

      @media (max-width: 991px) {
        display: block;
        top: 30px;
        right: 30px;
      }

      @media (max-width: 600px) {
        top: 15px;
        right: 15px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 12px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #FFFFFF;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: 12px;
        right: 0;
        width: 100%;
        height: 1px;
        background-color: #FFFFFF;
        transform: rotate(-45deg);
      }
    }
  }
  .nav {

  &__list {
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 24px;
      @media (max-width: 1439px) {

      }
      @media (max-width: 1220px) {

      }
      @media (max-width: 991px) {
        margin-bottom: 50px;
      }
      @media (max-width: 600px) {

      }
    }
  }

  &__link {
    font-weight: 400;
    font-size: 17px;
    line-height: 1.3;
    color: #FFFFFF;
    transition: color .3s ease;
    @media (max-width: 1439px) {

    }
    @media (max-width: 1220px) {

    }
    @media (max-width: 991px) {
      font-size: 20px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
    }
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

  .burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 52px;
    height: 25px;
    background-color: transparent;
    flex-shrink: 0;

    @media (max-width: 991px) {
      display: flex;
    }

    @media (max-width: 600px) {
      width: 42px;
    }
    & span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #ffffff;
      margin-bottom: 5px;
      border-radius: 10px;

      &:first-child {
        margin-bottom: 5px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .menu-active {
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
  }
</style>
