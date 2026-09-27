<template>
  <footer id="contact" class="site-footer">
    <div class="page-width">
      <div class="site-footer__card">
        <span class="eyebrow">A note to you</span>
        <h2>Have something <em>interesting</em> in mind?</h2>
        <p>I’m always open to a thoughtful conversation about AI, data, and the people they serve.</p>
        <a class="rainbow-button" href="mailto:rayzamgh@gmail.com">Email Rayza <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="page-width site-footer__bottom">
      <span>Rayza Mahendra G H</span>
      <div>
        <a href="https://github.com/rayzamgh" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:rayzamgh@gmail.com">Email</a>
      </div>
      <span>Jakarta · © {{ year }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return { year: new Date().getFullYear() };
  }
};
</script>
