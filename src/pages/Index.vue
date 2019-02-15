<template>
  <Layout>
    <div class="container">
      <Hero>
        <template slot="title">{{ $page.data.heroTitle }}</template>
        <template slot="subtitle">{{ $page.data.heroSubtitle }}</template>
      </Hero>
      <ItemGrid :items="posts"/>
      <Hero>
        <template slot="title">Team</template>
      </Hero>
      <BlobGrid :items="$page.team.edges"/>
    </div>
  </Layout>
</template>

<page-query>
{
  data(path:"/data/homepage") {
    heroTitle
    heroSubtitle
    numberOfPosts
  }
  projects: allProjectPost(perPage: 6) {
    edges {
      node {
        id
        date
        title
        categories
        thumbnail (quality: 90)
        cover
        path
      }
    }
  }
  products: allProductPost(perPage: 6) {
    edges {
      node {
        id
        date
        title
        categories
        thumbnail (quality: 90)
        cover
        path
      }
    }
  }
  team: allTeamMember {
    edges {
      node {
        id
        title
        image (quality: 90)
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ItemGrid from "@/components/ItemGrid";
import BlobGrid from "@/components/BlobGrid";

export default {
  metaInfo() {
    return {
      title: "Home"
    };
  },
  components: {
    Hero,
    ItemGrid,
    BlobGrid
  },
  computed: {
    posts() {
      return [...this.$page.projects.edges, ...this.$page.products.edges]
        .sort((a, b) => {
          return new Date(b.node.date) - new Date(a.node.date);
        })
        .slice(0, this.$page.data.numberOfPosts);
    }
  }
};
</script>
