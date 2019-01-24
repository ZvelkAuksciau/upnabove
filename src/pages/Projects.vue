<template>
  <Layout>
    <div class="container">
      <Hero>
        <template slot="title">{{ $page.data.heroTitle }}</template>
        <template slot="subtitle">{{ $page.data.heroSubtitle }}</template>
      </Hero>
      <ProjectsGrid :projects="$page.projects.edges"/>
    </div>
  </Layout>
</template>

<page-query>
{
  data(path:"/data/project-page") {
    heroTitle
    heroSubtitle
  }
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "D. MMMM YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";

export default {
  metaInfo() {
    return {
      title: "Home"
    };
  },
  components: {
    Hero,
    ProjectsGrid
  }
};
</script>
