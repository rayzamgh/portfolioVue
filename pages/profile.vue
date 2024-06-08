<template>
  <div>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css" />

    <div class="container">
      <div>
        <div class="navbar">
          <div class="navbar-left">
            <!-- <img src="../assets/pepeJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto">
            <img src="../assets/pokiJAM.gif" style="width:2rem; height:2rem; margin-top:auto; margin-bottom:auto">-->
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
        <br />
        <br />
        <div class="title" style="text-align: center; font-size: 5em; color: black">Hi. I'm Mahen!</div>
        <div class="block">
          <img id="koni" src="../assets/koni.jpg" style="width: 30%;"/>
          <br />
          <br />
          <div class="box">
            <br />
            <article class="message">
              <div class="message-header">
                <p>About Me</p>
              </div>
              <div class="message-body" style="text-align: center">
                <p>I am now a Machine Learning Engineer with over three years of industry experience. I hold a Master of Engineering in Artificial Intelligence and a Bachelor of Engineering in Information Technology from Institut Teknologi Bandung (ITB).</p>
                <br>
                
                <img src="../assets/itb.png" style="width: 10%; height: auto;" alt="Institut Teknologi Bandung logo" />
            
                <h3>Education</h3>
                <ul>
                  <li><strong>Master of Engineering - MEng, Artificial Intelligence</strong> (July 2021 - September 2022)
                    <ul>
                      <li>Grade: GPA 3.81/4.00</li>
                      <li>Fast-Track Program (Bachelor to Master Degree)</li>
                      <li>GTA 100 Scholarship Awardee 2021 - 2022</li>
                      <li>Thesis: Few-shot Learning on Indonesian Language Text Classification</li>
                    </ul>
                  </li>
                  <li><strong>Bachelor of Engineering - BE, Information Technology</strong> (August 2017 - July 2021)
                    <ul>
                      <li>Grade: GPA 3.65/4.00</li>
                      <li>Activities and Societies: ITB Student Orchestra</li>
                      <li>Thesis: Development of Sentiment Analysis Model and Intent Classification of Scientific Journal Citations</li>
                    </ul>
                  </li>
                </ul>
                <br>
                <br>
                
                <p>My technical skills span a broad range of programming languages, including C#, C++, Java, Python, Go, Haskell, HTML, CSS, Javascript, SQL, and NoSQL. I have experience with frameworks and technologies such as ASP.NET, Sitecore, Go-chi, Express.js, React, Vue.js, Nuxt.js, and Unity.</p>
                
                <p>In my recent roles, I've honed my capabilities in big data ETL, utilizing tools like Airflow, Dataflow, and Apache Beam to process data into operational ML models, including Prophet and various neural network architectures. Additionally, I have developed chatbots and batch NER systems, incorporating LLMS technologies from providers like OpenAI and Gemini to enhance our data processing and user interaction frameworks.</p>
              </div>
            </article>
            
            
            <article clasis-fixed-tops="message">
              <div class="message-header">
                <p>Projects I've Worked On</p>
              </div>
              <br />
              <div class="columns">
                <div class="column">
                  <div class="project">
                    <div class="projectin">
                      <img src="../assets/python.png" style="width:20%" />
                      <h1 style="font-size:23px; font-weight: bold;">Therwell</h1>September 2019
                      <br />
                      <br />A side project, commissioned by a fellow from Geothermal Engineering Master Degree
                      Student. Projecting well pressure and temperature at different depth with IAPWS Steam
                      Table, Developed with Python
                    </div>
                  </div>
                  <div class="project">
                    <div class="projectin">
                      <img src="../assets/golang.png" style="width:20%" />
                      <h1 style="font-size:25px; font-weight: bold;">Web Based Image Annotator</h1>March 2020
                      <br />
                      <br />Browser based, image annotator for labelling images prior to data feeding for machine learning purposes.
                      Complete with user account authentication in PASCAL and COCO supported format
                    </div>
                  </div>
                </div>
                <br />
                <div class="column">
                  <div class="project">
                    <div class="projectin">
                      <i class="fa fa-eye" style="font-size:72px;"></i>
                      <h1 style="font-size:25px; font-weight: bold;">Argus</h1>May 2019
                      <br />
                      <br />Social Network Analysis Tools, a software to map twitter user's sentimentality over political issues in Indonesia
                    </div>
                  </div>
                  <div class="project">
                    <div class="projectin">
                      <img src="../assets/android.png" style="width:20%" />
                      <h1 style="font-size:25px; font-weight: bold;">Bola Sepak</h1>February 2020
                      <br />
                      <br />An Android Application to display the latest match results and schedules for upcoming English Premier League football matches
                    </div>
                  </div>
                </div>
                <br />
                <div class="column">
                  <div class="project">
                    <div class="projectin">
                      <img src="../assets/wordpress.png" style="width:20%" />
                      <br />
                      <a
                        style="font-size:25px; font-weight: bold;"
                        href="http://www.wearblackindonesia.com/"
                      >Wearblack Indonesia</a>

                      <br />September 2019
                      <br />
                      <br />Fashion online store developed with wordpress woocommerce, worked on several UI/UX and product management system
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <br />
            <article class="message">
              <div class="message-header">
                <p>Work Experience</p>
              </div>
              <div class="message-body">
                <img src="../assets/tsel.png" style="width: 20%;" />
                <h1 style="font-size: 40px;">Telkomsel</h1>
                <h2 style="font-family: Tahoma; font-size: 22px;">Machine Learning Engineer Associate</h2>
                <p style="font-size: 18px;">July 2023 - Present</p>
                <p>Jakarta, Indonesia · Hybrid</p>
                <ul>
                  <li>Handles Generative AI & LLM use cases including Probing Machine, Dashboard Summarization, and OCR Invoice.</li>
                  <li>Responsible for MLOps and LLMOps to streamline machine learning lifecycle management and operations.</li>
                  <li>Developed a chatbot interface to facilitate user interactions and automate responses.</li>
                </ul>
              </div>
              <div class="message-body">
                <img src="../assets/jobkred.png" style="width: 20%;" />
                <h1 style="font-size: 40px;">JobKred</h1>
                <h2 style="font-family: Tahoma; font-size: 22px;">Data Scientist</h2>
                <p style="font-size: 18px;">May 2022 - May 2023</p>
                <p>Singapore · Full-time</p>
                <ul>
                  <li>Developed and maintained a web scraping pipeline using Scrapy, Airflow, Kubernetes, and GKE.</li>
                  <li>Engineered an ETL pipeline to process incoming web data for further analysis and insights.</li>
                  <li>Utilized data to train GPT models for summarizing job descriptions, enhancing data utility and accessibility.</li>
                </ul>
              </div>
              <div class="message-body">
                <h2 style="font-family: Tahoma; font-size: 22px;">Software Engineer</h2>
                <p style="font-size: 18px;">August 2021 - May 2022</p>
                <p>Singapore · Part-time</p>
                <ul>
                  <li>Implemented Python and Django MVC architectures for robust web application development.</li>
                  <li>Managed ETL processes and data pipelines using Airflow, BigQuery, and Google PubSub.</li>
                  <li>Developed tools with Scrapy and Selenium WebDriver for efficient data scraping and automation tasks.</li>
                </ul>
              </div>
              <div class="message-body">
                <img src="../assets/roketin.jpg" style="width: 10%;" />
                <h1 style="font-family: Tahoma; font-size: 40px;">Roketin</h1>
                <h2 style="font-family: Tahoma; font-size: 22px;">Intern Back-End Developer</h2>
                <p style="font-size: 18px;">May 2019 - July 2019</p>
                <ul>
                  <li>Managed back-end development tasks for a core web application designed for an insurance company.</li>
                  <li>Developed functionalities involving databases, RESTful APIs, and JWT authentication.</li>
                  <li>Utilized technologies: Golang, MongoDB.</li>
                </ul>
              </div>
              <div class="message-body">
                <img src="../assets/xtremax.png" style="width: 10%;" />
                <h1 style="font-size: 40px;">Xtremax Teknologi Indonesia</h1>
                <h2 style="font-family: Tahoma; font-size: 22px;">Part-Time Back-End Developer</h2>
                <p style="font-size: 18px;">February 2020 - November 2020</p>
                <ul>
                  <li>Developed and maintained various CMS-based web applications using ASP.NET and Sitecore MVC.</li>
                  <li>Handled server management and optimization of search functionalities using Solr, integrated within Docker environments.</li>
                </ul>
              </div>
            </article>
            
            <article clasis-fixed-tops="message">
              <div class="message-header">
                <p>Leadership Experience</p>
              </div>
              <div class="block">
                <div class="columns">
                  <div class="column">
                    <div class="message-body" style="height: 250px; overflow:hidden;">
                      <h1 style="font-size:20px">HMIF ITB</h1>
                      <img src="../assets/hmif.png" style="width 100px; height: 100px" />
                      <br />
                      <h2 style="font-family: Tahoma; font-size: 14px">Kinship Division Staff</h2>
                      <br />May 2018 - February 2020
                      <br />
                    </div>
                  </div>
                  <div class="column">
                    <div class="message-body" style="height: 250px; overflow:hidden;">
                      <h1 style="font-size:20px">HMIF ITB</h1>
                      <img src="../assets/hmif.png" style="width 100px; height: 100px" />
                      <br />
                      <h2 style="font-family: Tahoma; font-size: 14px">Head of Kinship Division</h2>
                      <br />March 2020 - Present
                      <br />
                    </div>
                  </div>
                  <div class="column">
                    <div class="message-body" style="height: 250px; overflow:hidden;">
                      <h1 style="font-size:20px">GENSHIKEN</h1>
                      <img src="../assets/gen.png" style="width 100px; height: 100px" />
                      <br />
                      <h2
                        style="font-family: Tahoma; font-size: 14px"
                      >Vice Chief of Music Creative Division</h2>
                      September 2018 - August 2019 
                      <br />
                    </div>
                  </div>
                  <div class="column">
                    <div class="message-body" style="height: 250px; overflow:hidden;">
                      <h1 style="font-size:20px">ARKAVIDIA</h1>
                      <img src="../assets/arkav.png" style="width 100px; height: 100px" />
                      <br />
                      <h2
                        style="font-family: Tahoma; font-size: 14px"
                      >Logistician and Datavidia Staff</h2>
                      <br />September 2018 & September 2019
                      <br />
                    </div>
                  </div>
                  <div class="column">
                    <p class="notification"></p>
                  </div>
                </div>
              </div>
            </article>
            <br />
            <br />
            <h5 style="text-align: center; color:gray;">This site was developed with Vue.js</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  components: {},
  methods: {}
};
</script>
<style>
#koni {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.navbar {
  width: 100%;
  text-align: center;
  position: relative;
}
.project {
  border: 1px;
  border-color: gray;
  border-style: solid;
  margin: 20px;
  text-align: center;
  border-radius: 16px;
}
.projectin {
  margin: 20px;
}
</style>