<template>
  <Layout>
    <div class="container">
      <Hero>
        <template slot="title">{{ $page.data.heroTitle }}</template>
        <template slot="subtitle">{{ $page.data.heroSubtitle }}</template>
      </Hero>

      <ContactForm/>
    </div>
  </Layout>
</template>

<page-query>
{
  data(path:"/data/contact-page") {
    heroTitle
    heroSubtitle
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default {
  metaInfo() {
    return {
      title: "Contact"
    };
  },
  components: {
    Hero,
    ContactForm
  }
};
</script>

<style scoped>
</style>

