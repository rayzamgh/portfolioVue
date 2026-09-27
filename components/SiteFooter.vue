<template>
  <footer id="contact" class="site-footer">
    <div class="page-width site-footer__inner">
      <div>
        <p class="section-kicker">Open a conversation</p>
        <h2>LET’S MAKE<br />IT MATTER.</h2>
      </div>
      <div class="site-footer__contact">
        <p>Ideas, collaborations, and interesting problems are welcome.</p>
        <a class="text-link" href="mailto:rayzamgh@gmail.com">rayzamgh@gmail.com <span aria-hidden="true">↗</span></a>
        <a class="text-link" href="https://github.com/rayzamgh" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="page-width site-footer__bottom">
      <span>Rayza Mahendra G H</span>
      <span>Jakarta, Indonesia</span>
      <span>© {{ year }}</span>
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
