<template>
   <div class="expertise-page">
        <h4>Expertise</h4>
        <div class="expertise-flex">
          <div class="expertise-item one">
            <div class="header-group">
              <font-awesome-icon icon="fa-solid fa-code-branch" size="4x" style="color:#401A0E;" />
              <h2><span class="underline green"></span>Software<br>Dev</h2>
            </div>
            <p>Experienced in both functional and OOP: Java, Python, and JavaScript.</p>
          </div>
          <div class="expertise-item two">
            <div class="header-group">
              <font-awesome-icon icon="fa-solid fa-laptop-code" size="4x" style="color:#401A0E;"/>
              <h2><span class="underline pink"></span>FrontEnd<br>DEV</h2>
            </div>
            <p>Passionate about UI/UX. Over 2 years of experience in HTML, CSS, JS, and VueJS framework.</p>
          </div>
          <div class="expertise-item three">
            <div class="header-group">
              <font-awesome-icon icon="fa-solid fa-pen" size="4x" style="color:#401A0E;"/>
              <h2><span class="underline purple"></span>Graphic<br>Design</h2>
            </div>
            <p>Skilled in developing original graphic designs for web, social media, or print.</p>
          </div>
        </div>
    </div>
</template>

<style scoped>

.expertise-page {
  min-height: 100vh;
  padding-top: 160px;
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
  border-right:0px;
  padding: 48px 32px 32px 32px;
}
p{
  font-size: 18px;
}
h2{
  font-size: 40px;
  line-height: 40px;
}
.header-group{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 14px;
}
.underline{
    position: absolute;
    width: 138px;
    height: 10px;
    z-index: -1;
    background: #FFCDCD;
    transform: translateY(26px) translateX(-4px);
}
.pink {
  background: #FFCDCD;
}
.green {
  background: #CEDDC2;
}
.purple {
  background: #E0CDFF;
  width: 117px;
}

.three{
  border-right: 4px solid #FF835B
}
</style>
