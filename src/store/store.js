import Vue from "vue";
import Vuex from "vuex";
import clientes from "./modules/clientes";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    clientes
  }
});
