<template>
    <div class="container-fluid" @scroll.passive="backEffect">
        <h2 class="title card-title" :class="{'active': show}">Welcome</h2>
        <h3 class="art card-title" :class="{'fade': show}">intro</h3>
        <h3 class="art card-title" :class="{'fade': show}">intro</h3>
        <section></section>
        <div class="container">
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
             <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae eos delectus culpa, consequatur illum unde? Fuga, autem laudantium? 
                Autem, praesentium. Deleniti ipsum nihil quis ad labore, aperiam omnis sequi!
            </article>
        </div>

    </div>
</template>

<script>
// import port from './portnav'
export default {
  components:{
    
  },
    data(){
        return{
           show: false,
        }
    },
    created(){
        window.addEventListener('scroll', this.backEffect);        
    },
    destroyed(){
        window.removeEventListener('scroll', this.backEffect);
    },
    methods:{
           backEffect(event){
                    var value = window.scrollY;
                    let section = document.querySelector('section');
                    section.style.clipPath = "circle("+ value +"px at center)";
                    this.show = true;
           } 
        }
    
}
</script>

<style  scoped>
.container-fluid{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
section{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 400;
    background: url(/src/assets/bs/img/4.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    clip-path: circle(0px at center);
}
.container{
    position: relative;
    margin-top: 200vh;
    background: #fff;
    padding: 100px;
    z-index: 700;
}
.title{
    position: relative;
    top: 12rem;
    z-index: 800;
    font-size: 4em;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-transform: initial;
    transform: rotateY(180deg);
    transform: rotateZ(180deg); 
}
.active{
    transform: rotateY(360deg);
    transform: rotateZ(360deg);
    transition-timing-function:all 5s ease-in-out;
    transition: all 5s ease-in-out;
}
.art{
    position: relative;
    top: 25rem;
    z-index: 800;
    font-size: 3em;
    text-align: center;
    width: 100%;
}
.fade{
    transition-delay: 5s;
     transition: all 7s ease-in;
}
</style>

