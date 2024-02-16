<template>
    <div class="page">
        <div class="group">
            <div class="intro">
                <h1>hi!</h1>
                <p>Thanks for making it all the way down here! I'm Doyoon, a first-year student studying <span class="bold">Computer Science</span> at the University of Waterloo.
                <br>
                <br>
                I am passionate about web development and graphic design, and I am always seeking new opportunities to learn about our relationship with the digital world.
                <br>
                <br>
                Besides my work, you can commonly find me playing my trumpet in jazz bands, trying to find bargains at the local thrift store, or baking up one of my signature cakes!
                </p>
            </div>
            <img src="../assets/doyoon-photo.jpg">
        </div>
        <div class="more-info">
            <h3>Want to see more?</h3>
            <div class="socials">
                <div class="links">
                    <a href="https://www.linkedin.com/in/doyoon-kim-16378a152/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">linkedin</a>
                    <div class="underline"></div>
                </div>
                <div class="links">
                    <a href="https://doyoon-kim-resume.tiiny.site/" target="_blank" rel="noopener noreferrer">resume</a>
                    <div class="underline"></div>
                </div>
                <div class="links">
                    <a href="mailto:kimdoyo424@gmail.com">email</a>
                    <div class="underline"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page{
}
.group{
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 50px;
}
img{
    object-fit: cover;
    max-width: 350px;
    height:100%;
    border: 4px solid #FF835B;
    border-radius: 15px;
}
.bold{ 
    font-weight: bold;
}
.more-info{
    padding-top:200px;
}
.socials{
    display: flex;
    gap: 16px;
}

a {
    color: #3C1108;
    font-size: 18px;
    line-height: 24px;
    font-family: "Poppins";
    text-decoration: none;
    transition: 0.1s;
}

.underline {
    background-color: #FF6838;
    height:2px;
    width: 100%;
    opacity: 0;
    transition: 0.2s;
}

.links:hover a{
    color: #FF6838;
}

.links:hover .underline{
    opacity: 1;
}
</style>