<template>
  <div>
        
       <div id="slider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#slider" data-slide-to="0" class="active"></li>
                <li data-target="#slider" data-slide-to="1"></li>
                <li data-target="#slider" data-slide-to="2"></li>
                <li data-target="#slider" data-slide-to="3"></li>

            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/src/assets/bs/img/t3.png" class="d-block w-100" alt="...">                
                        <div class="carousel-caption d-none d-md-block">
                        <h4 >IOS & Android Phones</h4>
                        <p >Get new and Uk used Iphones and Android</p>
                        </div>                   
                </div>
                <div class="carousel-item">
                <img src="/src/assets/bs/img/lappi.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">                     
                            <div class="carousel-caption d-none d-md-block">
                            <h4>Laptops</h4>
                            <p>Get new and Uk budget friendly Laptops</p>
                            </div>                                           
                </div>
                </div>
                <div class="carousel-item">
                <img  src="/src/assets/bs/img/gamers.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">                     
                            <div class="carousel-caption d-none d-md-block">
                            <h4 >Consoles & Other Electronics</h4>
                            <p >Get electronics at budget friendly prices</p>
                            </div>                   
                </div>
                </div>
                 <div class="carousel-item">
                <img src="/src/assets/bs/img/okay.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                            <div class="carousel-caption d-none d-md-block">
                            <h4 >Phone & Laptop Accessories</h4>
                            <p >All phone and laptop chargers, cases, earphones etc are available at budget friendly prices</p>
                            </div>                                            
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
  </div>
</template>

<script>

export default {
  components: {
   

  },
  data () {
    return {
       
    }
  }
}
</script>

<style scoped>
#slider{
    margin: 0;
    font-family: Nunito Semibold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f4f4f4;
}
.carousel-caption{
    font-family: Nunito Semibold, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h4{
    font-weight: 800;
    font-size: xx-large;
    /* color: white; */
}
p{
    font-weight: 500;
    font-size: larger;
}

h4,
p{
    /* color: #222; */
    color: white;
}

@media screen and  (max-width: 399px) {
    #slider{
    margin-top: 18%;
    }
}
@media screen and (min-width: 400px) and (max-width: 700px) {
    #slider{
    margin-top: 11%;
    }
}
@media screen and (min-width: 701px) {
    #slider{
    margin-top: 4%;
    }
}


</style>
