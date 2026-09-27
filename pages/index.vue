<template>
  <main class="home-page">
    <section class="opening page-width" aria-labelledby="opening-title">
      <figure class="opening__art opening__art--left">
        <img :src="artwork.governance" alt="Ink illustration of ledgers, approvals, and connected AI systems" />
        <figcaption>Governance for the systems we build.</figcaption>
      </figure>
      <div class="opening__copy">
        <p class="section-kicker">AI · Data · Engineering</p>
        <h1 id="opening-title">BUILDING<br />AI THAT<br />HOLDS UP.</h1>
        <p>From machine learning delivery to company-wide AI governance.</p>
        <nuxt-link class="text-link" to="/profile">Meet Rayza <span aria-hidden="true">↗</span></nuxt-link>
      </div>
      <figure class="opening__art opening__art--right">
        <img :src="artwork.galilei" alt="Ink illustration of a reliable AI production pipeline" />
        <figcaption>Production systems with purpose.</figcaption>
      </figure>
    </section>

    <div class="display-banner" aria-label="Rayza Mahendra">
      <div class="page-width display-banner__inner">
        <span>RAYZA</span>
        <span>MAHENDRA</span>
      </div>
    </div>

    <section class="intro-section page-width" aria-labelledby="intro-title">
      <div class="intro-section__bio">
        <p><span class="drop-cap">I</span> lead AI and data governance at Telkomsel, where I work on the standards, evidence, and monitoring that help AI systems reach production responsibly.</p>
        <p>Before this, I built machine learning products, LLMOps platforms, and data pipelines across telecom and labour-market technology.</p>
      </div>
      <div class="intro-section__statement">
        <p class="section-kicker">A note from Jakarta</p>
        <h2 id="intro-title">Curiosity in the lab. <em>Discipline</em> in the real world.</h2>
      </div>
    </section>

    <section id="work" class="selected-work page-width" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="section-kicker">Selected work</p>
        <h2 id="work-title">IDEAS, PUT TO WORK.</h2>
        <p>Platforms and products spanning AI operations, public insight, and everyday experiences.</p>
      </div>
      <div class="project-grid">
        <article v-for="project in featuredProjects" :key="project.title" class="project-card">
          <div class="project-card__image">
            <img :src="artwork[project.image]" :alt="project.title + ' editorial illustration'" />
          </div>
          <div class="project-card__heading">
            <h3>{{ project.title }}</h3>
            <span class="project-card__badge">SELECTED</span>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-card__meta">{{ project.category }} <span aria-hidden="true">·</span> {{ project.year }}</div>
        </article>
      </div>
      <nuxt-link class="text-link selected-work__more" to="/profile#projects">Explore more work <span aria-hidden="true">↗</span></nuxt-link>
    </section>

    <section class="career-section page-width" aria-labelledby="career-title">
      <div class="career-section__lead">
        <p class="section-kicker">Where I work now</p>
        <h2 id="career-title">FROM BUILDING MODELS TO GUIDING THEIR IMPACT.</h2>
      </div>
      <div class="career-section__content">
        <div class="career-section__current">
          <p class="career-section__period">{{ experience[0].period }}</p>
          <h3>{{ experience[0].role }}</h3>
          <p class="career-section__company">{{ experience[0].company }}</p>
          <p>{{ experience[0].summary }} The company-wide AI registry now tracks more than 200 initiatives.</p>
        </div>
        <div class="career-section__previous">
          <div v-for="role in experience.slice(1, 3)" :key="role.role">
            <span>{{ role.period }}</span>
            <h4>{{ role.role }}</h4>
            <p>{{ role.company }}</p>
          </div>
        </div>
        <nuxt-link class="text-link" to="/profile#experience">Read the full experience <span aria-hidden="true">↗</span></nuxt-link>
      </div>
    </section>

    <div class="statement-banner" aria-hidden="true">
      <div class="page-width">THOUGHTFUL SYSTEMS. REAL-WORLD IMPACT.</div>
    </div>

    <section class="recognition-section page-width" aria-labelledby="recognition-title">
      <div class="section-heading">
        <p class="section-kicker">Recognition</p>
        <h2 id="recognition-title">A FEW MILESTONES.</h2>
      </div>
      <div class="recognition-grid">
        <article v-for="item in recognition" :key="item.name">
          <span class="recognition-grid__year">{{ item.year }}</span>
          <h3>{{ item.name }}</h3>
          <p class="recognition-grid__context">{{ item.context }}</p>
          <p>{{ item.contribution }}</p>
        </article>
      </div>
    </section>

    <section class="education-section page-width" aria-labelledby="education-title">
      <div>
        <p class="section-kicker">Foundation</p>
        <h2 id="education-title">STILL LEARNING.<br />ALWAYS BUILDING.</h2>
      </div>
      <div class="education-section__degrees">
        <article v-for="item in education" :key="item.degree">
          <span>{{ item.period }}</span>
          <h3>{{ item.degree }}</h3>
          <p>{{ item.school }}</p>
        </article>
        <nuxt-link class="text-link" to="/profile#education">Education and skills <span aria-hidden="true">↗</span></nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import governanceArtwork from '~/assets/editorial-governance.webp';
import galileiArtwork from '~/assets/editorial-llmops.webp';
import ecoflowArtwork from '~/assets/editorial-ecoflow.webp';
import { featuredProjects, experience, recognition, education } from '~/data/portfolio';

export default {
  data() {
    return {
      artwork: {
        governance: governanceArtwork,
        galilei: galileiArtwork,
        ecoflow: ecoflowArtwork
      },
      featuredProjects,
      experience,
      recognition,
      education
    };
  },
  head() {
    return {
      title: 'Rayza Mahendra | AI, Data & Engineering'
    };
  }
};
</script>
