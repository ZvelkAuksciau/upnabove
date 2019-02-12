<template>
  <Layout>
    <div class="product">
      <div class="container">
        <div class="product-header">
          <h1 class="product-title">{{ $page.post.title }}</h1>
          <div class="product-info">
            <div v-if="$page.post.categories[0] != 'none'" class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span
                  class="category"
                  v-for="(category, index) in $page.post.categories"
                  :key="index"
                >{{ category }}</span>
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <span>{{ $page.post.date }}</span>
            </div>

            <div class="price-container">
              <span class="label">Price</span>
              <span>€{{ $page.post.price }}</span>
            </div>
          </div>
        </div>
        <div v-html="$page.post.content" class="content"/>
        <ContactForm :pageTitle="$metaInfo.title"/> 
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post: productPost (path: $path) {
    title
    price
    date (format: "YYYY")
    content
    categories
    bgColor
    fgColor
  }
}
</page-query>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${
          this.$page.post.bgColor
            ? this.$page.post.bgColor
            : "var(--color-base)"
        }; color: ${
          this.$page.post.fgColor
            ? this.$page.post.fgColor
            : "var(--color-contrast)"
        }`
      }
    };
  },
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 4rem;
}

.product-header {
  padding: 20vh 0 4rem 0;
}
.product-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.product-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.product-info > div {
  margin-right: 4rem;
}
.product-info > div:last-of-type {
  margin: 0;
}
.product:after {
  content: ", ";
}
.product:last-of-type:after {
  content: "";
}
</style>
