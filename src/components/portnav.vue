<template>
    <div class="container">
        <div class="curtain" :class="{'active': shownav}">
            <span></span>
            <span></span>
            <span></span>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="toggle"  @click="toggle()"></div>
        </div>
        <intro></intro>
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
.container{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
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
    right: 20px;
    width: 50px;
    height: 50px;
    background: red;
    background-position: 5px;
    z-index: 1000;
    cursor: pointer;
    transition: o.5s;
}

.curtain.active .toggle{
    background: blue;
    background-position: 5px;
}

ul{
    position: absolute;
    z-index: 100;
    transition: 1.7s;
    visibility: hidden;
    opacity: 0;
    transition-delay: 0s;
    margin-left: 35%;
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
.curtain.active{
  z-index: 999;
  background: coral;
}
</style>

