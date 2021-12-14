<template>
  <div class="home home__container">
    <h3>Home page</h3>
    <template v-if="isLoading"> loading... </template>

    <div v-if="articles && articles.length > 0">
      <div v-for="article in articles" :key="article.id">
        <article-item :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import useArticles from "../hooks/useArticles";

export default {
  name: "Home",
  components: { ArticleItem },
  setup() {
    const { isLoading, articles } = useArticles();

    return {
      isLoading,
      articles,
    };
  },
  // data: () => ({
  //   articles: null,
  // }),
  // methods: {
  //   async fetchArticles() {
  //     try {
  //       this.articles = await ArticleService.findAll();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  //
  // mounted() {
  //   this.fetchArticles();
  // },
};
</script>

<style>
.home__container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
