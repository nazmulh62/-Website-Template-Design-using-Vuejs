<template>
      <div>
        <div class="header_topbar">
        <!-- Logo -->
        <div class="container">
            <div class="row">

                <div class="header_top_right list-unstyled">
                    <ul>
                        <li><i class="fa fa-envelope"></i>info@example.com</li>
                        <li><i class="fa fa-phone"></i>+234 567 234 875</li>
                        <li><i class="fa fa-globe"></i>1st Avenue, Boston</li>
                    </ul>
                </div>
                <div class="header_top_left">
                    <ul class="header_socil list-inline pull-left">
                        <li>
                            <a href="#" class="fa fa-facebook"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-twitter"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-linkedin"></a>
                        </li>
                        <li>
                            <a href="#" class="fa fa-google-plus"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class="navigation">
        <div class="container">
            <div class="row">
                <div class="logo col-xs-8 col-sm-2">
                    <router-link to="/"><img class="img-responsive" src="../../../static/assets/images/logo.png" alt="">
                    </router-link>
                </div>
                <div class="col-sm-8">
                    <div id="navigation">
                        <ul>
                            <li class="active"><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/service">Service</router-link></li>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <li><router-link to="/gallery">Gallery</router-link></li>
                            <li><router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                 <div class="header_btn col-sm-2">
                    <router-link to="/contact" class="more-link">Get a quote </router-link>
                </div>
            </div>
            <!--/ row -->
        </div>
        <!--/ container -->
    </div>
  </div>
</template>

<script>
export default{
 name: 'Header'           
}
</script>

<style scoped>

</style>
