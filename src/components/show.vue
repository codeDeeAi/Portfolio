<template>
  <div id="show-records" class="page">
    <spinner v-if="!spin" class="row mr-auto"></spinner>
    <h3>All Products</h3>

    <!-- SearchBox -->
        <div id="up" class="row">
            <div class="col"></div>
              <div class="col-8">
                    <div class="searchbox row">
                        <div class="input-group ">
                            <input id="search" type="text" class="form-control" placeholder="Search Product" aria-label="Search products" aria-describedby="button-addon2" v-model="search" >
                              <!-- <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Search</button>
                              </div> -->
                        </div>
                </div>
              </div>
            <div class="col"></div>
        </div>
    <!-- SearchBox Ends -->
      <!-- <vue-simple-spinner size="medium" /> -->
     
      <!-- Product Template  -->
    <div class="container-fluid">
        <div class="row">
          <!-- Product Box -->
            <div id="productBox" v-for="product in filteredProducts"  class="col-lg-4 col-md-4 col-sm-6">
              <router-link v-bind:to="'/store/' + product.id" >
                <div class="card" style="width: 15rem;">
                    <img id="myimg" :src="product.url" class="card-img-top img-fluid" alt="..." >
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <article class="card-text">                        
                            {{ product.productDescription| snippet }}
                             <article>
                              <span> <b> {{ product.productCondition }} || NGN {{ product.price }} </b> </span>
                           </article> 
                        </article>
                        
                        <!-- <div class="row">
                         <button type="button" name="view" class="btn btn-primary"> View</button>
                        </div> -->
                    </div>
              </div>
              <h6 id="not" class="card-title"  >{{ product.url }}</h6>
              </router-link>
            </div>
        </div>
          <div class="row">
            <button style="margin: 3% auto;" class="btn btn-primary" id="not"><router-link to = '/store' id="prod"> All products</router-link></button> 
          </div>
    </div>
                        <!-- Controls -->

                          <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4">
                                  <div class="row">
                                    <div class="col-6 control"> 
                                      <!-- Previous Button -->
                                      <button type="button" class="btn btn-success" v-on:click="prev()">Prev</button>
                                       <!-- <a ><button class="btn btn-secondary previous round mr-auto cont" v-on:click="prev()">Prev</button></a> -->
                                    </div>
                                    <div class="col-6 control">
                                      <!-- Next Button -->
                                      <button type="button" class="btn btn-primary" v-on:click="next()">Next</button>
                                      <!-- <a class="btn btn-secondary next round mr-auto"><button class="cont" v-on:click="next()"></button></a> -->
                                    </div>
                                  </div>                                  
                            </div>
                            <div class="col-4"></div>
                          </div>
   
        <cart></cart>
    	 <float v-on:click="showCart()" id="goUp"></float>


  </div>



  
</template>


<script>
import Vue from 'Vue';
import Vuex from 'Vuex';
import searchMixin from '../mixin/search';
import spinner from './spinner.vue';
import VueSimpleSpinner from 'vue-simple-spinner'
import 'vue-transitions-css';
import float from './float.vue';


export default {
  components: { 
      VueSimpleSpinner,
      spinner,
      float,
      cart,
   },
 
  data () {
    return {
       items: [],
       products: [],       
       search: '',
       spin: false,
       x:0,
       y:30,
       
    }
  },
  methods: {
      go(){
      return up;
      },
      prev(){
      if (this.x>0 && this.y>30) {
        this.x -= 30;
        this.y -= 30;
        return this.fetchData();
      } else{}
     
      },
      next(){
        this.x += 30;
        this.y += 30;
        return this.fetchData();
      },
      fetchData(){
          this.$http.get('https://ryse-83b28.firebaseio.com/products.json').then(function(data){
              return data.json();              
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
      this.fetchData();
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
        .page{
          margin: 0;
          font-family: Nunito Semibold;
          }
          #show-records{
            margin:auto ;
            width: 50%;
          }
          #search{
            width: 100%;
          }
        h3{
              text-align: center;
              margin: 5% auto;
              /* margin-top: 10%; */
              }
        .spin{
          width: 100%;
          padding-left: 0%;
          margin-left: 0%;       
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
          /* border-top: none;
          border-bottom: none; */
          border:0.5px solid #f4f4f4 ;
          -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.75);
          -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.75);
          box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.75);
        }

        .card{
                margin: 2% auto;
                height: 22rem;
                border-radius: 0.2rem;
              }
        .card img{
          height: 12rem;
        }
            
        #prod{
          color: white;
          text-decoration: none;
        }
        #prod:hover{
          text-decoration: none;
        }
        .searchbox{
          margin:auto auto 5% auto;
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
        .card,
        .card-body{
          border:none;
        }
        /* .page{
          position: fixed;
          width: inherit;
        } */
        a{
         text-decoration: none;  
         /* color: #6c757d; */
         color: #222; 
       }
        a:hover{
         /* color: #222; */
         color: #6c757d;
         border: 0.5px solid #f4f4f4 ;
         -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
         
       }
       .control button{
         margin: 4% auto;
       }
       .control{
          text-align: center;
        }
        .control a:hover{
          text-decoration: none;
          font-size: large;
          font-weight: bolder;
        }
        /* .cont{
          border: none;
          border-radius: 50%;
          width: 3rem;
          height: 2rem;
        } */
        .cont:hover{
          background: lightskyblue;
          -webkit-box-shadow: 5px 5px 5px -6px rgba(0,0,0,0.75);
                  -moz-box-shadow: 5px 5px 5px -6px rgba(0,0,0,0.75);
                  box-shadow: 5px 5px 5px -6px rgba(0,0,0,0.75);
        }
</style>
