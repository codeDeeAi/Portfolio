<template>
  <div id="add-item">
    <h2>Add New Product</h2>
      <form v-if="!submitted" class="container-fluid form-group">
        <div class="form-group">
            <div style="text-align: center; font-weight: bold; margin-bottom: 2%;">Product Details</div>

             <label> Name/Title</label>
             <input type="text" class="form-control" v-model="productForm.title" placeholder="Iphone 11 Pro max" required>
              
              <!-- Images -->
                <!-- First Image Row -->
                <div class="row">
                    <!-- First Image -->
                  <div class="col-6">
                      <label> Picture(s)</label>
                      <input type="file" accept="image/*" @change="onFileSelected"  class="form-control-file"  required> <button class="btn btn-secondary" v-on:click.prevent="upload" >Upload</button> <br>
                      <div>
                        <p>Progress: {{ this.uploadValue + '%'}}
                          <progress id="progress" :value="uploadValue" max="100"></progress> </p>
                          <div v-if="imageData!=[]">
                            <div class="row">
                                    <div  v-for="pic in picture" >
                                        <img class="preview" :src="picture" alt="">
                                  </div>
                            </div>                   
                    
                          </div>
                     </div>
                  </div>
                    <!-- First Image Ends -->

                    <!-- Second Image -->

                    <div class="col-6">

                        <label> Picture(s)</label>
                                    <input type="file" accept="image/*" @change="onFileSelected1"  class="form-control-file"  required> <button class="btn btn-secondary" v-on:click.prevent="upload1" >Upload</button> <br>
                                    <div>
                                      <p>Progress: {{ this.uploadValue1 + '%'}}
                                        <progress id="progress" :value="uploadValue1" max="100"></progress> </p>
                                        <div v-if="imageData1!=[]">
                                          <div class="row">
                                                  <div  v-for="pic in picture1" >
                                                      <img class="preview" :src="picture1" alt="">
                                                </div>
                                          </div>
                                          
                                            
                                        </div>
                                    </div>
                    </div>
                    <!-- Second Image Ends -->
                </div>
                <!-- First Image Row Ends  -->


                <!-- Second Image Row -->
                <div class="row">
                    <!-- Third Image -->
                  <div class="col-6">
                      <label> Picture(s)</label>
                      <input type="file" accept="image/*" @change="onFileSelected2"  class="form-control-file"  required> <button class="btn btn-secondary" v-on:click.prevent="upload2" >Upload</button> <br>
                      <div>
                        <p>Progress: {{ this.uploadValue2 + '%'}}
                          <progress id="progress" :value="uploadValue2" max="100"></progress> </p>
                          <div v-if="imageData2!=[]">
                            <div class="row">
                                    <div  v-for="pic in picture2" >
                                        <img class="preview" :src="picture2" alt="">
                                  </div>
                            </div>                   
                    
                          </div>
                     </div>
                  </div>
                    <!-- Third Image Ends -->

                    <!-- Fourth Image -->

                    <div class="col-6">

                        <label> Picture(s)</label>
                                    <input type="file" accept="image/*" @change="onFileSelected3"  class="form-control-file"  required> <button class="btn btn-secondary" v-on:click.prevent="upload3" >Upload</button> <br>
                                    <div>
                                      <p>Progress: {{ this.uploadValue3 + '%'}}
                                        <progress id="progress" :value="uploadValue3" max="100"></progress> </p>
                                        <div v-if="imageData3!=[]">
                                          <div class="row">
                                                  <div  v-for="pic in picture3" >
                                                      <img class="preview" :src="picture3" alt="">
                                                </div>
                                          </div>
                                          
                                            
                                        </div>
                                    </div>
                    </div>
                    <!-- Fourth Image Ends -->
                </div>
                <!-- Second Image Row Ends -->
            <!-- Images End -->

            <label style="width:25%;"> Product Description</label>
              <textarea class="form-control" name="product-description" id=""  v-model="productForm.productDescription" required></textarea>

             <label >Condition</label>
             <select  class="form-control" name="condition" v-model="productForm.productCondition" id="" required>
                 <option v-for="condition in conditions">{{ condition }}</option>
             </select>
             <label> Price</label>
             <input type="text" class="form-control" v-model="productForm.price" required>
        </div>

        <div class="form-controls" id="line">
          <button type="submit" class="btn btn-primary"  v-on:click.prevent="addProduct">Submit</button>
            <!-- <button class="btn btn-success" v-on:click="addProduct(); upload()">Add Product</button> -->
        </div>

    </form>

     <div v-if="submitted">
          <p>Record Submitted</p>
          <button class="btn btn-secondary" v-on:click="addNew" >Add New</button>
    </div>
   
  </div>
