<template>
  <div class="blob" :style="blobStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    colorPool: {
      type: Array,
      required: false
    },
    animateShade: {
      type: Boolean,
      required: false
    },
    animateMovement: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      blobStyle: {
        backgroundImage:
          "linear-gradient(270deg, #43e97b, #38f9d7, #e0c3fc, #8ec5fc, #4facfe, #00f2fe, #a8edea, #fed6e3)",
        backgroundSize: "1600% 1600%",
        animation: ""
      }
    };
  },
  mounted() {
    // Generate random int from min (inclusive) to max (inclusive)
    const genRandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Set default blob animation
    this.blobStyle.animation = `blobTransform${genRandom(0, 6)} ${genRandom(
      40,
      50
    )}s infinite alternate`;

    if (this.animateMovement) {
      this.blobStyle.animation += `, blobMovement ${genRandom(
        20,
        30
      )}s ${genRandom(0, 5)}s infinite alternate`;
    }

    if (this.colorPool && this.animateShade) {
      // Random value between 0 and 359
      const colorsDirection = genRandom(0, 359);

      // Random value between colorsMin and colorsMax
      const colorsAmount = genRandom(3, 5);

      // Random colors from colorPool
      const colorsPicked = this.colorPool
        .sort(() => 0.5 - Math.random())
        .slice(0, colorsAmount)
        .map(pool => pool.color);

      // Set blob shade style and add animation
      this.blobStyle.backgroundImage = `linear-gradient(${colorsDirection}deg, ${colorsPicked.join(
        ", "
      )}`;
      this.blobStyle.backgroundSize = `${colorsAmount * 200}% ${colorsAmount *
        200}%`;

      this.blobStyle.animation += `, blobShade ${genRandom(40, 60)}s infinite`;
    }
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
</style>
