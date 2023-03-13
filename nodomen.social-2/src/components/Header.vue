<template>

  <header class="header">
    <div class="header__container container">
      <router-link class="logo" to="/main">
        <img src="../assets/logo.svg" loading="lazy" width="60" height="60" alt="Logo">
      </router-link>
      <div class="header__right">
        <div class="header__menu">
          <router-link class="logo logo_menu" to="/main">
            <img src="../assets/logo.svg" loading="lazy" width="60" height="60" alt="Logo">
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
                <router-link class="nav__link" to="/main#games">
                  Games
                </router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/main#about">
                  About us
                </router-link>
              </li>
            </ul>
          </nav>
          <button class="header__exit-menu"></button>
        </div>
        <span class="header__icon">
          <img src="../assets/18+.svg" loading="lazy" width="50" height="50" alt="Icon">
        </span>
        <button class="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #580707 0%, rgba(63, 3, 3, 0) 100%);
    padding: 15px 0;
    z-index: 10;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
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

      @media (max-width: 991px) {
        padding: 15px;
      }
    }

    &__right {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      align-items: center;
      gap: 38px;

      @media (max-width: 991px) {
        gap: 30px;
      }

      @media (max-width: 600px) {
        gap: 25px;
      }
    }

    &__icon {
      display: block;
      width: 41px;
      height: 41px;
      flex-shrink: 0;

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
        left: 30px;
      }

      @media (max-width: 600px) {
        top: 15px;
        left: 15px;
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
  flex-wrap: wrap;
  gap: 15px 55px;
  @media (max-width: 991px) {
flex-direction: column;
row-gap: 50px;
  }
}

&__item {
}

&__link {
  font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
transition: color .3s ease;
@media (max-width: 991px) {
  font-size: 22px;
line-height: 25px;
}
@media (max-width: 600px) {
  font-size: 24px;
line-height: 27px;
}
@media (any-hover: hover) {
&:hover {
  color: #FFE600;
}
}
&:active {
  color: #FFE600;
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