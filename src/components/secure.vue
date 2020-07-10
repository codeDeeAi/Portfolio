<template>
  <div id="body">
    
    <div class="container">
      <div class="row">
        <div  class="col"></div>
        <div class="col-lg-10 col-md-10 col-sm-10">
              <div class="row">

                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">RyseHub</h5>
                          <p class="card-text">Manage RyseHub - - Add,Edit and Delete Products</p>
                          <router-link to="/"  class="btn btn-primary">Manage</router-link>                          
                        </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">EMT stitches</h5>
                          <p class="card-text">Manage EMT stitches - - Manage Finances</p>
                          <router-link to="/"  class="btn btn-primary">Manage</router-link>  
                        </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col"></div>
      </div>

      <!-- Home Controls -->
      <div class="row">
          <button type="button" name="button" class="btn btn-primary"><router-link to="/"  class="btn btn-primary">Go Home</router-link> </button>
      </div>
    </div>
  </div>
</template>

<script>


import addProduct from './addProduct.vue';
import home from './home.vue';




export default {
  components: {
    'addProduct': addProduct,
    'home': home,
    
   
    

  },
  data () {
    return {
       
    }
  }
}
</script>

<style scoped>
        #body{
            margin: 12% auto;
        }
        h5,
        .btn
        {
        text-align: center;
        margin: auto;
        }
        .container{
        margin: auto;
        }
        .card{
        margin: 4% auto;
        }
        .card:hover{
        border-left: none;
        border-top: none;
        background-color: #f0ffff;
        }
        button{
            margin: 12% auto;
        }

</style>
