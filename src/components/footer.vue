<template>
    <div>
        <!-- Start Footer Area -->
        <footer class="text-white">
            <div class="container">
                <a class="footer-logo" href="#top" title="">
                    <h3 class="text-white">Juja St. Augustine Catholic Self Help Group</h3>
                </a>
                <ul class="social-links list-unstyled d-flex justify-content-center">
                    <li class="facebook bg-light">
                        <a href="https://facebook.com/staugustineshg" title="Facebook" target="_blank">
                            <i class="mdi mdi-facebook font-20" style="font-size: 30pt; color: #1877f2;"></i>
                        </a>
                    </li>
                    <li class="twitter bg-light">
                        <a href="https://twitter.com/staugustineshg" title="Twitter" target="_blank">
                            <i class="mdi  mdi-twitter" style="font-size: 30pt; color: #00acee;"></i>
                        </a>
                    </li>
                    <!--li class="instagram bg-light">
                        <a href="" title="Instagram" target="_blank">
                            <i class="mdi  mdi-instagram font-20"></i>
                        </a>
                    </li-->
                </ul>
                <nav>
                    <div class="menu-footer-menu-container mt-4">
                        <ul class="menu list-unstyled">
                            <li class="menu-item">
                                <a href="/">
                                    <span class="line">Home</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/services">
                                    <span class="line">Services</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/news">
                                    <span class="line">News</span>
                                </a>
                            </li>
                            <li class="menu-item ">
                                <a href="/events">
                                    <span class="line">Events</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/faqs">
                                    <span class="line">FAQs</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="/portal">
                                    <span class="line">Portal</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="copyright mt-4">
                    <p>
                        &copy; {{ new Date().getFullYear() }} St. Augustine SHG<br>Website by <span class="line"><a href="https://www.univeit.com" style="color: #fabffa;" target="_blank">Univeit</a></span>
                    </p>
                </div>
            </div>
        </footer>
        <!-- End Footer Area -->
        <!-- Back To Top -->
        <a href="#" class="back_top"> <i class="mdi mdi-chevron-up"></i></a>
    </div>
</template>
<script>
    export default {
        name: "template_footer",
        methods: {
        }
    }</script>
