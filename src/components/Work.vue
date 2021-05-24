<template>
    <div id="work">
    <h1 class="content-title"><font-awesome-icon icon="code-branch"/> Works</h1>
    <div class="part">
        <img src="../assets/hakuyo.png" alt="Hakuyo-Warai">
        <div class="content">
            <h3>HakuyoWarai</h3>
            <p>初の集団開発</p>
            <a href="https://github.com/Chaha1n/Hakuyo-Warai">GitHub</a>
            -
            <a href="https://hakuyo-warai.now.sh/">Site</a>
        </div>
    </div>
    <div class="part">
        <img src="../assets/train.jpg" alt="OhayoTrainbot">
        <div class="content">
            <h3>OhayoTrainbot</h3>
            <p>TwitterAPIとDBに初めて触れた</p>
            <a href="https://github.com/shun-harutaro/OhayoTrainbot">GitHub</a>
        </div>
    </div>
    <div class="part">
        <img src="../assets/speaker.png" alt="Homework-Smartspeaker">
        <div class="content">
            <h3>Homework-Smartspeaker</h3>
            <p>TimeTreeAPIとNode.js使った</p>
            <a href="https://github.com/shun-harutaro/Homework-Smartspeaker">GitHub</a>
        </div>
    </div>
    <div class="part">
        <img src="../assets/katsu.png" alt="Katsupriner">
        <div class="content">
            <h3>Katsupriner</h3>
            <p>Vue.jsとサーバレスと</p>
            <a href="https://github.com/shun-harutaro/Katsupriner">GitHub</a>
            -
            <a href="https://katsupriner.web.app/login">Site</a>
        </div>
    </div>
    <div class="part">
        <img src="../assets/keys.jpg" alt="ExtentionKeys">
        <div class="content">
            <h3>ExtentionKeys</h3>
            <p>素のJSで書く拡張機能</p>
            <a href="https://github.com/shun-harutaro/ExtentionKeys">GitHub</a>
        </div>
    </div>
    <div class="part">
        <img src="../assets/tosho.png" alt="tosho-card">
        <div class="content">
            <h3>tosho-card</h3>
            <p>seleniumとtesseract.js</p>
            <a href="https://github.com/shun-harutaro/tosho-card">GitHub</a>
            -
            <a href="https://tosho-card.web.app/">Site</a>
        </div>
    </div>
    </div>
</template>

<style>
    #work .part{
        position: relative;
    }
    #work img{
        width: 200px;
        opacity: 0.5;
    }
    #work .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }
    @media screen and (max-width: 768px) {
        #work img {
            width: 150px;
        }
    }
</style>