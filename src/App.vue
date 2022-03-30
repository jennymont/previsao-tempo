<template>
  <div>
    <h1>Previsão do Tempo</h1>
    <li class="pesquisa">
      <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre pela cidade" />
      <button>Buscar</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data(){
  return{
    filtro: ''

  }
},

created(){
  
}
};


</script>

<style>
h1 {
  text-align: center;
  
  font-size: 45px;
  color:black;
  height: 200px;
  margin: 0;
}
.filtro {
  
  width: 70%;
  border: 2px solid gray;
  float: left;
  margin-left: 15%;
}

.pesquisa{
  margin-top: 0%;
}

*{
  
}
</style>
