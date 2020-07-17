<template>
    <div class="container-fluid row">
        <!-- controls -->
                          <div class="col-md-1">
                                  <div class="row">
                                    <div class="control"> 
                                      <!-- Previous Button -->
                                       <button class="cont previous round btn btn-outline-primary" v-on:click="prev()">&#8249;</button>
                                    </div>                                                                   
                            </div>
                          </div>
        <div class="container col-md-10 col-sm-12">
            <div class="box btn btn-secondary col-md-4 col-sm-12" v-for="project in filtered">
                <div class="img-box">
                   <div>
                       <h4 class="card-title text-center btn">{{project.title}}</h4>
                       <article class="card-body">
                           {{project.details}}                          
                       </article >
                   </div>
                </div>
                <div class="content">
                    <ul>
                        <li><a class="link-btn btn btn-outline-primary" :href="project.web" target="_blank">Web</a></li>
                        <li><a class="link-btn btn btn-outline-primary" :href="project.git" target="_blank">GitHub</a></li>
                    </ul>                    
                </div>
            </div>             
        </div>
        <!-- controls -->
                          <div class="row col-md-1">
                                  <div class="row">
                                    <div class="col-6 control">
                                      <!-- Next Button -->
                                      <button class="cont next round mr-auto btn btn-outline-primary" v-on:click="next()">&#8250;</button>
                                    </div>
                                  </div>
                          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showHover: false,
            x:0,
            y:2, 
            timer: '',
            filtered:[],
            projects:[
                {
                    title: 'Twitter',
                    details: "A simple recreation of twitter's landing page with just HTML, CSS, bootstrap and Simple JavaScript",
                    git:'https://github.com/codeDeeAi/Twitter.git',
                    web:''
                },
                {
                    title: 'Bridge of Desmond',
                    details: "A simple landing page with just HTML, CSS, bootstrap and Simple JavaScript",
                    git:'https://github.com/codeDeeAi/Diamond-Bridge-.git',
                    web:''
                },
                {
                    title: 'RyseHub',
                    details: "A simple functional e-commerce web app with just HTML, CSS, bootstrap, JavaScript, VueJS and Firebase (git access is restricted to protect client information) ",
                    git:'',
                    web:'http://www.rysehub.com.ng'
                },
                {
                    title: 'Sunview',
                    details: "A simple landing page with just HTML, CSS, bootstrap and Simple JavaScript. Created to show the different ways carousels and grids can be used",
                    git:'https://github.com/codeDeeAi/sunny.git',
                    web:''
                },
                {
                    title: 'My Portfolio',
                    details: "A landing page with  HTML, CSS , bootstrap, Simple JavaScript and VueJS. Created to show the various designs made by me",
                    git:'',
                    web:''
                },
            ]
        }
    },
    methods:{
        prev(){
            if (this.x>0 && this.y>2) {
                this.x -= 2;
                this.y -= 2;
                return this.filterProjects();
            } else{}
            
            },
            next(){
            this.x += 2;
            this.y += 2;
            return this.filterProjects();
            },
            filterProjects(){
                var X =this.x;
                var Y =this.y;
                this.filtered = this.projects.slice(X,Y);                
            }
    },
    created(){
        this.filterProjects();
    }
}
</script>
<style  scoped>
.container-fluid{
    margin: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    font-family: "Fira Sans Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
}
.container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* width: 1000px; */
    transform-style: preserve-3d;
}
.container .box{
    position: relative;
    min-width: 48%;
    height: 350px;
    margin: 20px 0;
    /* color: white; */
    perspective: 1000px;
    overflow: hidden;
    transform-style: preserve-3d;
    box-shadow:  -4px -4px 8px rgba(255, 255, 255, 0.1),
                     4px 4px 8px rgba(0, 0, 0.8);
}
.container .box .img-box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: top;
    transform-style: preserve-3d;
    transition: 0.5s;    
    opacity: 1;
    padding: 15% 7%;
    /* background: #3F6CFE ; */
}
.container .box .img-box h4{
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 2px auto;
    font-weight: bold;
    color: white;
    box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.1),
                  2px 2px 3px rgba(0, 0, 0.8);
}
.container .box .img-box  article{
    text-align: center;
    padding: 2rem auto;
    /* box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.1),
                  inset 2px 2px 3px rgba(0, 0, 0.8); */
    /* color: #222; */
}
.container .box .img-box  article .card-title{
    padding-top: 4%;
}
.container .box .content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20%;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: rotateY(90deg);
    opacity: 0;
    color: #fff;
    font-size: 1.1rem;
}

.container .box:hover > .img-box{
    transform:rotateY(-90deg);
    opacity: 0;
    transition-delay: 0.2s;
    cursor: grab;
}

.container .box:hover > .content{
    transform:rotateY(0deg);
    opacity: 1;
    transition-delay: 0.2s;
    height: 100%;
    cursor: pointer;
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                    inset 4px 4px 6px rgba(0, 0, 0.8);
}
.container .box .content ul{
    list-style: none;
    padding-left: 0;
    width: 90%;
    margin: auto;
}
.container .box .content ul li{
    margin: 1rem auto;
}
.container .box .content .link-btn{
    width: 100%;
}
.container .box .content ul a{
    text-decoration: none;
    box-shadow:  -4px -4px 6px rgba(255, 255, 255, 0.1),
                     4px 4px 6px rgba(0, 0, 0.8);
}
.container .box .content ul a:hover{
    text-decoration: none;
}
.container .box .content ul a:active{
    text-decoration: none;
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                    inset 4px 4px 6px rgba(0, 0, 0.8);
}
.control button{
    box-shadow:  -4px -4px 6px rgba(255, 255, 255, 0.1),
                     4px 4px 6px rgba(0, 0, 0.8);
}
.control button:active{
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                    inset 4px 4px 6px rgba(0, 0, 0.8);
}
</style>