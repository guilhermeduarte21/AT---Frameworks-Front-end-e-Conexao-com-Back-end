<template>
  <div>
    <div>
      <AddCliente />
      <hr />
      
      <h3>Lista de Clientes</h3>
      <div v-if="allClientes.length != 0">
        <b-list-group v-for="cliente in allClientes" :key="cliente.id">
          <b-list-group-item
            class="flex-column align-items-start"
            v-if="allClientes.length > 0"
          >
            <div class="d-flex w-100 justify-content-between">
              <router-link
                class="mb-1"
                tag="h5"
                :to="{ name: 'clienteDetail', params: { id: cliente.id } }"
              >
                {{ cliente.nome }}
              </router-link>
              <small>{{ cliente.data }} ás {{ cliente.hora }}</small>
              <small>
                <b-icon
                  icon="trash"
                  variant="danger"
                  font-scale="1.5"
                  @click="deleteCliente(cliente.id)"
                ></b-icon>
              </small>
            </div>
          </b-list-group-item>
          <div aligin="center" v-else>
            <h4>Não há clientes</h4>
          </div>
        </b-list-group>
      </div>
      <div align="center" v-else>
        <h5>Sem Clientes</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddCliente from "./AddCliente";

export default {
  name: "Clientes",
  components: {
    AddCliente
  },
  methods: {
    ...mapActions(["getClientes", "deleteCliente"]),
  },
  computed: {
    ...mapGetters(["allClientes"])
  },
  created() {
    this.getClientes();
  }
};
</script>

<style scoped>
h3 {
  color: #007bff;
}
</style>
