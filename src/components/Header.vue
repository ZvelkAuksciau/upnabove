<template>
  <header class="header">
    <div class="container">
      <div>
        <g-link :to="{ name: 'home' }" class="home-link">
          <img src="/logo.svg" :alt="$static.data.siteName" class="logo">
          <span class="home-link__text">Home</span>
        </g-link>
      </div>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'products' }">Products</g-link>
        <g-link class="nav__link" :to="{ name: 'projects' }">Projects</g-link>
        <g-link class="nav__link" :to="{ name: 'contact' }">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
{
  data(path:"/data/theme") {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixins.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.logo {
  height: 2.5rem;
  margin: 0.5rem;
}

.nav {
  margin-bottom: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nav__link {
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  padding: 4px;

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

.home-link__text {
  display: none;
}

@include small {
  .header {
    padding: 0 1rem;
    height: 6rem;

    .container {
      flex-direction: row;
      justify-content: space-between;
      height: 100%;
    }
  }

  .nav {
    display: block;
    width: auto;
  }

  .nav__link {
    margin-right: 2rem;
  }

  .home-link {
    display: flex;
    align-items: center;
    text-decoration: none;

    &__text {
      display: block;
      margin-left: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  .logo,
  .nav {
    margin: 0;
  }
}
</style>
