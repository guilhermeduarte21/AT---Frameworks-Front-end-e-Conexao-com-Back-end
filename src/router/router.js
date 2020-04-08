import Vue from "vue";
import VueRouter from "vue-router";
import Clientes from "@/components/Clientes.vue";
import AddCliente from "@/components/AddCliente.vue";
import DetailCliente from "@/components/DetailCliente.vue";
import EditCliente from "@/components/EditCliente.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "listarClientes",
      component: Clientes
    },
    {
      path: "/addCliente",
      name: "addCliente",
      component: AddCliente
    },
    {
      path: "/cliente/:id",
      name: "clienteDetail",
      component: DetailCliente,
      children: [
        {
          path: "edit",
          name: "edit-cliente",
          component: EditCliente
        }
      ]
    }
  ]
});
