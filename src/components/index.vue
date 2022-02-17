<template>
  <div
    class="main-content"
    style="
      background-color: rgb(0, 204, 253);
      background-image: url(https://api.staugustineshg.org/api/v2/files/cool_bg.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height:100vh;
    "
  >
    <!-- Start Hero Section -->
    <section class="hero-section gradient-overlay" id="home">
      <div class="swiper-container main-slider">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="carousel in carousels"
            :key="carousel.id"
          >
            <div
              class="slide-inner bg-image" style="background-size: cover"
              :data-image-src="carousel.image_url"
            >
              <div class="slide-content text-white">
                <h2 class="mb-0 text-center">{{ carousel.image_caption }}</h2>
                <p class="text-white text-center">
                  {{ carousel.tag_line }}
                </p>
                <div class="text-center">
                  <a :href="carousel.cta_btn_url">
                    <button class="btn theme-btn">
                      <i :class="`mdi mdi-${carousel.cta_btn_icon}`"></i>
                      {{ carousel.cta_btn_text }}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
    </section>
    <!--End Hero Section -->
    <!-- Start About Area -->
    <section class="about-area section" id="aboutus">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-title section-title">
              <span>ABOUT US</span>
              <h2>Creative Business Solutions</h2>

              <div v-html="website.about"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="about-text pl-4">
              <h3>Our Mission</h3>
              <p>{{ website.mission }}</p>

              <h3>Our Vision</h3>
              <p>{{ website.vision }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Area -->
    <!-- Start Services Area -->
    <section class="section parallax-bg" id="services">
      <div class="container">
        <div class="section-title text-center z-index9">
          <h2 class="text-white">Our Services</h2>
        </div>
        <div class="service-boxes-area">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-6"
              v-for="service in services"
              :key="service.id"
            >
              <div
                class="single-service-box mt-30 p-4 bg-white wow fadeIn"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <div class="icon">
                  <i :class="`mdi mdi-${service.icon}`"></i>
                </div>
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Area -->
    <!-- Start Portfolio Area -->
    <section class="section portfolio-section" id="portfolio">
      <div class="container">
        <div class="section-title text-center z-index9">
          <span>OUR EVENTS</span>
          <h2>Dive into our amazing series of recent and upcoming events</h2>
        </div>
        <div
          class="d-flex justify-content-center wow fadeIn"
          data-wow-duration="1s"
        >
          <ul id="portfolio-filter" class="portfolio-filter filters mt-4 p-0">
            <li class="button-border list-inline-item">
              <a href="#" data-filter="*" class="pill-button active d-none"
                >Showing All Events</a
              >
            </li>
            <!--li class="button-border list-inline-item">
                            <a href="#" data-filter=".webdesign" class="pill-button">Web Design</a>
                        </li>
                        <li class="button-border list-inline-item">
                            <a href="#" data-filter=".mobiledesign" class="pill-button">Mobile Design</a>
                        </li>
                        <li class="button-border list-inline-item">
                            <a href="#" data-filter=".seo" class="pill-button">Seo</a>
                        </li>
                        <li class="button-border list-inline-item">
                            <a href="#" data-filter=".graphic" class="pill-button">Graphic</a>
                        </li-->
          </ul>
        </div>
        <div
          class="portfolio-items row no-gutters mt-4 wow fadeIn"
          data-wow-duration="1s"
        >
          <!-- Item 01 -->
          <div
            class="col-lg-4 col-sm-6 portfolio-item seo"
            v-for="evt in events"
            :key="evt.id"
          >
            <div class="image-border">
              <div class="portfolio-box scale-image">
                <img :src="evt.main_image_url" class="img-fluid" alt="" />
                <div
                  class="
                    portfolio-icon
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <a :href="evt.main_image_url" class="js-zoom-gallery">
                    <i class="mdi mdi-magnify-plus-outline"></i>
                  </a>
                </div>
                <div class="img-overlay text-white text-center">
                  <h5 class="mb-0">
                    {{ evt.name }} | <i class="mdi mdi-map-marker"></i>
                    {{ evt.venue }} | <i class="mdi mdi-calendar"></i>
                    {{ evt.event_date }} | <i class="mdi mdi-watch"></i>
                    {{ evt.event_time }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Area -->
    <!-- Start Testimonial Area -->
    <section class="section pt-0 testimonial-section" id="testimonial">
      <div
        class="testimonial-header-area bg-image"
        data-image-src="https://api.staugustineshg.org/api/v2/files/bg2.png"
      >
        <div class="container">
          <div class="text-center section-title">
            <span>OUR CLIENTS</span>
            <h2>What they says about us</h2>
          </div>
        </div>
      </div>
      <div class="testimonial-content-area wow fadeIn" data-wow-duration="1s">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="client-swiper-slider mt-4">
                <div class="client-container">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="testimonial in testimonials"
                      :key="testimonial.id"
                    >
                      <div class="testimonial-item bg-white">
                        <h6 class="client-title font-20">
                          {{ testimonial.name }}
                        </h6>
                        <span class="client-designation">{{
                          testimonial.designation
                        }}</span>
                        <figure
                          class="client-thumb"
                          style="width: 100px; height: 100px; margin: 20px auto"
                        >
                          <div
                            class="circle-avatar"
                            :style="`background-image:url(${testimonial.avatar})`"
                          ></div>
                        </figure>
                        <p class="mb-0">"{{ testimonial.message }}"</p>
                      </div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonial Area -->
    <!-- Start Jumbstrom Area -->
    <section class="section parallax-bg">
      <div class="container">
        <div class="z-index9 wow fadeIn" data-wow-duration="1s">
          <h2 class="text-white text-center">
            Get a loan now<br />
            and boost your business
          </h2>
          <div class="d-flex justify-content-center mt-4">
            <a href="loan">
              <button class="btn theme-btn">GET LOAN</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Jumbstrom Area -->
    <!-- Start Faq's Area -->
    <section class="section">
      <div class="container">
        <div class="text-center section-title">
          <span>FAQ's</span>
          <h2>Frequently Ask Questions</h2>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div
              id="accordion"
              class="accordion accordion-faq wow fadeInUp"
              data-wow-duration="1s"
            >
              <div
                class="card bg-white"
                v-for="(faq, index) in faqs"
                :key="faq.id"
              >
                <a
                  class="card-header text-dark bg-white py-4 collapsed"
                  data-toggle="collapse"
                  :href="`#collapse${faq.id}`"
                >
                  <span class="card-title">
                    <strong>{{ faq.question }}</strong>
                  </span>
                </a>
                <div
                  :id="`collapse${faq.id}`"
                  class="card-body collapse"
                  data-parent="#accordion"
                >
                  <p class="m-0">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Faq's Area -->
    <!-- Start Contact Area -->
    <section class="section bg-light" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-12 pb-3 message-box d-none">
            <div class="alert alert-danger"></div>
          </div>
          <div class="col-md-5">
            <div class="wow fadeInLeft" data-wow-duration="1s">
              <div class="section-heading">
                <h3>Contact Us</h3>
                <p>We are located at St.Augustine Catholic Parish, Juja.</p>
                <div class="iframe-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0847291572672!2d37.01439501475386!3d-1.0987395991985405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463d30d01ad1%3A0x7a1fa86fe8c18f6!2sSt.%20Augustine%20Catholic%20Parish%2C%20Juja!5e0!3m2!1sen!2ske!4v1635103199222!5m2!1sen!2ske"
                    class="responsive-iframe"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div class="footer-address mt-4">
                <h6 class="font-20 mb-3"><strong>Head Office</strong></h6>
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <i class="mdi-map-marker mdi mr-2"></i
                    ><span>St. Augustine Catholic Parish</span>
                  </li>
                  <li class="mb-3">
                    <i class="mdi-map-marker mdi mr-2"></i
                    ><span>Opposite Jkuat, Gachororo road, Juja</span>
                  </li>
                  <li class="mb-3">
                    <i class="mdi-cellphone mdi mr-2"></i
                    ><span>+254 720 489 024</span>
                  </li>
                  <li class="mb-3">
                    <i class="mdi-cellphone mdi mr-2"></i
                    ><span>+254 740 863 398</span>
                  </li>
                  <li class="mb-3">
                    <i class="mdi-email mdi mr-2"></i
                    ><span
                      ><a
                        href="mailto:jujacatholicselfhelpgroup@gmail.com"
                        class="text-dark"
                        >jujacatholicselfhelpgroup@gmail.com</a
                      ></span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div
              v-if="messageSending || messageSent"
              :class="`align-middle alert alert-${
                messageSending ? 'info' : 'success'
              }`"
            >
              <div class="spinner-grow m-2" role="status" v-if="messageSending">
                <span class="sr-only">Loading...</span>
              </div>
              <span>{{ messageSending ? `` : `Your message was sent!` }}</span>
            </div>
            <form
              class="wow fadeInRight"
              data-wow-duration="1s"
              @submit.prevent="submit"
              v-else
            >
              <h5>Reach us quickly</h5>
              <div class="row">
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ hasError: $v.form.name.$error }"
                      name="name"
                      v-model="form.name"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      :class="{ hasError: $v.form.email.$error }"
                      name="email"
                      placeholder="Enter email"
                      v-model="form.email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      :class="{ hasError: $v.form.message.$error }"
                      rows="7"
                      cols="25"
                      placeholder="Message"
                      v-model="form.message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <button type="submit" class="btn theme-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <p class="form-message"></p>
          </div>
        </div>
      </div>
    </section>
    <!-- Start Contact Area -->
  </div>
</template>
<script>
//WOW JS
import { WOW } from "wowjs";

// import Swiper styles
import "../assets/css/swiper.min.css";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);
//ISOTOP JS
import "../assets/js/jquery.isotope.min.js";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

//MAGNIFIC POPUP JS
import "magnific-popup/dist/jquery.magnific-popup.min.js";
import "magnific-popup/dist/magnific-popup.css";

import { mapGetters } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "index",
  data: () => ({
    messageSending: false,
    messageSent: false,
    form: {
      name: "",
      email: "",
      message: "",
    },
  }),
  validations: {
    form: {
      name: { required, min: minLength(3) },
      email: { required, email },
      message: { required },
    },
  },
  computed: {
    ...mapGetters({
      carousels: "landing/CAROUSELS",
      faqs: "landing/FAQS",
      website: "landing/WEBSITE",
      services: "landing/SERVICES",
      testimonials: "landing/TESTIMONIALS",
      events: "event/EVENTS",
    }),
  },
  mounted() {
    this.$store.dispatch("landing/GET_CAROUSELS").then(() => {
      this.loading = false;
      this.init();
    });

    this.$store.dispatch("landing/GET_FAQS").then(() => {
      this.initWowAnimation();
      this.initAccordian();
    });

    this.$store.dispatch("landing/GET_WEBSITE");

    this.$store.dispatch("landing/GET_SERVICES");

    this.$store.dispatch("landing/GET_TESTIMONIALS").then(() => {
      this.initTestimonialSlider();
    });

    this.$store.dispatch("event/GET_EVENTS").then(() => {
      this.initWowAnimation();
      this.initIsotop();
      this.initMagnificPopup();
      this.initScaleImage();
    });
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.messageSending = true;

      this.$store
        .dispatch("feedback/SEND_MESSAGE", this.form)
        .then((err, res) => {
          this.messageSending = false;
          this.messageSent = true;
        });
    },
    init() {
      this.initMainSlider();
      this.initBackgroundImage();
      //this.initWowAnimation();
      this.initAccordian();
      this.windowScroll();
      this.initTestimonialSlider();
      this.initFooterHeight();
      //this.initIsotop();
      //this.initMagnificPopup();
      //this.initScaleImage();
    },
    /*----MAIN ANIMATION-----*/
    initMainSlider() {
      var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
      };
      var swiper = new Swiper(".main-slider", swiperOptions);
    },
    /*----BACKGROUND IMAGE-----*/
    initBackgroundImage() {
      $(".bg-image").css("background", function () {
        var bg =
          "url(" + $(this).data("image-src") + ") no-repeat center center";
        return bg;
      });
    },
    initFooterHeight() {
      var footerHeight = $("footer").outerHeight();
      $(".main-content").css("margin-bottom", footerHeight);
    },
    /*----WOW ANIMATION-----*/
    initWowAnimation() {
      var length = $(".wow").length;
      if (length >= 1) {
        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
        });
        wow.init();
      }
    },
    /*----ONSCROLL JS-----*/
    windowScroll() {
      var self = this;
      $(window).on("scroll", function () {
        //self.initCounter();
      });
    },
    /*----ACCORDIAN-----*/
    initAccordian() {
      $(".question-card").on("click", function () {
        if ($(this).hasClass("active")) {
          $(".question-card").removeClass("active");
          $(this).removeClass("active");
        } else {
          $(".question-card").removeClass("active");
          $(this).addClass("active");
        }
      });
    },
    /*----TESTIMONIAL SLIDER-----*/
    initTestimonialSlider() {
      if ($(".swiper-container").length > 0) {
        var swiper = new Swiper(".client-container", {
          slidesPerView: 1,
          draggable: true,
          spaceBetween: 10,
          // init: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
        });
      }
    },
    /*----ISOTOP JS-----*/
    initIsotop() {
      var $container = $(".portfolio-items");
      $container.imagesLoaded(function () {
        $container.isotope({
          filter: "*",
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      });

      $(".portfolio-filter li a").click(function () {
        $(".portfolio-filter .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    },
    /*----MAGNIFIC POPUP JS-----*/
    initMagnificPopup() {
      if (".portfolio-items".length > 0) {
        $(".portfolio-items").each(function () {
          $(this).magnificPopup({
            delegate: ".js-zoom-gallery",
            type: "image",
            gallery: {
              enabled: true,
            },
          });
        });
      }
    },
    initScaleImage() {
      var controller = new ScrollMagic.Controller();
      var slides = $(".scale-image");
      for (var i = 0; i < slides.length; i++) {
        var image = $("img", slides[i]);
        var tween = TweenMax.to(image, 1, { scale: 1.2 });
        var scene = new ScrollMagic.Scene({
          triggerElement: slides[i],
          duration: "200%",
          triggerHook: "onEnter",
        })
          .setTween(tween)
          .addTo(controller);
      }
    },
  },
};
</script>

<style type="text/css">
.slide-inner {
    background-size: cover!important;;
}
div.circle-avatar {
  /* make it responsive */
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  /* div height to be the same as width*/
  padding-top: 100%;

  /* make it a circle */
  border-radius: 50%;

  /* Centering on image`s center*/
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;

  /* it makes the clue thing, takes smaller dimension to fill div */
  background-size: cover;

  /* it is optional, for making this div centered in parent*/
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.hasError {
  color: red;
  border-color: red;
}
</style>