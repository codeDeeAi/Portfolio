<template>
    <div id="welcome" class="container">
        <!-- The video -->
            <video autoplay muted loop id="myVideo">
              <source src="/src/assets/bs/img/anim7.mp4" type="video/mp4">
            </video>
        <!-- The Portfolio --> 
        <port></port>

        <!-- Toast Messages -->
        <div id="welcome" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="/src/assets/bs/img/5.JPG" class="rounded mr-2" alt="...">
                <strong class="mr-auto">Adeola say's</strong>
                <small class="text-muted">just now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="toast-body">
                See? Just like this.
            </div>
        </div>

        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="/src/assets/bs/img/5.JPG" class="rounded mr-2" alt="...">
                <strong class="mr-auto">Adeola say's</strong>
                <small class="text-muted">2 seconds ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="toast-body">
                Heads up, toasts will stack automatically
            </div>
        </div>
        <!-- Toast Messages Ends -->
        
    </div>
</template>

<script>
import port from './portnav'

export default {
  components:{
    port,
  },
    data(){
        return{
           
        }
    },
    methods:{
   }, 
   mounted(){
     alert('Adeola says : Welcome to my page');
     alert("If you're viewing this page with a mobile phone switch phone orientation to landscape mode for the best experience, if not ignore. Thanks");
   },  
}
</script>

<style  scoped>
.container{
  height: 100vh;
  /* font-family: 'Courier New', Courier, monospace; */
  font-family: "Fira Sans Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

</style>

