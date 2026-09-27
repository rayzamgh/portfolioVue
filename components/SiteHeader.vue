<template>
  <header class="site-header">
    <div class="site-header__inner">
      <nuxt-link class="site-header__brand" to="/" aria-label="Rayza Mahendra, home" @click.native="menuOpen = false">
        <span class="site-header__mark" aria-hidden="true"></span>
        <span>Rayza Mahendra</span>
      </nuxt-link>
      <span class="site-header__note">AI, data &amp; engineering</span>
      <button
        class="site-header__menu-button"
        type="button"
        aria-controls="primary-navigation"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <nav id="primary-navigation" class="site-header__nav" :class="{ 'is-open': menuOpen }" aria-label="Primary">
        <nuxt-link to="/#work" @click.native="menuOpen = false">Work</nuxt-link>
        <nuxt-link to="/profile" @click.native="menuOpen = false">About</nuxt-link>
        <a class="site-header__contact" href="mailto:rayzamgh@gmail.com" @click="menuOpen = false">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { menuOpen: false };
  }
};
</script>
