<template>

  <section class="popup">
    <div class="popup__close"></div>
    <div class="popup__body">
      <form class="popup__form" action="/">
        <div class="popup__image">
          <picture>
            <source media="(min-width: 320px)" srcset="../assets/popup.webp" type="image/webp">
            <img src="../assets/popup.png" loading="lazy" width="100" height="100" alt="Image">
          </picture>
        </div>
        <div class="popup__descr">
          <p class="popup__text">Our games are intended for an ADULT audience of 18 years and older. By clicking on the
            button you confirm your age.</p>
          <label>
            <input type="checkbox" name="number">
          </label>
          <label>
            <input type="text" name="years-old">
          </label>
          <router-link class="popup__button lt" to="/main">
            Agree
          </router-link>
        </div>
      </form>
    </div>
  </section>

</template>

<style lang="scss">
  .popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    transition: opacity .2s ease-in-out, visibility .2s ease-in-out, pointer-events .2s ease-in-out;
    height: 100vh;
  }

  .popup__close {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    z-index: 1;
  }

  .popup__body {
    position: relative;
    width: 404px;
    background-color: #460505;
    border-radius: 5px;
    z-index: 2;
    padding: 33px 20px;

    @media (max-width: 991px) {
      padding: 20px 15px;
    }

    @media (max-width: 600px) {
      width: 95%;
      padding: 15px 10px;
    }
  }

  .popup__image {
    flex: 0 0 89px;
    height: 96px;

    @media (max-width: 991px) {
      flex: 0 0 79px;
      height: 86px;
    }

    @media (max-width: 600px) {
      flex: 0 0 69px;
      height: 76px;
    }

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .popup__descr {
    flex: 1;
  }

  .popup__form {
    display: flex;
    gap: 15px;
    width: 100%;

    @media (max-width: 600px) {
      gap: 10px;
    }
  }

  .popup__form input {
    position: absolute;
    top: 0;
    left: -5000px;
  }

  .popup__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .popup__button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    min-width: 160px;
    min-height: 38px;
    width: fit-content;
    background-color: #F38300;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 28px;
    margin-left: auto;
    transition: color .3s ease, background-color .3s ease;

    @media (any-hover: hover) {
      &:hover {
        color: #F38300;
        background-color: #FFFFFF;
      }
    }

    &:active {
      color: #F38300;
      background-color: #FFFFFF;
      transition-duration: .1s;
    }

    @media (max-width: 991px) {
      min-width: 140px;
    }

    @media (max-width: 600px) {
      min-width: 120px;
    }
  }
</style>