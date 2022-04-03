<template>
  <div>
    <h1>
      Previsão do Tempo
      <img src="../imagens/img.png" alt="img.png" id="imagem1" />
    </h1>

    <li class="pesquisa">
      <input
        type="search"
        class="filtro"
        v-on:input="filtro = $event.target.value"
        placeholder="Filtre pela cidade"
      />
      {{ filtro }}
      <button>Buscar</button>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},

  data() {
    return {
      filtro: "",
    };
  },

  created() {
    axios
      .get("https://api.github.com/users/luizmedeiros00") //alterar api 
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>t

<style>
h1 {
  text-align: center;

  font-size: 45px;
  color: black;
  height: 200px;
  margin: 0;
}
.filtro {
  width: 70%;
  border: 2px solid gray;
  float: left;
  margin-left: 15%;
}

.pesquisa {
  margin-top: 0%;
}

#imagem1 {
  float: right;
  width: 10%;
  margin: 0.1em;
  padding: 0.5em;
}
</style>
