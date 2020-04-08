<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />

    <!-- Corpo da pagina -->
    <div class="container corpo">
      <div class="row">
        <div class="col-md-12">
          <div class="container pagina">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.corpo {
  margin-top: 25px;
}

.pagina {
  border: solid 1px #dfdfdf;
  padding: 25px !important;
}
</style>
