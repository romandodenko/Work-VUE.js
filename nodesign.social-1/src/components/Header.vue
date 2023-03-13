<template>

  <header class="header">
    <div class="header__container container">
      <router-link class="header__logo" to="/main">
        <img src="../assets/logo.png" loading="lazy" width="150" height="100" alt="Logo">
      </router-link>
      <div class="header__right">
        <div class="header__menu">
          <router-link class="header__logo header__logo_menu" to="/main">
            <img src="../assets/logo.png" loading="lazy" width="150" height="100" alt="Logo">
          </router-link>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <router-link class="nav__link" to="/main">
                  Home
                </router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/main#about">
                  About us
                </router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/main#benefits">
                  Benefits
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
        <span class="header__icon">
          <img src="../assets/18+.svg" loading="lazy" width="45" height="45" alt="Icon">
        </span>
      </div>
    </div>
  </header>

</template>

<script>

</script>

<style lang="scss">
  .header {
    padding: 15px 0;
    background-color: transparent;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
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

    &__logo {
      display: block;
      width: 70px;
      height: 70px;
      flex-shrink: 0;

      @media (max-width: 600px) {
        width: 50px;
        height: 50px;
      }

      &_menu {
        display: none;
        margin-right: auto;
        margin-bottom: 100px;

        @media (max-width: 991px) {
          display: block;
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
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      gap: 30px;

      @media (max-width: 991px) {
        gap: 25px;
      }

      @media (max-width: 600px) {
        gap: 20px;
      }
    }

    &__icon {
      display: block;
      flex: 0 0 45px;
      height: 45px;

      @media (max-width: 991px) {
        flex: 0 0 40px;
        height: 40px;
      }

      @media (max-width: 600px) {
        flex: 0 0 35px;
        height: 35px;
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

  .burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 52px;
    height: 25px;
    flex-shrink: 0;
    background-color: transparent;

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
      flex-wrap: wrap;
      gap: 15px 45px;

      @media (max-width: 991px) {
        flex-direction: column;
        row-gap: 50px;
      }
    }

    &__item {}

    &__link {
      font-size: 18px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;
      transition: opacity .3s ease;

      @media (max-width: 991px) {
        font-size: 21px;
      }

      @media (max-width: 600px) {
        font-size: 24px;
      }

      @media (any-hover: hover) {
        &:hover {
          opacity: .6;
        }
      }

      &:active {
        opacity: .2;
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