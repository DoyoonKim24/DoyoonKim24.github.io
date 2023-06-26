<template>
    <div class="page">
        <div class="projects">
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 1</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 2</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 3</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 4</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 5</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
            <div class="project-container">
                <img src="../assets/sample.webp">
                <div class="project-description">
                    <h2>Project 6</h2>
                    <h3 class="project-subject">Web Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
img {
    max-width: 100%;
    border-radius: 10px 10px 0px 0px;
}
.page {
    min-height: 100vh;
    padding-top: 100px;

}
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 32px;
}

.project-container {
    max-height: 300px;
    margin: 0px 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.project-description {
    background-color: #FFEBA4;
    padding: 20px 20px 0px 20px;
    border-radius: 0px 0px 10px 10px;
}

.project-subject {
    transition: 0.2s;
}

.show-project {
    opacity: 0;
    transition: 0.2s;
}

.project-container:hover .project-subject {
    opacity: 0;
    transform: translateY(-20px);
}

.project-container:hover .show-project {
    opacity: 1;
    transform: translateY(-20px);
}
</style>

