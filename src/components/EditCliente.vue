<template>
  <div>
    <hr />
    <h3>Editando Cliente</h3>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome do cliente: ">
        <b-form-input
          id="input-nome"
          v-model="cliente_edit.nome"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <div class="form-row">
        <b-form-group class="col-5" label="Numero de celular: ">
          <b-form-input
            id="input-numero"
            v-model="cliente_edit.numero"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-5" label="Data:">
          <b-form-input
            id="input-data"
            v-model="cliente_edit.data"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-2" label="Hora:">
          <b-form-input
            id="input-hora"
            v-model="cliente_edit.hora"
            type="time"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-form-group label="Categoria do serviço:">
        <b-form-select
          id="input-servico"
          v-model="cliente_edit.servico"
          :options="servicos"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Descrição do serviço: ">
        <b-form-textarea
          id="textarea"
          v-model="cliente_edit.descricaoServico"
          placeholder="Descrição do serviço..."
          rows="6"
          max-rows="12"
          required
        ></b-form-textarea>
      </b-form-group>

      <div align="center">
        <b-button type="submit" variant="primary">Salvar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditCliente",
  data() {
    return {
      id: this.$route.params.id,
      cliente_edit: {
        nome: "",
        numero: "",
        data: "",
        hora: "",
        servico: null,
        descricaoServico: ""
      },
      servicos: [
        { text: "Categoria:", value: null },
        "Cabelo",
        "Barba",
        "Sobrancelha",
        "Cilios",
        "Unha",
        "Depilação"
      ]
    };
  },
  computed: mapGetters(["clienteById"]),
  created() {
    this.cliente_edit = this.clienteById(this.id);
  },
  methods: {
    ...mapActions(["updateCliente"]),
    onSubmit() {
      this.updateCliente(this.cliente_edit);
      this.$router.push({ name: "clienteDetail", params: { id: this.id } });
      alert("Dados editados com sucesso");
    }
  }
};
</script>

<style scoped>
h3 {
  color: #ff0000;
}
</style>
