<template>
    <div class="container">
        <div  class="curtain" :class="{'active': shownav}">
            <span></span>
            <span></span>
            <span></span>
                <ul class="mr-auto">
                    <li><a href="#welcome">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
                <div  class="toggle"  @click="toggle()">
                    <i id="svg" class="fas fa-home fa-2x"></i>
                </div>
        </div>
        <intro class="intro"></intro>
    </div>
</template>

<script>
import intro from './portintro'
export default {
    components:{
        intro
    },
    data(){
        return{
            shownav: false,
        }
    },
    methods:{
        toggle(){
                    if(this.shownav){
                        this.shownav = false;
                        setTimeout(() => {
                            this.shownav = false;
                        }, 500);
                    }
                    else{
                            this.shownav = true; 
                            setTimeout(() => {
                            this.shownav = true; 
                        }, 500);
                    }
             }
        }
    
}
</script>

<style  scoped>
/* Z-index styles */
#zOne{
    z-index: 1000;
}
#zTwo{
    z-index: 800;
}
/* Z-index styles end */
.container{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* min-height: 100vh; */
}
.container .intro{
    
}
.curtain{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 700;
}
.curtain > span{
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    display: block;
    transform-origin: bottom left;
    transition: 1.5s ease-in-out;
    transform: rotate(-90deg);
}
.curtain > span:nth-child(1){
    background: #ff1f6b;
    transform: rotate(-90deg);
    transition-delay: 0.2s;
}
.curtain > span:nth-child(2){
    background: #219dff;
    transform: rotate(-90deg);
    transition-delay: 0.1s;
}
.curtain > span:nth-child(3){
    background: #111;
    transform: rotate(-90deg);
    transition-delay: 0s;
}

.curtain.active  > span:nth-child(1){
    z-index: 1;
    transition-delay: 0s;
    transform: rotate(90deg);
}
.curtain.active  > span:nth-child(2){
    z-index: 2;
    transition-delay: 0.1s;
    transform: rotate(90deg);
}
.curtain.active  > span:nth-child(3){
    z-index: 3;
    transition-delay: 0.2s;
    transform: rotate(90deg);
}
.toggle{
    position: fixed;
    top: 20px ;
    right: 1px;
    width: 50px;
    height: 50px;
    background-position: 5px;
    z-index: 1000;
    cursor: pointer;
    transition: 0.5s;
}
.toggle #svg{
     transform: rotateZ(0deg);
}
.curtain.active .toggle{    
    background-position: 5px;
}
.curtain.active .toggle #svg{ 
    transform: rotateZ(180deg);
}

ul{
    position: absolute;
    z-index: 100;
    transition: 1.7s;
    visibility: hidden;
    opacity: 0;
    transition-delay: 0s;
    width: 100%;
}
.curtain.active ul{
    visibility: visible;
    opacity: 1;
    transition-delay: 0.7s;
}
.curtain ul li{
    list-style: none;
    margin: 10px 0;    
}
.curtain ul li a{
    text-decoration: none;
    color: #222;
    font-size: 4rem;
    text-align: center;
    display: block;
    font-family: 'Courier New', Courier, monospace;
}
.curtain ul li a:hover{
    color:#fff;
}
.curtain.active{
  z-index: 999;
  background: coral;
}
</style>

