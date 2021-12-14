import axios from "axios";
import { DOMAIN_URL } from "../config";
import $api from "./index";

export default class UserService {
  static async login(loginDto) {
    const { data } = await axios.post(`${DOMAIN_URL}/users/login`, {
      user: loginDto,
    });
    return data.user;
  }

  static async register(registerDto) {
    const { data } = await axios.post(`${DOMAIN_URL}/users`, {
      user: registerDto,
    });
    return data.user;
  }

  static async checkAuth() {
    const { data } = await $api.get(`${DOMAIN_URL}/user`);
    return data.user;
  }

  static async update(updateUserDto) {
    const { data } = await $api.put(`${DOMAIN_URL}/user`, {
      user: updateUserDto,
    });
    return data.user;
  }
}
