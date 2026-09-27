<template>
  <main class="home-page">
    <section class="hero page-width" aria-labelledby="hero-title">
      <div class="hero__photos" aria-hidden="true">
        <div class="hero__photo hero__photo--desk"><img :src="photos.workspace" alt="" /></div>
        <div class="hero__photo hero__photo--city"><img :src="photos.jakarta" alt="" /></div>
        <div class="hero__photo hero__photo--coast"><img :src="photos.coast" alt="" /></div>
      </div>
      <div class="hero__copy">
        <span class="eyebrow">Rayza Mahendra · Jakarta</span>
        <h1 id="hero-title">Making AI <em>work</em><br />in the real world.</h1>
        <p>I build machine learning products and the governance that helps them reach people responsibly.</p>
        <div class="hero__actions">
          <a class="rainbow-button" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
          <nuxt-link class="text-link" to="/profile">Get to know me <span aria-hidden="true">↗</span></nuxt-link>
        </div>
      </div>
    </section>

    <section class="intro page-width" aria-labelledby="intro-title">
      <div class="intro__lead">
        <span class="eyebrow">A little about me</span>
        <h2 id="intro-title">The builder and the <i>big-picture thinker.</i></h2>
      </div>
      <div class="intro__details">
        <p>I'm Rayza, an AI and data governance practitioner at Telkomsel. My path started in software engineering and machine learning, then grew into helping teams put AI into production with care.</p>
        <div class="intro__facts">
          <div><strong>200+</strong><span>AI initiatives in the registry I govern</span></div>
          <div><strong>20+</strong><span>AI use cases brought toward production with Galilei</span></div>
        </div>
      </div>
    </section>

    <section id="work" class="work page-width" aria-labelledby="work-title">
      <div class="section-heading">
        <span class="eyebrow">Selected work</span>
        <h2 id="work-title">Some things I've helped <i>make real.</i></h2>
        <p>Platforms, products, and practical systems built with teams across AI, data, and engineering.</p>
      </div>
      <div class="project-wall">
        <article v-for="project in featuredProjects" :key="project.title" class="project-card">
          <div class="project-card__image">
            <img :src="photos[project.image]" :alt="photoAlt[project.image]" loading="lazy" />
          </div>
          <div class="project-card__content">
            <div class="project-card__meta">
              <span class="chip" :class="'chip--' + project.image">{{ project.category }}</span>
              <span>{{ project.year }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>
      <nuxt-link class="text-link work__more" to="/profile#projects">See more projects <span aria-hidden="true">↗</span></nuxt-link>
    </section>

    <section class="path page-width" aria-labelledby="path-title">
      <div class="section-heading">
        <span class="eyebrow">The journey</span>
        <h2 id="path-title">From code to <i>consequence.</i></h2>
        <p>Each role has made me more curious about how good systems are built, shipped, and cared for.</p>
      </div>
      <div class="path__grid">
        <article class="path__current">
          <span class="chip chip--governance">Now at Telkomsel</span>
          <span class="path__period">{{ experience[0].period }}</span>
          <h3>{{ experience[0].role }}</h3>
          <p>{{ experience[0].summary }}</p>
          <nuxt-link class="text-link" to="/profile#experience">Read the full story <span aria-hidden="true">↗</span></nuxt-link>
        </article>
        <div class="path__previous">
          <article v-for="role in experience.slice(1, 3)" :key="role.role">
            <span>{{ role.period }}</span>
            <h3>{{ role.role }}</h3>
            <p>{{ role.company }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="milestones page-width" aria-labelledby="milestones-title">
      <div class="section-heading">
        <span class="eyebrow">Along the way</span>
        <h2 id="milestones-title">A few things worth <i>remembering.</i></h2>
      </div>
      <div class="milestones__grid">
        <article v-for="item in recognition" :key="item.name" class="milestone-card">
          <span class="milestone-card__year">{{ item.year }}</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.context }}</p>
          <small>{{ item.contribution }}</small>
        </article>
      </div>
      <div class="education-note">
        <div>
          <span class="eyebrow">The foundation</span>
          <h3>Curiosity took me to ITB.</h3>
        </div>
        <p>I earned bachelor's and master's degrees in Informatics and Artificial Intelligence at Institut Teknologi Bandung.</p>
        <nuxt-link class="text-link" to="/profile#education">Education and skills <span aria-hidden="true">↗</span></nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import workspacePhoto from '~/assets/portrait-workspace.webp';
import jakartaPhoto from '~/assets/portrait-jakarta.webp';
import coastPhoto from '~/assets/portrait-coast.webp';
import { featuredProjects, experience, recognition } from '~/data/portfolio';

export default {
  data() {
    return {
      photos: {
        workspace: workspacePhoto,
        jakarta: jakartaPhoto,
        coast: coastPhoto,
        galilei: workspacePhoto,
        governance: jakartaPhoto,
        ecoflow: coastPhoto
      },
      photoAlt: {
        galilei: 'Sunlit notebook and laptop on a work desk',
        governance: 'Tree-lined city street in the late afternoon',
        ecoflow: 'Green coastline and footpath'
      },
      featuredProjects,
      experience,
      recognition
    };
  },
  head() {
    return { title: 'Rayza Mahendra | AI, Data & Engineering' };
  }
};
</script>
