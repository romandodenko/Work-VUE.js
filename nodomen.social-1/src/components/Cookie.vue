<template>

  <section class="terms">
    <div class="terms__container container">
      <span class="terms__icon">
        <img src="../assets/18+.svg" loading="lazy" width="50" height="50" alt="Icon">
      </span>
      <h1>Cookie Policy for site</h1>

      <p>This is the Cookie Policy for site, accessible from site</p>

      <h2><strong>What Are Cookies</strong></h2>

      <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that
        are downloaded to your computer, to improve your experience. This page describes what information they gather,
        how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these
        cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

      <h2><strong>How We Use Cookies</strong></h2>

      <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry
        standard options for disabling cookies without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in
        case they are used to provide a service that you use.</p>

      <h2><strong>Disabling Cookies</strong></h2>

      <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how
        to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that
        you visit. Disabling cookies will usually result in also disabling certain functionality and features of the
        this site.</p>

      <h2><strong>The Cookies We Set</strong></h2>

      <ul>

        <li>
          <p>Site preferences cookies</p>
          <p>In order to provide you with a great experience on this site we provide the functionality to set your
            preferences for how this site runs when you use it. In order to remember your preferences we need to set
            cookies so that this information can be called whenever you interact with a page is affected by your
            preferences.</p>
        </li>

      </ul>

      <h2><strong>Third Party Cookies</strong></h2>

      <p>In some special cases we also use cookies provided by trusted third parties. The following section details
        which third party cookies you might encounter through this site.</p>

      <ul>

        <li>
          <p>We also use social media buttons and/or plugins on this site that allow you to connect with your social
            network in various ways. For these to work the following social media sites including; {List the social
            networks whose features you have integrated with your site?:12}, will set cookies through our site which may
            be used to enhance your profile on their site or contribute to the data they hold for various purposes
            outlined in their respective privacy policies.</p>
        </li>

      </ul>

      <h2><strong>More Information</strong></h2>

      <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you
        aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with
        one of the features you use on our site.</p>

    </div>
  </section>

</template>

<style lang="scss">
  .terms {
    padding-top: 100px;

    @media (max-width: 991px) {
      padding-top: 50px;
    }

    @media (max-width: 600px) {
      padding-top: 25px;
    }

    &__container {
      position: relative;
      padding-top: 100px;

      @media (max-width: 991px) {
        padding-top: 50px;
      }

      @media (max-width: 600px) {
        padding-top: 25px;
      }
    }

    &__icon {
      display: block;
      position: absolute;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;

      @media (max-width: 991px) {
        display: none;
      }

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    & h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.3;
      text-align: center;
      letter-spacing: -0.025em;
      color: #3AB8FF;

      @media (max-width: 991px) {
        font-size: 22px;
      }

      @media (max-width: 600px) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          margin-bottom: 15px;
        }
      }
    }

    & h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.3;
      text-align: center;
      letter-spacing: -0.025em;
      color: #3AB8FF;

      @media (max-width: 991px) {
        font-size: 22px;
      }

      @media (max-width: 600px) {
        font-size: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          margin-bottom: 15px;
        }
      }
    }

    & p {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.3;
      text-align: center;
      letter-spacing: 0.005em;
      color: #FFFFFF;

      @media (max-width: 600px) {
        font-size: 14px;
      }

      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          margin-bottom: 15px;
        }
      }
    }

    & ul {
      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          margin-bottom: 15px;
        }
      }
    }

    & li {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.3;
      text-align: center;
      letter-spacing: 0.005em;
      color: #FFFFFF;

      @media (max-width: 600px) {
        font-size: 12px;
      }

      &:not(:last-child) {
        margin-bottom: 30px;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 600px) {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>