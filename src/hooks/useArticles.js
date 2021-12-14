import { onMounted, ref } from "vue";
import ArticleService from "../services/ArticleService";

const useArticles = () => {
  const isLoading = ref(false);
  const articles = ref([]);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      articles.value = await ArticleService.findAll();
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchData);

  return {
    articles,
    isLoading,
  };
};

export default useArticles;
