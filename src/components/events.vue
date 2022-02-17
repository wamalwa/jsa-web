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
                                        <h1 class="title text-center text-white">Our Events</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Our Events</li>
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
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="evt in events" :key="evt.id">
                        <div class="card text-white card-has-bg click-col" :style="`background-image:url(${evt.main_image_url});`">
                            <img class="card-img d-none" :src="evt.main_image_url" :alt="evt.title">
                            <div class="card-img-overlay d-flex flex-column">
                                <div class="card-body">
                                    <small class="card-meta mb-2">Thought Leadership</small>
                                    <h4 class="card-title mt-0 "><a class="text-white" herf="#">{{ evt.name }}</a></h4>
                                    <small><i class="mdi mdi-clock"></i> {{ evt.event_date | formatDateOne }}</small>
                                </div>
                                <div class="card-footer">
                                    <div class="media">
                                        <i class="mdi mdi-map-marker-outline" style="font-size: 30pt;"></i>
                                        <div class="media-body">
                                            <h6 class="my-0 text-white d-block">{{ evt.venue }}</h6>
                                            <small><i class="mdi mdi-phone"></i> RSVP: 0700 000 000</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'news',
        computed: {
            ...mapGetters({
              events: "event/EVENTS",
            }),
          },
        mounted() {
            this.$store.dispatch("event/GET_EVENTS");
           
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
            scrollToAnchor() {
                const newsAnchor = this.$refs.newsAnchor

                this.$smoothScroll({
                  scrollTo: newsAnchor,
                  duration: 10,
                  offset: -50,
                })
            },
        }
    }
</script>
<style lang="scss">
.skeloader {
    width: 100% !important;
    height: 250px !important;
}

.wrapper {
    margin: 10vh
}

//post card styles

.card {
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    overflow: hidden;
    border-radius: 20px;
    min-height: 450px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        min-height: 350px;
    }

    @media (max-width: 420px) {
        min-height: 300px;
    }

    &.card-has-bg {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        background-size: 120%;
        background-repeat: no-repeat;
        background-position: center center;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: inherit;
            -webkit-filter: grayscale(1);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
        }

        &:hover {
            transform: scale(0.98);
            box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
            background-size: 130%;
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

            .card-img-overlay {
                transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
                background: rgb(35, 79, 109);
                background: linear-gradient(0deg, rgba(4, 69, 114, 0.5) 0%, rgba(4, 69, 114, 1) 100%);
            }
        }
    }

    .card-footer {
        background: none;
        border-top: none;

        .media {
            img {
                border: solid 3px rgba(234, 95, 0, 0.3);
            }
        }
    }

    .card-meta {
        color: orange
    }

    .card-body {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover {
        .card-body {
            margin-top: 30px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        cursor: pointer;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35, 79, 109);
        background: linear-gradient(0deg, rgba(35, 79, 109, 0.3785889355742297) 0%, rgba(69, 95, 113, 1) 100%);
    }
}
</style>