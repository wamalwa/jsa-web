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
                                <div class="breadcrumb-content breadcrumb-content-1">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">{{ csi_details.title }}</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="text-white">
                                                <i class="mdi mdi-printer theme-light-color pr-2"></i>
                                                <a href="/csi">CSI</a>
                                            </li>
                                            <li class="theme-light-color active">{{ csi_details.title }}</li>
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
        <!-- Blog Details Start-->
        <section class="section section-blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 order-lg-2 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="1.5s">
                        <aside class="sidebar sidebar-padding border">
                            <div class="pb-2 mt-5 mb-3">
                                <ul class="blog-news list-unstyled">
                                    <li class="blog-item">
                                        <h6 class="post-news-title">News Categories</h6>
                                    </li>
                                </ul>

                                <div class="blog-news-content">
                                    <div class="blog-post-list">
                                        <ul class="list-unstyled">
                                            <li v-for="category in categories" :key="category.id">
                                                <div class="blog-news-info">
                                                    <a :href="`/news/${category.id}/${category.name}`" class="text-dark">
                                                        {{ category.name }}
                                                        <span class="float-right">{{ category.news_count }}</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-lg-8 order-lg-1 mt-lg-0 mt-4 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="1.5s">
                        <article class="blog-post-left border">
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="post-image">
                                        <a href="#">
                                            <img :src="csi_details.main_image_url" class="img-fluid img-thumbnail border-0">
                                        </a>
                                    </div>
                                    <div class="blog-post-content text-left mt-3">
                                        <h4 class="blog-post-title">
                                            <a href="#" class="text-left text-dark">
                                                {{ csi_details.description }}
                                            </a>
                                        </h4>
                                        <div class="post-event d-flex align-items-center my-3">
                                            <a href="#" class="blog-info-meta">{{ csi_details.date_created | formatDate }}</a>
                                        </div>
                                    </div>
                                    <div class="post-content">
                                        <p v-for="(paragraph, index) in paragraphs[0]" v-html="paragraph" :key="index"></p>
                                        <blockquote class="blockquote my-4">
                                            {{ csi_details.description }}
                                        </blockquote>
                                        <p v-for="(paragraph, index) in paragraphs[1]" v-html="paragraph" :key="index"></p>
                                    </div>
                                </div>

                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
        <!-- Blog Details Section End-->
    </div>
</template>
<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'csidetails',
        computed: {
            ...mapGetters({
              csi_details: "csi/CSI_DETAILS",
              categories: "news/CATEGORIES",
            }),
            paragraphs() {
                var junks = this.csi_details.story.split('</p>')
                const middleIndex = Math.ceil(junks.length / 2);

                if(junks.length > 1){
                    const firstHalf = junks.slice().splice(0, middleIndex);   
                    const secondHalf = junks.slice().splice(-middleIndex);
                    junks = [
                        firstHalf,
                        secondHalf
                    ]
                } else {
                    junks = [
                        junks,
                        []
                    ]
                }
                return junks
            }
          },
        mounted() {
            this.$store.dispatch("csi/GET_CSI_DETAILS", this.$route.params.id);
            this.$store.dispatch("news/GET_CATEGORIES");
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
        }
    }
</script>