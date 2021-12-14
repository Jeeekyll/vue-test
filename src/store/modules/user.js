import UserService from "@/services/UserService";

const state = {
  user: null,
  isAuth: false,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
    state.isAuth = true;
  },
  removeUser(state) {
    state.user = null;
    state.isAuth = false;
  },
};

const getters = {
  user: (state) => state.user,
  isAuth: (state) => state.isAuth,
};

const actions = {
  async login(context, loginUserDto) {
    try {
      const user = await UserService.login(loginUserDto);
      context.commit("setUser", user);
      localStorage.setItem("token", user.token);
    } catch (error) {
      console.log(error);
    }
  },

  async checkAuth(context) {
    try {
      const user = await UserService.checkAuth();
      context.commit("setUser", user);
    } catch (error) {
      console.log(error);
    }
  },

  async logout(context) {
    try {
      localStorage.removeItem("token");
      context.commit("removeUser");
    } catch (error) {
      console.log(error);
    }
  },

  async register(context, registerDto) {
    try {
      const user = await UserService.register(registerDto);
      context.commit("setUser", user);
      localStorage.setItem("token", user.token);
    } catch (error) {
      console.log(error);
    }
  },

  async update({commit}, updateUserDto) {
    try {
      const user = await UserService.update(updateUserDto);
      commit("setUser", user);
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};
