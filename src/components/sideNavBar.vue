<script>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <div class="name">
      <h1>DOYOON<br />KIM</h1>
    </div>
    <nav class="sections">
      <div class="links">
        <a href="#work">Work Experience</a>
        <div class="circle"></div>
      </div>
      <div class="links">
        <a href="#projects">Side Projects</a>
        <div class="circle"></div>
      </div>
      <div class="links">
        <a href="#expertise">Expertise</a>
        <div class="circle"></div>
      </div>
      <div class="links">
        <a href="#about">About Me</a>
        <div class="circle"></div>
      </div>
      <div class="links">
        <a href="https://doyoon-kim-resume.tiiny.site/" target="_blank" rel="noopener noreferrer">Resume</a>
        <div class="circle"></div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sections {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.links {
  display: flex;
  align-items: center;
  column-gap: 10px;
  transition: 0.4s;
}

a {
  text-decoration: none;
  color: #FF6838;
  font-size: 3.3vw;
  line-height: 3.5vw;
  font-family: "BebasNeue";
}

h1 {
  text-align: right;
}

.circle {
  border-radius: 16px;
  width:10px;
  height: 10px;
  background-color: #FF6838;
  transition: 0.4s;
}

@media (hover: hover) {
  .links:hover .circle {
    width: 40px;
  }
}
</style>
