<template>
    <div class="container-fluid" @scroll.passive="backEffect">
       <div class="welcome" style=" margin-top:40%;">
            <transition name="fade">
            <h2 class="title card-title" :class="{'active': show}" >Welcome</h2>
            </transition>
            <div class="int dive" :class="{'active': show}">
                <a>
                    <span><i class="fas fa-angle-double-down "></i></span>
                    <span><i class="fas fa-angle-double-down "></i></span>
                    Let's Dive In
                </a> 
            </div>
       </div>
        <section></section>
        <div class="container">
            <div id="about" class="new-sec row">
                <div class="fav-imgs col-md-6 col-sm-12">
                    <div class="mr-auto">
                        <div class="text-center late">
                             <h2 class="text-center">Welcome</h2>
                        </div>
                        <div class="text-center">
                            <span>My name is <b>Bada Adeola O</b></span>, 
                        </div>
                        <div class="text-center">
                            Let's be social                            
                        </div>
                        <div>
                            <ul class="row list-unstyled">
                                <li> <a class="btn" target="_blank" href="linkedin.com/in/adeola-bada-aiism-a51174124"><i class="fab fa-linkedin fa-2x mr-auto"></i> </a> </li>
                                <li> <a class="btn" target="_blank" href="https://instagram.com/mr_.dee" ><i class="fab fa-instagram fa-2x mr-auto"></i> </a> </li>
                                <li> <a class="btn" target="_blank" href="https://twitter.com/adeolabada1"><i class="fab fa-twitter fa-2x mr-auto"></i></a> </li>
                                <li> <a class="btn" target="_blank" href="https://github.com/codeDeeAi"><i class="fab fa-github fa-2x mr-auto"></i></a></li>
                            </ul>
                        </div>
                    </div>     
            </div>
            <div class="about-text col-md-6 col-sm-12">
                <article>                   
                    <span class="head"><b>A brief Info about me</b> </span>
                    <br>
                    <br>
                    <p>
                        I studied Civil Engineering at Federal University, Oye-Ekiti, Nigeria.
                        My Interest in computers has led me to pursue a career in web development which serves a medium of bringing my ideas to the limelight. <br>
                        I'm a self taught website developer whose interest lies in providing simple web based solutions to  people who need them.
                    </p>
                    <br>
                    <span class="head"><b>Skills</b> </span>
                    <br>
                    <p>
                       <ul>
                           <li>Business Analysis</li>
                           <li>Good knowledge of HTML, CSS, JavaScript, VueJS, Php, SQL</li>
                           <li>Good understanding of Version Control (Git and GitHub)</li>
                           <li>Adequate understanding of Bootstrap and Materialize CSS</li>
                           <li>Good Knowledge of Firebase</li>
                           <li>Manual testing of web-based applications</li>
                           <li>Learn Fast and open to more learning opportunities</li>
                       </ul>
                    </p>
                </article>
            </div>
            </div>            
            <div class="row proj">
                <a class="card-title btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Projects
                </a>
            </div>
           <port id="portfolio" class="z-port"></port>
           <div id="foot" class="footer">
               <div class="footer-icons row mr-auto">
                   <ul class="row list-unstyled mr-auto">
                     <li> <a class="btn" target="_blank" href="linkedin.com/in/adeola-bada-aiism-a51174124"><i class="fab fa-linkedin fa-2x mr-auto"></i> </a> </li>
                     <li> <a class="btn" target="_blank" href=" https://instagram.com/mr_.dee" ><i class="fab fa-instagram fa-2x mr-auto"></i> </a> </li>
                     <li> <a class="btn" target="_blank" href="https://twitter.com/adeolabada1"><i class="fab fa-twitter fa-2x mr-auto"></i></a> </li>
                     <li> <a class="btn" target="_blank" href="mailto:dunsin.bada@gmail.com" ><i class="far fa-envelope fa-2x mr-auto"></i></a> </li>
                     <li> <a class="btn" target="_blank" href="https://github.com/codeDeeAi"><i class="fab fa-github fa-2x mr-auto"></i></a></li>
                 </ul>
               </div>
               <div class="copyright text-center row">
                   <p class="text-center">{{ 'Copyright'+ ' ' + '©' + cur() }}  {{ ' ' + copyright }}<a href=" https://instagram.com/mr_.dee" target="_blank">{{ name }}</a></p>
               </div>
           </div>
        </div>

    </div>
</template>

<script>
import port from './port'
export default {
  components:{
      port,
  },
    data(){
        return{
           show: false,
           copyright:' All rights reserved | Designed by ',
           name:'Bada Adeola O.',
        }
    },
    created(){
        window.addEventListener('scroll', this.backEffect); 
        this.show = true;
    },
    destroyed(){
        window.removeEventListener('scroll', this.backEffect);
    },
    methods:{
           backEffect(event){
                    var value = window.scrollY;
                    let section = document.querySelector('section');
                    section.style.clipPath = "circle("+ value +"px at center)";                   
           },
           cur(){
                return (new Date().getFullYear());
                } 
        }
    
}
</script>

