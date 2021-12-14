import axios from "axios";
import { DOMAIN_URL } from "../config";

export default class ArticleService {
  static async findAll() {
    const { data } = await axios.get(`${DOMAIN_URL}/articles`);
    return data.articles;
  }

  static async findOne(slug) {
    const { data } = await axios.get(`${DOMAIN_URL}/articles/${slug}`);
    return data.article;
  }
}
