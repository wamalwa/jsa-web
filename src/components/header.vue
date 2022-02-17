<template>
    <!-- Start Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top custom-nav sticky">
        <div class="container">
            <!-- LOGO -->
            <router-link class="navbar-brand brand-logo mr-4" to="/">
                    <img src="https://api.staugustineshg.org/api/v2/files/logo.png" alt="Logo" style="height: 70px;position: fixed;" class="img-fluid logo-light" >
                    <img src="https://api.staugustineshg.org/api/v2/files/logo.png" style="height: 70px;position: fixed;" class="img-fluid logo-dark" alt="">
            </router-link>
            <div class="navbar-collapse collapse justify-content-end" id="navbarCollapse">
                <ul class="navbar-nav navbar-center" id="mySidenav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/services">Our Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/news">News</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/csi">CSI</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/events">Events</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/faq">FAQ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/gallery">Gallery</router-link>
                    </li>
                    <!--li class="nav-item dropdown">
                        <a href="portfolio-two-column.html" class="nav-link dropdown-toggle" data-toggle="dropdown">Gallery</a>
                        <ul class="nav-bar submenu dropdown-menu list-unstyled p-0">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/portfolio2">CSI</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/portfolio3">Events</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/portfolio4">Four Column</router-link>
                            </li>
                        </ul>
                    </li-->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/loan">Get Loan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/portal">Portal</router-link>
                    </li>
                </ul>
                <div class="menu-close-btn"><i class="mdi mdi-close-circle-outline"></i></div>
            </div>
            <div class="header_btn">
                <button class="navbar-toggler ml-2 p-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
   
    export default {
        name: "template_header",
        methods: {

        }
    }</script>