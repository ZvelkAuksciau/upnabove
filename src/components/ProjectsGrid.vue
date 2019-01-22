<template>
  <div class="projects">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
        <div class="project-image">
          <Blob class="project-blob" :colorPool="$static.data.blobsColorPool"/>
          <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail"/>
        </div>
        <h3 class="project-title">{{ item.node.title }}</h3>
        <div class="categories" v-if="item.node.categories[0] != 'none'">
          <span
            class="category"
            v-for="(item, index) in item.node.categories"
            :key="index"
          >{{ item }}</span>
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
    projects: {
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
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem 4rem;
}

.project {
  grid-column: auto / span 2;
  text-align: center;
}

.project-link {
  text-decoration: none;
}

.project-image {
  position: relative;
}

.project-blob {
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
  height: 300px;
  object-fit: contain;
  transition: all 0.15s ease;
  z-index: 1;
  position: relative;
}
.project-title {
  font-size: 1.4rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.05);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
    .thumbnail {
      padding: 0 30px;
      height: 400px;
    }
  }
  .project:nth-child(3n + 1) {
    grid-column: auto / span 2;
    .thumbnail {
      padding: 0 60px;
    }
  }
}
</style>