</template>

<script>

import axios from 'axios'
import firebase from 'firebase'
import { config } from './firebaseConfig'



export default {
  // name: upload ,
  components: {
    

  },
  data () {
    return {
       imageData:null, 
       imageData1:null,
       imageData2:null, 
       imageData3:null,      
       picture:null,
       picture1:null,
       picture2:null,
       picture3:null,
       uploadValue: '',
       uploadValue1: '',
       uploadValue2: '',
       uploadValue3: '',
       productForm:{
           title:'',
           productImage: this.picture,
           productDescription: '',
           productCondition:'',
           price:''
        
       },
       conditions: ['New', 'Used'],
       submitted: false,
    }
  },
  methods: {
      onFileSelected(event){
            this.uploadValue= 0;
            this.picture=null;
            console.log(event);
            this.imageData = event.target.files[0];
      },
      onFileSelected1(event){
            this.uploadValue1= 0;
            this.picture1=null;
            console.log(event);
            this.imageData1 = event.target.files[0];
      },
      onFileSelected2(event){
            this.uploadValue2= 0;
            this.picture2=null;
            console.log(event);
            this.imageData2 = event.target.files[0];
      },
      onFileSelected3(event){
            this.uploadValue3= 0;
            this.picture3=null;
            console.log(event);
            this.imageData3 = event.target.files[0];
      },
      upload(){
        this.picture= [];
        const storageRef=firebase.storage().ref('$Name: ' + ' ' + this.imageData.name ).put(this.imageData);
        storageRef.on('state_changed', snapshot=>{
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=> {this.uploadValue =100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture.push(url);         
        });
        }
        );
         console.log(this.picture);
         console.log(this.imageData);
       
      },
      upload1(){
        this.picture1= [];
        const storageRef=firebase.storage().ref('$Name: ' + ' ' + this.imageData1.name ).put(this.imageData1);
        storageRef.on('state_changed', snapshot=>{
          this.uploadValue1=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=> {this.uploadValue1 =100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture1.push(url);         
        });
        }
        );
         console.log(this.picture1);
         console.log(this.imageData1);
       
      },
      upload2(){
        this.picture2= [];
        const storageRef=firebase.storage().ref('$Name: ' + ' ' + this.imageData2.name ).put(this.imageData2);
        storageRef.on('state_changed', snapshot=>{
          this.uploadValue2=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=> {this.uploadValue2 =100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture2.push(url);         
        });
        }
        );
         console.log(this.picture2);
         console.log(this.imageData2);
       
      },
      upload3(){
        this.picture3= [];
        const storageRef=firebase.storage().ref('$Name: ' + ' ' + this.imageData3.name ).put(this.imageData3);
        storageRef.on('state_changed', snapshot=>{
          this.uploadValue3=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
        ()=> {this.uploadValue3 =100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture3.push(url);         
        });
        }
        );
         console.log(this.picture3);
         console.log(this.imageData3);
       
      },
      addProduct(event){
          this.$http.post('https://ryse-83b28.firebaseio.com/products.json',{
            title: this.productForm.title,
            productDescription:  this.productForm.productDescription ,
            productCondition: this.productForm.productCondition,
            price: this.productForm.price,
            url: this.picture,
            url1: this.picture1,
            url2: this.picture2,
            url3: this.picture3,
            date: Date()
          }).then(function(data) {
             console.log(data);             
             this.submitted = true;
             alert('Product Added');
              if(this.submitted= true){
                console.log('Submitted');
                  this.productForm.title='';
                  this.productForm.productImage='' ;
                  this.productForm.productDescription= '';
                  this.productForm.productCondition='';
                  this.productForm.price='';
                  this.uploadValue = 0;
                  this.uploadValue1 = 0;
                  this.uploadValue2 = 0;
                  this.uploadValue3 = 0;
          } else{
            alert('Network Error');
          }
          });
         
      },
      addNew(e){
         this.submitted = false;
         
  
      }
  },
}
</script>

<style scoped>
        form{
          /* background: #00acee; */
          width: 90%;
          overflow-x: hidden;
          /* border: 1px solid black;
          border-radius: 5px; */
          margin:auto;
          padding:4%;

        }
        #add-item{
          border-left: 1px solid #222;
        }
       
        button{
            margin: 3% auto;
        }
        @media screen and (max-width: 900px) {
            form{
                width: 75%;
            }
        }
        h2{
            margin: 2% auto;
            text-align: center;
        }
        img.preview{
          width:50px;
          margin: auto;
        }
</style>



