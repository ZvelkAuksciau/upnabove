<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.node.id">
      <Blob class="item-blob">
        <g-image
          :src="item.node.image"
          :alt="item.node.title"
          :key="item.node.id"
          class="item-image"
        />
      </Blob>
      <h3 class="item-title">{{ item.node.title }}</h3>
    </div>
  </div>
</template>

<script>
import Blob from "@/components/Blob";

export default {
  components: {
    Blob
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  text-align: center;
  margin: 0 40px 40px;
}

.item-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.item-blob {
  overflow: hidden;
  // width: 40vw;
  // height: 40vw;
  // max-width: 40vh;
  // max-height: 40vh;
  margin: 0 auto;
  opacity: 1;
}

.item-title {
  font-size: 1.4rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}

@media (min-width: 920px) {
  .item {
  }
}
</style>
