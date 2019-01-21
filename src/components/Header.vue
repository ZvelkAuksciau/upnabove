<template>
  <header class="header">
    <div class="container">
      <div>
        <g-link :to="{ name: 'home' }" class="home-link">
          <img src="/logo.svg" :alt="settings.site_name" class="logo">
        </g-link>
      </div>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'contact' }">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 10;
  padding: 0 1rem;

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}

.logo {
  height: 2.5rem;
}

.nav__link {
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: 0.2s ease;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:last-of-type {
    margin: 0;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
}
</style>
