<template>
  <div id="show-records">
     
    <h3>Edit Products</h3>

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
                                 <button type="button" name="view" class="btn btn-info"  v-on:click="edit(product)" > Edit</button>
                                  <!-- <button style="margin: 3% auto;" class="btn btn-success" >Save</button>  -->
                          </div>
                         </div>
                         <div class="col" ></div>
                        </div>
                    </div>
              </div>
              <h6 id="not" class="card-title"  >{{ product.url }}</h6>

                <!-- Edit Modal -->

                <!-- My Modal to perform  product Edit function -->
                      <div  id="editModal" class="modal mr-auto" tabindex="-1" role="dialog">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="editLabel">Edit Product</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <!-- modal form goes here -->


                                  <form class="container-fluid form-group">
                                    <div class="form-group">
                                        <div style="text-align: center; font-weight: bold; margin-bottom: 2%;">Product Details</div>

                                        <label> Name/Title</label>
                                        <input type="text" class="form-control" v-model="productForm.title" placeholder="Iphone 11 Pro max" required>


                                        <label style="width:25%;"> Product Description</label>
                                          <textarea class="form-control" name="product-description" id=""  v-model="productForm.productDescription" required></textarea>

                                        <label >Condition</label>
                                        <select  class="form-control" name="condition" v-model="productForm.productCondition" id="" required>
                                            <option v-for="condition in conditions">{{ condition }}</option>
                                        </select>
                                        <label> Price</label>
                                        <input type="text" class="form-control" v-model="productForm.price" required>
                                    </div>
                                </form>

                                <!-- modal form ends here -->
                              </div>
                              <div class="modal-footer">
                                <div class="row">
                                  <div class="col-1"></div>
                                  <div class="col-10">
                                  <div class="row">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" v-on:click="updateProduct()">Save changes</button>
                                  </div>
                                  </div>
                                  <div class="col-1"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>


                <!-- Edit Modal Ends -->



            </div>
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
       productForm:{
         title: '',
         productDescription: '',
         productCondition:'',
         price: ''
        },
        conditions: ['New', 'Used'],
        activeItem: null,
       
       
    }
  },
  methods: {
      edit(product){
        $('#editModal').modal('show')
        this.productForm = product;
        this.activeItem = product.id;
        // console.log(product.data);
      },
      updateProduct(){
         firebase.database().ref('products/' +  this.activeItem).update(this.productForm).then(function(){
          console.log('Product Updated Succesfully');
          alert('Product Updated Succesfully');
          $('#editModal').modal('hide')
        }).catch(function(error){
          console.error('Error in updating product:' , error)
        });
      }
  },
   created(){
      this.$http.get('https://ryse-83b28.firebaseio.com/products.json').then(function(data){
            return data.json();
            // this.products = data.body;  
            // console.log(this.products.value);  
            // console.log(this.products.key);                 
                       
      }).then(function(data){
        var productsArray = [];
        for (let key in data){
          data[key].id = key;
          productsArray.push(data[key]);
        }
        this.products = productsArray;
        this.spin = true;
      })
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
        
</style>
