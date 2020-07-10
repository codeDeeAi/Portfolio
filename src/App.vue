<template>
  <div class="row">
       <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
            <router-view></router-view>
        </transition>
    
    
    
  </div>
</template>

<script>



import show from './components/show.vue';
import signIn from './components/login.vue';
import slider from './components/slider.vue';
import addProduct from './components/addProduct.vue';
import home from './components/home.vue';







export default {
  components: {
    'show': show,
    'login': signIn,
    'slider': slider,
    'addProduct': addProduct,
    'home': home, 
  },
  data () {
    return {
       
    }
  },
  methods: {
    
  },
}
</script>

<style >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

/* body{
  margin: 0;
  font-family: Nunito Semibold;
  background-color: #f4f4f4;
}
.col-11{
  height: 100%;
  margin:auto;
} */

/* .page{
  position: fixed;
  width: inherit;
} */

</style>
