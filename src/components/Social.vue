<template>
    <div class="social">
        <a href="https://twitter.com/Shun_Harutaro"><font-awesome-icon :icon="['fab', 'twitter']" class="icon" /></a>
        <a href="https://github.com/Shun-Harutaro"><font-awesome-icon :icon="['fab', 'github']" class="icon" /></a>
        <a href="https://www.instagram.com/shun_harutaro/"><font-awesome-icon :icon="['fab', 'instagram']" class="icon" /></a>
    </div>
</template>

<style>
    .social .icon{
        width: 30px;
        height: 30px;
        margin: 0 20px;
    }
    .social a{
        color: #2c3e50;
        text-decoration: none
    }
    .social a:hover{
        opacity: 0.5;
    }
</style>