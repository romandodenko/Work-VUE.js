<template>
  <section class="about" id="about">
     <div class="container">
        <h2 class="about__title">
          Om oss
        </h2>
        <h3 class="about__subtitle">
          Om vår sida och gratisspel
        </h3>
        <div class="about__content">
          <div class="about__descr">
            <p class="about__text">
              Vi tycker att du ska dra nytta av denna gratisspelsmöjlighet även om du planerar att fortsätta spela. Det finns ibland betydande skillnader mellan alla kända och helt nya spel. För det är definitivt värt det att prova åtminstone några omgångar för att testa utan att tänka på pengar. Genom att spela spel gratis får du reda på vilket spel som passar dig bäst. 
            </p>
            <p class="about__text">
              Du kan enkelt kontrollera hur ofta vinnande kombinationer utlöses i demoläge, hur bonusspelen fungerar och vilka symboler som ger dig flest vinster. Sidan kommer helt enkelt att ge dig virtuella pengar i spelet för detta, vilket räcker till många omgångar. Bläddra igenom recensionerna och spelen på vår sida och välj inte bara det spel som passar dig, utan även hemsida där du känner dig riktigt bekväm. Du behöver inte fatta ett bindande beslut, men du kan använda gratisläget när som helst. Att spela spel gratis kommer för alltid att förbli en del av vårt erbjudande eftersom vi anser att det är viktigt att alla besökare kan njuta av sin tid på sidan. Ekonomi behöver inte heller nödvändigtvis spela någon roll i spelet, eftersom alla har rätt att njuta av spelet.
            </p>
          </div>
          <div class="about__image">
            <img src="../assets/about.png" width="300" height="300" alt="Image">
          </div>
        </div>
    </div>
  </section>
 </template>
 
 <script>
 
 export default {

 }
 
 </script>
 
 <style lang="scss">
 
  .about {
    background-color: #2E2A29;
    padding: 22px 0 33px 0;
    @media (max-width: 991px) {
      padding: 32px 0;
    }
    &:not(:last-child) {
      margin-bottom: 80px;
    }
    &__title {
      font-weight: 900;
      font-size: 35px;
      line-height: 49px;
      text-transform: uppercase;
      color: #FDFDFD;
      @media (max-width: 1439px) {

      }
      @media (max-width: 1220px) {

      }
      @media (max-width: 991px) {
        font-size: 32px;
        line-height: 45px;
      }
      @media (max-width: 600px) {

      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-transform: capitalize;
      color: #FFFFFF;
      @media (max-width: 991px) {
        font-size: 20px;
        line-height: 23px;
      }
      &:not(:last-child) {
        margin-bottom: 16px;
        @media (max-width: 600px) {
          margin-bottom: 24px;
        }
      }
    }

    &__content {
      display: flex;
      gap: 20px;
      @media (max-width: 991px) {
        flex-direction: column;
        gap: 16px;
      }
      @media (max-width: 600px) {
        gap: 24px;
      }
    }

    &__descr {
      flex: 0 1 771px;
      @media (max-width: 991px) {
        flex: none;
        width: 100%;
      }
      @media (max-width: 600px) {

      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      @media (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
      }
      &:not(:last-child) {
        margin-bottom: 20px;
        @media (max-width: 991px) {
          margin-bottom: 15px;
        }
        @media (max-width: 600px) {
          margin-bottom: 10px;
        }
      }
    }

    &__image {
      flex: 0 0 374px;
      height: 325px;
      @media (max-width: 991px) {
        flex: none;
        width: 100%;
        margin: 0 auto;
        max-width: 342px;
        height: 297px;
      }
      @media (max-width: 600px) {
        max-width: 335px;
        height: 291px;
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

 </style>