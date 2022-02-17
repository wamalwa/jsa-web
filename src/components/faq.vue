<template>
    <div class="main-content">
        <!-- BradCrumb header Start-->
        <section class="inner-header-bg">
            <div class="container">
                <!-- Breadcrumb Start-->
                <div class="section-breadcrumb">
                    <div class="container">
                        <div class="row pb-3">
                            <div class="col-md-12 justify-content-center align-self-center pb-2">
                                <div class="breadcrumb-content">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">Frequently Asked Questions</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Frequently Asked Questions</li>
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
        <!-- Start Faq's Area -->
        <section class="section">
            <div class="container">
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
    import { mapGetters } from "vuex";

    export default {
        name: 'news',
        computed: {
            ...mapGetters({
              faqs: "landing/FAQS",
            }),
          },
        mounted() {
            this.$store.dispatch("landing/GET_FAQS").then(() => {
                this.initWowAnimation();
                this.initAccordian();
            });
           
            this.init();
        },
        methods: {
            init() {
                this.initFooterHeight();
            },
            initFooterHeight() {
                var footerHeight = $("footer").outerHeight();
                $('.main-content').css('margin-bottom', footerHeight);
            },
            getPage() {
                this.scrollToAnchor()

                this.newsPageLoading = true;

                this.$store.dispatch("news/GET_PAGE", {
                    start: (this.pagination.page - 1) * this.pagination.limit,
                    limit: this.pagination.limit,
                }).then(() => {
                    this.newsPageLoading = false;
                });
            },
            scrollToAnchor() {
                const newsAnchor = this.$refs.newsAnchor

                this.$smoothScroll({
                  scrollTo: newsAnchor,
                  duration: 10,
                  offset: -50,
                })
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
        }
    }
</script>

<style type="text/css">
    .skeloader {
        width: 100%!important;
        height: 250px!important;
    }
</style>