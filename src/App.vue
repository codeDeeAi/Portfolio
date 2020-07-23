<template>
  <div class="row">
    
    <!-- The toast -->
    <div id="msg" v-if="!pop"  style="position:relative; min-height:200px;">
        <div class="msg" style="position:absolute; top:0; right:0;">
            <div class="toast-header">
                <img src="/src/assets/bs/img/4.jpg" class="rounded mr-2" alt="...">
                <strong class="mr-auto">Adeola's Portfolio</strong>
                <small>important!</small>
                <button type="button" class="ml-2 mb-1 close"  aria-label="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
                Change mobile view to landscape for the best experience on mobile.
            </div>
        </div>
    </div>
    <!-- Toast Ends-->
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
       pop: false,
    }
  },
  methods: {
     show(){
      //  return $('#msg').toast('show');
      this.pop = true;
     }
  },
  mounted(){
    this.show();
  }
}
</script>

<style >
/* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */

.msg{
  z-index: 1200;
}
</style>