<template>

  <div class="popup">
    <div class="popup__close"></div>
    <div class="popup__body">
      <form class="popup__form" action="/">
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
      </form>
    </div>
  </div>

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
    width: 378px;
    background-color: #230603;
    border-radius: 5px;
    z-index: 2;
    padding: 35px 20px;

    @media (max-width: 991px) {
      padding: 25px 15px;
    }

    @media (max-width: 600px) {
      width: 95%;
      padding: 15px 10px;
    }
  }

  .popup__form {
    width: 100%;
  }

  .popup__form input {
    position: absolute;
    top: 0;
    left: -5000px;
  }

  .popup__text {
    font-size: 18px;
    line-height: 1.3;
    color: #fff;
    font-weight: 400;

    @media (max-width: 600px) {
      font-size: 16px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .popup__button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: fit-content;
    min-width: 160px;
    min-height: 45px;
    background-color: #fff;
    border-radius: 34px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 18px;
    color: #000;
    font-weight: 400;
    transition: color .3s ease, background-color .3s ease;

    @media (max-width: 991px) {
      min-width: 140px;
      min-height: 40px;
    }

    @media (max-width: 600px) {
      min-width: 120px;
      font-size: 16px;
      line-height: 16px;
    }

    @media (any-hover: hover) {
      &:hover {
        color: #fff;
        background-color: #000;
      }
    }

    &:active {
      color: #fff;
      background-color: #000;
      transition-duration: .1s;
    }
  }
</style>