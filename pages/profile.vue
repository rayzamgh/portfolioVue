<template>
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css">
        
        <div class="container">
            <div>
            <div class="navbar">
                        <div class="navbar-left">
                            <!-- <img src="../assets/pepeJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto">
                            <img src="../assets/pokiJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto"> -->
                        </div>


                        <div class="navbar-center">
                        <a href="https://github.com/rayzamgh" class="nav-item">
                            <span class="icon">
                            <i class="fa fa-github"></i>
                            </span>
                        </a>
                        <a href="https://gitlab.com/rayzamgh" class="nav-item">
                            <span class="icon">
                            <i class="fa fa-gitlab"></i>
                            </span>
                        </a>
                        </div>

                        <div class="navbar-right nav-menu">
                        <router-link to="/" class="nav-item">Home</router-link>
                        <router-link to="/profile" class="nav-item">About Me</router-link>
                        <a href="#" class="nav-item">Contact</a>
                        </div>
                    </div>
            </div>
            <div id="subcontainer" class="container">
                <br><br>
                <div class="title" style="text-align: center; font-size: 5em; color: black">
                    Hi. I'm Mahen!
                </div>
                <div class="block">
                    <img id="koni" src="../assets/koni.jpg">
                    <br>
                    <br>
                    <div class="box">
                        <p style="text-align:center;font-family: fantasy;">Looking for a developer for your newest web app?</p>
                        <br>
                        <article class="message">
                            <div class="message-header">
                                <p>About Me</p>
                            </div>
                            <div class="message-body" style="text-align: center">
                            I'm a third year student of Computer Science undergraduate at ITB.
                            <br> <br>
                            Familiar with the following programming language:
                            <br>
                            C, C++, Java, Python, Go, Haskell, C#, HTML, CSS, Javascript, SQL, NoSQL
                            <br>
                            <br>
                            Have experience with frameworks below:
                            <br>
                            Go-chi, Vue.js, Nuxt.js and Bulma
                            </div>
                        </article>
                        <article clasis-fixed-tops="message">
                            <div class="message-header">
                                <p>Projects I've Worked On</p>
                            </div>
                            <br>
                            <div class="message-body">
                                <h1 style="font-size:20px">Well Depth Pressure Projection</h1>
                                <br>
                                September 2019
                                <br>
                                <br>
                                A side project, commissioned by a fellow from Geothermal Engineering Master Degree
                                Student. Projecting well pressure and temperature at different depth with IAPWS Steam
                                Table, Developed with Python
                            </div>
                            <br>
                            <div class="message-body">
                                <h1 style="font-size:20px">3DTransformation API</h1>
                                <br>
                                May 2018
                                <br>
                                <br>
                                2D & 3D Geometrical transformation app. Developed with OpenGL, Python
                            </div>
                            <br>
                            <div class="message-body">
                                <a href="http://www.wearblackindonesia.com/">Wearblack Indonesia</a>
                                <br>
                                <br>
                                September 2019
                                <br>
                                <br>
                                Fashion online store developed with wordpress woocommerce, worked on several UI/UX and product management system 
                            </div>
                        </article>
                        <br>
                        <article clasis-fixed-tops="message">
                            <div class="message-header">
                                <p>Work Experience</p>
                            </div>
                            <div class="message-body">
                                <h1 style="font-size:20px">Roketin</h1>
                                <img src="../assets/roketin.jpg">
                                <br>
                                <h2 style="font-family: cursive; font-size: 22px">Web Application Back-End Developer 
                                </h2>
                                <br>
                                May 2019 - July 2019
                                <br>
                                Handling Back-End related works (Database,
                                 REST API, JWT Login) on a core 
                                 WebApplication for an insurance company, Developed using Golang, MongoDB
                            </div>
                        </article>
                        <article clasis-fixed-tops="message">
                            <div class="message-header">
                                <p>Organization</p>
                            </div>
                                <div class="block">
                            <div class="columns">
                                <div class="column" >
                                <div class="message-body" style="height: 250px; overflow:hidden;">
                                    <h1 style="font-size:20px">HMIF ITB</h1>
                                    <img src="../assets/hmif.png" style="width 100px; height: 100px">
                                        <br>
                                        <h2 style="font-family: cursive; font-size: 14px">Kinship Division Staff 
                                        </h2>
                                        <br>
                                    May 2018 - Present
                                    <br>
                                </div>
                                </div>
                                <div class="column">
                                <div class="message-body" style="height: 250px; overflow:hidden;">
                                    <h1 style="font-size:20px">GENSHIKEN</h1>
                                    <img src="../assets/gen.png" style="width 100px; height: 100px">
                                        <br>
                                        <h2 style="font-family: cursive; font-size: 14px">Vice Chief of Music Creative Division 
                                        </h2>
                                        <br>
                                    September 2018 - August 2019
                                    <br>
                                </div>
                                </div>
                                <div class="column">
                                <div class="message-body" style="height: 250px; overflow:hidden;">
                                    <h1 style="font-size:20px">ARKAVIDIA</h1>
                                    <img src="../assets/arkav.png" style="width 100px; height: 100px">
                                        <br>
                                        <h2 style="font-family: cursive; font-size: 14px">Logistician and Datavidia Staff 
                                        </h2>
                                        <br>
                                    September 2018 & September 2019
                                    <br>
                                </div>
                                </div>
                                <div class="column">
                                <p class="notification"></p>
                                </div>
                            </div>
                            </div>
                        </article>
                        <br><br>
                        <h5 style="text-align: center; color:gray;">This site was developed with Vue.js</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
    components:{
    },
    methods: {
    }
}
</script>
<style>
#koni{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.navbar{
    width: 100%;
    text-align: center;
    position: relative;
}
</style>