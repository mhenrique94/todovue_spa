<template>
    <nav>
    <div class="nav-wrapper pink lighten-1">
      <a href="./index.html" class="brand-logo right">todoVue</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="#"> <i class="fa-solid fa-home"></i> Tarefas</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import List from './List.vue'
    export default {
      name: 'NavBar',
      components: {
        List
      },
    }
</script>

<style>
    .nav-wrapper{
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .fa-solid{
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }

    .brand-logo{
        margin-right: 5%;
    }


</style>