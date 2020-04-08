<template>
  <div>
    <b-nav pills vertical class="pagina">
      <b-nav-item
        :to="{ name: 'listarClientes' }"
        exact
        exact-active-class="active"
        >Lista de clientes</b-nav-item
      >
      <b-nav-item :to="{ name: 'addCliente' }" exact exact-active-class="active"
        >Adicionar cliente</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "menuVertical"
};
</script>

<style scoped>
.pagina {
  border: solid 1px #dfdfdf;
  padding: 25px !important;
}
</style>
