<template>
    <div class="container-fluid" @scroll.passive="backEffect">
        <h2 class="title card-title" :class="{'active': show}">Welcome</h2>
        <h3 class="art card-title" :class="{'fade': show}">intro</h3>
        <h3 class="art card-title" :class="{'fade': show}">intro</h3>
        <section></section>
        <div class="container">
            <div class="new-sec row">
                <div class="fav-imgs col-md-6 col-sm-12">
                    <div class="mr-auto">
                         <img src="/src/assets/bs/img/4.jpg" alt="">
                    </div>     
            </div>
            <div class="about-text col-md-6 col-sm-12">
                <article>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem excepturi expedita consequuntur magni ipsam laudantium,
                    repudiandae suscipit! Temporibus aliquam ea recusandae illo nesciunt ex, quidem vero laboriosam? Esse, sit.
                </article>
                <article>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem excepturi expedita consequuntur magni ipsam laudantium,
                    repudiandae suscipit! Temporibus aliquam ea recusandae illo nesciunt ex, quidem vero laboriosam? Esse, sit.
                </article>
                <article>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem excepturi expedita consequuntur magni ipsam laudantium,
                    repudiandae suscipit! Temporibus aliquam ea recusandae illo nesciunt ex, quidem vero laboriosam? Esse, sit.
                </article>
                <article>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem excepturi expedita consequuntur magni ipsam laudantium,
                    repudiandae suscipit! Temporibus aliquam ea recusandae illo nesciunt ex, quidem vero laboriosam? Esse, sit.
                </article>
            </div>
            </div>
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
    background: #f4f4f4;
    padding: 100px 70px;
    z-index: 700;
    box-shadow:  -2px -2px 6px rgba(255, 255, 255, 0.1),
                     2px 2px 6px rgba(0, 0, 0.8);
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
.new-sec{
    position: relative;
    height: 100vh;
    box-shadow:  -2px -2px 6px rgba(255, 255, 255, 0.1),
                     2px 2px 6px rgba(0, 0, 0.8);
}
.fav-imgs{
    position: sticky;
    left: 0;
    padding: 3% 5%;
    box-shadow:  -4px -4px 8px rgba(255, 255, 255, 0.1),
                     4px 4px 8px rgba(0, 0, 0.8);
}
.fav-imgs img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    margin: auto;
    box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.1),
                    inset 6px 6px 10px rgba(0, 0, 0.8);
}
.about-text{
    padding: 10% 5%;
    text-align: left;
    background: #fff;
}
/* .about-text article{
    padding: 10% 20%;
    text-align: right;
} */
.swiper-container {
    width: 600px;
    height: 300px;
}
</style>

