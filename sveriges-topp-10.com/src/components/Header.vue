<template>
    <header class="header">
      <div class="header__top">
        <div class="header__container container">
          <a class="header__logo" href="#/main">
            <img src="../assets/logo.svg" loading="laze" width="178" height="68" alt="Logo">
          </a>
          <span class="header__icon">
            <img src="../assets/18+.svg" width="44" height="44" alt="Icon">
          </span>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__menu">
            <a class="header__logo header__logo_menu" href="#/main">
              <img src="../assets/logo.svg" loading="laze" width="178" height="68" alt="Logo">
            </a>
            <nav class="nav">
              <ul class="nav__list">
                <li class="nav__item">
                  <a class="nav__link" href="#/main">
                    Huvudsida
                  </a>
                </li>
                <li class="nav__item">
                  <a class="nav__link" href="#/main">
                    Spel
                  </a>
                </li>
                <li class="nav__item">
                  <a class="nav__link" href="#/main">
                    Om oss
                  </a>
                </li>
                <li class="nav__item">
                  <a class="nav__link" href="#/main">
                    Fördelar
                  </a>
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
      </div>
    </header>
 </template>
 
 <script>
 
 export default {

 }

 </script>

<style lang="scss">

.header {

  &__container {
    display: flex;
    align-items: center;
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
      background-color: #121212;
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
    width: 178px;
    height: 68px;
    margin-left: auto;
    margin-right: -70px;
    @media (max-width: 991px) {
      width: 130px;
      height: 50px;
    }
    &_menu {
      display: none;
      margin-left: 0;
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

  &__icon {
    display: block;
    width: 44px;
    height: 44px;
    margin-left: auto;
    & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    }
  }

  &__top {
    padding: 15px 0;
  }

  &__bottom {
    padding: 15px 0;
    background-color: #03A688;
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

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px 30px;
    flex-wrap: wrap;
    @media (max-width: 991px) {
      flex-direction: column;
      row-gap: 50px;
    }
  }

  &__link {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    transition: color .3s ease;
    @media (max-width: 991px) {
      font-size: 21px;
      line-height: 24px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
      line-height: 27px;
    }
    @media (any-hover: hover) {
    &:hover {
      color: #2E2A29;
    }
    }
    &:active {
      color: #2E2A29;
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
  margin-left: auto;

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

.menu-active {
  opacity: 1;
  visibility: visible;
  pointer-events: visible;
}

</style>