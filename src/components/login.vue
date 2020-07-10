<template>
  <div class="container-fluid">
      <div class="signin-body">
      <div class="container signin-container">
        <div class="row">
        <div class="col"></div>
        <div class="col-sm-5 col-md-5 ">
            <div class="card siginin-card" v-on:mousemove="backEffect">
            <div class="card-block">
                <h2 class="header card-title">X-Chat</h2>
                <p class="sub-title card-text">..seamless communication without barriers...</p>
                <h4 class="card-title">Login</h4>
                <!-- <img src="src/assets/logo.png" class="signin-img img-fluid"> -->
                <form class="signin-form">
                    <div class="form-group">
                        <label>Username </label>
                        <input type="email" class="form-control" id="emailInput" v-model="email" placeholder="yourmail@email.com">
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="password" placeholder="password">
                    </div>
                    <button type="button" v-on:click.prevent="signIn" class="btn btn-primary signin-button">Sign In</button>
                    <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                    <label class="form-check-label" for="autoSizingCheck" >
                    Remember me <a class="remember" href="#" tabindex="0"  role="button" data-toggle="popover" data-trigger="focus"  title="Need Help? Contact the developer">Need help?</a>
            
                    </label>
                    <div class="signup-div">
                        <span class="signup text-center"><a href="#"  tabindex="0"  role="button" data-toggle="popover" data-trigger="focus"  title="Don't have an account yet?">Sign Up</a></span>
                    </div>
                    </div>
                </form>
            </div>
            
            </div>
        </div>
        <div class="col"></div>
        </div>
    </div>


  </div>
  </div>
  
</template>

<script>

import Vue from 'vue'
// import firebase from 'firebase'
import { config } from './firebaseConfig'
import { mapGetters } from "vuex";
import toastr from 'toastr'
import * as firebase from "firebase/app";
import "firebase/auth";


firebase.initializeApp(config);

export default Vue.extend({
  components: {
    'toastr':toastr,
  },
    computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/chat";
    },
  },
  data () {
    return {
           email: '',
           password: '',
           toastSuccess: false,           
    }
},
 watch: {
    // user(auth) {
    //   if (auth) {
    //     this.$router.replace(this.nextRoute);
    //   }
    // }
    user: function(changedUser) {
      if (changedUser) {
        this.$router.replace(this.nextRoute);
      }
    },
  },
    methods: {
        signIn: function(){
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email,this.password)
                .then(user => {
                     console.log(user);
                    // toastr.success('Log In Sucessful'  + ' ' + this.email);
                    alert('Log In Sucessful' + ' ' + this.email );                                        
                    this.$router.push('/chat');
                },
                err => {
                    alert('Invalid Login Details, pls try again');
                    console.log('Invalid Login Details or Network Error');
                });
        },

        backEffect(e){
            // console.log(e);
            var x = event.clientX;
            var y = event.clientY;
            // this.x = event.offsetX;
            // this.y = event.offsetY

            // event.path.container.backgroundPositionX = x +'px';
            // container.style.backgroundPositionY = y +'px';
        }

    },

   
});


</script>

<style scoped>

    .signin-body{
        background-color: #f4f4f4;
        border: 0.5px solid #f4f4f4 ;
        top: 0;
        left: 0;
        min-height: calc(100vh - 20px); 
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
    }
    .siginin-card{
        justify-content: center;
        justify-items: center;
        margin: 20% auto;
        min-width: 300px;            
        border-radius: 30px;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        background: url(/src/assets/bs/img/okay.png),#fff;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .container.signin-container{
         margin-top: 5%;
    }
    .card.signin-card{
        padding: 2% 0px 5%;
        background-color: rgb(229, 243, 238);
        /* -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); */
    }
    .signin-img{
        width: 50%;
        padding: 0 2rem 2rem;
        margin: auto;
        display: block;
        margin-top: 1rem;
    }
    .remember{
        font-size: smaller;
    }
    form.signin-form{
        max-width: 60%;
        margin: auto;

    }
    input{
        border-radius: 20px;
        margin-bottom: 5%;
         box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
                    inset 2px 2px 6px rgba(0, 0, 0.8);
    }
    button.signin-button{
        width: 100%;
        margin:5% auto;
        border-radius: 20px;
        margin-bottom: 2rem;
        box-shadow:  -2px -2px 6px rgba(255, 255, 255, 0.1),
                     2px 2px 6px rgba(0, 0, 0.8);
    }
    button.signin-button:active{
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
                    inset 2px 2px 6px rgba(0, 0, 0.8);
    }
    .create-new-account{
        text-align: center;
    }
    .form-check{
        padding-bottom: 10%;
    }
    .header,
    .sub-title,
    h4{
        text-align: center;
        margin:4% auto;
        justify-items: center;
    }
    .sub-title{
        font-size: smaller;
        font-style: italic;
    }
    .header{
        font-weight: 700;

    }
    /* h4{
        color: #00cc55;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
    } */
    .signup-div{
        text-align: center;
        justify-content: center;
        padding-top: 6%;
    }
    .signup{
        font-style: italic;
    }
    label{
        display: block;
        margin-bottom: 2px;
        font-size: 18px;
    }    
</style>
