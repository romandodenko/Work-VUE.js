<template>
  <section class="popup">
    <div class="popup__close"></div>
    <div class="popup__body">
      <form class="popup__form" action="/">
        <p class="popup__text">Vores spil er beregnet til et VOKSEN publikum på 18 år og ældre. Ved at klikke på
           knappen bekræfter du din alder.</p>
        <label>
          <input type="checkbox" name="number">
        </label>
        <label>
          <input type="text" name="years-old">
        </label>
        <a class="popup__button" href="#/main">Enig</a>
      </form>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>


<style lang="scss">

.popup {
  display: flex;
  align-items:center;
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
  width: 403px;
  background-color: #101010;
  border-radius: 5px;
  z-index: 2;
  padding: 35px 30px;

  @media (max-width: 991px) {
    padding: 25px 20px;
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
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 21px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 19px;
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
  min-width: 89px;
  min-height: 43px;
  background-color: #F88A00;
  margin: 0 auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  transition: color .3s ease, background-color .3s ease;
  @media (max-width: 991px) {
    font-size:18px;
    line-height: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 16px;
    min-height: 35px;
  }
  @media (any-hover: hover) {
  &:hover {
    color: #F88A00;
    background-color: #FFFFFF;
  }
  }
  &:active {
    color: #F88A00;
    background-color: #FFFFFF;
   transition-duration: .1s;
  }
}

</style>
