<template>

  <header class="header">
    <div class="header__container container">
      <button class="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="header__menu">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link class="nav__link" to="/main">Home</router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#about">About Us</router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#benefits">Advantages</router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/main#games">Games</router-link>
            </li>
          </ul>
        </nav>
        <button class="header__exit-menu"></button>
      </div>
      <span class="header__icon">
        <img src="../assets/18+.svg" loading="lazy" width="50" height="50" alt="Icon">
      </span>
    </div>
  </header>

</template>

<style lang="scss">
  .header {
    padding: 140px 0;
    background-color: #2B2A2A;
    width: 138px;

    @media (max-width: 991px) {
      padding: 15px 0;
      width: 100%;
      background-color: transparent;
    }

    @media (max-width: 600px) {}

    &__container {
      padding: 0;

      @media (max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0 15px;
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
        background-color: #101010;
        z-index: 100;
        padding: 100px 30px 30px 30px;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        overflow: auto;
        transition: opacity .2s ease-in-out, visibility .2s ease-in-out, pointer-events .2s ease-in-out;
      }

      @media (max-width: 600px) {
        padding: 60px 15px 15px 15px;
      }
    }

    &__icon {
      display: none;
      width: 50px;
      height: 50px;
      flex-shrink: 0;

      @media (max-width: 991px) {
        display: block;
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
        height: 2px;
        background-color: #FFFFFF;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        position: absolute;
        top: 12px;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: #FFFFFF;
        transform: rotate(-45deg);
      }
    }
  }

  .nav {

    &__list {}

    &__item {
      &:not(:last-child) {
        margin-bottom: 29px;

        @media (max-width: 991px) {
          margin-bottom: 55px;
        }
      }
    }

    &__link {
      display: block;
      width: 100%;
      padding: 6px 18px;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      color: #FFFFFF;
      background-color: transparent;
      transition: background-color .3s ease;

      @media (max-width: 991px) {
        font-size: 21px;
        line-height: 26px;
      }

      @media (max-width: 600px) {
        font-size: 24px;
        line-height: 28px;
      }

      @media (any-hover: hover) {
        &:hover {
          background-color: #3AB8FF;
        }
      }

      &:active {
        background-color: #3AB8FF;
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