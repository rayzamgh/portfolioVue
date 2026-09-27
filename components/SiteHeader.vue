<template>
  <header class="site-header">
    <div class="site-header__inner page-width">
      <span class="site-header__location">Jakarta, Indonesia</span>
      <nuxt-link class="site-header__brand" to="/" aria-label="Rayza Mahendra, home">
        Rayza Mahendra
      </nuxt-link>
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
        <nuxt-link to="/" exact @click.native="menuOpen = false">Home</nuxt-link>
        <nuxt-link to="/profile" @click.native="menuOpen = false">About Me</nuxt-link>
        <a href="#contact" @click="menuOpen = false">Contact</a>
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
