<template>
  <div class="blob" :style="blobStyle"></div>
</template>

<script>
export default {
  data() {
    return {
      colorPool: [
        "#43e97b",
        "#38f9d7",
        "#e0c3fc",
        "#8ec5fc",
        "#4facfe",
        "#00f2fe",
        "#a8edea",
        "#fed6e3"
      ],
      blobStyle: {
        backgroundImage:
          "linear-gradient(270deg, #43e97b, #38f9d7, #e0c3fc, #8ec5fc, #4facfe, #00f2fe, #a8edea, #fed6e3)",
        backgroundSize: "1600% 1600%",
        animation:
          "transform 50s ease-in-out infinite both alternate, movement 40s ease-in-out infinite both, blobShade 60s linear infinite both"
      }
    };
  },
  mounted() {
    const genRandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // Random value between 0 and 359
    let colorsDirection = genRandom(0, 359);

    // Random value between colorsMin and colorsMax
    let colorsAmount = genRandom(3, 5);

    // Random colors from this.colorPool
    let colorsPicked = this.colorPool
      .sort(() => 0.5 - Math.random())
      .slice(0, colorsAmount);

    // Set blob styles
    this.blobStyle.backgroundImage = `linear-gradient(${colorsDirection}deg, ${colorsPicked.join(
      ", "
    )}`;
    this.blobStyle.backgroundSize = `${colorsAmount * 200}% ${colorsAmount *
      200}%`;
    this.blobStyle.animation = `blobTransform${genRandom(0, 5)} ${genRandom(
      50,
      70
    )}s infinite alternate, blobMovement ${genRandom(20, 40)}s ${genRandom(
      0,
      5
    )}s infinite alternate, blobShade ${genRandom(40, 60)}s infinite`;
  }
};
</script>
<style lang="scss">
.blob {
  width: 200px;
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  opacity: 0.5;
  box-shadow: inset 0px -20px 100px rgba(255, 255, 255, 0.6);
  transform-origin: 50% 50%;
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
  100% {
    border-radius: 69% 32% 31% 42% / 54% 55% 55% 69%;
  }
}

@keyframes blobTransform3 {
  0% {
    border-radius: 41% 51% 59% 51% / 54% 61% 42% 58%;
  }
  7% {
    border-radius: 46% 63% 57% 38% / 67% 57% 40% 61%;
  }
  37% {
    border-radius: 43% 60% 66% 45% / 52% 66% 30% 62%;
  }
  54% {
    border-radius: 69% 59% 66% 49% / 55% 30% 70% 43%;
  }
  64% {
    border-radius: 41% 70% 37% 63% / 40% 65% 33% 55%;
  }
  100% {
    border-radius: 31% 51% 54% 66% / 40% 42% 49% 34%;
  }
}

@keyframes blobTransform4 {
  0% {
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
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
}

@keyframes blobTransform5 {
  0% {
    border-radius: 69% 66% 33% 60% / 33% 48% 34% 45%;
  }
  17% {
    border-radius: 41% 42% 65% 51% / 68% 44% 40% 34%;
  }
  31% {
    border-radius: 59% 58% 66% 60% / 31% 39% 30% 45%;
  }
  56% {
    border-radius: 61% 50% 63% 39% / 60% 39% 40% 60%;
  }
  62% {
    border-radius: 68% 61% 34% 44% / 35% 32% 62% 65%;
  }
  100% {
    border-radius: 44% 53% 52% 66% / 46% 34% 63% 52%;
  }
}

@keyframes blobMovement {
  0% {
    transform: translateY(0) rotateZ(0);
  }
  100% {
    transform: translateY(10%) rotateZ(10deg);
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
