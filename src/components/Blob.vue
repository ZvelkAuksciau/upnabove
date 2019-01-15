<template>
  <div class="blob"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blob::before {
  content: "";
  display: block;
  width: 200px;
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  background: linear-gradient(
    270deg,
    #43e97b,
    #38f9d7,
    #e0c3fc,
    #8ec5fc,
    #4facfe,
    #00f2fe,
    #a8edea,
    #fed6e3
  );
  opacity: 0.5;
  background-size: 1600% 1600%;
  box-shadow: inset 0px -20px 100px rgba(255, 255, 255, 0.6);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: transform 50s ease-in-out infinite both alternate,
    movement 40s ease-in-out infinite both, shade 60s linear infinite both;
}

@keyframes transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}

@keyframes movement {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translateY(20%) rotateY(10deg);
  }
}

@keyframes shade {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
