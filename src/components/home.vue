<template>
    <div id="welcome" class="container">
        <!-- The video -->
            <video autoplay muted loop id="myVideo">
              <source src="/src/assets/bs/img/anim7.mp4" type="video/mp4">
            </video>
        <!-- The Portfolio --> 
        <port></port>
        
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

