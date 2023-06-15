<script setup>
import { RouterView } from 'vue-router'
import sideBar from './components/sideNavBar.vue'

</script>

<template>
  <div id="circularcursor"></div>
  <div class="wrapper">
    <sideBar />
  </div>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 33vw;
  position: fixed;
  left: 0;
  padding:15vh 40px;
}
.content{
  margin-left: 33vw;
  width: 67vw;
  padding: 0px 50px;
}
</style>
