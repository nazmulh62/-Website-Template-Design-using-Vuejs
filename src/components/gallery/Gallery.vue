<template>
    <div>
   <!-- header -->
    <header id="page-top" class="blog-banner">
        <!-- Start: Header Content -->
        <div class="container" id="blog">
            <div class="row blog-header text-center wow fadeInUp" data-wow-delay="0.5s">
                <div class="col-sm-12">
                    <!-- Headline Goes Here -->
                    <h3>Our Work</h3>

                    <h4><a href="index.html"> Home </a> > Work </h4>
                </div>
            </div>
            <!-- End: .row -->
        </div>
        <!-- End: Header Content -->
    </header>
    <!--/. header -->
 <!--/=================-->


<!-- Start: Work Section ==================-->
    <section class="work-section">
        <div class="container">
            <!-- Start: Heading -->
            <div class="base-header">
                <h3>See Our Work</h3>
                <p>Every home owner has a list of renovation, home repair, or home improvement projects he or she needs done both interior and exterior. Sometimes that list can get quite  e bathrooms </p>
            </div>
            <!-- End: Heading -->
            <!-- Start: Work filter -->
            <ul class="projects-titles">
                <li class="active" data-filter="*"><span>all</span>
                </li>
                <li data-filter=".web"><span>carpet</span>
                </li>
                <li data-filter=".design"><span>floor</span>
                </li>
                <li data-filter=".graphics"><span>house</span>
                </li>               
                <li data-filter=".clean"><span>pool</span>
                </li>
            </ul>
            <!-- End: Work filter -->
            <div class="row projects-list">   
                <div class="col-md-4 col-xs-12 web graphics">
                    <div class="single-project-item">
                        <div class="project-hover">
                            <div class="project_cnt">
                                <a class="project-link" href="../../../static/assets/images/work-1.jpg"><i class="icon-glyph-26"></i></a>
                                <h6><a href="gallery.html">Office cleaning</a></h6>
                                <span><a href="single-gallery.html">category : cleaning</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Work Item 1 -->
                <div class="col-md-4 col-xs-12 design clean">
                    <div class="single-project-item project-bg-2">
                        <div class="project-hover">
                            <div class="project_cnt">
                                <a class="project-link" href="../../../static/assets/images/work-2.jpg"><i class="icon-glyph-26"></i></a>
                                <h6><a href="gallery.html">House cleaning</a></h6>
                                <span><a href="single-gallery.html">category : cleaning</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Work Item 2 -->
                <div class="col-md-4 col-xs-12 web design">
                    <div class="single-project-item project-bg-3">
                        <div class="project-hover">
                            <div class="project_cnt">
                                <a class="project-link" href="../../../static/assets/images/work-3.jpg"><i class="icon-glyph-26"></i></a>
                                <h6><a href="gallery.html">Floor cleaning</a></h6>
                                <span><a href="single-gallery.html">category : cleaning</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Work Item 3 -->  

                <div class="col-md-6 col-xs-12 design web clean">
                    <div class="single-project-item project-bg-4">
                        <div class="project-hover">
                            <div class="project_cnt">
                                <a class="project-link" href="../../../static/assets/images/work-4.jpg"><i class="icon-glyph-26"></i></a>
                                <h6><a href="gallery.html">Pool cleaning</a></h6>
                                <span><a href="single-gallery.html">category : cleaning</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Work Item 4 -->
                <div class="col-md-6 col-xs-12 web graphics">
                    <div class="single-project-item project-bg-5">
                        <div class="project-hover">
                            <div class="project_cnt">
                                <a class="project-link" href="../../../static/assets/images/work-5.jpg"><i class="icon-glyph-26"></i></a>
                                <h6><a href="gallery.html">House cleaning</a></h6>
                                <span><a href="single-gallery.html">category : cleaning</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End: Work Item 5 -->  
            </div>
            <!--/.row -->
        </div>
        <!--/.container -->
    </section>
    <!-- End: Work Section =============-->
 
    </div>
</template>

<script>

export default {
    name: 'Gallery'   
}
</script>


<style scoped>
</style>