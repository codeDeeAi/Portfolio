<template>
  <div class="row">
       <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
            <router-view></router-view>
        </transition>
    
    
    
  </div>
</template>

<script>
import home from './components/home.vue';


export default {
  components: {
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
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */


</style>
