<template>
    <div class="main-content">
        <!-- BradCrumb header Start-->
        <section class="inner-header-bg">
            <div class="container">
                <!-- Breadcrumb Start-->
                <div class="section-breadcrumb contact-breadcrumb">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 justify-content-center align-self-center pb-2">
                                <div class="breadcrumb-content">
                                    <div class="title-section">
                                        <h1 class="title text-center text-white">Contact Us</h1>
                                    </div>
                                    <div class="breadcrumb-nav">
                                        <ul class="breadcrumb-link text-center list-unstyled mb-0">
                                            <li class="text-white">
                                                <i class="mdi mdi-home theme-light-color pr-2"></i>
                                                <a href="/">Home</a>
                                            </li>
                                            <li class="theme-light-color active">Contact</li>
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
                                <p>
                                    We are located at St.Augustine Catholic Parish, Juja.
                                </p>
                                <div class="iframe-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0847291572672!2d37.01439501475386!3d-1.0987395991985405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463d30d01ad1%3A0x7a1fa86fe8c18f6!2sSt.%20Augustine%20Catholic%20Parish%2C%20Juja!5e0!3m2!1sen!2ske!4v1635103199222!5m2!1sen!2ske" class="responsive-iframe" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div class="footer-address mt-4">
                                <h6 class="font-20 mb-3"><strong>Head Office</strong></h6>
                                <ul class="list-unstyled">
                                    <li class="mb-3"><i class="mdi-map-marker mdi mr-2"></i><span>St. Augustine Catholic Parish</span></li>
                                    <li class="mb-3"><i class="mdi-map-marker mdi mr-2"></i><span>Opposite Jkuat, Gachororo road, Juja</span></li>
                                    <li class="mb-3"><i class="mdi-cellphone mdi mr-2"></i><span>+254 720 489 024</span></li>
                                    <li class="mb-3"><i class="mdi-cellphone mdi mr-2"></i><span>+254 740 863 398</span></li>
                                    <li class="mb-3">
                                        <i class="mdi-email mdi mr-2"></i><span><a href="mailto:jujacatholicselfhelpgroup@gmail.com" class="text-dark">jujacatholicselfhelpgroup@gmail.com</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div v-if="messageSending || messageSent" :class="`align-middle alert alert-${messageSending ? 'info' : 'success' }`">
                            <div class="spinner-grow m-2" role="status" v-if="messageSending">
                              <span class="sr-only">Loading...</span>
                            </div> 
                        <span >{{ messageSending ? `` : `Your message was sent!` }}</span></div>
                        <form class="wow fadeInRight" data-wow-duration="1s" @submit.prevent="submit" v-else>
                            <h5>Reach us quickly</h5>
                            <div class="row">
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" :class="{ 'hasError': $v.form.name.$error }" name="name" v-model="form.name" placeholder="Enter name">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input class="form-control" :class="{ 'hasError': $v.form.email.$error }" name="email" placeholder="Enter email" v-model="form.email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" :class="{ 'hasError': $v.form.message.$error }" rows="7" cols="25" placeholder="Message" v-model="form.message" ></textarea>
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

        <!-- Start Contact Area>
        <section class="section contact-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-12">
                        <div class="contact-main form-box">
                            <div class="contact-inner z-index9">
                                <div class="section-title">
                                    <h2 class="text-white">Let's Connect</h2>
                                </div>
                                <div class="contact-address mt-5">
                                    <h2 class="text-white">Visit our location</h2>
                                    <div class="address mt-2">
                                        <p class="text-white">
                                            300 King St, Melbourne<br>
                                            VIC 5000, Australia
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-email mt-5">
                                    <h2 class="text-white">Mail us</h2>
                                    <div class="address text-white mt-2">
                                        <p>hello@yourdomain.com</p>
                                        <p>+xx x xxxx xxxx</p>
                                    </div>
                                </div>
                                <div class="social-media-transparent  mt-5">
                                    <ul class="social-links list-unstyled d-flex justify-content-start">
                                        <li class="facebook">
                                            <a href="" title="Facebook" target="_blank">
                                                <i class="mdi mdi-facebook font-20"></i>
                                            </a>
                                        </li>
                                        <li class="twitter">
                                            <a href="" title="Twitter" target="_blank">
                                                <i class="mdi  mdi-twitter font-20"></i>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="" title="Instagram" target="_blank">
                                                <i class="mdi  mdi-google-plus font-20"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="mt-5">
                            <div class="row">
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" placeholder="Enter name" required="required">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" placeholder="Enter email" required="required">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="phone" value="" class="form-control" placeholder="Your Phone">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="company" value="" size="40" class="form-control" placeholder="Your Company">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" rows="7" cols="25" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="submit" class="btn theme-btn w-100 rounded">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <End Contact Area -->
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import { required, email, minLength } from "vuelidate/lib/validators";

        export default {
        name: 'contact',
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
                message: { required }
            }
        },
        mounted() {
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
            submit() {
                this.$v.form.$touch();
                if(this.$v.form.$error) return
                this.messageSending = true;
                this.$store.dispatch("feedback/SEND_MESSAGE", this.form).then((err, res) => {
                    this.messageSending = false;
                    this.messageSent = true;
                });
            },
        }
    }
</script>
<style type="text/css">
.text-bold {
  font-size: 24pt;
  font-weight: 500;
}

input,
textarea {
  background-color: #f3e5f5;
  padding: 8px 8px 8px 8px !important;
  width: 100%;
  border-radius: 5px !important;
  box-sizing: border-box;
  border: 1px dotted !important;
  border-left: 2px solid #187ba8 !important;
  color: #000 !important;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border-bottom: 2px solid #f146cc !important;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.card {
  border-radius: 0;
  border: none;
  position: relative;
}

.card1 {
  width: 50%;
}

.card2 {
  width: 50%;
  height: 700px;
  background-color: #e8eaf6;
}

#image {
  width: 80%;
  height: 300px;
  margin: auto;
}

#logo {
  position: absolute;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-control-placeholder {
  position: absolute;
  top: 0;
  padding: 7px 10px 7px 10px;
  transition: all 300ms;
  opacity: 0.5;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder {
  font-size: 80%;
  padding: 7px 0 0 0;
  transform: translate3d(0, -100%, 0);
  opacity: 1;
}

.btn-gray {
  border-radius: 50px;
  color: #fff;
  background-color: #bdbdbd;
  padding: 8px 40px;
}

.btn-gray:hover {
  color: #fff;
  background-color: #d32f2f;
}

a {
  color: #000;
}

a:hover {
  color: #000;
}

#google {
  width: 20px;
  height: 20px;
}

.bottom {
  bottom: 0;
  position: absolute;
  width: 100%;
}

.sm-text {
  font-size: 15px;
}

@media screen and (max-width: 1200px) {
  .card1 {
    width: 100%;
    padding: 10px 30px;
  }

  .bottom {
    position: relative;
  }

  .card2 {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px !important;
  }

  .card2 {
    height: 400px;
  }
}
</style>