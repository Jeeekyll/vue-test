<template>
  <router-link :to="`/article/${article.slug}`" class="article__link">
    <div class="article">
      <div class="fw-bold">
        {{ article.title }}
      </div>
      <img
        :src="`${DOMAIN_URL}/${article.cover}`"
        class="article__image"
        alt=""
      />
      <div>
        {{ article.body }}
      </div>
    </div>
  </router-link>
</template>

<script>
import { DOMAIN_URL } from "@/config";

export default {
  name: "ArticleItem",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      DOMAIN_URL,
    };
  },
};
</script>

<style scoped>
.article {
  border-bottom: 1px solid var(--bs-primary);
  margin: 20px 0;
  padding: 10px 0;
  color: black;
}

.article__image {
  width: 100%;
  object-fit: cover;
  max-height: 200px;
}

.article__link {
  text-decoration: none;
}
</style>
