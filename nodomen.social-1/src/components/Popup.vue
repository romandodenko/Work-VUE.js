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
        <router-link class="popup__button" to="/main">Agree</router-link>
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
    width: 340px;
    background-color: #101010;
    border-radius: 5px;
    z-index: 2;
    padding: 30px 25px;

    @media (max-width: 991px) {
      padding: 20px 10px;
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
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;

    @media (max-width: 991px) {}

    @media (max-width: 600px) {}

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  .popup__button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    min-width: 160px;
    min-height: 40px;
    margin: 0 auto;
    background-color: #3AB8FF;
    border-radius: 25px;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    width: fit-content;
    transition: color .3s ease, background-color .3s ease;

    @media (max-width: 991px) {
      min-width: 140px;
      min-height: 35px;
    }

    @media (max-width: 600px) {
      min-width: 120px;
      min-height: 30px;
    }

    @media (any-hover: hover) {
      &:hover {
        color: #3AB8FF;
        background-color: #ffffff;
      }
    }

    &:active {
      color: #3AB8FF;
      background-color: #ffffff;
      transition-duration: .1s;
    }
  }
</style>