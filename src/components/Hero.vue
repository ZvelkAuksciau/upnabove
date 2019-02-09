<template>
  <div class="hero">
    <h1 class="hero-title">
      <slot name="title"></slot>
    </h1>
    <h2 class="hero-subtitle">
      <slot name="subtitle"></slot>
    </h2>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixins.scss";

.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
}

.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}

@include small {
  .hero {
    padding: 4rem 0 4rem;
  }
}
</style>
