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
                            <div class="message-body">
                            I'm a computer science undergraduate at ITB.
                            <br>
                            Familiar with the following programming language:
                            <br>
                            C, C++, Java, Python, Go, ahen!Haskell, C#, HTML, CSS, Javascript
￼
                            </div>
                        </article>
                        <article clasis-fixed-tops="message">
                            <div class="message-header">
                                <p>Projects I've Worked On</p>
                            </div>
                            <div class="message-body">
                                <h1 style="font-size:20px">Well Depth Pressure Projection</h1>
                                <br>
                                A side project, commissioned by a fellow from Geothermal Engineering Master Degree
                                Student. Projecting well pressure and temperature at different depth with IAPWS Steam
                                Table, Developed with Python
                            </div>
                            <div class="message-body">
                                <h1 style="font-size:20px">3DTransformation API</h1>
                                <br>
                                
                                2D & 3D Geometrical transformation app. Developed with OpenGL, Python
                            </div>
                            <div class="message-body">
                                <h1 style="font-size:20px">Engi's Farm</h1>
                                <br>
                                
                                2.5D Harvest-moon-like game, developed using java
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
                                Handling Back-End related works (Database,
                                 REST API, JWT Login) on a core 
                                 WebApplication for an insurance company, Developed Golang, MongoDB
                            </div>
                        </article>
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