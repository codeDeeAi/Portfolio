<template>
  <div> 
      <a href="#" class="float">
        <i class="fa fa-arrow-up my-float"></i>
      </a>
    
  </div>
</template>

<script>
import Vue from 'Vue';
import Vuex from 'Vuex';


export default {
  components: {
     
  },
  data () {
    return {
        
    }
  },
  methods: {
    
  },
 
     
}

</script>

<style scoped >

body{
	font-family:Verdana, Geneva, sans-serif;
	font-size:18px;
	background-color:#CCC;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#f4f4f4;
	color:#222;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.float:hover{
	background: lightskyblue;
   -webkit-box-shadow: 7px 7px 5px -6px rgba(0,0,0,0.75);
          -moz-box-shadow: 7px 7px 5px -6px rgba(0,0,0,0.75);
          box-shadow: 7px 7px 5px -6px rgba(0,0,0,0.75);
}

.my-float{
	margin-top:22px;
}
       
</style>