<style  scoped>
.container-fluid{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Sans Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
    margin-top: 140vh;
    background: #222;
    /* background: #85DCBb; */
    padding: 50px 50px;
    z-index: 700;
    font-size: 1rem;
    box-shadow:  -2px -2px 6px rgba(255, 255, 255, 0.1),
                     2px 2px 6px rgba(0, 0, 0.8);
    transition: all 2s ease-in;
}
.welcome{
    margin-top: 20%;
}
.title{
    color: #fff;
    position: relative;
    top: 0;
    z-index: 800;
    font-size: 4em;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-transform: initial;
    transform: rotateX(-90deg);
    transform: rotateZ(180deg); 
}
.int{
    color: #fff;
    position: relative;
    /* top: 15%; */
    z-index: 800;
    /* font-size: 4em; */
    text-align: center;
    /* font-weight: bolder; */
    width: 100%;
    text-transform: initial;
}

.dive{
    margin-top: 15%;
    text-transform: lowercase;
}
h5{
    font-size: 1.5rem;
    transition-delay: 10s;
}

.active{
    transform: rotateX(90deg);
    transform: rotateZ(360deg);
    transition-timing-function:all .5s ease-in-out;
    transition: 5s;
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
    transition-delay: 8s;
    transition: all 7s ease-in;
}
.new-sec{
    position: relative;
    /* height: 100vh; */
    box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.1),
                     6px 6px 10px rgba(0, 0, 0.8);
}
.fav-imgs{
    position: sticky;
    left: 0;
    color: white;
    padding: 10% 5%;
    background: #222;
}
.fav-imgs h2{    
    letter-spacing: 2px;
    /* font-weight: bold; */
    text-transform: uppercase;
    margin: 15% auto 5%;
}
.fav-imgs span{
    margin: 5% auto 1%;
}
.fav-imgs ul{
    margin:2% auto;
    padding: auto;
    width: 100%;
}
.fav-imgs ul li{
    margin: 5% auto;
}
.fav-imgs ul li a{
     color: white;
     box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.1),
                     6px 6px 10px rgba(0, 0, 0.8);
}
.fav-imgs ul li a:hover{
    color: #007bff;
}
.fav-imgs ul li a:active{
    box-shadow: inset -3px -3px 6px rgba(255, 255, 255, 0.1),
                    inset 3px 3px 6px rgba(0, 0, 0.8);
}

.about-text{
    padding: 5% 5%;
    text-align: left;
    background: #212529;
    /* border-left: 0.5px solid #222; */
    color: white;
}

.about-text ul{
    list-style: disc;
}
.proj{
    margin: 3% auto;
    padding: 2% auto;
    width: 100%;
    justify-content: center;
    align-items: center;
        box-shadow:  -3px -3px 6px rgba(255, 255, 255, 0.1),
                     3px 3px 6px rgba(0, 0, 0.8);

}
.proj a,
.int a{
    position: relative;
    transition: 2s;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
}
.proj a span,
.int a span{
    position: absolute;
    display: block;
}
.int a span{
    margin-left: -80px;
}
.proj a span:nth-child(1){
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent,#f4f4f4);
    animation: animate1 4s linear infinite;
}
@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
.proj a span:nth-child(2){
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(-90deg, transparent,#f4f4f4);
    animation: animate2 4s linear infinite;
}
@keyframes animate2{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}

.int a span:nth-child(1){
    top: -100%;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, transparent,#f4f4f4);
    animation: animate3 4s linear infinite;
}
@keyframes animate3{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.int a span:nth-child(2){
    top: -100%;
    right: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(-90deg, transparent,#f4f4f4);
    animation: animate4 4s linear infinite;
}
@keyframes animate4{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.welcome h2{
    margin-top: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.1),
                     6px 6px 10px rgba(0, 0, 0.8);
}
.footer{
    color: white;
    margin:auto;
    box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.1),
                     6px 6px 10px rgba(0, 0, 0.8);
}
.footer .footer-icons ul{
    margin: 2% auto;
}
.footer .footer-icons ul li a{
    color: #fff;
}
.footer .footer-icons ul li a:hover{
    color: #007bff;
}
.footer .footer-icons ul li:hover{
    color: rgb(23, 20, 167);
}
.footer .copyright p {
    margin:auto auto 1%;
    text-align: center;
    text-transform: uppercase ;
    letter-spacing: 1px;
    font-size: small;
}
.footer .copyright p a:hover{
    text-decoration: none;
}
</style>

