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
                                        <h1 class="title text-center text-white">{{ defaultTitle }}</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="theme-light-color active">{{ defaultTitle }}</li>
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
        <!-- Blog Grid Section Start -->
        <section class="section" ref="csiAnchor">
            <div class="container">
                <div class="blog-post-grid">
                    <div class="row" v-if="csiPageLoading">
                        <div class="col-md-6 col-lg-4 pb-3" v-for="i in 3">
                            <vuekeleton class="skeloader" />
                        </div>
                    </div>
                    <div class="row" v-else>
                        <!-- Start Blog Item -->
                        <div class="col-md-6 col-lg-4" v-for="article in page">
                            <div class="blog-item border mb-5">
                                <router-link class="blog-post-image" :to="`/csidetail/${article.id}/${article.slug}`">
                                      <img :src="article.main_image_url" alt="blog-img" class="img-fluid w-100">
                                </router-link>
                                <div class="blog-post-info">
                                    <h4 class="blog-post-title">
                                        <router-link class="text-dark" :to="`/csidetail/${article.id}/${article.slug}`">
                                            {{ article.title }}
                                        </router-link>
                                    </h4>
                                    <p>{{ article.description }}</p>
                                    <div class="post-event d-flex align-items-center">
                                        <a href="#" class="blog-info-meta text-dark">{{ article.date_created | formatDate }}</a>
                                    </div>
                                    <router-link class="blog-read-more" :to="`/csidetail/${article.id}/${article.slug}`">
                                        <i class="mdi mdi-arrow-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Item -->
                    </div>

                    <div class="row" v-show="page.length === 0">
                        <div class="col-md-12 col-lg-12 pb-3 text-center">
                            <h2>No CSI articles for you today!</h2>
                        </div>
                    </div>
                </div>
                <!--div class="pagination  d-flex justify-content-center mt-lg-5">
                    <ul class="pagination mb-0">
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">
                                <i class="mdi mdi-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item text-center active">
                            <a href="#" class="page-link rounded-0">1</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">2</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">3</a>
                        </li>
                        <li class="page-item text-center">
                            <a href="#" class="page-link rounded-0">
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div-->
                <vuegination class="d-flex justify-content-center mt-lg-5" v-model="pagination.page" :records="count" @paginate="getPage"/>
            </div>
        </section>
        <!-- Blog Grid Section End -->
    </div>
</template>
<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'csi',
        data: () => ({
            defaultTitle: 'CSI',
            csiPageLoading: true,
            pagination: {
                page: 1,
                limit: 10
            },
        }),
        computed: {
            ...mapGetters({
              count: "csi/COUNT",
              page: "csi/PAGE",
            }),
          },
        mounted() {
            this.$store.dispatch("csi/GET_CSI_COUNT");
            this.$store.dispatch("csi/GET_PAGE", {
                start: (this.pagination.page - 1) * this.pagination.limit,
                limit: this.pagination.limit,
            }).then(() => {
                this.csiPageLoading = false;
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

                this.csiPageLoading = true;

                this.$store.dispatch("csi/GET_PAGE", {
                    start: (this.pagination.page - 1) * this.pagination.limit,
                    limit: this.pagination.limit,
                }).then(() => {
                    this.csiPageLoading = false;
                });
            },
            scrollToAnchor() {
                const csiAnchor = this.$refs.csiAnchor

                this.$smoothScroll({
                  scrollTo: csiAnchor,
                  duration: 10,
                  offset: -50,
                })
            }
        }
    }
</script>

<style type="text/css">
    .skeloader {
        width: 100%!important;
        height: 250px!important;
    }
</style>