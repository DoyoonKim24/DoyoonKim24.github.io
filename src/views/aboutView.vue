<template>
    <div class="page">
        <div class="group">
            <div class="intro">
                <h1>hi!</h1>
                <p>Thanks for making it all the way down here! I'm Doyoon, a first-year student studying <span class="bold">Computer Science</span> at the University of Waterloo.
                <br>
                <br>
                I am passionate about software development and graphic design, and I am always seeking new opportunities to learn about our relationship with the digital world.
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
                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:c4e2477f-a348-4028-9db5-06ed5d1a28cd" target="_blank" rel="noopener noreferrer">resume</a>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 8vw;
    padding-bottom: 2vw;
    height: 100vh;
}
.group{
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 3vw;
}
img{
    object-fit: cover;
    width: 22vw;
    border: 4px solid #FF835B;
    border-radius: 15px;
}
.bold{ 
    font-weight: bold;
}
.socials{
    display: flex;
    gap: 1vw;
}

a {
    color: #3C1108;
    font-size: 1.2vw;
    line-height: 2.2vw;
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