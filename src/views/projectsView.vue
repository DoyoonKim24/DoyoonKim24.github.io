<template>
    <div class="page">
        <h4 class="section-header">Side Projects</h4>
        <div class="projects">
            <a href="/accent-ace" class="project-container">
                <div class="img-cont">
                    <img src="../assets/tapy-co-poster.jpg">
                </div>
                <div class="project-description">
                    <h2>Monkey Type</h2>
                    <h3 class="project-subject">Software Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </a>
            <a href="/accent-ace" class="project-container">
                <div class="img-cont">
                    <img src="../assets/tapy-co-poster.jpg">
                </div>
                <div class="project-description">
                    <h2>Accent Ace</h2>
                    <h3 class="project-subject">Software Development</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </a>
            <a href="/accent-ace" class="project-container">
                <div class="img-cont">
                    <img src="../assets/tapy-co-poster.jpg">
                </div>
                <div class="project-description">
                    <h2>Relay for Life</h2>
                    <h3 class="project-subject">Graphic Design</h3>
                    <h3 class="show-project">Show Project</h3>
                </div>
            </a>
        </div>
    </div>
</template>


<style scoped>

a {
    text-decoration: none;
}
.page {
    padding-bottom: 50px;
}
.img-cont{
    border-radius: 10px 10px 0px 0px;
    height: 300px;
    overflow: hidden;
}
img {
    max-width: 100%;
    overflow: hidden;
    transition: 0.2s;
}
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5vw;
}

.project-container {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.project-description {
    background-color: #FFD9CD;
    padding: 20px 20px 5px 30px;
    border-radius: 0px 0px 10px 10px;
}

h2{
    font-size: 40px;
    color: #612F24;
}

.project-subject {
    font-size: 16px;
    color: #8E5F55;
    transition: 0.2s;
}

.show-project {
    font-size: 16px;
    color: #8E5F55;
    opacity: 0;
    transition: 0.2s;
}

.project-container:hover .project-subject {
    opacity: 0;
    transform: translateY(-20px);
}

.project-container:hover .show-project {
    opacity: 1;
    transform: translateY(-25px);
}
.project-container:hover img {
    transform: scale(1.2);
}

</style>

