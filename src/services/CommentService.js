import $api from "./index";
import { DOMAIN_URL } from "../config";

export default class CommentService {
  static async create(createCommentDto) {
    const { data } = await $api.post(
      `${DOMAIN_URL}/comments`,
      createCommentDto
    );
    return data;
  }

  static async delete(idx) {
    const { data } = await $api.delete(`${DOMAIN_URL}/comments/${idx}`);
    return data.data;
  }
}
