<template>
  <div id="show-records">     
    <h3>Delete Products</h3>

    <!-- SearchBox -->
        <div class="row">
            <div class="col"></div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="searchbox">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search Product" aria-label="Search products" aria-describedby="button-addon2" v-model="search" >
                              <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>
                              </div>
                        </div>
                </div>
              </div>
            <div class="col"></div>
        </div>
    <!-- SearchBox Ends -->
  
      <!-- Product Template  -->
    <div class="container-fluid">
      
        <div class="row">
         
          <!-- Product Box -->
            <div id="productBox" v-for="product in filteredProducts"  class="col-lg-4 col-md-4 col-sm-6">
               <spinner v-if="!spin"></spinner>
                <div class="card" >
                    <img id="myimg" :src="product.url" class="card-img-top img-fluid" alt="..." >
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <article class="card-text">
                          {{ product.condition }}
                           {{ product.price }}
                            {{ product.productDescription| snippet }}
                            
                             
                        </article>
                        
                        <div class="row">
                         <div class="col"></div>
                         <div class="col-8">
                          <div class="row">
                                  <button style="margin: 3% auto;" class="btn btn-danger" v-on:click="deleteProd(product, product.id)" >Delete</button> 
                          </div>
                         </div>
                         <div class="col" ></div>
                        </div>
                    </div>
              </div>
              <h6 id="not" class="card-title"  >{{ product.url }}</h6>
            </div>
        </div>
        <!-- Controls -->

                          <div class="row">
                            <div class="col-5"></div>
                            <div class="col-2">
                                  <div class="row">
                                    <div class="col-6 control"> 
                                      <!-- Previous Button -->
                                      <button type="button" class="btn btn-secondary" v-on:click="prev()">Prev</button>
                                       <!-- <a ><button class="btn btn-secondary previous round mr-auto cont" v-on:click="prev()">Prev</button></a> -->
                                    </div>
                                    <div class="col-6 control">
                                      <!-- Next Button -->
                                      <button type="button" class="btn btn-secondary" v-on:click="next()">Next</button>
                                      <!-- <a class="btn btn-secondary next round mr-auto"><button class="cont" v-on:click="next()"></button></a> -->
                                    </div>
                                  </div>                                  
                            </div>
                            <div class="col-5"></div>
                          </div>
          
    </div>
   

    	


  </div>



  
</template>


<script>
import Vue from 'Vue';
import Vuex from 'Vuex';
import searchMixin from '../mixin/search';
import spinner from './spinner.vue';
import VueSimpleSpinner from 'vue-simple-spinner'
import firebase from 'firebase'
import { config } from './firebaseConfig'

var database = firebase.database();

export default {
  components: { 
      VueSimpleSpinner,
      spinner
   },
  data () {
    return {
       items: [],
       products: [],       
       search: '',
       spin: false,
       timer: '',
       x:0,
       y:30,
       
    }
  },
  methods: {
       prev(){
      if (this.x>0 && this.y>30) {
        this.x -= 30;
        this.y -= 30;
        return this.fetchProducts();
      } else{}
     
      },
      next(){
        this.x += 30;
        this.y += 30;
        return this.fetchProducts();
      },
      deleteProd(product){
      if(confirm('Are you sure?')){
        // console.log(record.id);
         firebase.database().ref('products/' +  product.id).remove().then(function(){
          console.log('Product Deleted Succesfully');
          alert('Product deleted');          
        }).catch(function(error){
          console.error('Error in deleting Product:' , error)
        });
       
      }
      else{}
    },

      fetchProducts: function(){
         this.$http.get('https://ryse-83b28.firebaseio.com/products.json').then(function(data){
            return data.json();
            // this.products = data.body;  
            // console.log(this.products.value);  
            // console.log(this.products.key);                 
                       
      }).then(function(data){
        var productsArray = [];
        var x = this.x;
        var y = this.y;
        for (let key in data){
          data[key].id = key;
          productsArray.push(data[key]);
        }
        this.products = productsArray.slice(x,y);
        this.spin = true;
      })
      }
  },
   created(){
     this.fetchProducts();
     this.timer = setInterval(this.fetchProducts, 3000);
  },
  computed: {
   

  
   },
   mixins:[
     searchMixin
   ]

  ,
  

}

</script>

<style scoped>
        body{
          margin: 0;
          font-family: Nunito Semibold;
          }
          #show-records{
            border-left: 1px solid #222;
          }

        img{
          width: 50px;
          height: 50px;
          margin: 2% auto;
        }
        h3{
              text-align: center;
              }

        .card{
                margin: 2% auto;
              }

        button{
          margin: auto;
        }
        h5
        ,h6{
          text-align: center;
        }
        .card:hover{
          background: #f0ffff;
          border-top: none;
          border-bottom: none;
        }
        #prod{
          color: white;
          text-decoration: none;
        }
        #prod:hover{
          text-decoration: none;
        }
        .searchbox{
          margin: 5% auto;
        }
        #not{
          display: none;
        }
        button a{
          color: white;
        }
        button a:hover{
         text-decoration: none;
        }
        article,
        .card-title{
          text-align: center;
        }
        .control button{
          margin: 4% auto;
        }
</style>
