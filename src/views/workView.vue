<template>
    <div class="work">
        <div class="pinkSquare">
            <img src="../assets/wonsulting-logo.png">
        </div>
        <div class="descSquare">
            <h2>Product Developer</h2>
            <h3>Feb 2022 - Jun 2023</h3>
            <p>Collaborated with a team of 5 to work through all stages of product development to develop an AI powered
               resume building tool called ResumAI that launched in mid-October and currently has over 300 000 users.
            </p>
        </div>
        <div class="descSquare rightAlign">
            <h2>Software Developer Intern</h2>
            <h3>Jul 2022 - Sep 2022</h3>
            <p class="rightAlign">Created dozens of end-to-end and unit tests using
                Cypress and Vue Test Utils respectively to reach 100% test coverage on two of the largest repos for
                AutoVerify.</p>
        </div>
        <div class="pinkSquare">
            <img src="../assets/autoverify-logo.png">
        </div>
        <div class="pinkSquare">
            <img src="../assets/mobials-logo.png">
        </div>
        <div class="descSquare">
            <h2>Software Developer Intern</h2>
            <h3>Feb 2022 - Jul 2022</h3>
            <p>For my high school co-op placement, I worked at Mobials to redeveloped the corporate website using
                Webflow, program a customer map application, and develop a OKR tracker. </p>
        </div>
    </div>
</template>


<style scoped>
img {
    width: 85%;
}


.work {
    padding-top: 7.5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.pinkSquare {
    background-color: #FFD9CD;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;

}

.descSquare {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 50px;
}

.rightAlign {
    align-items: end;
    text-align: end;
}

h3 {
    padding-bottom: 5px;
}
</style>