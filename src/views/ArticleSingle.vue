<template>
  <div class="article__container">
    <template v-if="article && !!Object.keys(article).length > 0">
      <primary-button text="Back" @click="$router.back()" />
      <h3>{{ article.title }}</h3>
      <div>{{ article.description }}</div>
      <img :src="`${DOMAIN_URL}/${article.cover}`" class="article__cover" />
      <div>{{ article.body }}</div>
      <div>{{ article.favouritesCount }} like</div>
      <div>{{ article.comments.length || 0 }} comments</div>

      <comments-list
        :comments="article.comments"
        @createComment="onCommentCreate"
        @deleteComment="onCommentDelete"
      />
    </template>
  </div>
</template>

<script>
import ArticleService from "@/services/ArticleService";
import CommentService from "@/services/CommentService";
import { DOMAIN_URL } from "@/config";
import PrimaryButton from "@/components/UI/PrimaryButton";
import CommentsList from "../components/CommentsList";

export default {
  name: "ArticleSingle",
  components: { CommentsList, PrimaryButton },
  setup() {
    return {
      DOMAIN_URL,
    };
  },
  data: () => ({
    article: null,
  }),
  methods: {
    async fetchArticle() {
      const slug = this.$route.params.slug;
      this.article = await ArticleService.findOne(slug);
    },
    async onCommentCreate(payload) {
      try {
        const comment = await CommentService.create({
          ...payload,
          articleId: this.article.id,
        });
        this.article.comments = [comment, ...this.article.comments];
      } catch (error) {
        console.log(error);
      }
    },
    async onCommentDelete(payload) {
      try {
        const commentId = await CommentService.delete(payload);
        this.article.comments = this.article.comments.filter(
          (i) => i.id !== commentId
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchArticle();
  },
};
</script>

<style scoped>
.article__container {
  max-width: 700px;
  margin: 30px auto;
  padding: 0 15px;
}

.article__cover {
  max-width: 400px;
  object-fit: cover;
}
</style>
