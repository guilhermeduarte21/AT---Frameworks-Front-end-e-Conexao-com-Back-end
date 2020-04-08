<template>
  <div>
    <b-button variant="outline-primary" @click="voltar">Voltar</b-button>
    <hr />
    <div class="d-flex w-100 justify-content-between">
      <h3>{{ clienteById(id).nome }}</h3>
      <b-button variant="outline-primary" @click="editar">Editar</b-button>
    </div>
    <p class="mb-1">Numero de telefone: {{ clienteById(id).numero }}</p>
    <p class="mb-1">Data marcada: {{ clienteById(id).data }}</p>
    <p class="mb-1">Hora marcada: {{ clienteById(id).hora }}</p>
    <p class="mb-1">Serviço: {{ clienteById(id).servico }}</p>
    <p class="mb-1">
      Descrição do serviço: {{ clienteById(id).descricaoServico }}
    </p>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailCliente",
  data() {
    return { id: this.$route.params.id };
  },
  computed: mapGetters(["clienteById"]),
  methods: {
    editar() {
      this.$router.push({ name: "edit-cliente", params: { id: this.id } });
    },
    voltar() {
      this.$router.push({ name: "listarClientes" });
    }
  }
};
</script>

<style scoped>
h3 {
  color: #007bff;
}
</style>
