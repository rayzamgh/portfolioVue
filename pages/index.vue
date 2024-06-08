<template>
  <div>
    <div>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css"
      />
      <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
      <script src="https://apis.google.com/js/client.js?onload=init"></script>
      <title>BWSong' Personal Page</title>

      <header
        style="background-position: center; overflow: hidden;"
        class="w3-display-container w3-wide bgimg"
        id="home"
      >
        <div class="w3-display-middle w3-text-white w3-center">
          <h1 class="w3-jumbo">Rayza Mahendra</h1>
          <h2>Machine Learning Engineer</h2>
          <h2>
            <b>06.08.2024</b>
          </h2>
        </div>
      </header>

      <!-- Mail -->
      <div class="container" style="position:absolute; top:0vh">
        <div id="mainbar" class="block" style="width:99vw">
          <nav class="nav">
            <div class="nav-left">
              <img
                src="../assets/pepeJAM.gif"
                style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto"
              />
              <img
                src="../assets/pokiJAM.gif"
                style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto"
              />
            </div>
            <div class="nav-center">
              <a href="../profile" class="nav-item">
                <span class="icon">
                  <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                </span>
              </a>
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
              <a href="https://www.linkedin.com/in/rayza-mahendra-9a1595162" class="nav-item">
                <span class="icon">
                  <i class="fa fa-linkedin"></i>
                </span>
              </a>
              
            </div>

            <div class="nav-right nav-menu">
              <router-link to="/" class="nav-item">Home</router-link>
              <router-link to="/profile" class="nav-item">About Me</router-link>
              <a href="#" class="nav-item">Contact</a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <button id="secondaryYtDisplay">
          <iframe
            width="160"
            height="120"
            :src="linkyt"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  data() {
    return {
      xx: "",
      show: false,
      name: "",
      subject: "",
      message: "",
      queryYt: "",
      linkyt: ""
    };
  },
  mounted() {
    this.changeFontSize();
    this.checkHorizontalOverflow();
    document.title = "My Portfolio Webpage";
  },

  watch: {
    modalOpen: function(isOpen) {
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";
        // document.documentElement is the same as using document.querySelector('#root')
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }
  },
  methods: {
    async changeFontSize() {
      var result = await this.detectScreenWidth();
      if (result) {
        console.log(screen.width);
      } else {
        console.log(screen.width);
      }
      return result;
    },
    detectScreenWidth() {
      var pepeg = false;
      if (screen.width < 600) {
        pepeg = true;
      }
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(pepeg);
        }, 2000);
      });
    },
    buttonPressedShowForm() {
      this.show = !this.show;
    },
    checkEnter($event) {
      if (event.keyCode === 13) {
        this.buttonPressedYoutube();
      }
    },
    checkHorizontalOverflow() {
      var docHeight = document.documentElement.offsetHeight;

      [].forEach.call(document.querySelectorAll("*"), function(el) {
        if (el.offsetHeight > docHeight) {
          console.log(el);
        }
      });
    },
    buttonPressedYoutube() {
      this.linkyt =
        "https://www.youtube.com/embed?listType=search&list=" + this.queryYt;
      if (window.innerWidth < 600) {
        document.getElementById("secondaryYtDisplay").style.opacity = 1;
      }
    },
    buttonPressedYoutubeManual() {
      let query = this.queryYt.split(" ").join("+");
      axios
        .get("http://localhost:8000/api/v1/utub?search=" + query)
        .then(res => {
          if (res.data.message == "Valid") {
            this.linkyt = "https://www.youtube.com/embed/" + res.data.vidID;
            // this.linkyt = 'http://www.youtube.com/embed/videoseries?list=e98_o4Cun9Y-6iwugQvrp9M'
          } else {
            alert(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
#centered {
  text-align: center;
}
@media only screen and (max-width: 600px) {
  #about div img {
    height: 30px !important;
    width: 30px !important;
  }

  #queryb {
    right: 40% !important;
    width: 100px;
  }

  #searchb {
    font-size: 10px;
  }

  #contactb {
    width: 100px !important;
  }

  #displayyt {
    visibility: hidden;
  }

  #secondaryYtDisplay:hover {
    transition: 1s;
    opacity: 1;
  }

  #mainbar {
    width: 100vw !important;
  }

  .buttonup div {
    font-size: 10px;
  }

  .buttonupquery div {
    font-size: 10px;
  }
}

.clumpbot {
  position: absolute;
  top: 94vh;
}
.input {
  color: blue;
  font-weight: 1000;
}
.pepego {
  color: red;
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
body,
h1,
h2 {
  font-family: "Raleway", sans-serif;
}
body,
html {
  height: 100%;
}
p {
  line-height: 2;
}
.bgimg,
.bgimg2 {
  max-width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: scroll;
}
.bgimg {
  background-image: url("../assets/omegapepeg.jpg");
}
.bgimg2 {
  background-image: url("https://pm1.narvii.com/5910/22d0b5e1d282837e1d3b68bbd5beddb51bb1c730_hq.jpg");
}
.buttonself {
  display: inline-block;
  border-radius: 3px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  width:90%;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.buttonself span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.buttonself span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.buttonself:hover span {
  padding-right: 25px;
}
.buttonself:hover span:after {
  opacity: 1;
  right: 0;
}
.buttonup {
  transition: 1s;
  position: absolute;
  padding: 0 0 100% 0;
  height: 200px;
  width: 150px;
  font-size: 17px;
  color: white;
  font-family: Raleway;
  background: transparent;
  border: none;
  transform-origin: top;
}
.buttonup div {
  transition: 2s;
}
.buttonup:hover {
  transform: translateY(-30vmin);
}
.buttonupquery {
  transition: 1s;
  position: absolute;
  padding: 0 0 100px 0;
  height: 200px;
  width: 150px;
  font-size: 17px;
  color: white;
  font-family: Raleway;
  background: transparent;
  border: none;
  transform-origin: top;
}
.buttonupquery div {
  transition: 2s;
}
.buttonupquery:hover {
  transform: translateY(-10vh);
}
#searchb {
  position: relative;
  width: calc(50px + 8vw);
  height: 50px;
}
#contactb {
  width: 200px;
}
#secondaryYtDisplay {
  position: fixed;
  height: 120px;
  width: 150px;
  right: 7%;
  top: 8vh;
  opacity: 0;
  border-color: transparent;
  background-color: transparent;
}
#queryButton {
  background-color: white;
  border-radius: 0px 0px 20px 0px;
  
}

@media only screen and (max-width: 600px) {
  #queryButton {
    width: 50vw;
  }
}
</style>