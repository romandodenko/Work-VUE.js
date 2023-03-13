<template>

  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <router-link class="header__logo" to="/main">
          <picture>
            <source media="(min-width: 320px)" srcset="../assets/logo.webp" type="image/webp">
            <img src="../assets/logo.png" width="80" height="80" loading="lazy" alt="Logo">
          </picture>
        </router-link>
        <span class="header__icon">
          <img src="../assets/18+.svg" width="45" height="45" loading="lazy" alt="Logo">
        </span>
      </div>
      <div class="header__menu">
        <router-link class="header__logo header__logo_menu" to="/main">
          <picture>
            <source media="(min-width: 320px)" srcset="../assets/logo.webp" type="image/webp">
            <img src="../assets/logo.png" width="80" height="80" loading="lazy" alt="Logo">
          </picture>
        </router-link>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link class="nav__link" to="/main">
                Home
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#benefits">
                Benefits
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#about">
                About us
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#games">
                Games
              </router-link>
            </li>
          </ul>
        </nav>
        <button class="header__exit-menu"></button>
      </div>
      <button class="burger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

</template>

<style lang="scss">
  .header {
    padding: 20px 0;
    background-color: #032A56;

    @media (max-width: 600px) {
      padding: 15px 0;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
    }

    &__menu {
      display: flex;
      justify-content: flex-end;
      flex: 1;

      @media (max-width: 991px) {
        flex: none;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #001731;
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

    &__left {
      display: flex;
      align-items: center;
      gap: 30px;
      flex: 0 0 155px;

      @media (max-width: 991px) {
        gap: 25px;
      }

      @media (max-width: 600px) {
        gap: 20px;
      }
    }

    &__logo {
      display: block;
      flex: 0 0 80px;
      height: 80px;

      @media (max-width: 991px) {
        flex: 0 0 70px;
        height: 70px;
      }

      @media (max-width: 600px) {
        flex: 0 0 60px;
        height: 60px;
      }

      &_menu {
        display: none;
        margin-right: auto;
        margin-bottom: 100px;
        width: 80px;
        height: 80px;

        @media (max-width: 991px) {
          display: block;
          width: 70px;
          height: 70px;
        }

        @media (max-width: 600px) {
          width: 60px;
          height: 60px;
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
      background-color: #fff;
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

  .nav {

    &__list {
      display: flex;
      align-items: center;
      gap: 15px 55px;
      flex-wrap: wrap;

      @media (max-width: 991px) {
        flex-direction: column;
        row-gap: 50px;
      }
    }

    &__item {}

    &__link {
      font-size: 20px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      transition: color .3s ease;

      @media (max-width: 991px) {
        font-size: 22px;
      }

      @media (max-width: 600px) {
        font-size: 24px;
      }

      @media (any-hover: hover) {
        &:hover {
          color: #EC6F00;
        }
      }

      &:active {
        color: #EC6F00;
        transition-duration: .1s;
      }
    }
  }


  .menu-active {
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
  }
</style>