<template>
  <div id="card" class="card border-primary mb-3">
    <h1 class="card-header">
      Previsão do Tempo
      <img src="../imagens/img.png" alt="img.png" id="imagem1" />
    </h1>

    <div class="input-group" id="pesquisa">
      <input
        type="search"
        class="form-control"
        v-on:input="filtro = $event.target.value"
        placeholder="Filtre pela cidade"
      />

      <button id="but" type="button" class="btn btn-primary" @click="buscar()">
        Buscar
      </button>
    </div>

    <div class="card-footer bg-transparent border-he">
      {{ this.cidade.nome + "," + this.cidade.regiao + "," + this.cidade.pais }}
      {{ "-" + this.cidade.temperatura + "°C"}}
    </div>
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
      cidade: {},
    };
  },

  methods: {
    
    buscar() {
      api
        .get(`${this.filtro}`)
        .then((resposta) => {
          console.log("DEU CERTO");
          this.tempo = resposta.data;

          this.cidade = {
            nome: this.tempo.location.name,
            regiao: this.tempo.location.region,
            pais: this.tempo.location.country,
            temperatura: this.tempo.current.temperature,
          };

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
  margin-left: 2rem;
}

#pesquisa {
  margin: 2rem 2.5rem;
  width: 35rem;
}

#imagem1 {
  float: right;
  width: 20%;
  margin: 0.1em;
  padding: 0.5em;
}
.card-header {
  height: 8rem;
  width: 40rem;
}
#card {
  width: 40rem;
  height: 30rem;
  text-align: center;
  display: block;
  margin: 5rem 25rem;
  border-width: medium;
}
button {
  max-width: 5rem;
  display: -moz-box;
}

.card-header {
  size: 10 0px;
}
</style>
