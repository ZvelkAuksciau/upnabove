<template>
  <Layout>
    <div class="container">
      <Hero>
        <template slot="title">{{ $page.data.heroTitle }}</template>
        <template slot="subtitle">{{ $page.data.heroSubtitle }}</template>
      </Hero>
      <ItemGrid :items="$page.products.edges" />
    </div>
  </Layout>
</template>

<page-query>
{
  data(path:"/data/product-page") {
    hero_title
    hero_subtitle
  }
	products: allProductPost {
    edges {
      node {
        id
        date (format: "YYYY MM DD")
        title
        categories
        thumbnail (quality: 90)
        cover
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ItemGrid from "@/components/ItemGrid";

export default {
  metaInfo() {
    return {
      title: "Products"
    };
  },
  components: {
    Hero,
    ItemGrid
  },
  name: "products"
};
</script>
