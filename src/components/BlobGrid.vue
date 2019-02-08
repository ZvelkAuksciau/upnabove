<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.node.id">
      <div class="item-image">
        <Blob class="item-blob">
          <g-image :src="item.node.image" :alt="item.node.title" class="item-image"/>
        </Blob>
      </div>
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
  },
  mounted() {
    console.log(this.items);
  }
};
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 6rem 4rem;
}

.item {
  grid-column: auto / span 2;
  text-align: center;
}

.item-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.item-blob {
  overflow: hidden;
  width: 40vw;
  height: 40vw;
  max-width: 40vh;
  max-height: 40vh;
  opacity: 1;
}

.item-title {
  font-size: 1.4rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}

@media (min-width: 920px) {
  .item {
    grid-column: auto / span 1;
  }
}
</style>
