<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.node.id">
      <g-link :to="item.node.path" class="item-link">
        <div class="item-image">
          <Blob
            v-if="!item.node.cover"
            class="item-blob"
            animateShade
            animateMovement
            :colorPool="$static.data.blobsColorPool"
          />
          <g-image
            :src="item.node.thumbnail"
            :alt="item.node.title"
            :key="item.node.id"
            :class="{ cover: item.node.cover }"
            class="thumbnail"
          />
        </div>
        <h3 class="item-title">{{ item.node.title }}</h3>
        <div class="categories" v-if="item.node.categories[0] != 'none'">
          <span
            class="category"
            v-for="(category, index) in item.node.categories"
            :key="index"
          >
            {{ category }}
          </span>
        </div>
      </g-link>
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

<static-query>
query ColorPool {
  data(path: "/data/theme") {
    blobsColorPool {
      color
    }
  }
}
</static-query>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem 4rem;
}

.item {
  grid-column: auto / span 2;
  text-align: center;
}

.item-link {
  text-decoration: none;
}

.item-image {
  position: relative;
}

.item-blob {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40vw;
  height: 40vw;
  max-width: 40vh;
  max-height: 40vh;
}

.thumbnail {
  height: 350px;
  object-fit: contain;
  transition: all 0.15s ease;
  z-index: 1;
  position: relative;

  &.cover {
    object-fit: cover;
  }
}
.item-title {
  font-size: 1.4rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
  margin-bottom: 1rem;
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  position: relative;
  margin: 0;
}

.item:hover .thumbnail {
  transform: scale(1.05);
}

@media (min-width: 920px) {
  .item {
    grid-column: auto / span 1;
    .thumbnail {
      padding: 0 30px;
      height: 400px;
    }
  }
  .item:nth-child(3n + 1) {
    grid-column: auto / span 2;
    .thumbnail {
      padding: 0 60px;
    }
  }
}
</style>
