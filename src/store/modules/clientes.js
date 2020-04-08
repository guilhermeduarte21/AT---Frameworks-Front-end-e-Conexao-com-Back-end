import axios from "axios";

const state = {
  clientes: [],
};

const getters = {
  allClientes: (state) => state.clientes,
  clienteById: (state) => (id) =>
    (state.clientes = state.clientes.filter((c) => c.id == id))[0],
};

const actions = {
  getClientes({ commit }) {
    axios
      .get(
        "https://my-json-server.typicode.com/guilhermeduarte21/fakeAPI/clientes"
      )
      .then((response) => {
        commit("getClientes", response.data);
      });
  },
  addCliente({ commit }, new_cliente) {
    const new_id = state.clientes.length + 1;
    new_cliente.id = new_id;
    commit("addCliente", new_cliente);
  },
  deleteCliente({ commit }, id) {
    commit("removeCliente", id);
  },
  updateCliente({ commit }, updCliente) {
    commit("updateCliente", updCliente);
  },
};

const mutations = {
  getClientes: (state, clientes) => (state.clientes = clientes),
  addCliente: (state, new_cliente) => state.clientes.push(new_cliente),
  removeCliente: (state, id) =>
    (state.clientes = state.clientes.filter((c) => c.id !== id)),
  updateCliente: (state, updCliente) => {
    const index = state.clientes.findIndex((c) => c.id === updCliente.id);
    if (index !== -1) {
      state.clientes.splice(index, 1, updCliente);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
