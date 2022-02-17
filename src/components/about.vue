<template>
    <div class="main-content">
        <!-- BradCrumb header Start-->
        <section class="inner-header-bg">
            <div class="container">
                <!-- Breadcrumb Start-->
                <div class="section-breadcrumb">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 justify-content-center align-self-center pb-2">
                                <div class="breadcrumb-content">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">About Us</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="theme-light-color active">About Us</li>
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
        <!-- About-bottom section Start-->
        <section class="section about-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7 col-sm-12">
                        <div class="section-title">
                            <span>ABOUT US</span>
                            <h2>Creative Solutions to Improve your Business</h2>
                        </div>
                        <p class="about-text mt-4" v-html="website.about"></p>
                        <div class="mt-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="about-list">
                                        <div class="about_series">
                                            <h4 class="font-20 theme-light-color">01.</h4>
                                        </div>
                                        <div class="about_desc section-title">
                                            <h5 class="font-20">Our Mission</h5>
                                            <p>{{ website.mission }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="about-list">
                                        <div class="about_series">
                                            <h4 class="font-20 theme-light-color">02.</h4>
                                        </div>
                                        <div class="about_desc section-title">
                                            <h5 class="font-20">Our Vision</h5>
                                            <p>{{ website.vision }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12">
                        <div class="about-inner-img mt-lg-0 mt-4">
                            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" class="img-fluid w-100">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-bottom section End-->
        <!-- Start Testimonial Area -->
        <section class="section pt-0 testimonial-section" id="testimonial-one">
            <div class="testimonial-header-area bg-image" data-image-src="https://api.staugustineshg.org/api/v2/files/bg2.png">
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
                                <div class="client-container" id="test-swiper">
                                    <div class="swiper-wrapper ">
                                        <div class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.id">
                                            <div class="testimonial-item bg-white">
                                                <h6 class="client-title font-20">{{ testimonial.name }}</h6>
                                                <span class="client-designation">{{ testimonial.designation }}</span>
                                                <figure class="client-thumb" style="width: 100px; height: 100px; margin: 20px auto;">
                                                    <div class="circle-avatar" :style="`background-image:url(${testimonial.avatar})`"></div>
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
        <!-- Funfacts Area Start -->
        <section class="section fun-facts bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-cube-outline"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number1" class="funfact-number">69</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">Projects</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-trophy-outline"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number2" class="funfact-number">45</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">Awards Winning</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-account-group-outline"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number3" class="funfact-number">212</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">Satisfied clients</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="d-flex align-items-center facts-item">
                            <div class="icon border-right">
                                <span class="theme-light-color mdi mdi-trending-up"></span>
                            </div>
                            <div class="funfacts-items">
                                <div>
                                    <span id="number4" class="funfact-number">64</span>
                                    <span class="plus-icon">+</span>
                                </div>
                                <p class="name">Industry Expertise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Funfacts Area End -->
        <!-- Start Faq's Area -->
        <section class="section">
            <div class="container">
                <div class="text-center section-title">
                    <span>FAQ's</span>
                    <h2>Frequently Ask Questions</h2>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div id="accordion" class="accordion accordion-faq wow fadeInUp" data-wow-duration="1s">
                            <div class="card bg-white" v-for="(faq, index) in faqs" :key="faq.id">
                                <a class="card-header text-dark bg-white py-4 collapsed" data-toggle="collapse" :href="`#collapse${faq.id}`">
                                    <span class="card-title">
                                        <strong>{{ faq.question }}</strong>
                                    </span>
                                </a>
                                <div :id="`collapse${faq.id}`" class="card-body collapse" data-parent="#accordion">
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
    </div>
</template>
<script>
    //WOW JS
    import { WOW } from 'wowjs';
    // import Swiper styles
    import '../assets/css/swiper.min.css';
    // core version + navigation, pagination modules:
    import Swiper, { Navigation, Pagination } from 'swiper';
    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination]);

    import { mapGetters } from "vuex";

    export default {
        name: 'about',
        mounted() {
            this.$store.dispatch("landing/GET_WEBSITE");

            this.$store.dispatch("landing/GET_TESTIMONIALS").then(() => {
                this.initTestimonialSlider();
            });

            this.$store.dispatch("landing/GET_FAQS").then(() => {
                this.initWowAnimation();
                this.initAccordian();
            });

            this.init();
        },
        computed: {
            ...mapGetters({
                faqs: "landing/FAQS",
                website: "landing/WEBSITE",
                testimonials: "landing/TESTIMONIALS",
            }),
          },
        methods: {
            init() {
                this.initWowAnimation();
                this.initBackgroundImage();
                this.initFooterHeight();
                this.initCounter();
                this.initTestimonialSlider();
            },
            /*----WOW ANIMATION-----*/
            initWowAnimation() {
                var length = $('.wow').length;
                if (length >= 1) {
                    const wow = new WOW({
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 0,
                    });
                    wow.init();
                }
            },
            /*----BACKGROUND IMAGE-----*/
            initBackgroundImage() {
                $(".bg-image").css('background', function () {
                    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
                    return bg;
                });
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
            /*----ACCORDIAN-----*/
            initAccordian() {
                $(".question-card").on('click', function () {
                    if ($(this).hasClass('active')) {
                        $('.question-card').removeClass('active');
                        $(this).removeClass('active')
                    } else {
                        $('.question-card').removeClass('active');
                        $(this).addClass('active')
                    }
                });
            },
            /*----TESTIMONIAL SLIDER-----*/
            initTestimonialSlider() {
                if ($('#test-swiper').length > 0) {
                    var swiper = new Swiper('#test-swiper', {
                        slidesPerView: 1,
                        draggable: true,
                        spaceBetween: 10,
                        // init: false,
                        pagination: {
                            el: '.swiper-pagination',
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
                        }
                    });
                }
            },
            /*----COUNTER-----*/
            initCounter() {
                $.fn.jQuerySimpleCounter = function (options) {
                    var settings = $.extend({
                        start: 0,
                        end: 100,
                        easing: 'swing',
                        duration: 400,
                        complete: ''
                    }, options);

                    var thisElement = $(this);

                    $({ count: settings.start }).animate({ count: settings.end }, {
                        duration: settings.duration,
                        easing: settings.easing,
                        step: function () {
                            var mathCount = Math.ceil(this.count);
                            thisElement.text(mathCount);
                        },
                        complete: settings.complete
                    });
                };


                $('#number1').jQuerySimpleCounter({ end: 69, duration: 3000 });
                $('#number2').jQuerySimpleCounter({ end: 45, duration: 3000 });
                $('#number3').jQuerySimpleCounter({ end: 212, duration: 2000 });
                $('#number4').jQuerySimpleCounter({ end: 64, duration: 3000 });
            }
        }
    }
</script>