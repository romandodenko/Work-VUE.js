<template>

  <section class="slot">
    <div class="container">
      <h1 class="slot__title">
        Icy gems
      </h1>
      <div class="slot__content">
        <iframe
          src="https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=icyGemsDesktop&ul=en&variant=UAT-demo&lobbyURL"
          frameborder="0"></iframe>
      </div>
    </div>
  </section>

</template>

<style lang="scss">
  .slot {
    margin-top: 80px;

    @media (max-width: 600px) {
      margin-bottom: 60px;
    }

    &:not(:last-child) {
      margin-bottom: 80px;

      @media (max-width: 600px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.3;
      color: #fff;
      font-weight: 400;

      @media (max-width: 991px) {
        font-size: 26px;
      }

      @media (max-width: 600px) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 24px;

        @media (max-width: 600px) {
          margin-bottom: 16px;
        }
      }
    }

    &__content {
      height: 800px;

      @media (max-width: 991px) {
        height: 550px;
      }

      @media (max-width: 600px) {
        height: 350px;
      }

      & iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>