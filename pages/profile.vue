<template>
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css">
        <title>Profile</title>

        <div id="maincontainer">
            <div class="block" >
                    <nav class="nav">
                        <div class="nav-left">
                            <img src="../assets/pepeJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto">
                            <img src="../assets/pokiJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto">
                        </div>

                        <div class="nav-center">
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

                        <div class="nav-right nav-menu">
                        <nuxt-link to="/" class="nav-item">Home</nuxt-link>
                        <nuxt-link to="/profile" class="nav-item">About Me</nuxt-link>
                        <a href="#" class="nav-item">Contact</a>
                        </div>
                    </nav>
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
                                <p>About Us</p>
                            </div>
                            <div class="message-body">
                            I'm a computer science undergraduate at ITB. 
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#maincontainer{
    background-image: url("../assets/omegapepeg.jpg");
    width: 100%;
    height: 100vh;
    background-position:inherit;
    overflow: hidden;
}
#koni{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>