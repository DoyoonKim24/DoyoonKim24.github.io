<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="greetings">
    <h1>DOYOON</h1>
    <h1>KIM</h1>
  </div>
  <nav class="sections">
    <div class ="links">
      <RouterLink to="/experience">Work Experience</RouterLink>
      <div class="circle"></div>
    </div>
    <div class ="links">
      <RouterLink to="/projects">Side Projects</RouterLink>
      <div class="circle"></div>
    </div>
    <div class ="links">
      <RouterLink to="/about">About Me</RouterLink>
      <div class="circle"></div>
    </div>
    <div class ="links">
      <RouterLink to="/">Resume</RouterLink>
      <div class="circle"></div>
    </div>
  </nav>
</template>

<style scoped>
.sections{
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 160px;
}
.links{
  display: flex;
  align-items: center;
  column-gap: 10px;
  transition: 0.4s;
}

a {
  text-decoration: none;
  color:#FF6838;
  font-size: 48px;
  line-height: 56px;
  font-family: "BebasNeue";
}

h1{
  text-align: end;
}
.circle {
  border-radius: 16px;
  width: 10px;
  height: 10px;
  background-color:#FF6838;
  transition: 0.4s;
}

@media (hover: hover) {
  .links:hover .circle{
    width: 40px;
  }
}
</style>
