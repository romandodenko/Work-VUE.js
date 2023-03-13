<template>

 <section class="popup">
    <div class="popup__close"></div>
    <div class="popup__body">
      <form class="popup__form" action="/">
          <div class="popup__image">
            <img src="../assets/popup.png" alt="Pic">
          </div>
        <p class="popup__text">Våra spel är avsedda för en VUXEN publik på 18 år och äldre. Genom att klicka på
           knappen bekräftar du din ålder.</p>
        <label>
          <input type="checkbox" name="number">
        </label>
        <label>
          <input type="text" name="years-old">
        </label>
        <a class="popup__button" href="#/main">Hålla med</a>
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
  width: 418px;
  background-color: #121212;
  border-radius: 5px;
  z-index: 2;
  padding: 0 0 20px 0;

  @media (max-width: 600px) {
    width: 95%;
    padding: 0 0 15px 0;
  }
}

.popup__image {
  width: 100%;
  height: 96px;
  margin: 0 auto;

  @media (max-width: 991px) {
    height: 85px;
  }

  @media (max-width: 600px) {
    height: 75px;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
    @media (max-width: 991px) {
      margin-bottom: 16px;
    }
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
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  padding: 0 15px;
  @media (max-width: 991px) {
    font-size: 16px;
    line-height: 17px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 15px;
    padding: 0 10px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

.popup__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  min-width: 160px;
  min-height: 39px;
  width: fit-content;
  background-color: #03A688;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  transition: color .3s ease, background-color .3s ease;
  @media (max-width: 991px) {
    min-width: 140px;
  }

  @media (max-width: 600px) {
    min-width: 120px;
    min-height: 35px;
    font-size: 16px;
    line-height: 16px;
  }
  @media (any-hover: hover) {
  &:hover {
    background-color: #fff;
    color: #03A688;
  }
  }
  &:active {
    background-color: #fff;
    color: #03A688;
    transition-duration: .1s;
  }
}
 
 </style>