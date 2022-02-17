<template>
  <div class="main-content">
    <!-- BradCrumb header Start-->
    <section class="inner-header-bg">
      <div class="container">
        <!-- Breadcrumb Start-->
        <div class="section-breadcrumb portfolio-breadcrumb">
          <div class="container">
            <div class="row">
              <div
                class="col-md-12 justify-content-center align-self-center pb-2"
              >
                <div class="breadcrumb-content">
                  <div class="title-section">
                    <h1 class="title text-center text-white">
                      Gallery
                    </h1>
                  </div>
                  <div class="breadcrumb-nav">
                    <ul class="breadcrumb-link text-center list-unstyled mb-0">
                      <li class="text-white">
                        <i class="mdi mdi-home theme-light-color pr-2"></i>
                        <a href="/">Home</a>
                      </li>
                      <li class="theme-light-color active">Gallery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Breadcrumb End -->
      </div>
    </section>
    <!-- BradCrumb header End -->
    <!-- Start Portfolio Area -->
    <section class="section portfolio-section" id="portfolio">
      <div class="container">
        <div class="section-title text-center z-index9">
          <span>GALLERY</span>
          <h2>
            Here's a collection of pictures from our events, news, and CSI
          </h2>
        </div>
        <div
          class="d-flex justify-content-center wow fadeIn"
          data-wow-duration="1s"
        >
          <ul id="portfolio-filter" class="portfolio-filter filters mt-4 p-0">
            <li
              class="button-border list-inline-item"
            >
              <a
                href="#"
                data-filter="*"
                class="pill-button current"
                >All</a
              >
            </li>
            <li
              class="button-border list-inline-item"
            >
              <a
                href="#"
                data-filter=".news"
                class="pill-button"
                >News</a
              >
            </li>
            <li class="button-border list-inline-item">
              <a
                href="#"
                data-filter=".csi"
                class="pill-button"
                >CSI</a
              >
            </li>
            <li class="button-border list-inline-item">
              <a
                href="#"
                data-filter=".event"
                class="pill-button"
                >Events</a
              >
            </li>
            <li class="button-border list-inline-item">
              <a
                href="#"
                data-filter=".carousel"
                class="pill-button"
                >Carousel</a
              >
            </li>
          </ul>
        </div>
        <div
          class="portfolio-items row no-gutters mt-4 wow fadeIn"
          data-wow-duration="1s"
        >
          <!-- Gallery Item -->
          <div
            v-for="(picture, index) in pictures"
            :key="index"
            :class="`col-md-4 col-sm-6 portfolio-item ` + picture.category"
          >
            <div class="image-border">
              <div class="portfolio-box scale-image">
                <img :src="picture.url" class="img-fluid" alt="" />
                <div
                  class="
                    portfolio-icon
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <a :href="picture.url" class="js-zoom-gallery">
                    <i class="mdi mdi-magnify-plus-outline"></i>
                  </a>
                </div>
                <div class="img-overlay text-white text-center">
                  <h5 class="mb-0">{{ picture.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Area -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

//ISOTOP JS
import "../assets/js/jquery.isotope.min.js";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
//MAGNIFIC POPUP JS
import "magnific-popup/dist/jquery.magnific-popup.min.js";
import "magnific-popup/dist/magnific-popup.css";
export default {
  name: "gallery",
  data: () => ({
    galleryPageLoading: true,
    currentTab: "all",
  }),
  computed: {
    ...mapGetters({
      pictures: "gallery/PICTURES",
    }),
  },

  mounted() {
    this.$store.dispatch("gallery/GET_PICTURES").then(() => {
      this.galleryPageLoading = false;
      this.init();
    });
  },
  methods: {
    init() {
      this.initIsotop();
      this.initMagnificPopup();
      this.initScaleImage();
      this.initFooterHeight();
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

      $(".portfolio-filter a").click(function () {
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
    initFooterHeight() {
      var footerHeight = $("footer").outerHeight();
      $(".main-content").css("margin-bottom", footerHeight);
    },
  },
};
</script>


<style scoped>
.current {
  background: rgb(213, 58, 157);
  color: #fff;
  border: 2px solid rgb(213, 58, 157);
}
</style>