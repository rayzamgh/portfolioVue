<template>
  <main class="profile-page">
    <section class="profile-hero page-width" aria-labelledby="profile-title">
      <div class="profile-hero__copy">
        <span class="eyebrow">The person behind the work</span>
        <h1 id="profile-title">Hi, I'm <em>Rayza.</em></h1>
        <p>I work across machine learning engineering and AI governance, connecting research, product thinking, and production discipline.</p>
        <p>I'm based in Jakarta, where I lead AI and data governance work at Telkomsel. I still love the craft of building things.</p>
        <a class="rainbow-button" href="mailto:rayzamgh@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
      <div class="profile-hero__photos" aria-hidden="true">
        <div><img :src="workspacePhoto" alt="" /></div>
        <div><img :src="jakartaPhoto" alt="" /></div>
      </div>
    </section>

    <section id="experience" class="profile-section page-width" aria-labelledby="experience-title">
      <div class="section-heading">
        <span class="eyebrow">Professional path</span>
        <h2 id="experience-title">Where I've <i>been.</i></h2>
        <p>From backend engineering to building AI products and shaping the governance that supports them.</p>
      </div>
      <div class="experience-list">
        <article v-for="(item, index) in experience" :key="item.company + item.role" class="experience-card">
          <div class="experience-card__top">
            <span>{{ item.period }}</span>
            <span v-if="index === 0" class="chip chip--governance">Current</span>
          </div>
          <h3>{{ item.role }}</h3>
          <p class="experience-card__company">{{ item.company }}</p>
          <p>{{ item.summary }}</p>
          <ul>
            <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="projects" class="profile-section page-width" aria-labelledby="projects-title">
      <div class="section-heading">
        <span class="eyebrow">Things I've built</span>
        <h2 id="projects-title">Work with a <i>purpose.</i></h2>
        <p>Recent platforms and earlier experiments, each one a chance to learn something new.</p>
      </div>
      <div class="profile-projects">
        <article v-for="project in featuredProjects" :key="project.title" class="profile-projects__feature">
          <div class="profile-projects__meta">
            <span class="chip" :class="'chip--' + project.image">{{ project.category }}</span>
            <span>{{ project.year }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.detail }}</p>
        </article>
      </div>
      <div class="profile-projects__more">
        <article v-for="project in moreProjects" :key="project.title">
          <span>{{ project.year }}</span>
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a v-if="project.url" class="text-link" :href="project.url" target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>

    <section class="profile-section page-width" aria-labelledby="recognition-title">
      <div class="section-heading">
        <span class="eyebrow">Recognition</span>
        <h2 id="recognition-title">Moments that <i>stuck.</i></h2>
      </div>
      <div class="recognition-grid">
        <article v-for="item in recognition" :key="item.name" class="milestone-card">
          <span class="milestone-card__year">{{ item.year }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.context }}</p>
          <small>{{ item.contribution }}</small>
        </article>
        <article class="milestone-card">
          <span class="milestone-card__year">2020</span>
          <h3>HackSense</h3>
          <p>1st Prize · Codersense Hackathon</p>
          <small>A first-place finish in the 2020 HackSense hackathon.</small>
        </article>
      </div>
    </section>

    <section id="education" class="profile-section page-width" aria-labelledby="education-title">
      <div class="section-heading">
        <span class="eyebrow">The foundation</span>
        <h2 id="education-title">Always <i>learning.</i></h2>
      </div>
      <div class="education-list">
        <article v-for="item in education" :key="item.degree">
          <span>{{ item.period }}</span>
          <h3>{{ item.degree }}</h3>
          <p>{{ item.school }}</p>
          <p>{{ item.detail }}</p>
          <p><strong>Thesis:</strong> {{ item.thesis }}</p>
        </article>
      </div>
    </section>

    <section class="profile-section profile-section--practice page-width" aria-labelledby="practice-title">
      <div class="section-heading">
        <span class="eyebrow">Tools and community</span>
        <h2 id="practice-title">Practice, <i>shared.</i></h2>
      </div>
      <div class="practice-grid">
        <article>
          <h3>Technical skills</h3>
          <dl>
            <div v-for="group in skills" :key="group.label">
              <dt>{{ group.label }}</dt>
              <dd>{{ group.items }}</dd>
            </div>
          </dl>
        </article>
        <article>
          <h3>Leadership &amp; community</h3>
          <ul>
            <li v-for="item in leadership" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import workspacePhoto from '~/assets/portrait-workspace.webp';
import jakartaPhoto from '~/assets/portrait-jakarta.webp';
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
      workspacePhoto,
      jakartaPhoto,
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
