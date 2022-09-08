<template>
  <div id="app">
    <NavBar/>
    <a v-show="listIsEnabled" @click="listIsEnabled = false; editIsEnabled = true; editingTask = false" class="btn-floating btn-large waves-effect waves-light pink">
      <i class="fa-solid fa-plus"></i>
    </a>
    <Form
    :editIsEnabled="editIsEnabled" 
    :editingTask="editingTask"
    :task="task"
    />
    <List
    :listIsEnabled="listIsEnabled"
    @atualiza-task="(receives)=> {
      task = receives;
      editIsEnabled = true;
    }"
    :task="task"
    />
    <FootBar/>
  </div>
</template>

<script>

export default {
    name: "app",
    data() {
      return{
        editIsEnabled: false,
        listIsEnabled: true,
        editingTask: true,
        task:{
          id: null,
          title: null,
          dueTo: null,
          project: null,
          user: null,
        },
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.btn-floating{
        position: fixed;
        left: 2%;
        top: 15%;
    }
</style>
