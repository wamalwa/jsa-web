<template>
  <div class="main-content">
    <!-- BradCrumb header Start-->
    <section class="inner-header-bg">
      <div class="container">
        <!-- Breadcrumb Start-->
        <div class="section-breadcrumb">
          <div class="container">
            <div class="row">
              <div
                class="col-md-12 justify-content-center align-self-center pb-2"
              >
                <div class="breadcrumb-content">
                  <div class="title-section">
                    <h1 class="title text-center text-white">Get Loan</h1>
                  </div>
                  <div class="breadcrumb-nav">
                    <ul class="breadcrumb-link text-center list-unstyled mb-0">
                      <li class="text-white">
                        <i class="mdi mdi-home theme-light-color pr-2"></i>
                        <a href="/">Home</a>
                      </li>
                      <li class="theme-light-color active">Get Loan</li>
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
    <!-- Register Area Start-->
    <section class="login-form section bg-light">
      <div class="container bg-white">
        <div class="login-container">
          <div
            v-if="submitted"
            class="row justify-content-center"
            style="height: 50vh"
          >
            <div class="col-md-12 p-5">
              <div
                :class="`align-middle alert alert-${
                  submitting ? 'info' : 'success'
                }`"
              >
                <div class="spinner-grow m-2" role="status" v-if="submitting">
                  <span class="sr-only">Loading...</span>
                </div>
                <span>{{
                  submitting
                    ? ``
                    : `Your request was sent! \n Please check your Email for the link to download the loan application form. `
                }}</span>
              </div>
            </div>
          </div>
          <div v-else class="row justify-content-center">
            <div
              class="col-lg-6 bg-primary text-center text-white p-3 text-bold"
            >
              <h2>Loan Application Instructions</h2>
              I.<br />
              <p>Fill in the loan application request form on this page</p>
              II.<br />
              <p>
                Wait a few seconds for the system to complete the validation
              </p>
              III.<br />
              <p>
                If successful, you will be provided with a link through your email to download the
                loan application form
              </p>
              IV.<br />
              <p>
                Print the form, fill in your information as accurately as
                possible and present the filled form to the office during
                working hours.
              </p>
            </div>
            <div class="col-lg-6">
              <form class="form-body" @submit.prevent="submit">
                <div class="text-center section-title">
                  <h2 class="text-center">Loan Application Request</h2>
                </div>

                <div class="mt-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-floating mb-3">
                        <div
                          class="form-group mt-2"
                          :class="{ 'form-group--error': $v.form.name.$error }"
                        >
                          <input
                            type="text"
                            id="name"
                            v-model="form.name"
                            class="form-control"
                            autocomplete="off"
                          />
                          <label class="form-control-placeholder" for="name"
                            >Full Name</label
                          >
                          <span
                            class="error small"
                            v-if="$v.form.name.$error && !$v.form.name.required"
                            >Name is required</span
                          >
                          <span
                            class="error small"
                            v-if="$v.form.name.$error && !$v.form.name.min"
                            >Name is too short! Please enter your full
                            name</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <div
                          class="form-group mt-2"
                          :class="{
                            'form-group--error': $v.form.national_id.$error,
                          }"
                        >
                          <input
                            type="text"
                            id="national_id"
                            v-model="form.national_id"
                            class="form-control"
                            autocomplete="off"
                          />
                          <label
                            class="form-control-placeholder"
                            for="national_id"
                            >National ID or Passport</label
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.national_id.$error &&
                              !$v.form.national_id.required
                            "
                            >National ID or Passport is required</span
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.national_id.$error &&
                              !$v.form.national_id.min
                            "
                            >Enter a valid ID/Passport Number</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <div
                          class="form-group mt-2"
                          :class="{
                            'form-group--error': $v.form.date_of_birth.$error,
                          }"
                        >
                          <datepicker
                            v-model="form.date_of_birth"
                            autocomplete="off"
                            id="date_of_birth"
                          >
                          </datepicker>

                          <span
                            class="error small"
                            v-if="
                              $v.form.date_of_birth.$error &&
                              !$v.form.date_of_birth.required
                            "
                            >Date of Birth is required</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <div
                          class="form-group mt-2"
                          :class="{
                            'form-group--error': $v.form.phone_number.$error,
                          }"
                        >
                          <input
                            type="text"
                            id="phone_number"
                            v-model="form.phone_number"
                            class="form-control"
                            autocomplete="off"
                          />
                          <label
                            class="form-control-placeholder"
                            for="phone_number"
                            >Phone Number(254xxxxxxxxx)</label
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.phone_number.$error &&
                              !$v.form.phone_number.required
                            "
                            >Phone Number is required</span
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.phone_number.$error &&
                              !(
                                $v.form.phone_number.min &&
                                $v.form.phone_number.numeric
                              )
                            "
                            >Enter a valid Phone Number</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <div
                          class="form-group mt-2"
                          :class="{
                            'form-group--error': $v.form.email_address.$error,
                          }"
                        >
                          <input
                            type="text"
                            id="email_address"
                            v-model="form.email_address"
                            class="form-control"
                            autocomplete="off"
                          />
                          <label
                            class="form-control-placeholder"
                            for="email_address"
                            >Email Address</label
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.email_address.$error &&
                              !$v.form.email_address.required
                            "
                            >Email Address is required</span
                          >
                          <span
                            class="error small"
                            v-if="
                              $v.form.email_address.$error &&
                              !$v.form.email_address.email
                            "
                            >Enter a valid email address</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <button
                        type="submit"
                        class="btn theme-btn rounded text-center"
                        style="min-width: 200px"
                        :disabled="submitting"
                      >
                        <span v-if="!submitting">Submit Request</span>
                        <div
                          class="spinner-grow"
                          role="status"
                          v-if="submitting"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Register Area End-->
  </div>
</template>
<script>
import { required, email, minLength, numeric } from "vuelidate/lib/validators";
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";

export default {
  name: "loan",
  components: {
    Datepicker,
  },
  mounted() {
    this.init();
    $("div.vdp-datepicker > div > input").addClass("form-control");
    $("div.vdp-datepicker > div").append(
      '<label class="form-control-placeholder small" for="date_of_birth">Date of Birth</label>'
    );
  },
  data: () => ({
    submitting: false,
    submitted: false,
    form: {
      name: "",
      national_id: "",
      date_of_birth: "",
      phone_number: "",
      email_address: "",
    },
  }),
  validations: {
    form: {
      name: { required, min: minLength(4) },
      national_id: { required, min: minLength(7) },
      date_of_birth: { required },
      phone_number: { required, min: minLength(9), numeric },
      email_address: { required, email },
    },
  },
  methods: {
    init() {
      this.initFooterHeight();
    },
    initFooterHeight() {
      var footerHeight = $("footer").outerHeight();
      $(".main-content").css("margin-bottom", footerHeight);
    },
    submit() {
      console.log("pre validation");
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.submitting = true;

      this.$store
        .dispatch("loan/SUBMIT_REQUEST", this.form)
        .then((err, res) => {
          this.submitting = false;
          this.submitted = true;
        });
    },
  },
};
</script>
<style type="text/css">
#date_of_birth {
  background-color: #fff!important;
}
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
  transition: all 300ms;
  transform: translate3d(0, -100%, 0) !important;
}

.form-group--error > .form-control {
  border: 1px dotted #fc2d2d !important;
  border-bottom: 2px solid #fc2d2d !important;
}

.form-group--error > .form-control {
  border: 1px dotted #fc2d2d !important;
  border-bottom: 2px solid #fc2d2d !important;
}

.form-group--error > .form-control-placeholder,
.form-group--error > .error,
.form-group--error > .form-control {
  color: #fc2d2d !important;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder {
  font-size: 80%;
  padding: 7px 0 0 0;
  transform: translate3d(0, -100%, 0) !important;
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