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
      <button @click="buscar()">Buscar</button>
      {{this.cidade}}
    </li>

  </div>
</template>

<script>
import api from "@/service/api.js";

export default {
  name: "App",
  components: {},

  data() {
    return {
      filtro: "",
      tempo: {},
      cidade: {}

    };
  },

  methods: {
    buscar() {
      api
        .get(`${this.filtro}`)
        .then((resposta) => {
          console.log("DEU CERTO");
          this.tempo = resposta.data

          this.cidade = {
            nome: this.tempo.location.name,
            regiao: this.tempo.location.region,
            pais:   this.tempo.location.country,
            temperatura: this.tempo.current.temperature,
          }
          console.log(this.cidade);
        })                                        
        .catch((erro) => console.log(`DEU ERRO: ${erro}`));
    },
  },

  created() {},
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
