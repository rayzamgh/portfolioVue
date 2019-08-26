<template>
<div >
  <div class="w3-display-container" style="background-position: center;">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">      
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="https://apis.google.com/js/client.js?onload=init"></script>
       

        <header style="background-position: center;" class="w3-display-container w3-wide bgimg" id="home">
          <div class="w3-display-middle w3-text-white w3-center">
            <h1 class="w3-jumbo">Rayza Mahendra</h1>
            <h2>Software Engineer in Training</h2>
            <h2><b>09.07.2019</b></h2>
          </div>
        </header>

        <div>
         <div style="position:absolute; top:2vh">
          <button @click="buttonPressedShowForm()" class="button" style="vertical-align:middle">
              <span>
              Query me a message:
              </span>
            </button>
          
          <form action="https://formspree.io/rayzaganteng@gmail.com" style="position:relative; color: white;" method="POST" v-if="show">
            <label>
              Email
              <br>
              <input style="padding: 3px 0 2px 10px; color:white; border-radius: 20px; background-color:transparent;" type="email" name="email" class = "email" v-model = "email">
            </label>
            <br>
            <label>
              Subject
              <br>
              <input style="padding: 3px 0 2px 10px; color:white; border-radius: 20px; background-color:transparent;" type="text" name="subject" class = "subject" v-model = "subject">
            </label>
            <br>
            <label>
              Message
              <br>
              <input style="padding: 3px 0 2px 10px; color:white; border-radius: 20px; background-color:transparent;" name="message" class = "message" v-model = "message">
            </label>
            <br>
            <div class="status">

            </div>
            <button type="submit" class="button">
              <span>
                Send
              </span>
            </button>
          </form>
        </div>

        <!-- button hover bawah -->
        <div class="clumpbot w3-row" style="width: 100%; height: 100vh;">
          <div class="w3-quarter" style="z-index:1;">
              <button class="buttonup" style="left: 0%;">
                <div>
                  About Me
                  <br>
                  <img style="height:10vh; width:10vh;" src="../assets/jojo.jpg">
                  <br>
                  <br>
                  <div style="font-size:14px;">
                    Rayza Mahendra G H 
                  </div>
                  <br>
                  Informatics Undergraduate ITB
                </div>
              </button>
          </div>
          <div class="w3-quarter" style=" z-index:1;">
              <button class="buttonup" style="left: 25%;">
                <div>
                  Extra Pepega
                  <iframe width="150" height="200"
                  :src="linkyt" allow="autoplay; encrypted-media" allowfullscreen >
                  </iframe>
                </div>
              </button>
          </div>
          <div class="w3-quarter" style=" z-index:1;">
            <button class="buttonup" style="right:2%" >
              <div>
                Contact
                <br>
                <br>
                <img src="../assets/gmail.png" style="width:4vh; height:2vh;">
                <br>
                <a href="">rayzamgh@gmail.com</a>
                <br><img src="../assets/gitlab.png" style="width:4vh; height:4vh;">
                <br>  
                <a href="https://gitlab.com/rayzamgh" target="_blank">rayzamgh</a>
                <br>
                <img src="../assets/github.png" style="width:4vh; height:4vh;">
                <br>
                <a href="https://github.com/rayzamgh" target="_blank">rayzamgh</a>
                <br>
              </div>
            </button>
          </div>
          <div class="w3-quarter" style=" z-index:1;">
            <button class="buttonupquery" style="right: 25%;">
              <div>
                Query Youtube:
                <input
                  style="padding: 3px 0 2px 10px; color:white; border-radius: 20px; background-color:transparent; "
                  v-model = "queryYt"
                  @keypress="checkEnter($event)">
                  <button style="position: relative; width:10px; height 10px;" class="button" @click="buttonPressedYoutube()">
                    Search
                  </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            xx: '',
            show: false,
            name: '',
            subject: '',
            message: '',
            queryYt: '',
            linkyt: ''
        }
    },
    watch: {
      modalOpen: function (isOpen) {
        if (isOpen) {
          document.documentElement.style.overflow = 'hidden'
          // document.documentElement is the same as using document.querySelector('#root')
        } else {
          document.documentElement.style.overflow = 'auto'
        }
      }
    },
    methods: {

      buttonPressedShowForm() {
        this.show = !this.show
      },
      checkEnter($event) {
        if (event.keyCode === 13) {
          this.buttonPressedYoutube()
        }
      },
      buttonPressedYoutube() {
        this.linkyt = 'https://www.youtube.com/embed?listType=search&list=' + this.queryYt
      },
      buttonPressedYoutubeManual() {
        let query = this.queryYt.split(' ').join('+')
        axios.get('http://localhost:8000/api/v1/utub?search=' + query).then(res => {
          if (res.data.message == "Valid") {
            this.linkyt = 'https://www.youtube.com/embed/'+ res.data.vidID  
            // this.linkyt = 'http://www.youtube.com/embed/videoseries?list=e98_o4Cun9Y-6iwugQvrp9M'
          }else{
            alert(res.data.message)
          }
        })
        .catch(function (error){
          console.log(error)
        })
      }
    }
}
</script>
<style>
#centered {
  text-align: center;
}
.clumpbot{
  position: absolute;
  top: 94vh;
}
.input {
  color: blue;
  font-weight: 1000;
}
.pepego{
  color: red
}
.image {
  height: 30rem;
  width: 50rem;
}
.font-raleway {
  font-family: Raleway;
}
.font-lato {
  font-family: Lato;
  color: blanchedalmond;
}
body,h1,h2{font-family: "Raleway", sans-serif}
body, html {height: 100%}
p {line-height: 2}
.bgimg, .bgimg2 {
  max-width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: scroll; 
}
.bgimg {
  background-image: url("../assets/omegapepeg.jpg")
}
.bgimg2 {background-image: url("https://pm1.narvii.com/5910/22d0b5e1d282837e1d3b68bbd5beddb51bb1c730_hq.jpg")}
.button {
  display: inline-block;
  border-radius: 3px;
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 18px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button:hover span {
  padding-right: 25px;
}
.button:hover span:after {
  opacity: 1;
  right: 0;
}
html, body {
  overflow: hidden;
}
.buttonup {
  transition: 1s;
  position: absolute;
  padding: 0 0 100% 0 ;
  height: 200px;
  width: 150px;
  font-size: 17px;
  color: white;
  font-family: Raleway;
  background: transparent;
  border: none;
  transform-origin: top;
}
.buttonup div{
  transition: 2s;
}
.buttonup:hover{
  transform: translateY(-30vmin)
}
.buttonupquery {
  transition: 1s;
  position: absolute;
  padding: 0 0 100px 0 ;
  height: 200px;
  width: 150px;
  font-size: 17px;
  color: white;
  font-family: Raleway;
  background: transparent;
  border: none;
  transform-origin: top;
}
.buttonupquery div{
  transition: 2s;
}
.buttonupquery:hover{
  transform: translateY(-10vh)
}
</style>