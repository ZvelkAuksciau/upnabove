<template>
  <div class="layout">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  --color-error: rgb(239, 63, 55);
  --color-success: rgb(76, 175, 80);

  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding-top: 6rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
  display: inline-block;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

@keyframes blobTransform0 {
  0% {
    border-radius: 65% 53% 43% 45% / 46% 33% 54% 51%;
  }
  12% {
    border-radius: 60% 53% 66% 61% / 37% 66% 55% 70%;
  }
  33% {
    border-radius: 54% 38% 37% 33% / 52% 65% 52% 57%;
  }
  56% {
    border-radius: 38% 47% 44% 70% / 37% 31% 51% 52%;
  }
  67% {
    border-radius: 38% 48% 70% 62% / 36% 64% 62% 31%;
  }
  85% {
    border-radius: 56% 52% 43% 49% / 43% 54% 53% 36%;
  }
  100% {
    border-radius: 56% 48% 41% 31% / 33% 33% 36% 57%;
  }
}

@keyframes blobTransform1 {
  0% {
    border-radius: 58% 66% 68% 70% / 59% 70% 46% 30%;
  }
  3% {
    border-radius: 50% 45% 36% 30% / 35% 70% 70% 56%;
  }
  25% {
    border-radius: 63% 56% 48% 70% / 58% 43% 69% 57%;
  }
  44% {
    border-radius: 58% 62% 66% 63% / 30% 38% 48% 44%;
  }
  65% {
    border-radius: 62% 38% 68% 45% / 49% 32% 70% 33%;
  }
  84% {
    border-radius: 41% 53% 61% 54% / 47% 61% 44% 52%;
  }
  100% {
    border-radius: 40% 40% 58% 45% / 47% 38% 39% 45%;
  }
}

@keyframes blobTransform2 {
  0% {
    border-radius: 44% 58% 62% 37% / 35% 43% 35% 45%;
  }
  13% {
    border-radius: 60% 51% 38% 36% / 47% 67% 62% 66%;
  }
  27% {
    border-radius: 31% 32% 41% 57% / 30% 49% 39% 37%;
  }
  60% {
    border-radius: 41% 53% 61% 54% / 47% 61% 44% 52%;
  }
  78% {
    border-radius: 40% 64% 47% 59% / 41% 68% 49% 65%;
  }
  92% {
    border-radius: 55% 57% 38% 53% / 36% 58% 50% 42%;
  }
  100% {
    border-radius: 69% 32% 31% 42% / 54% 55% 55% 69%;
  }
}

@keyframes blobTransform3 {
  0% {
    border-radius: 47% 52% 46% 34% / 53% 46% 33% 40%;
  }
  7% {
    border-radius: 56% 45% 34% 47% / 51% 31% 48% 54%;
  }
  35% {
    border-radius: 56% 52% 43% 49% / 43% 54% 53% 36%;
  }
  42% {
    border-radius: 38% 59% 39% 56% / 55% 39% 33% 52%;
  }
  75% {
    border-radius: 56% 30% 49% 57% / 58% 46% 50% 45%;
  }
  81% {
    border-radius: 60% 51% 38% 36% / 47% 67% 62% 66%;
  }
  100% {
    border-radius: 58% 37% 42% 38% / 57% 58% 57% 32%;
  }
}

@keyframes blobTransform4 {
  0% {
    border-radius: 60% 43% 60% 47% / 58% 48% 45% 33%;
  }
  14% {
    border-radius: 57% 45% 52% 42% / 32% 56% 53% 42%;
  }
  20% {
    border-radius: 31% 35% 52% 55% / 41% 32% 42% 47%;
  }
  57% {
    border-radius: 41% 40% 45% 53% / 43% 36% 35% 52%;
  }
  61% {
    border-radius: 55% 57% 38% 53% / 36% 58% 50% 42%;
  }
  88% {
    border-radius: 56% 52% 43% 49% / 43% 54% 53% 36%;
  }
  100% {
    border-radius: 49% 54% 39% 33% / 59% 47% 46% 53%;
  }
}

@keyframes blobTransform5 {
  0% {
    border-radius: 36% 32% 39% 34% / 53% 35% 45% 52%;
  }
  12% {
    border-radius: 56% 54% 39% 51% / 58% 52% 59% 43%;
  }
  29% {
    border-radius: 35% 40% 60% 47% / 38% 34% 56% 38%;
  }
  51% {
    border-radius: 45% 59% 44% 53% / 54% 38% 34% 42%;
  }
  80% {
    border-radius: 48% 44% 49% 57% / 46% 53% 35% 46%;
  }
  91% {
    border-radius: 56% 45% 34% 47% / 51% 31% 48% 54%;
  }
  100% {
    border-radius: 56% 41% 48% 51% / 56% 57% 51% 45%;
  }
}

@keyframes blobTransform6 {
  0% {
    border-radius: 43% 52% 33% 44% / 39% 56% 32% 59%;
  }
  7% {
    border-radius: 53% 34% 56% 54% / 31% 44% 41% 57%;
  }
  31% {
    border-radius: 37% 52% 41% 32% / 33% 49% 40% 36%;
  }
  40% {
    border-radius: 54% 34% 58% 38% / 39% 56% 50% 50%;
  }
  64% {
    border-radius: 59% 58% 58% 43% / 44% 36% 60% 54%;
  }
  88% {
    border-radius: 30% 35% 37% 48% / 36% 41% 42% 53%;
  }
  100% {
    border-radius: 33% 44% 32% 54% / 33% 55% 53% 51%;
  }
}

@keyframes blobMovement {
  0% {
    transform: translateY(0) rotateZ(0);
  }
  100% {
    transform: translateY(10%) rotateZ(20deg);
  }
}

@keyframes blobShade {
  0% {
    background-position: 0 0;
  }
  33% {
    background-position: 100% 100%;
  }
  66% {
    background-postion: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
