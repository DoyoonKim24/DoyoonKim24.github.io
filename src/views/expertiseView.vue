<template>
  <div class="expertise-page">
    <h4>Expertise</h4>
    <div class="expertise-flex">
      <div class="expertise-item one">
        <div class="header-group">
          <font-awesome-icon icon="fa-solid fa-code-branch" size="4x" style="color:#401A0E;" />
          <h2><span class="underline green"></span>Software<br>Dev</h2>
        </div>
        <p>Experienced in both procedural and OOP: Python, JavaScript, C, and Java.</p>
      </div>
      <div class="expertise-item two">
        <div class="header-group">
          <font-awesome-icon icon="fa-solid fa-laptop-code" size="4x" style="color:#401A0E;" />
          <h2><span class="underline pink"></span>FrontEnd<br>DEV</h2>
        </div>
        <p>Passionate about UI/UX. Over 2 years of experience in HTML, CSS, JS, and VueJS framework.</p>
      </div>
      <div class="expertise-item three">
        <div class="header-group">
          <font-awesome-icon icon="fa-solid fa-pen" size="4x" style="color:#401A0E;" />
          <h2><span class="underline purple"></span>Graphic<br>Design</h2>
        </div>
        <p>Skilled in developing original graphic designs for web, social media, or print.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expertise-page {
  padding: 10vw 0vw;
  margin: 0px 16px;
}

.expertise-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.expertise-item {
  width: 33.3333%;
  border: 4px solid #FF835B;
  border-right: 0px;
  padding: 48px 32px 32px 32px;
}

h2 {
  font-size: 2.6vw;
  line-height: 2.6vw;
}

.header-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2vw;
  padding-bottom: 1vw;
}

.underline {
  position: absolute;
  width: 9vw;
  height: .7vw;
  z-index: -1;
  background: #FFCDCD;
  transform: translateY(1.6vw) translateX(-.3vw);
}

.pink {
  background: #FFCDCD;
}

.green {
  background: #CEDDC2;
}

.purple {
  background: #E0CDFF;
  width: 7.5vw;
}

.three {
  border-right: 4px solid #FF835B
}</style>
