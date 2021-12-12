<template>
 <div>
  <!-- header -->
    <header id="page-top" class="blog-banner">
        <!-- Start: Header Content -->
        <div class="container" id="blog">
            <div class="row blog-header text-center wow fadeInUp" data-wow-delay="0.5s">
                <div class="col-sm-12">
                    <!-- Headline Goes Here -->
                    <h3>Contact Us</h3>
                    <h4><a href="index.html"> Home </a> > Contact </h4>
                </div>
            </div>
            <!-- End: .row -->
        </div>
        <!-- End: Header Content -->
    </header>
    <!--/. header -->
 <!--/==========-->


    <!-- Start: Contact Section =================-->
    <section class="contact-page">
        <div class="container">
            <!-- Start: Heading -->
            <div class="base-header">
                <h3>Send Us Message</h3>
                <p>Every home owner has a list of renovation, home repair, or home improvement projects he or she needs done both interior and exterior. Sometimes that list can get quite  e bathrooms </p>
            </div>
            <!-- End: Heading -->
            <div class="row">
                <div class="col-md-6 col-xs-12 inner-contact">
                    <!--  Contact Form  -->
                    <div class="contact-form">
                        <form method="post" action="https://santhemes.com/blackgallery/revita/mailer.php" id="contact-form">
                            <div class="row">
                                <div class="col-lg-6 col-xs-12">
                                    <input class="con-field" name="name" id="name" type="text" placeholder="Name">
                                </div>
                                <div class="col-lg-6 col-xs-12">
                                    <input class="con-field" name="email" id="email" type="text" placeholder="Email">
                                </div>                            
                                <div class="col-lg-12 col-xs-12">
                                    <input class="con-field" name="phone" id="phone" type="text" placeholder="Phone">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-xs-12">
                                    <textarea class="con-field" name="message" id="message" rows="6" placeholder="Your Message"></textarea>
                                    <div class="submit-area">
                                        <input type="submit" id="submit-contact" class="btn-alt" value="Send Message">
                                        <div id="msg" class="message"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- End:Contact Form  -->
                </div>
                <div class="col-md-6 col-xs-12">
                     <!-- Google Map -->
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.023938894304!2d-81.38341548467582!3d19.324767486945657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2587a9a0b98737%3A0x38fe616bb6df631f!2s638+W+Bay+Rd%2C+Cayman+Islands!5e0!3m2!1sen!2sus!4v1549260798680" style="border:0" allowfullscreen="" height="361"></iframe>
                    </div>
                </div>
            </div>
         <!-- row /- -->
        </div>
        <!-- container /- -->
    </section>
    <!-- End : Contact Section ==================-->
 </div>
</template>

<script>

export default {
 name: 'Contact'   
}
</script>

<style scoped>
</style>
