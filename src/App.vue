<script setup>
import { RouterView } from 'vue-router'
import sideBar from './components/sideNavBar.vue'

</script>

<template>
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
  width: 450px;
  position: fixed;
  left: 0;
  padding-top: 15vh;
  padding-left: 40px;
}

.content {
  padding: 0px 50px;
  margin-left: 450px;
  width: 1062px;
}
</style>
