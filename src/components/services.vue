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
                                        <h1 class="title text-center text-white">Services</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Services</li>
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
        <!-- Start Services Top Area -->
        <!--section class="section services-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="section-title">
                            <span>40 + YEAR OF EXPERIENCE</span>
                            <h2>Our Services & Skills</h2>
                        </div>
                        <div id="progress-bar" class="progress-bar-block">

                            <div id="bar-1" class="bar-main-container azure">
                                <div class="wrap">
                                    <div class="bar-container">
                                        <div class="bar"></div>
                                    </div>
                                    <label class="bar-label mb-0">Development</label>
                                    <div class="bar-percentage" data-percentage="46"></div>
                                </div>
                            </div>

                            <div id="bar-2" class="bar-main-container emerald">
                                <div class="wrap">
                                    <div class="bar-container">
                                        <div class="bar"></div>
                                    </div>
                                    <label class="bar-label mb-0">Customer</label>
                                    <div class="bar-percentage" data-percentage="94"></div>
                                </div>
                            </div>

                            <div id="bar-3" class="bar-main-container violet">
                                <div class="wrap">
                                    <div class="bar-container">
                                        <div class="bar"></div>
                                    </div>
                                    <label class="bar-label mb-0">Projects</label>
                                    <div class="bar-percentage" data-percentage="47"></div>
                                </div>
                            </div>

                            <div id="bar-4" class="bar-main-container yellow">
                                <div class="wrap">
                                    <div class="bar-container">
                                        <div class="bar"></div>
                                    </div>
                                    <label class="bar-label mb-0">Users Worldwide</label>
                                    <div class="bar-percentage" data-percentage="85"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="mt-lg-0 mt-5">
                            <img src="assets/images/services/services-02.jpg" alt="" class="img-fluid w-100 ">
                        </div>
                    </div>
                </div>
            </div>
        </section-->
        <!-- End Services Top Area -->
        <!-- Start Services Area -->
        <section class="section bg-light" id="services">
            <div class="container">
                <div class="section-title text-center z-index9">
                    <h2>Our Services</h2>
                </div>
                <div class="service-boxes-area">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="service in services" :key="service.id">
                            <div class="single-service-box mt-30 p-4 bg-white wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1s">
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
        <!-- Start Services Bottom Area -->
        <!--section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div>
                            <img src="assets/images/services/services-03.jpg" alt="" class="img-fluid w-100">
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="services-info-box">
                            <div class="section-title">
                                <h2 class="title position-relative pb-2 mb-3">Other Services</h2>
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#" class="text-dark">
                                        App Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-dark">
                                        UI / UX Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-dark">
                                        Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-dark">
                                        Web Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-dark">
                                        Analysis
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mt-4 text-lg-left text-center">
                            <h2>Creative Business Solutions</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section-->
        <!-- End Services Bottom Area -->
    </div>
</template>
<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'services',
        computed: {
            ...mapGetters({
              services: "landing/SERVICES",
            }),
          },
        mounted() {
            this.$store.dispatch("landing/GET_SERVICES");
            this.init();

        },
        methods: {
            init() {
                this.initFooterHeight();
                this.initPogressBar();
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
            initPogressBar() {
                $('.bar-percentage[data-percentage]').each(function () {
                    var progress = $(this);
                    var percentage = Math.ceil($(this).attr('data-percentage'));
                    $({ countNum: 0 }).animate({ countNum: percentage }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {
                            // What todo on every count
                            var pct = Math.floor(this.countNum) + '%';
                            progress.text(pct) && progress.siblings().children().css('width', pct);
                        }
                    });
                });
            }
        }
    }
</script>