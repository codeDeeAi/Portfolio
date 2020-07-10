<template>
  <div id="show-records">
    
    <h3>Products</h3>
    <div v-for="product in products" class="single-item">
        <p> title: {{ item.title }} </p>
    </div>
  </div>
</template>

<script>

export default {
 
  data () {
    return {
       products: [],
    }
  },
  methods: {
      
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.items = data.body.slice(0,10);  
      })
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: Nunito Semibold;
}

</style>
