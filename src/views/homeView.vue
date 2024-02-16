<script setup>
import expertiseView from './expertiseView.vue';
import projectsView from './projectsView.vue';
import workView from './workView.vue';
import aboutView from './aboutView.vue'
import sideBar from '../components/sideNavBar.vue'

</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <sideBar />
    </div>
    <div class="placeholder"> </div>
    <div class="content">
      <div>
        <workView id="work" />
        <projectsView id="projects" />
        <expertiseView id="expertise" />
        <aboutView id="about" />
      </div>
    </div>
  </div>
</template>

<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.placeholder {
  width: 26vw
}

.sidebar {
  width: 30%;
  height: 100%;
  position: fixed;
  left: 0;
  padding: 15vh 0 7vh 4vw;
}

.content {
  width: 68%;
  padding: 0 2vw;
}
</style>