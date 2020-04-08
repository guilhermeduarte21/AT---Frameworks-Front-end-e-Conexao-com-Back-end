<template>
  <div>
    <b-button variant="outline-primary" @click="mostrarForm"
      >{{ nameButton }}
    </b-button>
    <b-form @submit.prevent="onSubmit" v-if="mostrarClientes">
      <hr />
      <h3>Adicionar Cliente</h3>
      <b-form-group label="Nome do cliente: ">
        <b-form-input
          id="input-nome"
          v-model="cliente_add.nome"
          type="text"
          required
          placeholder="Nome do cliente"
        ></b-form-input>
      </b-form-group>
      <div class="form-row">
        <div class="form-group  col-5">
          <b-form-group label="Numero de celular: ">
            <b-form-input
              id="input-numero"
              v-model="cliente_add.numero"
              type="number"
              required
              placeholder="(99) 99999-9999"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="form-group  col-5">
          <b-form-group label="Data:">
            <b-form-input
              id="input-data"
              v-model="cliente_add.data"
              type="date"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="form-group  col-2">
          <b-form-group label="Hora:">
            <b-form-input
              id="input-hora"
              v-model="cliente_add.hora"
              type="time"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-form-group label="Categoria do serviço:">
        <b-form-select
          id="input-servico"
          v-model="cliente_add.servico"
          :options="servicos"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Descrição do serviço: ">
        <b-form-textarea
          id="textarea"
          v-model="cliente_add.descricaoServico"
          placeholder="Descrição do serviço..."
          rows="6"
          max-rows="12"
          required
        ></b-form-textarea>
      </b-form-group>

      <div align="center">
        <b-button type="submit" variant="primary">Adicionar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddCliente",
  data() {
    return {
      nameButton: "Adicionar novo",
      mostrarClientes: false,
      cliente_add: {
        nome: "",
        numero: "",
        data: "",
        hora: "",
        servico: null,
        descricaoServico: ""
      },
      servicos: [
        { text: "servico:", value: null },
        "Cabelo",
        "Barba",
        "Sobrancelha",
        "Cilios",
        "Unha",
        "Depilação"
      ]
    };
  },
  methods: {
    ...mapActions(["addCliente"]),
    mostrarForm() {
      this.mostrarClientes = this.mostrarClientes ? false : true;

      if (this.mostrarClientes) {
        this.nameButton = "Voltar";
      } else {
        this.nameButton = "Adicionar novo";
      }
    },
    onSubmit() {
      this.addCliente(this.cliente_add);
      alert("Cliente Adicionado com sucesso!");
    }
  }
};
</script>

<style scoped>
h3 {
  color: #007bff;
}
</style>
