<template>
  <main class="profile-page">
    <section class="profile-hero page-width" aria-labelledby="profile-title">
      <div class="profile-hero__aside">
        <p class="section-kicker">The person behind the work</p>
        <p>Jakarta, Indonesia<br />AI, data, and engineering</p>
      </div>
      <div class="profile-hero__main">
        <h1 id="profile-title">A CAREER IN<br /><em>MAKING AI REAL.</em></h1>
        <p>I’m Rayza Mahendra G H. I work across machine learning engineering and AI governance, bringing research, product thinking, and production discipline together.</p>
        <a class="text-link" href="mailto:rayzamgh@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <div class="profile-banner" aria-hidden="true"><div class="page-width">THE RECORD</div></div>

    <section id="experience" class="profile-section page-width" aria-labelledby="experience-title">
      <div class="profile-section__heading">
        <p class="section-kicker">Professional path</p>
        <h2 id="experience-title">EXPERIENCE.</h2>
        <p>From backend engineering to building AI products and setting the governance that supports them.</p>
      </div>
      <div class="experience-list">
        <article v-for="(item, index) in experience" :key="item.company + item.role" class="experience-item">
          <div class="experience-item__meta">
            <span>{{ item.period }}</span>
            <strong>{{ item.company }}</strong>
            <span v-if="index === 0" class="editorial-stamp">CURRENT</span>
          </div>
          <div class="experience-item__body">
            <h3>{{ item.role }}</h3>
            <p class="experience-item__summary">{{ item.summary }}</p>
            <ul>
              <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="profile-section profile-section--projects page-width" aria-labelledby="projects-title">
      <div class="profile-section__heading">
        <p class="section-kicker">Selected technical work</p>
        <h2 id="projects-title">PROJECTS.</h2>
        <p>Products and research from recent AI platforms back to the experiments that started it all.</p>
      </div>
      <div class="profile-projects">
        <article v-for="project in featuredProjects" :key="project.title" class="profile-projects__feature">
          <div class="profile-projects__label"><span>{{ project.year }}</span><span>{{ project.category }}</span></div>
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.detail }}</p>
          </div>
        </article>
        <article v-for="project in moreProjects" :key="project.title" class="profile-projects__more">
          <span>{{ project.year }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a v-if="project.url" class="text-link" :href="project.url" target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>

    <section class="profile-section profile-section--recognition page-width" aria-labelledby="awards-title">
      <div class="profile-section__heading">
        <p class="section-kicker">Recognition</p>
        <h2 id="awards-title">NOTED ALONG THE WAY.</h2>
      </div>
      <div class="recognition-grid">
        <article v-for="item in recognition" :key="item.name">
          <span class="recognition-grid__year">{{ item.year }}</span>
          <h3>{{ item.name }}</h3>
          <p class="recognition-grid__context">{{ item.context }}</p>
          <p>{{ item.contribution }}</p>
        </article>
        <article>
          <span class="recognition-grid__year">2020</span>
          <h3>HackSense</h3>
          <p class="recognition-grid__context">1st Prize · Codersense Hackathon</p>
          <p>A first-place finish in the 2020 HackSense hackathon.</p>
        </article>
      </div>
    </section>

    <section id="education" class="profile-section profile-section--education page-width" aria-labelledby="education-profile-title">
      <div class="profile-section__heading">
        <p class="section-kicker">Academic foundation</p>
        <h2 id="education-profile-title">EDUCATION.</h2>
      </div>
      <div class="education-list">
        <article v-for="item in education" :key="item.degree">
          <span>{{ item.period }}</span>
          <div>
            <h3>{{ item.degree }}</h3>
            <p>{{ item.school }}</p>
          </div>
          <div>
            <p>{{ item.detail }}</p>
            <p><strong>Thesis:</strong> {{ item.thesis }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="profile-section profile-section--skills page-width" aria-labelledby="skills-title">
      <div class="profile-section__heading">
        <p class="section-kicker">Tools and community</p>
        <h2 id="skills-title">PRACTICE, SHARED.</h2>
      </div>
      <div class="practice-grid">
        <div>
          <h3>Technical skills</h3>
          <dl>
            <div v-for="group in skills" :key="group.label">
              <dt>{{ group.label }}</dt>
              <dd>{{ group.items }}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3>Leadership and community</h3>
          <ul>
            <li v-for="item in leadership" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {
  featuredProjects,
  moreProjects,
  experience,
  recognition,
  education,
  skills,
  leadership
} from '~/data/portfolio';

export default {
  data() {
    return {
      featuredProjects,
      moreProjects,
      experience,
      recognition,
      education,
      skills,
      leadership
    };
  },
  head() {
    return {
      title: 'About Rayza Mahendra | Experience, Projects & Education',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore Rayza Mahendra’s work in AI governance, machine learning engineering, LLMOps, and data science.'
        }
      ]
    };
  }
};
</script>
