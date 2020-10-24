<template>
  <div id="skill">
    <h1 class="content-title"><font-awesome-icon icon="code"/> Skill</h1>
    <div class="flont">
      <div class="lang">
        <font-awesome-icon :icon="['fab', 'html5']" class="icon" />
        <p>HTML</p>
        <span class="tag">Pug</span>
      </div>
      <div class="lang">
        <font-awesome-icon :icon="['fab', 'css3-alt']" class="icon" />
        <p>CSS</p>
        <span class="tag">tailwind</span>
      </div>
      <div class="lang">
        <font-awesome-icon :icon="['fab', 'js']" class="icon" />
        <p>JavaScript</p>
        <span class="tag">JQuery</span>
        <span class="tag">Node.js</span>
        <span class="tag">Express</span>
        <span class="tag">Vue.js</span>
      </div>
    </div>
    <div class="back">
      <div class="lang clear">
        <font-awesome-icon :icon="['fab', 'python']" class="icon" />
        <p>Python</p>
        <span class="tag">Flask</span>
      </div>
      <div class="lang">
        <font-awesome-icon :icon="['fab', 'swift']" class="icon" />
        <p>Swift</p>
        <span class="tag">Xcode</span>
        <span class="tag">UIKit</span>
      </div>
      <div class="lang">
        <font-awesome-icon icon="database" class="icon"/>
        <p>SQL</p>
        <span class="tag">PostgreSQL</span>
      </div>
    </div>
    <div class="tool clear">
      <div>Firebase/GCP---Firestore,Function,hosting</div>
    </div>
  </div>
</template>


<style>
.tag{
  display: block;
  border: solid 1px;
  border-radius: 15px;
  width: 50px;
  margin: auto;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
}
#skill .icon{
  height: 50px;
  width: 50px;
}
#skill{
  padding: 50px;
  display: inline-block;
}
#skill .lang{
  float: left;
  margin: 30px;
  width: 70px;
  padding: 4px;
  text-align: center;
}
.clear {
  clear: both;
}
@media screen and (min-width: 768px) {
  #skill .lang {
    margin: 40px;
    padding: 10px;
    width: 100px;
    font-size: 16px;
  }
}
</style>
