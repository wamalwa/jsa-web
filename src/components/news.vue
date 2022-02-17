<template>
  <div class="main-content">
    <!-- BradCrumb header Start-->
    <section class="inner-header-bg">
      <div class="container">
        <!-- Breadcrumb Start-->
        <div class="section-breadcrumb">
          <div class="container">
            <div class="row pb-3">
              <div
                class="col-md-12 justify-content-center align-self-center pb-2"
              >
                <div class="breadcrumb-content">
                  <div class="title-section">
                    <h1 class="title text-center text-white">
                      {{ defaultTitle }}
                    </h1>
                  </div>
                  <div class="breadcrumb-nav">
                    <ul class="breadcrumb-link text-center list-unstyled mb-0">
                      <li class="text-white">
                        <i class="mdi mdi-home theme-light-color pr-2"></i>
                        <a href="/">Home</a>
                      </li>
                      <li class="theme-light-color active">
                        {{ defaultTitle }}
                      </li>
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
    <section class="section" ref="newsAnchor">
      <div class="container">
        <div class="blog-post-grid">
          <div class="row" v-if="newsPageLoading">
            <div class="col-md-6 col-lg-4 pb-3" v-for="i in 3">
              <vuekeleton class="skeloader" />
            </div>
          </div>
          <div class="row" v-else>
            <!-- Start Blog Item -->
            <div class="col-md-6 col-lg-4" v-for="article in page">
              <div class="blog-item border mb-5">
                <router-link
                  class="blog-post-image"
                  :to="`/blogdetail/${article.id}/${article.slug}`"
                >
                  <img
                    :src="article.image_url"
                    alt="blog-img"
                    class="img-fluid w-100"
                  />
                </router-link>
                <div class="blog-post-info">
                  <h4 class="blog-post-title">
                    <router-link
                      class="text-dark"
                      :to="`/blogdetail/${article.id}/${article.slug}`"
                    >
                      {{ article.title }}
                    </router-link>
                  </h4>
                  <p>{{ article.main_tag_line }}</p>
                  <div class="post-event d-flex align-items-center">
                    <a href="#" class="blog-info-meta text-dark">{{
                      article.date_published | formatDate
                    }}</a>
                    <a href="#" class="blog-category text-dark">{{
                      article.category_name
                    }}</a>
                  </div>
                  <router-link
                    class="blog-read-more"
                    :to="`/blogdetail/${article.id}/${article.slug}`"
                  >
                    <i class="mdi mdi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- End Blog Item -->
          </div>

          <div class="row" v-show="page.length === 0">
            <div class="col-md-12 col-lg-12 pb-3 text-center">
              <h2>No news for you today!</h2>
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
        <vuegination
          class="d-flex justify-content-center mt-lg-5"
          v-model="pagination.page"
          :records="count"
          @paginate="getPage"
        />
      </div>
    </section>
    <!-- Blog Grid Section End -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "news",
  data: () => ({
    defaultTitle: "News",
    newsPageLoading: true,
    pagination: {
      page: 1,
      limit: 10,
    },
  }),
  computed: {
    ...mapGetters({
      count: "news/COUNT",
      page: "news/PAGE",
    }),
  },
  mounted() {
    this.$store.dispatch("news/GET_NEWS_COUNT");
    this.$store
      .dispatch("news/GET_PAGE", {
        start: (this.pagination.page - 1) * this.pagination.limit,
        limit: this.pagination.limit,
      })
      .then(() => {
        this.newsPageLoading = false;
      });

    this.init();
  },
  methods: {
    init() {
      this.initFooterHeight();
    },
    initFooterHeight() {
      var footerHeight = $("footer").outerHeight();
      $(".main-content").css("margin-bottom", footerHeight);
    },
    getPage() {
      this.scrollToAnchor();

      this.newsPageLoading = true;

      this.$store
        .dispatch("news/GET_PAGE", {
          start: (this.pagination.page - 1) * this.pagination.limit,
          limit: this.pagination.limit,
        })
        .then(() => {
          this.newsPageLoading = false;
        });
    },
    scrollToAnchor() {
      const newsAnchor = this.$refs.newsAnchor;

      this.$smoothScroll({
        scrollTo: newsAnchor,
        duration: 10,
        offset: -50,
      });
    },
  },
};
</script>

<style type="text/css">
.skeloader {
  width: 100% !important;
  height: 250px !important;
}
</style>